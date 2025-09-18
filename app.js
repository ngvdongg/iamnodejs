    // app.js
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const port = 3000;
    const authRouter = require('./src/auth/auth.routes');
    const userRouter = require('./src/users/users.models');
     
    app.use(bodyParser.json());
    app.use(cors());

    app.get('/', (req, res) => {
      res.send('Hello from Node.js!');
    });
   

    app.use('/auth', authRouter);
    // app.use('/users', userRouter);
app.use((req, res, next) => {
	next(createError(404));
});

app.use((err, req, res) => {
	console.log(err.stack);
	res.status(err.status || 500).send(err.message);
});
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });