import fs from 'fs';
import path from 'path';
console.log("My dirname is ", __dirname)
const logDirectoryPath = path.join(__dirname.split(".next")[0], "logs");
console.log("My log directory path is", logDirectoryPath)
const logFilePath = path.join(logDirectoryPath, 'api_logs.jsonl');

export async function log_request(request: Request) {
    console.log("In log_request", request)
    if (process.env.NODE_ENV === "development") {
        const body = await request.text();

        const logEntry = {
            timestamp: Date.now().toString(),
            request: {
                method: request.method,
                pathname: request.url.split("/api")[1],
                body: body,
                headers: Object.fromEntries(request.headers.entries()),
            }
        }

        if (!fs.existsSync(logDirectoryPath)) {
            fs.mkdirSync(logDirectoryPath, { recursive: true });
        }

        console.log("In log_request, writing", logEntry)
        fs.appendFileSync(logFilePath, JSON.stringify(logEntry) + '\n');
        console.log("Wrote log entry to", logFilePath)
        return;

    } else {
        return;
    }
}