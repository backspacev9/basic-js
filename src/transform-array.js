const CustomError = require("../extensions/custom-error");
 
module.exports = function transform(arr) {
  let resArr = arr.slice();
  let pos = 0;
  if (arr == undefined) return [];

  for(let i = 0;i < arr.length;i++) {

    if(resArr[i] == '--double-next'){
      if(resArr[i+1] !== undefined){
          resArr[i] = resArr[i+1];
      } else {resArr.splice(i,1);} 
      i = i+1;
    }
    
    if(resArr[i] =='--double-prev'){
      if(resArr[i-1] !== undefined){
     
          resArr[i] = resArr[i-1];
      } else {
              if (i == 0 ){
                 resArr.splice(i,1);
              }
              if (i!==0){
                resArr.splice(i-1,2);
              }  
      }
      i = i-1;
    }

    if(resArr[i]=='--discard-next'){
      if(resArr[i+1] !== undefined){
          resArr.splice(i,1);  
          resArr[i] = undefined;    
          i= i-1;
      }else {resArr.splice(i,1);}
      i = i+1;
    }

    if(resArr[i]=='--discard-prev'){ 
     // console.log(i);
      if(resArr[i-1] !== undefined){
         resArr.splice(i-1,2);
         
      }else { 
              if (i == 0 ){
                 resArr.splice(i,1);
              }
              if (i!==0){
                resArr.splice(i-1,2);
              }     
            }
      i=i-1;
    }

     //console.log('pos: '+pos);
  }
//console.log('arr: '+ arr);
for(let j = 0;j < resArr.length;j++) {
  if(resArr[j] == undefined){
    resArr.splice(j,1);
    j = j-1;
  }
}
 return resArr;
};
