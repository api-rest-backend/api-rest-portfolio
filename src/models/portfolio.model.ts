import { Request, Response } from 'express'
import { content } from './db.json'
import fs from 'fs'

type NewProject = {
    name: string,
    description: string,
    url: string,
    lenguages: Array<string>,
    githubUrl: string,
    image: string
}

const jsonContent = JSON.parse(fs.readFileSync('src/models/db.json', 'utf-8'))

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
    postProject: (newProject: NewProject) => {
        jsonContent.content.portfolio.push(newProject)
        console.log(jsonContent)
        fs.writeFileSync('src/models/db.json', JSON.stringify(jsonContent, null, 4), 'utf-8')
    },
    putProject: (name: string, id: number) => {
        jsonContent.content.portfolio[id].name = name
        return fs.writeFileSync('src/models/db.json', JSON.stringify(jsonContent, null, 4), 'utf-8')
    },
    deleteProject: (id: number) => {
        jsonContent.content.portfolio.splice(id, 1)
        return fs.writeFileSync('src/models/db.json', JSON.stringify(jsonContent, null, 4), 'utf-8')
    }
}