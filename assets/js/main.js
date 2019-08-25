/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
  var firebaseConfig = {
    apiKey: "AIzaSyBZWlfdtbjcQhYLIPJw_JAlVY9oKa7BWiw",
    authDomain: "teamwalk-b716d.firebaseapp.com",
    databaseURL: "https://teamwalk-b716d.firebaseio.com",
    projectId: "teamwalk-b716d",
    storageBucket: "teamwalk-b716d.appspot.com",
    messagingSenderId: "340764342135",
    appId: "1:340764342135:web:e0a78cf7bc2e6d98"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

if (Object.keys(localStorage).length == 0) {
	    if(window.location.pathname != "/Log%20in.html"){
        alert('No one is logged in');
        setTimeout(function(){ window.location.href="Log in.html"; }, 300000);
}
}
function callJavascriptFunction(iter){
    key=localStorage.getItem("id"+iter)
    var getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    var ParticipantsUpdate=document.getElementById("name"+iter).textContent+","+getUserInfo.fname
    document.getElementById("name"+iter).innerHTML=ParticipantsUpdate
}
function logOut(){
    localStorage.clear()
    window.location.href="index.html"
}
function getInfo()
    {
            var i=0;
            db.collection("booking").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            var bookObj=doc.data().formObj
            localStorage.setItem( 'id'+i, doc.id);
            var bookingList = document.createElement("div");
            var idReq="bookingNo"+i
            bookingList.setAttribute("id", idReq)
            //var reqDiv=string(reqDiv)
            document.getElementById("bookDiv").appendChild(bookingList);
 //         bookingList.setAttribute("onclick", "viewLocation("+i+")")
            var nametoShow = document.createElement('h2')
            nametoShow.textContent = bookObj.Name;
            nametoShow.setAttribute("id","name"+i)
            document.getElementById(idReq).appendChild(nametoShow);
            var timeToShow = document.createElement('h3')
            timeToShow.textContent = bookObj.time;
            document.getElementById(idReq).appendChild(timeToShow);
            var locationToShow = document.createElement('h3')
            locationToShow.textContent = bookObj.location;
            document.getElementById(idReq).appendChild(locationToShow);
            var degreeToShow = document.createElement('h3')
            degreeToShow.textContent = bookObj.Degree;
            document.getElementById(idReq).appendChild(degreeToShow);
            var detailsToShow = document.createElement('h3')
            detailsToShow.textContent = bookObj.details;
            document.getElementById(idReq).appendChild(detailsToShow);
            var join = document.createElement("BUTTON");
            join.setAttribute("id",i);
            join.innerHTML="Join";
            document.getElementById(idReq).appendChild(join);
            document.getElementById(i).setAttribute( "onClick", "javascript: callJavascriptFunction("+i+")" );
            i++
            var hr = document.createElement("hr")
            document.getElementById(idReq).appendChild(hr);
    });
});
}

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);

//Classes



//Code needed to get info from the online form

function getFormObj() {
    var formObj = {};
    var inputs = $('#iniForm').serializeArray();
    $.each(inputs, function (i, input) {
        formObj[input.name] = input.value;
    });
    var finObj = JSON.stringify(formObj, null, 4); // (Optional) beautiful indented output.
    var db = firebase.firestore();
    db.collection("users").add({
    formObj
})
setTimeout(function(){ window.location.href="HomePageLogin.html"; }, 3000)
}

function getMeatObj() {
    var formObj = {};
    var inputs = $('#meetObj').serializeArray();
    $.each(inputs, function (i, input) {
        formObj[input.name] = input.value;
    });
    var getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    formObj['Name']= getUserInfo.fname
    formObj['Degree']= getUserInfo.deg
    formObj['hLocation']=getUserInfo.address
    formObj['Participants']= getUserInfo.fname
    db.collection("booking").add({
    formObj
})
    setTimeout(function(){ window.location.href="HomePageLogin.html"; }, 3000)
  //  window.location.href="HomePageLogin.html"
}

function verification(){
    db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var userObj=doc.data().formObj
        var user=userObj.uName
        var pswd=userObj.inPassword
        var x = document.getElementById("Log In");
        if (user==x.elements[0].value && pswd==x.elements[1].value) {
            console.log("Login Successfull");
            localStorage.setItem( 'userInfo',JSON.stringify(userObj));
            window.location.href="HomePageLogin.html"
        } else {  
            console.log("Invalid username or password")
        } 
    });
});
}


  

  function addDomMarker(map,name,coords) {
	var outerElement = document.createElement('div'),
		innerElement = document.createElement('div');
  
	outerElement.style.userSelect = 'none';
	outerElement.style.webkitUserSelect = 'none';
	outerElement.style.msUserSelect = 'none';
	outerElement.style.mozUserSelect = 'none';
	outerElement.style.cursor = 'default';
  
	innerElement.style.color = 'green';
	innerElement.style.backgroundColor = 'white';
	innerElement.style.border = '2px solid black';
	innerElement.style.font = 'normal 12px arial';
	innerElement.style.lineHeight = '12px'
  
	innerElement.style.paddingTop = '2px';
	innerElement.style.paddingLeft = '4px';
	innerElement.style.width = '20px';
	innerElement.style.height = '20px';
  
	// add negative margin to inner element
	// to move the anchor to center of the div
	innerElement.style.marginTop = '-10px';
	innerElement.style.marginLeft = '-10px';
  
	outerElement.appendChild(innerElement);
  
	// Add text to the DOM element
	innerElement.innerHTML = name;
  
	function changeOpacity(evt) {
	  evt.target.style.opacity = 0.6;
	};
  
	function changeOpacityToOne(evt) {
	  evt.target.style.opacity = 1;
	};
  
	//create dom icon and add/remove opacity listeners
	var domIcon = new H.map.DomIcon(outerElement, {
	  // the function is called every time marker enters the viewport
	  onAttach: function(clonedElement, domIcon, domMarker) {
		clonedElement.addEventListener('mouseover', changeOpacity);
		clonedElement.addEventListener('mouseout', changeOpacityToOne);
	  },
	  // the function is called every time marker leaves the viewport
	  onDetach: function(clonedElement, domIcon, domMarker) {
		clonedElement.removeEventListener('mouseover', changeOpacity);
		clonedElement.removeEventListener('mouseout', changeOpacityToOne);
	  }
	});
  

	var bearsMarker = new H.map.DomMarker(coords, {
	  icon: domIcon
	});
	map.addObject(bearsMarker);
  }
  
var coords1={lat:-37.9117629, lng:145.1329382};
var coords2= {lat:-37.913496,lng:145.124203};
var coords3={lat:-37.914269, lng:145.132127};
var coords4={lat:-37.909838, lng:145.132028};
var coords5={lat:-37.911578, lng:145.135775};
  var mapContainer = document.getElementById('mapContainer'),
  routeInstructionsContainer = document.getElementById('panel');

  var platform = new H.service.Platform({
	apikey: 'f44km04S_HNCAVVJGcM8G0eXJ98KqYVbF8flJPzik3g'
  });
  var defaultLayers = platform.createDefaultLayers();
  

  var map = new H.Map(document.getElementById('mapContainer'),
	defaultLayers.vector.normal.map, {
		zoom: 16,
		center: coords1,
	pixelRatio: window.devicePixelRatio || 1
  });

  window.addEventListener('resize', () => map.getViewPort().resize());
  

  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

addDomMarker(map,'A',coords1);
addDomMarker(map,'B',coords3);
addDomMarker(map,'C',coords4);
addDomMarker(map,'D',coords5);

