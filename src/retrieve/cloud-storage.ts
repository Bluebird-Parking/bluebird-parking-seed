const { Storage } = require('@google-cloud/storage');

export async function cloudStorageDownload(bucketName: string, fileName: string): Promise<any> {
    const storage = new Storage();
    const bucket = storage.bucket(bucketName);
    const file = bucket.file(fileName);

    return await file.download();
}
