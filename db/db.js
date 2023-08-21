const mongoose = require('mongoose');

const dbConnect = (connectStr) => {

    return mongoose.connect(connectStr);

}
module.exports = dbConnect;
