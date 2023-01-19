import { indexPeople, 
        createPerson, 
        showPerson,
        updatePerson,
        DeletePerson } from "./api.js";
import { onPeopleIndexSuccess, 
        onFailure,
        onCreatePersonSuccess, 
        onShowPersonSuccess,
        onUpdatePersonSuccess,
        onDeletePersonSuccess } from "./ui.js";

const form = document.querySelector('.create-new-person')
const peopleContainer = document.querySelector('.people-container')

indexPeople()
    .then(res => res.json())
    .then(res => onPeopleIndexSuccess(res.people))
    .catch(onFailure)

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const isEmployed = event.target['employment-status'].value === 'employed' ? true : false
    const personData = {
        person: {
            firstName: event.target['firstName'].value,
            lastName: event.target['lastName'].value,
            age: event.target['age'].value,
            isEmployed: isEmployed
        }
    }
    if(!personData.person.firstName || !personData.person.lastName || 
        !personData.person.age) {
        onFailure('You must provide each of the following fields')
    } else {
        createPerson(personData)
            .then(onCreatePersonSuccess)
            .catch(onFailure)
    }
})

peopleContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    if(id && event.target.classList.value === 'delete-character') {
        DeletePerson(id)
            .then(onDeletePersonSuccess)
            .catch(onFailure)
    } else if(id) {
        showPerson(id)
            .then(res => res.json())
            .then(personData => onShowPersonSuccess(personData, event.target))
            .catch(onFailure)
    }
})

peopleContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const isEmployed = event.target['employment-status'].value === 'employed' ? true : false
    const id = event.target.getAttribute('data-id')
    const data = {
        person: {
            firstName: event.target['firstName'].value,
            lastName: event.target['lastName'].value,
            age: event.target['age'].value,
            isEmployed: isEmployed
        }
    }
    updatePerson(data, id)
        .then(onUpdatePersonSuccess)
        .catch(onFailure)
})