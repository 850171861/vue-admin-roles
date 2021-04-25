import axios from 'axios'

const superAdmin = () => axios.get('/superAdmin-mock') //超级管理员
const commonAdmin = () => axios.get('/commonAdmin-mock') //超级管理员



export {
  superAdmin,
  commonAdmin
}