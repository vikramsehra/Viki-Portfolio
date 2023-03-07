import React, { useEffect } from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import { useGlobalContext } from '../../context/Context'
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';


const Home = () => {
    const { updateHomePage } = useGlobalContext();

    useEffect(() => {
        updateHomePage()
    }, [])
    return (
        <>
            <HeroSection />
            <Projects />
            {/* <Skills /> */}
            <Contact />
        </>
    )
}

export default Home