import program from "commander";
import * as url from 'url';
import { servePublic } from "../src/serve-public.js";

// @ts-ignore
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

process.title = "serve-public";

program.name("serve-public")
    .version('1.0.0')
    .usage(`
serve-public
serve-public [--path <path>] [--port <port>] [--domain <domain>]

Serve a local folder with a public URL.

With no arguments the folder will be the current folder, the port will be 3000 and you'll be using Tunnelmole in free mode with a random subdomain.

Otherwise pass in --path to change the folder, --port to change the port and/or --domain to use a custom Tunnelmole subdomain (requires a paid subscription from https://dashboard.tunnelmole.com)
    `)
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

servePublic(port, path, domain);