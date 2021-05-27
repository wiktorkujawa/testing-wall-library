import styled from "styled-components/macro";
import { device } from "./breakpoints";


const FormGroup = styled.div`

@media ${device.tablet} { 
    display: flex;
  }
  
  
`;

export default FormGroup;