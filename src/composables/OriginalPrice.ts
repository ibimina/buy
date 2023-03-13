const originPrice = (price:number,percent:number) => {
    return (price + (price * percent / 100)).toFixed(2)
}
export default originPrice