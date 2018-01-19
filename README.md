1.全局安装express
npm install express-generator -g

2.在server文件下生成手脚架基于ejs模版
express --view=ejs
npm install

3.在工程文件目录下安装
npm i  babel-loader babel-core babel-preset-env babel-preset-es2015   yargs gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util gulp-live-server  del  gulp-sequence  require-dir --save-dev

4.在服务器文件的app.js文件的app.use(express.static(path.join(__dirname, 'public')))下写入
app.use(require('connect-livereload')());