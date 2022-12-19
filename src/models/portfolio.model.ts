import { Request, Response } from 'express'
import { content } from './db.json'

interface newProject {
    name: string,
    description: string,
    url: string,
    languages: Array<string>,
    githubUrl: string,
    image: string
}


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
    postProject: (nameProject: newProject) => {

        content.portfolio.push(nameProject)
    }
}