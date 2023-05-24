const CsvFileParser = require('./CsvFileParser');
const JsonFileParser = require('./JsonFileParser');
class FileParserFactory {
  getParser(type) {
    if (type === 'csv') {
      return new CsvFileParser();
    }

    if (type === 'json') {
      return new JsonFileParser();
    }


  }
}

module.exports = FileParserFactory;