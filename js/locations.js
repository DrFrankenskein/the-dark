//LOCATIONS
var loc = [{
	ID: 0,
	DESC: "Start",
	LOCKED: false
},
{
	ID: 1,
	DESC: "En-suite Bathroom",
	LOCKED: false
},
{
	ID: 2,
	DESC: "Main Corridor",
	LOCKED: false	
},
{
	ID: 3,
	DESC: "Locked Room",
	LOCKED: true	
},
{
	ID: 4,
	DESC: "Office",
	LOCKED: false	
},
{
	ID: 5,
	DESC: "Janitor's Closet",
	LOCKED: true	
},
{
	ID: 6,
	DESC: "Outside",
	LOCKED: true	
}];

//TRAVEL TABLE
var travel_table = [
{ID: 0, N: 1, NE: -1, E: -1, SE: -1, S: -1, SW: -1, W: 2, NW: -1},
{ID: 1, N: -1, NE: -1, E: -1, SE: -1, S: 0, SW: -1, W: -1, NW: -1},
{ID: 2, N: 3, NE: 3, E: 0, SE: 3, S: 4, SW: 3, W: 6, NW: 5},
{ID: 3, N: -1, NE: -1, E: -1, SE: -1, S: -1, SW: -1, W: -1, NW: -1},
{ID: 4, N: 2, NE: -1, E: -1, SE: -1, S: -1, SW: -1, W: -1, NW: -1},
{ID: 5, N: -1, NE: -1, E: -1, SE: -1, S: 2, SW: -1, W: 2, NW: -1},
{ID: 6, N: -1, NE: -1, E: 2, SE: -1, S: -1, SW: -1, W: -1, NW: -1}
];
	