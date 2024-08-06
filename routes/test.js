import { Router } from "express";
import responseHandler from "../helpers/response.helper.js";

const router = Router();

router.get('/', (req, res,next) => {
    try {
      
const data= {
     "new way tro handle response": "done",
}
     return  responseHandler( res, 200, data,"fetched successfully");
        
    } catch (error) {
        next(error)
    }
}
);

export default router;
