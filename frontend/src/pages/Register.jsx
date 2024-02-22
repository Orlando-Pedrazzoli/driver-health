import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import '../pages/CSS/Register.css';

function Register() {
  return (
    <div className='authentication'>
      <div className='authentication-form card p-2'>
        <h1 className='card-title'>Signup Driver</h1>
        <Form layout='vertical'>
          <Form.Item label='Name' name='name'>
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item label='Email' name='email'>
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input placeholder='Password' />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
