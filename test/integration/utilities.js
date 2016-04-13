var mongoose = require('mongoose');

function dropDatabase(done) {
  mongoose.conection.db.dropDatabase();
  done();
}

module.exports = {
  dropDatabase: dropDatabase
};