import * as mongoose from 'mongoose';

class DataBase {
    private dburl = 'mongodb://localhost:27017/http_app';
    private dbconnection;

    constructor() { }

    createConnection() {
        mongoose.set('useCreateIndex', true)
        mongoose.connect(this.dburl, { useNewUrlParser: true, useUnifiedTopology: true });
        this.logger(this.dburl);

    }

    logger(uri) {
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log('mongoose is connected'))
        this.dbconnection.on('error', (error) => console.error.bind(console, 'error in connection: ' + error));

    }

}

export default DataBase;