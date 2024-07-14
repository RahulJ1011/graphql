// src/graphql/index.js

const { createSchema } = require('graphql-yoga');
const { Users,userResolvers } = require('../models/user');
const  _ = require('lodash');

const queries = `
    type Query {
        hello: String
        user: User
    }
        
`;




const resolvers = {
    Query: {
        hello: () => {
            return "hello from yoga";
        }
    },
   
};

const schema = createSchema({
    typeDefs: [queries, Users],
    resolvers: _.merge(resolvers,userResolvers)
});

module.exports = { schema };
