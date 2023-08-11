const express= require('express');
const http = require('http');
const mongoose  = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');
const app = express()

module.exports = class Application {
    constructor(){
        this.ServerConfig();
        this.DatabaseConfig();
        this.Routes();
    }
    ServerConfig(){
        const server = http.createServer(app);
        server.listen(config.port,()=>{
            console.log('Server run on port 3000')
        })
        
    }
    DatabaseConfig(){
        mongoose.Promise = global.Promise;
        mongoose.connect(config.database.url, config.database.options)
    }

    Routes() {
        const schema = buildSchema(`
            type Query{
                user:String
            }
            `);
        const resolver={
            user: () => {
                return "ali"
            }
        }

        app.use('/graphql', graphqlHTTP({
            schema,
            rootValue:resolver,
        }))
    }
}
