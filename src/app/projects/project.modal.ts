export class Project{
    public id: number;
    public heading: string;
    public subheading: string;
    public img: string;

    constructor(id: number, heading: string, subheading: string, img: string){
        this.id = id;
        this.heading = heading;
        this.subheading = subheading;
        this.img = img;
    }
}