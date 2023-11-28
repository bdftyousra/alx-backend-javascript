import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    return { photo: await uploadPhoto(), user: await createUser() };
  } catch (error) {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
