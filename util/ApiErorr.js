

class ApiErorr extends Error {
    constructor(message,statuscode){
        super(message)
        this.statuscode=statuscode
        this.status= `${statuscode}` .startsWith(4) ? "fail" : "erorr"
        this.isOperational=true
    }
}

module.exports=ApiErorr