class InternalServerError(Exception):
    pass

class NoModelFound(Exception):
    pass

class CategoryNotFound(Exception):
    pass

errors = {
    "InternalServerError" : {
        "message" : "Sorry! Something went wrong",
        "status" : 500
    },
    "NoModelFound" : {
        "message" : "The requested model_id does not exist",
        "status" : 400
    },
    "CategoryNototFound" :{
        "message" : "The requested category_no does not exist",
        "status" : 401
    }
}
