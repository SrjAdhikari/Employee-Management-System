import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const { employeesData } = useContext(AuthContext);

    return (
        <div className='rounded-lg mt-6 px-6 bg-gray-800 border-2 border-gray-700'>
            {/* Table Header */}
            <div className='bg-gradient-to-r from-blue-500 to-purple-500 mb-5 mt-5 py-3 px-6 flex rounded-lg'>
                <h2 className='text-lg text-center font-semibold text-white w-1/5'>Employee Name</h2>
                <h3 className='text-lg text-center font-semibold text-white w-1/5'>New Task</h3>
                <h5 className='text-lg text-center font-semibold text-white w-1/5'>Active Task</h5>
                <h5 className='text-lg text-center font-semibold text-white w-1/5'>Completed</h5>
                <h5 className='text-lg text-center font-semibold text-white w-1/5'>Failed</h5>
            </div>

            {/* Employee Data Rows */}
            <div>
                {employeesData?.map((item, index) => (
                    <div
                        key={index}
                        className='bg-gray-700 mb-3 py-3 px-6 flex justify-between rounded-lg border border-gray-600 hover:bg-gray-600 transition-all duration-300'
                    >
                        <h2 className='text-lg text-center font-medium text-gray-300 w-1/5'>{item.firstName}</h2>
                        <h3 className='text-lg text-center font-medium text-blue-400 w-1/5'>{item.taskCounts.newTask}</h3>
                        <h5 className='text-lg text-center font-medium text-yellow-400 w-1/5'>{item.taskCounts.active}</h5>
                        <h5 className='text-lg text-center font-medium text-green-400 w-1/5'>{item.taskCounts.complete}</h5>
                        <h5 className='text-lg text-center font-medium text-red-400 w-1/5'>{item.taskCounts.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTask;