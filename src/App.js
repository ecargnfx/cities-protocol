import logo from './logo.svg';
import './App.css';

import {Navbar, Nav, NavDropdown, Button, Card, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Cities Protocol</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">0</Nav.Link>
            <Nav.Link href="#link">0/8</Nav.Link>
            <NavDropdown title="Eng" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Spanish</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main className="m-4">
      <Button className="mb-4">Connect Wallet to Unlock</Button>
      <Card className="gray mb-4">
        <Card.Body>
          <Card.Text>
            TARO in wallet
          </Card.Text>
          <Card.Title className="text-large">Locked</Card.Title>
          <Card.Text>
            TARO to harvest
          </Card.Text>
          <Button disabled block>Claim Tokens</Button>
        </Card.Body>
      </Card>
      <Card className="gray mb-4">
        <Card.Body>
          <Card.Text>
            Proposals
          </Card.Text>
          <Card.Title className="text-large">Locked</Card.Title>
          <Button disabled block>Vote</Button>
        </Card.Body>
      </Card>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </main>
    </div>
  );
}

export default App;
