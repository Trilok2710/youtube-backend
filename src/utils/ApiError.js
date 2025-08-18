class ApipError extends Error{
    constructor(
        statusCode,
        message = "Something Went Wrong",
        errors =[],
        statck =""
    ){
        super(message)  
        this.statusCode = statusCode
        this.idea = null
        this.message = message
        this.success = false
        this.errors =errors
        if(statck){
            this.stack =statck
        }else{
            Error.captureStackTrace(this , this.
                constructor
            )
        }
    }
}

