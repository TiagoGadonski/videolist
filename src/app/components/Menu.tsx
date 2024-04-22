import React, { useState } from 'react';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import CountryFlag from 'react-country-flag';

interface MenuProps {
  setLanguage: (language: string) => void;
  initialLanguage: string;
}

const Menu: React.FC<MenuProps> = ({ setLanguage, initialLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  const handleSelect = (language: string) => {
    setSelectedLanguage(language);
    setLanguage(language);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="bg-secondary mb-3 d-flex justify-content-between">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand className="" href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Videos</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          </Nav>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <CountryFlag countryCode={selectedLanguage === 'pt-BR' ? 'BR' : selectedLanguage === 'fr-FR' ? 'FR' : 'US'} svg />
                {' '}{selectedLanguage}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSelect('en-US')}>
                  <CountryFlag countryCode="US" svg /> US
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelect('pt-BR')}>
                  <CountryFlag countryCode="BR" svg /> PT
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelect('fr-FR')}>
                  <CountryFlag countryCode="FR" svg /> FR
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
            <Nav.Link href="#signin">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
