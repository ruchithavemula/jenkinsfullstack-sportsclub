import React, { useEffect, useState } from "react";
import { getMembers, createMember, updateMember, deleteMember } from "../api/memberApi";

export default function Members() {
  const [members, setMembers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", membership_type: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const res = await getMembers();
    setMembers(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (editingId) {
      await updateMember(editingId, { ...form, join_date: new Date() });
      setEditingId(null);
    } else {
      await createMember({ ...form, join_date: new Date() });
    }
    setForm({ name: "", email: "", membership_type: "" });
    fetchMembers();
  };

  const handleEdit = (member) => {
    setForm({
      name: member.name,
      email: member.email,
      membership_type: member.membership_type,
    });
    setEditingId(member.id);
  };

  const handleDelete = async (id) => {
    await deleteMember(id);
    fetchMembers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sports Club Members</h2>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="membership_type"
        placeholder="Membership Type"
        value={form.membership_type}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        {editingId ? "Update Member" : "Add Member"}
      </button>

      <ul>
        {members.map((m) => (
          <li key={m.id}>
            {m.name} - {m.email} - {m.membership_type}
            <button onClick={() => handleEdit(m)}>Edit</button>
            <button onClick={() => handleDelete(m.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
