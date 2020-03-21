import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './header.scss'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeartbeat, faTv, faRetweet } from '@fortawesome/free-solid-svg-icons';

const links = [
  { href: '/home', text: 'Home', icon : faHome },
  { href: '/tips', text: 'Quarantine And Chill', icon: faTv },
  { href: '/healthcare', text: 'Health Care', icon: faHeartbeat },
  { href: '/blog', text: 'Quarantine Stories', icon: faRetweet }
];

const createNavItem = ({ href, text, className, icon }) => (
  <NavItem>
    <NavLink tag={Link} to={href} className={className}><FontAwesomeIcon style={{ fontSize: "22px", marginLeft: "10px", marginRight: "5px", marginTop: "6px"}} icon={icon} />{text}</NavLink>
  </NavItem>
);

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar light expand="md" className="nav-color">
          <NavbarBrand href="/" className="brand-name">SURVIVING HOME QUARANTINE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
