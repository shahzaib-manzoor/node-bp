import { Router } from "express";
import responseHandler from "../helpers/response.helper.js";

const router = Router();

router.get('/', (req, res,next) => {
    try {
      
const data= {
     "new way tro handle response": "done",
}
     if (true){
        throw new Error("Error occured fooform")
     }
        responseHandler(res, 200, data  , "Data fetched successfully");
        
    } catch (error) {
        next(error)
    }
}
);

export default router;
