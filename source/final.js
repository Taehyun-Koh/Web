//when click movie_list on side bar.
  $('#li_movie').on('click', function(event) {
    $('.moviearea').show();
    $('#contactdiv').hide();
    $('#map').css("display", "none");
    $('#mainsearch').hide();
    $('#searchBtn').hide();
    $('#ticketingarea').hide();
  })

//when click ticketing on side bar.
  $('#li_ticket').on('click', function(event) {
    $('.moviearea').hide();
    $('#mainsearch').hide();
    $('#contactdiv').hide();
    $('#searchBtn').hide();
    $('#ticketingarea').show();
    goticket();
  })

  //ticketing Start
  function goticket(){
    const container = document.querySelector('.container');
    const seats = document.querySelectorAll('.row .seat:not(.occupied)');
    const count = document.getElementById('count');
    const price = document.getElementById('price');

    const movieSelect = document.getElementById('movie');
    let ticketPrice = +movieSelect.value; //ticketprice

    const populateUI = () => {
      const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

      if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
          if (selectedSeats.indexOf(index) > -1) {
            seat.classList.add('selected');
          }
        });
      }

      const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
      const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');

      if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
      }

      if (selectedMoviePrice !== null) {
        count.innerText = selectedSeats.length;
        price.innerText = selectedSeats.length * +selectedMoviePrice;
      }
    };

    populateUI();

    selectedMovie = (movieIndex, moviePrice) => {
      localStorage.setItem('selectedMovieIndex', movieIndex);
      localStorage.setItem('selectedMoviePrice', moviePrice);
    };

    const updateSelectedSeatsCount = () => {
      const selectedSeats = document.querySelectorAll('.row .selected');

      const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

      localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

      const selectedSeatsCount = selectedSeats.length;

      count.innerText = selectedSeatsCount;
      price.innerText = selectedSeatsCount * ticketPrice;
    };

    // Seat select event
    container.addEventListener('click', e => {
      if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
      ) {
        e.target.classList.toggle('selected');

        updateSelectedSeatsCount();
      }
    });

    // Movie select event
    movieSelect.addEventListener('change', e => {
      ticketPrice = +e.target.value;
      selectedMovie(e.target.selectedIndex, e.target.value);

      updateSelectedSeatsCount();
    });
  }

  //ticketing end
//when click contact us on side bar.
  $('#contactus').on('click', function(event) {
    $('.moviearea').hide();
    $('#contactdiv').css("display", "flex");
    $('#map').css("display", "none");
    $('#mainsearch').hide();
    $('#searchBtn').hide();
    $('#ticketingarea').hide();
  })

  //In contact us part
  function sendus() {
    event.preventDefault();

    //get variable from input area
    var $_sendname = document.getElementById('sendname').value;
    var $_sendemail = document.getElementById('sendemail').value;
    var $_sendcontent = document.getElementById('sendcontent').value;

    //add data to localStorage.
    localStorage.setItem('name', $_sendname);
    localStorage.setItem('email', $_sendemail);
    localStorage.setItem('content', $_sendcontent);

    alert('Success!');
    $('#sendname').val('');
    $('#sendemail').val('');
    $('#sendcontent').val('');

  }


//when click mpas on side bar.
  $('#li_maps').on('click', function(event) {
    $('.moviearea').hide();
    $('#contactdiv').hide();
    $('#map').css("display", "block");
    $('#mainsearch').show();
    $('#searchBtn').show();
    $('#ticketingarea').hide();

    setloc();
  })
  function setloc() {

    var mapContainer = document.getElementById('map'), // div appear in map
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // center cordinate of map
        level: 5 // level of map scale
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // generate map

    if (navigator.geolocation) {

      // get current location
      navigator.geolocation.getCurrentPosition(function(position) {

        var lat = position.coords.latitude, // latitude
          lon = position.coords.longitude; // longitude

        var locPosition = new kakao.maps.LatLng(lat, lon),
          message = '<div style="padding:5px;">Are you here?!</div>';
        displayMarker(locPosition, message);

      });

    } else {

      var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        message = 'Cannot use geolocation'

      displayMarker(locPosition, message);
    }

    // mark marker and info window on the map.
    function displayMarker(locPosition, message) {

      // generate marker
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition
      });

      var iwContent = message, // content appear in info window
        iwRemoveable = true;

      // generate info window
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable
      });

      infowindow.open(map, marker);

      map.setCenter(locPosition);

    }
  }

  //get data from search data
  function getsearch() {

    var mainsearch = $('#mainsearch').val();
    console.log(mainsearch);

    var infowindow = new kakao.maps.InfoWindow({
      zIndex: 1
    });
    var mapContainer = document.getElementById('map'),
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // center of map
        level: 5 // scale of map
      };
    var map = new kakao.maps.Map(mapContainer, mapOption);
    var ps = new kakao.maps.services.Places();

    // search with keyword
    ps.keywordSearch(mainsearch, placesSearchCB);

    // function when keyword searching is completed.
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {

        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }


    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', //image of marker
      imageSize = new kakao.maps.Size(64, 69),
      imageOption = {
        offset: new kakao.maps.Point(27, 69)
      };
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

    function displayMarker(place) {


      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x)
      });

      // click event on marker
      kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
      });
    }

  }
