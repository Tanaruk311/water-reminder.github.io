import'./Toggle.css'
export const Toggle =  ({handleChange,isChecked}:{ handleChange:any, isChecked:boolean }) =>  {


    return (
      <div className="toggle-container">
        <input type="checkbox"
         id='check'
         
      className='toggle'
       onChange={handleChange}
      checked = {isChecked}/>  
      <label htmlFor="check">Theme Mode</label>
      </div>
    );
  };

  

