import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { 
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import useStateWithStorage from './hooks/use_state_with_storage';
import Editor from "./pages/editor";
import History from './pages/history';

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`;

const StorageKey: never | 'page/editor:text' = 'page/editor:text';

const Main: FC = () => {
  const [ text, setText ] = useStateWithStorage(``, StorageKey);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
        <Route exact path="/editor">
          <Editor
            text={text}
            setText={setText}
          />
        </Route>
        <Route exact path="/history">
          <History
            setText={setText}
          />
        </Route>
        <Redirect to="/editor" path="*" />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(
  <Main />, document.getElementById("root")
);