'use strict';
const electron = require('electron');
// 모듈을 제어하는 어플리케이션.
const app = electron.app;
// 기본 브라우저 창을 생성하는 모듈.
const BrowserWindow = electron.BrowserWindow;

// 윈도우 개체에 대한 글로벌 참조를 유지하지 않으면, JavaScript의 객체가 가비지가 수집되면 자동으로 닫힙니다.
let mainWindow;

// 스마트미러가 실행되기 전에 main.js부터 실행된다. electron으로 실행되게 하며 메뉴 숨김, 테마, 윈도창에 대한 설정이 가능.
function createWindow () {
  // 브라우저 창을 생성.
  var browserWindowOptions = {width: 800, height: 600, icon: 'favicon.ico' , kiosk:true, autoHideMenuBar:true, darkTheme:true};
  mainWindow = new BrowserWindow(browserWindowOptions); //{width: 800, height: 600}

  // 앱의 index.html을 가져오는 부분.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

  // 창이 닫힐 때 표시됩니다.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// Electron이 완료되면 호출. 초기화하고 브라우저 창을 만들 준비 완료.
app.on('ready', createWindow);

// 모든 창을 닫으면 중지.
app.on('window-all-closed', function () {
  // 일반적으로 애플리케이션과 해당 메뉴 모음에 사용되며, 사용자가 Cmd + Q로 명시적으로 종료할 때까지 활성 상태 유지
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

/* WEB SERVER */
var http = require('http');
var express = require('express');
var smartmirror = express();
smartmirror.use(express.static(__dirname+"/public"));

http.createServer(smartmirror).listen(9090,function() {
	console.log('server on 9090...');
});

/* GET 통신을 위한  */
var url = require('url');
var querystring = require('querystring');


/* Electron을 위한 전역 객체 */
var events = require('events');
global.sender = new events.EventEmitter();

/* 스마트 미러 <-> Android APP 음성 명령 통신 */
smartmirror.get('/android.do',function(req,res){
	console.log(req.url);
	var query = url.parse(req.url, true).query;
	console.log(query);
	global.sender.emit('android',query);
	res.send("<h1>Android Command OK</h1>");
});

/* 스마트 미러 <-> Android APP Notification 통신 */
smartmirror.get('/noti.do',function(req,res){
	console.log(req.url);
	var query = url.parse(req.url, true).query;
	console.log(query);
	global.sender.emit('data',query);
	res.send("<h1>Noti OK</h1>");
});


