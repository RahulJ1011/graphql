const Users = `
    type Query {
        user: User
    }

    type User {
        id: Int
        name: String
        age:Int
    }

    type Mutation {
        createUser(user:NewUserInput): User
    }
        input NewUserInput{
        name:String
        age:Int!
        }
`;

const userResolvers = {
    Query: {
        user: () => {
            return {
                id: 1,
                name: "rahul"
            };
        }
    },
    Mutation: {
        createUser: (parent, {user}) => {
            console.log("Creating a user");
            
            return {
                id: 2,
                ...user
            };
        }
    },
    User: {
        name: (obj) => {
            return obj.name.toUpperCase();
        }
    }
};

module.exports = { Users, userResolvers };
