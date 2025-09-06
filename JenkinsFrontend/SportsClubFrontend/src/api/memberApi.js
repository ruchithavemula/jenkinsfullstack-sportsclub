import axios from "axios";
import { API_URL } from "../config";

export const getMembers = () => axios.get(API_URL);
export const createMember = (member) => axios.post(API_URL, member);
export const updateMember = (id, member) => axios.put(`${API_URL}/${id}`, member);
export const deleteMember = (id) => axios.delete(`${API_URL}/${id}`);
