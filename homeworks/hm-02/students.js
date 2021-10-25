const fs = require('./fs');
const db = './students.json'

const create = async (studentData) => {
    let data = await fs.read(db);
    let id = 1;
    if (data.length !== 0) {
        id = data[data.length - 1].id + 1;
    }
    let student = {
        id,
        first_name: studentData.first_name,
        last_name: studentData.last_name,
        gpa: studentData.gpa
    };
    data = [...data, student];
    await fs.write(db, data);
    return student;
};
const getAll = async () => {
    let data = await fs.read(db);
    return data;
}
const getOne = async (id) => {
    let data = await fs.read(db);
    let student = data.filter(el => el.id === Number(id));
    if (student.length === 0) return null
    return student[0];
}
const update = async (id, studentData) => {
    let data = await fs.read(db);
    data = data.map(st => {
        if (st.id === Number(id)) {

            st.first_name = studentData.first_name,
                st.last_name = studentData.last_name,
                st.gpa = studentData.gpa

        }
        return st
    });
    await fs.write(db, data)
};
const partialUpdate = async (id, studentData) => {
    let data = await fs.read('./students.json');
    data = data.map(st => {
        if (st.id === Number(id)) {

            st.first_name = studentData.first_name || st.first_name,
                st.last_name = studentData.last_name || st.last_name,
                st.gpa = studentData.gpa || st.gpa

        }
        return st
    });
    await fs.write('students.json', data);
};

const remove = async (id) => {
    let data = await fs.read(db);
    let prevLength = data.length;
    data = data.filter(el => el.id !== Number(id))
    if (data.length === prevLength) {
        return false
    }
    await fs.write(db, data);
    return true;
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    partialUpdate,
    remove
}


