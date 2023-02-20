import React from 'react';

const articleContent = [
    {
        imgSource: 'https://img.icliniq.com/article/thm-287-150-divalproex-sodium-2555.jpg',
        title: 'How to treat constipation in a 2-year-old?',
        body: 'Hello, Welcome to icliniq.com. I suggest you give the child syrup Duphalac (Lactulose) 10 ml twice daily for ten days, along with plenty of water for ten days. Reduce intake of bread and bakery products, milk, chocolates, and chips.',
        drName: 'Dr. Faisal Abdul Karim Malim',
        dateInfo: '17 Feb 2023 - 5 min read'
    },
    {
        imgSource: 'https://img.icliniq.com/article/thm-287-150-divalproex-sodium-2555.jpg',
        title: 'How to treat constipation in a 2-year-old?',
        body: 'Hello, Welcome to icliniq.com. I suggest you give the child syrup Duphalac (Lactulose) 10 ml twice daily for ten days, along with plenty of water for ten days. Reduce intake of bread and bakery products, milk, chocolates, and chips.',
        drName: 'Dr. Faisal Abdul Karim Malim',
        dateInfo: '17 Feb 2023 - 5 min read'
    },
    {
        imgSource: 'https://img.icliniq.com/article/thm-287-150-divalproex-sodium-2555.jpg',
        title: 'How to treat constipation in a 2-year-old?',
        body: 'Hello, Welcome to icliniq.com. I suggest you give the child syrup Duphalac (Lactulose) 10 ml twice daily for ten days, along with plenty of water for ten days. Reduce intake of bread and bakery products, milk, chocolates, and chips.',
        drName: 'Dr. Faisal Abdul Karim Malim',
        dateInfo: '17 Feb 2023 - 5 min read'
    },
    {
        imgSource: 'https://img.icliniq.com/article/thm-287-150-divalproex-sodium-2555.jpg',
        title: 'How to treat constipation in a 2-year-old?',
        body: 'Hello, Welcome to icliniq.com. I suggest you give the child syrup Duphalac (Lactulose) 10 ml twice daily for ten days, along with plenty of water for ten days. Reduce intake of bread and bakery products, milk, chocolates, and chips.',
        drName: 'Dr. Faisal Abdul Karim Malim',
        dateInfo: '17 Feb 2023 - 5 min read'
    }
]

function ArticlesCard() {
    return (
        <>
            {
                Object.keys(articleContent).map(item => {
                    return <div className='article-card'>
                                <div>
                                    <p>{articleContent[item].title}</p>
                                    <p>{articleContent[item].body}</p>
                                    <span><b>{articleContent[item].drName} </b> <span>{articleContent[item].dateInfo}</span></span>
                                </div>
                                <div style={{backgroundImage: `url(${articleContent[item].imgSource})`}}>
                                </div>
                            </div>
                })
            }
        </>
    
      )
}

export default ArticlesCard;