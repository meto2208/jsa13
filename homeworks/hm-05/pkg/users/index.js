const mongoose = require('mongoose');

const User = mongoose.model(
    'Users',
    {
        first_name: String,
        last_name: String,
        email: {
            type: String,
            unique: true
        },
        password: String
    },
    'Users'
)

const create = async (userData) => {
    let user = await new User(userData);
    return user.save();
}

const getById = async (id) => {
    return await User.findById(id);
}

const getAll = async () => {
    return await User.find({})
}

const update = async (id, userData) => {
    return await User.updateOne({ _id: id }, userData);
}

const remove = async (id) => {
    return await User.deleteOne({ _id: id })
}

const findByEmail = async (email) => {
    return await User.findOne({ email })
}



module.exports = {
    create,
    getById,
    getAll,
    update,
    remove,
    findByEmail
}