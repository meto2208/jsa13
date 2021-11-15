const Article = require('../model/article');

const create = async (data) => {
    let a = await Article.create(data);
    return a.save();
};

const getOne = async (id) => {
    return await Article.findById(id)
};



const getAllByUser = async (uid) => {
    return await Article.find({ author_id: uid })
};

const getAll = async () => {
    return await Article.find({})
};

const update = async (id, uid, data) => {
    return await Article.updateOne({ _id: id, authoid_id: uid }, data);
};

const remove = async (id, uid) => {
    return await Article.findOneAndRemove({ _id: id, author_id: uid });
};

module.exports = {
    create,
    getOne,
    getAllByUser,
    getAll,
    update,
    remove
}

