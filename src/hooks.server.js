import { parse } from "cookie"
// import { retrieveSession } from "./lib/db"

export const handle = async ({ event, resolve })=>{
    // const cookies = parse(event.request.headers.get('cookie') || '')
    // if ( cookies ){
    //     console.log('handle: no cookies');
    // }
    return resolve(event);
}
