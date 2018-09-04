import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/HeaderComponent/Header';
import Footer from './components/FooterComponent/Footer';
import Home from './components/HomeComponent/Home';
import SignUp from './components/SignUpComponent/SignUp';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoardComponent/DashBoard';
import Detail from "./components/DetailComponent/Detail";

export default function App() {
  return <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exat path="/login" component={Login} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>;
}