import mongoDB from 'mongodb';

var client = mongoDB.MongoClient
client.connect('mongodb+srv://KaylaRoberts:JBUU0R2ZbLMr519n@cluster0.yuzwq.mongodb.net', (error, server)=>{
if (error){
    console.log(error)
    server.close()
}

var database = server.db('sample_airbnb')
var collection = database.collection('listingsAndReviews')
var cursor = collection.find({
    "review_scores.review_scores_rating" : {$gte : 99}, 
    "beds" : {$gte : 5},
    "price" : {$lte : 200}
})
cursor.toArray().then((results)=>{
    console.log(results)
})
server.close()
})