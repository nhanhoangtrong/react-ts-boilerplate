import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import { Store, Dispatch, bindActionCreators } from 'redux';
import { editTodo, completeTodo, deleteTodo } from './actions';

export interface TodoItemContainerDispatchProps extends React.Props<any> {
    completeTodo: ReduxActions.ActionFunction1<string, ReduxActions.Action<string>>;
    deleteTodo: ReduxActions.ActionFunction1<string, ReduxActions.Action<string>>;
    editTodo: ReduxActions.ActionFunction1<TodoApp.Item, ReduxActions.Action<TodoApp.Item>>;
}

export interface TodoItemContainerOwnProps extends React.Props<any> {
    todo: TodoApp.Item;
}

export type TodoItemContainerProps = TodoItemContainerOwnProps & TodoItemContainerDispatchProps;

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    completeTodo: bindActionCreators(completeTodo, dispatch),
    deleteTodo: bindActionCreators(deleteTodo, dispatch),
    editTodo: bindActionCreators(editTodo, dispatch),
});

export default connect<null, TodoItemContainerDispatchProps, TodoItemContainerOwnProps>(null, mapDispatchToProps)(TodoItem);