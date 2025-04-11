import { MouseEvent } from 'react';

type ButtonPropsType = {
  onClick: ()=>void // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = (event:MouseEvent<HTMLButtonElement> ) => {
    props.onClick()
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {props.name}
    </button>
  );
};
