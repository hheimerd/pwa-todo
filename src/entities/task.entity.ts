export class Task {
    id: number;
    text: string;
    color: string;
    done: boolean = false;

    constructor(id: number, text: string, color: string) {
        this.id = id;
        this.text = text;
        this.color = color;
    }
}
