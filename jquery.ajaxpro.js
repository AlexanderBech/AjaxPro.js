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
		var trigger = trigger || 'AjaxDone';
		var errorTrigger = errorTrigger || false;
		$.ajax({
			type: type,
			url: controller,
			data: sendData,
			dataType: 'json'
		})
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
			alert(errorThrown);
		});
	}
})(jQuery);