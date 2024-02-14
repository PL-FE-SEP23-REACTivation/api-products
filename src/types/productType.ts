export interface PhoneType {
    id: string,
    namespaceId: string;
    name: string;
    capacityAvailable: string[],
    capacity: string,
    priceRegular: string,
    priceDiscount: number,
    colorsAvailable: string[],
    color: string,
    images: string[],
    description: Description[],
    screen: string,
    resolution: string,
    processor: string,
    ram: string,
    camera: string,
    zoom: string,
    cell: string[],
}

interface Description {
    title: string,
    text: string[],
}