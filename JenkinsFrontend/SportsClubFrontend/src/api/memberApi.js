import axios from "axios";

const API_URL = "http://localhost:8080/api/members";

export const getMembers = () => axios.get(API_URL);
export const createMember = (member) => axios.post(API_URL, member);
export const updateMember = (id, member) => axios.put(`${API_URL}/${id}`, member);
export const deleteMember = (id) => axios.delete(`${API_URL}/${id}`);
