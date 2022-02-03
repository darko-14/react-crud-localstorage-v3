const url = 'http://localhost:4000/contacts'

export const getAllContacts = callback => {
    
    fetch(url)
        .then((res) => res.json())
        .then(callback);
                    
}

export const getContactById = (id, callback) => {

    fetch(`${url}/${id}`) 
        .then(res => res.json())
        .then(callback)
}
  
export const createContact = (contact, callback) => {
    
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    })
        .then((res) => res.json())
        .then(callback);
}

export const updateContact = (contact, callback) => {

    fetch(`http://localhost:4000/contacts/${contact.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    })
        .then((res) => res.json())
        .then(callback)
        .catch('Neke da moze');
}

export const deleteContact = (id, callback) => {

    fetch(`http://localhost:4000/contacts/${id}`, { 
        method: 'DELETE' 
    })
    .then((res) => res.json())
    .then(callback);
}