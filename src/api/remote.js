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

async function createKebab(kebab, token) {
    const res = await fetch(host + 'kebab/create', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(kebab),
    });

    return res.json();
}

async function likeKebab(kebabId, token) {
    const res = await fetch(host + `kebab/like/${kebabId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    return res.json();
}

async function unlikeKebab(kebabId, token) {
    const res = await fetch(host + `kebab/unlike/${kebabId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    return res.json();
}

async function postReview(kebabId, review, token) {
    const res = await fetch(host + `kebab/review/${kebabId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ review }),
    });

    return res.json();
}

export {
    registerUser,
    login,
    getKebabs,
    createKebab,
    likeKebab,
    unlikeKebab,
    postReview,
}