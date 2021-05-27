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
`;

FormBox.defaultProps = {
  color: "primary",
  size: "normal"
};

export default FormBox;