// import Contact from "../models/Contact.js";

// export const getAllContacts = async (req, res) => {
//     try {
//         const contacts = await Contact.findAll();
//         res.json(contacts)
//     } catch (error) {
//         res.json( {message: error.message} )
//     }
// }

// export const getContactById = async (req, res) => {
//     try {
//         const contact = await Contact.findAll({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json(contact[0])
//     } catch (error) {
//         res.json({ message: error.message })
//     }
// }

// export const createContact = async(req, res) => {  
//     try {
//         await Contact.create(req.body);
//         res.json({
//             'message': 'Contact Created.'
//         })
//     } catch (error) {
//         res.json({ message: error.message })
//     }
// }

// export const updateContact = async (req, res) => {
//     try {
//         await Contact.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json({
//             'message': 'Contact Updated.'
//         })
//     } catch (error) {
//         res.json({ message: error.message })
//     }
// }

// export const deleteContact = async (req, res) => {
//     try {
//         await Contact.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json({
//             'message': 'contact deleted'
//         })
//     } catch (error) {
//         res.json({ message: error.message })
//     }
// }