import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../styles/Button';

const Error = () => {
    return (
        <Wrapper>
            <div className="image-card">
                <img src="./images/error.jpg" alt="" className='image' />
                <NavLink to="/" >
                    <Button className='btn' >Go Back</Button>
                </NavLink>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`

    .image-card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .image{
            width: 700px;
            height: 400px;
        }

        .btn{
            font-size: 1.8rem;
            margin-top: 3rem;
        }
    }
        `;

export default Error