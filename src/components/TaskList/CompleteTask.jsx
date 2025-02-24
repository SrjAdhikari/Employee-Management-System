import React from 'react';

const CompleteTask = ({ data }) => {
    return (
        <div className="flex-shrink-0 h-full w-[300px] p-6 bg-gray-800 rounded-2xl shadow-2xl border-2 border-gray-700 transition-all duration-500">
            <div className='flex justify-between items-center'>
                <h3 className='text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-teal-500 text-white shadow-md uppercase tracking-wide transition-all duration-300'>
                    {data.category}
                </h3>
                <h4 className='text-sm text-gray-400'>{data.date}</h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold text-gray-200'>{data.title}</h2>
            <p className='text-sm mt-3 text-gray-400'>{data.description}</p>

            <div className='mt-5'>
                <button className='w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold py-2 px-3 text-lg rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform active:scale-95 shadow-md'>
                    ✅ Completed
                </button>
            </div>
        </div>
    );
};

export default CompleteTask;