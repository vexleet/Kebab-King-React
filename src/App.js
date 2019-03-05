import React, { Component } from 'react';
import './App.css';
import Footer from './components/Common/Footer';
import Navigation from './components/Common/Navigation';
import { withRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Cart from './components/Cart/Cart';
import UserOrders from './components/Orders/UserOrders';
import AdminOrders from './components/Orders/AdminOrders';
import KebabDetails from './components/KebabDetails/KebabPage';
import AppliedRoute from './components/Routes/AppliedRoute';
import AdminRoute from './components/Routes/AdminRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAdmin: false,
    }
  }
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      isAdmin: this.state.isAdmin,
    };

    return (
      <div className="App">
        <Navigation />
        <AppliedRoute exact path='/' component={Home} props={childProps} />
        <AppliedRoute path='/menu' component={Home} />
        <AppliedRoute path='/register' component={Register} />
        <AppliedRoute path='/login' component={Login} />
        <AdminRoute path='/admin/orders' component={AdminOrders} props={childProps} />
        <PrivateRoute path='/cart' component={Cart} props={childProps} />
        <PrivateRoute path='/orders' component={UserOrders} props={childProps} />
        <PrivateRoute path='/details' component={KebabDetails} props={childProps} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
