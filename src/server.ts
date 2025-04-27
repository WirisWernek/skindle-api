import express from 'express'
import routes from './router'

const app = express()
const PORT = 3000

app.use(express.json())
app.set('port', PORT)
app.use(express.json())

app.use(routes)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

export default app
