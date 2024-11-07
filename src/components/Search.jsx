import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Search({setSearch}) {
    function handleSubmitSearch(e){
        e.preventDefault()
        setSearch({title:e.target.title.value,category:e.target.category.value})

    }
  return (
    <div>
        <Form onSubmit={handleSubmitSearch} style={{width:"50%",padding:"20px",margin:"auto"}}>
      <Form.Control size="lg" type="text" placeholder="title" name="title"  />
      <br />
      <Form.Select aria-label="Default select example" name="category">
        <option value={""}>all</option>
        <option value="horror">horror</option>
        <option value="sci-fi">sci-fi</option>
        <option value="romance">romance</option>
        <option value={"action"}>action</option>
      </Form.Select>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    </div>
  );
}

export default Search;
