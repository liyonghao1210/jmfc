/*导入头部和尾部*/
    $(document).ready(function(){
       $(".RightNav").load("header.html",function(){
          
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

    