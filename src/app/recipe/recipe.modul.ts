<<<<<<< HEAD
import { Ingrediants } from 'src/app/shared/Ingrediants.modul';
=======
import { Ingrediants } from './../shared/Ingrediants.modul';

>>>>>>> 760215315d9c8f944dd022a116c78931b20844c8
export class Recipe {
    public name: string;
    public description: string ;
    public imagePath: string;
<<<<<<< HEAD
    public ingrediants: Ingrediants[];
=======
    public ingredients: Ingrediants[];
>>>>>>> 760215315d9c8f944dd022a116c78931b20844c8

    constructor (name: string, desc: string, imagePath: string, ingredients: Ingrediants[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
<<<<<<< HEAD
        this.ingrediants = ingredients;
=======
        this.ingredients = ingredients;
>>>>>>> 760215315d9c8f944dd022a116c78931b20844c8
    }

}