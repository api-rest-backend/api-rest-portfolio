import { Router } from 'express'
import { contentCtrl } from '../controllers/portfolio.controller'

const router = Router()

router.get('/', contentCtrl.getData)

export default router