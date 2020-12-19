import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { 
  Redirect,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Editor from "./pages/editor";
import History from './pages/history';

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`;

const Main: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route exact path="/editor">
          <Editor />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>
        <Redirect to="/editor" path="*" />
      </Router>
    </>
  );
};

ReactDOM.render(
  <Main />, document.getElementById("root")
);