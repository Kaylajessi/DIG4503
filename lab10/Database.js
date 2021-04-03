import mongoDB from 'mongodb';

class Database{

    connect(){
        this.client = mongoDB.MongoClient
        await client.connect('mongodb+srv://KaylaRoberts:JBUU0R2ZbLMr519n@cluster0.yuzwq.mongodb.net', (error, server)=>{
        if (error){
            console.log(error)
            server.close()
        }this.server = server

        this.database = server.db('lab10')
        this.collection = database.collection('people')})
    }

    close(){
        this.server.close()
    }

    createOne(firstName, lastName, favoriteColor){
        this.collection.insertOne({firstName, lastName, favoriteColor})
        return({firstName, lastName, favoriteColor})
    }

    readOne(firstName){
        const find = this.collection.findOne({firstName})
        if (find == null)
        return({person: "not found"}) 
        else{
            return(find)
        }
    }
}
