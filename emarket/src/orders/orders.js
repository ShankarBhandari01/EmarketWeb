import { Component } from 'react';
import { Carousel, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Orders extends Component {
    render() {
        return (
            <div>
                <div className=" container shadow">
                    <div className="row">
                        <h2 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Your pending  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>orders</span></h2>
                        <p style={{ color: '#BF3A89', fontWeight: 'bold' }}>Current On listing for you</p>
                        <div className="col-md-6 mt-3">
                        </div>
                        <div className="col-md-2">

                            <img className="img-fluid" src="data:image/png;base64,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" alt="bgroup" width="100%" className="img-fluid" />

                        </div>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Shankar Bhandari</td>
                                <td>Kalopool Nepal</td>
                                <center><td ><Button style={{ backgroundColor: '#BF3A89', border: 'none', textAlign: 'center' }} variant="primary">View Now</Button></td> </center>
                            </tr>
                            <tr>
                                <td>Shankar Bhandari</td>
                                <td>Kalopool Nepal</td>
                                <center><td ><Button style={{ backgroundColor: '#BF3A89', border: 'none', textAlign: 'center' }} variant="primary">View Now</Button></td> </center>
                            </tr>
                            <tr>
                                <td>Shankar Bhandari</td>
                                <td>Kalopool Nepal</td>
                                <center><td ><Button style={{ backgroundColor: '#BF3A89', border: 'none', textAlign: 'center' }} variant="primary">View Now</Button></td> </center>
                            </tr>


                        </tbody>
                    </Table>
                </div>



            </div>



        )
    }
}

export default Orders;
