import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './header.scss'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeartbeat, faTv, faRetweet, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Beats from 'assets/images/beats.svg';

export default class Header extends Component {
  state = {
    links: [
      { href: '/home', text: 'Home', icon : faHome },
      { href: '/tips', text: 'Quarantine And Chill', icon: faTv, dropdown: true, options: ['Prime Videos', 'Netflix', 'Other Apps', 'Books'] },
      { href: '/healthcare', text: 'Health Care', icon: faHeartbeat },
      { href: '/blog', text: 'Quarantine Stories', icon: faRetweet }
    ],
    isOpen: false
  };

  createNavItem = ({ href, text, className, icon, dropdown, options }) => {
    return (!dropdown ? <NavItem>
      <NavLink onClick={this.toggle} tag={Link} to={href} className={className}><FontAwesomeIcon style={{ fontSize: "22px", marginLeft: "10px", marginRight: "5px", marginTop: "6px"}} icon={icon} />{text}</NavLink>
    </NavItem> : 
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
        <FontAwesomeIcon style={{ fontSize: "22px", marginLeft: "10px", marginRight: "5px", marginTop: "6px"}} icon={icon} />{text}
        </DropdownToggle>
        <DropdownMenu right>
          {options.map(option => {return (
            <DropdownItem>
              <NavLink onClick={this.toggle} tag={Link} to={href + "?tab=" + option} className={className}><FontAwesomeIcon style={{ fontSize: "22px", marginLeft: "10px", marginRight: "5px", marginTop: "6px"}} icon={faMobileAlt} />{option}</NavLink>
            </DropdownItem>
          )})}
        </DropdownMenu>
      </UncontrolledDropdown>)
  };

  toggle = () => {
    this.setState(prevstate => {
      return {isOpen: !prevstate.isOpen}
    });
  }
  
  render() {
    return (
      <div className="headerBar">
        <Navbar light expand="md" className="nav-color">
          <NavbarBrand href="/" className="brand-name">SURVIVING HOME QUARANTINE<img src={Beats} className="beatsImage d-sm-none"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.state.links.map(this.createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
