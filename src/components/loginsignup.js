import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
// import { useData } from './common/userdata'
export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  // const [afterlogin, setafterlogin] = useState("");
  // const { updateData,user } = useData();
// console.log(user)
  // const handleUpdate = () => {
    // updateData(username)
  // }
  // let navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('username',username)
    console.log('password',password)
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      // Update the state with the response message from the backend
      // setafterlogin(data[0]['count(*)']);
      if(data[0]['count(*)'] < 1){
        alert("Enter Valid Credentials")
        // handleUpdate()
        setusername('')
        setpassword('')
      }
      else{
        alert('Login Sucessful')
      }
      // console.log(afterlogin)
    } catch (error) {
      console.error('Error logging in:', error);
    }
    
    


  }


  return (
    <Form
      style={{
        width: "700px",
        margin: "auto auto",
        backgroundColor: "black",
        padding: "50px 50px 50px 50px",
        borderRadius: "10px",
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          value={username}
          onChange={(e) => setusername(e.target.value)}
          type="name"
          placeholder="Enter Username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      
      <Link to="/signup">
        <Button style={{ marginLeft: "10px" }} variant="secondary">
          SignUp
        </Button>
      </Link>
      {/* <div>{afterlogin}</div> */}
      {/* console.log({afterlogin}) */}
    </Form>
  );
}