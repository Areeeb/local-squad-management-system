/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';

$(function(){
    
    var $var1 = $(".imagesDiv");
    var $var2 = $var1.find(".images");
    var slider = 1;
    var counter = 8;
    setInterval(function(){
        
        
        
        
        $var2.animate({"margin-left" : "-=635px"}, 2000, function(){
            slider++;
            //alert(slider);
            if(slider === 8){
            
            //slider = 1;
            //counter++;
            $var2.css("margin-left", "+=6350px");
            //alert(slider);
            
            }
            
            if(slider === 18){
                $var2.css("margin-left", "+=6350px");
                slider = 8;
            }
        });
        
        
    }, 0);
    
    /*$('#newsLink').on('click', function(){
       $.get("FlipboardNewsScrapper.py", url: "C:\Users\Areeb\eclipse-workspace\WebScrapper\FlipboardNewsScrapper.py");
       success : document.write("hello");
       
    });*/
    
    

});

