'use strict';

import { Request, Response } from 'express';
import { contactsService } from '../services/contacts';

class ContactsController {
  async getContacts(req: Request, res: Response) {
    const contacts = await contactsService.getAll();
    
    res.statusCode = 200;
    res.json(contacts);
  };

  async getContact (req: Request, res: Response) {
    const { contactId } = req.params;

    const contact = await contactsService.getOne(+contactId);

    if (!contact) {
      res.statusCode = 404;
      res.json({ error: 'entity doesn\'t exist' });

      return;
    }

    res.statusCode = 200;
    res.json(contact);
  };

  async postContact(req: Request, res: Response) {
    const contact = await contactsService.createContact(req.body);

    if (!contact) {
      res.statusCode = 400;
      res.json({ error: 'something went wrong' });

      return;
    }
    
    res.statusCode = 200;
    res.json(contact);
  };

  async patchContact(req: Request, res: Response) {
    const { contactId } = req.params;

    await contactsService.modifyContact(+contactId, req.body);

    const contact = await contactsService.getOne(+contactId);

    if (!contact) {
      res.statusCode = 404;
      res.json({ error: 'entity doesn\'t exist' });

      return;
    }

    res.statusCode = 200;
    res.json(contact);
  };

  async removeContact(req: Request, res: Response) {
    const { contactId } = req.params;

    const isDeleted = await contactsService.removeOne(+contactId);

    if (!isDeleted) {
      res.statusCode = 404;
      res.json({ error: 'entity doesn\'t exist' });

      return;
    }

    res.sendStatus(200);
  };
}

export const contactsController = new ContactsController();
