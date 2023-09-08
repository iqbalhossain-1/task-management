import React from 'react';
import Navbar from '../shared/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const MyGroupLayout = () => {
    const { data: AllGroups = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="group-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-300">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side border-r-2 border-gray-600">
                    <label htmlFor="group-drawer" className="drawer-overlay font-semibold">groups</label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {
                            AllGroups.map(grp => <li><Link to={`/myGroup/${grp.id}`}>{grp.name}</Link></li>)
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default MyGroupLayout;