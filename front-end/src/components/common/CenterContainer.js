import React from 'react';
import { useLocation } from "react-router-dom";
import SideHeader from './SideHeader';
import Card from './Card';
import articleTrend from '../../assets/images/article-trend.webp';
import articlePost from '../../assets/images/article-post.webp';
import Pills from './Pills';
import QnaCard from '../QnaCard';
import {AiFillForward, AiOutlineMail} from 'react-icons/ai';
import ArticlesCard from '../ArticlesCard';

const pillArr = ['Internal Medicine', 'Abstraction', 'Dermotology', 'Neurology', 'More'];

function CenterContainer(props) {
    const {CardContent, heading} = props;
    const location = useLocation();

  return (
    <div className='center-container'>
        <div>
            <SideHeader icon={articleTrend} heading={heading[0]} />
            <div className='card-wrapper'>
                {
                    Object.keys(CardContent).map(item => {
                        return <Card headerImage={CardContent[item].headerImage} bodyContent={CardContent[item].bodyContent} icon={CardContent[item].icon} drName={CardContent[item].drName} dateInfo={CardContent[item].dateInfo ? CardContent[item].dateInfo : false} />
                    })
                }
            </div>
            <div className='pill-wrapper'>
                <span>Top Specialities : </span>
                {
                    pillArr.map(item => {
                        return <Pills arr={item} />
                    })
                }
            </div>
            <SideHeader icon={articlePost} heading={heading[1]} />
            {location.pathname.includes('articles') && (
                <p className='all-health-headings'>Get the latest health articles everything from women's health, men's health, children's health issues. Check out the latest health feeds and explore articles on the major topics of pregnancy, sex, periods, cancer, thyroid, flu, fever, skin care, diet, nutrition, Ipill from the top doctors, health experts in all specialties such as Gynecology, Dermatology, Dental, Sexology and so on. All the articles published in this website are written by Verified medical doctors, therapists and health experts. The Content has been moderated by iCliniq medical review team before publication.</p>
            )}
            <div className='qna-wrapper'>
            {location.pathname.includes('articles') ? <ArticlesCard /> :  <QnaCard />}
            </div>
            <span className='next-page-btn'>Next Page <AiFillForward  style={{fontSize: '22px', marginLeft: '5px'}}/></span>
        </div>
        <div>
            <div className='chat-offer'>
                <img src={'https://assets.icliniq.com/v2/img/chat-offer.png'} />
                <p>Chat with a Doctor</p>
                <p>Starting @ just Rs.349</p>
                <button className='chat-offer-btn'> <AiOutlineMail style={{marginRight: '10px'}} />  Start Chat</button>
            </div>
            <div className='search-health-issue'>
                <b>Search for a Health Issue</b>
                <div>
                    <input type='text' placeholder='Search a health'/>
                    <button>Search</button>
                </div>
            </div>
            
            {location.pathname.includes('articles') && (
                    <div className='also-read'>
                        <p>Also Read</p>
                        <hr />
                        <div>
                            <p>Impact of COVID-19 on Female Sexual Health</p>
                            <span>Women have been affected and still face the consequences of Coronavirus on their sexual health.</span>
                            <span> Read More</span>
                        </div>
                        <div>
                            <p>Impact of COVID-19 on Female Sexual Health</p>
                            <span>Women have been affected and still face the consequences of Coronavirus on their sexual health.</span>
                            <span> Read More</span>
                        </div>
                        <div>
                            <p>Impact of COVID-19 on Female Sexual Health</p>
                            <span>Women have been affected and still face the consequences of Coronavirus on their sexual health.</span>
                            <span> Read More</span>
                        </div>
                    </div>
            )}
        </div>
    </div>
  )
}

export default CenterContainer