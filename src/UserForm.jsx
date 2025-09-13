 import React, {useState} from 'react';
 import { useForm } from 'react-hook-form';
import { useGlobalContext } from './context';
import { IoMdCheckbox } from "react-icons/io";
import { ErrorMessage } from '@hookform/error-message';
import { AiFillCloseCircle } from "react-icons/ai";
 
const UserForm = ({ isClosed, onSave }) =>{
const { register, setError, getValues, reset, formState: { errors } } = useForm({
    mode: "onChange",
     criteriaMode: "all",
  });

const { isOpened } = useGlobalContext();
const [success, setSuccess] = useState(false);
// const inputs = [
//             {
//               type: "manual",
//               name: "firstName",
//               message: "First Name is required",
//             },
//             {
//               type: "manual",
//               name: "lastName",
//               message: "Last Name is required",
//             },
//           ];

  const submit = () => {
    const name = getValues("firstName");
    onSave(name);
    setSuccess(true);
    reset();
    // inputs.forEach(({ name, type, message }) =>
    //         setError(name, { type, message })
    //       );
  };

if (!isOpened) return null;

   return (
    <div className='registration_form' noValidate autoComplete="off">
     <form onSubmit={(e)=>e.preventDefault()}>
     <h3>Registration Form</h3>
      <input {...register("firstName", {
          required: true,
          pattern: {
            value: /^[A-Za-zА-Яа-яЁё\s]+$/,
            message: "Only letters are valid"
          },
            minLength: {
            value: 2,
            message: "This input is less than minLength",
          },
          })} 
          placeholder='Enter your name'
          aria-invalid={!!errors.firstName} />
          <ErrorMessage
        errors={errors}
        name="firstName"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <small className='error_msg' key={type}>{message}</small>
          ))
        }
        />
      {/* {errors.firstName && <p>{errors.firstName.message}</p>} */}
      <input 
      {...register("lastName", { 
      required: 'Enter your last name',
          minLength: {
            value: 2,
            message: "This input is less than minLength.",
          }
      },
      )} 
      placeholder='Enter your last name'
        aria-invalid={!!errors.lastName}
      />
      {/* <ErrorMessage errors={errors} name="lastName" message="This is required" /> */}
       {errors.lastName?.type === "required" && (
        <small className='error_msg'>Last name is required</small>
      )}
       {errors.lastName && errors.lastName.types && (
        <small className='error_msg'>{errors.lastName.types.minLength}</small>
      )}
        {/* {errors.lastName && <p>{errors.lastName.message}</p>} */}
   
      <button type='submit' className='form_btn' onClick={submit} disabled={Object.keys(errors).length > 0}>OK</button>
    </form>
    <AiFillCloseCircle className='close_btn' onClick={isClosed}/>
    {/* <button className='form_btn' >Close</button> */}
    </div>
   );
 };
 
 export default UserForm;