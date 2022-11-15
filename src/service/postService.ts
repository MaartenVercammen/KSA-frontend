import { Post } from '../types';

const SERVICE_URL = `${process.env.BASE_URL}/api/post`;

async function getAll() {
  const response = await fetch(SERVICE_URL);

  if (response.status === 200) {
    return response.json();
  }

  throw Error(`Error performing fetch, status was ${response.status}`);
}

async function create(formData: FormData) {
  const response = await fetch(SERVICE_URL, {
    method: 'post',
    credentials: 'include',
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

async function update(formData: FormData) {
  const response = await fetch(SERVICE_URL, {
    method: 'put',
    credentials: 'include',
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

async function remove(post: Post) {
  const response = await fetch(SERVICE_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'delete',
    credentials: 'include',
    body: JSON.stringify({ post }),
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

export default {
  getAll,
  create,
  update,
  remove,
};
