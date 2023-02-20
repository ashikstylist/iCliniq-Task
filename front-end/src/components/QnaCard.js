import React from 'react'

const qnaContent = [
    {
        imgSource: 'https://img.icliniq.com/doc_photo/dr-faisal-abdul-karim-malim-135478-60e379a677f1a-sm.jpg',
        title: 'How to treat constipation in a 2-year-old?',
        body: 'Hello, Welcome to icliniq.com. I suggest you give the child syrup Duphalac (Lactulose) 10 ml twice daily for ten days, along with plenty of water for ten days. Reduce intake of bread and bakery products, milk, chocolates, and chips.',
        drName: 'Dr. Faisal Abdul Karim Malim'
    },
    {
        imgSource: 'https://img.icliniq.com/doc_photo/dr-faisal-abdul-karim-malim-135478-60e379a677f1a-sm.jpg',
        title: 'How to treat constipation in a 2-year-old?',
        body: 'Hello, Welcome to icliniq.com. I suggest you give the child syrup Duphalac (Lactulose) 10 ml twice daily for ten days, along with plenty of water for ten days. Reduce intake of bread and bakery products, milk, chocolates, and chips.',
        drName: 'Dr. Faisal Abdul Karim Malim'
    },
    {
        imgSource: 'https://img.icliniq.com/doc_photo/dr-faisal-abdul-karim-malim-135478-60e379a677f1a-sm.jpg',
        title: 'How to treat constipation in a 2-year-old?',
        body: 'Hello, Welcome to icliniq.com. I suggest you give the child syrup Duphalac (Lactulose) 10 ml twice daily for ten days, along with plenty of water for ten days. Reduce intake of bread and bakery products, milk, chocolates, and chips.',
        drName: 'Dr. Faisal Abdul Karim Malim'
    },
    {
        imgSource: 'https://img.icliniq.com/doc_photo/dr-faisal-abdul-karim-malim-135478-60e379a677f1a-sm.jpg',
        title: 'How to treat constipation in a 2-year-old?',
        body: 'Hello, Welcome to icliniq.com. I suggest you give the child syrup Duphalac (Lactulose) 10 ml twice daily for ten days, along with plenty of water for ten days. Reduce intake of bread and bakery products, milk, chocolates, and chips.',
        drName: 'Dr. Faisal Abdul Karim Malim'
    }
]
function QnaCard() {
  return (
    <>
        {
            Object.keys(qnaContent).map(item => {
                return <div className='qna-card'>
                            <div>
                                <img src={qnaContent[item].imgSource} />
                            </div>
                            <div>
                                <p>{qnaContent[item].title}</p>
                                <p>{qnaContent[item].body} <span>View Thread...</span></p>
                                <span>Answered By <b>{qnaContent[item].drName} </b></span>
                            </div>
                        </div>
            })
        }
    </>

  )
}

export default QnaCard