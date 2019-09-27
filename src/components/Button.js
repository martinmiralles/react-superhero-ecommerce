import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid yellow;
  border-color: ${props => (props.cart ? "black" : "black")};
  color: black;
  color: ${props => (props.cart ? "green" : "red")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: yellow;
    background: ${props => (props.cart ? "black" : "black")};
    color: ${props => (props.cart ? "green" : "red")};
  }
  &:focus {
    outline: none;
  }
`;
