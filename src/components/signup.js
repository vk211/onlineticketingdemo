import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";
// import Navbar1 from "./Navbar";
export default function SignUp() {
  const [username, setusername] = useState("");
  // const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const validatePassword = (e) => {
   
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    setIsPasswordValid(passwordRegex.test(e));
  };

  function SubmitCall(e){
    e.preventDefault();
    validatePassword(password)

    if (username.length<6){
      alert("Enter Valid Username")
    }
    if (number.length < 9 && number.length >12){
      alert("Enter Valid Phone Number")
      return
    }
    if (isPasswordValid){
      alert("Enter Valid password")
      return
    }
    handleSubmit()
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the backend API
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, number, password, city }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Log the response from the backend
    } catch (error) {
      console.error('Error adding user:', error);
    }
 
 
  }
 

  return (
  
    // {/* <div>
    //   <Navbar1/>
    // </div> */}
    <Form style={{ margin: "200px 200px 200px 200px" }}>
      <Row className="mb-3">
        <Form.Group onChange={(e) => setemail(e.target.value)} as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} required/>
        </Form.Group>

        <Form.Group as={Col} onChange={(e) => setpassword(e.target.value)} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} required/>
        </Form.Group>
      </Row>
      <Col xs="auto">
        <InputGroup className="mb-2">
          <InputGroup.Text>@</InputGroup.Text>
          <Form.Control
            onChange={(e) => setusername(e.target.value)}

            id="inlineFormInputGroup"
            placeholder="Username"
            required
          />
        </InputGroup>
      </Col>





      <Row className="mb-3">
        <Form.Group onChange={(e) => setcity(e.target.value)} as={Col} controlId="formGridCity" Value={city} required>
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group onChange={(e) => setnumber(e.target.value)} as={Col} controlId="formGridNumber" required>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
    
  );
}