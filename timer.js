 window.onload=counter; 
   function counter()
    { minutes=01       // set minutes
     seconds =20;      // set seconds
      countDown(); }
     
 function countDown()  // function called
        {
          document.getElementById("min").innerHTML= minutes; document.getElementById("remain").innerHTML= seconds;
          setTimeout("countDown()",1000);
               if(minutes == 0 && seconds == 0)   // time up condition 
                   {           
                  window.location.href = "startpage.html";   // Time is over then called start page
                      // document.write("form submitted");  
                     } 
             
                else    
                    {         
                     seconds--;
                      if(seconds ==0 && minutes > 0)
                     {     
                        minutes--;     
                        seconds=60; 
                     }     
                   }
           
       } 
