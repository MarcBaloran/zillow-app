import axios, { AxiosRequestConfig } from "axios";

export class BaseApi {
    
    // eslint-disable-next-line
    public static async post<T>(url: string, body: any) {
        const requestConfig: AxiosRequestConfig = await this.buildDefaultRequestConfig();
        const result = await axios.post<T>(url, body, requestConfig);
        return result;
    }
    
    public static async get<T>(url: string) {
        const requestConfig: AxiosRequestConfig = await this.buildDefaultRequestConfig();
        const result = await axios.get<T>(url, requestConfig);
        return result.data;
    }     
    
    // eslint-disable-next-line
    public static async put<T>(url: string, body: any) {
        const requestConfig: AxiosRequestConfig = await this.buildDefaultRequestConfig();
        const result = await axios.put<T>(url, body, requestConfig);
        return result;
    }
    
    public static async delete(url: string) {
        const requestConfig: AxiosRequestConfig = await this.buildDefaultRequestConfig();
        const result = await axios.delete(url, requestConfig);
        return result;
    }

    public static async buildDefaultRequestConfig(): Promise<AxiosRequestConfig> {
        return {
            headers: {
                "Content-Type": "application/json",
                'x-rapidapi-host': 'zillow-com1.p.rapidapi.com',
                'x-rapidapi-key': 'fcb47358d3mshe4ce61437b23a98p12ba66jsn58126e7900ab'
            },
        };
    }

    
}