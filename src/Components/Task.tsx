/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay ,faPause } from "@fortawesome/free-solid-svg-icons";

const tt_item = css`
  flex-basis: 49%;
  display: flex;
  align-items: center;
  margin: 5px 0;
  border: 1px solid var(--main-text-color);
  border-radius: 10px;
  flex-direction: column;
  min-width: 300px;
`;

const tt_item_head = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 2px dotted var(--main-text-color);
  padding: 12px 5px;  
`;

const tt_btn = css`
  flex-basis: 25%;
  text-align: center;
  padding-right: 5px;
  border-right: 2px dotted;
  margin-right: 5px;
`;

const tt_btn_i = css`
  padding: 3px 16px;
  border-radius: 10px;
  border: 2px solid var(--main-highlight-color);
  &:hover {
    cursor: pointer;
  }
`;

const tt_btn_i_fa = css`
  width:15px;
`;

const tt_time = css`
  flex-basis: 75%;
  text-align: center;
`;

const tt_task = css`
  width: 100%;
  padding: 9px 16px;
  text-align: center;
`;

type Props = {
  id: number;
  task: string;
}

const Task = (props: Props) => {
  const [time, setTime] = useState<number>(0);
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const secondsToTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  const handleClick = (): void => {
    if (isCounting) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    } else {
      intervalRef.current = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }
    setIsCounting(!isCounting);
  };
  
  return (
    <li key={props.id} css={tt_item}>
      <div css={tt_item_head}>
        <p css={tt_btn}>
          <span onClick={handleClick} css={tt_btn_i}>
            <FontAwesomeIcon css={tt_btn_i_fa} icon={isCounting ? faPause : faPlay} />
          </span>
        </p>
        <p css={tt_time}>{secondsToTime(time)}</p>
      </div>
      <p css={tt_task}>{props.task}</p>
    </li>
  );
};
  
  export default Task;