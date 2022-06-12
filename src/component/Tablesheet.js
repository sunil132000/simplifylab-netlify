import React, { Component } from "react";
import  './component.css';


export class Tablesheet extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      loding: false,
    };
    this.deleteUser = this.deleteUser.bind(this);
  }
deleteUser(){
  fetch('http://mockrestapi.herokuapp.com/api/employee/617e619c421b380f11022c32', {
    method: 'DELETE'
    });
}
  async componentDidMount() {
    let url = "http://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=5";
    let udata = await fetch(url);
    let parsedData = await udata.json();
    this.setState({ data: parsedData.data });
    console.log(parsedData);
   
  }
  
 
  render() {
    
    return (
      <div>
        <div className="container"style={{width:"100vw", margin:"10px"}}>
          <h1 className="">table Sheet</h1>

          <div className="row" >
          <table className="table table-bordered border-primary" >
               <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Country</th>
                        <th scope="col">Age</th>
                        <th scope="col">About</th>
                        <th scope="col">dob</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">&nbsp;</th>
                      </tr>
              </thead>
          <tbody>
            {this.state.data.map((element) => {
              return (
                <tr key={element._id}>  
                <td>{element._id}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                    <td>{element.phone}</td>
                    <td>{element.address}</td>
                    <td>{element.country}</td>
                    <td>{element.age}</td>
                    <td>{element.about}</td>
                    <td>{element.dob}</td>
                    <td>{element.createdAt}</td>
                    <td>{element.updatedAt}</td>
                    <td><button type="button" class="btn btn-danger" onClick={this.deleteUser} >Delete</button></td>
                  </tr> 
              );
            })}
              </tbody>
            </table>
          </div>
        </div>
        <center style={{padding:"20px", margin:"20px"}}>
        <button type="button" class="btn btn-success add"><a href="./AddNew.js">Add New</a></button>  
        </center>   
      </div>
    );
  }
}

export default Tablesheet;
