import {Readable} from "node:stream";

export function toNodeReadable(readableStream: ReadableStream ) {
    // Create a Node.js Readable stream from the web ReadableStream
    const reader = readableStream.getReader();

    return new Readable({
        async read() {
            try {
                const { done, value } = await reader.read();
                if (done) {
                    this.push(null); // Push null to signal the end of the stream
                } else {
                    this.push(value);
                }
            } catch (error) {
                this.destroy(error as Error);
            }
        }
    });
}
