import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";

import "./navbar.css"
import { Link } from "react-router-dom";
function NavbarsTop() {
  return (
   


    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{fontSize:'30px'}} >ＳｕｐｐｅｒＳｈｏｓｅ</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Button variant="outline-secondary" as={Link} to="/login">ログイン</Button>
          {' '}<Button variant="outline-secondary">登録</Button>{' '}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarsTop;
