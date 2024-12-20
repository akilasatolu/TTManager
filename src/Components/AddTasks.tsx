/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from 'react';
import Task from './Task';

const addTasks = css`
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
`;

const addTasks_form = css`
  width: 60%;
  color: var(--main-text-color);
  background-color: var(--main-bg-color);
  font-size: var(--font-size-large);
  border-radius: 10px;
  padding: 5px 10px;
  border: 1px solid var(--main-text-color);
  box-shadow: 2px 5px 2px 0px var(--main-shadow-color);
  &:focus {
    border: 2px solid var(--main-highlight-color);
    padding: 4px 9px;
  }
`;

const addTasks_btn = css`
  color: var(--main-text-color);
  background-color: var(--main-bg-color);
  font-size: var(--font-size-large);
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 2px solid var(--main-highlight-color);
  box-shadow: 2px 5px 2px 0px var(--main-shadow-color);
  &:hover {
    cursor: pointer;
  }
`;

const task_list = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

const AddTasks = () => {
  type task = {
    id: number;
    task: string;
  };
  const [inputVal, setInputVal] = useState<string>('');
  const [tasks, setTasks] = useState<task[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if(inputVal && inputVal.trim()){
      const newTask: task = {
        id: new Date().getTime(),
        task: inputVal
      };
      setTasks([...tasks, newTask]);
    }
    setInputVal('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} css={addTasks}>
        <input value={inputVal} onChange={handleChange} css={addTasks_form} type="text" placeholder="Enter New Task..." />
        <button css={addTasks_btn} type="submit">Add</button>
      </form>
      <ul css={task_list}>
        {tasks.map((data) => (
          <Task task={data.task} key={data.id} id={data.id} />
        ))}
      </ul>
    </div>
  );
};

export default AddTasks;