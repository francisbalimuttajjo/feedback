const sendResponse=(req,res,statusCode,status,data)=>res.status(statusCode).json({
    status,
    data
  })


  export {sendResponse}