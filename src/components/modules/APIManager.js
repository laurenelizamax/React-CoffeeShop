const remoteURL = "http://localhost:3003"

export default {
    get(drink, id) {
        return fetch(`${remoteURL}/${drink}/${id}`).then(result => result.json())
      },
    getAll(drink) {
        return fetch(`${remoteURL}/${drink}`).then(result => result.json())
    },
    post(newDrink) {
        return fetch(`${remoteURL}/coffee`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDrink)
        }).then(data => data.json())
    },
    delete(drink, id) {
        return fetch(`${remoteURL}/${drink}/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
},
get(food, id) {
    return fetch(`${remoteURL}/${food}/${id}`).then(result => result.json())
  },
getAll(food) {
    return fetch(`${remoteURL}/${food}`).then(result => result.json())
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
delete(food, id) {
    return fetch(`${remoteURL}/${food}/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
}
}
