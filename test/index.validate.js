const express = require('express'),
    app = express(),
    validator = require('html-validator');

const port = 4323;

app.use(express.static('public'));

const server = app.listen(port, () => console.log(`HV listening on port ${port}!`));

module.exports = (async () => {
    const localFile = 'http://localhost:4323';
    const options = {
        url: localFile,
        isLocal: true,
        format: 'json'
    };
    
    const result = await validator(options);

    const errArray = result.messages.filter(function(el) {
        return el.type === 'error';
    });

    server.close();
    return errArray;
})();