import { Request, Response } from 'express'
import { content } from './db.json'

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
        // const parsed = JSON.parse(nameProject)
        // console.log(parsed)
        // content.portfolio.push(parsed)

        console.log(addProject)
        content.portfolio.push(addProject)
    }
}