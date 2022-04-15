const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv/config')

app.use(bodyparser.json())

app.listen(3100)

const roleRoutes = require('./app/routes/role.routes')
const statusRoutes = require('./app/routes/status.routes')
const userRoutes = require('./app/routes/user.routes')
const menuRoutes = require('./app/routes/menu.routes')
const foodRoutes = require('./app/routes/food.routes')
const bookTableRoutes = require('./app/routes/booktable.routes')
const orderRoutes = require('./app/routes/order.routes')
const orderfoodRouter = require('./app/routes/orderfood.routes')

app.use('/role', roleRoutes)
app.use('/status', statusRoutes)
app.use('/user', userRoutes)
app.use('/menu', menuRoutes)
app.use('/food', foodRoutes)
app.use('/book-table', bookTableRoutes)
app.use('/order', orderRoutes)
app.use('/order-food', orderfoodRouter)

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected');
})
