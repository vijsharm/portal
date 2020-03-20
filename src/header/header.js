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

const links = [
  { href: '/home', text: 'Home' },
  { href: '/tips', text: 'Activities Amidst COVID-19' },
  { href: '/healthcare', text: 'Health Care Tips' },
  { href: '/blog', text: 'Share Your Stories' }
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink tag={Link} to={href} className={className}>{text}</NavLink>
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
