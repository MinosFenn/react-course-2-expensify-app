import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; // manage all navigation through website visit react-router-doc

const Header = () => (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expenses</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
  );

export default Header;