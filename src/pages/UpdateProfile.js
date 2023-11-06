import { useContext, useEffect, useState, useRef } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import AuthContext from "../context_store/AuthContext";
const Profile = () => {
  const ctx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const newPasswordRef = useRef();
  useEffect(
    () => {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBdq5esPKWLoYUGEdAuhpHjbhiv7YhD6jQ",
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            idToken: ctx.tokenId
          })
        }
      )
        .then(res => {
          if (!res.ok) {
            throw new Error("Email Not Found");
          }
          return res.json();
        })
        .then(data => setEmail(data.users[0].email))
        .catch(err => setEmail(err.message));
    },
    []
  );
  const changePasswordHandler = async () => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBdq5esPKWLoYUGEdAuhpHjbhiv7YhD6jQ",
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          idToken: ctx.tokenId,
          password: newPasswordRef.current.value,
          returnSecureToken: true
        })
      }
    );
    const data = await response.json();
    console.log(data)
    if (data.error) {
      window.confirm(data.error.message);
      newPasswordRef.current.value = "";
    }
    else{
        window.confirm('SuccessFully Changed')
    }
  };
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="5">
          <Form.Control plaintext readOnly defaultValue={email} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          New Password
        </Form.Label>
        <Col sm="5">
          <Form.Control
            type="password"
            placeholder="Password"
            ref={newPasswordRef}
          />
        </Col>
      </Form.Group>
      <Button
        className="mx-auto"
        style={{ width: "100%" }}
        onClick={changePasswordHandler}
      >
        Update Password
      </Button>
    </Form>
  );
};
export default Profile;
