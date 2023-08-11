const express= require('express');
const http = require('http');
const mongoose  = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('api/schema');
const resolvers = require('api/resolver');
const app = express();
module.exports = class Application {
    constructor(){
        this.ServerConfig();
        this.DatabaseConfig();
        this.Routes();
    }
    ServerConfig(){
        const server = new ApolloServer({typeDefs, resolvers})
        server.applyMiddleware({app})
        app.listen(config.port, () => {
            console.log(`server run on port ${config.port}`)
        })
        
        
    }
    DatabaseConfig(){
        mongoose.Promise = global.Promise;
        mongoose.connect(config.database.url, config.database.options)
    }

    Routes() {
    }
}
