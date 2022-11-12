const axios = require('axios')

axios.interceptors.response.use(res => {
  return res.data;
})
/**
 * 获取模板列表
 * @returns Promise
 */
 async function getRepoList() {
    const data = await axios.get('https://api.github.com/repos/SilverComet7/vite-ts-koa-template/branches')
    return data
  }
  
  console.log(getRepoList());