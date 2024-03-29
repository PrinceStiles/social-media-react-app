import { EmojiEmotions, Style, Collections, Room } from '@mui/icons-material'
import React from 'react'
import './share.css'

const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/1.jpg" alt="" className="shareProfileImg" />
                <input placeholder="What's on your mind Prince?" className="shareInput" />
            </div>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <Collections htmlColor='tomato' className='shareIcon' />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Style htmlColor='blue' className='shareIcon' />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon' />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='gold' className='shareIcon' />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share