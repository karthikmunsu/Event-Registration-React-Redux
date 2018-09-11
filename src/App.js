import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/HeaderComponent/Header';
import Footer from './components/FooterComponent/Footer';
import Home from './components/HomeComponent/Home';
import SignUp from './components/SignUpComponent/SignUp';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoardComponent/DashBoard';
import CreateEvent from './components/CreateEventComponent/CreateEvent';
import Detail from "./components/DetailComponent/Detail";

export default function App() {
  return <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/signup" component={SignUp} />
          <PrivateRoute exact path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={DashBoard} />
          <PrivateRoute exact path="/createevent" component={CreateEvent} />
          {/* <Route exact path="/dashboard" component={DashBoard} /> */}
          <PrivateRoute path="/detail" component={Detail} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>;
}

export const Auth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);
    setTimeout(cb, 100); // fake async
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);