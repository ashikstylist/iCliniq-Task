import React from 'react';
import Banner from '../components/common/Banner';
import Breadcrumb from '../components/common/Breadcrumb';
import CenterContainer from '../components/common/CenterContainer';
import Disclaimer from '../components/common/Disclaimer';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const CardContent = [
    {
        headerImage : 'https://img.icliniq.com/qa/thm-287-150-16482-thumb-will-i-lose-my-virginity-if-i-finger-myself.jpg',
        bodyContent : 'Will I lose my virginity if I finger myself?',
        drName: 'Dr. Neha Singh Rathod',
        icon: 'https://img.icliniq.com/doc_photo/dr-neha-singh-rathod-68317-5c9172a2af7c3-sm.jpg'
    },
    {
        headerImage : 'https://assets.icliniq.com/v2/assets/images/default-article-home-1.png',
        bodyContent : 'Where should I insert my penis during intercourse?',
        drName: 'Dr. Ashok Kumar Choudhary',
        icon: 'https://img.icliniq.com/doc_photo/drashok-budaniya-2745-58bfd140af2b3-sm.jpg'
    },
    {
        headerImage : 'https://img.icliniq.com/qa/thm-287-150-16482-thumb-will-i-lose-my-virginity-if-i-finger-myself.jpg',
        bodyContent : 'Will I lose my virginity if I finger myself?',
        drName: 'Dr. Neha Singh Rathod',
        icon: 'https://img.icliniq.com/doc_photo/dr-neha-singh-rathod-68317-5c9172a2af7c3-sm.jpg'
    },
]

const heading = [
    'Popular Question',
    'All Q&A'
]

function QnA() {

    const banner_props = () => {
        return (
            <div className='banner-article'>
                <span>Medical Answers - Curated by Top Doctors</span>
                <p>All the answers published in this website are written by Verified medical doctors, therapists and health experts. The Content has been moderated by iCliniq medical review team before publication. Post your medical clarifications on iCliniq by choosing the right specialty and get them answered. Your medical queries will be answered 24/7 by top doctors from iCliniq.</p>
            </div>
        )
    }

  return (
    <div>
        <Header />
        <Breadcrumb content={'Answers'} />
        <Banner banner_props={banner_props} />
        <CenterContainer heading={heading} CardContent={CardContent} />
        <Disclaimer />
        <Footer />
    </div>
  )
}

export default QnA