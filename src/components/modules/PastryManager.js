const remoteURL = "http://localhost:3003"

export default {
get(id) {
    return fetch(`${remoteURL}/pastries/${id}`).then(result => result.json())
  },
getAll() {
    return fetch(`${remoteURL}/pastries`).then(result => result.json())
},
post(newFood) {
    return fetch(`${remoteURL}/pastries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFood)
    }).then(data => data.json())
},
delete(id) {
    return fetch(`${remoteURL}/pastries${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
}
}