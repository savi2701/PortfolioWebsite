export class Project{
    public id: number;
    public type: string;
    public name: string;
    public imgSrc: string;

    constructor(id: number, type: string, name: string, imgSrc: string){
        this.id = id;
        this.type = type;
        this.name = name;
        this.imgSrc = imgSrc;
    }
}