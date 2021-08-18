jQuery(document).ready(function($){
	if($('.reviews-slider').length){
		$('.reviews-slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots:true,
			arrows:false,
			responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 680,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
		});

	}
	if($('.human').length){
		if($(window).width() < 480){
			$('.human').wrapAll('<div class="human-slider"></div>');
			$('.human-slider').slick({
				dots: true,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				centerMode: true,
				variableWidth: true,
			});
		}
	}
	if($('.consultant-slider').length){
		$('.consultant-slider').slick({
			dots:true,
			arrows:false,
			speed: 500,
			fade: true,
			cssEase: 'linear',
			responsive: [
			{
			  breakpoint: 992,
				settings: {
					fade: false,
				}
			}]
		});
	}
	if($('body:not(.thank-page) #map, body:not(.contact-us) #map').length == 1){
		var mapEl = $('#map'),
			elLat = mapEl.data('lat'),
			elLng = mapEl.data('lng');
		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: elLat, lng: elLng},
			zoom: 8
		});
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(elLat, elLng),
			map: map,
			icon:'/gsklaw/wp-content/themes/gsklaw/assets/icons/marker.svg'
		});
		console.log(marker)
	}

	$('.burger-menu').click(function(){
		$(this).toggleClass('close');
		$('body').toggleClass('modal-open');
	});
	if($(window).width() < 768){
		if($('.practice .nav-tabs').length){
			$('.practice .nav-tabs').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 1,
				centerMode: true,
				variableWidth: true,
				focusOnSelect:true
			});
			$('.practice .nav-tabs').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
					$('.practice .nav-tabs li').removeClass('active');
					console.log($(this).parent().addClass('active'));
				})
			});
		}
	}else{

	}
	$('header .menu li').each(function(){
		if($(this).hasClass('menu-item-has-children')){
			$(this).children('a').after('<i class="icon-chevron"></i>');
		}
	});
	if($(window).width() < 1025){
		$('header .icon-chevron').click(function(){
			console.log('click');
			if($(this).parent().hasClass('open')){
				$(this).parent().removeClass('open');
				$(this).next().slideUp();
			}else{
				$(this).parent().addClass('open');
				$(this).next().slideDown();
			}
		});
	}
	if($('#map-contacts').length){
		var mapEl = $('#map-contacts'),
			elLat = mapEl.data('lat'),
			elLng = mapEl.data('lng'),
			elTitle = mapEl.data('title'),
			elLink = mapEl.data('google-link'),
			elAddress = mapEl.data('address'),
			elPhone = mapEl.data('phone'),
			elFax = mapEl.data('fax'),
			elemil = mapEl.data('email'),
			officeContent = '<div class="popup-office">' +
				'<ul>' +
					'<li>' + '<h5>'+elTitle+'</h5><a target="_blank" href="'+elLink+'">'+ elAddress + '</a>' + '</li>' +
					'<li>' + 'PHONE: <a href="tel:'+elPhone+'">'+ elPhone + '</a>' + '</li>' +
					'<li>' + 'FAX: <a href="fax:'+elFax+'">'+ elFax + '</a>' + '</li>' +
					'<li>' + 'EMAIL: <a href="mailto:'+elemil+'">'+ elemil + '</a>' + '</li>' +
				'</ul>' + '</div>';
			if($(window).width() < 767){
				var elCenterLat = mapEl.data('lat'),
					elCenterLng = mapEl.data('lng');
			}else{
				var elCenterLat = mapEl.data('lat') + 2,
					elCenterLng = mapEl.data('lng') - 1;
			}
		console.log(elLat, elLng)
		console.log(elCenterLat, elCenterLng)
		var mapOptions = {
			zoom: 9,

			center: new google.maps.LatLng(elLat, elLng ),
			styles: [{
				"featureType": "landscape.man_made",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f7f1df"
				}]
			}, {
				"featureType": "landscape.natural",
				"elementType": "geometry",
				"stylers": [{
					"color": "#d0e3b4"
				}]
			}, {
				"featureType": "landscape.natural.terrain",
				"elementType": "geometry",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "poi",
				"elementType": "labels",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "poi.business",
				"elementType": "all",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "poi.medical",
				"elementType": "geometry",
				"stylers": [{
					"color": "#fbd3da"
				}]
			}, {
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [{
					"color": "#bde6ab"
				}]
			}, {
				"featureType": "road",
				"elementType": "geometry.stroke",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "road",
				"elementType": "labels",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#ffe15f"
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#efd151"
				}]
			}, {
				"featureType": "road.arterial",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#ffffff"
				}]
			}, {
				"featureType": "road.local",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "black"
				}]
			}, {
				"featureType": "transit.station.airport",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#cfb2db"
				}]
			}, {
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
					"color": "#a2daf2"
				}]
			}]
		};
		var infowindow = new google.maps.InfoWindow({
			content: '<div class="map-popup">' + officeContent + '</div>',
			maxWidth: 270
		});
		var mapElement = document.getElementById('map-contacts');
		var map = new google.maps.Map(mapElement, mapOptions);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(elLat, elLng),
			map: map,
			icon:'/gsklaw/wp-content/themes/gsklaw/assets/icons/marker.svg'
		});
		infowindow.open(map,marker,officeContent);
		 google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

	}

	$(window).on('resize', function () {

	})

});
