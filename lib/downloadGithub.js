const download = require('download-git-repo');
const ora = require('ora')

module.exports = (templatePath) => {
  return new Promise((resolve, reject) => {
    const spinner = ora('Downloading template...').start()
    download('chanjet-fe/cjet-h5-template', templatePath, function (error) {
      if (!error) {
        resolve()
        spinner.stop()
      } else {
        reject()
        spinner.fail('下载失败，请检查网络是否连通！并重新执行命令。')
      }
    })
  })
}
