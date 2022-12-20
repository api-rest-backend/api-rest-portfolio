import { Router } from 'express'
import { contentCtrl } from '../controllers/portfolio.controller'

const router = Router()

// GET ALL CONTENT 
router.get('/portfolio', contentCtrl.getData)

//GET PORTFOLIO 
router.get('/portfolio/project', contentCtrl.getPortfolio)

//GET PROJECT
router.get('/portfolio/project/:id', contentCtrl.getProject)

// POST PROJECT 
router.post('/portfolio/project/', contentCtrl.postProject)

export default router