import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/employees';

export const getAllEmployees = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    console.log("emp data"+response);
    return response.data.content;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const deleteEmployee = async (employeeID) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${employeeID}`);
    console.log("delete req", response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};

export const updateEmployee = async (employee) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${employee.empID}`, employee);
    return response.data;
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};

export const searchEmployee = async (employeeID) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${employeeID}`);
    return response.data.content;
  } catch (error) {
    console.error('Error searching employee:', error);
    throw error;
  }
};
// http://localhost:8080/api/employees
export const createEmployee = async (employee) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, employee);
    return response.data;
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};