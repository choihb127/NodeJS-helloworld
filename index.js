//index.js
var express=require('express'); //express module를 불러와서(require) express라는 변수에 담기
var app=express(); //app이라는 object에 express실행시키기
//var app=require('express'); //이런식으로는 안댐

/*app.get('/',function(req,res){ // '/' 위치에 get요청(req)이 왔을때
    res.send('Hello World!'); // 응답(res)로 'Hello world' 보내기
});
*/

app.use(express.static(__dirname+'/public')); //현재위치/public 를 static 폴더로 지정
//__dirname=실행파일 위치
// '/public'이 루트(/)로 설정됨
// get 과 use의 차이?

app.set('view engine', 'ejs'); //ejs사용을 위해 express의 view engine에 ejs set

app.get('/hello',function(req,res){ // '/hello' 위치에 get요청(req)이 왔을때
    res.render('hello',{name:req.query.nameQuery}); //query로 이름받기 ex) /hello => query없음. /hello?nameQuery=HB => 접속주소 nameQuery 값 HB
    //res.render로 ejs파일 사용  구조=> res.render('ejs파일명',ejs에서 사용될 object)
});

app.get('/hello/:nameParam',function(req,res){ //'hello' 위치에 get요청(req)이 왔을때
    res.render('hello',{name:req.params.nameParam}); //route로 이름받기 ex)/hello/HB => route parameter=HB
    //res.render로 ejs파일 사용  구조=> res.render('ejs파일명',ejs에서 사용될 object)
});

var port=3000; //port 변수 3000
app.listen(port,function(){ //port변수 포트에 node.js 서버 연결
    console.log('server on! http://localhost:'+port); //서버가 실행시 콘솔창에 표시되는 메세지
});