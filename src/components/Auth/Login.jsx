import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className="bg-gray-800 p-12 rounded-2xl shadow-2xl transform transition-all duration-500 border-2 border-gray-700">
                <h1 className='text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'> Welcome Back </h1>

                <form
                className='flex flex-col items-center justify-center gap-5'
                onSubmit={submitHandler}
                >
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full outline-none bg-gray-700 border-2 border-gray-600 rounded-xl py-4 px-6 placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 font-medium text-white text-lg'
                    type="email"
                    name="email"
                    required
                    placeholder='Enter your email'
                    />
                
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full outline-none bg-gray-700 border-2 border-gray-600 rounded-xl py-4 px-6 placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 font-medium text-white text-lg'
                    type="password"
                    name="password"
                    required
                    placeholder='Enter your password'
                    />

                    <button
                        className='w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg py-4 px-8 mt-8 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform active:scale-95 shadow-lg hover:shadow-xl'
                        type='submit'
                    >
                        Login
                    </button>
                </form>

                <p className='text-center text-gray-400 mt-8'>
                    Don't have an account?{' '}
                    <a href="#" className='text-blue-400 hover:underline'>
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;