import { Magazine as IMagazine, MagazineTypes } from '../types';

const SERVICE_URL = `${process.env.BASE_URL}/magazine`;

async function upload(formData: FormData) {
  const response = await fetch(`${SERVICE_URL}`, {
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

async function getAll(magazineType: MagazineTypes) {
  const response = await fetch(`${SERVICE_URL}/${magazineType}`);

  if (response.status === 200) {
    return response.json();
  }

  throw Error(`Error performing fetch, status was ${response.status}`);
}

async function remove(magazine: IMagazine) {
  const response = await fetch(SERVICE_URL, {
    credentials: 'include',
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ magazine }),
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
  upload,
  getAll,
  remove,
};
