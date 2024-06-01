const http = require('http');

let requestCount = 0;

const server = http.createServer((request, response) => {
    if (request.url === '/favicon.ico') {
        response.writeHead(204); // 204 No Content
        response.end();
        return;
    }

    requestCount++;

    switch (request.url) {
        case '/students':
            response.write('STUDENT')
            break
        case '/':
        case '/courses':
            response.write('FRONT + BACK')
            break
        default:
            response.write('404 not found')



    }

    response.end();
});

server.listen(3003, () => {
    console.log('Server is listening on port 3003');
});