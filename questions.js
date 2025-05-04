const questions = [
    {
      question: "A small UA causes an accident and your crew member loses consciousness. When do you report the accident?",
      answers: {
        A: "No accidents need to be reported.",
        B: "When requested by the UA owner.",
        C: "Within 10 days of the accident."
      },
      correct: "C",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "The accident must be reported to the FAA no later than 10 days after it occurs, per 14 CFR 107.9."
    },
    {
      question: "Under what condition would a small UA not have to be registered before it is operated in the United States?",
      answers: {
        A: "When the aircraft weighs less than 0.55 pounds on takeoff, including everything onboard or attached.",
        B: "When the aircraft has a takeoff weight more than 0.55 pounds but less than 55 pounds, not including fuel.",
        C: "All small UAS must be registered regardless of weight."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Drones weighing less than 0.55 lbs do not require registration. All drones 0.55 lbs or heavier must be registered."
    },
    {
      question: "According to 14 CFR Part 48, when would a small UA owner not be permitted to register it?",
      answers: {
        A: "If the owner is less than 13 years of age.",
        B: "All persons are permitted to register their small UA.",
        C: "If the owner does not have a valid U.S. driver's license."
      },
      correct: "A",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Part 48 requires the owner to be at least 13 years old to register a drone. A younger owner's drone must be registered by someone at least 13."
    },
    {
      question: "Where must a small unmanned aircraft’s serial number be listed when using either standard remote identification or a broadcast module?",
      answers: {
        A: "The aircraft’s Document of Compliance.",
        B: "The manufacturer’s Method of Compliance.",
        C: "The Certificate of Aircraft Registration."
      },
      correct: "C",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Under the Remote ID rule, the drone’s serial number must be listed on its FAA Certificate of Registration:contentReference[oaicite:0]{index=0}."
    },
    {
      question: "A small UA must be operated in a manner which",
      answers: {
        A: "does not endanger the life or property of another.",
        B: "requires more than one visual observer.",
        C: "never exceeds 200 feet AGL."
      },
      correct: "A",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Regulations prohibit operating a drone in a careless or reckless manner that endangers life or property:contentReference[oaicite:1]{index=1}."
    },
    {
      question: "After having dinner and wine, your client asks you to go outside to demonstrate the sUAS’s capabilities. You must",
      answers: {
        A: "pass a self-administered sobriety test before operating the small UA.",
        B: "not operate a small UA within 8 hours of consuming any alcoholic beverage.",
        C: "ensure your visual observer has not consumed alcohol in the previous 12 hours."
      },
      correct: "B",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "14 CFR 107.27 prohibits operation within 8 hours of alcohol consumption (\"bottle to throttle\" rule):contentReference[oaicite:2]{index=2}."
    },
    {
      question: "According to 14 CFR Part 107, what is required to operate a small UA within 30 minutes after official sunset?",
      answers: {
        A: "Use of anti-collision lights.",
        B: "Must be operated in a rural area.",
        C: "Use of a transponder."
      },
      correct: "A",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "During civil twilight (30 minutes after sunset), the drone must have anti-collision lights visible for at least 3 SM:contentReference[oaicite:3]{index=3}."
    },
    {
      question: "During a flight of your small UA, you observe a hot air balloon entering the area. You should",
      answers: {
        A: "yield the right-of-way to the hot air balloon.",
        B: "ensure the UA passes below or ahead of the balloon.",
        C: "expect the hot air balloon to climb above your altitude."
      },
      correct: "A",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Drones must yield right-of-way to all manned aircraft:contentReference[oaicite:4]{index=4}."
    },
    {
      question: "Which publication contains an explanation of airport signs and markings?",
      answers: {
        A: "Aeronautical Information Manual (AIM)",
        B: "Advisory Circulars (AC)",
        C: "Chart Supplements U.S."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Airport signs and markings are explained in the AIM (and in the FAA’s Pilot’s Handbook)."
    },
    {
      question: "Responsibility for collision avoidance in an alert area rests with",
      answers: {
        A: "the controlling agency.",
        B: "all pilots.",
        C: "Air Traffic Control (ATC)."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "In an Alert Area, pilots of both participating and transiting aircraft are equally responsible for collision avoidance:contentReference[oaicite:5]{index=5}."
    },
    {
      question: "When approaching holding lines from the side with the continuous lines, the pilot",
      answers: {
        A: "should not cross the lines without ATC clearance.",
        B: "may continue taxiing across the lines.",
        C: "should taxi until all parts of the aircraft have crossed the lines."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Runway hold short markings consist of two solid and two dashed lines. A pilot must not cross from the solid-line side without clearance:contentReference[oaicite:6]{index=6}."
    },
    {
      question: "The lateral dimensions of Class D airspace are based on",
      answers: {
        A: "the instrument procedures for which the controlled airspace is established.",
        B: "the number of airports within the Class D area.",
        C: "a radius of 5 statute miles from the primary airport."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Class D airspace is individually tailored for each airport, often extending to cover instrument approach paths as needed:contentReference[oaicite:7]{index=7}."
    },
    {
      question: "When a manned aircraft is approaching to land at an airport in Class G airspace without an operating tower, the pilot will",
      answers: {
        A: "enter and fly a traffic pattern at 800 feet AGL.",
        B: "make all turns to the left unless otherwise indicated.",
        C: "fly a left-hand traffic pattern at 800 feet AGL."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Unless otherwise specified, manned aircraft use a standard left-hand traffic pattern at uncontrolled airports."
    },
    {
      question: "Which is true concerning the blue and magenta colors used to depict airports on sectional charts?",
      answers: {
        A: "Airports with control towers (Class B, C, D, or E surface) are shown in blue.",
        B: "Airports with control towers under Class A, B, C airspace are blue; Class D and E are magenta.",
        C: "Airports with control towers under Class C, D, and E airspace are shown in magenta."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Airports with operating control towers are depicted in blue on sectionals; magenta indicates airports without towers."
    },
    {
      question: "Under what conditions, if any, may remote pilots fly through a restricted area?",
      answers: {
        A: "With the controlling agency’s authorization.",
        B: "When flying on airways with an ATC clearance.",
        C: "You cannot fly in restricted areas under any circumstances."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Drones (and all aircraft) may only enter Restricted Areas with permission from the controlling agency."
    },
    {
      question: "The presence of ice pellets at the surface is evidence that there",
      answers: {
        A: "are thunderstorms in the area.",
        B: "is a temperature inversion with freezing rain at a higher altitude.",
        C: "has been a cold frontal passage."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Ice pellets reaching the surface indicate freezing rain is occurring above (a temperature inversion aloft)."
    },
    {
      question: "The minimum distance from clouds required for Part 107 sUAS operations is",
      answers: {
        A: "500 feet below, 2,000 feet horizontally.",
        B: "clear of clouds.",
        C: "500 feet above, 1,000 feet horizontally."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Drone pilots must keep at least 500 ft below clouds and 2,000 ft away horizontally (with 3 SM visibility):contentReference[oaicite:8]{index=8}."
    },
    {
      question: "What is the best way for a remote pilot to determine the likelihood of local fog formation?",
      answers: {
        A: "Monitor the wind conditions to ensure the wind speed is not increasing.",
        B: "Monitor the barometric pressure to ensure that it is not decreasing.",
        C: "Monitor the temperature/dew point spread."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "A small temperature/dewpoint spread (temperature close to dewpoint) indicates high humidity and likely fog formation:contentReference[oaicite:9]{index=9}."
    },
    {
      question: "Which weather phenomenon is always associated with a thunderstorm?",
      answers: {
        A: "Heavy rain.",
        B: "Hail.",
        C: "Lightning."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "By definition, every thunderstorm has lightning (and thunder)."
    },
    {
      question: "What effect does high density altitude have on the efficiency of a UA propeller?",
      answers: {
        A: "Density altitude does not affect propeller efficiency.",
        B: "Propeller efficiency is increased.",
        C: "Propeller efficiency is decreased."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "High density altitude (thin air) reduces propeller efficiency, yielding less thrust."
    },
    {
      question: "What are the characteristics of a moist, unstable air mass?",
      answers: {
        A: "Turbulence and showery precipitation.",
        B: "Poor visibility and smooth air.",
        C: "Haze and smoke."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Unstable, moist air leads to cumulus clouds, turbulence, and showery (intermittent) precipitation."
    },
    {
      question: "In which environment is aircraft structural ice most likely to have the highest accumulation rate?",
      answers: {
        A: "Cumulus clouds with below-freezing temperatures.",
        B: "Freezing rain.",
        C: "Freezing drizzle."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Freezing rain can cause very rapid accumulation of clear ice on aircraft structures."
    },
    {
      question: "One weather phenomenon that will always occur when flying across a front is a change in",
      answers: {
        A: "wind direction.",
        B: "type of precipitation.",
        C: "stability of the air mass."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "A wind direction shift is a reliable indicator of frontal passage."
    },
    {
      question: "Which characteristic is a stable air mass most likely to have?",
      answers: {
        A: "Showery precipitation.",
        B: "Poor surface visibility.",
        C: "Turbulent air."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Stable air tends to feature stratiform clouds or fog, poor visibility, and smooth air."
    },
    {
      question: "What is the expected duration of an individual microburst?",
      answers: {
        A: "Two minutes with maximum winds lasting approximately 1 minute.",
        B: "One microburst may continue for as long as 2 to 4 hours.",
        C: "Seldom longer than 15 minutes from the time the burst strikes the ground until dissipation."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Microbursts are very short-lived, usually lasting 5–15 minutes from onset to dissipation."
    },
    {
      question: "When loading cameras or other equipment on an sUAS, mount the items in a manner that:",
      answers: {
        A: "Does not adversely affect the center of gravity.",
        B: "Is visible to the visual observer or other crew members.",
        C: "Can be easily removed without the use of tools."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Follow the manufacturer’s loading instructions so the aircraft’s center of gravity (CG) remains within limits:contentReference[oaicite:10]{index=10}."
    },
    {
      question: "Which of the following is true regarding the weight and balance of small unmanned aircraft?",
      answers: {
        A: "Operations outside weight and balance limitations may result in loss of control.",
        B: "CG cannot change during the flight.",
        C: "Lateral CG is not important to small unmanned aircraft operations."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "If you exceed the drone’s weight or balance limits, it may become unstable or uncontrollable."
    },
    {
      question: "A stall occurs when the smooth airflow over the unmanned aircraft’s wing/propeller(s) is disrupted and the lift reduces rapidly. This is caused when the wing/propeller(s)",
      answers: {
        A: "exceeds the maximum allowable operating weight.",
        B: "exceeds the critical angle of attack.",
        C: "exceeds the maximum speed."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Stalls happen when the wing exceeds its critical angle of attack, causing a sudden loss of lift."
    },
    {
      question: "Maximum endurance is obtained at the point of minimum power to maintain the aircraft",
      answers: {
        A: "in a long-range descent.",
        B: "in steady, level flight.",
        C: "at its slowest possible indicated airspeed."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "For the longest flight time (endurance), fly at the speed where the power required is minimal to maintain level flight."
    },
    {
      question: "When range and economy of operation are the principal goals, the remote pilot must ensure that the sUAS will be operated at the recommended",
      answers: {
        A: "long-range cruise performance.",
        B: "specific endurance.",
        C: "equivalent airspeed."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "To maximize range (distance), operate the aircraft at its recommended cruise settings for best range."
    },
    {
      question: "What is the best source for sUAS performance data and information?",
      answers: {
        A: "Pilot reports.",
        B: "Estimates based on similar systems.",
        C: "Manufacturer publications."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Always refer to the drone manufacturer’s published performance data and guidelines."
    },
    {
      question: "What effect does an uphill terrain slope have on launch performance?",
      answers: {
        A: "Increases launch distance.",
        B: "Increases launch speed.",
        C: "Decreases launch distance."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Launching uphill is like taking off uphill — it will take more distance to gain the same altitude."
    },
    {
      question: "When operating an unmanned aircraft, the remote PIC should consider that the load factor on the aircraft may be increased anytime:",
      answers: {
        A: "the CG is shifted rearward to the aft limit.",
        B: "the gross weight is reduced.",
        C: "the aircraft is subjected to maneuvers other than straight-and-level flight."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Any turn or bank or acceleration increases the load factor (G-force) on the drone compared to straight-and-level flight."
    },
    {
      question: "The most critical conditions of launch performance are the result of some combination of high gross weight, altitude, temperature and",
      answers: {
        A: "obstacles surrounding the launch site.",
        B: "power plant malfunctions.",
        C: "unfavorable wind."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "High weight, high density altitude (thin air), and an unfavorable wind (such as a tailwind) together make takeoff/launch most difficult."
    },
    {
      question: "Before each flight the remote PIC must ensure that:",
      answers: {
        A: "objects carried on the sUAS are secure.",
        B: "ATC has granted clearance.",
        C: "the site supervisor has approved the flight."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "It is the PIC’s duty to ensure the drone is safe to fly, including that any payload is properly secured."
    },
    {
      question: "A professional wildlife photographer operates an sUAS from a moving truck to capture aerial images of migrating birds in remote wetlands. The driver of the truck does not serve any crew member role in the operation. Is this sUAS operation in compliance with 14 CFR Part 107?",
      answers: {
        A: "Compliant with Part 107.",
        B: "Not compliant with Part 107.",
        C: "Not compliant with state and local traffic laws."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Part 107 allows operation from a moving vehicle in a sparsely populated area as long as the driver is not part of the flight crew:contentReference[oaicite:11]{index=11}."
    },
    {
      question: "Remote pilots are required to complete the following operational area surveillance prior to the sUAS flight:",
      answers: {
        A: "Make a plan to keep non-participants in viewing distance for the whole operation.",
        B: "Select an operational area that is populated.",
        C: "Keep the operational area free of and at an appropriate distance from all non-participants."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Before flight, ensure the operating area is clear of any non-participating persons or property that could be at risk."
    },
    {
      question: "Personnel at an outdoor concert venue use an sUAS to drop promotional t-shirts and CDs over the audience. Is this sUAS operation in compliance with 14 CFR 107?",
      answers: {
        A: "No, unless authorized by the venue.",
        B: "Yes, it is compliant with Part 107.",
        C: "No, it is not compliant with Part 107."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "This operation violates Part 107: you cannot fly over non-participants without proper waiver, nor drop objects in a hazardous manner:contentReference[oaicite:12]{index=12}."
    },
    {
      question: "Which of the following crewmembers must be used during Part 107 sUAS operations?",
      answers: {
        A: "Remote PIC.",
        B: "Remote PIC and Visual Observer.",
        C: "Remote PIC, Visual Observer, and Person manipulating the controls."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "The only required crewmember is the Remote Pilot in Command. A visual observer or other crew are optional:contentReference[oaicite:13]{index=13}."
    },
    {
      question: "How many sUAS may the remote PIC operate at a time?",
      answers: {
        A: "5",
        B: "1",
        C: "No more than 2"
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "A remote pilot may only operate one unmanned aircraft at a time under Part 107:contentReference[oaicite:14]{index=14}."
    },
    {
      question: "“Unmanned aircraft” is defined as a device operated",
      answers: {
        A: "during search and rescue operations other than by the public.",
        B: "without the possibility of direct human intervention from within or on the aircraft.",
        C: "for hobby and recreational use when not certified."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "An unmanned aircraft is an aircraft operated with no possibility of direct human intervention from inside or on it:contentReference[oaicite:15]{index=15}."
    },
    {
      question: "Under what conditions may objects be dropped from the sUAS?",
      answers: {
        A: "If prior permission is received from the FAA.",
        B: "In an emergency.",
        C: "If precautions are taken to avoid injury or damage to persons or property on the surface."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "You may release objects from the drone only if it will not create an undue hazard to people or property (no waiver required):contentReference[oaicite:16]{index=16}."
    },
    {
      question: "When an ATC clearance has been obtained, no remote PIC may deviate from that clearance, unless that pilot obtains an amended clearance. The one exception to this regulation is",
      answers: {
        A: "an emergency.",
        B: "when the clearance states “at pilot’s discretion.”",
        C: "if the clearance contains a restriction."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "No pilot may deviate from an ATC clearance except in an emergency:contentReference[oaicite:17]{index=17}."
    },
    {
      question: "According to 14 CFR part 107, how may a Remote Pilot in Command operate an unmanned aircraft in Class C airspace?",
      answers: {
        A: "The Remote PIC must have prior authorization from the ATC facility having jurisdiction over that airspace.",
        B: "The Remote PIC must monitor the ATC frequency from launch to recovery.",
        C: "The Remote PIC must contact the ATC facility after launching the unmanned aircraft."
      },
      correct: "A",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Operations in Class B, C, or D (or surface E) airspace require prior ATC authorization:contentReference[oaicite:18]{index=18}."
    },
    {
      question: "Which publication or resource provides the most comprehensive information on a given airport (e.g., runway lengths, facilities, operations)?",
      answers: {
        A: "The Chart Supplements U.S. (formerly Airport/Facility Directory).",
        B: "Notices to Airmen (NOTAMs).",
        C: "Terminal Area Charts (TACs)."
      },
      correct: "A",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "The FAA Chart Supplement (A/FD) contains detailed data on airports, beyond what sectional charts or NOTAMs provide."
    },
    {
      question: "After landing at a tower-controlled airport, a pilot should contact ground control",
      answers: {
        A: "when advised by the tower.",
        B: "prior to turning off the runway.",
        C: "after reaching a taxiway that leads directly to the parking area."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "On a towered airport, remain on tower frequency until told to contact Ground. Only switch to Ground when instructed."
    },
    {
      question: "Which of the following events is considered a flyaway?",
      answers: {
        A: "Unmanned aircraft does not respond to control inputs and does not execute known lost link maneuvers.",
        B: "Loss of the link between the Remote PIC and the unmanned aircraft.",
        C: "Loss of communication link between the Remote PIC and ATC."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "A “flyaway” is when the drone is not under control and fails to follow preprogrammed lost-link procedures."
    },
    {
      question: "Fatigue can be either",
      answers: {
        A: "physiological or psychological.",
        B: "physical or mental.",
        C: "acute or chronic."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Fatigue is generally categorized as being either acute or chronic in nature."
    },
    {
      question: "A common cause of sUAS flyaway events is",
      answers: {
        A: "frequency interference.",
        B: "loss of GPS signals.",
        C: "persons standing close to the control station antenna."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "One of the most frequent causes of drone flyaways is loss of GPS (navigation) signals."
    },
    {
      question: "You have just landed at a towered airport and the tower tells you to contact ground control when clear of the runway. You are considered clear of the runway when",
      answers: {
        A: "the aircraft cockpit is clear of the hold line.",
        B: "the tail of the aircraft is clear of the runway edge.",
        C: "all parts of the aircraft have crossed the hold line."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "“Clear of the runway” means every part of your aircraft has crossed the runway’s hold-short line."
    },
    {
      question: "Which of the following sources of information should you consult first when determining what maintenance should be performed on an sUAS or its components?",
      answers: {
        A: "Local pilot best practices.",
        B: "14 CFR Part 107.",
        C: "Manufacturer guidance."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Always follow the drone manufacturer’s maintenance recommendations and schedule first."
    },
    {
      question: "What is the best way for the Remote PIC to minimize the risk of radio frequency interference during sUAS operations?",
      answers: {
        A: "Never transmit on aviation frequency ranges during flight operations.",
        B: "Monitor frequency use with a spectral analyzer.",
        C: "Avoid the use of cell phones in the vicinity of the control station."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Using a spectrum analyzer to identify and avoid conflicting frequencies is the best way to prevent RF interference."
    },
    {
      question: "Under what condition should the operator of a small UA establish a scheduled maintenance protocol?",
      answers: {
        A: "When the manufacturer does not provide a maintenance schedule.",
        B: "When the FAA requires you to, after an accident.",
        C: "sUAS do not require any maintenance schedule."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "If the manufacturer provides no maintenance plan, the operator should set up their own routine maintenance program【54†】."
    },
    {
      question: "During the preflight inspection, who is responsible for determining whether the aircraft is safe for flight?",
      answers: {
        A: "The owner or operator.",
        B: "The remote pilot-in-command.",
        C: "The certificated mechanic who performed the annual inspection."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "The Remote PIC must ensure the small UAS is in a condition for safe flight before takeoff (this is part of the PIC’s responsibility)."
    },
    {
      question: "Which would most likely result in hyperventilation?",
      answers: {
        A: "The excessive consumption of alcohol.",
        B: "Emotional tension, anxiety, or fear.",
        C: "An extremely slow rate of breathing and insufficient oxygen."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Stress, fear, or anxiety can cause a pilot to breathe too rapidly (hyperventilate), leading to dizziness or unconsciousness."
    },
    {
      question: "Upon GPS signal loss, the Remote PIC should immediately",
      answers: {
        A: "contact ATC and declare an emergency.",
        B: "perform the planned lost link contingency procedure.",
        C: "continue to operate the sUAS normally, noting any mode or control changes if GPS is lost."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "If the drone loses GPS, execute your pre-planned lost link procedures (e.g., RTH or manual control) as outlined in your contingency plan."
    },
    {
      question: "Which will almost always affect your ability to fly?",
      answers: {
        A: "Prescription analgesics and antihistamines.",
        B: "Over-the-counter analgesics and antihistamines.",
        C: "Antibiotics and anesthetic drugs."
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Many common over-the-counter pain relievers and allergy medications can impair judgment and reaction time, just like prescription drugs."
    },
    {
      question: "What antidotal phrase can help reverse the hazardous attitude of “Anti-Authority”?",
      answers: {
        A: "“Rules do not apply to this situation.”",
        B: "“I know what I am doing.”",
        C: "“Follow the rules.”"
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "The antidote to an Anti-Authority attitude is reminding oneself: “Follow the rules—they’re usually right.”"
    },
    {
      question: "Which of the following lithium batteries should NOT be used?",
      answers: {
        A: "A battery with a bulge on one of the sides of its case.",
        B: "A partially discharged battery that is warm from recent use.",
        C: "A new battery that has been charged only once (needs several cycles first)."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Any LiPo battery that is swollen or bulging is unsafe and should be removed from service."
    },
    {
      question: "When flying HAWK N666CB, the proper phraseology for initial contact with Whitted ATC Tower is",
      answers: {
        A: "“Whitted, HAWK SIX SIX SIX CEE BEE requesting to operate within Class D, west of the field.”",
        B: "“Whitted Tower, HAWK SIX SIX SIX CHARLIE BRAVO, five NM west of the airport, request permission to enter Class D airspace for unmanned aircraft operations below 400 AGL, three NM west of the airport.”",
        C: "“Whitted Tower, Triple Six Charlie Bravo, five NM west, operating in Class D below four hundred AGL west of the airport.”"
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Use correct ATC call-up format: Facility name, full callsign with proper phonetics, position and request. For example: “Whitted Tower, HAWK Six Six Six Charlie Bravo, five miles west of the airport…”"
    },
    {
      question: "Who is responsible for determining whether a pilot is fit to fly for a particular flight even though he or she holds a current medical certificate?",
      answers: {
        A: "The FAA.",
        B: "The medical examiner.",
        C: "The pilot."
      },
      correct: "C",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "It is always the pilot’s own responsibility to decide if they are fit to fly, regardless of having a valid medical."
    },
    {
      question: "What action should be taken by the Remote PIC during an sUAS flyaway event?",
      answers: {
        A: "Immediately notify any/all crewmembers, bystanders, and ATC (if applicable).",
        B: "Immediately notify the NTSB.",
        C: "Immediately notify any/all crewmembers, local law enforcement personnel, and bystanders."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "In a flyaway, the Remote PIC’s first step is to alert crew and people nearby (and ATC if in controlled airspace) so they can take appropriate safety action."
    },
    {
      question: "Under what condition should the operator of an sUAS establish a scheduled maintenance protocol?",
      answers: {
        A: "When the manufacturer does not provide a maintenance schedule.",
        B: "When the FAA requires it after an accident.",
        C: "There is no need for scheduled maintenance on sUAS."
      },
      correct: "A",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "If the manufacturer gives no maintenance schedule, the operator should set one up based on component lifetimes and known failure rates."
    },
    {
      question: "What actions should the operator of an sUAS take if the manufacturer does not provide information about scheduled maintenance?",
      answers: {
        A: "Contact the FAA for a minimum equipment list.",
        B: "Establish a scheduled maintenance protocol.",
        C: "Contact the NTSB for component failure rates for the sUAS."
      },
      correct: "B",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "In absence of manufacturer guidance, the operator should create and follow a regular maintenance schedule (per AC 107-2 recommendations)."
    },
    {
      question: "According to 14 CFR part 107, the responsibility to inspect the small UAS to ensure it is in a safe operating condition rests with the",
      answers: {
        A: "remote pilot-in-command.",
        B: "visual observer.",
        C: "owner of the small UAS."
      },
      correct: "A",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "14 CFR 107.19 makes the Remote PIC directly responsible for the operation, including ensuring the drone is safe to fly before launch."
    },
    {
      question: "The refusal of a remote PIC to submit to a blood alcohol test when requested by a law enforcement officer",
      answers: {
        A: "is grounds for suspension or revocation of their remote pilot certificate.",
        B: "can be delayed for up to 8 hours after the request.",
        C: "has no consequences to the remote pilot certificate."
      },
      correct: "A",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Refusing a law enforcement request for drug/alcohol testing is grounds for revocation of your certificate (14 CFR 107.59)."
    },
    {
      question: "To conduct Category 1 operations, a remote PIC must use a small unmanned aircraft that weighs",
      answers: {
        A: "0.55 pounds or less.",
        B: "0.65 pounds or less.",
        C: "0.75 pounds or less."
      },
      correct: "A",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Category 1 drones (for operations over people) must weigh 0.55 lbs (250g) or less including everything onboard."
    },
    {
      question: "Which Category of small unmanned aircraft must have an airworthiness certificate issued by the FAA?",
      answers: {
        A: "Category 4.",
        B: "Category 3.",
        C: "Category 2."
      },
      correct: "A",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Category 4 operations (sUA over people) require a standard airworthiness certificate issued by the FAA."
    },
    {
      question: "What must a person manipulating the controls of a small unmanned aircraft do if the standard remote identification fails during a flight?",
      answers: {
        A: "Land the aircraft as soon as practicable.",
        B: "Notify the nearest FAA Air Traffic facility.",
        C: "Activate the aircraft’s navigation lights."
      },
      correct: "A",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "If Remote ID equipment fails in flight, you must land your drone as soon as safely possible (per 14 CFR 89.115)."
    },
    {
      question: "(Refer to FAA-CT-8080-2H, Figure 25, area 3.) The floor of Class B airspace at Dallas Executive (RBD) is",
      answers: {
        A: "at the surface.",
        B: "3,000 feet MSL.",
        C: "3,100 feet MSL."
      },
      correct: "B",
      figure: "Figure25.jpg",
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "On the sectional, Dallas Executive’s Class B floor is shown as [30]—meaning Class B begins at 3000 ft MSL:contentReference[oaicite:19]{index=19}."
    },
    {
      question: "(Refer to FAA-CT-8080-2H, Figure 23, area 3.) What is the floor of the Savannah Class C airspace at the shelf area (outer circle)?",
      answers: {
        A: "1,300 feet AGL.",
        B: "1,300 feet MSL.",
        C: "1,700 feet MSL."
      },
      correct: "B",
      figure: "Figure23.jpg",
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "On the sectional chart, the number “130” indicates the Class C shelf floor is 1300 ft MSL (not AGL):contentReference[oaicite:20]{index=20}."
    },
    {
      question: "(Refer to FAA-CT-8080-2H, Figure 20, area 5.) How would a remote PIC “CHECK NOTAMS” as noted in the CAUTION box regarding the unmarked balloon?",
      answers: {
        A: "By using the B4UFLY mobile app.",
        B: "By obtaining a briefing via an FAA Flight Service station (e.g., 1800WXBRIEF).",
        C: "By contacting the nearest ATC facility."
      },
      correct: "B",
      figure: "Figure20.jpg",
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Pilots can check NOTAMs through an official FAA source like 1800WXBRIEF (Flight Service) or FAA’s NOTAM website."
    },
    {
      question: "(Refer to FAA-CT-8080-2H, Figure 20, area 3.) You are operating 4 SM southeast of Elizabeth City Regional Airport (ECG) with ATC authorization. What hazard is indicated in that area?",
      answers: {
        A: "High density military operations in the vicinity.",
        B: "An unmarked balloon on a cable up to 3,008 feet AGL.",
        C: "An unmarked balloon on a cable up to 3,008 feet MSL."
      },
      correct: "C",
      figure: "Figure20.jpg",
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "The sectional chart notation warns of an unmarked balloon on a cable up to 3008 ft MSL (not AGL) in that area."
    },
    {
      question: "(Refer to FAA-CT-8080-2H, Figure 26.) What does the line of latitude at area 4 measure?",
      answers: {
        A: "The degrees of latitude east and west of the Prime Meridian.",
        B: "The degrees of latitude north and south from the equator.",
        C: "The degrees of latitude east and west of the line that passes through Greenwich, England."
      },
      correct: "B",
      figure: "Figure26.jpg",
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Lines of latitude run east-west around the globe and measure degrees north or south of the equator."
    },
    {
      question: "(Refer to FAA-CT-8080-2H, Figure 24, area 6.) What type of airport is Card Airport?",
      answers: {
        A: "Public towered.",
        B: "Public non-towered.",
        C: "Private non-towered."
      },
      correct: "C",
      figure: "Figure24.jpg",
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "On the sectional, Card Airport is marked with “(Pvt)” and has a magenta symbol, indicating a private airport without a tower【29†】."
    },
    {
      question: "Emergency planning and communication: When using a small UA in a commercial operation, who is responsible for briefing the participants about emergency procedures?",
      answers: {
        A: "The FAA inspector-in-charge.",
        B: "The lead visual observer.",
        C: "The remote PIC."
      },
      correct: "C",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "As pilot in command, you must brief all crew and participants on emergency procedures before the operation."
    },
    {
      question: "To avoid a possible collision with a manned airplane, you estimate that your small UA climbed to an altitude greater than 600 feet AGL. To whom must you report the deviation?",
      answers: {
        A: "Air Traffic Control.",
        B: "The National Transportation Safety Board (NTSB).",
        C: "Upon request of the FAA."
      },
      correct: "C",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "There is no automatic reporting requirement for altitude deviations under Part 107. However, you must report it to the FAA if they specifically request a report."
    },
    {
      question: "What precautions should a Remote PIC take to prevent possible in-flight emergencies when using lithium-based batteries?",
      answers: {
        A: "Store the batteries in a freezer prior to flight to allow proper recharging.",
        B: "Follow the manufacturer’s recommendations for safe battery handling.",
        C: "Allow the battery to charge until it reaches a minimum temperature of 100°F."
      },
      correct: "B",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Always handle and charge LiPo batteries according to the manufacturer’s instructions to reduce fire or power loss risks."
    },
    {
      question: "Safety is an important element for a remote pilot to consider prior to operating an unmanned aircraft system. To prevent the final “link” in the accident chain, a remote pilot must consider which methodology?",
      answers: {
        A: "Crew Resource Management.",
        B: "Safety Management System.",
        C: "Risk Management."
      },
      correct: "C",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Risk management is the process of identifying and mitigating risks (breaking the accident chain) before flight."
    },
    {
      question: "A local TV station has hired a remote pilot to operate their small UA for breaking news. The remote pilot has had multiple near misses and two accidents. What would be a solution for the news station to improve their operating safety culture?",
      answers: {
        A: "Implement a policy of no more than five crashes/incidents within 6 months.",
        B: "No changes needed; sometimes accidents are unavoidable.",
        C: "Recognize hazardous attitudes and develop standard operating procedures that emphasize safety."
      },
      correct: "C",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "The organization should promote a safety culture by addressing hazardous attitudes and instituting strict standard operating procedures (SOPs) focused on safety."
    },
    {
      question: "When adapting Crew Resource Management (CRM) concepts to the operation of a small UA, CRM must be integrated into",
      answers: {
        A: "the flight portion only.",
        B: "all phases of the operation.",
        C: "the communications only."
      },
      correct: "B",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "CRM principles (effective use of all resources and teamwork) should be applied during all phases of the operation: preflight, flight, and postflight."
    },
    {
      question: "When a Remote PIC and a Visual Observer define their roles and responsibilities prior to and during the operation of a small UA, it is an example of good",
      answers: {
        A: "Crew Resource Management.",
        B: "Authoritarian Resource Management.",
        C: "Single-Pilot Resource Management."
      },
      correct: "A",
      figure: null,
      source: "https://pilotinstitute.com/quiz/part-107-practice-exam/",
      explanation: "Clearly assigning duties and expectations among crew members is a key element of effective Crew Resource Management (CRM)."
    },
    {
      question: "Identify the hazardous attitude or characteristic a remote pilot displays while taking risks in order to impress others.",
      answers: {
        A: "Impulsivity.",
        B: "Invulnerability.",
        C: "Macho."
      },
      correct: "C",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "The “Macho” attitude is when a pilot takes unnecessary risks to show off or impress others."
    },
    {
      question: "You have been hired as a remote pilot by a local TV news station to film breaking news with a small UA. You expressed a safety concern and the station manager has instructed you to “fly first, ask questions later.” What type of hazardous attitude does this represent?",
      answers: {
        A: "Machismo.",
        B: "Invulnerability.",
        C: "Impulsivity."
      },
      correct: "C",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "“Fly now, ask questions later” exemplifies Impulsivity—acting without thinking or regard for the rules or consequences."
    },
    {
      question: "Which is true regarding the presence of alcohol within the human body?",
      answers: {
        A: "A small amount of alcohol increases visual acuity.",
        B: "Consuming an equal amount of water will speed up alcohol elimination and prevent a hangover.",
        C: "Judgment and decision-making abilities can be adversely affected by even small amounts of alcohol."
      },
      correct: "C",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Even a small blood alcohol content impairs judgment and reaction time. There is no quick remedy; only time eliminates alcohol from the body."
    },
    {
      question: "Which technique should a remote pilot use to scan for traffic?",
      answers: {
        A: "Systematically focus on different segments of the sky for short intervals.",
        B: "Concentrate on relative movement detected in the peripheral vision area.",
        C: "Continuously scan the sky from right to left."
      },
      correct: "A",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Effective scanning is achieved by systematically pausing and searching small sections of sky (about 10° at a time) for at least a second each:contentReference[oaicite:21]{index=21}."
    },
    {
      question: "When preparing for a night flight, what should an sUAS pilot be aware of after using a bright flashlight during preflight inspection?",
      answers: {
        A: "Once adapted to darkness, a person’s eyes are relatively immune to bright lights.",
        B: "It takes approximately 30 minutes for a person’s eyes to fully adapt to darkness.",
        C: "The person should use a flashlight equipped with LED lights to facilitate night vision."
      },
      correct: "B",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "After exposure to bright light, it takes about 30 minutes for the human eye to readjust fully to darkness."
    },
    {
      question: "When may a person who does not hold a remote pilot certificate operate a UAS for hire?",
      answers: {
        A: "When under the direct supervision of a Remote PIC who is immediately available to take control if necessary.",
        B: "Only when the flight operations have been approved by a certificated sUAS pilot.",
        C: "When directly supervised by a visual observer."
      },
      correct: "A",
      figure: null,
      source: "https://pilotinstitute.com/quiz/part-107-practice-exam/",
      explanation: "A non-certificated person may operate a drone commercially only if a certificated Remote Pilot is directly supervising and ready to take control."
    },
    {
      question: "(Refer to the figure.) You have received authorization to operate your sUAS near the towers just west of the city of Jamestown, near Jamestown Regional Airport (JMS). Which radio frequency could be used to monitor manned aircraft flying into and out of the airport?",
      answers: {
        A: "121.0",
        B: "123.0",
        C: "118.425"
      },
      correct: "B",
      figure: "Jamestown-Airport.png",
      source: "https://pilotinstitute.com/quiz/part-107-practice-exam/",
      explanation: "The sectional chart for Jamestown shows “CTAF 123.0” (marked by a C). 123.0 MHz is the common traffic advisory frequency to monitor local traffic."
    },
    {
      question: "(Refer to the figure.) Winchester Municipal (KBGF) is in the Central Time Zone (UTC–6 standard time). The current time is 1200Z. What is the local time in February (Central Standard Time)?",
      answers: {
        A: "0500 CST",
        B: "1200 CST",
        C: "0600 CST"
      },
      correct: "C",
      figure: "Chart-Supplement.png",
      source: "https://pilotinstitute.com/quiz/part-107-practice-exam/",
      explanation: "Central Standard Time is 6 hours behind UTC. 1200Z minus 6 hours equals 0600 CST."
    }
  ];
  