// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "The shape of a route sign tells you:",
        answer: "the type of route you are on",
        options: [
            "the speed limit on that route. ",
            "the type of route you are on",
            "that the route you are on might be dangerous",
            "how many miles are left before you reach your destination"
        ]
    },
    {
        numb: 2,
        question: "This sign means:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/night-speed.jpg",
        answer: "The night-time speed limit is 45 MPH",
        options: [
            "The night-time speed limit is 45 MPH",
            "The minimum speed limit is 45 MPH",
            "The recommended speed limit is 45 MPH",
            "Take route 45 if you are driving at night"
        ]
    },
    {
        numb: 3,
        question: "A flashing red light:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/flashing-red-light.jpg",
        answer: "All of the above.",
        options: [
            "means the same thing as a stop sign.",
            "is used at dangerous intersections.",
            "means that you must bring your vehicle to a complete halt.",
            "All of the above."
        ]
    },
    {
        numb: 4,
        question: "Drivers must dim their high beam headlights when within _____ of an oncoming vehicle.",
        answer: "250 feet",
        options: [
            "100 feet",
            "500 feet",
            "250 feet",
            "200 feet"
        ]
    },
    {
        numb: 5,
        question: "Drivers should be cautious when large trucks make turns because:",
        answer: "they make wide turns and may cross the center line",
        options: [
            "they have to back before making the turn",
            "they may stop and flash their brake lights during the turn",
            "they make wide turns and may cross the center line",
            "None of the other answers are correct"
        ]
    },
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    {
        numb: 6,
        question: "When making a left or right turn in a business or residential district, you should activate your turn signal for:",
        answer: "not less than 100 feet before turning",
        options: [
            "not less than 75 feet before turning",
            "not less than 100 feet before turning",
            "not less than 50 feet after turning",
            "not less than 50 feet before turning"
        ]
    },
    {
        numb: 7,
        question: "To safely stop in emergencies always allow a space cushion of at least:",
        answer: "4 seconds behind the vehicle in front of you",
        options: [
            "1 second behind the vehicle in front of you",
            "5 seconds behind the vehicle in front of you",
            "4 seconds behind the vehicle in front of you",
            "7 seconds behind the vehicle in front of you"
        ]
    },
    {
        numb: 8,
        question: "You want to turn left at an intersection ahead. A car reaches the intersection from the opposite direction and moves straight ahead. You:",
        answer: "must wait for the car to go through before you turn",
        options: [
            "can turn left. You have the right of way",
            "must make a U-turn and then turn right",
            "must wait for the car to go through before you turn",
            "may not enter the intersection to prepare for your left turn if the light is green"
        ]
    }, {
        numb: 9,
        question: "BAC is expressed in:",
        answer: "percentage of alcohol to blood",
        options: [
            "AAI (Acute Alcohol Intoxication) level.",
            "ounces of alcohol in your blood",
            "percentage of blood to alcohol",
            "percentage of alcohol to blood"
        ]
    },
    {
        numb: 10,
        question: "When an aggressive driver confronts you, you should:",
        answer: "All of the above",
        options: [
            "Try to move away safely",
            "Report aggressive drivers to law enforcement authorities",
            "Remain calm and relaxed",
            "All of the above"
        ]
    },
    {
        numb: 11,
        question: "Roads are most slippery:",
        answer: "when it first starts to rain",
        options: [
            "just before it rains",
            "when it stops raining",
            "when it first starts to rain",
            "on hills"
        ]
    },
    {
        numb: 12,
        question: "Before a school bus stops to load passengers, the driver will usually flash:",
        answer: "yellow warning lights",
        options: [
            "red lights",
            "green lights",
            "red warning lights",
            "yellow warning lights"
        ]
    },
    {
        numb: 13,
        question: "This road sign:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/roundabout-circle-sign.jpg",
        answer: "provides an advance notice of a roundabout",
        options: [
            "is a no-right-turns sign",
            "warns drivers that U-turns are not permitted",
            "provides an advance notice of a roundabout",
            "warns drivers of a sharp turn left. Drivers should slow their speed and keep to the left"
        ]
    },
    {
        numb: 14,
        question: "This road sign means that:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/worker-sign.jpg",
        answer: "Workers are on or very close to the road in the work zone ahead",
        options: [
            "Workers are on or very close to the road in the work zone ahead",
            "There is a children's playground ahead",
            "There is a pedestrian crosswalk ahead",
            "A group of prison workers is ahead"
        ]
    },
    {
        numb: 15,
        question: "This sign warns drivers that:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/double-curve-sign.jpg",
        answer: "there is a double curve ahead",
        options: [
            "there is a winding road ahead",
            "the highway ahead is divided into two one-way roadways. Drivers should keep to the right",
            "There is a low place in the road ahead",
            "there is a double curve ahead"
        ]
    },
    {
        numb: 16,
        question: "Bicyclists must",
        answer: "ride in a bicycle lane, if available",
        options: [
            "ride in a bicycle lane, if available",
            "remain near the left edge of the road",
            "travel with more than two side-by-side in a single lane, if possible",
            "remain to the right when they prepare for a left turn"
        ]
    },
    {
        numb: 17,
        question: "Traffic lights are normally ____________ from the top to bottom or left to right",
        answer: "red, yellow and green",
        options: [
            "green, yellow and red",
            "red, green and yellow",
            "green, red and yellow",
            "red, yellow and green"
        ]
    },
    {
        numb: 18,
        question: "An octagonal sign means that drivers must:",
        answer: "come to a complete stop at the marked stop line",
        options: [
            "be aware possible hazards ahead",
            "slow down",
            "come to a complete stop at the marked stop line",
            "respect the posted speed limit"
        ]
    },
    {
        numb: 19,
        question: "When riding at night, bicycles must have a white headlight visible for ____ feet",
        answer: "500",
        options: [
            "600",
            "300",
            "500",
            "400"
        ]
    },
    {
        numb: 20,
        question: "As you drive on the expressway, make sure:",
        answer: "to signal all lane changes",
        options: [
            "to signal all lane changes",
            "you cut off vehicles behind you when you change lanes",
            "your directional signal goes off before you change lanes",
            "All of the above"
        ]
    },
    {
        numb: 21,
        question: "To enter a freeway",
        answer: "signal, yield, and enter at the same speed that traffic is moving",
        options: [
            "make a complete stop before entering the freeway",
            "turn from any lane",
            "signal and enter the freeway. You have the right-of-way",
            "signal, yield, and enter at the same speed that traffic is moving"
        ]
    },
    {
        numb: 22,
        question: "Don’t park within _____ feet of a fire hydrant.",
        answer: "15",
        options: [
            "10",
            "15",
            "20",
            "30"
        ]
    },
    {
        numb: 23,
        question: "When there are no signs or lane markings to control turning, drivers should:",
        answer: "turn from the lane that’s closest to the direction they want to go",
        options: [
            "stop before turning",
            "turn from any lane",
            "turn from the lane that’s closest to the direction they want to go",
            "turn from the center lane"
        ]
    },
    {
        numb: 24,
        question: "You can pass on the right:",
        answer: "when a vehicle ahead makes a left turn",
        options: [
            "when passing is restricted by parked cars",
            "when a vehicle ahead makes a right turn",
            "when a vehicle ahead makes a left turn",
            "when a vehicle that is approaching from the opposite direction is prepared to turn left"
        ]
    },
    {
        numb: 25,
        question: "What should you do in case of a steering failure?",
        answer: "percentage of alcohol to blood",
        options: [
            "Pump your gas pedal a few times to increase the pressure",
            "Don't panic. Turn on your emergency lights to let other drivers know you are having car problems. Move toward the side of the road and bring the car to a gradual stop",
            "Call an ambulance",
            "Leave the road immediately"
        ]
    },
    {
        numb: 26,
        question: "This sign indicates:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/slippery-road-sign.jpg",
        answer: "The road may be slippery when wet. Drive slowly.",
        options: [
            "Double curve ahead. Slow your speed",
            "The road may be slippery when wet. Drive slowly.",
            "Winding road. Drive with caution",
            "Warning: drunk drivers"
        ]
    },
    {
        numb: 27,
        question: "If you refuse to take a BAC test when asked by an officer, you will lose your driver license for at least:",
        answer: "1 year",
        options: [
            "2 year",
            "1 year",
            "6 months",
            "60 days"
        ]
    },
    {
        numb: 28,
        question: "In heavy rain, tires can begin to ride on the water that is on top of the road pavement. This is called:",
        answer: "hydroplaning",
        options: [
            "waterplaning",
            "pavement-planing",
            "rideplaning",
            "hydroplaning"
        ]
    },
    {
        numb: 29,
        question: "The yield sign means:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/yield-sign.jpg",
        answer: "If the way is clear, you may move forward slowly without stopping",
        options: [
            "If the way is clear, you may move forward slowly without stopping",
            "Stop if you can",
            "Stop",
            "Go. The light will soon be red"
        ]
    },
    {
        numb: 30,
        question: "This is:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/side-road-sign.jpg",
        answer: "a side road sign",
        options: [
            "a right curve sign",
            "a merging traffic sign",
            "a reduction of lanes sign",
            "a side road sign"
        ]
    },
    {
        numb: 31,
        question: "A driver who approaches an intersection:",
        answer: "must yield the right-of-way to traffic already in the intersection",
        options: [
            "None of the above",
            "must yield the right-of-way to traffic already in the intersection",
            "must drive straight through the intersection, even if another vehicle is already in the intersection",
            "has the right-of-way over traffic already in the intersection"
        ]
    },
    {
        numb: 32,
        question: "This road sign means:",
        answer: "Slow down. The road ahead changes direction at an extreme angle",
        options: [
            "Road construction ahead. Detour to the left",
            "Blind intersection ahead",
            "One-way street ahead",
            "Slow down. The road ahead changes direction at an extreme angle"
        ]
    },
    {
        numb: 33,
        question: "This sign tells drivers that:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/stay-right-sign.jpg",
        answer: "they must stay on the right side of the divider",
        options: [
            "there is a reduction of lanes ahead",
            "a divided highway ends ahead",
            "they must stay on the right side of the divider",
            "there is a right turn ahead"
        ]
    },
    {
        numb: 34,
        question: "Drivers should use the horn:",
        answer: "only when necessary, to avoid collisions",
        options: [
            "if a driver is moving slowly, and you want them to drive faster",
            "to alert other drivers that they made a mistake",
            "when feeling angry or upset",
            "only when necessary, to avoid collisions"
        ]
    },
    {
        numb: 35,
        question: "What does a flashing yellow light mean?",
        answer: "Drivers may move forward with caution",
        options: [
            "Warning: hospital ahead",
            "The same thing as a stop sign",
            "Drivers may move forward with caution",
            "All of the above"
        ]
    },
    {
        numb: 36,
        question: "Destination signs are ______ with ____ letters and symbols.",
        answer: "green; white",
        options: [
            "white; black",
            "green; white",
            "yellow; black",
            "blue; white"
        ]
    },
    {
        numb: 37,
        question: "These are:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/route-signs.jpg",
        answer: "percentage of alcohol to blood",
        options: [
            "regulatory signs",
            "route signs",
            "miles-left signs",
            "speed limit signs"
        ]
    },
    {
        numb: 38,
        question: "This sign means:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/270-degree-turn.jpg",
        answer: "270 degree turn ahead",
        options: [
            "Roundabout ahead",
            "Wrong way; Turn around immediately",
            "270 degree turn ahead",
            "360 degree turn ahead"
        ]
    },
    {
        numb: 39,
        question: "This road sign means:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/stop-sign-ahead.jpg",
        answer: "Stop ahead",
        options: [
            "Crossroad ahead",
            "Side Road",
            "Stop ahead",
            "Railroad Warning"
        ]
    },
    {
        numb: 40,
        question: "Drivers can not pass a vehicle on the left if:",
        answer: "All of the above",
        options: [
            "they approach a curve on a two-way road and can not see around it",
            "ounces of alcohol in your blood",
            "All of the above",
            "they can not safely return to the right lane before any oncoming vehicle comes within 200 feet of them"
        ]
    },
    {
        numb: 41,
        question: "If the entrance lane is too short to allow acceleration to highway speed, you should:",
        answer: "stop and wait for a large gap in traffic, then enter the highway and accelerate quickly",
        options: [
            "go to the next entrance ramp",
            "merge into highway traffic as soon as possible",
            "stop and wait for a large gap in traffic, then enter the highway and accelerate quickly",
            "None of the above"
        ]
    },
    {
        numb: 42,
        question: "When following motorcycles, drivers should:",
        answer: "keep more space in front of their vehicle",
        options: [
            "keep less space in front of their vehicle",
            "try to pass them as they have different braking capabilities than other motor vehicles",
            "reduce the minimum following distance",
            "keep more space in front of their vehicle"
        ]
    },
    {
        numb: 43,
        question: "When you make a left turn from a one-way road into a one-way road, if the road you enter has two lanes, you:",
        answer: "must turn into its left lane",
        options: [
            "must turn into its right lane",
            "must turn into its left lane",
            "must go to the next intersection",
            "can not turn left"
        ]
    },
    {
        numb: 44,
        question: "Vehicles must be parked within ___  inches of the curb.",
        answer: "12",
        options: [
            "6",
            "12",
            "24",
            "18"
        ]
    },
    {
        numb: 45,
        question: "What shape is a speed limit sign",
        answer: "Vertical rectangle",
        options: [
            "Pentagon",
            "Diamond",
            "Round",
            "Vertical rectangle"
        ]
    },
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    {
        numb: 46,
        question: "You must notify the Department of Licensing within _________ of an address change.",
        answer: "10 days",
        options: [
            "10 days",
            "3 weeks",
            "30 days",
            "3 months"
        ]
    },
    {
        numb: 47,
        question: "Drivers should be aware that a motorcyclist may:",
        answer: "All of the above",
        options: [
            "move to the center of the lane on steel deck bridges",
            "decrease speed and rise off the seat when approaching a railroad crossing",
            "quickly change speed or lane position",
            "All of the above"
        ]
    },
    {
        numb: 48,
        question: "Aggressive driving includes:",
        answer: "All of the above",
        options: [
            "chasing or challenging other drivers",
            "yelling, honking, gesturing at other drivers",
            "All of the above",
            "quick lane changes without a signal"
        ]
    }, {
        numb: 49,
        question: "Your red traffic signal changes to green while a pedestrian is crossing in your traffic lane. The right of way should be given:",
        answer: "to the pedestrian",
        options: [
            "to the pedestrian",
            "by the pedestrian, but only when vehicles are turning left",
            "to you",
            "by the pedestrian"
        ]
    },
    {
        numb: 50,
        question: "A vehicle is stopped at a crosswalk to permit a pedestrian to cross the roadway. The driver of the vehicle approaching from the rear should:",
        answer: "not overtake and pass the stopped vehicle",
        options: [
            "overtake and pass the stopped vehicle",
            "not overtake and pass the stopped vehicle",
            "sound the horn",
            "None of the above"
        ]
    },
    {
        numb: 51,
        question: "A steady yellow light means:",
        answer: "Be prepared to stop for the red light",
        options: [
            "Be prepared to stop for the red light",
            "Stop, yield the right-of-way, and go",
            "Be prepared to go. The light will soon be green",
            "Drive with caution"
        ]
    },
    {
        numb: 52,
        question: "What is the purpose of minimum speed limits",
        answer: "To keep a smooth traffic flow",
        options: [
            "To decrease the state average speed statistic",
            "To keep a smooth traffic flow",
            "To halt the traffic flow",
            "To allow emergency vehicles with red flashing lights to safely pass other vehicles"
        ]
    },
    {
        numb: 53,
        question: "What is the meaning of red traffic signs?",
        answer: "Stop, do not enter or wrong way",
        options: [
            "High emphasis warning",
            "School ahead",
            "Regulatory",
            "Stop, do not enter or wrong way"
        ]
    },
    {
        numb: 54,
        question: "Bicyclists have the choice to ride on:",
        answer: "All the other answers are correct",
        options: [
            "the roadway",
            "the shoulder of a road",
            "All the other answers are correct",
            "in a bicycle lane"
        ]
    },
    {
        numb: 55,
        question: "This sign warns drivers that:",

        answer: "the road will make a sharp turn to the right",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/sharp-right-turn.jpg",
        options: [
            "another road enters the highway from the direction shown",
            "there is an intersection ahead",
            "the road will make a sharp turn to the right",
            "right turns are not allowed"
        ]
    },
    {
        numb: 56,
        question: "The ‘Slower Traffic Keep Right’ sign is used:",
        answer: "on multiple lane highways",
        options: [
            "on multiple lane highways",
            "at most intersections",
            "in school zones",
            "at roundabouts"
        ]
    },
    {
        numb: 57,
        question: "Doing all you can to prevent crashes is called:",
        answer: "Defensive Driving",
        options: [
            "Anti-Collision Driving",
            "ABS Driving",
            "Crash-Prevention Driving",
            "Defensive Driving"
        ]
    },
    {
        numb: 58,
        question: "___________ normally are white rectangles with black letters or symbols.",
        answer: "Regulatory signs",
        options: [
            "Service signs",
            "Regulatory signs",
            "Warning signs",
            "Destination signs (guide signs)"
        ]
    },
    {
        numb: 59,
        question: "When driving in travel lanes on the roadway:",
        answer: "do not stop for any reason, keep moving until you can safely pull off the road",
        options: [
            "you may make back up quickly if there are no vehicles behind",
            "you may stop to let out passengers",
            "do not stop for any reason, keep moving until you can safely pull off the road",
            "you may make a U-turn if you get on the wrong entrance ramp of the freeway"
        ]
    },
    {
        numb: 60,
        question: "If your brakes are wet, you can dry them by:",
        answer: "riding the pedal lightly",
        options: [
            "riding the pedal lightly",
            "having them checked by a mechanic",
            "pull over to the right and wait until it stops raining",
            "None of the above"
        ]
    },
    {
        numb: 61,
        question: "This sign means drivers should:",
        answer: "give the right-of-way to traffic on the road they wish to enter",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/yield-sign.jpg",
        options: [
            "not drive in this lane",
            "come to a complete stop and check for oncoming traffic before proceeding",
            "proceed at normal speed through the upcoming intersection",
            "give the right-of-way to traffic on the road they wish to enter"
        ]
    },
    {
        numb: 62,
        question: "When approaching any intersection or driveway, drivers should:",
        answer: "look both ways and be ready to stop",
        options: [
            "pass other vehicles and then stop",
            "drive at the fastest speed just before entering the intersection",
            "look both ways and be ready to stop",
            "change lanes"
        ]
    },
    {
        numb: 63,
        question: "When approaching a highway-rail intersection, the first sign drivers see is usually:",
        answer: "an RXR round sign on a yellow background",
        options: [
            "a stop sign",
            "an RXR round sign on a yellow background",
            "a train sign",
            "a yield sign"
        ]
    },
    {
        numb: 64,
        question: "Diamond-shaped signs:",
        answer: "are used to warn drivers of hazards on roadways",
        options: [
            "typically provide guidance to drivers",
            "are used to warn drivers of hazards on roadways",
            "indicate no pass zones",
            "All of the above"
        ]
    },
    {
        numb: 65,
        question: "What should you do if your headlights suddenly go out?",
        answer: "Use your emergency lights, parking lights or directional signals",
        options: [
            "Brake immediately and activate your emergency lights",
            "Use your emergency lights, parking lights or directional signals",
            "Ease your foot off the gas pedal and brake gently",
            "None of the other answers are correct"
        ]
    },
    {
        numb: 66,
        question: "What should you do in case of a brake failure?",
        answer: "All of the above.",
        options: [
            "Pull off the road into an open space, if available.",
            "All of the above.",
            "Rub your tires on the curb to slow your car.",
            "Apply the parking brake slowly."
        ]
    },
    {
        numb: 67,
        question: "This sign tells drivers that:",
        questionImageLink: "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/jpg/no-right-turn-sign.jpg",
        answer: "they must not make a right turn",
        options: [
            "None of the above",
            "they must make a left turn at the intersection",
            "U-turns are not allowed",
            "they must not make a right turn"
        ]
    },
    {
        numb: 68,
        question: "Where must a pedestrian walk when there are no sidewalks?",
        answer: "On the side of the road, facing the traffic",
        options: [
            "On the left side of the road, behind slower vehicles",
            "On the side of the road, facing the traffic",
            "On the side of the road, in the same direction of traffic",
            "In the middle of the road, facing oncoming traffic"
        ]
    },
    {
        numb: 69,
        question: "Your body gets rid of ____ alcoholic drink an hour.",
        answer: "one",
        options: [
            "three",
            "one",
            "two",
            "None of the above"
        ]
    },
    {
        numb: 70,
        question: "When you drive near parks and playgrounds, you should expect children:",
        answer: "to suddenly run into the street",
        options: [
            "to stop at the curb before crossing the street",
            "to know when it is safe to cross",
            "not to cross unless they are with an adult",
            "to suddenly run into the street"
        ]
    },
    {
        numb: 71,
        question: "When driving in heavy rain, drivers should use:",
        answer: "low beam headlights",
        options: [
            "low beam headlights",
            "emergency flashers",
            "parking lights",
            "high beam headlights"
        ]
    },
    {
        numb: 72,
        question: "A vehicle that enters a road from a driveway:",
        answer: "to suddenly run into the street",
        options: [
            "has the right-of-way",
            "must enter the roadway immediately",
            "must yield to traffic approaching from the right, while it has the right-of-way over vehicles approaching from the left",
            "must stop and yield the right-of-way to traffic on the roadway and to pedestrians"
        ]
    },
    {
        numb: 73,
        question: "If a broken yellow line is on your side of the center line:",
        answer: "you may cross the line to pass other vehicles",
        options: [
            "you are driving in the left lane",
            "you have the right-of-way when turning left",
            "you may not pass other vehicles",
            "you may cross the line to pass other vehicles"
        ]
    },
    {
        numb: 74,
        question: "This sign means:",
        answer: "Warning: a bikeway crosses the roadway ahead",
        options: [
            "The lane ahead is reserved for bicycles",
            "Warning: a bikeway crosses the roadway ahead",
            "Bicycle zone ahead",
            "Bicycles should yield to vehicles ahead"
        ]
    },
    {
        numb: 75,
        question: "What do pennant-shaped signs indicate?",
        answer: "A No Passing Zone",
        options: [
            "A school crossing",
            "School crossing",
            "A No Passing Zone",
            "Yield"
        ]
    },
    {
        numb: 76,
        question: "To drive defensively, you must:",
        answer: "keep your eyes moving",
        options: [
            "use the vehicle ahead as your only points of focus",
            "avoid scanning the road ahead",
            "keep your eyes moving",
            "keep one hand on the steering wheel"
        ]
    },
    {
        numb: 77,
        question: "A broken white line:",
        answer: "separates two lanes traveling in the same direction",
        options: [
            "separates two lanes traveling in the same direction",
            "marks the right edge of the roadway",
            "means passing or crossing is prohibited in that lane",
            "None of the above"
        ]
    },
    {
        numb: 78,
        question: "Left turns on a red light are allowed:",
        answer: "from a one-way street into a one-way street",
        options: [
            "in school zones",
            "from a one-way street into a one-way street",
            "Never",
            "at intersections, after stopping, if the way is clear"
        ]
    },
    {
        numb: 79,
        question: "Road signs that direct drivers to services are:",
        answer: "blue and white",
        options: [
            "brown and white",
            "blue and white",
            "green and white",
            "black and white"
        ]
    },
    {
        numb: 80,
        question: "When you drive near parks and playgrounds, you should expect children:",
        answer: "to suddenly run into the street",
        options: [
            "Motor vehicles entering an exclusive right-turn lane must weave across bicycle traffic in bicycle lanes",
            "Vehicles turning left must yield to bikes entering a right turn lane",
            "Drivers have the right of way over bikes turning left",
            "None of the above"
        ]
    },
    {
        numb: 81,
        questions: "This sign means:",
        answer: "Divided highway ahead",
        options: [
            "Divided highway ahead",
            "Divided highway ends",
            "Drivers will soon be on a roadway with Two-way traffic",
            "Keep to the left"
        ]
    },
    {
        numb: 82,
        questions: "Drivers must report to law enforcement an accident involving an injury or death within:",
        answer: "4 days",
        options: [
            "2 days",
            "10 days",
            "5 days",
            "4 days"
        ]
    },
    {
        numb: 83,
        questions: "When in a motor vehicle on a highway, it is:",
        answer: "illegal to possess an open container of alcohol in the passenger compartment",
        options: [
            "permissible to drink a moderate amount of alcohol when driving with a passenger",
            "illegal to possess an open container of alcohol in the passenger compartment",
            "illegal to drink from, but permissible to transport, open containers of alcohol in the passenger compartment",
            "acceptable to drink alcoholic beverages if you are not driving"
        ]
    },

    {
        numb: 84,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 85,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 86,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 87,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 88,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 89,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 90,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 91,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 92,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 93,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 94,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 95,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 96,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 97,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 98,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 99,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 100,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 101,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 102,
        questions: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
];