import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";

let client;
if (import.meta.env.VITE_NODE_ENV && import.meta.env.VITE_NODE_ENV.toLowerCase() === 'test'){
    client = new SSMClient({
        region: "us-east-1",
        credentials: {
            accessKeyId: import.meta.env.VITE_SSM_ACCESS_KEY_ID,
            secretAccessKey: import.meta.env.VITE_SSM_SECRET_ACCESS_KEY
        }
    });
    console.log('local');
} else {
    client = new SSMClient({
        region: "us-east-1",
    });
    console.log('cloud');
}

export async function getApiKey(){
    let response = null
    try{
        const command = new GetParameterCommand({
            Name: '/tmdb/api_key'
        });
        const data = await client.send(command);
        response = data.Parameter.Value
    }
    catch (e){
        console.log(e.message)
    }
    finally{
        return response;
    }
}