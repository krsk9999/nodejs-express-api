import users from '../database/user';

const getAll = async () => {
  return await users.getAllUsers();
};

const getById = async (userId) => {
  return await users.getUserById(userId);
};

const getByUsername = async (username) => {
  return await users.getUserByUsername(username);
};

const create = async (newUser) => {
  return await users.create(newUser);
};

// const update = async (updatedUserInfo) => {
//   return await user.update(updatedUserInfo);
// };
// const remove = async (userId) => {
//   return await user.remove(userId);
// };

export default{
  getAll,
  getById,
  getByUsername,
  create,
  // update,
  // remove,
};
