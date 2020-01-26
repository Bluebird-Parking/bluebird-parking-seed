const { Storage } = require('@google-cloud/storage');

export async function cloudStorageUpload(bucketName: string, fileName: string, contents: string): Promise<any> {
    const storage = new Storage();
    const bucket = storage.bucket(bucketName);
    const file = bucket.file(fileName);

    return await file.save(contents);
}
