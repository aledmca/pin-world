import React, { useState, useRef } from "react";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #61c24f;
  width: 30rem;
  cursor: "auto";
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: "1rem";
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: "auto";
  cursor: "pointer";
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

export default function Search(props) {
  const [input, setInput] = useState("");
  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = e => {
    e.preventDefault();
    setInput("");
    console.log(`Form was submited with input: ${input}`);

    props.onSearch && props.onSearch(input)
  };

  return (
    <Form
      onClick={() => inputFocus.current.focus()}
      onFocus={() => inputFocus.current.focus()}
      onSubmit={onFormSubmit}
      ref={formRef}
    >
      <Button type="submit" >
        Where?
      </Button>
      <Input
        onChange={e => setInput(e.target.value)}
        ref={inputFocus}
        value={input}
        placeholder="Search for an apartment..."
      />
    </Form>
  );
}