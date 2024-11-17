import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div >
            <header className='bg-[#ECE6F6]'>
                <Header></Header>
            </header>
            <main className='container mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer className='bg-[#ECE6F6]' >
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default MainLayout;