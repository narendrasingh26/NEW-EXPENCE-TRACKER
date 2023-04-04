import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    let Remove='delete'
    const clickHandler=()=>{
        Remove='delete';
        console.log(Remove)
    }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <div className='expense-item__price' onClick={clickHandler}>Delete Expense</div>
    </Card>
  );
}

export default ExpenseItem;