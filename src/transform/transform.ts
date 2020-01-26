import { uuid } from 'uuidv4';

export async function transform(carparks: any[]): Promise<any> {
    return Promise.all(
        carparks.map(async (carpark) => {
            const accessPoints = transformAccessPoints(carpark.accessPoints);
            const spaces = transformSpaces(carpark.spaces);

            delete carpark.accessPoints;
            delete carpark.spaces;

            return {
                ...carpark,
                uuid: uuid(),
                ...accessPoints,
                operator: {
                    ...carpark.operator,
                    uuid: uuid()
                },
                ...spaces
            }
        })
    );
}

export function transformAccessPoints(accessPoints: any[]): any {
    const entrance = accessPoints.find((accessPoint) => accessPoint.type === 'Entrance');
    const exit = accessPoints.find((accessPoint) => accessPoint.type === 'Exit');
    const map = accessPoints.find((accessPoint) => accessPoint.type === 'Map');

    return {
        entranceAccessPoint: { ...entrance, uuid: uuid() },
        exitAccessPoint: { ...exit, uuid: uuid() },
        centralAccessPoint: { ...map, uuid: uuid() }
    };
}

export function transformSpaces(spaces: any[]): any {
    const disabled = spaces.find((space) => space.type === 'Disabled');
    const parent = spaces.find((space) => space.type === 'Parent and child');

    return {
        disabledSpaces: disabled ? parseInt(disabled.numberOfSpaces) : 0,
        parentAndChildSpaces: parent ? parseInt(parent.numberOfSpaces) : 0
    };
}
