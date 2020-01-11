import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchForm = props => {
  return (
    <Form onSubmit={props.handleSubmit} className="search-form">
      <Form.Row>
        <Form.Group controlId="searchBar">
          <Form.Control
            value={props.data}
            onChange={props.handleInputChange}
            type="text"
            placeholder="Search"
          />
        </Form.Group>
        <Button variant="secondary">Submit</Button>
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
