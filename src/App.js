import React from 'react';
import Card from './Card.js';
import rangeSlider from './functions/rangeSlider.js';
import discount from './functions/discount.js';

function App(){
    return(
        <div className="box-container">
            <section className="title-subtitle">
                <h3>Simple, traffic-based pricing</h3>
                <p>Sign-up for our 30-day trial. No credit card required.</p>
                <img className="circles-bg" src="img/pattern-circles.svg" alt="circles" />
            </section>

            <Card rangeSlider={rangeSlider}
                  discount={discount} />
        </div>
    );
}

export default App;
