import Table from 'react-bootstrap/Table';
export const TableComponent = (props) => {

  return (
    <div>
      <Table responsive="sm" class="table table-bordered">
        {props.children}
        <tbody />
        {props.data.map((ele,index)=><tr key={index}>
            <td class="text-center">{index+1}</td>
            
            <td class="w-20"><img src={ele.imageUrl} class="img-fluid img-thumbnail" alt="product"/></td>
            <td class="text-center">{ele.title}</td>
            <td class="text-center">{ele.price}</td>
            <td class="text-center">{ele.quantity}</td>
        </tr>)}
      </Table>
    </div>
  );
};
