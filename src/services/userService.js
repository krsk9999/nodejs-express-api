import { getUsers } from '../database/user';

const getAllUsers = async () => {
  return await getUsers();
};

// const get = async (userId) => {
//   return await user.get(userId);
// };
// const create = async (newUser) => {
//   return await user.create(newUser);
// };
// const update = async (updatedUserInfo) => {
//   return await user.update(updatedUserInfo);
// };
// const remove = async (userId) => {
//   return await user.remove(userId);
// };

export {
  getAllUsers,
  // get,
  // create,
  // update,
  // remove,
};
