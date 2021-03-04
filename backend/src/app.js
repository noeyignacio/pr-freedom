import app from './config/server.js'
import './config/database.js'
 
const port = app.get('port')

// Connecting to Local Port
app.listen(port, () => {
    console.log(`Server is running at ${port}!`)
})


