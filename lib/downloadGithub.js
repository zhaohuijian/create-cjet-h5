/**
 * Copyright (c) 2020, chanjet-fe, https://github.com/chanjet-fe.
 * Based on create-react-app but adds a bunch of useful features.
 */

'use strict';

const download = require('download-git-repo');
const ora = require('ora')

module.exports = (templatePath, pro = false) => {
  return new Promise((resolve, reject) => {
    const spinner = ora('Downloading template...').start()
    const tempAddress = pro ? 'chanjet-fe/cjet-h5-pro-template' : 'chanjet-fe/cjet-h5-template'
    download(tempAddress, templatePath, function (error) {
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
