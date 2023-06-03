import { MoreVert } from '@mui/icons-material'
import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Prince Stiles</span>
                    <span className="postDate">5h ago</span>
                </div>
                <div className="postRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey Programmer! If the code runs, don't touch it!</span>
                <img src="/assets/post/1.jpeg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" alt="" className="likeIcon" />
                    <img src="assets/heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">32 people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">10 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post