const User = require('../model/user');

const create = async (data) => {
    let u = await User.create(data);
    return u.save();
};


const getByID = async (id) => {
    return await User.findById(id)
};

const getByEmail = async (email) => {
    return await User.findOne({ email })
};

const getAll = async () => {
    return await User.find({})
};

const update = async (id, data) => {
    return await User.updateOne({ _id: id }, data);
};

const remove = async (id) => {
    return await User.findByIdAndDelete(id)
}

module.exports = {
    create,
    getByID,
    getByEmail,
    getAll,
    update,
    remove
}



