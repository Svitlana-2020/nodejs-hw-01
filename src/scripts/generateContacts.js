
import {createFakeContact} from "../utils/createFakeContact.js";

import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    const list = await readContacts();
    const listContacts = Array(number).fill(0).map(createFakeContact);
    const newList = [...list, ...listContacts];
    await writeContacts(newList);
    
};

generateContacts(5);
