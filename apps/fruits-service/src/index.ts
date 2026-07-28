import app from "./app";
import connectDB from "./db/database";


const PORT = 3002;


connectDB()
.then(() => {

    app.listen(PORT, () => {
        console.log(
            `Fruit service running on port ${PORT}`
        );
    });

})
.catch((error)=>{

    console.log(error);

});