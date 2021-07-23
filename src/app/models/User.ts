export interface User {
    firstName: string,
    lastName: string,
    age?: number,
    address?: {
        flat?: number,
        building?: string,
        area?: string,
        city?: string,
        state?: string
    },
    isActive?: boolean,
    registered?: any,
    hide?: boolean
}