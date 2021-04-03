let map;

const sligo =  {
    lat: 54.2697,
    lng: -8.4694
};

 const iconBase = "assets/img/";  
    // array with icons   
    const iconArray = [
                
            {   name:"surfing",
                icon: iconBase + "surfing.png"
            },  

            {
                name:"ruins",
                icon: iconBase +"ruins-2.png"
                
            },
            {
                name:"smallcity",
                icon: iconBase + "smallcity.png"
            },
            {
                name:"museum",
                icon: iconBase + "art-museum-2.png"
            
            },
            {
                name:palace,
                icon: iconBase + "palace-2.png"
            
            },
            {
                name:"shore",
                icon: iconBase + "shore.png"
        
            },
            {
                name:"restaurant",
                icon: iconBase + "restaurant.png"
                
            }
    ];



function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: sligo,
    zoom: 11,
    mapTypeId: "satellite",
    heading: 90,
    tilt: 45,
  });

  
}