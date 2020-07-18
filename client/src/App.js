import React from 'react';
import BookList from './components/BookList'; 
import { ApolloClient, ApolloProvider } from '@apollo/client';

//setting up Apollo
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql' //endpoint
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
