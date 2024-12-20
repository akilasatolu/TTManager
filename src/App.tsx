/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AddTasks from './Components/AddTasks';

const app = css`
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  min-height: 100vh;
  font-size: var(--font-size-normal);
  display: flex;
  justify-content: center;
`;

const app_inner = css`
  width: 80%;
  padding-bottom: 40px;
`;

const app_title = css`
  text-align: center;
  font-size: var(--font-size-large);
  color: var(--main-highlight-color);
`;

function App() {
  return (
    <div css={app}>
      <div css={app_inner}>
        <header css={app_title}><h1>TT Manager</h1></header>
        <AddTasks />
      </div>
    </div>
  );
}

export default App;