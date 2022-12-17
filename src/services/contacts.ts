'use strict';

import { Contact } from 'src/types/Contacts';
import { Contacts } from '../data/models/contacts';

class ContactsService {
  async getAll() {
    const contacts = await Contacts.findAll();

    return contacts;
  }

  async getOne(contactId: number) {
    const user = await Contacts.findByPk(contactId);

    return user;
  }

  async createContact(data: any) {
    const contact = await Contacts.create(data);

    return contact;
  }

  async modifyContact(contactId: number, data: Contact) {
    await Contacts.update(data, {
      where: {
        id: contactId,
      },
    });
  }

  async removeOne(contactId: number) {
    const isDeleted = await Contacts.destroy({
      where: {
        id: contactId,
      },
    });

    return isDeleted;
  }
}

export const contactsService = new ContactsService();
