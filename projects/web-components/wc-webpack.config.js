const { v4: uuid4 } = require('uuid');

module.exports = {
  output: {
    chunkLoadingGlobal: `webpackJsonp${uuid4().replace(/-/g, '')}`,
  },
};
