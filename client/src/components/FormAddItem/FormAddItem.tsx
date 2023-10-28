import { Button, Flex, Form, Input } from 'antd';
import React, { SyntheticEvent, useRef, useState } from 'react';

interface IFormAddItemProps {
  addItem: (text: string) => void
}

const NOOP = () => {

}

export function FormAddItem({ addItem = NOOP }: IFormAddItemProps) {
  const [value, setValue] = useState('');
  const [form] = Form.useForm();

  const handleSubmit = () => {
    if(value.length > 0) {
      addItem(value);
      setValue('');
    }
  }
  return (
    <Form 
      form={form} 
      style={{display: "flex"}} 
      layout="horizontal" 
      onFinish={handleSubmit}
    >
      <Form.Item style={{width: "100%"}} rules={[{ required: true }]}>
        <Input placeholder='Enter your to do' value={value} onChange={(e) => setValue(e.target.value)}/>
      </Form.Item>
      <Form.Item>
        <Button>Submit</Button>
      </Form.Item>
    </Form>
  );
}
