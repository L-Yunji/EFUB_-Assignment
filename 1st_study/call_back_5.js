function fn_fakeAsync(callback){
    callback();
}
  
console.log("------- fn_fakeAsync 호출 직전 -------");
  
fn_fakeAsync(function(){
    console.log("이게 비동기적으로 동작하길 바래");
});
  
console.log("------- fn_fakeAsync 호출 이후 -------");
  