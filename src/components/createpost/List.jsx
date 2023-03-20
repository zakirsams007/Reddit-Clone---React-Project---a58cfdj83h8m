import React from 'react'
import './List.css';
import './Post.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { PostData } from './PostData';

const List = () => {
    return (
        <>
            {
                PostData.map(item => {
                    const { vote, description } = item;
                    return (
                        <div className="list">
                            <div className="sidebox">

                                <Tippy content={<p>UpVote</p>}>
                                    <i class="fas fa-arrow-up"></i>
                                </Tippy>

                                <span>{vote}</span>

                                <Tippy content={<p>DownVote</p>}>
                                    <i class="fas fa-arrow-down"></i>
                                </Tippy>

                            </div>
                            <div className="box">
                                <div className='title'>
                                    
                                    <div>
                                        <button className='btn'>join</button>  
                                    </div>

                                </div>
                                <div className='posttext'>
                                    <h4>{description}</h4>
                                </div>
                                <div className='like'>
                                    <div><i class="fas fa-comment"></i> Comment</div>
                                    <div><i class="fas fa-share"></i> Share</div>
                                    <div><i class="fas fa-bookmark"></i> Save</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default List;