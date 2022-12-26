import { BASE_URL } from '../../common/BASE_URL';

async function GetProfile(accountname) {
  const token = localStorage.getItem('token');
  try {
    const data = await fetch(BASE_URL + `/profile/${accountname}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    console.log(data);
    const result = await data.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default GetProfile;
