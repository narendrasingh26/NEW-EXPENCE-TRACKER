const ExpenseDetails=(props)=>{
const title= 'PRODUCT TITLE'
const ammount=3200;

return(
    <div className="expense-item">
        <div className="expense-item__price">{title}</div>
        <div className="expense-item__price">{ammount}</div>
    </div>
);


}
export default ExpenseDetails;