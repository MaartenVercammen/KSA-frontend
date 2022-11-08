const SERVICE_URL = `${process.env.BASE_URL}/auth`;

async function login(formData: FormData) {
  const response = await fetch(`${SERVICE_URL}/login`, {
    credentials: 'include',
    method: 'post',
    body: formData,
  });

  if (response.status === 200) {
    return response.json();
  }

  // TODO extract
  if (response.status === 401) {
    throw Error('Unauthorized!');
  }

  throw Error(`Error performing fetch, status was ${response.status}`);
}

async function logout() {
  const response = await fetch(`${SERVICE_URL}/logout`, {
    credentials: 'include',
    method: 'post',
  });

  if (response.status === 200) {
    return response.json();
  }

  throw Error(`Error performing fetch, status was ${response.status}`);
}

export default {
  login,
  logout,
};
