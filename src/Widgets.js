import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading,subtitle) => {
        return (
        <div className='widgets__article'>
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )
    }
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>Linked in news</h2>
            <InfoIcon/>
        </div>
        <div className="widgets__body">
            {newsArticle('google massive layoff','google layed of 12,000 employess')}
            {newsArticle('Here comes the future','AI and ML to lead us into the future')}
            {newsArticle('facebook','hiring react developers')}
            {newsArticle('ISRO and IITs','ISRO chairman on iitians')}
            {newsArticle('devops','deops role needed in many companies')}
            {newsArticle('Tesla','Tesla to hit new hights this year')}
            {newsArticle('Starlink','starlink satellites to be increased massively this year')}
        </div>
    </div>
  )
}

export default Widgets