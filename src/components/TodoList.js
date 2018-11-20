import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import * as AppActions               from '../actions';

class TodoList extends Component {

  componentWillMount() {
    this.props.actions.getTodos();
  }

  propTypes = {
    filteredTodos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const {filteredTodos, actions} = this.props;
    return (
      <ul className="todo-list">
        {filteredTodos.map(todo =>
          <TodoItem key={todo.id} todo={todo} {...actions} />
        )}
      </ul>
    )
  };
};

const mapDispatch = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch)
});

export default
  connect(null, mapDispatch)(TodoList)