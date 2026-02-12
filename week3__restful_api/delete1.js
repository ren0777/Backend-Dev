const express = require("express");
const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "John Doe",
        marks: 30,
        city: "Delhi",
    },
    {
        id: 2,
        name: "Jane Doe",
        marks: 90,
        city: "Mumbai",
    },
    {
        id: 3,
        name: "Sam Smith",
        marks: 25,
        city: "Pune",
    }
];

app.get("/students", (req, res) => {
    return res.json(students);
});

app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const studentIndex = students.findIndex(std => std.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student not found",
        });
    }

    const student = students[studentIndex];

    if (student.marks >= 70) {
        return res.status(400).json({
            message: "Only students with marks below 70 can be deleted",
        });
    }

    const deletedStudent = students.splice(studentIndex, 1);

    return res.json({
        message: "Student deleted successfully",
        deletedStudent: deletedStudent[0]
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});