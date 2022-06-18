import axios from 'axios';

const ApiContent = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export { ApiContent };
