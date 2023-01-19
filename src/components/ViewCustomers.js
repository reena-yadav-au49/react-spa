import Customer from "./Customer";

const ViewCustomers =(props)=>{
    return (
        <div>
        <h2>All Customers</h2>

        {props.customers.map((customer)=>(
            <Customer
            key={customer.id}
            darkMode={props.darkMode}
            customer={customer}
            onToggle={props.onToggle}
            onDelete={props.onDelete} />
        ))}
        </div>
    );
 
};
export default ViewCustomers ;