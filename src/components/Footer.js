import React from 'react'
import "../styles/footer.css";
import { AccordionIcon } from '@chakra-ui/react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <footer className="ourServices">
                    <div className='footer-item'>
                        <span className="footer-title">Services</span>
                        <button>Branding</button>
                        <button>Design</button>
                        <button>Marketing</button>
                        <button>Advertisement</button>
                    </div>
                    <div className='footer-item'>
                        <span className="footer-title">Company</span>
                        <button>About us</button>
                        <button>Contact</button>
                        <button>Jobs</button>
                        <button>Press kit</button>
                    </div>
                    <div className='footer-item'>
                        <span className="footer-title">Legal</span>
                        <button>Terms of use</button>
                        <button>Privacy policy</button>
                        <button>Cookie policy</button>
                    </div>
                </footer>
            </div>
            <footer className="socialMedia">
                <div className="items-center">
                    <i class="fa fa-hashtag text-white fs-4"></i>
                    <p className='font-bold'>BUILT BY KHALED.</p>
                </div>
                <div className="social-icon">
                    <a href="https://github.com/khaledelgamely"><i className='fa fa-github text-white fs-4 ' type="button"></i></a>
                    <a href="https://www.linkedin.com/in/khalid-elgamely-874470242/"><i className='fa fa-linkedin text-white fs-4 ' type="button"></i></a>
                    <a href=""><i className='fa fa-instagram text-white fs-4 ' type="button"></i></a>
                </div>
            </footer>
        </div>
    )   
}

export default Footer