import app from './app'
import { startConnection } from './database'

async function main(){
    startConnection();
    app.listen(app.get('port'));
    console.log('Server on port ', app.get('port'))
    console.log('access_key' , app.get('S3_ACCESS_KEY_ID'));
    console.log('secret_key',app.get('S3_SECRET_KEY'));
}

main();