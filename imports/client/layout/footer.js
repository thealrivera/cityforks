import React from 'react';
import { IndexLink, Link } from 'react-router';

const Footer = () => (
	<nav className="bar bar-tab bar-footer">
	  <Link className="tab-item" activeClassName="active" to="/">
	    <span className="icon icon-home"></span>
	    <span className="tab-label">Places</span>
	  </Link>
	  <Link className="tab-item" activeClassName="active" to="/map">
	    <span className="icon icon-search"></span>
	    <span className="tab-label">Map</span>
	  </Link>
	  <Link className="tab-item" activeClassName="active"to="#">
	    <span className="icon icon-person"></span>
	    <span className="tab-label">Profile</span>
	  </Link>
	  <Link className="tab-item" activeClassName="active" to="/faves">
	    <span className="icon icon-star-filled"></span>
	    <span className="tab-label">Favorites</span>
	  </Link>
	</nav>
)
export default Footer;