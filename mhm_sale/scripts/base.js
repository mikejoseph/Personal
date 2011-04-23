(function($) {

	$(document).addEvent('domready', function() {
		
		
		// handles placeholders in browser that don't natively support
		if( !Modernizr.input.placeholder ) {
			$$('form input[type="text"], form input[type="email"], form input[type="phone"]').each(function(el) {
				new OverText(el, {
					textOverride: el.get('placeholder')
				});
			});
		}
		
		new Form.Validator.Inline($$('form').pop(), {
			showError: function(msg) {
				msg.getParent().getElements('aside').setStyle('color', 'red');
			}
		});

		var calcTotal = function() {
			var tb = $$('form table input[name="tables"]').pop()
				.get('value').toInt();
			var li = $$('form table input[name="largeitems"]').pop()
				.get('value').toInt();
				
			if( !tb ) {
				tb = 0;
			}
			if( !li ) {
				li = 0;
			}
			$('container_total').set('text', ((tb * 20) + li));
		};
		calcTotal();
		$$('form table input').addEvents({
			'blur': calcTotal,
			'focus': calcTotal
		});
	
	});

})(document.id);