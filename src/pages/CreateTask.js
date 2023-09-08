import React from 'react';

const CreateTask = () => {
    return (
        <form className='card-body w-1/2 mx-auto'>
            <div className='form-control'>
                <label className='label'>
                    <span className='label-text'>Task Name</span>
                </label>
                <input className="input input-bordered" type="text" placeholder='type your task name' name='taskName' />
            </div>
            <div className='form-control'>
                <label className='label'>
                    <span className='label-text'>Assign to</span>
                </label>
                <input className="input input-bordered" type="text" placeholder='enter the persons email' name='taskName' />
            </div>
            <input className='bg-green-400 w-24 h-10 rounded-lg mx-auto' type="submit" value="submit" />
        </form>
    );
};

export default CreateTask;