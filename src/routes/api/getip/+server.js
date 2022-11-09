import { json } from "@sveltejs/kit"

export async function GET({request}){
    console.log(...request.headers);
    let result = {};
    try {
        result = {
            address: request.headers.get('host'),
            'x-forwarded-for': request.headers.get('x-forwarded-for')
        }

    }
    catch(e){
        console.log(e.message);
    }
    finally {
        return json(result);
    }
}