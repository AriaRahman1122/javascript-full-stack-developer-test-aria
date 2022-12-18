// Isi Atribut movie
export type Movie = {
    id: number,
    image : string,
    title : string,
    rate : number,
    description : string,
  }

export const movies:Movie[] = [
    {
        id: 1,
        image : "https://resizing.flixster.com/E6CxxOqnh09qsuvND7dXpVwYOGM=/206x305/v2/https://flxt.tmsimg.com/assets/p10951814_p_v8_af.jpg",
        title: "Ant Man",
        rate: 9,
        description: "hsaubsncjcikjdcs",
    },
    {
        id: 2,
        image: "https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480",
        title: "Black Panther",
        rate: 8,
        description: "hsaubsncjcikjdcs",
    },
    {
        id: 3,
        image: "https://media.suara.com/pictures/653x366/2022/12/01/37551-poster-kupu-kupu-malam-twittermdentertainment.jpg",
        title: "Kupu-Kupu Malam",
        rate: 5,
        description: "hsaubsncjcikjdcs",
    }
]