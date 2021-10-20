const express = require('express');
const fs = require('fs');

const app = express();

let data = fs.readFileSync('../data/students.json');
let students = JSON.parse(data)


app.use(express.json());

app
    .get('/students', (req, res) => {
        res.status(200).send(students)

    })
    .post('/students', (req, res) => {
        let student = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gpa: req.body.gpa
        }
        if ((student.first_name || student.last_name || student.gpa) === undefined) {
            return res.send('Please fill all properties')
        }
        if (students === []) {
            students = [...student]
        }
        students = [
            ...students,
            student
        ]

        res.status(201).send(student)
        const studentsString = JSON.stringify(students)
        fs.writeFileSync('../data/students.json', studentsString)
    })
    .get('/students/:id', (req, res) => {
        if (!students[req.params.id]) {
            return res.status(401).send('Student not found.')
        }

        res.status(200).send(students[req.params.id])
    })
    .delete('/students/:id', (req, res) => {
        if (!students[req.params.id]) {
            return res.status(404).send("Not Found");
        }
        students = students.filter((el, ind) => ind != req.params.id);
        let studentsString = JSON.stringify(students);
        res.status(204).send('Student is successfully deleted.');
        fs.writeFileSync('../data/students.json', studentsString)

    })
    .put("/students/:id", (req, res) => {
        if (!students[req.params.id]) {
            return res.status(404).send("Not Found");
        }
        let index = students.findIndex((student, id) => id == req.params.id);

        students[index] = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gpa: req.body.gpa
        }
        if (!req.body.first_name || !req.body.last_name || !req.body.gpa) {
            return res.send('Please fill all properties')
        }
        res.status(201).send(students[index])
        const studentsString = JSON.stringify(students)
        fs.writeFileSync('../data/students.json', studentsString)

    })
    .patch('/students/:id', (req, res) => {
        let index = students.findIndex((student, id) => id == req.params.id)

        students[index] = {
            name: req.body.first_name || students[index].first_name,
            age: req.body.lastn_name || students[index].last_name,
            gpa: req.body.gpa || students[index].gpa
        }


        const studentsString = JSON.stringify(students)
        res.send(students[index])
        fs.writeFileSync('../data/students.json', studentsString)
    })


app.listen('3002', (err) => {
    if (err) {
        return console.log(err);
    } else {
        console.log('Server is up and running on port 3002');
    }
})