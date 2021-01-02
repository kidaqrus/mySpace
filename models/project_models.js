const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const DomPurify = require('dompurify')
const {JSDOM} = require('jsdom')
const dompurify = DomPurify(new JSDOM().window)


const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('projectModel', projectSchema, "ProjectCollection")