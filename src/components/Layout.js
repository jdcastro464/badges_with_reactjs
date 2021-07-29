import React from 'react'
import Navbar from '../components/Navbar';

function Layout(props) {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            {props.children}
        </React.Fragment>
    )
}

export default Layout