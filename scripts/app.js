import { indexPeople } from "./api.js";
import { showPeopleIndex } from "./ui.js";

indexPeople()
    .then(res => res.json())
    .then(res => showPeopleIndex(res.people))
    .catch(console.error)