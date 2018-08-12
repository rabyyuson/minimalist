'use strict'

import AddTodoMutation from '../../mutations/AddTodoMutation';
import TodoList from './TodoList';
import TodoListFooter from './TodoListFooter';
import TodoTextInput from './TodoTextInput';

import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

class TodoApp extends React.Component {
  _handleTextInputSave(props) {
    const { relay, text, viewer } = props

    AddTodoMutation.commit(
      relay.environment,
      text,
      viewer
    );
  };

  render() {
    const { relay, viewer } = this.props
    const hasTodos = viewer.totalCount > 0

    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <TodoTextInput
              autoFocus={true}
              className="new-todo"
              onSave={(text) => this._handleTextInputSave({ relay, text, viewer })}
              placeholder="What needs to be done?"
            />
          </header>
          <TodoList viewer={viewer} />
          {hasTodos &&
            <TodoListFooter
              todos={viewer.todos}
              viewer={viewer}
            />
          }
        </section>
      </div>
    );
  }
}

export default createFragmentContainer(TodoApp, {
  viewer: graphql`
    fragment TodoApp_viewer on User {
      id,
      totalCount,
      ...TodoListFooter_viewer,
      ...TodoList_viewer,
    }
  `,
});
