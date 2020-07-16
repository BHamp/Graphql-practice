const graphql = require('graphql');
const _  = require('lodash');
const Book = require('../models/book');
const Author = require('../models/author')

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLInt, GraphQLList } = graphql;


const BookType = new GraphQLObjectType({
    name:"Book",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name:"Author",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: GraphQLList(BookType),
            resolve(parent, args) {
            }
        }
    })
});


const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args:{id: {type:GraphQLID}},
            resolve(parent, args){
                //code to get data from db/othersource
            }
        },
        author: {
            type: AuthorType,
            args:{id: {type:GraphQLID}},
            resolve(parent, args){
                //code to get data from db/othersource
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent,args) {
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})