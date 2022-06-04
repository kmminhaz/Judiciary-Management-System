/* 
 * Function for Mega Main Menu.
 */
(function( $ ){ 
	jQuery(document).ready(function(){

		/* 
		 * Unbinded all previous JS actions with menu.
		 */
//		jQuery( '#mega_main_menu, #mega_main_menu *' ).unbind();

		/* 
		 * INIT
		 */
		mmm_reversal_z_index();
		mmm_sticky_menu();
		mmm_fullwidth_menu();
		mmm_keep_open();
		mmm_height_of_tabs_dropdown();
		mmm_pushing_content();
		mmm_mobile_double_tap_to_go();
		mmm_mobile_toggle_menu();
		mmm_smooth_scroll_to_anchor();

		/* 
		 * EVENTS
		 */
		jQuery(window).on( 'resize orientationchange', function(){
			mmm_sticky_menu();
			mmm_fullwidth_menu();
//			mmm_keep_open();
			mmm_height_of_tabs_dropdown();
			mmm_pushing_content();
			mmm_smooth_scroll_to_anchor();
//			mmm_mobile_toggle_menu();
//			mmm_mobile_double_tap_to_go();
		});


		/* 
		 * Reversal z-index.
		 */
		function mmm_reversal_z_index () {
			var z_index = 1000;
			function_selector = '.mega_main_menu';
			jQuery( function_selector ).unbind();
			jQuery( function_selector ).each(function(index,element){
				z_index = z_index - 10;
				jQuery( element ).css({
					'z-index' : z_index
				});
			});
		}

		/* 
		 * Mobile toggle menu
		 */
		function mmm_mobile_toggle_menu () {
			function_selector = '.mobile_toggle';
			jQuery( function_selector ).unbind();
			jQuery( '.mobile_menu_active' ).removeClass( 'mobile_menu_active' );
			jQuery( function_selector ).on( 'click', function() {
				if ( jQuery( this ).parent().hasClass( 'mobile_menu_active' ) ) {
					jQuery( this ).parent().removeClass( 'mobile_menu_active' );
					jQuery( '#mega_main_menu .keep_open' ).removeClass('keep_open');
				} else {					
					jQuery( this ).parent().addClass( 'mobile_menu_active' );
				}
			});
		}

		/* 
		 * Mobile Double tap to go
		 */
		function mmm_mobile_double_tap_to_go () {
			function_selector = '#mega_main_menu li:has(.mega_dropdown) > .item_link, #mega_main_menu li:has(.post_details) > .processed_image';
			jQuery( function_selector ).unbind();
			if( /iphone|ipad|ipod|android|webos|blackberry|iemobile|opera mini/i.test( navigator.userAgent.toLowerCase() ) ) 
			{
				var clicked_item = false;
				jQuery( function_selector ).on( 'click', function( index )
				{
					if ( clicked_item != this) {
						index.preventDefault();
						if ( jQuery( this ).parent().parent().parent().hasClass('keep_open') ) {

						} else {
							jQuery( '#mega_main_menu .keep_open' ).removeClass('keep_open');
						}
						jQuery( this ).parent().addClass('keep_open');
						clicked_item = this;
					}
				});
			}
		}

		/* 
		 * Sticky menu
		 */
		function mmm_sticky_menu () {
			function_selector = '#mega_main_menu > .menu_holder';
			jQuery( function_selector ).unbind();
			jQuery( function_selector ).each(function(index,element){
				var stickyoffset = [];
				var menu_inner_width = [];
				var menu_inner = [];
				var style_attr = [];
				menu_inner[ index ] = jQuery( element ).find( '.menu_inner' );
				stickyoffset[ index ] = jQuery( element ).data( 'stickyoffset' ) * 1;
				if ( jQuery( element ).hasClass( 'coercive_styles-enable' ) ) {
					rules_priority = ' !important';
				} else {
					rules_priority = '';
				}

				if ( jQuery( element ).attr( 'data-sticky' ) == '1' && stickyoffset[ index ] == 0 ) {
					menu_inner_width[ index ] = menu_inner[ index ].parents( '.mega_main_menu' ).width();
					menu_inner[ index ].attr( 'style' , 'width:' + menu_inner_width[ index ] + 'px;' );
					jQuery( element ).addClass( 'sticky_container' );
				} else {
					jQuery(window).on( 'scroll', function(){
						if ( jQuery( element ).attr( 'data-sticky' ) == '1' ) {
							scrollpath = jQuery(window).scrollTop();
							if ( scrollpath > stickyoffset[ index ] ) {
								menu_inner_width[ index ] = menu_inner[ index ].parents( '.mega_main_menu' ).width();
								jQuery( element ).find( '.menu_inner' ).attr( 'style' , 'width:' + menu_inner_width[ index ] + 'px;' );
								jQuery( element ).find( '.mmm_fullwidth_container' ).attr( 'style' , 'left: 0px' + rules_priority + ';' );
								if ( !jQuery( element ).hasClass( 'sticky_container' ) ) {
									jQuery( element ).addClass( 'sticky_container' );
								}
							} else {
								mmm_fullwidth_menu();
								jQuery( element ).removeClass( 'sticky_container' );
								style_attr[ index ] = jQuery( menu_inner[ index ] ).attr( 'style' );
								if ( typeof style_attr[ index ] !== 'undefined' && style_attr[ index ] !== false ) {
									menu_inner[ index ].removeAttr( 'style' );
								}
							}
						} else {
							jQuery( element ).removeClass( 'sticky_container' );
						}
					});
				}
			});
		}

		/* 
		 * Fullwidth menu container
		 */
		function mmm_fullwidth_menu () {
			function_selector = '.mega_main_menu.direction-horizontal.fullwidth-enable';
			jQuery( function_selector ).unbind();
			body_width = jQuery( 'body' ).width();
			jQuery( function_selector ).each( function( index, element ) {
				offset_left = jQuery( element ).offset().left;
				// rules_priority
				if ( jQuery( element ).hasClass( 'coercive_styles-enable' ) ) {
					rules_priority = ' !important';
				} else {
					rules_priority = '';
				}
				jQuery( element ).find( '.mmm_fullwidth_container' ).attr( 'style' , 'width:' + body_width + 'px' + rules_priority + ';left: -' + offset_left + 'px' + rules_priority + ';right:auto' + rules_priority + ';' );
			});
		}

		/*
		 * Height of .tabs_dropdown
		 */
		function mmm_height_of_tabs_dropdown () {
			function_selector = '.mega_main_menu .tabs_dropdown > .mega_dropdown > li';
			jQuery( function_selector ).unbind();
			// to open first tab when tabs are visible
			jQuery( '.mega_main_menu .tabs_dropdown' ).on( 'hover mouseleave mouseenter', function( event ){
				my_el = jQuery( this ).find( '.mega_dropdown > li' ).first();
				jQuery( my_el ).parent().css({
					"min-height": jQuery( my_el ).find( '.mega_dropdown' ).outerHeight( true )
				});
				jQuery( my_el ).find( ' > .mega_dropdown' ).css({
					"min-height": jQuery( my_el ).closest( '.mega_dropdown' ).outerHeight( true )
				});
				jQuery( my_el ).addClass( 'keep_open' );
			});
			// For Hover
			jQuery( '.dropdowns_trigger-hover' + function_selector ).on( 'hover mouseenter transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function( event ){
				jQuery( this ).parent().css({
					"min-height": jQuery( this ).find( '.mega_dropdown' ).outerHeight( true )
				});
				jQuery( this ).find( ' > .mega_dropdown' ).css({
					"min-height": jQuery( this ).closest( '.mega_dropdown' ).outerHeight( true )
				});
			});
			jQuery( '.dropdowns_trigger-hover' + function_selector ).on( 'mouseleave ', function( event ){
				jQuery( this ).parent().css({
					"min-height": '0px'
				});
				jQuery( this ).find( ' > .mega_dropdown' ).css({
					"min-height": '0px'
				});
				jQuery( this ).removeClass( 'keep_open' );
			});
			// For Click
			jQuery( '.dropdowns_trigger-click' + function_selector ).on( 'click', function(){
				jQuery( this ).parent().parent().find( '.mega_dropdown' ).css({
					"min-height": '0px'
				});
				jQuery( this ).parent().css({
					"min-height": jQuery( this ).find(' > .mega_dropdown').outerHeight( true )
				});
			});
		}

		/* 
		 * Pushing the content when dropdowns visible
		 */
		function mmm_pushing_content () {
			function_selector = '.mega_main_menu.direction-horizontal.pushing_content-enable';
			jQuery( function_selector ).unbind();
			jQuery( function_selector ).each( function( index, element ) {
				// rules_priority
				if ( jQuery( element ).hasClass( 'coercive_styles-enable' ) ) {
					rules_priority = ' !important';
				} else {
					rules_priority = '';
				}
				menu_holder_height = jQuery( element ).find( '.menu_holder' ).outerHeight( true );
				click_item = false;
				if ( jQuery( element ).hasClass( 'dropdowns_trigger-click' ) ) {
					// dropdowns_trigger
					dropdowns_trigger = 'click';
					// calculations
					if ( jQuery( '.mega_main_menu .nav_logo.mobile_menu_active' ).length ) {
					} else {
						jQuery( 'body' ).on( dropdowns_trigger, function ( body_el ) {
								menu_item_class = jQuery( body_el.target ).closest( '.menu-item' ).attr( 'class' );
								if ( typeof jQuery( body_el.target ).parents( '.menu-item' ).attr( 'class' ) != 'undefined' ) {
									jQuery( element ).css({ height: menu_holder_height + jQuery( this ).find( '.mega_main_menu_ul > li.keep_open > .mega_dropdown' ).outerHeight( true ) + rules_priority });
									if ( click_item == menu_item_class ) {
										jQuery( element ).css({ height: menu_holder_height });
										click_item = false;
									} else {
										click_item = jQuery( body_el.target ).closest( '.menu-item' ).attr( 'class' );
									}
								} else {
									jQuery( element ).css({ height: menu_holder_height });
									click_item = false;
								}
						});
					}
				} else {
					// dropdowns_trigger
					dropdowns_trigger = 'hover mouseleave';
					// calculations
					if ( jQuery( '.mega_main_menu .nav_logo.mobile_menu_active' ).length ) {
					} else {
						jQuery( element ).find( 'li' ).on( dropdowns_trigger, function ( body_el ) {
								jQuery( element ).delay( 200 ).css({ height: menu_holder_height + jQuery( element ).find( '.mega_main_menu_ul > li:hover > .mega_dropdown' ).outerHeight( true ) + rules_priority });
						});
					}
				}
			});
		}

		/* 
		 * Smooth scroll to anchor link
		 */
		function mmm_smooth_scroll_to_anchor () {
			function_selector = '#mega_main_menu a[href*="#"]:not([href="#"])';
//			jQuery( function_selector ).unbind();
			jQuery( function_selector ).on( 'click', function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = jQuery(this.hash);
					target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +'], [id=' + this.hash.slice(1) +']');
					if (target.length) {
						jQuery( '#mega_main_menu .current-menu-item' ).removeClass( 'current-menu-item' );
						jQuery( this ).parent().addClass( 'current-menu-item' );
						jQuery('html,body').animate({
							scrollTop: target.offset().top - 90
						}, 600);
						jQuery( '#mega_main_menu .mobile_menu_active' ).removeClass( 'mobile_menu_active' );
//						return false;
					}
				}
			});
		};

		/* 
		 * Keep dropdown open if some inner element has a :focus.
		 */
		function mmm_keep_open () {
/*
			function_selector = '#mega_main_menu .menu-item *';
			jQuery( function_selector ).unbind();
			jQuery( function_selector ).on( 'focus', function( index ){
				jQuery( this ).parents( '.menu-item, .post_item' ).addClass( 'keep_open' );
			})
			jQuery( function_selector ).on( 'hover', function( index ){
				jQuery( this ).parents( '.menu-item, .post_item' ).removeClass( 'keep_open' );
			})
			jQuery( function_selector ).on( 'blur', function( index ){
				jQuery( this ).parents( '.menu-item, .post_item' ).removeClass( 'keep_open' );
			})
*/
			click_item_2 = false;
/*
			if( true != /iphone|ipad|ipod|android|webos|blackberry|iemobile|opera mini/i.test( navigator.userAgent.toLowerCase() ) ) 
			{
			}
*/
			jQuery( 'body' ).on( 'click', function ( body_el ) {
				menu_item_class = jQuery( body_el.target ).closest( '.menu-item' ).attr( 'class' );
				if ( ( click_item_2 != menu_item_class ) && ( typeof jQuery( body_el.target ).closest( '#mega_main_menu.dropdowns_trigger-click .menu-item:has(.mega_dropdown)' ).attr( 'class' ) != 'undefined' )/* && ( typeof jQuery( body_el.target ).closest( '#mega_main_menu.dropdowns_trigger-click .menu-item:not(.multicolumn_dropdown)' ).attr( 'class' ) == 'undefined' )*/ ) {
					if ( jQuery( body_el.target ).closest( '.menu-item' ).find( '.mega_dropdown' ).length ) {
						body_el.preventDefault();
					}
					jQuery( '#mega_main_menu .keep_open' ).removeClass( 'keep_open' );
					jQuery( body_el.target ).parents( '.menu-item' ).addClass( 'keep_open' );
					click_item_2 = jQuery( body_el.target ).closest( '.menu-item' ).attr( 'class' );
				} else if ( jQuery( body_el.target ).is( '#mega_main_menu .mega_dropdown form *:focus' ) ) {
					jQuery( '#mega_main_menu .keep_open' ).removeClass( 'keep_open' );
					jQuery( body_el.target ).parents( '.menu-item' ).addClass( 'keep_open' );
				} else if ( ( click_item_2 == menu_item_class ) ) {
					jQuery( body_el.target ).closest( '.menu-item' ).removeClass( 'keep_open' );
					click_item_2 = false;
				} else {
					jQuery( '.menu-item' ).removeClass( 'keep_open' );
					click_item_2 = false;
				}
			});
		}


	});
})(jQuery);