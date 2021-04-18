import app from './app'
import { startConnection } from './database'

async function main(){
    startConnection();
    app.listen(app.get('port'));
    console.log('Server on port ', app.get('port'))
    console.log('access_key' , app.get('aws_access_key_id'));
    console.log('secret_key',app.get('aws_secret_key'));
}

main();