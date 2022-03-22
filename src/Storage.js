/**
 * 
 */
class Storage{

    /**
     * has check containt
     * @param {*} key 
     * @returns 
     */
    static has(key){
        return localStorage.getItem(key) ? localStorage.getItem(key) : false;
    }

    /**
     * set value to Local storage
     * @param {*} key 
     * @param {*} value 
     */
    static set(key, value){

        let allData = []
        if (this.has(key)) {
            allData = JSON.parse(this.has(key))
        }

        allData.push(value)

        localStorage.setItem(key, JSON.stringify(allData))

    }

    /**
     * get value from Local storage
     * @param {*} key 
     * @returns 
     * 
     */
    static get(key){
        let devs = this.has(key)
        console.log(devs);
        return JSON.parse(devs)
    }
}

export default Storage;