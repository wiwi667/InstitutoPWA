$(function () {
    //$('.dropdown-toggle').mouseover(function () {
    //    $(this).trigger("click");
    //    $(this).find(".dropdown-menu").addClass('show');

    //}).mouseout(function () {
    //    //  setTimeout(function(){
    //    //	$(this).trigger( "click" );
    //    //	},500)
    //});

    //$('.main-menu').mouseout(function () {

    //});

    $('#div_ubicacion').click(function () {
        window.open('https://www.google.com/maps/place/Hospital+Metropolitano/@-0.1841913,-78.5056255,17z/data=!3m1!4b1!4m5!3m4!1s0x91d59a58b2e422f9:0xc098a2c1aeded375!8m2!3d-0.1841967!4d-78.5034315', '_blank');
    });

    $('#divEnviarCorreo').on('click', function (event) {
        event.preventDefault();
        var email = 'icvmedical@gmail.com';
        var subject = 'Cita Medica';
        var emailBody = 'Estimados';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
    });
    renderSvg = function () {
        /*$('img').each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            $.get(imgURL, function (data) {
                var $svg = jQuery(data).find('svg');
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }
                $svg = $svg.removeAttr('xmlns:a');
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }
                $img.replaceWith($svg);
            }, 'xml');
        });*/
    };
    abrir = function (id) {
        var _id = id.split('?');
        if (_id[0].indexOf('.html') > 0) {
            $.get(_id[0].replace('#', ''), function (data) {
                $('#content').empty();
                $('#content').append(data);
                renderSvg();
                window.dispatchEvent(new Event('resize'));
                if (_id.length > 1) {
                    var _tm = $('#' + _id[1]).offset().top
                    setTimeout(function () {
                        $(window).scrollTop(_tm)
                    }, 100);
                }               
            });
        }
    };
    funcRef = function (e) {
        var id = window.location.hash;
        if (id.indexOf('.html') > 0) {
            $(window).scrollTop(0);
            abrir(id);
        }
    };
    funcBuscar = function (parametro) {
        var _param = [];
        var _param1 = parametro.split(' ');
        $(_param1).each(function (i, e) {
            if (e.trim() != " ") _param.push(e);
        });
        console.log(_param);
        var _segemntos = ["tratamientos.html", "procedimientos.html"];
        $(_segemntos).each(function (a, b) {
            $.get(b, function (data) {
                var _res = new DOMParser().parseFromString(data, "text/html").body.children;
                for (var i = 0; i < _res.length; i++) {
                    var _xx = _res[i].children().find(":contains('MINIMAMENTE')").filter(function () { return $(this).children().length === 0 || $(this).children().length === 1; })[0]
                }
                //$('#sec_minimamente_invasiva').children().find(":contains('MINIMAMENTE')").filter(function() { return $(this).children().length === 0||$(this).children().length === 1;})[0]

                $(_param).each(function (c, d) {
                    if (data.indexOf(d)>0) {
                        
                    }
                })
            });
        });        
    };
    $("#target_buscador").submit(function (event) {
        funcBuscar($('#search').val().replace(/\r?\n/g, "\r\n"));
        event.preventDefault();
    });
});
