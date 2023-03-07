import React, { useEffect } from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import { useGlobalContext } from '../../context/Context';
import Skills from '../skills/Skills';

const About = () => {
    const { updateAboutPage } = useGlobalContext();

    useEffect(() => {
        updateAboutPage()
    }, [])
    return (
        <>
            <HeroSection />
            <Skills />
        </>
    )
}

export default About