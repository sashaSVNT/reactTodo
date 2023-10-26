import React, { SyntheticEvent, useRef } from 'react';
import styles from './formadditem.css';

interface IFormAddItemProps {
  addItem: (text: string) => void
}

const NOOP = () => {

}

export function FormAddItem({ addItem = NOOP }: IFormAddItemProps) {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if(inputRef.current && inputRef.current.value) {
      addItem(inputRef.current.value);
      inputRef.current.value = '';
    }
  }

  return (
    <>
      <h1 style={{margin: "20px 0"}}>Введите дело</h1>
      <form style={{display: "flex"}} onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Add</button>
      </form>
    </>
  );
}
