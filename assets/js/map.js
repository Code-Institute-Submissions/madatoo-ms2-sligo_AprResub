let map;

const sligo = {
    lat: 54.2697,
    lng: -8.4694
};

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: sligo,
        zoom: 11,
        mapTypeId: "satellite",
        heading: 90,
        tilt: 45,
    });

    const iconBase = "assets/img/";
    // array with icons   
    const iconArray = [

        {
            name: "surfing",
            icon: iconBase + "surfing.png"
        },

        {
            name: "ruins",
            icon: iconBase + "ruins-2.png"

        },
        {
            name: "smallcity",
            icon: iconBase + "smallcity.png"
        },
        {
            name: "museum",
            icon: iconBase + "art-museum-2.png"

        },
        {
            name: "palace",
            icon: iconBase + "palace-2.png"

        },
        {
            name: "shore",
            icon: iconBase + "shore.png"

        },
        {
            name: "restaurant",
            icon: iconBase + "restaurant.png"

        }
    ];

    // create an array with places in and nearby Sligo
    const locationsArray = [

        // Beaches
        //Rosses Point
        {
            coordinates: {
                lat: 54.306250,
                lng: -8.567500,
            },
            type: "shore",
            placeName: "Rosses Point",
            information: "This is one of my favourite places on the coast. I love this old seafaring village that has a seaside resort with a 18-hole championship golf course. If you like sailing you can hire a fully equipped boat and enjoy your day at the sea."
        },

        //Strandhill
        {
            coordinates: {
                lat: 54.306250,
                lng: -8.567500,
            },
            type: "surfing",
            placeName: "Strandhill",
            information: "This is location has been named as one of the best places to surf in Europe. It is worth noting that swimming is forbidden at Strandhill beach due to very strong sea currents."
        },

        // Town attractions

        //Sligo Town
        {
            coordinates: {
                lat: 54.2697,
                lng: -8.4694,
            },
            type: "smallcity",
            placeName: "Sligo"


        },


        //Sligo Abbey
        {
            coordinates: {
                lat: 54.27087,
                lng: -8.47002,
            },
            type: "ruins",
            placeName: "Sligo Abbey",
            information: "This place surprised me very much. It was founded in the mid 13th cenury by Maurice Fitzgerald and is, still, one of the most distinguishable places in Sligo."
        },

        //Yeats Building
        {
            coordinates: {
                lat: 54.27376,
                lng: -8.47213,
            },
            type: "museum",
            placeName: "Yeats Building",
            information: "There is a permanent exhibition on the life and works of W.B.Yeats and Yeats Art Gallery presents changing exhibitions of art, sculpture, crafts etc."
        },

        // Nearby attractions

        //Lisadell House and Gardens 
        {
            coordinates: {
                lat: 54.34645,
                lng: -8.58279,
            },
            type: "palace",
            placeName: "Lisadell House and Gardens",
            information: "This is an amazing historical place sorrounded by a beautiful large garden. Located in proximity to the majestic table mountain, Benbulben."
        },

        //Mullaghmore
        {
            coordinates: {
                lat: 54.46555,
                lng: -8.45219,
            },
            type: "restaurant",
            placeName: "Mullaghmore",
            information: "Small fishing village with a superb, large (3km) sandy beach. Mullaghmore is also a base for licensed angling/passanger boats for charter."
        },
    ];

    

    // This event listener calls addMarker() when the map is clicked.
    google.maps.event.addListener(marker, "click", function() {
        addMarker(map, marker);
    });



    for (var i=0; i < locationsArray.length; i++) {
        addMarker(locationsArray[i]);
    }

    // Adds a marker to the map.
    function addMarker(locationsArray) {
    // Add the marker at the clicked location
        var marker = new google.maps.Marker({
            position: locationsArray.coordinates,
            icon: icons[iconArray],icon,
            map: map,
        });



    
    

        
}}