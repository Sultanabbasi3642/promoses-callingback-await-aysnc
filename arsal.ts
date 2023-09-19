function userbuyproduct1(cb:(text:string)=>void){
  console.log("arsal has come to a online shopping store")
  setTimeout(() => {
    console.log("add headphone too cart ")
    cb("product loading....");
  }, 2000);
 }
function userbuyproductcallbackfunc (text:string){
    console.log(text);
    maketea(maketeacallback)
};
// userbuyproduct1(userbuyproductcallbackfunc);


function maketea(cb:(text:string)=>void ){
    console.log("milk and water is add");
    setTimeout(() => {
        console.log("adding milk and water");
        cb("tea is ready")
    }, 2000);

}
function maketeacallback(text:string) {
    console.log("making tea", text);   
    arsalissue(calbackarsal)
}
function arsalissue(cb:(text:string)=>void) {
    setTimeout(() => {
        console.log("ma phas gya");
        cb("bijli ni aondi")
        
    }, 4000);
}
function calbackarsal(text:string){
    console.log("mera issue",text);
    
}
userbuyproduct1(userbuyproductcallbackfunc);