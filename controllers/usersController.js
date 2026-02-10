export const getAllUsers = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "All users list",
  });
};

export const postNewUser = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "New User added",
  });
};

export const getUserByID = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "User with specified ID",
  });
};

export const updateUser = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "User updated",
  });
};
