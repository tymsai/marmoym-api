import jwt from 'jsonwebtoken';
import * as bodyparser from 'body-parser';

import models from '../models';

export const userLogin = (req,res) => {
        console.log("hello");

        res.send('Hello World!222')
        return res
}

export const userGet = (req,res) => {
    console.log("getUserInfo")
    res.send('Hello Wor213123ld!222')
    return res
}

export const userSignup = (req,res) => {

}

export const userUpdate = (req,res) => {

}

export const userDelete = (req,res) => {

}