import { Button, Form, Input, List } from 'antd';
import React, { SyntheticEvent, useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface ITodoItemProps {
  text: string,
  isDone: boolean,
  onDelete: () => void,
  onDone: () => void,
  onUpdate: (text: string) => void
}

const NOOP = () => {

}

export function TodoItem({ text, isDone, onDone = NOOP, onDelete = NOOP, onUpdate = NOOP }: ITodoItemProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const handleSubmit = () => {
    setIsUpdating(false);
    onUpdate(inputValue);
  }

  return (
    <List.Item style={{display: "flex", cursor: "pointer"}}>
      {
        isUpdating ? 
        <>
          <Form 
            style={{display: "flex", width: "100%", justifyContent: "space-between", marginBottom: "0px"}} 
            layout="horizontal" 
            onFinish={handleSubmit}
          >
            <Form.Item style={{margin: "0", width: "70%"}} rules={[{ required: true }]}>
              <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </Form.Item>
            <Form.Item style={{margin: "0"}}>
              <Button onClick={handleSubmit}>Save</Button>
            </Form.Item>
          </Form>
        </> : 
        <>
          <div onClick={onDone} style={isDone ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{inputValue}</div>
          <div className="btnGroup">
            <Button onClick={onDelete} style={{marginRight: "7px"}}><DeleteOutlined /></Button>
            <Button onClick={() => setIsUpdating(true)}><EditOutlined /></Button>
          </div>
        </>
      }
    </List.Item>
  );
}
