
import { Property } from "../models/property";
import { BaseApi } from "./baseApi";


export class ZillowApi {
    static async searchSoldPropertyListByZip(zpid: string) : Promise<Property[]> {
        const url = `https://zillow-com1.p.rapidapi.com/similarSales?zpid=${zpid}`;
        const response = await BaseApi.get<Property[]>(url);
        return response;
    }
}