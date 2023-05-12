import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './import'
import './blog.css';

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id=''>
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date='May 12, 2023' title='GPT-3 and Open AI is the future. Let us explore how it works' />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date='May 12, 2023' title='GPT-3 and Open AI is the future. Let us explore how it works' />
                    <Article imgUrl={blog03} date='May 12, 2023' title='GPT-3 and Open AI is the future. Let us explore how it works' />
                    <Article imgUrl={blog04} date='May 12, 2023' title='GPT-3 and Open AI is the future. Let us explore how it works' />
                    <Article imgUrl={blog05} date='May 12, 2023' title='GPT-3 and Open AI is the future. Let us explore how it works' />
                </div>
            </div>
        </div>
    )
}

export default Blog;