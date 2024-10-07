import { jwtDecode } from 'jwt-decode';

const decode = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.log(`Invalid token: ${error}`);
  }
};

export default decode;
