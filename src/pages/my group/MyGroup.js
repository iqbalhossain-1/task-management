import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Members from './Members';

const MyGroup = () => {
    const { data: AllGroups = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-300">
                <Members ></Members>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay font-bold">All Groups</label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        AllGroups.map(grp => <li key={grp.id}><Link to={`/myGroup/${grp.id}`}>{grp.name}</Link></li>)
                    }

                </ul>

            </div>
        </div>
    );
};

export default MyGroup;