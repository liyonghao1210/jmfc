/*导入头部和尾部*/
    $(document).ready(function(){
       $(".RightNav").load("header.html",function(){
<<<<<<< HEAD
=======
          
>>>>>>> 7d209c995c189f73a10d8f7cd04b0ae56c58fc94
          var urlstr = location.href;
            var urlstatus=false;
            console.log(urlstr)
            $(".linkNav li a").each(function () {
                if ((urlstr + '/').indexOf($(this).attr('href')) > -1&&$(this).attr('href')!='') {
                    $(this).addClass('linkActive'); urlstatus = true;
                } else {
                    $(this).removeClass('linkActive');
                }
            });
            if (!urlstatus) {$(".linkNav li a").eq(3).addClass('linkActive'); }
        });
    });

    