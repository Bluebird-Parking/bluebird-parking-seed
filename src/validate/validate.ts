import * as Ajv from 'ajv';
const axios = require('axios');

export async function validate(carparks: any[]): Promise<any> {
    const ajv = new Ajv();

    const schema = await axios.get('http://supermodel.io/tomchinery/bluebirdParking/carpark', {
        headers: {
            'Content-Type': 'application/schema+json',
            Accept: '*/*'
        }
    });

    const schem = JSON.parse(JSON.stringify(schema.data));

    const validate = ajv.compile(schem);

    return Promise.all(carparks.map(async (carpark) => await validate(carpark)));
}
