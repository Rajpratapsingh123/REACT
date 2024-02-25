import { useState } from "react"

export default function Form(){
    let [formData,setFormData]=useState({
        fullname:"",
        username:"",
        password:"",
    });

    let handleInputChange=(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;

       setFormData((currData)=>{
              currData[fieldName]=newValue;
              return {...currData};
       });
    }


    let handleSubmit=(event)=>{
        event.preventDefault();
        setFormData({
            fullname:"",
            username:"",
            password:"",
        })
        console.log(formData);
    }
    return(
        <form  onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
             placeholder="Enter username"
             type="text"
             value={formData.username}
             onChange={handleInputChange} 
             id="username"
             name="username"
            />
              <br /><br />
            <label htmlFor="fullname">Full Name</label>
            <input 
             placeholder="Enter full name"
             type="text" 
             value={formData.fullname}
             onChange={handleInputChange} 
             id="fullname"
             name="fullname"
            />
              <br /><br />
            <label htmlFor="password">Password</label>
            <input 
             placeholder="Enter Password"
             type="password" 
             value={formData.password}
             onChange={handleInputChange} 
             id="password"
             name="password"
            />
            
            <button>Submit</button>
        </form>
    )
}