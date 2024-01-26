const discount = (num) => {
    num = num * 0.75
    let newNum = num.toString().split('.').map(el => el.slice(0, 2)).join('.')
    return newNum
}

export default discount
