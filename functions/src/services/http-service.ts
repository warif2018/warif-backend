import * as admin from 'firebase-admin';
import { UserService } from './user-service';
import { User } from '../models/user';
import { Restraunt } from '../models/restraunt';
import { Menu } from '../models/menu';
import { Religion } from '../models/religion';
import { Ingredient } from '../models/ingredient';

export class HttpService {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    /**
     * getMenuById
     */
    public getMenuById(menuId: string, res: any) {
        res.send(menuId);
    }

    /**
     * getAllMenus
     */
    public getAllMenus() {
        return (req, res) => {
            res.send(req.params.id)
        };
    }

    /**
     * getRecommendMenus
     */
    public getRecommendMenus() {
        return (req, res) => {
            res.send(req.params.id)
        };
    }

    /**
     * getRecommendMenusByUserId
     */
    public getRecommendMenusByUserId(res) {
        res.send('');
    }

    /**
     * getUserById
     */
    public getUserById() {
        return (req, res) => {
            res.send(req.params.id)
        };
    }

    /**
     * getAllUsers
     */
    public getAllUsers() {
        return (req, res) => {
            res.send(req.params.id)
        };
    }

    /**
     * getRestaurantById
     */
    public getRestaurantById() {
        return (req, res) => {
            res.send(req.params.id)
        };
    }

    /**
     * getRecommendRestaurants
     */
    public getRecommendRestaurants() {
        return (req, res) => {
            res.send(req.params.id)
        };
    }

    /**
     * getRecommendRestaurantsByUserId
     */
    public getRecommendRestaurantsByUserId() {
        return (req, res) => {
            res.send(req.params.id)
        };
    }

    /**
     * postMenuByRestraunt
     */
    public async postMenuByRestraunt(restrauntId: string, menu: Menu, res) {
        menu.restrauntId = restrauntId;
        
        try {
            await admin.firestore().collection('menus').add(menu);
            res.send({status: 'ok'});
        } catch(e) {
            res.status(400);
            res.send({status: 'err', message: e});
        }
    }

    /**
     * postMenusByRestraunt
     */
    public async postMenusByRestraunt(restrauntId: string, menus: Menu[], res) {
        menus.map((item: Menu) => {
            item.restrauntId = restrauntId;
            return item;
        })
        
        try {
            for (const menu of menus) {
                await admin.firestore().collection('menus').add(menu);
            }
            res.send({status: 'ok'});
        } catch(e) {
            res.status(400);
            res.send({status: 'err', message: e});
        }
    }

    /**
     * postRestraunt
     */
    public async postRestraunt(restraunt: Restraunt, res) {
        try {
            await admin.firestore().collection('restraunts').add(restraunt);
            res.send({status: 'ok'});
        } catch(e) {
            res.status(400);
            res.send({status: 'err', message: e});
        }
    }

    /**
     * postRestraunts
     */
    public async postRestraunts(restraunts: Restraunt[], res) {
        try {
            for (const restraunt of restraunts) {
                await admin.firestore().collection('restraunts').add(restraunt);
            }
            res.send({status: 'ok'});
        } catch(e) {
            res.status(400);
            res.send({status: 'err', message: e});
        }
    }

    /**
     * postUser
     */
    public async postUser(user: User, res) {
        try {
            await admin.firestore().collection('users').add(user);
            res.send({status: 'ok'});
        } catch(e) {
            res.status(400);
            res.send({status: 'err', message: e});
        }
    }

    /**
     * postReligion
     */
    public async postReligion(religion: Religion, res) {
        try {
            await admin.firestore().collection('religions').add(religion);
            res.send({status: 'ok'});
        } catch(e) {
            res.status(400);
            res.send({status: 'err', message: e});
        }
    }

    /**
     * postReligions
     */
    public async postReligions(religions: Religion[], res) {
        try {
            for (const religion of religions) {
                await admin.firestore().collection('religions').add(religion);
            }
            res.send({status: 'ok'});
        } catch(e) {
            res.status(400);
            res.send({status: 'err', message: e});
        }
    }

    /**
     * postIngredient
     */
    public async postIngredient(ingredient: Ingredient, res) {
        try {
            await admin.firestore().collection('ingredients').add(ingredient);
            res.send({status: 'ok'});
        } catch(e) {
            res.status(400);
            res.send({status: 'err', message: e});
        }
    }

    /**
     * postIngredients
     */
    public async postIngredients(ingredients: Ingredient[], res) {
        try {
            for (const ingredient of ingredients) {
                await admin.firestore().collection('ingredients').add(ingredient);
            }
            res.send({status: 'ok'});
        } catch(e) {
            res.status(400);
            res.send({status: 'err', message: e});
        }
    }
}