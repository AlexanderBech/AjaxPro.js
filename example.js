/* =========================================================
*	AjaxPro.js 1.0
*	Author: Alexander Bech / www.alexanderbech.com
*	http://github.com/AlexanderBech/AjaxPro.js
* ========================================================== */
(function ($) {

	var $listener 	= $({}),
		ajaxUrl 	= 'yoururl.com/ajax';

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
		//.always(function(){ alert('always'); });
	}

	/* ----------------------------------------------------------------------------
	 *	Document ready
	/* ---------------------------------------------------------------------------*/
	$(document).ready(function(){

		/*
		* EXAMPLE CALLBACK
		*/
		$listener.on('ajaxCallback', function(e){
			alert(e.jsonData);
		});

		/*
		*	EXAMPLE AJAX GET - ajaxGet(<url>, <listener that contains callback>, <callback name>, <data object to send>);
		*/
		ajaxPro('GET', ajaxUrl, $listener, {'example': 'data to send'}, 'ajaxCallback');

		/*
		*	... And exactly the same if you want to use the POST function
		*/
		ajaxPro('POST', ajaxUrl, $listener, {'example': 'data to send'}, 'ajaxCallback');

		/*
		*	.. And if you want an error callback
		*/
		$listener.on('ajaxError', function(e){
			alert('Error');
		});
		ajaxPro('POST', ajaxUrl, $listener, {'example': 'data to send'}, 'ajaxCallback', 'ajaxError');

	});

})(jQuery);