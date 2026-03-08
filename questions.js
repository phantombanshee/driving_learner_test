const questions = [

{
question: "When can a single broken white line be crossed?",
options: ["Never","Only when overtaking","Only at night","Only on highways"],
answer: 1
},

{
question: "Vehicles in India must drive on which side of the road?",
options: ["Right","Left","Middle","Either side"],
answer: 1
},

{
question: "What does a solid white line on the road indicate?",
options: ["Parking allowed","Overtaking allowed","Do not cross","Pedestrian crossing"],
answer: 2
},

{
question: "What is the maximum speed near schools unless otherwise indicated?",
options: ["20 km/h","25 km/h","40 km/h","50 km/h"],
answer: 1
},

{
question: "Helmets are mandatory for:",
options: ["Only rider","Only passenger","Both rider and passenger","Only highways"],
answer: 2
},

{
question: "Seat belts are compulsory for:",
options: ["Driver only","Front passenger only","All occupants","Only highways"],
answer: 2
},

{
question: "At a stop sign a driver must:",
options: ["Slow down","Stop before stop line","Honk and proceed","Ignore sign"],
answer: 1
},

{
question: "Which vehicles always have right of way?",
options: ["Buses","Trucks","Emergency vehicles with sirens","Cars"],
answer: 2
},

{
question: "At an unguarded railway crossing you must:",
options: ["Speed up","Stop and check for trains","Honk continuously","Ignore"],
answer: 1
},

{
question: "Vehicles inside a roundabout have:",
options: ["No priority","Right of way","Must stop","Must reverse"],
answer: 1
},

{
question: "Overtaking is prohibited near:",
options: ["Straight roads","Bends and intersections","Highways","Wide roads"],
answer: 1
},

{
question: "Horns should be used:",
options: ["Continuously","Only when necessary","At every turn","In silence zones"],
answer: 1
},

{
question: "Using mobile phone while driving is:",
options: ["Allowed","Allowed at signals","Prohibited","Allowed highways"],
answer: 2
},

{
question: "Parking is prohibited:",
options: ["Near bends","At bus stops","Near crossings","All of the above"],
answer: 3
},

{
question: "On hill roads which vehicle has priority?",
options: ["Downhill vehicle","Uphill vehicle","Bigger vehicle","Faster vehicle"],
answer: 1
},

{
question: "Flashing red traffic signal means:",
options: ["Stop and proceed if safe","Go immediately","Ignore signal","Turn"],
answer: 0
},

{
question: "Flashing amber traffic signal means:",
options: ["Stop","Proceed with caution","Reverse","Turn"],
answer: 1
},

{
question: "Green traffic light means:",
options: ["Stop","Go if clear","Slow down","Turn"],
answer: 1
},

{
question: "Red traffic light means:",
options: ["Go","Stop","Turn left","Reverse"],
answer: 1
},

{
question: "Drivers must maintain safe distance:",
options: ["Only highways","Only cities","At all times","Only rain"],
answer: 2
},

{
question: "Indicators must be used:",
options: ["After turning","Before turning","Never","Only highway"],
answer: 1
},

{
question: "Driving under influence is:",
options: ["Allowed","Illegal","Recommended","Safe"],
answer: 1
},

{
question: "Pedestrians must be given:",
options: ["Warning","Priority","Horns","Ignore"],
answer: 1
},

{
question: "Children crossing the road require:",
options: ["Care","Speed","Ignoring","Horns"],
answer: 0
},

{
question: "Drivers must obey:",
options: ["Passengers","Traffic police","Friends","Mechanics"],
answer: 1
},

{
question: "Driving safely means:",
options: ["Aggressive","Responsible","Fast","Careless"],
answer: 1
},

{
question: "Traffic signs help:",
options: ["Guide drivers","Confuse drivers","Stop vehicles","Slow vehicles"],
answer: 0
},

{
question: "Following traffic rules prevents:",
options: ["Accidents","Travel","Driving","Vehicles"],
answer: 0
},

{
question: "Registration plates must display:",
options: ["Decorations","Vehicle number only","Owner name","Logo"],
answer: 1
},

{
question: "Manual signals are used when:",
options: ["Indicators fail","Traffic heavy","Driving fast","Driving slow"],
answer: 0
},

{
question: "Drivers should avoid:",
options: ["Distractions","Mirrors","Brakes","Indicators"],
answer: 0
},

{
question: "Vehicles must not drive on:",
options: ["Footpaths","Cycle tracks","Pedestrian lanes","All of the above"],
answer: 3
},

{
question: "Speed limits are:",
options: ["Optional","Legal requirements","Suggestions","Irrelevant"],
answer: 1
},

{
question: "Headlights at night are:",
options: ["Optional","Required","Illegal","Avoid"],
answer: 1
},

{
question: "Emergency vehicles use:",
options: ["Music","Sirens","Lights only","Nothing"],
answer: 1
},

{
question: "Overtaking should be done from:",
options: ["Left","Right","Either side","Middle"],
answer: 1
},

{
question: "Drivers must slow down near:",
options: ["Schools","Hospitals","Construction zones","All of the above"],
answer: 3
},

{
question: "Driving on footpaths is:",
options: ["Allowed","Prohibited","Allowed bikes","Allowed cars"],
answer: 1
},

{
question: "Seat belts reduce:",
options: ["Fuel use","Injury risk","Speed","Traffic"],
answer: 1
},

{
question: "Helmets protect:",
options: ["Hands","Head","Feet","Eyes"],
answer: 1
},

{
question: "Road markings are used to:",
options: ["Decorate road","Guide drivers","Stop vehicles","Confuse drivers"],
answer: 1
}

];

// duplicate questions to ensure at least 120 available
while(questions.length < 120){
questions.push({...questions[questions.length % 40]});
}
