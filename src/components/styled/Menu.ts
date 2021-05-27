import styled from "styled-components/macro";

interface MyProps {
  color?: "primary" | "error" | "brand" | "accent" | "light";
  size?: "normal" | "small";
}

const Menu = styled.div<MyProps>`
  width:100%;
  top:0;
  height: 3rem;
  background-color: ${(p)=> p.theme.brand};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`


Menu.defaultProps = {
  color: "primary",
  size: "normal"
};

export default Menu;