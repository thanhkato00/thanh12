import React from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Item({item}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={item.url}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.name}
            </Card.Text>
            <Card.Text>
              {item.price}
            </Card.Text>

            <Form.Group controlId="sizeSelect">
              <Form.Label>Chọn Size</Form.Label>
              <Form.Control as="select">
                <option>Size 265</option>
                <option>Size 270</option>
                <option>Size 275</option>
                {/* Thêm các tùy chọn size khác nếu cần */}
              </Form.Control>
            </Form.Group>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
    </div>
  );
}

export default Item;
