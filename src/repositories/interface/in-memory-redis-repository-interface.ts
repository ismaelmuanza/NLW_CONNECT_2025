
export interface HIncrby {
    hash: string; 
    field: string; 
    increment: number
}
export type Store = Record<string, Record<string, number>>;

export interface InMemoryRedisRepositoryInterface {
  
    hincrby(data: HIncrby): Promise<number>;
    
    hgetall(hash: string): Promise<Record<string, number> | null>
}
  