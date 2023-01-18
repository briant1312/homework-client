const peopleContainer = document.querySelector('.people-container')

export const showPeopleIndex = (people) => {
    people.forEach(person => {
        const ul = document.createElement('ul')
        ul.innerHTML = 
        `
        <li>${person.firstName} ${person.lastName}</li>
        <li>Age: ${person.age}</li>
        <li>Employed: ${person.isEmplyed}</li>
        `
        peopleContainer.appendChild(ul)
    })
}