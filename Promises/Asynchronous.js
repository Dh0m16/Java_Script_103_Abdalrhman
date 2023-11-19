console.log('Start')
function userInfo(name) {
    setTimeout(() => {
        console.log('** User info received **')
    }, 3000);
}

let userName = userInfo('khalid')
console.log(userName)
console.log('End')