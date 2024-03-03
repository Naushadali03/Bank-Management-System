import React, { useRef, useState } from 'react'
import {Button} from 'antd'
import './deposit.css'

function Deposit() {

    const [acc,setqcc]=useState(0);
    const [amount,setAmount]=useState(0);
    const [pan,setPan]=useState('');

    const accval = useRef();
    const val=useRef();
    const panval = useRef();
    
    const [curr,setcurr]=useState(0);

    async function fun(e){
        e.preventDefault();
        let accNo = Number(accval.current.value);
        let amountt = Number(val.current.value);
        let panv = String(panval.current.value);
        setAmount(amountt);
        setqcc(accNo);
        setPan(panv);
        if(acc!==0 && amount!==0 && pan!==''){
            const dt = await fetch(`http://localhost:8080/add-balanace?ac=${acc}&bala=${amount}&pan=${pan}`,{method:'PUT'})
          const data = await dt.json();
          setcurr(data); 
        }

    }
  return (
    <div className='depositmain'>
    <div className="inp">
        <div className="inpcont">
        <h4>Deposit</h4>
        <input type="text" placeholder='Enter Your Account No.'  ref={accval}/>
        <input type="text" placeholder='Enter Your Amount' ref={val} />
        <input type="text" placeholder='Enter Your Pan No.' ref={panval} />
        <div className="btndiv">
        <Button onClick={fun} type='primary'>Submit</Button>
        </div>
        <div className="p">
        <p>{curr===0?'':`${amount} is successfully deposited in acount no. ${acc}`}</p>
        <p>{curr===0?'':`Now Your cuurent balance is ${curr}`}</p>
        </div>
        </div>
    </div>
</div>
  )
}

export default Deposit