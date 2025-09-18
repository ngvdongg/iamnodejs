    // app.js
    const express = require('express');
    const app = express();
    const port = 3000;
    const authRouter = require('./src/auth/auth.routes');
    // const userRouter = require('./src/users/users.routes');

    app.get('/', (req, res) => {
      res.send('Hello from Node.js!');
    });
    
    app.use('/auth', authRouter);
    // app.use('/users', userRouter);

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });