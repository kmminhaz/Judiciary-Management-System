jQuery( function () {

	jQuery( 'body' ).prepend( '<div class="scroll-top-wrap">' +
		'<div class="scroll-top-inner ' +
		(scrollTopParams.scheme == 'light' ? ' lightScheme ' : '') +
		(scrollTopParams.size == 'small' ? ' small ' : '') +
		' "><span class="' +
		(scrollTopParams.scheme == 'light' ? ' lightScheme ' : '') +
		(scrollTopParams.size == 'small' ? ' small ' : '') +' ">&#708;</span></div></div>');

	var scrollButtonEl = jQuery( '.scroll-top-inner' );

	scrollButtonEl.hide();

	jQuery( window ).scroll( function () {
		if ( jQuery( window ).scrollTop() < 10 ) {
			jQuery( '.scroll-top-inner' ).fadeOut();
		} else {
			jQuery( '.scroll-top-inner' ).fadeIn();
		}
	} );

	scrollButtonEl.click( function () {
		jQuery( "html, body" ).animate( { scrollTop: 0 }, 300 );
		return false;
	} );

} );
