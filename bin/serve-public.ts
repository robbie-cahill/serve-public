import program from "commander";
import express from "express";
import { tunnelmole } from "tunnelmole";
import * as url from 'url';

// @ts-ignore
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

process.title = "serve-public";

program.name("serve-public")
    .option("--port <port>", "The port to listen on locally. Defaults to port 3000")
    .option("--path <path>", "The path to your folder containing your files. Defaults to the current folder")
    .option("--domain <domain>", "Tunnelmole domain e.g. mysite.tunnelmole.com. Requires a paid subscription from https://dashboard.tunnelmole.com")
    .parse();

const options = program.opts();

// Get the port option or default to 3000 if not passed
const port = options.port ?? 3000;

// Get the path option or default to the current folder if not passed
const path = options.path ?? __dirname;

// Get the domain or default to undefined
const domain = options.domain ?? undefined;

const run = async function () {
    const app = express();
    app.use(express.static(path));
    console.info(`Local server listening on http://localhost:${port}`);
    await tunnelmole({
        port,
        domain
    });

    app.listen(port);
};

run();
