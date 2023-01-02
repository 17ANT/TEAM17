import { BASE_URL } from '../../common/BASE_URL';

async function getFollowing(accountname) {
  const token = localStorage.getItem('token');

  try {
    const data = await fetch(BASE_URL + `/profile/${accountname}/following?limit=100&skip=0`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default getFollowing;
