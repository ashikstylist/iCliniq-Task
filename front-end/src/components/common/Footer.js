import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/images/ic-white-logo.svg';
import gApp from '../../assets/images/footer/google-play-store.svg';
import appStore from '../../assets/images/footer/app-store.svg';
import amEx from '../../assets/images/footer/american-express.svg';
import bankTransfer from '../../assets/images/footer/bank-transfer.svg';
import discover from '../../assets/images/footer/discover.svg';
import visa from '../../assets/images/footer/visa.svg';
import paypal from '../../assets/images/footer/paypal.svg';
import masterCard from '../../assets/images/footer/master-card.svg';
import dmca from '../../assets/images/footer/DMCA_logo-grn-btn120w.png';
import goDaddy from '../../assets/images/footer/godaddy_seal.webp';
import pin from '../../assets/images/footer/pin.webp';

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer-top'>
                <img style={{maxWidth: '100px'}} src={logo} className='white-logo' />
                <div>
                    <img  src={pin} />
                    <span>24/7 Support</span>
                </div>
            </div>
            <hr />
            <div className='footer-menu-list'>
                <div>
                    <span>Ask a Doctor Online</span>
                    <span>Chat with a Doctor</span>
                    <span>Phone a Doctor</span>
                    <span>Video Consultation</span>
                </div>
                <div>
                    <span>Tools</span>
                    <span>FAQ</span>
                    <span>Blogs</span>
                    <span>Careers</span>
                </div>
                <div>
                    <span>Get iCliniq App</span>
                    <span>Get API</span>
                    <span>Get Widget</span>
                    <span>Medical Review Team</span>
                </div>
                <div>
                    <span>For Employers</span>
                    <span>For Telegram</span>
                    <span>For Slack Teams</span>
                    <span>For MS Team</span>
                </div>
            </div>
            <div className='footer-spcl-need'>
                <span>SPECIALTIES WE COVER</span>
                <div>
                    <span>Obstetrics and Gynecology </span>
                    <span> Dermatology   </span>
                    <span>Internal Medicine   </span>
                    <span>Sexology  </span>
                    <span> Psychiatry </span>
                    <span>General Medicine  </span>
                    <span>Otolaryngology (E.N.T)    </span>
                </div>
            </div>
            <div className='footer-app-widget'>
                <span>Get iCliniq App</span>
                <div>
                    <img src={gApp} />
                    <img src={appStore} />
                </div>
            </div>
            <div className='disclaimer'>
                <b>Disclaimer:</b> No content published on this website is intended to be a substitute for professional medical diagnosis, advice or treatment by a trained physician. Seek advice from your physician or other qualified healthcare providers with questions you may have regarding your symptoms and medical condition for a complete medical diagnosis. Do not delay or disregard seeking professional medical advice because of something you have read on this website. Read our Editorial Process to know how we create content for health articles and queries.
            </div>
            <div className='pm-sl'>
                <div className='payment-method'>
                    <span>Payments Accepted</span>
                    <div>
                        <img src={discover} />
                        <img src={amEx} />
                        <img src={bankTransfer} />
                        <img src={visa} />
                        <img src={paypal} />
                        <img src={masterCard} />
                    </div>
                </div>
                <div className='social-links'>
                    <span>Follow iCliniq</span>
                    <div>
                        <div>
                            <FaFacebookF />
                        </div>
                        <div>
                            <FaTwitter />
                        </div>
                    </div>
                </div>  
            </div>
            <div className='footer-protected'>
                <img src={dmca} />
                <img src={goDaddy} />
            </div>
            <div className='footer-copyrights'>
                <span>Copyright © 2023, iCliniq - All Rights Reserved</span>
                <span>Visit other versions in US, UK, Australia, India, Philippines and Home</span>
                <span>version 12.066-7-prod  </span>
            </div>
        </div>
    </div>
  )
}

export default Footer