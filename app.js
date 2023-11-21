const express = require('express');
const path = require('path')
const app = express();
const mainRouters = require('./routes/mainRoutes');
const authRouters = require('./routes/authRoutes');
const usersRouters = require('./routes/usersRoutes');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', mainRouters);
app.use('/auth', authRouters);
app.use('/users', usersRouters);
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
