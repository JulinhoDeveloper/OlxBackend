const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.DATABASE , {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });

        console.log('DB Online');


    } catch (error) {
        console.log(error);
        throw new Error('Erro no  BD');
    }


}


module.exports = {
    dbConnection
}