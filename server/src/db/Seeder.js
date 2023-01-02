// server/src/db/Seeder.js
import { User } from "./../models/User.js"

/* eslint-disable no-console */
import { connection } from "../boot.js"

class Seeder {
    static async seed() {
        // include individual seed commands here
        await User.query().insert({email: "jo@yo.com", password: "12345" })


        console.log("Done!")
        await connection.destroy()
    }
}

export default Seeder