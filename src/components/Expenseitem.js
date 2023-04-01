 import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
 import ExpenseDetails from './ExpenseDetails';

  import './ExpenseItem.css'; 

const ExpenseItem=(props)=> {
  
  const locationOfItem='locationOfExpenditure';
  return (
    <Card className="expense-item">
     
      <ExpenseDate date={props.date}/>
      <ExpenseDetails ammount={props.ammount} title={props.title}/>
     
      {/* <div>{props.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <div className="expense-item__price" >{locationOfItem}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
