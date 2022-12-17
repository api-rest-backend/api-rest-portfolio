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
    },
    postProject: ()=> {
        const newProject = {
            "name": "",
            "description": "",
            "url": "",
            "languages": [],
            "githubUrl": "",
            "image": ""
        } 
        content.portfolio.push(newProject);
    }
}