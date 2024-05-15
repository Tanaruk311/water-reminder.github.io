import React from 'react'
import { useState } from 'react'

const Watercal = () => {
    
const [weight, setWeight] =useState<number>(0);
const [bmi, setBMI] = useState<number>(0)

const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value)
    console.log(weight)
}

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const bmi = (weight * 2.2 * 30 / 2).toFixed(4);
    event.preventDefault()
    setBMI(+bmi)
    console.log(bmi)
}

  return (
    <div>
        <form onSubmit={onSubmit}>
            <h1>โปรแกรมคำนวณน้ำที่ร่างกายต้องการต่อวัน</h1>
            <br />
        <h1>ควรดื่มน้ำวันละกี่มิลลิตร จึงเพียงพอต่อร่างกาย ?</h1>
        <h2> X ml</h2>
        <label >weight</label>
        <input type="text"  onChange={onChangeWeight}/>
        <input type="submit" className='btn-submit' />
            <div className='result'>
                <h3>ปริมาณน้ำที่ควรดื่ม คือ: {bmi} ml</h3>
            </div>
        </form>
    </div>
  )
}

export default Watercal