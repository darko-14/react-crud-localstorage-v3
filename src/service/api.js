const url = 'http://localhost:4000/contacts'

export const getAllContacts = async () => {
    
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const getContactById = id => {

}

export const createContact = async contact => {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    })
    const data = await response.json();
    return data;
}

export const updateContact = id => {

}

export const deleteContact = id => {

}