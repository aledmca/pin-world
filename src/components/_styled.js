import styled from "styled-components";

export const StyledNavbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
padding-left: 30px;
padding-right: 30px;
margin-bottom: 20px;
border-radius: 10px;
background-color: #5A6351;
`
export const StyledBrand = styled.h1`
display: flex;
align-items: center;
justify-content: space-between;
color: #78AB46;
text-decoration: none;
`
export const StyledNavItems = styled.h2`
display: flex;
align-items: center;
justify-content: space-between;
`
export const StyledNavItem = styled.span`
color: #78AB46;
text-decoration: none;

&:hover {
  text-decoration: underline;
}
`
export const StyledLogo = styled.img`
margin-top: 0;
max-height: 50px;
max-width: 50px;
cursor: pointer;
margin-right: 10px;

&:active {
  transform: translateY(1px);
}
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
export const StyledBtn = styled.div`
padding: 4px 6px;
margin-top: 4px;
background-color: #bdf4b7;
border: solid 1px #81a97d;
min-width: 30px;
border-radius: 4px;
transition: background-color .2s;
cursor: pointer;

&:hover {
  background-color: yellowgreen;
}

&:active {
  background-color: #81a97d;
  transition: none;
}

&[disabled] {
  background-color: #ddd;
  border-color: #aaa;
}
`