import React from 'react'
import styled from 'styled-components';
import { Button } from '../../styles/Button';

const skills = [
    {
        "id": 1,
        "title": "HTML",
        "img": "./skills/html.png",
    },
    {
        "id": 2,
        "title": "CSS",
        "img": "./skills/css.png",
    },
    {
        "id": 3,
        "title": "JAVASCRIPT",
        "img": "./skills/javascript.jpg",
    },
    {
        "id": 4,
        "title": "REACTJS",
        "img": "./skills/react.png",
    },
    {
        "id": 5,
        "title": "REDUX",
        "img": "./skills/redux.png",
    },
    {
        "id": 6,
        "title": "NODEJS",
        "img": "./skills/node.png",
    },
    {
        "id": 7,
        "title": "EXPRESSJS",
        "img": "./skills/express.png",
    },
    {
        "id": 8,
        "title": "MONGODB",
        "img": "./skills/mongodb.png",
    },
    {
        "id": 9,
        "title": "MySQL",
        "img": "./skills/mysql.png",
    },
    {
        "id": 10,
        "title": "SASS",
        "img": "./skills/sass.png",
    },
    {
        "id": 11,
        "title": "C++",
        "img": "./skills/cplus.png",
    },
    {
        "id": 12,
        "title": "DSA",
        "img": "./skills/dsa.jpg",
    },
    {
        "id": 13,
        "title": "API",
        "img": "./skills/api.png",
    },
    {
        "id": 14,
        "title": "Github",
        "img": "./skills/github.png",
    },
    {
        "id": 15,
        "title": "JWT",
        "img": "./skills/jwt.png",
    },
    {
        "id": 16,
        "title": "MUI",
        "img": "./skills/mui.png",
    },
    {
        "id": 17,
        "title": "STYLED COMPONENTS",
        "img": "./skills/styled.jpg",
    },


]

const Skills = () => {

    return (
        <Wrapper className="section" >
            <h2 className="common-heading">SKILLS</h2>
            <div className="container grid grid-three-column">
                {skills.map((curElem) => {
                    const { id, title, img } = curElem;
                    return (
                        <div key={id} className="card" >
                            <figure>
                                <img src={img} alt={title} />
                            </figure>
                            <div className="card-data">
                                <h3>{title}</h3>
                                <a href="" target="" >
                                    <Button className='btn' >{title}</Button>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 9rem 0;
    background-color: ${({ theme }) => theme.colors.bg};

    .container{
        max-width: 100rem;
    }

    .grid{
        display: grid;
        gap: 4rem;
    }

    .card{
        border: 0.1rem solid rgb(170 170 170 / 40%);

        .card-data{
            padding: 0 2rem;
        }

        h3{
            margin: 2rem 0;
            font-weight: 300;
            font-size: 2.4rem;
        }

        .btn{
            margin: 2rem auto;
            background-color: rgb(0 0 0 / 0%);
            border: 0.1rem solid rgb(98 84 243);
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(98 84 243);

            &:hover {
                background-color: rgb(98 84 243);
                color: #fff;

            }
            &:hover a{
                color: #fff;
            }

            a{
                color: rgb(98 84 243);
                font-size: 1.4rem;
            }
        }
    }

    figure{
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        transition: all 0.5s linear;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: rgb(0, 0, 0, 0.5);
            transition: all 0.2s linear;
            cursor: pointer;
        }

        &:hover::after{
            width: 100%;
        }
        &:hover img{
            transform: scale(1.2);
        }

        img{
            max-width: 90%;
            margin-top: 1.5rem;
            height: 20rem;
            transition: all 0.2s linear;
        }
    }

    @media (max-width: ${({ theme }) => theme.media.tab}){
        .grid-three-column{
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}){
        .grid-two-column, .grid-three-column, .grid-four-column{
            grid-template-columns: 1fr;
        }
    }
`;

export default Skills;