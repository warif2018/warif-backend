import { Religion } from "./religion";
import { Ingredient } from "./ingredient";
import { Menu } from "./menu";
import { Restraunt } from "./restraunt";
import { Review } from "./review";

export class User {
    id: string;
    religion: Religion;
    ingredients: Ingredient[];
    languages: string;
    profile: string;
    menuHistory: Menu[];
    restrauntHistory: Restraunt[];
    reviewHistory: Review[];
}