import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExp, removeExp } from '../actions/expenses';


export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExp(this.props.expense.id, expense);
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.removeExp({ id: this.props.expense.id });
    this.props.history.push('/')
  };

render() {
  return (
<div>
  <ExpenseForm 
    expense={this.props.expense}
    onSubmit={this.onSubmit}
  />
  <button onClick={this.onRemove}>Remove</button>
</div>
  );
}
};

    const mapStateToProps = (state, props) => ({
      expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});


    const mapDispatchToProps = (dispatch, props) => ({
        editExp: (id, expense) => dispatch(editExp(id, expense)),
        removeExp: (data) => dispatch(removeExp(data))
      })


  export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);