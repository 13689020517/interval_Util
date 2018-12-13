//通常用的方法：
//启动定时器：
window.setInterval(Method,Time)

//Method是定时调用的js方法

//Time是间隔时间，单位是毫秒

//取消定时器：  

clearInterval(Method);

//优化方案如下
    var timeout = false; //启动及关闭按钮  
    function time()  
    {  
      if(timeout) return;  
      Method();  
      setTimeout(time,100); //time是指本身,延时递归调用自己,100为间隔调用时间,单位毫秒  
    }  
