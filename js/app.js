(function ($) {

    //-- const --//
    var BASE = "http://www.";

    $(function () {

        //-- event handlers --//
        initHandlers();


        //-- Check for url in url --//
        var givenURL = getUrlParam(); //(RegExp('url=' + '(.+?)(&|$)').exec(location.search) || [, null])[1];
        if (givenURL == null) {
            ////set-up random url

            var urls = [
                "smartfeeling.org",
                "smartfeeling.org/blog",
                "smartfeeling.org/profiles-project/",
                "smartfeeling.org/desktopgap/",
                "smartfeeling.org/profiles/pages/professionisti-gian-angelo-geminiani/"
            ];
            var randomURL = urls[Math.floor(Math.random() * urls.length)];
            var randomhttpURL = (BASE + randomURL);
            $('#displayframe').attr('src', randomhttpURL);
            $('#getURL').attr('value', randomURL);
        } else {
            $('#getURL').attr('value', givenURL);
            $('#displayframe').attr('src', givenURL);
        }
    });

    function initHandlers(){
        $('#iphone').click(function () {
            $('#screen-options').find('li').removeClass("active");
            $(this).addClass("active");
            $('#viewport').attr('class', 'iphone');
            $('#device-detail').attr('class', 'iphone-detail');
        });

        $('#iphone-l').click(function () {
            $("#screen-options").find("li").removeClass("active");
            $(this).addClass("active");
            $('#viewport').attr('class', 'iphone-l');
            $('#device-detail').attr('class', 'iphone-l-detail');
        });

        $('#ipad').click(function () {
            $("#screen-options").find("li").removeClass("active");
            $(this).addClass("active");
            $('#viewport').attr('class', 'ipad');
            $('#device-detail').attr('class', 'ipad-detail');
        });

        $('#ipad-l').click(function () {
            $("#screen-options").find("li").removeClass("active");
            $(this).addClass("active");
            $('#viewport').attr('class', 'ipad-l');
            $('#device-detail').attr('class', 'ipad-l-detail');
        });

        $('#desktop').click(function () {
            $("#screen-options").find("li").removeClass("active");
            $(this).addClass("active");
            $('#viewport').attr('class', 'desktop');
            $('#device-detail').attr('class', 'desktop-detail');
        });

        /// form actions
        $("#button").click(function () {
            updateframe();
        });

        $('#getURL').keypress(function (e) {
            if (e.which == 13) {
                updateframe();
            }
        });

        $(function () {
            $('input[type=text]').focus(function () {
                $(this).val('')
            });

        });
    }


    function getUrlParam(){
        var reg_exp = new RegExp('url=' + '(.+?)(&|$)');
        return (reg_exp.exec(location.search) || [, null])[1];
    }

    function updateframe() {
        var $url = $('#getURL');
        var $frame = $('#displayframe');
        var url = $url.val();

        //-- check for http --//
        if ($url.val().match(/^http/)) {
            $frame.attr('src', url);
        } else {
            var validURL = 'http://' + url;
            $frame.attr('src', validURL);
            return false;
        }
    }

})(jQuery);
