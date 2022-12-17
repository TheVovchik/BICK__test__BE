import { Contacts } from './data/models/contacts';

(async() => {
  await Contacts.sync({ force: true });
})();