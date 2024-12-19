import axios from 'axios';

const getRequest = async (url, params = {}) => {
  try {
    const response = await axios.get(url, { params });
    return response.data; 
  } catch (error) {
    console.error('GET Request Error:', error);
    throw error;
  }
};

const postRequest = async (url, data = {}) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error('POST Request Error:', error);
    throw error;
  }
};

// PUT Function
const putRequest = async (url, data = {}) => {
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    console.error('PUT Request Error:', error);
    throw error;
  }
};

// DELETE Function
const deleteRequest = async (url, params = {}) => {
  try {
    const response = await axios.delete(url, { params });
    return response.data;
  } catch (error) {
    console.error('DELETE Request Error:', error);
    throw error;
  }
};

export { getRequest, postRequest, putRequest, deleteRequest };
