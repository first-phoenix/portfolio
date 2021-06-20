import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Projects.css';

const Projects = () => {
    return (
        <div className='section-container'>
            < Header
                heading="My projects in short"
                details="Add lines here"

            />

            < FooterLink
                phrase="Check out"
                link="My Skills"
                toAdress="/skills"
            />
            {/* <h1>I am the projects page</h1> */}
        </div>
    );
}

export default Projects;