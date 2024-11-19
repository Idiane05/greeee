function login(username, password) {
    if (username === 'Yves' && password === 'amge123') {
        const loginResponse = {
          username: 'ange',
          email: 'ange@example.com'
        };
        localStorage.setItem(
            "user", JSON.stringify(loginResponse)
        )
        console.log("login successfully")
}
else {
console.log("login failed")
}
}

function getLoggedUser() {
    const userperson = localStorage.getItem("user")
    if (userperson) {
        console.log("userData", JSON.parse(userperson))
    
        return JSON.parse(userperson)
    }
    else {
        console.log("data not found")
        
        return null
    }
}

export {
    login,getLoggedUser
}
