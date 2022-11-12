const downloadGitRepo = require('download-git-repo') // 不支持 Promise

downloadGitRepo('direct:https://github.com/SilverComet7/vite-ts-koa-template.git#master', 'test/tmp', { clone: true }, function (err) {
  console.log(err ? 'Error' : 'Success')
})