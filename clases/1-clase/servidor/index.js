const { app , PORT} = require('./src/index')


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
