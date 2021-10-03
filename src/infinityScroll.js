
/* infinityScroll.js by kosukenemy */

(($) => {
    $.fn.infinityScroll = function(setting) {
        const _this = this;
        setting.data == null && 'undefined' ? null : get_ajax_settings();

        function get_ajax_settings(){
            const params = {
                type: 'GET',
                url: setting.data,
                dataType: setting.type,
            }
            $.when( $.ajax( params ) )
            .done( function(data) { ajaxdata_loadComplate(data) })
            .fail( function(err) {
                console.error(err)
            })
        }


        function ajaxdata_loadComplate(data){
            $(data).length === 0 ?
            console.error(` error: option ${data} is not defind `) || null
            : 
            documentScroll(data);
        }

        function scroll_countUp(jQueryObject , init) {
            return  _this.append( $(jQueryObject).slice(0 , init * 2 ));
        }

        function documentScroll(data , render){
            setting.renderInit == null ? settedInit() : settedAddOpt();
            

            function settedInit(){
                const init = 2;
                scroll_countUp(data ,init) 
                return render = init;
            }

            function settedAddOpt(){
                scroll_countUp(data ,setting.renderInit);
                return render = setting.renderInit;
            }


            
            $(window).on('load scroll resize' , function() {
                const docHight = $(document).innerHeight();
                const windowHight = $(window).innerHeight();
                const pageBottom = docHight - windowHight;
                const list = $("." + setting.loadListClass).not('text');
                const percent = 0.95;   


                if ( pageBottom * percent <= $(window).scrollTop() ){
                    
                    $.when ( _this.html("") )
                    .done (
                        $("." + setting.loadListClass).fadeIn(300),
                        scroll_countUp(data ,list.length + 1)
                    )
                    $("." + setting.loadListClass).last().addClass('is-on')
                    
                    if ( setting.scrollEndMessage !== -1 && 
                        $(data).not('text').length === list.length ) 
                    {
                        $('<div>' , { id: "end-message", text: setting.scrollEndMessage })
                        .appendTo( _this );
                        $("." + setting.loadListClass).removeClass('is-on');
                    } else {
                        return null
                    }

                }
            })
        }

    
    };
})(jQuery);