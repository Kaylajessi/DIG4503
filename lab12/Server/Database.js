import mongoDB from 'mongodb';

class Database{

    connect(){
        this.client = mongoDB.MongoClient
        await client.connect('mongodb+srv://KaylaRoberts:JBUU0R2ZbLMr519n@cluster0.yuzwq.mongodb.net', (error, server)=>{
        if (error){
            console.log(error)
            server.close()
        }this.server = server

        this.database = server.db('lab11')
        this.collection = database.collection('books')})
    }

    close(){
        this.server.close()
    }

    createOne(ISBN, author, title, description){
        await this.collection.insertOne({ISBN, author, title, description})
        return({ISBN, author, title, description})
    }

    readOne(ISBN){
        const find = await this.collection.findOne({ISBN})
        if (find == null)
        return({book: "not found"}) 
        else{
            return(find)
        }
    }

    readMany(title, author){
        const search = await this.collection.find({title, author})
        return ({books:search.toArray()}) 
    }

    updateOne(ISBN, data){
        await this.collection.findOneAndUpdate({ISBN}, data)
        return (data)
    }

    deleteOne(ISBN){
       const save = await this.collection.deleteOne(ISBN)
       return ({books:save.deletedCount})
    }
}

export default Database;
