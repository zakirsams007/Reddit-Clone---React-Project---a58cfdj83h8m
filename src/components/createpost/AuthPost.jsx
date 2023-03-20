import React, { useEffect, useState } from 'react'
import './Post.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useAuth0 } from "@auth0/auth0-react";

const AuthPost = ({ post, onDelete }) => {
    const {isAuthenticated } = useAuth0();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const allCount = localStorage.getItem('count');
        if (allCount) {
            setCount(parseInt(allCount));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count])

    const plusCount = () => {
        setCount(count + 1)
    }
    const minCount = () => {
        if (count !== 0) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className="list">
                {
                    isAuthenticated ? (
                        <>
                            <div className="sidebox">
                                <i class="fas fa-arrow-up" onClick={plusCount}></i>
                                <span>{count}</span>
                                <i class="fas fa-arrow-down" onClick={minCount}></i>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="sidebox">
                                <i class="fas fa-arrow-up"></i>
                                <span>{count}</span>
                                <i class="fas fa-arrow-down"></i>
                            </div>
                        </>
                    )
                }
                <div className="box">
                    <div className='title'>
                        <button className='btn'>join</button>
                        {
                            isAuthenticated ? (
                                <Tippy content={<p>Hide</p>}>
                                   
                                </Tippy>
                            ) : (
                                <Tippy content={<p>Please Login</p>}>
                                    
                                </Tippy>
                            )
                        }
                    </div>
                    <div className='posttext'>
                        <h4>{post}</h4>
                    </div>
                    <div className='like'>
                        <div><i class="fa-solid fa-comment"></i> Comment</div>
                        <div><i class="fas fa-share"></i> Share</div>
                        <div><i class="fas fa-bookmark"></i> Save</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthPost;