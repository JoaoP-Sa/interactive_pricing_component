function rangeSlider(item, setValue, setPageView, setPrice, discount){
    const pageViews = ['10K', '50K', '100K', '500K', '1M'];
    let range = item.target;
    let itemValue = item.target.value;
    
    setValue(itemValue);
    setPageView(pageViews[itemValue]);

    let rangeValue = (itemValue * 100) / item.target.max;
    let color = 'linear-gradient(90deg, #a2f3ec ' + rangeValue + '%, #ecf3fd ' + rangeValue + '%)';

    range.style.background = color;
    range.style.MozBackground = color;
    range.style.WebkitBackground = color;

    let prices = [8, 12, 16, 24, 36];
    
    if(discount){
        prices = prices[itemValue] * 0.75;
        setPrice(prices);
    }
    else{
        setPrice(prices[itemValue]);
    }
}

export default rangeSlider;