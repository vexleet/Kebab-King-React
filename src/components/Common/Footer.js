import React from 'react';
import { Footer } from 'mdbreact';

const FooterTest = () => {
    return (
        <Footer id='footer' color='orange' className='footer-copyright text-center py-3'>
            &copy; Kebab King  {(new Date().getFullYear())}
        </Footer>
    )
}

export default FooterTest;