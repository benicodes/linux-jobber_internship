import React from 'react';
import './sign-up.css';
import { dataInput } from '../../static/dataInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';


const schema = yup.object().shape({
  fullname: yup.string().required('Enter Full name').min(6),
  email: yup.string().required('Please enter a valid email'),
  password: yup.string().required('Please enter password').matches(/^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character"),
  projname: yup.string().required('Enter project name'),
}).required();

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  return (
    <div className="sign-up">
      <div>
        <h3 className='h3'>Don't have an account?</h3>
        <h4 className='h4'>Sign up here!</h4>
        <form onSubmit={handleSubmit((FormData) => {
          console.log(FormData, 'formData');
        })}>
          {dataInput._inputs.map((input, key) => {
            return (
              <div key={key}>
                <label className='block' htmlFor={input.name}>{input.label}</label>
                <input type={input.type} name={input.name} {...register(input.name)} />
                <span className='errMessage'>{errors[input.name]?.message}</span>
              </div>
            )
          })}
          <label htmlFor="options">User Type</label>
          <select id="options" {...register('select')} name='usertype'>
            <option value="user">User</option>
            <option value="owner">Owner</option>
          </select>
          <div className="signupBtn-div">
            <button type='submit' className='signupBtn'>SIGN UP</button>
          </div>
        </form>
        <p className="question">Have an account?
          <Link to='/signin' className='link'> Sign In</Link>
        </p>
        <p className="question">
          <Link to='/' className='link'>Back to Home</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp;