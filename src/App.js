/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useState, useEffect } from 'react';
import TitaMenu from './Components/Menu'
import {  Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import axios from 'axios';

const setPortfolioStyle = (mode) =>
{
    if(mode === 'grid')
    {
      document.getElementById('results').style=`display:flex;
      flex-direction: row;
      flex-wrap: wrap;
      width:90%;
      margin-left: 5%;
      align-items: center;
     `
    }
    else
    {
      document.getElementById('results').style=`display:flex;
      flex-direction: column;
      flex-wrap: wrap;
      width:100%;
      margin-left: 5%;
      align-items: center;
      height:auto`
    }
}
function App() {

  const [imageList, setImageList] = useState([])
  const [actualPage, setActualPage] = useState(1)
  const [actualMode, setActualMode] = useState('grid')
  

  useEffect(() => {  

    axios.get(`https://api.unsplash.com/photos?per_page=9&client_id=XNSyd1ulXkv_di0bLV5WNOg8u2cysQJhEVP6bYlXEd0&page=${actualPage}`)
    .then(response => {
        var urls = []
        response= response.data 
        if(imageList.length!==0)
        {
          urls = [...imageList]
        }
        response.forEach(element => {
          if(!urls.find(item=>element.urls.thumb===item))
            urls.push(element.urls.thumb)
          
        });
        setImageList(urls)
        setPortfolioStyle(actualMode)
      
    })
    .catch(e => {
      console.log(e)
    })
   
    

  },[actualPage]);
 
  



  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img alt="LOGO" src="https://i.ibb.co/YypWn9F/rsz-captura-de-pantalla-584.png"></img>
        </div>
        <TitaMenu></TitaMenu>
      </header>
      <div className="body">
          <div className="main-banner">

            <div className="main-banner-title">Explore Beyond Horizon</div>
            <div className="main-banner-subtitle">Magna mundi referrentur quo, no rebur dgnissin qui. Per custoudia id, agam labores</div>
            <div className="main-banner-cta">
            <Button classes={{ label: 'main-banner-cta-btn' }} >View Our Work</Button>

            </div>

          </div>
          <div className="grid-menu">
            <div className="grid-view" onClick={()=>setPortfolioStyle('grid')}><span className="grid-btn">&nbsp;</span><span className="grid-btn">&nbsp;</span><span className="grid-btn">&nbsp;</span><span className="grid-btn">&nbsp;</span></div>
            <div className="list-view" onClick={()=>setPortfolioStyle('list')}><span className="list-btn">&nbsp;</span><span className="list-btn">&nbsp;</span></div>

          </div>
          <div className="portfolio-menu"><TitaMenu></TitaMenu></div>
          <div className="portfolio-content" id="results" >
          

            {imageList.map(element=><div className="result-container"><img src={element} alt="element" key={element} /></div>)}

          </div>
          <div className="portfolio-pager">
          <Button classes={{ label: 'pager-btn' }} onClick={()=>setActualPage(actualPage+1)}>Show Me More</Button>
          </div>
      </div>
      <footer className="App-footer">
        <div className="copy">
           &copy; 2015 - <span className="sneak-name">Sneak</span> All rights reserved
        </div>
        <div className="social">
          <FacebookIcon></FacebookIcon>
          <TwitterIcon></TwitterIcon>
          <YouTubeIcon></YouTubeIcon>
      
        </div>
      </footer>
    </div>
  );
}

export default App;
