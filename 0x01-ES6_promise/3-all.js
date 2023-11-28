import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([body, fullName]) => console.log(`${body.body} ${fullName.firstName} ${fullName.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
