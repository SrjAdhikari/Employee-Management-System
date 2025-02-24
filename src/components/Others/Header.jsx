import React, { useEffect, useState } from 'react';
// import { setLocalStorage } from '../../utils/localStorage';

const Header = ({ data, changeUser }) => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (!data) setUserName('Admin');
        else setUserName(data.firstName);
    }, [data]);

    const logOutUser = () => {
        localStorage.setItem('LoggedInUser', '');
        changeUser('');
    };

    return (
        <div className='flex items-end justify-between p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700'>
            <h1 className='text-2xl font-medium text-gray-300'>Hello, <br />
                <span
                    className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>{userName} 👋
                </span>
            </h1>
            <button
                onClick={logOutUser}
                className='bg-gradient-to-r from-red-500 to-pink-500 text-lg font-semibold text-white px-6 py-2 rounded-2xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform shadow-lg'
            >
                Log Out
            </button>
        </div>
    );
};

export default Header;