import React, { useState, useEffect } from "react";

function StudentForm({ onSubmit, editingStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "Computer Science",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "", phone: "", branch: "Computer Science" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Student Name"
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="border p-2 mb-2 w-full"
        required
      />
      <select
        name="branch"
        value={formData.branch}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      >
        <option>Computer Science</option>
        <option>ENTC</option>
        <option>Civil</option>
        <option>Mechanical</option>
        <option>IT</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        {editingStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;
