const peopleContainer = document.querySelector('.people-container')
const userMessageContainer = document.querySelector('#user-message-container')

export const onPeopleIndexSuccess = (people) => {
    people.forEach(person => {
        const div = document.createElement('div')
        div.innerHTML = 
        `
        <h3>${person.firstName} ${person.lastName}</h3>
        <button data-id=${person._id}>View More Info</button>
        `
        div.classList.add('person-index')
        peopleContainer.appendChild(div)
    })
}

export const onCreatePersonSuccess = () => {
    userMessageContainer.innerText = 'You have successfully added a person'
}

export const onFailure = (error) => {
    userMessageContainer.innerHTML = 
    `
    <h3>There was an error</h3>
    <p>${error}</p>
    `
}

export const onShowPersonSuccess = (personData, button) => {
    const currentUserInfo = document.querySelectorAll('.full-user-info')
    if(currentUserInfo) {
        currentUserInfo.forEach(entry => {
            entry.parentElement.removeChild(entry)
        })
    }
    const { firstName, lastName, age, isEmployed} = personData.person
    const div = document.createElement('div')
    div.innerHTML = 
    `
    <p>First Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Age: ${age}</p>
    <p>Employed: ${isEmployed}</p>
    `
    div.classList.add('full-user-info')
    button.parentElement.insertBefore(div, button)
}