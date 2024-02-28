// NavigationMenu.jsx
import React from "react";
import "./homeMenu.css"; // Import the CSS file here
import { useState } from "react";
import {
  CNavbarNav,
  CNavLink,
  CNavbar,
  CNavItem,
  CDropdownItem,
  CDropdownDivider,
  CDropdownMenu,
  CDropdownToggle,
  CDropdown,
  CContainer,
  CCollapse,
  CForm,
  CFormInput,
  CButton,
  CNavbarBrand,
  CNavbarToggler,
} from "@coreui/react";

const NavigationMenu = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light nav-menu">
        <CContainer fluid>
          <CNavbarBrand className="nav-title" href="#">
            Discover our Projects
          </CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav component="nav">
              <CNavLink className="nav-link" href="#">
                Houses & Villas
              </CNavLink>
              <CNavLink className="nav-link" href="#">
                Apartments
              </CNavLink>
              <CNavLink className="nav-link" href="#">
                Buildings
              </CNavLink>
              <CNavLink className="nav-link" href="#">
                Corporate
              </CNavLink>
              <CNavLink className="nav-link" href="#">
                All Projects
              </CNavLink>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
  //   return (
  //     <div className="nav-menu">
  //       <h1 className="nav-title">Discover our Projects</h1>
  //       <div className='nav-links'>
  //         <a href="#houses-villas" className="nav-link">Houses & Villas</a>
  //         <a href="#apartments" className="nav-link">Apartments</a>
  //         <a href="#buildings" className="nav-link">Buildings</a>
  //         <a href="#corporate" className="nav-link">Corporate</a>
  //         <a href="#all-projects" className="nav-link">All Projects</a>
  //       </div>
  //     </div>
  //   );
};

export default NavigationMenu;
