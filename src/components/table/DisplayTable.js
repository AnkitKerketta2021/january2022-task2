import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddUserModal from "../modal/AddUserModal";

function DisplayTable(props) {
  const [showAddUserModal, setshowAddUserModal] = useState(false);

  const addUserModalHideandShow = getFromAddUserModal => {
    setshowAddUserModal(getFromAddUserModal);
    setshowAddUserModal(!showAddUserModal)
  };

  return (
    <div>
      <br />

      {showAddUserModal &&
        <AddUserModal addUserModalHideandShow={addUserModalHideandShow} />}
      <Button variant="warning" className="mb-2" onClick={setS} >
        Add User{" "}
        <ion-icon style={{ fontSize: "24px" }} name="person-add-outline" />
      </Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Company Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        {props.userData.map((val, index) => {
          return (
            <tbody>
              <tr key={index}>
                <td>
                  {val.id}
                </td>
                <td>
                  {val.name.toUpperCase()}
                </td>
                <td>
                  {val.email.toLowerCase()}
                </td>
                <td>
                  {val.phone}
                </td>
                <td>
                  {val.company.name}
                </td>
                <td>
                  <Button variant="success">
                    <ion-icon name="create-outline" />
                  </Button>
                </td>
                <td>
                  <Button variant="danger">
                    <ion-icon name="trash-outline" />
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default DisplayTable;
