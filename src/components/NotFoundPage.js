import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; // manage all navigation through website visit react-router-doc

  
const NotFoundPage = () => (
    <div>
      404! - <Link to="/">HOME</Link>
    </div>
  );

export default NotFoundPage;