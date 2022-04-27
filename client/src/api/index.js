import axios from "axios";

const API = axios.create();

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// Admin API end point
export const addAdmin = (newAdmin) => API.post("/admins", newAdmin);

export const updateProfile = (updatedAdmin, id) =>
  API.patch(`/admins/${id}`, updatedAdmin);

export const getAdmin = (id) => API.get(`/admins/${id}`);

export const getActivityLogs = (id, size, page) =>
  API.get(`/admins/activity-log/${id}?size=${size}&page=${page}`);

export const changePassword = (id, state) =>
  API.patch(`/admins/change-password/${id}`, state);

// auth API end point
export const login = (adminCredential) => API.post("/auth", adminCredential);

// user API endpoint
export const addUser = (newUser, adminId) =>
  API.post(`/users?adminId=${adminId}`, newUser);

export const updateUser = (id, updatedUser, adminId) =>
  API.patch(`/users/${id}?adminId=${adminId}`, updatedUser);

export const getUsers = (size, page, search) =>
  API.get(`/users?size=${size}&page=${page}&search=${search}`);

export const deleteUser = (id, adminId) =>
  API.patch(`/users/delete/${id}?adminId=${adminId}`);

export const getUser = (id) => API.get(`/users/${id}`);

export const getUsersOnly = () => API.get(`/users/all`);
