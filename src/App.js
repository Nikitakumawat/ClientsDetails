import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Navbar from './Pages/Navbar/index';
import Clients from './Pages/Clients';
import CollapisbleSidebar from './Pages/CollapsibleSidebar';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://apidev4.sapien.systems/graphql",
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar/>
        <div className="body">
          <CollapisbleSidebar/>
          <Clients/>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
