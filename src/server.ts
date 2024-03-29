import express from 'express';
import cors from 'cors';
import { contactsController } from './controllers/contacts';

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use('/data', router);

router.get('/', contactsController.getContacts);
router.get('/form/:contactId', contactsController.getContact);
router.post('/', contactsController.postContact);
router.patch('/form/:contactId', contactsController.patchContact);
router.delete('/:contactId', contactsController.removeContact);

app.listen(5000, () => (
  console.log('server is running')
))

