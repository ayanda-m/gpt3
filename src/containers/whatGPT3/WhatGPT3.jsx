import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title='What is GPT-3' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia odio excepturi, sunt vel possimus hic illum qui quibusdam maxime rerum consequatur accusantium dolores quasi provident, ipsa tempore culpa. Quo, odit.' />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title='Chatbots' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia odio excepturi, sunt vel possimus hic illum qui quibusdam maxime rerum consequatur accusantium' />
                <Feature title='Knowledgebase' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia odio excepturi, sunt vel possimus hic illum qui quibusdam maxime rerum consequatur accusantium' />
                <Feature title='Education' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia odio excepturi, sunt vel possimus hic illum qui quibusdam maxime rerum consequatur accusantium' />
            </div>
        </div>
    )
}

export default WhatGPT3;