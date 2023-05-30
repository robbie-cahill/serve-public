import express from "express";
import tunnelmole from "tunnelmole/cjs";

const servePublic = async function (port: number, path: string, domain?: string) {
    const app = express();
    app.use(express.static(path));
    console.info(`Local server listening on http://localhost:${port}`);
    await tunnelmole({
        port,
        domain
    });

    app.listen(port);
};

export { servePublic }