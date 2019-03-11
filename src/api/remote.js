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

async function createOrder(order, token) {
    const res = await fetch(host + 'orders/submit', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(order),
    });

    return res.json();
}

async function getOrders() {
    let token = localStorage.getItem("token");
    const res = await fetch(host + 'orders/user', {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    });

    return res.json();
}

async function likeKebab(kebabId, token) {
    const res = await fetch(host + `kebab/like/${kebabId}`, {
        method: "post",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    return res.json();
}

async function unlikeKebab(kebabId, token) {
    const res = await fetch(host + `kebab/unlike/${kebabId}`, {
        method: "post",
        headers: {
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

async function deleteKebab(kebabId) {
    let token = localStorage.getItem("token");
    const res = await fetch(host + `kebab/delete/${kebabId}`, {
        method: "delete",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    return res.json();
}

async function editKebab(kebabId, kebab) {
    let token = localStorage.getItem("token");
    const res = await fetch(host + `kebab/edit/${kebabId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(kebab),
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
    createOrder,
    getOrders,
    deleteKebab,
    editKebab,
}