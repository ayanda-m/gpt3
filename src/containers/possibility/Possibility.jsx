import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt='possibility' />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">
                    The possibilies are beyond your imagination
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur reiciendis, illo ad veritatis sunt optio, repellat voluptates natus vel quibusdam unde tempore sapiente minus iusto iste quis cumque temporibus nesciunt.
                </p>
                <h4>Request Early Access to Get Started </h4>
            </div>
        </div>
    )
}

export default Possibility;