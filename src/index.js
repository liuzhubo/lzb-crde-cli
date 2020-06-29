console.log('入口文件')

const program = require('commander') //编写指令和处理命令行

program
  .version('0.0.1')
  .command('init', 'Generate a new project from a template')
  .action(() => {
  })

program.parse(program.argv)

const inquirer = require('inquirer') // 强大的交互式命令行工具

inquirer
  .prompt([
    // 交互问题
  ])
  .then(answers => {
    // 回调函数， answers就是用户输入的内容，是个对象
  })

const chalk = require('chalk')  // 用不同颜色输出信息

const ora = require('ora')// 转圈圈

let spiner = ora('downLoading')
// spiner.start()

const download = require('download-git-repo') // 下载远程模板
const { clearLine } = require('inquirer/lib/utils/readline')

console.log('test')

