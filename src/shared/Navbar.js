import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(authContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const menuList = <>
        <li><Link to='/createGroup'>create group</Link></li>
        <li><Link to='/myGroup'>my group</Link></li>
        <li><Link to='/createTask'>create task</Link></li>
        <li><Link to='/profile'>profile</Link></li>
        {
            user?.uid ?
                <>
                    <li><button onClick={handleLogOut}>log out</button></li>
                </>
                :
                <><li><Link to='/signin'>sign in</Link></li>
                    <li><Link to='/signup'>sign up</Link></li></>

        }

    </>
    return (
        <div className="navbar bg-base-100 justify-between" >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuList}
                    </ul>
                </div>
                <Link to='/signin' className="btn btn-ghost normal-case text-xl">Task management</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuList}
                </ul>

            </div>
            <label htmlFor='dashboard-drawer' tabIndex={1} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;