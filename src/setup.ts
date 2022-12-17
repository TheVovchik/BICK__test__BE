import { Contacts } from "./data/models/Contacts";

(async() => {
  await Contacts.sync({ force: true });
})();