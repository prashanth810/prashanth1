import React from 'react'
import Navbar from '../navbar/Navbar'
import Herobanner from '../heropage/Herobanner'
import Aboutpage from '../aboutpage/Aboutpage'
import Services from '../servicespage/Services'
import Skillspage from '../skillspage/Skillspage'
import Projectspage from '../projectspage/Projectspage'
import Footerpage from '../footerpage/Footerpage'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Herobanner />
            <Aboutpage />
            <Services />
            <Skillspage />
            <Projectspage />
            <Footerpage />
        </div>
    )
}

export default Homepage
