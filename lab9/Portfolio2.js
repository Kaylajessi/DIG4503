import mongoDB from 'mongodb';

class Database{

    connect(){
        this.client = mongoDB.MongoClient
        await client.connect('mongodb+srv://KaylaRoberts:JBUU0R2ZbLMr519n@cluster0.yuzwq.mongodb.net', (error, server)=>{
        if (error){
            console.log(error)
            server.close()
        }this.server = server

        this.database = server.db('sample_airbnb')
        this.collection = database.collection('listingsAndReviews')})
    }

    close(){
        this.server.close()
    }

    createOne(name, price, bedrooms, beds){
        await this.collection.insertOne({beds, price, bedrooms, name})
        return({beds, price, bedrooms, name})
    }

    readOne(name){
        const find = await this.collection.findOne({name})
        if (find == null)
        return({name: "not found"}) 
        else{
            return(find)
        }
    }

    readMany(beds, max_price){
        const search = await this.collection.find({beds, price : {$lte : max_price}})
        return ({listings:search.toArray()}) 
    }

    updateOne (name, data){
        await this.collection.findOneAndUpdate({name}, data)
        return (data)
    }

    deleteOne(name){
       const save = await this.collection.deleteOne(name)
       return ({listings:save.deletedCount})
    }
}

export default Database;