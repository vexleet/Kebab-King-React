import React, { Component } from 'react';
import Footer from './components/Common/Footer';
import Navigation from './components/Common/Navigation';
import { withRouter, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Cart from './components/Cart/Cart';
import UserOrders from './components/Orders/UserOrders';
import AdminOrders from './components/Orders/AdminOrders';
import OrderDetailsPage from './components/Orders/OrderDetailsPage';
import KebabDetails from './components/KebabDetails/KebabPage';
import Create from './components/Create/Create';
import NotFound from './components/Common/NotFound/NotFound';
import Loading from './components/Common/Loading/Loading';
import AppliedRoute from './components/Routes/AppliedRoute';
import AdminRoute from './components/Routes/AdminRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import Edit from './components/Edit/Edit';
import toastr from 'toastr';
import { getKebabs, getOrders, pendingOrders, getStats } from './api/remote';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      isAuthenticated: false,
      isAdmin: false,
      isLoading: true,
      kebabs: [],
      orders: [],
      cartOrders: [],
      stats: [],
    }

    this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
    this.logout = this.logout.bind(this);
    this.updateKebabsState = this.updateKebabsState.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
    this.changeQuantityOfProduct = this.changeQuantityOfProduct.bind(this);
    this.clearCartState = this.clearCartState.bind(this);
    this.updateOrdersState = this.updateOrdersState.bind(this);
    this.updateStatsState = this.updateStatsState.bind(this);
  }

  userHasAuthenticated(authenticated, username, token, isAdmin) {
    this.setState({
      username: username,
      isAuthenticated: authenticated,
      isAdmin: isAdmin,
    });

    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", isAdmin);

    this.updateStatsState();
    this.updateOrdersState(isAdmin);
  }

  updateKebabsState() {
    getKebabs().then((kebabs) => this.setState({ kebabs }));
  }

  updateStatsState() {
    getStats().then((s) => this.setState({ stats: s }));
  }

  updateOrdersState(isAdmin = false) {
    if (isAdmin) {
      pendingOrders().then((orders) => this.setState({ orders }));
    }
    else {
      getOrders().then((orders) => this.setState({ orders }));
    }
  }

  clearCartState() {
    this.setState({ cartOrders: [] });
  }

  addOrder(kebab) {
    let cartOrders = this.state.cartOrders.slice();

    if (cartOrders.indexOf(kebab) < 0) {
      kebab.qty = "1";
      cartOrders.push(kebab);
      this.setState({ cartOrders: cartOrders });
      this.props.history.push('/cart');
      return;
    }
    toastr.error("Kebab already in cart");
  }

  removeOrder(order) {
    let cartOrders = this.state.cartOrders.slice();
    let indexOfOrder = cartOrders.indexOf(order);
    cartOrders.splice(indexOfOrder, 1);
    this.setState({ cartOrders: cartOrders });
  }

  changeQuantityOfProduct(order, qty) {
    let cartOrders = this.state.cartOrders.slice();
    let indexOfOrder = cartOrders.indexOf(order);
    cartOrders[indexOfOrder].qty = qty;
    this.setState({ cartOrders: cartOrders });
  }

  logout() {
    localStorage.clear();
    //TODO: Fix logout
    this.setState({
      username: "",
      isAuthenticated: false,
      isAdmin: false,
    });
    toastr.success("You have successfully logged out")
    this.props.history.push("/login");
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      let username = localStorage.getItem("username");
      let isAdmin = localStorage.getItem("isAdmin") === "true";

      this.userHasAuthenticated(true, username, token, isAdmin);
    }
    this.setState({ isLoading: false });
    this.updateKebabsState();
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      isAdmin: this.state.isAdmin,
      username: this.state.username,
      kebabs: this.state.kebabs,
      orders: this.state.orders,
      cartOrders: this.state.cartOrders,
      stats: this.state.stats,
      userHasAuthenticated: this.userHasAuthenticated,
      logout: this.logout,
      updateKebabsState: this.updateKebabsState,
      addOrder: this.addOrder,
      removeOrder: this.removeOrder,
      changeQuantityOfProduct: this.changeQuantityOfProduct,
      clearCartState: this.clearCartState,
      updateOrdersState: this.updateOrdersState,
      updateStatsState: this.updateStatsState,
    };

    if (this.state.isLoading) {
      return (
        <div className="App">
          <Navigation {...childProps} />
          <Loading />
          <Footer />
        </div>
      )
    }

    return (
      <div className="App">
        <Navigation {...childProps} />
        <Switch>
          <AppliedRoute exact path='/' component={Home} props={childProps} />
          <AppliedRoute exact path='/menu' component={Menu} props={childProps} />
          <AppliedRoute exact path='/menu/:page' component={Menu} props={childProps} />
          <AppliedRoute path='/register' component={Register} props={childProps} />
          <AppliedRoute path='/login' component={Login} props={childProps} />
          <AdminRoute path='/admin/orders' component={AdminOrders} props={childProps} />
          <AdminRoute path='/create' component={Create} props={childProps} />
          <AdminRoute path='/edit/:id' component={Edit} props={childProps} />
          <PrivateRoute path='/cart' component={Cart} props={childProps} />
          <PrivateRoute exact path='/orders' component={UserOrders} props={childProps} />
          <PrivateRoute exact path='/orders/:id' component={OrderDetailsPage} props={childProps} />
          <PrivateRoute path='/details/:id' component={KebabDetails} props={childProps} />
          <AppliedRoute component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);