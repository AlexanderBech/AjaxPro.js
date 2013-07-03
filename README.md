AjaxPro.js
==================

AjaxPro function with simple callback methods

Usage
==================

Include jQuery 1.7+ and jquery.ajaxpro.js in your layout and use either GET or POST functions like so:

```javascript
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
```
