const { ApolloServer, gql } = require('apollo-server');

let students = [
  {
    id: 1,
    name: 'Rabeeb Aqdas Jilani',
    email: 'rabeebaqdas@gmail.com',
    age: 22
  },
  {
    id: 2,
    name: 'Zaheeb Akhlas Jilani',
    email: 'zaheeb@gmail.com',
    age: 8
  },
  {
    id: 3,
    name: 'Rahmeen Khisal Jilani',
    email: 'rahmeen@gmail.com',
    age: 24
  }
];

const resolvers = {
  Query: {
    students: () => students,
  },
  Mutation: {
    addStudent: (_, { input }) => {
      students.push({
        name: input.name,
        age: input.age,
        id: input.id,
        email: input.email
      }
      )
      return {
        name: input.name,
        age: input.age,
        id: input.id,
        email: input.email
      }
    }
  }
};

//schema (where we define our types)
const typeDefs = gql`
  type Student {
     id:Int
    name: String
    email: String
    age:Int
  }
  type Query {
    students: [Student]
  }

  input StdInput{
    id:Int
    name: String
    email: String
    age:Int
  }
  
  type Mutation {
    addStudent(input:StdInput): Student
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
