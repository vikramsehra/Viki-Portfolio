import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import styled from 'styled-components'


const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/" >
                <img src="./images/logo.png" alt="logo" className='logo' />
            </NavLink>
            <Navbar />
        </MainHeader>
    )
}

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        height: auto;
        max-width: 40%;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}){
        .logo{
            max-width: 60%;
        }
    }

    @media (max-width: ${({ theme }) => theme.media.tab}){
        .logo{
            max-width: 60%;
        }
    }
`;

export default Header