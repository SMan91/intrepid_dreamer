export const registerUser = async (username, password, email) => {
  const response = await fetch(`/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    }),
  });
  const result = await response.json();

  return result;
};

export const loginUser = async (username, password) => {
  const response = await fetch(`/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const result = await response.json();
  return result;
};

export const logoutUser = async () => {
  const response = await fetch(`/api/users/logout`, {
    method: "POST",
  });
  const result = await response.json();
  return result;
};

export const fetchMe = async () => {
  const response = await fetch(`/api/users/me`);
  const result = await response.json();
  return result;
};

export const fetchAllUsers = async () => {
  const response = await fetch(`/api/users/all_users`);
  const result = await response.json();
  return result;
};
