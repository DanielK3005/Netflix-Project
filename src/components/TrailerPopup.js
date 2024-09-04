import React from 'react'
import CloseImg from "../resources/close_button.png"
import YouTube from 'react-youtube'
import "./styles/TrailerPopup.css"

function TrailerPopup(props) {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

  return (
    (props.videoId) ? ((props.trigger) ? (<div className='popup'>
      <img src={CloseImg} alt="" className="popup__closebutton" onClick={() => props.SetShow(false)} />
      <YouTube videoId={props.videoId} opts={opts} className='popup__video' />
    </div>) : "") : <h2 style={{color: "white", textAlign: "center", paddingTop: "20px", paddingBottom: "20px"}}>No Video To Show</h2>
  )
}

export default TrailerPopup
