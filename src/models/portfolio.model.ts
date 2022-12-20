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
        // content.portfolio.push(newProject)

        //PARSE THE NEW DATA
        // const newParse = JSON.parse(newProject)
        // console.log(newParse)

        //READ ALL THE CONTENT
        fs.readFile('./src/models/db.json', 'utf-8', (error, data) => {
            if (!error) {
                const parsedContent = JSON.parse(data)
                console.log(parsedContent)
                return parsedContent
            } else if (error) {
                console.log(error)
            }
        })


        // WRITE NEW PROJECT
        // fs.writeFileSync('./src/models/db.json', newProject)

    }
}