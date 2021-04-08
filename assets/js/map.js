let map;

//the location of Sligo
const sligo = {
    lat: 54.2697,
    lng: -8.4694
};
//initialize and add add the map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        //map centered at Sligo
        center: sligo,
        zoom: 11,
        mapTypeId: "satellite",
        
    });

        // The marker, positioned at Sligo
        const marker = new google.maps.Marker({
        position: Sligo,
        animation:google.maps.Animation.DROP,
        map: map,
    });


    const iconBase = "assets/img/";
    // array with icons   
    const iconsArray = [

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

    // created an array with places in and nearby Sligo
    const locations = [

        // Beaches
        //Rosses Point
        {
            coordinates: {
                lat: 54.306250,
                lng: -8.567500,
            },
            type: "shore",
            placeName: "Rosses Point",
            information: "My favourite places on the coast.",
            link:"https://www.google.com/maps/place/Rosses+Upper,+Rosses+Point,+Co.+Sligo/@54.3047663,-8.5727754,15z/data=!3m1!4b1!4m5!3m4!1s0x485edd2ced6b1cd3:0xa00c7a99731ac00!8m2!3d54.3047546!4d-8.5640206" 
        },

        //Strandhill
        {
            coordinates: {
                lat: 54.306250,
                lng: -8.567500,
            },
            type: "surfing",
            placeName: "Strandhill",
            information: "The best places to surf in Europe.",
            link:"https://www.google.com/maps/place/Strandhill+Beach/@54.2699579,-8.6191337,15z/data=!3m1!4b1!4m5!3m4!1s0x485ec364af525edf:0x91fe6352adadb717!8m2!3d54.2699462!4d-8.6103789"
        },

        // Town attractions

        //Sligo Town
        {
            coordinates: {
                lat: 54.2697,
                lng: -8.4694,
            },
            type: "smallcity",
            placeName: "Sligo",
            information:"Sligo is also a tourist destination, being situated on the Wild Atlantic Way",
            link:"https://www.google.com/maps/place/Sligo/@54.26842,-8.5157496,13z/data=!3m1!4b1!4m5!3m4!1s0x485ee9b5677caee9:0xa00c7a997317380!8m2!3d54.2766103!4d-8.4760888"


        },

         //Sligo Abbey
        {
            coordinates: {
                lat: 54.27087,
                lng: -8.47002,
            },
            type: "ruins",
            placeName: "Sligo Abbey",
            information: "This one of the most distinguishable places in Sligo.",
            link:"https://www.google.com/maps/place/Sligo+Abbey/@54.2708417,-8.4722735,17z/data=!3m1!4b1!4m5!3m4!1s0x485ee835752f1d8d:0x381cb143ec6d3c2a!8m2!3d54.2708386!4d-8.4700848"
        },

        //Yeats Building
        {
            coordinates: {
                lat: 54.27376,
                lng: -8.47213,
            },
            type: "museum",
            placeName: "Yeats Building",
            information: "There is a permanent exhibition on the life and works of W.B.Yeats.",
            link:"https://www.google.com/maps/place/Yeats+Building/@54.2721335,-8.4772024,17z/data=!3m1!4b1!4m5!3m4!1s0x485ee83415b912cb:0xd527b4c95f171e61!8m2!3d54.272114!4d-8.4750903"
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
            information: "This is an amazing historical place sorrounded by a beautiful large garden.",
            link:"https://www.google.com/maps/place/Lissadell+House,+Lissadill,+Ballinfull,+Co.+Sligo/@54.3467179,-8.583131,17z/data=!3m1!4b1!4m5!3m4!1s0x485edd00393178cf:0x8349d17e54a18f8d!8m2!3d54.3467148!4d-8.5809423"
        },

        //Mullaghmore
        {
            coordinates: {
                lat: 54.46555,
                lng: -8.45219,
            },
            type: "restaurant",
            placeName: "Mullaghmore",
            information: "Small fishing village with large (3km) sandy beach and great seafood restaurant.",
            link: "https://www.google.com/maps/place/Rosses+Upper,+Rosses+Point,+Co.+Sligo/@54.3047663,-8.5727754,15z/data=!3m1!4b1!4m5!3m4!1s0x485edd2ced6b1cd3:0xa00c7a99731ac00!8m2!3d54.3047546!4d-8.5640206"
        },
    ];

    



}

        
        
       

        

        

       
   

       

        
    
   