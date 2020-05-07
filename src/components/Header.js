import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; // manage all navigation through website visit react-router-doc
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expenses</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      <button onClick={startLogout}>Logout</button>
    </header>
  );

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);