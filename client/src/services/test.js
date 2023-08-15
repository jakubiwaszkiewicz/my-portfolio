const test = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('test')
        }, 1000)
    })
}
export default test