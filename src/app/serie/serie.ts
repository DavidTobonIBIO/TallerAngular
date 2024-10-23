export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;

    constructor(
        id: number,
        name: string,
        channel: string,
        seasons: number,
        description: string,
        webpage: string,
        poster: string
    ) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = webpage;
        this.image = poster;
    }
}
