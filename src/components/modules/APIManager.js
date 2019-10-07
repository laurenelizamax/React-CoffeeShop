const remoteURL = "http://localhost:3003"

export default {
    get(drink, id) {
        return fetch(`${remoteURL}/${drink}/${id}`).then(result => result.json())
      },
    getAll(drink) {
        return fetch(`${remoteURL}/${drink}`).then(result => result.json())
    },
    delete(drink, id) {
        return fetch(`${remoteURL}/${drink}/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
}
}
