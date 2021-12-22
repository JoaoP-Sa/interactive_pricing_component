import React from 'react';
import { useState } from 'react';

function Card(props){
    const [value, setValue] = useState(2);
    const [price, setPrice] = useState(16);
    const [discount, setDiscount] = useState(false);
    const [pageView, setPageView] = useState('100K');

    return(
        <div className="container">
            <form>
                <section className="prices">
                    <div className="price-rules">
                        <span>{pageView}&nbsp; PAGEVIEWS</span>

                        <div className="price-mounth desktop">
                            <strong>${parseFloat(price).toFixed(2)}</strong>
                            <span> / mounth</span>
                        </div>
                    </div>

                    <input type="range" min="0" max="4" steps="1" value={value} id="range"
                                                        onChange={(item) => props.rangeSlider(item, setValue, setPageView, setPrice, discount)} />

                        <div className="price-mounth mobile">
                            <strong>${parseFloat(price).toFixed(2)}</strong>
                            <span> / mounth</span>
                        </div>
                
                    <div className="time-billing">
                        <span>Monthly Billing</span>

                        <div className="switch" id="switch" onClick={() => props.discount(discount, setDiscount, setPrice)} >
                            <span className="circle" id="ball"></span>
                        </div>

                        <span>Yearly Billing</span>
                        <div className="discount desktop"><span>25% discount</span></div>
                        <div className="discount mobile"><span>-25%</span></div>
                    </div>
                </section>

                <section className="start-trial">
                        <div className="benefits">
                            <p><img src="img/icon-check.svg" alt="check" />&nbsp;&nbsp;&nbsp;&nbsp;  Unlimited websites</p>
                            <p><img src="img/icon-check.svg" alt="check" />&nbsp;&nbsp;&nbsp;&nbsp; 100% data ownership</p>
                            <p><img src="img/icon-check.svg" alt="check" />&nbsp;&nbsp;&nbsp;&nbsp; Email reports</p>
                        </div>

                        <button className="trial-button" type="submit">Start my trial</button>
                </section>
            </form>
        </div>
    );
}

export default Card;