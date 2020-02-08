import React from "react";

import { Button, Table } from "react-bootstrap";
import Header from "../../Header/Header";

export default function CardTable(props) {
  return (
    <>
      <Header {...props} />
      <div>
        <div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-4 mb-4 grid-margin">
                <div className="card h-100">
                  <h4 className="card-header">Titulo 1</h4>
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque.
                    </p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">Learn More</Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4 grid-margin">
                <div className="card h-100">
                  <h4 className="card-header">Card Title</h4>
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis ipsam eos, nam perspiciatis natus commodi
                      similique totam consectetur praesentium molestiae atque
                      exercitationem ut consequuntur, sed eveniet, magni nostrum
                      sint fuga.
                    </p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">Learn More</Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4 grid-margin">
                <div className="card h-100">
                  <h4 className="card-header">Card Title</h4>
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque.
                    </p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">Learn More</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-sm-12 grid-margin">
                <div className="card h-100">
                  <h4 className="card-header">Table</h4>
                  <div className="card-body">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td colSpan="2">Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
