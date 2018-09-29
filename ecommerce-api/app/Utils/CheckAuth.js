const checkAuth = async auth => {
  try {
    await auth.check();
  } catch (error) {
    throw new Error("Missing or invalid jwt token");
  }
};

const checkAdminAuth = async auth => {
  await checkAuth(auth);
  const user = await auth.getUser();
  if (user.role !== "admin") {
    throw new Error("User has no valid permission");
  }
};

module.exports = { checkAuth, checkAdminAuth };
