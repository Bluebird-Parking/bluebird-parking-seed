const { transform } = require('camaro');

//@TODO: This output could be an interface?
export async function parser(xml: string): Promise<any> {
    return transform(xml, {
        carparks: [
            '/CarParkDataImport/CarPark',
            //'/CarPark',
            {
                name: 'CarParkName',
                location: 'Location',
                notes: 'Notes',
                address: 'Address',
                postcode: 'Postcode',
                telephone: 'Telephone',
                url: 'URL',
                lastUpdated: 'DateRecordLastUpdated',
                accessPoints: [
                    'child::AccessPoints',
                    {
                        type: 'GeocodeType',
                        easting: 'Easting',
                        northing: 'Northing',
                    }
                ],
                operator: {
                    name: 'child::CarParkOperator/OperatorName',
                    url: 'child::CarParkOperator/OperatorURL',
                    email: 'child::CarParkOperator/OperatorEmail'
                },
                paymentType: 'child::CarParkAdditionalData/PaymentType/TypeDescription',
                effectiveFromDate: 'WEFDate',
                effectiveUntilDate: 'WEUDate',
                closingDate: 'child::CarParkAdditionalData/ClosingDate',
                reopeningDate: 'child::CarParkAdditionalData/ReopeningDate',
                spaces: [
                    'child::CarParkAdditionalData/CarParkSpace',
                    {
                        type: 'TypeDescription',
                        numberOfSpaces: 'NumberOfSpaces'
                    }
                ]
            }
        ]
    });
}
