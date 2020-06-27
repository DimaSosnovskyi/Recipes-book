import { Ingrediants } from 'src/app/shared/Ingrediants.modul';
export class Recipe {
    public name: string;
    public description: string ;
    public imagePath: string;
    public ingrediants: Ingrediants[];

    constructor (name: string, desc: string, imagePath: string, ingredients: Ingrediants[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingrediants = ingredients;
    }

}