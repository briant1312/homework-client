export const indexPeople = () => {
    return fetch('http://127.0.0.1:8000/people')
}

export const createPerson = (person) => {
    return fetch('http://127.0.0.1:8000/people', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    })
}

export const showPerson = (id) => {
    return fetch(`http://127.0.0.1:8000/people/${id}`)
}