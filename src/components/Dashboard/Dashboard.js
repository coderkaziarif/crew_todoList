import React from 'react';
import { Col, Container, Row, Table} from 'react-bootstrap';
import { Nav,Navbar } from 'react-bootstrap';
import '../Login/Login.css';


const Dashboard = () => {

   const toDoForm = document.getElementById('toDoForm');
   // const userInfo = document.getElementById('user_info');
   const tbody = document.getElementById('tbody');
   

   //? Form Submit area
   toDoForm?.addEventListener("submit",(e) => {
      e.preventDefault();
      console.log('Submitted todo list');
      const slN = document.getElementById('slN').value;
      const jobList = document.getElementById('job_list').value;
      const status = document.getElementById('status').value;
      const reason = document.getElementById('reason').value;
      const date = document.getElementById('date').value;
      const slNo = document.getElementById('slNo').value;
      const thinks = document.getElementById('thinks').value;
      // *User info
      // const name = document.getElementById('name').value;
      // const designation = document.getElementById('designation').value;
      // const date2 = document.getElementById('date2').value;
      // const newDiv = document.createElement('div');
      // const newDivInnerHTML = `
      //       <h4>Name: ${name}</h4>
      //       <h6>Designation: ${designation} </h6>
      //       <p>Date: ${date2} </p>    
      // `;
      const newTr = document.createElement('tr');
      const newTrInnerHTML = `           
                  <td>${slN}</td>
                  <td>${jobList}</td>
                  <td>${status}</td>
                  <td>${reason}</td>
                  <td>${date}</td>
                  <td>${slNo}</td>
                  <td>${thinks}</td>              
          `;
      newTr.innerHTML = newTrInnerHTML;
      tbody.append(newTr);

      // newDiv.innerHTML = newDivInnerHTML;
      // userInfo.append(newDiv);
      
      console.log(newTr, 'newTrData');
      // console.log(newDiv, 'newDiv');
      document.getElementById('toDoForm').reset();
    }); 
   
   return (
      <>
         <Navbar  bg="light" variant="light">
            <Container>
               <Navbar.Brand href="#home">Crew Learning</Navbar.Brand>
               <Nav className="justify-content-end" >
                  <Nav.Link href="/">CREW</Nav.Link>
                  <Nav.Link href="/">Weero</Nav.Link>
                  <Nav.Link href="/">Weepoka</Nav.Link>
                  <Nav.Link href="/">BTL</Nav.Link>
                  <Nav.Link href="/">Circle</Nav.Link>
                  <Nav.Link href="login">Login</Nav.Link>
                 
               
               </Nav>
               </Container>
           </Navbar>
         
         <Container>
         <h3 style={{margin:'25px auto'}}>Update your Todo List</h3>
            <Row>
               <Col md={10}>                      
                     <form id='toDoForm'>
                     <div className="title">
                        {/* <div className='user_input'>
                          <label htmlFor="Name">Name</label>                             
                           <input type="text" name='name' id='name' placeholder='Your Name' required /><br /> <br />
                           <input type="text" name='designation' id='designation' placeholder='designation' required /><br /><br />
                           <input type="date" name='date2' id='date2' placeholder='date' required />
                        </div> */}
                        
                     </div>
                           {/* //! table form */}
                     <div>
                        <label htmlFor="slN">Sl No</label>                            
                        <input type="text" name='slN' id='slN' placeholder='number' required />
                     </div>

                      <div>
                        <label htmlFor="job_list">Current Job List</label>                                                              
                        <input type="text" name="job_list" id="job_list"  
                                 placeholder='Current Job List' 
                     />
                     </div> 
                      <div>
                        <label htmlFor="status">Status</label>                          
                        <input type="text" name="status" id="status"  
                              placeholder='Status' required
                        />
                     </div>
                     <div>
                        <label htmlFor="reason">Reason</label>                          
                        <input type="text" name="reason" id="reason"  
                                 placeholder='Reason' required
                        />
                     </div>
                           
                     <div>
                        <label htmlFor="date">Next Date</label>
                        <input type="date" name='date' id='date'  required />
                     </div>
                     <div>
                        <label htmlFor="slN">Sl No</label>
                        <input type="text" name='slNo' id='slNo' placeholder='SL No' required />
                     </div>              
                     <div>
                        <label htmlFor="thinks">Thinks to do</label>
                        <input type="text" name='thinks' id='thinks' placeholder='Thinks to do' required />
                     </div>              
                     <input className='inputSubmit' type="submit" value="Submit" />
                  </form>
                
                  
               </Col>
            </Row>

         {/* //? Todo List */}
            <Row>

               <Col>
                  {/* <div id='user_info'>

                  </div> */}
                  <Table striped bordered hover >
                     <thead>
                     <tr>
                        <th>#Sl No</th>
                        <th>Current Job List</th>
                        <th>Status</th>
                        <th>Reason</th>
                        <th>Next Date</th>
                        <th>Sl No</th>
                        <th>Thinks to do</th>
                     </tr>
                     </thead>
                     <tbody id='tbody'>

                     </tbody>
                  </Table>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default Dashboard;