import React from "react";

function StudentList({ students, onEdit, onDelete }) {
  return (
    <ul className="space-y-4">
      {students.map((student) => (
        <li
          key={student._id}
          className="p-4 border rounded flex justify-between items-center"
        >
          <span>
            {student.name} - {student.branch}
          </span>
          <div>
            <button
              onClick={() => onEdit(student)}
              className="bg-yellow-500 text-white p-1 mr-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(student._id)}
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
