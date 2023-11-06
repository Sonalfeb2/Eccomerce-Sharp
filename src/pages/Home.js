import { Button, Table } from "react-bootstrap";
const Home = () => {
    const data = [
        {
            date : "JULY 16",
            place: "DETROIT, MI",
            address:"DTE ENERGY MUSIC THEATRE",
        },
        {
            date : "JULY 17",
            place: "DETROIT, MI",
            address:"DTE ENERGY MUSIC THEATRE",
        },{
            date : "JULY 18",
            place: "DETROIT, MI",
            address:"DTE ENERGY MUSIC THEATRE",
        },
        {
            date : "JULY 19",
            place: "DETROIT, MI",
            address:"DTE ENERGY MUSIC THEATRE",
        },
        {
            date : "JULY 20",
            place: "DETROIT, MI",
            address:"DTE ENERGY MUSIC THEATRE",
        },
    ]
  return (
    < >
    <h1 className="text-center" >Tours</h1>
    <Table bordered hover>
      <tbody>
        {data.map((item,index)=><tr key={index}>
            <td>{item.date}</td>
            <td>{item.place}</td>
            <td>{item.address}</td>
            <td><Button variant="info">BUY TICKETS</Button></td>
        </tr>)}
      </tbody>
    </Table></>
  );
};
export default Home;
