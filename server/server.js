
const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { createYoga, createSchema } = require('graphql-yoga');
const { ruruHTML } = require('ruru/server');
const {schema} = require('./src/graphql/index')

const yoga = createYoga({ schema})




/* const schema = buildSchema(`
    type Query {
        hello(name: String): String
        age: Int
        weight: Float!
        isOver18: Boolean
        hobbies: [String!]!
        user: User
    }

    type User {
        id: Int
        name: String
        posts:[Posts]
        friends:[User]
        inivitedBy:User
    }
`);
 */
/* const User = new GraphQLObjectType({
    name: 'User',
    fields:{
        id:{
            type:GraphQLInt,
            
        },
        name:{
            type:GraphQLString,
            resolve:(obj)=>
                {
                    console.log(obj)
                    if(obj.isAdmin)
                        {
                            return `${obj.name} (Admin)`
                        }
                    return obj.name.trim();
                }

        }
    }
})
const schema  = new GraphQLSchema({
    query: new GraphQLObjectType({
        name:'Query',
        fields:{
            hello: {
                type:GraphQLString,
                resolve:()=>
                    {
                        return "hello world"
                    }
                
            },
            user:{
                type:User,
                resolve:()=>
                    {
                        return {
                            id:1,
                name:"rahul",
                extra:"car",
                isAdmin:"true"
                        }
                    }
            }
        }
    })
}) */
/* const rootValue = {
    hello: (args) => {
        return "Hello " + args.name;
    },
    age: () => 25,
    weight: () => 77.7,
    isOver18: () => false,
    hobbies: () => ['playing', 'singing', 'dancing'],
    user: () => ({
        id: 1,
        name: "rahul"
    })
};

// Test the schema with an initial query
graphql({
    schema,
    source: `{age}`,
    rootValue
}).then((response) => {
    console.log(response);
}); */

const app = express();

// Use the GraphQL handler for all requests to /graphql
app.all('/graphql',yoga );

// Serve the ruruHTML playground at the root URL
app.get('/', (_req, res) => {
    res.type('html');
    res.end(ruruHTML({ endpoint: '/graphql' }));
});

console.log("API is running");

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
