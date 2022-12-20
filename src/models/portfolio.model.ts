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
        //content.portfolio.push(newProject)

        //PARSE THE NEW DATA
        const newParsed = JSON.parse(newProject)
        console.log(newParsed)

        //READ ALL THE CONTENT
        fs.readFile('./src/models/db.json', 'utf-8', (error, data) => {
            if (error) {
                console.log(`ERROR: ${error}`)
            } else {
                const parsedContent = JSON.parse(data)
                console.log(parsedContent)
                // parsedContent.portfolio.push(newParsed)

            }
        })

        // PUSH NEW CONTENT INTO EXISTING CONTENT


        // WRITE NEW PROJECT 
        // const addProject = fs.writeFileSync('./src/models/db.json', newProject)

    }
}