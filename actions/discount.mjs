const discount = (num) => {
    num = (num * 0.75).toString().split('.')
    num[1] = num[1].slice(0, 2)
    return num.join('.')
}

export default discount
