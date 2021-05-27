import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  color: ${p => p.theme.primary};
  text-decoration: none;

  margin-left: 1rem;
  opacity: 0.6;
  &:hover {
    text-decoration: underline;
    color: black;
    opacity: 0.6;
  }

  &:active {
    opacity: 0.4;
  }

  &:focus {
    opacity: 1;
  }

`;