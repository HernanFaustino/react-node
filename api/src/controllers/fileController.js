const fileService = require('../services/fileService');

const getAllFiles = async (req, res) => {
  const allFiles = await fileService.getAllFiles();
  res.status(200).send({ status: 'OK', data: allFiles });
};

const getFilesData = async (req, res) => {
  const fileName = req.query.fileName;

  if (fileName) {
    const fileData = await fileService.getOneFileData(fileName);
    if (fileData) {
      res.status(200).send({ status: 'OK', data: [fileData] });
    } else {
      res.status(400).send({
        status: 'FAILED',
        data: { error: 'File not found or unable to process' },
      });
    }
    return;
  }
  const filesData = await fileService.getFilesData();
  res.status(200).send({ status: 'OK', data: filesData });
};

module.exports = {
  getAllFiles,
  getFilesData,
};
