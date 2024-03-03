import React, { useRef, useState } from 'react'
import { Button } from 'antd';
import './deposit.css'

function Balance() {
    const [acc,setacc] = useState(0);
    const [curr_bal,setcurr] = useState(0);
    const accval = useRef();

    async function fun(){

        if(accval.current.value!==0){
            setacc(accval.current.value)
            const data = await fetch(`http://localhost:8080/checkBal?acc=${acc}`)
            const jsondata = await data.json();
            console.log(jsondata);
            setcurr(jsondata);
        }
    }


  return (
    <div className='depositmain'>
    <div className="inp">
        <div className="inpcont">
        <h4>Check Balance</h4>
        <input type="text" placeholder='Enter Your Account No.'  ref={accval}/>
        <div className="btndiv">
        <Button onClick={fun} type='primary'>Submit</Button>
        </div>
        <div className="p">
        <p>{curr_bal===0?'':`Your current balance is ${curr_bal}`}</p>
        </div>
        </div>
    </div>
</div>
  )
}

export default Balance