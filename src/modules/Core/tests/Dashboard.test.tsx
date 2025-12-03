import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';
import '@testing-library/jest-dom';

describe('Dashboard Component (MVP Placeholder)', () => {
  it('renders the main dashboard heading', () => {
    // Renders the component into a virtual DOM
    render(<Dashboard />);

    // Asserts that the primary heading text is present
    expect(screen.getByText(/Welcome to the CRM Dashboard/i)).toBeInTheDocument();
  });

  it('renders the core view by data-testid', () => {
    render(<Dashboard />);

    // Asserts that the root element with the test ID is present
    expect(screen.getByTestId('dashboard-view')).toBeInTheDocument();
  });

  it('displays the KPI placeholder text', () => {
    render(<Dashboard />);

    // Asserts that the placeholder paragraph text is present
    expect(screen.getByText(/Your primary KPIs go here./i)).toBeInTheDocument();
  });
});
