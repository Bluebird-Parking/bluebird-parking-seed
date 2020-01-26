const { transform } = require('camaro');

export async function parser(xml: string): Promise<any> {
    return transform(xml, {
        carparks: [
            '/CarParkDataImport/CarPark',
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
                    '//AccessPoints',
                    {
                        type: 'GeocodeType',
                        easting: 'Easting',
                        northing: 'Northing',
                    }
                ],
                operator: {
                    name: '//CarParkOperator/OperatorName',
                    url: '//CarParkOperator/OperatorURL',
                    email: '//CarParkOperator/OperatorEmail'
                },
                paymentType: '//CarParkAdditionalData/PaymentType/TypeDescription',
                effectiveFromDate: 'WEFDate',
                effectiveUntilDate: 'WEUDate',
                closingDate: '//CarParkAdditionalData/ClosingDate',
                reopeningDate: '//CarParkAdditionalData/ReopeningDate',
                spaces: [
                    '//CarParkAdditionalData/CarParkSpace',
                    {
                        type: 'TypeDescription',
                        numberOfSpaces: 'NumberOfSpaces'
                    }
                ]
            }
        ]
    });
}
