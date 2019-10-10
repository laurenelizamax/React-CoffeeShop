const remoteURL = "http://localhost:3003"

export default {
    get(id) {
        return fetch(`${remoteURL}/coffee/${id}`).then(result => result.json())
      },
    getAll() {
        return fetch(`${remoteURL}/coffees`).then(result => result.json())
    },
    post(newDrink) {
        return fetch(`${remoteURL}/coffees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDrink)
        }).then(data => data.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/coffee/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
}
}