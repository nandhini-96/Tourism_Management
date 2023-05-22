import axios from './service/Service';
import React,{Component} from 'react';
class NewPost extends Component{
    state={
        name:null,
        Address:null,
        Gender:null,
        Phone_no:null
    }
   

    render(){
        const submitHandler =(event)=>{
            event.preventDefault();
            const data={
                name:this.state.name,
                Address:this.state.Address,
                Gender:this.state.Gender,
                Phone_no:this.state.Phone_no,
            }
            console.log(data)
            axios.post('/student',data).then(response =>{console.log(response); window.location.href = "/success"})
            .catch(error=> console.log(error))

        }
        return(
        <div className="container"> 
        <h1>Tourism Management Registration</h1>
        <hr/>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="Title">Tourist name</label>
                    <input  className="form-control"
                    type="text" name="name" id="Title"
                    placeholder="Enter your name" required onChange={(event)=>{this.setState({name:event.target.value})}}/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="Author">Address</label>
                    <input  className="form-control"
                    type="text" name="Address" id="Author"
                    placeholder="Enter your Address" required onChange={(event)=>{this.setState({Address:event.target.value})}}/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="Author">Gender</label>
                    <input  className="form-control"
                    type="text" name="Gender" id="Author"
                    placeholder="Enter your Gender" required onChange={(event)=>{this.setState({Gender:event.target.value})}}/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="Author">Phone No</label>
                    <input  className="form-control"
                    type="text" name="Phone_no" id="Author"
                    placeholder= "Enter the phone no"  required onChange={(event)=>{this.setState({Phone_no:event.target.value})}}/>
                </div>
                <br/>
                <div>
                <button className='btn btn-primary'>Submit</button>
                </div>
            <div className="form-group">
            </div>
            </form>
            <hr/>
        </div>)
    }
}
export default NewPost;