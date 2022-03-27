import styled from "styled-components";

export const Header = styled.h1`
margin-top: 0;
color: #516346;
`
export const StyledLogo = styled.img`
margin-top: 0;
margin-bottom: 20px;
max-height: 50px;
max-width: 50px;
cursor: pointer;

&:active {
  transform: translateY(1px);
}
`
export const StyledHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const Button = styled.button`
border: solid 1px #aaa;
background-color: #6f8263;
color: #61c24f;
border-radius: 6px;
padding: 6px 8px;
font-size: 1.5em;
cursor: pointer;

&:hover {
  background-color: #516346;
}

&:active {
  background-color: #516346;
  transform: translateY(1px);
}
`