import express from "express";
import tunnelmole from "tunnelmole/cjs";
import serveIndex from "serve-index";

const servePublic = async function (port: number, path: string, domain?: string) {
    const app = express();
    app.use(express.static(path));
    app.use(serveIndex(path));
    console.info(`Local server listening on http://localhost:${port}`);
    await tunnelmole({
        port,
        domain
    });

    app.listen(port);
};

export { servePublic }