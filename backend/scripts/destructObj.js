const destructUser = (user) => {
  const { password, id, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

const destructTheme = (theme) => {
  const { user_id , _id, ...result } = theme;
  return result;
};

module.exports = { destructUser, destructTheme };
