import React, { useRef, useState } from 'react'
import {Button} from 'antd'
import './deposit.css'

function Transfer() {

    const [acc,setqcc]=useState(0);
    const [amount,setAmount]=useState(0);
    const [accB,setaccB]=useState(0);

    const accval = useRef();
    const val=useRef();
    const panval = useRef();
    
    const [curr,setcurr]=useState('');

    async function fun(e){
        e.preventDefault();
        let accNo = Number(accval.current.value);
        let amountt = Number(val.current.value);
        let panv = Number(panval.current.value);
        setAmount(amountt);
        setqcc(accNo);
        setaccB(panv);
        if(acc!==0 && amount!==0 && accB!==0){
            const dt = await fetch(`http://localhost:8080/trans?ac=${acc}&am=${amount}&acB=${accB}`,{method:'POST'})
          const data = await dt.text();
          console.log(data);
          setcurr(data); 
        }

    }
  return (
    <div className='depositmain'>
    <div className="inp">
        <div className="inpcont">
        <h4>Transfer</h4>
        <input type="text" placeholder='Enter Your Account No.'  ref={accval}/>
        <input type="text" placeholder='Enter Your Amount' ref={val} />
        <input type="text" placeholder='Enter Account No. of 
beneficiary.' ref={panval} />
        <div className="btndiv">
        <Button onClick={fun} type='primary'>Submit</Button>
        </div>
        <div className="p">
        <p>{curr===''?'':curr}</p>
        </div>
        </div>
    </div>
</div>
  )

  
}

export default Transfer