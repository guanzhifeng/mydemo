import axios from "axios";
import qs from 'qs'

function ajax(method,url,params){
    let httpDefault = {
        method: method,
        url: url,
        params: method === 'GET' ? params:null,
        data: method === 'POST' ? qs.stringify(params):null
    }

    return new Promise((resolve,reject) => {
        const axioss = axios.create({
            timeout:10000,
            baseURL:'http://123.207.32.32:8000'
        })

        //请求拦截
        axioss.interceptors.request.use(config =>{
            return config
        },err =>{
            return Promise.reject(err)
        })

        //响应拦截
        axioss.interceptors.response.use(res =>{
            return res.data
        },error => {
            return Promise.reject(error)
        })

        axioss(httpDefault)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}


export default {
    install: function (Vue) {
        Vue.prototype.ajaxGet = (url,params) => ajax('GET',url,params)
        Vue.prototype.ajaxPost = (url,data) => ajax('POST',url,data)
    }
}