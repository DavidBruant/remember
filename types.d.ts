export function remember(key: string) : Promise<string | Object | undefined>
export function remember(key: string, value: string | Object) : Promise<undefined>

export function forget(key: string) : Promise<undefined>

export default remember