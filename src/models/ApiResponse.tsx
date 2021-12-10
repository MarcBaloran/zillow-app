export interface ApiResponse<T> {
    request_hash: string
    request_cached: boolean
    request_cache_expiry: number;
    results: T;
    last_page: number;
}