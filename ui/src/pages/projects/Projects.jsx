import React from 'react'
import styled from 'styled-components';
import { Button } from '../../styles/Button';
import Skills from '../skills/Skills';

const projects = [
    {
        "id": 1,
        "link": "https://vikisocial.netlify.app/",
        "title": "Social-Media App",
        "img": "./projects/social-media.png",
        "desc": "Build a UI of a Social-Media in which a left slider , main section for friend's posts, and a right sidebar."
    },
    {
        "id": 2,
        "link": "https://video-share.netlify.app/",
        "title": "Video Share App",
        "img": "./projects/video-share.png",
        "desc": "Build a UI of a Video Share App. by using react with Dark/Light mode functionality.Using react router for route diff. pages. A Sign in page ."
    },
    {
        "id": 3,
        "link": "https://vikinotesapp.netlify.app/",
        "title": "Notes App",
        "img": "./projects/note.png",
        "desc": "Build a Notes App using Javascript, Html, Css. in which a note can add with a title and description ."
    },
    {
        "id": 4,
        "link": "https://vikidrawingapp.netlify.app/",
        "title": "Drawing or Paintig App",
        "img": "./projects/paint.png",
        "desc": "Build a Javascript based Painting or Drawing App. In which a user can draw painting with brush and eraser"
    },
    {
        "id": 5,
        "link": "https://vikihotel.netlify.app/",
        "title": "Hotel Booking App",
        "img": "./projects/hotel.png",
        "desc": "Work on a project to develope a Hotel Booking Application."
    },
    {
        "id": 6,
        "link": "https://vikiwordscramble.netlify.app/",
        "title": "Word Scramble Game",
        "img": "./projects/scramble.png",
        "desc": "Develop a word scramble game by using javascript with a timer."
    },
    {
        "id": 7,
        "link": "https://vikishop.netlify.app/",
        "title": "E-Commerce Website",
        "img": "./projects/shop.png",
        "desc": "Building a UI of a E-Commerce website using React Js."
    }

]

const Projects = () => {

    return (
        <>
            <Wrapper className="section" >
                <h2 className="common-heading">Projects</h2>
                <div className="container grid grid-three-column">
                    {projects.map((curElem) => {
                        const { id, link, title, img, desc } = curElem;
                        return (
                            <div key={id} className="card" >
                                <figure>
                                    <img src={img} alt={title} />
                                </figure>
                                <div className="card-data">
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                    <a href={link} target="_blank" >
                                        <Button className='btn' >Open App</Button>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Wrapper>
            <Skills />
        </>
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

export default Projects;