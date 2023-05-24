const axios = require('axios');
const FileParserFactory = require('./parsers/FileParseFactory');
const API_URL = 'https://echo-serv.tbxnet.com/v1/secret';

const getFileContent = async (fileName) => {
  try {
    const fileContentResponse = await axios.get(`${API_URL}/file/${fileName}`, {
      headers: { Authorization: `Bearer aSuperSecretKey` },
    });

    return fileContentResponse.data;
  } catch (e) {
    //console.log(e?.message);
    return;
  }
};

const getFilesData = async () => {
  const response = await axios.get(`${API_URL}/files`, { headers: { Authorization: `Bearer aSuperSecretKey` } });
  const fileNames = response.data.files;

  const fileJsonObjectPromises = fileNames.map(async (fileName) => {
    return getOneFileData(fileName);
  });
  const fileObjectsResults = await Promise.allSettled(fileJsonObjectPromises);
  const fileObjects = fileObjectsResults
    .filter(({ status, value }) => status === 'fulfilled' && value?.lines?.length > 0)
    .map(({ value }) => value);

  return fileObjects;
};

const getOneFileData = async (fileName) => {
  const fileParserFactory = new FileParserFactory();
  const fileParser = fileParserFactory.getParser('csv');
  const fileContent = await getFileContent(fileName);
  if (fileContent) {
    const fileLines = fileParser.parse(fileContent);
    const filteredLines = fileLines.filter(({ file, text, number, hex }) => file && text && number && hex);
    return {
      file: fileName,
      lines: filteredLines.map(({ text, number, hex }) => ({ text, number, hex })),
    };
  }
  return;
};

const getAllFiles = async () => {
  const response = await axios.get(`${API_URL}/files`, { headers: { Authorization: `Bearer aSuperSecretKey` } });
  const files = response.data;

  return files;
};

module.exports = {
  getAllFiles,
  getFilesData,
  getOneFileData,
};
