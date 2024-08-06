function responseMiddleware(req, res, next) {
   
       return res.status(200).json({
            success: true,
            status:200,
            data
        });
    }
     

 export default responseMiddleware;