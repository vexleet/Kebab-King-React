const host = 'http://localhost:5000/'

async function registerUser(user) {
    const res = await fetch(host + 'auth/signup', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    return res.json();
}

async function login(user) {
    const res = await fetch(host + 'auth/login', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    return res.json();
}

async function getKebabs() {
    const res = await fetch(host + 'kebab/all');

    return res.json();
}


export {
    registerUser,
    login,
    getKebabs,
}