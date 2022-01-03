import React from 'react';
import {Route, Switch} from "react-router-dom";

import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import Navbar from "./components/Navbar";
import Countries from "./components/Countries";
import CountryDetail from "./components/CountryDetail";

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.map(({message, path}) => {
            alert(`Graphql Error: ${message}`)
            return message;
        })
    }
});
const link = from([
    errorLink,
    new HttpLink({
        uri: "https://countries.trevorblades.com"
    })
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
});

function App() {
    return <ApolloProvider client={client}>
        <Navbar/>
        <div className="h-screen pt-12 w-full px-10">
            <Switch>
                <Route path='/' exact={true}>
                    <Countries/>
                </Route>
                <Route path='/country/:countryCode'>
                    <CountryDetail/>
                </Route>
            </Switch>
        </div>
    </ApolloProvider>
}

export default App;
