import { Button } from 'antd';
import React, { useRef, useState } from 'react'
import './acc.css'
function CreateAcc() {
 
const [user,setuset] = useState({
  name:'Ali',
  email:'ali@gmail.com',
  aadhar:121313,
  pan:'BTNR3123'
});

const[acc,setacc] = useState('');

const nameval = useRef(null)
const emailval= useRef(null);
const aadhar = useRef(null);
const pan = useRef(null);

  
async function fun(e){
  e.preventDefault();

    if(nameval.current.value!=='' && emailval.current.value!=='' && aadhar.current.value!=='' && pan.current.value!==''){
      setuset({
        ...user,
        name: String(nameval.current.value),
        email: String(emailval.current.value),
        aadhar: Number(aadhar.current.value),
        pan: String(pan.current.value)
  });
    }

  fetch('http://localhost:8080/reg-acc', {
method: 'POST',
headers: {
  'Content-Type': 'application/json'
},
body: JSON.stringify(user)  
})
.then(response => {
if (!response.ok) {
  throw new Error('Network response was not ok');
}
return response.text(); 
})
.then(data => {
console.log(data); 
setacc(data)
})
.catch(error => {
console.error('There was a problem with your fetch operation:', error);
setacc(error.massage);
});
}


  return (
    <div className='createmain'>
        <div className="inp">
            <div className="inpcont">
            <h4>Create Account:</h4>
            <input type="text" placeholder='Enter Your Name...'  ref={nameval}/>
            <input type="text" placeholder='Enter Your Email...' ref={emailval} />
            <input type="text" placeholder='Enter Your Aadhar...' ref={aadhar} />
            <input type="text" placeholder='Enter Your Pan...' ref={pan} />
            <div className="btndiv">
            <Button onClick={fun} type='primary'>Submit</Button>
            </div>
            <p className='p'>{acc===''?'':acc}</p>
            </div>
        </div>
    </div>
  )
}

export default CreateAcc