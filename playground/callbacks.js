setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Darshil', 'Rehaan', 'Shanay']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data)
    }, 3000)
}

geocode('Mumbai', (data) => {
    console.log(data)
})

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 1000)
}

add(1, 4, (sum) => {
    console.log(sum) 
})