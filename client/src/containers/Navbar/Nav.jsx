import React, { useState } from 'react';
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
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark style={{color:'skyblue'}} expand="md">
        <NavbarBrand href="/">E-Cell Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{position:'absolute',right:'100px'}} navbar>
            <NavItem className="ml-2">
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className="ml-2">
              <NavLink href="/initiatives">Initiatives</NavLink>
            </NavItem>
            <NavItem className="ml-2">
              <NavLink href="/blogs">Blogs</NavLink>
            </NavItem>
            <UncontrolledDropdown className="ml-2" nav inNavbar>
              <DropdownToggle nav caret>
                Partners
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Associates
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Sponsers
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="ml-2" nav inNavbar>
              <DropdownToggle nav caret>
                Team
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                 Present
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Alumni
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="ml-2">
              <NavLink href="/contacts">Contacts</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;