class ApiError extends Error{
    constructor(
        statusCode,
        message = " Something went wrong ",
        error =[],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode  //here it is overwritten from constructor
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }