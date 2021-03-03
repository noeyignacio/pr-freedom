const app = require('./config/server')
require('./config/database')
 
const port = app.get('port')

// Connecting to Local Port
app.listen(port, () => {
    console.log(`Server is running at ${port}!`)
})


