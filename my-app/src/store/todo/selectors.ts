import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

const baseSelector = (state: RootState) => state.todo;

export const todoListSelector = createSelector(
  baseSelector,
  state => state.todolist,
);
