const app = express();
const mongoose = require('mongoose');

const dev_db_url = 'mongodb+srv://dbUser:<password>@cluster0-ozywb.azure.mongodb.net/local_library?retryWrites=true&w=majority'
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));