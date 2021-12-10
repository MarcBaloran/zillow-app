export interface Property {
    dateSold: number;
    bedrooms: number;
    homeStatus: string;
    latitude: number;
    miniCardPhotos: imageUrl[];
    zpid: number;
    longitude: number;
    bathrooms: number;
    address: Address;
    livingArea: number;
    livingAreaUnits: string;
    homeType: string;
    currency: string;
    lastSoldPrice: number;
    price: number;
};

export interface Address {
    city: string
    state: string;
    streetAddress: string;
    zipcode: number
}

export interface imageUrl {
    url: string
}