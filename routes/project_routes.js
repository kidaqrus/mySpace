const express = require('express')
const projectArticle = require('../models/project_models')
const router = express.Router()





router.get('/new', (req, res) =>{
    res.render('/new', {article: new projectArticle()})
})

router.post('/', async (req, res, next)=>{
    req.article = projectArticle()
    next()
}, saveInstanceAndRedirect('new'))


router.get('/edit/:id', async(req, res) =>{
    const article = await projectArticle.findById(req.params.id)
    res.render('edit', {article: article} )
})

router.get('/:slug', async(req, res) =>{
    const article = await projectArticle.findOne({slug: req.params.slug})
    if(article == nul) return res.redirect('/')
       res.render('show', {article: article}) 
})
// edit existing by put()
router.put('/:id', async (req, res, next) => {
    req.article = await projectArticle.findById(req.params.id)
    next()
  }, saveInstanceAndRedirect('edit'))
  
router.delete('/:id', async(req, res) =>{
    await projectArticle.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

function saveInstanceAndRedirect(path) {
    return async(req, res) => {
        let article = req.article
        article.title = req.article.title
        article.description = req.body.description
        try {
            article = await article.save()
            res.redirect(`/${path}`, {article: article})
        }catch(e) {
            res.render(`${path}`, {article: article})
        }
    }
}


module.exports = router