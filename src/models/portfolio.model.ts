import { content } from './db.json'

export const dataBase = {
    getData: () => {
        return content
    },
    getPortfolio: ()=> {
        return content.portfolio 
    },
    getProject: ()=> {
        return content.portfolio
    }
}