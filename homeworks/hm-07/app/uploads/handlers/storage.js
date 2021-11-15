const fs = require('fs');
const strings = require('../pkg/strings');
const config = require('../pkg/config');

const cfgApp = config.get('app');

const upload = async (req, res) => {
    if (req.files.uploads.size > cfgApp.max_file_size) {
        return res.status(400).send('File exceeds max file size.');
    };


    if (!cfgApp.allowed_filetypes.includes(req.files.uploads.mimetype)) {
        return res.status(400).send('Filetype not allowed!')
    }

    let userDirPath = `${__dirname}/../${cfgApp.upload_dir}/user_${req.user.uid}`;
    if (!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath);
    };

    let randomId = strings.makeID(5);
    let filePath = `${userDirPath}/${randomId}_${req.files.uploads.name}`;

    req.files.uploads.mv(filePath, e => {
        if (e) {
            console.log(e);
            return res.status(500).send();
        };
    });
    res.status(200).send();
};

const download = (req, res) => {
    let filePath = `${__dirname}/../uploads/user_${req.user.uid}/${req.params.filename}`;
    if (!fs.existsSync(filePath)) return res.status(404).send('Not found.');
    res.download(filePath);
};

const getFileList = (req, res) => {
    let filesList = `${__dirname}/../uploads/user_${req.user.uid}`;
    let l = fs.readdirSync(filesList);
    res.send(l);
};

const removeFile = (req, res) => {
    let filePath = `${__dirname}/../uploads/user_${req.user.uid}/${req.params.filename}`;
    fs.unlinkSync(filePath);
    res.status(200).send();
}

module.exports = {
    upload,
    download,
    getFileList,
    removeFile
}