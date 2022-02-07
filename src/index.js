#! /usr/bin/env node

const axios = require('axios')
const cheerio = require('cheerio');
const fse = require('fs-extra');

async function main() {
    if (process.argv.length !== 3) {
        console.log('Usage: blockscandl <url>')
        process.exit(1)
    }

    const url = process.argv[2];
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const contractName = $('span.h6.font-weight-bold.mb-0')[0].children[0].data;
    
    const fileNames = $('#dividcode > div > div.d-flex.justify-content-between > span.text-secondary');
    const fileRegex = /File (\d+) of \d+ : ([a-zA-Z0-9-_]+\.sol)/;
    
    // Contract Sources
    for (let i = 0; i < fileNames.length - 1; i++) {
        const [, id, fileName] = fileNames[i].children[0].data.match(fileRegex);
        const sourceCode = $(`#editor${id}`).text();
        await fse.outputFile(`${process.cwd()}/output/${contractName}/${fileName}`, sourceCode);
    }

    // ABI
    await fse.outputFile(`${process.cwd()}/output/${contractName}/${contractName}.json`, $('#js-copytextarea2').text());

    console.log(`${fileNames.length - 1} contract and 1 ABI files written to ${process.cwd()}/output/${contractName}`);
}

try {
    main();
} catch(err) {
    console.error(err);
    process.exit(1);
}