import app from './app';

// START SERVER
const PORT = 3000
const server = app.listen(PORT, () => console.log(`server running on port ${PORT}`))

export default server 