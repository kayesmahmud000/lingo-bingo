import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='bg-[#ECE6F6]'>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default AuthLayout;