import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    const contacts = await readContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    await writeContacts([...contacts, ...newContacts]);
};

generateContacts(5);
