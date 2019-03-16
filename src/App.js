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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      isAuthenticated: false,
      isAdmin: false,
      isLoading: true,
      cartOrders: [],
    }

    this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
    this.logout = this.logout.bind(this);
    this.addOrder = this.addOrder.bind(this);
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
    localStorage.setItem("cartOrders", JSON.stringify([]));
  }
  addOrder(kebab) {
    let cartOrders = JSON.parse(localStorage.getItem("cartOrders"));
    let kebabIsInCart = cartOrders.find((o) => o._id === kebab._id) !== undefined;

    if (!kebabIsInCart) {
      kebab.qty = "1";
      cartOrders.push(kebab);
      localStorage.setItem("cartOrders", JSON.stringify(cartOrders));
      this.props.history.push('/cart');
      return;
    }
    toastr.error("Kebab already in cart");
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
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      isAdmin: this.state.isAdmin,
      username: this.state.username,
      userHasAuthenticated: this.userHasAuthenticated,
      logout: this.logout,
      addOrder: this.addOrder,
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