import React from 'react';
import './sign-up.css';
import { dataInput } from '../../static/dataInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
  fullname: yup.string().required('Enter Full name').min(6),
  email: yup.string().required('Please enter a valid email'),
  password: yup.string().required('Please enter password').matches(/^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character")
}).required();

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, reset  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  return (
    <div className="sign-up">
      <h3>Don't have an account?</h3>
      <h4>Sign up here!</h4>
      <form onSubmit={handleSubmit((FormData) => {
        console.log(FormData, 'formData');
      })}>
        {dataInput.signup_inputs.map((input, key) => {
          return (
            <div key={key}>
              <label className='block' htmlFor={input.name}>{input.label}</label>
              <input type={input.type} name={input.name} {...register(input.name)} />
              <span className='errMessage'>{errors[input.name]?.message}</span>
            </div>
          )
        })}
        <label htmlFor="options">User Type</label>
        <select id="options" {...register('select')}>
          <option value="Developer">Developer</option>
          <option value="Owner">Owner</option>
        </select>
        <div className="button-div">
          <button type='submit'>SIGN UP</button>
        </div>
      </form>
      <p className="question">Have an account? Sign In</p>
    </div>
  )
}

export default SignUp;