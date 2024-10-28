import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch students from the backend
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const addOrUpdateStudent = async (student) => {
    if (editingStudent) {
      // Update existing student
      await axios.put(
        `http://localhost:5000/api/students/${editingStudent._id}`,
        student
      );
      setEditingStudent(null);
    } else {
      // Add new student
      await axios.post("http://localhost:5000/api/students", student);
    }
    fetchStudents();
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleDelete = async (studentId) => {
    await axios.delete(`http://localhost:5000/api/students/${studentId}`);
    fetchStudents();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Management</h1>

      <StudentForm
        onSubmit={addOrUpdateStudent}
        editingStudent={editingStudent}
      />

      {/* Student Data Table */}
      <table className="min-w-full bg-white mt-8">
        <thead>
          <tr>
            <th className="py-2">Student ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Phone</th>
            <th className="py-2">Branch</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="border-t">
              <td className="py-2 px-4">{student.studentId}</td>
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.email}</td>
              <td className="py-2 px-4">{student.phone}</td>
              <td className="py-2 px-4">{student.branch}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleEdit(student)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(student._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
