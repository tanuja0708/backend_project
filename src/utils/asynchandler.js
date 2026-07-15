//this will just have a method 
//two types of async handler 1-try catch , 2-promises

const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}




export {asyncHandler}

// const asyncHandler = () => {}  //higher order funtion -->can accept function as a parameter and also return it;
// const asyncHandler = (func) => () => {} //here the initial function is passed to the function
// const asyncHandler = (func) => async() => {}

// // this a wrapper
// const asyncHandler = (fn) => async (req, res, next)=> {
//     try{
//         await fn(req, res, next)
//     }catch(error){

//         res.status(error.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

