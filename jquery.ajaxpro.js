/* =========================================================
*	AjaxPro.js 1.0
*	Author: Alexander Bech / www.alexanderbech.com
*	http://github.com/AlexanderBech/AjaxPro.js
* ========================================================== */
(function ($) {

	var $listener 	= $({}),
		ajaxUrl 	= {};

	/*
	*	AJAX GET
	*/
	window.ajaxGet = function(url, $target, callBack, sendData){
		var callBack = callBack || 'ajaxCallback';
		$.ajax({
			type: "GET",
			url: url,
			data: sendData,
			dataType: 'json'
		})
		.done(function(data, textStatus, jqXHR){
			if(data != null){
				$target.trigger({ type:callBack, 'jsonData':data });
				$target.off(callBack);
			} else {
				alert(data);
			}
		})
		.fail(function(jqXHR, textStatus, errorThrown){ alert(errorThrown); });
		//.always(function(){ alert('always'); });
	}

	/*
	*	AJAX POST
	*/
	window.ajaxPost = function(url, $target, callBack, sendData){
		var callBack = callBack || 'ajaxCallback';
		$.ajax({
			type: "POST",
			url: url,
			data: sendData,
			dataType: 'json'
		})
		.done(function(data, textStatus, jqXHR){
			if(data != null){
				$target.trigger({ type:callBack, 'jsonData':data });
				$target.off(callBack);
			} else {
				alert(data);
			}
		})
		.fail(function(jqXHR, textStatus, errorThrown){ alert(errorThrown); });
		//.always(function(){ alert('always'); });
	}

	/* ----------------------------------------------------------------------------
	 *	Document ready
	/* ---------------------------------------------------------------------------*/
	$(document).ready(function(){

		/*
		* EXAMPLE CALLBACK
		*/
		$listener.on('getCallback', function(e){
			alert(e.jsonData);
		});

		/*
		*	EXAMPLE AJAX GET - ajaxGet(<url>, <listener that contains callback>, <callback name>, <data object to send>);
		*/
		ajaxGet(ajaxUrl, $listener, "getCallback", {'example': 'data to send'});

		/*
		*	... And exactly the same if you want to use the POST function
		*/
		$listener.on('postCallback', function(e){
			alert(e.jsonData);
		});
		ajaxPost(ajaxUrl, $listener, "postCallback", {'example': 'data to send'});

	});

})(jQuery);