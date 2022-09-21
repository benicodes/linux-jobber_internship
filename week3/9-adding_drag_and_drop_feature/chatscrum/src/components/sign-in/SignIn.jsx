import React from 'react';
import './sign-in.css';
import { dataInput } from '../../static/dataInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';


const schema = yup.object().shape({
    email: yup.string().required('Please enter your email'),
    password: yup.string().required('Please enter password').matches(/^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character"),
    projname: yup.string().required('Please enter project name'),
}).required();

const SignIn = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => console.log(data);

    return (
        <div className="sign-in">
            <div>
                <h3 className='h3'>Already have an account?</h3>
                <h4 className='h4'>Sign in here!</h4>
                <form onSubmit={handleSubmit((FormData) => {
                    console.log(FormData, 'formData');
                })}>
                    {dataInput.signin_inputs.map((input, key) => {
                        return (
                            <div key={key}>
                                <label className='block' htmlFor={input.name}>{input.label}</label>
                                <input type={input.type} name={input.name} {...register(input.name)} />
                                <span className='errMessage'>{errors[input.name]?.message}</span>
                            </div>
                        )
                    })}
                    <div className="signinBtn-div">
                        <Link to='/scrumboard'>
                            <button className='signinBtn' type='submit'>SIGN IN</button>
                        </Link>
                    </div>
                </form>
                <p className="question">Don't have an account?
                    <Link className='link' to='/signup'> Sign Up</Link>
                </p>
                <p className="question">
                    <Link className='link' to='/'> Back to Home</Link>
                </p>
            </div>
        </div>
    )
}

export default SignIn;