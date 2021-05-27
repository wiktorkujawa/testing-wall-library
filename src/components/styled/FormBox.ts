import styled from "styled-components/macro";

interface MyProps {
  color?: "primary" | "error" | "brand" | "accent" | "light";
  size?: "normal" | "small";
}

const FormBox = styled.div<MyProps>`

  display: flex;
  justify-content: center;
  margin: 4rem;
  padding: 2rem;

  border: ${(p) => { return `double 4px ${p.theme.primary}`}};

  border-radius: 25px;

  /* color: ${(p) => {
    if (p.color === "primary") {
      return p.theme.primary;
    }
    if (p.color === "error") {
      return p.theme.error;
    }
    if (p.color === "brand") {
      return p.theme.brand;
    }
    if (p.color === "light") {
      return p.theme.light;
    }
    if (p.color === "accent") {
      return p.theme.accent;
    }
    // else p.color = "primary"
  }};
  font-size: ${(p) => {
    if (p.size === "normal") {
      return "16px";
    }
    if (p.size === "small") {
      return "10px";
    }
  }};
  text-align: left; */
`;

FormBox.defaultProps = {
  color: "primary",
  size: "normal"
};

export default FormBox;