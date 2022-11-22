import React from 'react';
import {useNavigate } from 'react-router-dom';
import { Col, Container,Nav,Navbar, Row  } from 'react-bootstrap';
import './Login.css';
import bgImg from"../../img/bg1.png";


const Login = () => {
   const navigate = useNavigate();
   
   const formSubmit = (e)=> {
      // console.log('submitted');
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const userData = {
         name: data.get('username'),
         email : data.get('email'),
         password : data.get('password')
      }

     //*validation input field  
      const isEmailValid = /\S+@\S+\.\S+/.test(userData.email);    
      const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(userData.password);
      console.log('Email:'+ isEmailValid, "Password:" + isPasswordValid); 
      document.getElementById('form').reset(); 
      
      if(isEmailValid && isPasswordValid ){                   
           //*Rendering to the desire location         
           setTimeout(()=>{
              navigate('/dashboard')
              },1000)
           } else{           
            alert('Your Email or Password may be incorrect.');
           }
         }


   return (
      <>     
           {/* <Navbar  bg="light" variant="light">
            <Container>
               <Navbar.Brand href="#home">Crew Learning</Navbar.Brand>
               <Nav className="justify-content-end" >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/">About</Nav.Link>
                  <Nav.Link href="/">Contact</Nav.Link>
                  <Nav.Link href="login">Login</Nav.Link>
                  <Nav.Link href="dashboard">Dashboard</Nav.Link>
               
               </Nav>
                  </Container>
           </Navbar> */}
           <Container>
           <h2>Welcome to Login page</h2>

               <Row>
                  <Col sm={5} style={{
                     backgroundImage:`url(${bgImg})`,
                     backgroundRepeat:'no-repeat',
                     backgroundPosition:'center',
                     backgroundSize:'cover',
                     height:'518px'
                  }}>
                  </Col>

                  <Col sm={1}></Col>
                  <Col sm={5}>
                        <form id='form' onSubmit={formSubmit}>
                           <div className="title">Get Started</div>
                        {/* //* User Name input  */}
                           <div>
                              <label htmlFor="username">User Name</label>
                           
                              <i class="fas fa-user"></i>                     
                              <input
                                 type="text"
                                 name="username"
                                 id="username"
                                 placeholder='Enter Your Name'
                                 required
                              />
                           </div>
                              {/* //* User Email input  */}
                           <div>
                              <label htmlFor="email">Email</label>
                              <i class="far fa-envelope"></i>
                              <input type="text" name='email' id='email' placeholder='Enter Your Email' required />
                           </div>
                           {/* //* User Password input  */}
                           <div>
                              <label htmlFor="password">Password</label>
                              <i class="fas fa-lock"></i>
                              <input type="password" name="password" id='password' placeholder='Type password' required />
                           </div>                
                           <input className='inputSubmit' type="submit" value="Submit" />
                     </form>

                  </Col>
               </Row>
           </Container>
    
           <div className='container'>

           </div>       
      </>
   );
};

export default Login;