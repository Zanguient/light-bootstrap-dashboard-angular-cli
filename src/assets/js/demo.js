type = ['','info','success','warning','danger'];
background_image = true;

$().ready(function(){
    $sidebar = $('.sidebar');
    $sidebar_img_container = $sidebar.find('.sidebar-background');

    $sidebar_responsive = $('body > .navbar-collapse');

    window_width = $(window).width();

    if(window_width > 767){
        if($('.fixed-plugin .dropdown').hasClass('show-dropdown')){
            $('.fixed-plugin .dropdown').addClass('open');
        }
    }

    $('.fixed-plugin a').click(function(event){
      // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
        if($(this).hasClass('switch-trigger')){
            if(event.stopPropagation){
                event.stopPropagation();
            }
            else if(window.event){
               window.event.cancelBubble = true;
            }
        }
    });

    $('.fixed-plugin .badge').click(function(){

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var new_color = $(this).data('color');

        $sidebar.attr('data-color',new_color);

        if($sidebar_responsive.length != 0){
            $sidebar_responsive.attr('data-color',new_color);
        }
    });

    $('.fixed-plugin .img-holder').click(function(){

        $(this).parent('li').siblings().removeClass('active');
        $(this).parent('li').addClass('active');


        var new_image = $(this).find("img").attr('src');

        $sidebar_img_container.fadeOut('fast', function(){
           $sidebar_img_container.css('background-image','url("' + new_image + '")');
           $sidebar_img_container.fadeIn('fast');
        });

        if($sidebar_responsive.length != 0){
            $sidebar_responsive.css('background-image','url("' + new_image + '")');
        }
    });

    $('.switch input').change(function(){
        $input = $(this);

        if($input.is(':checked')){
            $sidebar_img_container.fadeIn('fast');
            $sidebar.attr('data-image','#')
            background_image = true;
        } else {
            $sidebar.removeAttr('data-image');
            $sidebar_img_container.fadeOut('fast');
            background_image = false;
        }
    });

    $('#twitter').sharrre({
      share: {
        twitter: true
      },
      enableHover: false,
      enableTracking: false,
      buttons: { twitter: {via: 'CreativeTim'}},
      click: function(api, options){
        api.simulateClick();
        api.openPopup('twitter');
      },
      template: '<i class="fa fa-twitter"></i> &middot; 256',
      url: 'http://demos.creative-tim.com/light-bootstrap-dashboard'
    });

    $('#facebook').sharrre({
      share: {
        facebook: true
      },
      enableHover: false,
      enableTracking: false,
      click: function(api, options){
        api.simulateClick();
        api.openPopup('facebook');
      },
      template: '<i class="fa fa-facebook-square"></i> &middot; 426',
      url: 'http://demos.creative-tim.com/light-bootstrap-dashboard'
    });


});
demo = {
	initPickColor: function(){
        $('.pick-class-label').click(function(){
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if(display_div.length) {
            var display_buttons = display_div.find('.btn');
            display_buttons.removeClass(old_class);
            display_buttons.addClass(new_class);
            display_div.attr('data-class', new_class);
            }
        });
    },
	showNotification: function(from, align){
    	color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
        },{
            type: type[color],
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
        inNotify = false;
	}
}
