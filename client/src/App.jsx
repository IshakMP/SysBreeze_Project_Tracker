import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProjectPage from "./pages/ProjectPage";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}
