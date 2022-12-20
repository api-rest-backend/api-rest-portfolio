import app from './app';
import portfolioRouter from './routes/portfolio.route'

// START SERVER
const PORT = 3000
const server = app.listen(PORT, () => console.log(`server running on port ${PORT}`))