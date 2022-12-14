import mongoose from "mongoose"
import Post from "./models/postModel"

mongoose.set("strictQuery", true)

async function connectMongo() {
    if (mongoose.connection.readyState == 0) {
        console.log("INTE CONNECTAD")
    }
    if (mongoose.connection.readyState == 1) {
        console.log("FRÅN ADD API: DU ÄR CONNECTAD")
    }
    await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log(mongoose.connection.readyState)
}

export default connectMongo

Post.watch().on("change", () => console.log("NU HÄNDE NÅGGI"))

// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }

// mongoose.connect(process.env.MONGO_URI, options)

// const db = mongoose.connection
// db.on("error", (err) => console.error(err))
// db.once("open", () => console.log("CONNECTED TO DATABAAASEN"))

// setInterval(
//     () =>
//         console.log(
//             "Från mongoose filen, readystate: " + mongoose.connection.readyState
//         ),
//     5000
// )

// export default db
