var map;
var bounds;
var largeInfowindow;
var marker;
// Create a new blank array for all the listing markers.
//errorhandling for google maps
        function errorHandling() {
            alert("Issue loading google maps");
            $('#map-canvas').html("Please try again later");
        }

function initMap() {
    largeInfowindow = new google.maps.InfoWindow();
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {
            lat: 18.8928676,
            lng: 72.7758729
        },
        zoom: 13,
        scrollwheel: true
    });


    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            map: map, // Create a marker per location, and put into markers array.
            title: locations[i].title,
            position: locations[i].location, // Get the position from the location array.
            address: locations[i].address,
            phone: locations[i].phone,
            url: locations[i].url,
            animation: google.maps.Animation.BOUNCE,
            draggable: false
        });




        locations[i].marker = marker;
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function() {
            animateMarker(this);
            populateInfoWindow(this, largeInfowindow);
        });
    }
    //specifing lat lng bounds 
    bounds = new google.maps.LatLngBounds();
    //Fits the markers as window resizes
    google.maps.event.addDomListener(window, 'load', displayMarkerList);
    google.maps.event.addDomListener(window, 'resize', displayMarkerList);


    //Displays markers on the listed location
    function displayMarkerList() {

        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
            bounds.extend(markers[i].position);
        }
        map.fitBounds(bounds);
    }
     
}

var locations = [ //storing the detailed info of all the locations whose markers are to be placed
    //https://classroom.udacity.com/nanodegrees/nd001/parts/00113454014/modules/271165859175461/lessons/3406489055/concepts/34648186930923
    {
        title: 'Maxus mall',
        location: {
            lat: 19.2960876,
            lng: 72.8485584
        },
        address: '150 Feet Road, Maxus Mall Road, Near Railway Flyover, Maxus Mall, Opposite Salasar Bridge Bhoomi, Bhayandar West, Wadi Bandar, Mazgaon, Mumbai, Maharashtra 401101, India',
        phone: "022 2815 2221",
        url: 'www.maxus.com/',
        mall: true,
        listVisible: ko.observable(true)
    },
    {
        title: 'High Street Phoenix',
        location: {
            lat: 18.9940439,
            lng: 72.8250901
        },
        address: '462, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013, India',
        phone: "022 4333 9994",
        url: 'www.highstreetphoenix.com/',
        mall: true,
        listVisible: ko.observable(true)
    },
    {
        title: 'Phoenix Market City',
        location: {
            lat: 19.0866536,
            lng: 72.8889137
        },
        address: 'Lal Bahadur Shastri Marg, Kurla West, Mumbai, Maharashtra 400070, India',
        phone: "022 6180 1100",
        url: 'https://www.phoenixmarketcity.com/mumbai',
        mall: true,
        listVisible: ko.observable(true)
    },
    {
        title: 'Mithibai College',
        location: {
            lat: 19.1031174,
            lng: 72.8373278
        },
        address: 'North South Road Number 1, Suvarna Nagar, Vile Parle West, Mumbai, Maharashtra 400056, India',
        phone: "022 4233 9001",
        url: 'www.mithibai.ac.in/',
        college: true,
        listVisible: ko.observable(true)
    },
    {
        title: 'Khalsa College',
        location: {
            lat: 19.025201,
            lng: 72.8566393
        },
        address: 'Nathalal Parekh Marg, Matunga East, Mumbai, Maharashtra 400019, India',
        phone: "022 2409 6234",
        url: 'www.gnkhalsa.edu.in/',
        college: true,
        listVisible: ko.observable(true)
    },
    {
        title: 'NMIMS',
        location: {
            lat: 19.1036726,
            lng: 72.83716629999999
        },
        address: 'Bhaktivedanta Swami Marg, Gulmohar Road, Juhu Scheme, Vile Parle West, Mumbai, Maharashtra 400056, India',
        phone: "022 4233 8000",
        url: 'www.nmcollege.in',
        college: true, 
        listVisible: ko.observable(true)
    },
    {
        title: 'D.J. Sanghvi College of Engineering',
        location: {
            lat: 19.1075386,
            lng: 72.83704139999999
        },
        address: 'Plot No.U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Marg, Vile Parle West, Mumbai, Maharashtra 400056, India',
        phone: "94631 58608",
        url: 'www.djsce.ac.in/',
        college: true,
        listVisible: ko.observable(true)
    },
    {
        title: 'H.R. College of Commerce and Economics',
        location: {
            lat: 18.929669,
            lng: 72.8267539
        },
        address: '123, Dinshaw Wachha Road, Churchgate, Mumbai, Maharashtra 400020, India',
        phone: "022 2287 6115",
        url: 'www.hrcollege.edu/',
        college: true,
        listVisible: ko.observable(true)
    },
    {
        title: 'Jai Hind College',
        location: {
            lat: 18.9345107,
            lng: 72.82521050000001
        },
        address: 'A Road, Churchgate, Mumbai, Maharashtra 400020, India',
        phone: "022 2204 0256",
        url: 'www.jaihindcollege.com/',
        college: true,
        listVisible: ko.observable(true)

    },
    {
        title: 'Kishinchand Chellaram College',
        location: {
            lat: 18.9296144,
            lng: 72.82711619999999
        },
        address: '124, Dinshaw Wachha Road, Vidyasagar Principal K. M. Kundnani Chowk, Churchgate, Mumbai, Maharashtra 400020, India',
        phone: "022 6698 1000",
        url: 'www.kccollege.edu.in/',
        college: true,
        listVisible: ko.observable(true)

    },

    {
        title: 'K.J. Somaiya College of Engineering',
        location: {
            lat: 19.073041,
            lng: 72.899697
        },
        address: 'Vidyanagar, Vidya Vihar East, Vidyavihar, Mumbai, Maharashtra 400077, India',
        phone: "022 6644 9191",
        url: 'https://www.somaiya.edu/kjsce',
        college: true,
        listVisible: ko.observable(true)
    },
    {
        title: 'Metro Theatre',
        location: {
            lat: 18.9430131,
            lng: 72.8288781
        },
        address: 'M.G.Road, Dhobitalao Junction, Mumbai, Maharashtra 400020, India',
        phone: "080802 11111",
        url: '-',
        theatre: true,
        listVisible: ko.observable(true)
    },
    {
        title: 'Sterling Theatre',
        location: {
            lat: 18.9383381,
            lng: 72.83268180000002
        },
        address: '65, Murzban Road, Azad Maidan, Fort, Mumbai, Maharashtra 400001, India',
        phone: "022 6622 0016",
        url: '-',
        theatre: true,
        listVisible: ko.observable(true)
    },
    


];

var markers = [];
// Animation for marker
function animateMarker(marker) {

    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() {
        marker.setAnimation(null);
    }, 3000);
}
https: //classroom.udacity.com/nanodegrees/nd001/parts/00113454014/modules/4fd8d440-9428-4de7-93c0-4dca17a36700/lessons/8304370457/concepts/83239598340923#
    // This function populates the infowindow when the marker is clicked.
    function populateInfoWindow(marker, infowindow) {
        console.log('displaying infowindow');
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            
            // Open infowindows at respective markers
            infowindow.open(map, marker);
        }


       




        //loading the 3rd party api Wikipedia api

        //links reffered:https://www.mediawiki.org/wiki/API:Opensearch

        //1:1 appointment with Mr.Karol
        var wiki_url = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title.replace(/\s+/g, '_') + '&format=json&callback=wikiCallback';
        //ajax request to run the wikipedia api
        $.ajax({
            url: wiki_url,
            dataType: "jsonp", //form of response
        }).done(function(response) {
            var articlename = response[0];
            console.log(articlename);

            var url = 'http://en.wikipedia.org/wiki/' + articlename;
            
            infowindow.setContent('<p><strong>' + marker.title + '</p></strong>' + '<strong>' +' '+ "Address:" + '</strong>' + '<p><em>' + marker.address + '<p><strong>' + "Contact: " + '</strong></p>' + '<p>' + marker.phone + '</p>' + '</em></p>' + '<p><strong>' + "Website: " + '</strong></p>' + '<a href="' + marker.url + '">' + marker.url + '<br><p><strong>Wikipedia Article:</strong></p><br><div class="wikipedialink">' + '<a href="' + url + '">' + articlename + '</a>'+ 
             '</div>');
            console.log(url);
            marker.setAnimation(google.maps.Animation.BOUNCE);
            infowindow.open(map, marker);
            // Make sure the marker property is cleared if the infowindow is closed.
            infowindow.addListener('closeclick', function() {
                infowindow.marker = null;
            });
           // infowindow.setContent('<a href="' + url + '">' + articlename + '</a>');

        
        }).fail(function(jqXHR,textStatus) {
            //error handling for wikipedia resources
            infowindow.setContent("Failed to load wikipedia resources");

        });

        

    }

function mallselect() {
    for (var i = 0; i < markersArray.length; i++) { //creating a function to filter out malls on click of mall button
        if (markers[i].mall === true) {
            markers[i].setVisible(true);
        } else {
            markers[i].setVisible(false);
        }
    }
};

function collegeselect() { //creating a function to filter out colleges on click of college button
    for (var i = 0; i < markersArray.length; i++) {
        if (markers[i].place === college) {
            markers[i].setVisible(true);
        } else {
            markers[i].setVisible(false);
        }
    }
};

function theatreselect() { //creating a function to filter out theatres on click of theatre button
    for (var i = 0; i < markersArray.length; i++) {
        if (markers[i].place === theatre) {
            markers[i].setVisible(true);
        } else {
            markers[i].setVisible(false);
        }
    }
};


//ref link 1:1 appointment with Karol Sir
//ViewModel function     
var viewModel = function() {
    var self = this;
    self.locationList = ko.observableArray(locations);

    this.displayFilter = ko.observable("options-box");
    //this.locationList = ko.observableArray(markers);
    //seperate function to display infowindow and open the respective marker's infowindow when the place name in the list is clicked.
    this.onclickInfowindow = function(place) { //take input from the click as place and display its marker on the map on click only.
        google.maps.event.trigger(place.marker, 'click');
        console.log('displaying infowindow on name click event');
    };




    //ref link : 1:1 appointment with Karol Sir


    this.filtermall = function() { //running a function to filter out malls on click of mall button
        var len = self.locationList().length;
        for (var i = 0; i < len; i++) {
            if (self.locationList()[i].mall === true) {
                self.locationList()[i].listVisible(true);
                markers[i].setVisible(true);
                console.log('filter malls and display');
            } else {
                self.locationList()[i].listVisible(false);
                markers[i].setVisible(false);
            }
        }
    };
    this.filtercollege = function() { //running a function to filter out colleges on click of college button
        var len = self.locationList().length;
        for (var i = 0; i < len; i++) {
            if (self.locationList()[i].college === true) {
                self.locationList()[i].listVisible(true);
                markers[i].setVisible(true);
                console.log('filter colleges and display');
            } else {
                self.locationList()[i].listVisible(false);
                markers[i].setVisible(false);
            }
        }
    };
    this.filtertheatre = function() { //running a function to filter out theatres on click of theatre button
        var len = self.locationList().length;
        for (var i = 0; i < len; i++) {
            if (self.locationList()[i].theatre === true) {
                self.locationList()[i].listVisible(true);
                markers[i].setVisible(true);
                console.log('filter theatres and display');
            } else {
                self.locationList()[i].listVisible(false);
                markers[i].setVisible(false);
            }
        }
    };
    this.nofilter = function() { //running a function to filter out theatres on click of theatre button
        var len = self.locationList().length;
        for (var i = 0; i < len; i++) {
            {
                self.locationList()[i].listVisible(true);
                markers[i].setVisible(true);
                console.log('No filters apply. Display all');
            }

        }
    };
    //this.openInfo = function(thisList) {
    // var thisId = this.locationId();
    //var newId = thisId.slice(-1);
    //populateInfoWindow(markersArray[newId], infoWindow);
    // };
};
ko.applyBindings(new viewModel());