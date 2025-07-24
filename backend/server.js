const {ApolloServer, gql } = require('apollo-server');

const books = [
    {
        title: "吾輩は猫である",
        author: "夏目 漱石",
    },
    {
        title: "走れメロス",
        author: "太宰 治",
    }
]

const typeDefs = gql`
    type Book {
        title: String,
        author: String,
    }

    type Query {
        test: [Book]
    }
`;

const resolvers = {
    Query: {
        test: () => books,
    },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});
