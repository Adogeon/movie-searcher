import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchForm = () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group controlId="searchBar">
          <Form.Control type="text" placeholder="Search" />
        </Form.Group>
        <Button variant="secondary">Submit</Button>
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
