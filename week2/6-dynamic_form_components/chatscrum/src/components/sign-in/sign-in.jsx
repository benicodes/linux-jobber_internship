import React from 'react';
import './sign-in.css';
import { dataInput } from '../../static/dataInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
    email: yup.string().required('Please enter your email'),
    password: yup.string().required('Please enter password').matches(/^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character")
}).required();

const SignIn = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => console.log(data);

    return (
        <div className="sign-in">
            <h3>Already have an account?</h3>
            <h4>Sign in here!</h4>
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
                {/* <label htmlFor="project">Project Name</label>
                <input type="text" name="project" /> */}
                <div className="button-div">
                    <button type='submit'>SIGN IN</button>
                </div>
            </form>
            <p className="question">Don't have an account? Sign Up</p>
        </div>
    )
}

export default SignIn;