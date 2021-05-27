import styled from 'styled-components/macro';

export const SubmitButton = styled.button`
  color: ${p => p.theme.primary};
  background-color: ${p => p.theme.brand};
  text-decoration: none;
  width:auto;
  border-radius: 15px;
  height: 2.2rem;
  border-width: 0px;
  border-color: #E8E8E8;
  font-weight:bold;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(232,232,232,1);
-moz-box-shadow: 0px 0px 10px 2px rgba(232,232,232,1);
box-shadow: 0px 0px 10px 2px rgba(232,232,232,1);
  
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`;