const appStatus = process.env.status

const express = require('express')
const app = express()
const appPort = '3000'

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)
app.use(express.static(`${__dirname}/public`))

// Default view of the site
app.get('', async (req, res) => {
    if (appStatus != 'maintenance') {
        const pageTitle = 'The Home of Steven Hill'
        res.render('index', { pageTitle })
    } else {
        res.render('maintenance')
    }
})

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    const pageTitle = '404 Not Found'
    res.render('404', { pageTitle: pageTitle })
})

// Start the server
app.listen(appPort, () => {
    console.log(`Server listening on port ${appPort}`)
});
