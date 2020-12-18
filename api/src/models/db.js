const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@greg.oqntc.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});

const connect = async () => {
    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

exports.connect = connect;
