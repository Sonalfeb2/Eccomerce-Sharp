import Table from 'react-bootstrap/Table';
export const TableComponent = (props) => {

  return (
    <div>
      <Table responsive="sm" className="table-bordered">
        {props.children}
        <tbody />
        {props.data.map((ele,index)=><tr key={index}>
            <td className="w-25"><img src={ele.imageUrl} className="img-fluid" alt="product"/></td>
            <td className="text-center">{ele.title}</td>
            <td className="text-center">{ele.quantity}</td>
            <td className="text-center">${ele.price}</td>
        </tr>)}
        <tr>
          <td colSpan={3}>Total Amount</td>
          <td>${props.amount}</td>
        </tr>
      </Table>
    </div>
  );
};
