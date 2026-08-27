/**
 * tRPC v11 - multipart-chunk-upload-reader
 */
export async function* readMultipart(stream: any) { for await (const c of stream) yield c; }
