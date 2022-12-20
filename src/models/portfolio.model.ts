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
        //const newParse = JSON.parse(newProject)

        //READ ALL THE CONTENT
        const parsedContent = new Object((fs.readFile ('./src/models/db.json', 'utf-8', (error, data) => {
            if (!error) {
                console.log(JSON.parse(data));
                return JSON.parse(data)
            } else if (error) {
                console.log(error)
            }
        })) );
        
        // PUSH NEW CONTENT INTO EXISTING CONTENT
        console.log(parsedContent.portfolio)

        // WRITE NEW PROJECT 
       // const addProject = fs.writeFileSync('./src/models/db.json', newProject)

    }
}