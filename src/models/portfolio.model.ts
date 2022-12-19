import { Request, Response } from 'express'
import { content } from './db.json'
import fs from 'fs'

// interface newProject {
//     name: string,
//     description: string,
//     url: string,
//     languages: Array<string>,
//     githubUrl: string,
//     image: string
// }


export const dataBase = {
    getData: () => {
        return content
    },
    getPortfolio: () => {
        return content.portfolio
    },
    getProject: () => {
        return content.portfolio
    },
    postProject: (addProject) => {
        // PUSH NEW PROJECT
        console.log(addProject)
        content.portfolio.push(addProject)
""
        // WRITE NEW PROJECT
        fs.writeFileSync("./db.json", addProject)
        
    
    }
}