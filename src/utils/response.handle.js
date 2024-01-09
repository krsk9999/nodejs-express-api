import { Response } from "express";

const responseHandler = (res, serviceResponse) => {
    if (!serviceResponse) {
        res.status(400).send({status: "FAIL", data: serviceResponse})
    }
    
}