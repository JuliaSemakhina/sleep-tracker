 import React, {useState} from 'react';
 import { useForm } from 'react-hook-form';
import { useGlobalContext } from './context';
 
const UserForm = ({ isClosed, onSave }) =>{
const { register, handleSubmit, getValues } = useForm();
const { isOpened } = useGlobalContext();

  const submit = () => {
    const name = getValues("firstName");
    onSave(name);
  };
if (!isOpened) return null;

   return (
    <div className='registration_form'>
     <form onSubmit={(e)=>e.preventDefault()}>
      <input {...register("firstName")} placeholder='Enter your name'/>
      <button type='submit' onClick={submit}>OK</button>
    </form>
    <button className='form_btn' onClick={isClosed}>Close</button>
    </div>
   );
 };
 
 export default UserForm;
 

//  const values = getValues() // { test: "test-input", test1: "test1-input" }  
// const singleValue = getValues("test") // "test-input"  
// const multipleValues = getValues(["test", "test1"]) // ["test-input", "test1-input"] }} 