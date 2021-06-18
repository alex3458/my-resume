import React from 'react';
import Header from './header';
import Footer from './footer';

const BaseLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='contents'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default BaseLayout;
