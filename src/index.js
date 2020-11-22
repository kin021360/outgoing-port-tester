const axios = require('axios');
const {wellKnownPorts, registeredPorts} = require('./portList');

function delay(time = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
}

(async () => {
    for (const key in wellKnownPorts) {
        if (!isNaN(parseInt(key))) {
            process.stdout.write(`Now testing outgoing port ${key}: `);
            const res = await axios.get(`http://portquiz.net:${key}`);
            process.stdout.write(`${res.status === 200 ? 'PASS' : 'FAIL'}\n`);
            await delay();
        }
    }
})();
