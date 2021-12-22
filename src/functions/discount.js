function discount(discount, setDiscount, setPrice){
    const ball = document.getElementById('ball');
    const switchBall = document.getElementById('switch');
    let rangeVal = document.getElementById('range').value;

    ball.classList.toggle('active');
    switchBall.classList.toggle('active');

    setDiscount(!discount);


    let prices = [8, 12, 16, 24, 36];

    if(!discount){
        prices = prices[rangeVal] * 0.75;
        setPrice(prices);
    }
    else{
        setPrice(prices[rangeVal]);
    }
}

export default discount;