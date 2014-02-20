/* =========================================================
*	AjaxPro.js 1.0
*	Author: Alexander Bech / www.alexanderbech.com
*	http://github.com/AlexanderBech/AjaxPro.js
* ========================================================== */
(function ($) {
	var $listener 	= $({});
	/*
	*	AJAX CALL
	*/
	window.ajaxPro = function(type, controller, $target, sendData, trigger, errorTrigger){
        var type = type || 'GET';
        var controller = controller || null;
        var $target = $target || null;
        var sendData = sendData || {};
        var trigger = trigger || 'AjaxDone';
        var errorTrigger = errorTrigger || false;
        var ajaxSettings = {
            type: type,
            url: controller,
            data: sendData,
            dataType: 'json'
        };
        $.ajax(ajaxSettings)
        .done(function(data, textStatus, jqXHR){
            if(data != null){
                $target.trigger({ type:trigger, 'jsonData':data });
                $target.off(trigger);
            } else {
                if(errorTrigger){
                    $target.trigger({ type:errorTrigger });
                    $target.off(errorTrigger);
                } else {
                    alert('Error');
                }
            }
        })
        .fail(function(jqXHR, textStatus, errorThrown){
            if (errorTrigger) {
                $target.trigger({
                    type: errorTrigger
                });
                $target.off(errorTrigger);
            } else {
                alert('Error: ' + errorThrown);
            }
        });
    }
})(jQuery);