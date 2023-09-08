import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useEffect } from "react";
import { FieldErrors, useForm, useFieldArray } from "react-hook-form";



const CreateGroup = () => {



    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            groupName: '',
            members: [{ name: "" }],
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: "members",
        control,
    });

    const onsubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='w-1/2 mx-auto'>
            <form onSubmit={handleSubmit(onsubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Group Name</span>
                    </label>
                    <input type="text" placeholder="type group name" className="input input-bordered"  {...register('groupName')} />
                </div>
                <div className='form-control'>
                    <label className="label">
                        <span className="label-text">Members</span>
                    </label>

                    {fields.map((field, index) =>
                        <div className='flex mt-3 items-center' key={field.id}>
                            <input type="text" className="input input-bordered w-11/12"  {...register(`members.${index}.name`)} />

                            {index > 0 && (
                                <button className='bg-red-400 rounded-lg h-7 ml-3' type="button" onClick={() => remove(index)}>
                                    Remove
                                </button>
                            )}
                        </div>
                    )}
                    <button
                        type="button"
                        className='bg-green-400 rounded-lg w-24 h-10 mx-auto mt-4'
                        onClick={() =>
                            append({
                                name: "",
                            })
                        }
                    >
                        Add member
                    </button>

                </div>
                <input type="submit" value="create" className="btn w-fit mx-auto bg-blue-500 mt-10" />
            </form>
        </div>
    );
};

export default CreateGroup;