import express from "express";

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
        marks: 40,
        city: "Mumbai",
    },
];

// GET all students
app.get("/students", (req, res) => {
    return res.json(students);
});

// PATCH - Only allow updating marks
app.patch("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(std => std.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found",
        });
    }

    const requestKeys = Object.keys(req.body);

    // Only "marks" field allowed
    if (
        requestKeys.length !== 1 ||
        !requestKeys.includes("marks")
    ) {
        return res.status(400).json({
            message: "Only 'marks' field can be updated",
        });
    }

    // Validate marks is a number
    if (typeof req.body.marks !== "number") {
        return res.status(400).json({
            message: "Marks must be a number",
        });
    }

    student.marks = req.body.marks;

    return res.json({
        message: "Marks updated successfully",
        student: student,
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});