import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    const Wrapper = styled.section`
        padding: 9rem 0 5rem 0;

        .map{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container{
            margin-top: 6rem;
            text-align: center;

            .contact-form{
                max-width: 50rem;
                margin: auto;

                .contact-inputs{
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;

                    input[type="submit"]{
                        cursor: pointer;
                        transition: all 0.2s;

                        &:hover{
                            background-color: ${({ theme }) => theme.colors.white};
                            border: 1px solid ${({ theme }) => theme.colors.btn};
                            color: ${({ theme }) => theme.colors.btn};
                            transform: scale(0.9);
                        }
                    }
                }
            }
        }
    `;
    return (
        <Wrapper>
            <h2 className="common-heading">My Contact Address</h2>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.80025808116!2d77.12650677114783!3d28.548733717971068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c1514f5a741%3A0x545ffeef6b14c5aa!2sMahipalpur%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1676200823974!5m2!1sen!2sin" width="1000px" height="400px" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/meqwarba" method='POST' className='contact-inputs' >
                        <input type="text" name='username' placeholder='username' autoComplete='off' required />
                        <input type="email" name='Email' placeholder='Email' autoComplete='off' required />
                        <textarea name="message" id="" cols="30" rows="6" autoComplete='off' required ></textarea>
                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default Contact