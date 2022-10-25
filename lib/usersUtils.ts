import { BASE_URL } from "./constants";

export async function getUserById(id: number) {
  const resp = await fetch(`${BASE_URL}/api/users/${id}`, {
    method: "GET",
  });
  const data = await resp.json();
  return data;
}

export async function deleteUserById(id: number) {
  const resp = await fetch(`${BASE_URL}/api/users/${id}`, {
    method: "DELETE",
  });
  const data = await resp.json();
  return data;
}

export async function addUser(stytch_id: string, name: string, email: string) {
  console.log(`addUser ${name}`, email, stytch_id);
  const resp = await fetch(`${BASE_URL}/api/users`, {
    method: "POST",
    body: JSON.stringify({
      stytch_id,
      name,
      email,
    }),
  });
  console.log({ resp });
  const data = await resp.json();
  console.log({ data });
  return data;
}

export const getUsers = async (token: string) => {
  // we pass the token in because redirects do not immediately update the cookie
  // getUsers is the only function being used after a redirect
  console.log("getUsers token: ", token);
  const resp = await fetch(`${BASE_URL}/api/users?token=${token}`, {
    method: "GET",
  });
  return resp;
};

export const logout = async () => {
  const resp = await fetch("/api/logout", { method: "POST" });
  return resp;
};
