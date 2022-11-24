import React from 'react';
import './Style.css';
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous"></link>

const Tood = () => {
    return(
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='./calendar.svg' alt='todologo' />
                        <figcaption>add your list here</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input
                            type='text'
                            placeholder=' add item'
                            className='form-control'
                        />  
                        <i className='fa fa-plus add-btn'></i> 
                         
                        


                    </div>

                </div>

            </div>
        </>
    );
};

export default Tood;