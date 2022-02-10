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

    // TODO: Find a better unique element to determine the page
    if (!$('span.h6.font-weight-bold.mb-0')[0]) {
        console.log("Contract source code is not available in the specified URL");
        return;
    }
    const contractName = $('span.h6.font-weight-bold.mb-0')[0].children[0].data;

    if (contractName.startsWith('0 ')) {
        console.log('Address specified is not a contract!');
        return;
    }
    
    const fileNames = $('#dividcode > div > div.d-flex.justify-content-between > span.text-secondary');
    
    // Contract Sources
    if (fileNames.length === 0) { // Single Contract
        const sourceCode = $('#editor').text();
        await fse.outputFile(`${process.cwd()}/output/${contractName}/${contractName}.sol`, sourceCode);
    } else { // Multiple Contracts
        const fileRegex = /File (\d+) of \d+\s?: ([a-zA-Z0-9-_]+\.sol)/;
        for (let i = 0; i < fileNames.length - 1; i++) {
            const [, id, fileName] = fileNames[i].children[0].data.match(fileRegex);
            const sourceCode = $(`#editor${id}`).text();
            await fse.outputFile(`${process.cwd()}/output/${contractName}/${fileName}`, sourceCode);
        }
    }

    // ABI
    await fse.outputFile(`${process.cwd()}/output/${contractName}/${contractName}.json`, $('#js-copytextarea2').text());

    console.log(`${fileNames.length === 0 ? 1 : fileNames.length - 1} contract and 1 ABI files written to ${process.cwd()}/output/${contractName}`);
}

try {
    main();
} catch(err) {
    console.error(err);
    process.exit(1);
}