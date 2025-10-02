import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from './context';
import { IoMdCheckbox } from "react-icons/io";
import { ErrorMessage } from '@hookform/error-message';
import { AiFillCloseCircle } from "react-icons/ai";
import { motion, AnimatePresence } from 'framer-motion';

const UserForm = ({ isClosed, onSave }) => {
  const { register, getValues, reset, formState: { errors } } = useForm({
    mode: "onChange",
    criteriaMode: "all",
  });

  const variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  const transition = {
    duration: 0.45,
    ease: 'linear'
  };

  const { isOpened } = useGlobalContext();
  const [success, setSuccess] = useState(false);

  const submit = () => {
    const name = getValues("firstName");
    onSave(name);
    setSuccess(true);
    reset();
  };

  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          className='registration_form'
          noValidate
          autoComplete="off"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={transition}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <h3>Форма регистрации</h3>
            <input className='form_input' {...register("firstName", {
              required: true,
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                message: "Только буквы"
              },
              minLength: {
                value: 2,
                message: "Должно быть минимум два знака",
              },
            })}
              placeholder='Введите имя'
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
            <input className='form_input'
              {...register("lastName", {
                required: 'Введите фамилию',
                minLength: {
                  value: 2,
                  message: "Должно быть минимум два знака",
                }
              },
              )}
              placeholder='Введите фамилию'
              aria-invalid={!!errors.lastName}
            />

            {errors.lastName?.type === "required" && (
              <small className='error_msg'>Last name is required</small>
            )}
            {errors.lastName && errors.lastName.types && (
              <small className='error_msg'>{errors.lastName.types.minLength}</small>
            )}

            <button type='submit' className='form_btn' onClick={submit} disabled={Object.keys(errors).length > 0}>OK</button>
          </form>
          <AiFillCloseCircle type='button' className='close_btn' onClick={isClosed} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserForm;