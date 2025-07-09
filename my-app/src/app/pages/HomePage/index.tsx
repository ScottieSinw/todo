import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import TodoInput from 'app/components/Todoinput';
import TodoItem from 'app/components/TodoItem';
import { useTodoSlice } from 'store/todo';
import { useSelector } from 'react-redux';
import { todoListSelector } from 'store/todo/selectors';
import { useDispatch } from 'react-redux';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
  border-radius: 5%;
`;

const Title = styled.h1`
  margin: 0px;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

export function HomePage() {
  const { TodoActions } = useTodoSlice();
  const todoList = useSelector(todoListSelector);
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo List Main App" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>To do List</Title>
          <TodoList>
            <TodoInput
              addTodo={(content: string) =>
                dispatch(TodoActions.addTodo(content))
              }
            />
            {todoList.map(todo => (
              <TodoItem
                todo={todo}
                checkTodo={() =>
                  dispatch(TodoActions.checkTodo({ id: todo.id }))
                }
                editModeTodo={() =>
                  dispatch(TodoActions.editModeTodo({ id: todo.id }))
                }
                editTodo={(content: string) =>
                  dispatch(
                    TodoActions.editTodo({ id: todo.id, content: content }),
                  )
                }
                deleteTodo={() =>
                  dispatch(TodoActions.deleteTodo({ id: todo.id }))
                }
              />
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
