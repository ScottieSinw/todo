import styled from 'styled-components';
import React from 'react';
import Block from '../Block';
import Checkbox from '../Checkbox';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
`;

const TodoContent = styled.span<{ checked: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : '#212121')};
`;

export default function TodoItem({
  todo,
  onClick,
}: {
  todo: ITodoItem;
  onClick?: () => void;
}) {
  return (
    <Box>
      <Checkbox checked={todo.completed} onClick={onClick} />
      <Block marginLeft="10px" />
      <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
    </Box>
  );
}
