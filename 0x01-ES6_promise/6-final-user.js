import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const res = [];
  try {
    const user = await signUpUser(firstName, lastName);
    res.push({ status: 'fulfilled', value: user });
  } catch (err) {
    res.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  try {
    const upload = await uploadPhoto(fileName);
    res.push({ status: 'fulfilled', value: upload });
  } catch (err) {
    res.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  return res;
}
