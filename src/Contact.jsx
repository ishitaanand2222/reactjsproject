import React, { useState } from 'react';

const Contact=()=>{
const[data,setData]=useState({
  fullname:'',
  phone:'',
  email:'',
  msg:'',
});

const InputEvent=(event)=>{
  const{name,value}=event.target;
  setData((preVal)=>{
    return{
      ...preVal,
      [name]:value,
    }
  })

}
  const formSubmit=(e)=>{
    e.preventDefault()
    alert(`My name is ${data.fullname}.My mob no.${data.phone} My email ${data.email} and my msg is ${data.msg}`)

  };
  return (
    <>
    <div className="my-5">
      <h1 className="text-center">Contact US</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
          <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
  name="fullname"
  value={data.fullname}
  onChange={InputEvent}
   placeholder="enter your name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1"
  name="phone"
  value={data.phone}
  onChange={InputEvent}
   placeholder="9876543210"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"
  name="email"
  value={data.email}
  onChange={InputEvent}
   placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">FeedBack</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
  name="msg"
  value={data.msg}
  onChange={InputEvent}>
  </textarea>
  <div class="col-12">
    <button class="btn btn-outline-primary mt-3" type="submit">Submit form</button>
  </div>
</div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;