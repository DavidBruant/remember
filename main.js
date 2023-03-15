//@ts-check

/**
 * Promise-based wrapped around localStorage.get/setItem
 * 
 * @param {string} key 
 * @param {any?} value
 * @returns {Promise<any>}
 */
export function remember(key, value){

    if(value === undefined){ // recall
        return Promise.resolve().then(() => {
            const val = localStorage.getItem(key);
            
            if(val){
                try{ 
                    // optimistic attempt at JSON.parsing the value...
                    return JSON.parse(val)
                }
                catch(e){
                    // ... and if that fails, no biggie, just return the value itself
                    return val;
                }
            }
            else{
                return undefined;
            }
        })
    }
    else{
        return Promise.resolve().then(() => {() => {
            let toStore = value;
            
            if(Object(value) === value){
                // this may throw if value is cyclic and that's okay, the error with go to the catch channel
                toStore = JSON.stringify(value);
            }
        
            // this may throw if storage is full and that's okay
            localStorage.setItem(key, toStore);
            return key;
        }})
    }
}

/**
 * Promise-based wrapped around localStorage.removeItem
 * 
 * @param {string} key 
 * @returns {Promise<void>}
 */
export function forget(key){
    return Promise.resolve().then(() => {
        localStorage.removeItem(key)
    })
}

export default remember