import React, { useEffect } from 'react'
import "../styles/LoggedInScreen.css"
import Header from '../Header'
import Banner from '../Banner'
import Row from '../Row'
import {movieRows, seriesRows} from '../data/Rows'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'

function LoggedInScreen(props) {
  let Rows = undefined;

  if(props.type === 'movies'){
    Rows = movieRows.map(row => <Row key={row.id} title= {row.title} fetchURL={row.fetchURL} isLargeRow={row.isLargeRow}/>)
  } else {
    Rows = seriesRows.map(row => <Row key={row.id} title= {row.title} fetchURL={row.fetchURL} isLargeRow={row.isLargeRow}/>)
  }



  return (
    <div className='logedinscreen'>
      <Header isLoggedIn={props.isLoggedIn}/>
      <Banner />
      {Rows}
      <Footer />
    </div>
  )
}

export default LoggedInScreen
