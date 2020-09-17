import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'

export const Error = () => {
    return (
        <Hero>
            <Banner title='404 Error' subtitle='PAGE NOT FOUND'>
                <Link to='/' className='btn-primary'>Return Home</Link>
            </Banner>
        </Hero>
    )
}
