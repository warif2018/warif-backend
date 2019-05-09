import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import { HttpService } from './services/http-service';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const app = express();
const httpService = new HttpService();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

//post: insert, put: update
app.get('/', (req, res) => res.send('It Works!'));
app.get('/menu/:menuId/', (req, res) => httpService.getMenuById(req.params.menuId, res ));
app.get('/menus/', (req, res) => res.send(req.params.id));
app.get('/menus/recommend/', (req, res) => res.send(req.params.id));
app.get('/menus/recommend/user/:userId/', (req, res) => httpService.getRecommendMenusByUserId(res));
app.get('/menus/recommend/ingredients/:ingredients/', (req, res) => res.send(req.params.id));
app.get('/menus/recommend/ingredients/:ingredients/restaurant/:restaurantId/', (req, res) => res.send(req.params.id));
app.get('/menus/restaurant/:restaurantId/', (req, res) => res.send(req.params.id));
app.get('/menus/ingredients/:ingredients/restaurant/:restaurantId/', (req, res) => res.send(req.params.id));
app.get('/restaurant/:restaurantId/', (req, res) => res.send(req.params.id));
app.get('/restaurants/recommend/', (req, res) => res.send(req.params.id));
app.get('/restaurants/recommend/today/', (req, res) => res.send(req.params.id));
app.get('/restaurants/recommend/now/', (req, res) => res.send(req.params.id));
app.get('/restaurants/recommend/user/:userId/', (req, res) => res.send(req.params.id));
app.get('/restaurants/recommend/categories/:categories/', (req, res) => res.send(req.params.id));
app.get('/user/:id/', (req, res) => res.send(req.params.id));
app.get('/users/', (req, res) => res.send(req.params.id));
app.get('/users/restaurant/:restaurantId/', (req, res) => res.send(req.params.id));
app.get('/users/menu/:menuId/', (req, res) => res.send(req.params.id));
app.get('/users/country/:countryName/duration/:fromTo/', (req, res) => res.send(req.params.id));
app.get('/user/religion/:religionId/', (req, res) => res.send(req.params.id));
app.get('/religion/:religionId/', (req, res) => res.send(req.params.id));
app.get('/religions/', (req, res) => res.send(req.params.id));
app.get('/ingredients/', (req, res) => res.send(req.params.id));
app.get('/ingredient/:ingredientId/', (req, res) => res.send(req.params.id));

app.put('/menu/:menuId/', (req, res) => res.send(req.params.id));
app.put('/restaurant/:restaurantId/', (req, res) => res.send(req.params.id));
app.put('/user/:id/', (req, res) => res.send(req.params.id));
app.put('/religion/:religionId/', (req, res) => res.send(req.params.id));
app.put('/ingredient/:ingredientId/', (req, res) => res.send(req.params.id));

app.post('/menu/restaurant/:restaurantId/', (req, res) => httpService.getMenuById(req.params.menuId, res));
app.post('/menus/restaurant/:restaurantId/', (req, res) => res.send(req.params.id));
app.post('/restaurant/', (req, res) => res.send(req.params.id));
app.post('/restaurants/', (req, res) => res.send(req.params.id));
app.post('/user/', (req, res) => httpService.postUser(req.params.user, res));
app.post('/religion/', (req, res) => res.send(req.params.id));
app.post('/religions/', (req, res) => res.send(req.params.id));
app.post('/ingredient/', (req, res) => res.send(req.params.id));
app.post('/ingredients/', (req, res) => res.send(req.params.id));

app.delete('/menu/:menuId/', (req, res) => res.send(req.params.id));
app.delete('/restaurant/:restaurantId/', (req, res) => httpService.getMenuById(req.params.menuId, res));
app.delete('/user/:id/', (req, res) => res.send(req.params.id));
app.delete('/religion/:religionId/', (req, res) => res.send(req.params.id));
app.delete('/ingredient/:ingredientId/', (req, res) => res.send(req.params.id));

exports.warif = functions.https.onRequest(app);
exports.auth = functions.https.onCall((data, context) => {
    return { auth: context.auth };
});