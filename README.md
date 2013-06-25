AjaxPro.js
==================

Ajax POST and GET functions with simple callback methods

Usage
==================
Include jQuery 1.7+ and jquery.ajaxpro.min.js in your layout and use GET/POST functions like so:
```javascript
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
```
