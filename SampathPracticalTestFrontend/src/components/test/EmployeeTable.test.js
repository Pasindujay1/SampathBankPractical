import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import EmployeeTable from '../EmployeeTable';
import { getAllEmployees } from '../../Services/EmployeeService';

jest.mock('../../Services/EmployeeService');

const mockEmployees = [
  { empID: '1', firstName: 'John', lastName: 'Doe', email: 'john@example.com', salary: '50000' },
//   { empID: '2', firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', salary: '60000' },
];

test('displays employees', async () => {
  getAllEmployees.mockResolvedValue(mockEmployees);

  render(<EmployeeTable />);

  await waitFor(() => {
    expect(screen.getByText('John')).toBeInTheDocument();
    // expect(screen.getByText('Jane')).toBeInTheDocument();
  });
});