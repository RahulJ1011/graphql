const {MongoClient,ServerApiVersion} = require("mongodb")

const uri = "mongodb+srv://rahul876j:graph123@cluster0.gxsb83x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const client = new MongoClient(uri,{
    serverApi:{
        version: ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
})

async function run()
{
    try{
        await client.connect()
        await client.db("admin").command({ping: 1})
        console.log("Pinged your deployment . You sucessfully connected to mongo db")

    }
    finally
    {
        await client.close()
    }
   
}
run().catch(console.dir)