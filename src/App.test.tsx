import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

test('renders Basic react(styled) link', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  const linkElement = screen.getByText(/Basic/i);
  expect(linkElement).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const history = createMemoryHistory()
  history.push('/some/bad/route')
  render(
    <Router history={history}>
      <App />
    </Router>
  )

  expect(screen.getByText(/Page not found./i)).toBeInTheDocument()
})
