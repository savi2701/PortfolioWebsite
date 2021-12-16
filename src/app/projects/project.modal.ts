export class Project{
    public id: number;
    public heading: string;
    public subheadings: any;
    public link: string;
    public img: string;
    public gitLink: string;

    constructor(id: number, heading: string, subheadings: [], link:string, img: string, gitLink: string){
        this.id = id;
        this.heading = heading;
        this.subheadings= subheadings;
        this.link = link;
        this.img = img;
        this.gitLink = gitLink;
    }
}