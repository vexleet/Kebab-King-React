const host = 'http://localhost:5000/';

function getToken() {
    return localStorage.getItem("token");

}

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

async function getStats() {
    const res = await fetch(host + 'stats');

    return res.json()
}

async function createKebab(kebab) {
    const res = await fetch(host + 'kebab/create', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
        body: JSON.stringify(kebab),
    });

    return res.json();
}

async function createOrder(order) {
    const res = await fetch(host + 'orders/submit', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
        body: JSON.stringify(order),
    });

    return res.json();
}

async function getOrders() {
    const res = await fetch(host + 'orders/user', {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        }
    });

    return res.json();
}

async function pendingOrders() {
    const res = await fetch(host + 'orders/pending', {
        headers: {
            "Authorization": `Bearer ${getToken()}`,
        }
    });

    return res.json();
}

async function approveOrder(orderId) {
    let token = localStorage.getItem("token");
    const res = await fetch(host + `orders/approve/${orderId}`, {
        method: "post",
        headers: {
            "Authorization": `Bearer ${getToken()}`,
        }
    });

    return res.json();
}

async function likeKebab(kebabId) {
    const res = await fetch(host + `kebab/like/${kebabId}`, {
        method: "post",
        headers: {
            "Authorization": `Bearer ${getToken()}`,
        },
    });

    return res.json();
}

async function unlikeKebab(kebabId) {
    const res = await fetch(host + `kebab/unlike/${kebabId}`, {
        method: "post",
        headers: {
            "Authorization": `Bearer ${getToken()}`,
        },
    });

    return res.json();
}

async function postReview(kebabId, review) {
    const res = await fetch(host + `kebab/review/${kebabId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ review }),
    });

    return res.json();
}

async function deleteKebab(kebabId) {
    const res = await fetch(host + `kebab/delete/${kebabId}`, {
        method: "delete",
        headers: {
            "Authorization": `Bearer ${getToken()}`,
        },
    });

    return res.json();
}

async function editKebab(kebabId, kebab) {
    const res = await fetch(host + `kebab/edit/${kebabId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
        body: JSON.stringify(kebab),
    });

    return res.json();
}

export {
    registerUser,
    login,
    getKebabs,
    getStats,
    createKebab,
    likeKebab,
    unlikeKebab,
    postReview,
    createOrder,
    getOrders,
    pendingOrders,
    approveOrder,
    deleteKebab,
    editKebab,
}