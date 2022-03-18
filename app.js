mapboxgl.accessToken =
  "pk.eyJ1Ijoia25kdWdhbiIsImEiOiJjbDBxYWw2ZjkxMWVmM2JvN2VhM2Q2OGp6In0.nnTtL798NQP2aQodAvVwkw";

// Map settings and styles from Map Box
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/navigation-day-v1",
  center: [-159.530856, 22.047639],
  zoom: 8,
});

// center marker in Lihue
var marker = new mapboxgl.Marker()
  .setLngLat([-159.369318, 21.976709])
  .addTo(map);

// bus stops between Lihue, Hawaii and Hanalei, Hawaii on Kauai
const busStops = [
  [-159.3677856, 21.9754634], // 1 Eiwa St.
  [-159.3668104, 21.9844342], // 2 Across from Fish Express
  [-159.3571743, 21.9934489], // 3 Kuhio Hwy/Laukona Rd
  [-159.3528568, 21.9958407], // 4 Peter Rayno Park
  [-159.3324778, 22.053197], // 5 Waipouli Courtyard
  [-159.3204229, 22.0618377], // 6 Waipouli Beach Resort
  [-159.3194719, 22.0705925], // 7 Kapaa Hongwanji
  [-159.3192003, 22.073569], // 8 Pono Kai
  [-159.316274, 22.0778136], // 9 Kapaa Library
  [-159.3144033, 22.0798133], // 10 Kapaa Neighborhood Ctr
  [-159.303727, 22.103678], // 11 Kealia Beach
  [-159.3053204, 22.13792], // 12 Kukuihale Rd
  [-159.3149028, 22.1444301], // 13 Anahola Post Office
  [-159.3309907, 22.1796823], // 14 Moloaa Fruit Stand
  [-159.4119149, 22.2072951], // 15 Kilauea Food Mart
  [-159.415232, 22.210796], // 16 Anaina Hou
  [-159.4741024, 22.2131026], // 17 Princeville Shopping Ctr
  [-159.4975487, 22.2026678], // 18 Hanalei Post Office
  [-159.5007317, 22.2017608], // 19 Hanalei Neighborhood Ctr
];

var counter = 0;

// Move in increments through bus stops
function move() {
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}
