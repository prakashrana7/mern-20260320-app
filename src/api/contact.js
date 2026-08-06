import config from "@/config";
import axios from "axios";
import api from "./api";

//public API
export const sendContactMessage = async (data) => {
  const response = await axios.post(
    `${config.apiUrl}/api/contact`,
    data
  );

  return response.data;
};

//admin APIs
export const getContacts = async () => {
  const response = await api.get("/api/contact");
  return response.data;
};

export const getContactById = async (id) => {
  const response = await api.get(`/api/contact/${id}`);
  return response.data;
};

export const markAsRead = async (id) => {
  return await api.patch(`/api/contact/${id}/read`);
};

export const deleteContact = async (id) => {
  return await api.delete(`/api/contact/${id}`);
};

export const getContactCount = async () => {
  const response = await api.get("/api/contact/count");
  return response.data;
};