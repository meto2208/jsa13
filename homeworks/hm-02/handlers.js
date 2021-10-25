const students = require('./students');

const getAll = async (req, res) => {
    try {
        let data = await students.getAll()
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send()
    }

};

const create = async (req, res) => {
    try {

        let condition = !req.body.first_name
            || !req.body.last_name
            || !req.body.gpa

        if (condition) {
            return res.status(400).send('Please fill all properties!')
        };

        let s = await students.create(req.body);
        res.status(201).send(s)

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
};

const getOne = async (req, res) => {
    try {
        let data = await students.getOne(req.params.id)
        res.status(201).send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send()
    }

};

const update = async (req, res) => {
    try {
        const condition = !req.body.first_name
            || !req.body.last_name
            || !req.body.gpa
        if (condition) {
            return res.send('Please fill all properties')
        }
        let s = await students.update(req.params.id, req.body);
        res.status(204).send(s)

    } catch (error) {
        console.log(error);
        res.status(500).send()
    }

};

const partialUpdate = async (req, res) => {
    try {

        const condition = req.body.first_name
            || req.body.last_name
            || req.body.gpa
        if (!condition) {
            return res.send('Bad request')
        }

        // console.log(data);
        await students.partialUpdate(req.params.id, req.body)
        res.status(201).send();

    } catch (error) {
        console.log(error);
        res.status(500).send()
    }

};

const remove = async (req, res) => {
    try {
        if (await students.remove(req.params.id)) {
            res.status(204).send('Succesfully removed')
        } else {
            res.status(400).send('Student not found or already removed')
        }

    } catch (error) {
        console.log(error);
        res.status(500).send()
    }
};


module.exports = {
    getAll,
    create,
    getOne,
    update,
    partialUpdate,
    remove
}

