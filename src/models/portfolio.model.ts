import { Request, Response } from 'express'
import { content } from './db.json'
import fs from 'fs'


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
    postProject: (newProject) => {
        // PUSH NEW PROJECT
        console.log(newProject)
        content.portfolio.push(newProject)

        //PARSE THE DATA
        const newParse = JSON.parse(newProject)

        //READ ALL THE CONTENT
        fs.readFile('./src/models/db.json', 'utf-8', (error, data) => {
            if (!error) {
                const content = JSON.stringify(data)
                console.log(content)
            } else if (error) {
                console.log(error)
            }
        })

        // WRITE NEW PROJECT
        // fs.writeFileSync('./src/models/db.json', newProject)

    }
}