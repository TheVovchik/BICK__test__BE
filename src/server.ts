import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { contactsController } from './controllers/contacts';

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use('/.netlify/functions/server', router);

router.get('/', contactsController.getContacts);
router.get('/form/:contactId', contactsController.getContact);
router.post('/', contactsController.postContact);
router.patch('/form/:contactId', contactsController.patchContact);
router.delete('/:contactId', contactsController.removeContact);


/* local check
app.listen(5000, () => {
  console.log('Server is running');
});
*/

export const handler = serverless(app);