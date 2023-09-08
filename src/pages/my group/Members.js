import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Task from './Task';

const Members = () => {
    const members = useLoaderData();

    return (
        <div className="drawer lg:drawer-open">
            <input id="group-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-300">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="group-drawer" className="drawer-overlay font-semibold">Members</label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}

                    <li><Link to={`/task`}>{members?.username}</Link></li>


                </ul>

            </div>
        </div>
    );
};

export default Members;