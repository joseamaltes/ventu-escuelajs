import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (
<div className='Main'>
    <Header/>
    {children}
</div>
);