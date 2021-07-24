export interface CardData {
    id: string,
    data: {
        body: Array<string>
        cnt: number
        corp: string,
        date: number,
        imgName: string,
        imgURL: string,
        title: string,
    }
}