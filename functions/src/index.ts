import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.get('/:id', (req, res) => res.send(req.params.id));
app.post('/', (req, res) => res.send('It Works!'));

exports.warif = functions.https.onRequest(app);