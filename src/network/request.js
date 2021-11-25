import axios from "axios";

export function ajax(config){
    return new Promise((resolve,reject) => {

        const axios1 = axios.create({
            timeout:5000,
            baseURL:'http://123.207.32.32:8000'
        })
        //请求拦截
        axios1.interceptors.request.use(config =>{
            return config
        },err =>{
            return Promise.reject(err)
        })
        //响应拦截
        axios1.interceptors.response.use(res =>{
            return res.data
        },error => {
            return Promise.reject(error)
        })

        axios1(config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function ajax1(config){

    this.all = (arr) =>{
        axios.all(arr)
    }
    return new Promise((resolve,reject) => {

        const axios1 = axios.create({
            timeout:5000,
            baseURL:'http://123.207.32.32:8000'
        })
        //请求拦截
        axios1.interceptors.request.use(config =>{
            return config
        },err =>{
            console.log(err);
        })
        //响应拦截
        axios1.interceptors.response.use(res =>{
            return res.data
        },error => {
            console.log(error);
        })

        axios1(config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
