const user = require('../database/user');

const getAll = async () => {
  return await user.getAll();
};
const get = async (userId) => {
  return await user.get(userId);
};
const create = async (newUser) => {
  return await user.create(newUser);
};
const update = async (updatedUserInfo) => {
  return await user.update(updatedUserInfo);
};
const remove = async (userId) => {
  return await user.remove(userId);
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
};
