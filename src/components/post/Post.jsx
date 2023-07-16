import { MoreVert, ShortText } from '@mui/icons-material'
import React, { useState } from 'react'
import './post.css'
import { Users } from '../../dummydata'

const Post = ({post}) => {
    const [like, setLike] = useState(post.like)
    const [isliked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isliked ? like-1 : like+1);
        setIsLiked(!isliked)
    }
  return (
    <React.Fragment>
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <div className="post-images">
                        <div className="post-images1">
                            <img src={post.photo} alt="" />
                            <img src="/assets/post/1.jpeg" alt="" />
                            <img src="/assets/post/1.jpeg" alt="" />
                        </div>
                        <div className="post-images2">
                            <img src="/assets/post/1.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" onClick={likeHandler}/>
                        <img src="assets/heart.png" alt="" className="likeIcon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <ShortText />
                        <span className="postCommentText">{post.comments} comments</span>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Post