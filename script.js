    (function(){
        'use strict';
        var  arr = [2,4,5,8,5,2,9],
         newArr = [];
         
         function map(func,[] ){
             for(var i = 0; i < arr.length; i++){
                 newArr.push(square(arr[i]));
                }
                return newArr;
                
            }
            console.log(map(square, arr)); 
            console.log(arr); 
            function square(x) {
                return x * x;
                
            }
            alert ('nums : '+ arr);
    alert('square : ' + newArr);
    })();