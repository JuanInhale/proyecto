import React from 'react';

// import { Container } from './styles';

export function TodoItem({ todo }) {
    const {id, task, completed} = todo;
  return <li>{task}</li>;
}
