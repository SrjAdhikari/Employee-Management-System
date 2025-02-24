import React from 'react';

const TaskListCount = ({ data }) => {
    return (
        <div className='flex mt-10 justify-between gap-6'>
            {/* New Task Card */}
            <div className="rounded-2xl w-[23%] py-6 px-6 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300">
                <h2 className='text-3xl font-bold text-white'>{data?.taskCounts?.newTask}</h2>
                <h3 className='text-xl font-medium text-gray-200'>New Task</h3>
            </div>

            {/* Completed Task Card */}
            <div className="rounded-2xl w-[23%] py-6 px-6 bg-gradient-to-r from-green-500 to-teal-500 transition-all duration-300">
                <h2 className='text-3xl font-bold text-white'>{data?.taskCounts?.complete}</h2>
                <h3 className='text-xl font-medium text-gray-200'>Completed Task</h3>
            </div>

            {/* Active Task Card */}
            <div className="rounded-2xl w-[23%] py-6 px-6 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300">
                <h2 className='text-3xl font-bold text-white'>{data?.taskCounts?.active}</h2>
                <h3 className='text-xl font-medium text-gray-200'>Active Task</h3>
            </div>

            {/* Failed Task Card */}
            <div className="rounded-2xl w-[23%] py-6 px-6 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300">
                <h2 className='text-3xl font-bold text-white'>{data?.taskCounts?.failed}</h2>
                <h3 className='text-xl font-medium text-gray-200'>Failed Task</h3>
            </div>
        </div>
    );
};

export default TaskListCount;