import { Request, Response, Router } from 'express'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})

routes.post('/', (req: Request, res: Response) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        res.status(400).json({ error: 'O body da requisição está vazio.' })
        return
    }

    const { link, tipo } = req.body

    if (typeof link !== 'string' || typeof tipo !== 'string') {
        res.status(400).json({ error: "Os campos 'link' e 'tipo' devem ser strings." })
        return
    }

    if (!link || !tipo) {
        res.status(400).json({ error: "Os campos 'link' e 'tipo' são obrigatórios." })
        return
    }

    res.json({ message: 'Dados recebidos com sucesso!', link, tipo })
    // Aqui você pode chamar a função de conversão para gerar o arquivo EPUB
})

export default routes
