const questions = [
  {
    id: 1,
    question: "A small unmanned aircraft causes an accident in which a person on your crew loses consciousness. Under 14 CFR Part 107, when must you report this accident to the FAA?",
    answers: {
      A: "No report is required for any sUAS accident",
      B: "Only if requested by the aircraft owner",
      C: "Within 10 days of the accident"
    },
    correct: "C",
    explanation: "The remote PIC must report an accident to the FAA within 10 calendar days if it results in serious injury or loss of consciousness:contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}. In this scenario, a crew member lost consciousness, so a report is required within 10 days.",
    tags: ["regulations", "safety"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 2,
    question: "Under what condition would a small unmanned aircraft NOT have to be registered before operation in the United States?",
    answers: {
      A: "When the aircraft weighs less than 0.55 lbs (250 g) on takeoff, including everything on board or attached",
      B: "When the aircraft’s takeoff weight is more than 0.55 lbs but less than 55 lbs, excluding fuel and attachments",
      C: "All small UAS must be registered regardless of weight before, during, or after the flight"
    },
    correct: "A",
    explanation: "Drones that weigh less than 0.55 pounds (250 grams) are exempt from FAA registration:contentReference[oaicite:2]{index=2}. Any small unmanned aircraft 0.55 lbs or heavier (up to 55 lbs) must be registered. Therefore, an sUAS under 0.55 lbs does not require registration.",
    tags: ["regulations", "registration"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 3,
    question: "According to 14 CFR Part 48, when must a person register a small UA with the FAA?",
    answers: {
      A: "Any small UAS weighing more than 0.55 lbs must be registered, regardless of its intended use",
      B: "Only when the small UA is being used for commercial (non-recreational) operations",
      C: "Registration is not required if flying exclusively in Class G (uncontrolled) airspace"
    },
    correct: "A",
    explanation: "All small unmanned aircraft over 0.55 pounds (250 g) and less than 55 pounds must be registered with the FAA, whether flown recreationally or commercially:contentReference[oaicite:3]{index=3}:contentReference[oaicite:4]{index=4}. Registration is not tied to airspace or purpose – it’s required based on weight.",
    tags: ["regulations", "registration"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 4,
    question: "According to 14 CFR Part 48, when would a small UA owner NOT be permitted to register the aircraft?",
    answers: {
      A: "If the owner is under 13 years of age",
      B: "If the small UA will only be flown privately and not for business",
      C: "If the owner does not hold a valid U.S. driver’s license"
    },
    correct: "A",
    explanation: "Under Part 48, an owner must be at least 13 years old to register a drone. If the owner is younger than 13, a person 13 or older must register it on their behalf:contentReference[oaicite:5]{index=5}:contentReference[oaicite:6]{index=6}. Registration is not limited by purpose of flight or driver’s license status.",
    tags: ["regulations", "registration"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 5,
    question: "Where must a small unmanned aircraft’s serial number be listed when using either standard Remote ID or a Remote ID broadcast module?",
    answers: {
      A: "On the aircraft’s FAA Certificate of Registration",
      B: "In the manufacturer’s approved Method of Compliance (MOC)",
      C: "In the aircraft’s Remote ID Declaration of Compliance"
    },
    correct: "A",
    explanation: "Under the Remote ID rule, the unique identifier (serial number) of the drone must be listed on its FAA Certificate of Aircraft Registration:contentReference[oaicite:7]{index=7}:contentReference[oaicite:8]{index=8}. This applies whether using built-in Standard Remote ID or an add-on broadcast module.",
    tags: ["regulations", "remote ID"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 6,
    question: "A small UA must be operated in a manner which:",
    answers: {
      A: "Does not endanger the life or property of another",
      B: "Always requires at least one visual observer in addition to the Remote PIC",
      C: "Never exceeds 200 feet AGL under any circumstances"
    },
    correct: "A",
    explanation: "The foundational rule for Remote PICs is to not operate in a way that endangers other people’s lives or property. Part 107.19 makes the remote pilot directly responsible for safety:contentReference[oaicite:9]{index=9}. Additional observers are not mandatory unless needed to maintain line-of-sight, and the maximum altitude is 400 ft AGL (with exceptions), not 200 ft.",
    tags: ["regulations", "safety"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 7,
    question: "You plan to release small objects (like golf balls for a demo) from your drone at 100 feet AGL. What must you ensure when conducting this operation under Part 107?",
    answers: {
      A: "No undue hazard will be created to persons or property on the ground",
      B: "All objects land within a 10-foot radius of the intended point",
      C: "Property damage does not exceed $300"
    },
    correct: "A",
    explanation: "Part 107.23 explicitly prohibits dropping anything from a small UAS in a manner that creates an undue hazard to people or property:contentReference[oaicite:10]{index=10}. There is no specific dollar limit on damage in that rule – any hazardous drop is not allowed. So, ensure the drop won’t harm anyone or anything on the ground.",
    tags: ["operations", "safety"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 8,
    question: "After consuming wine with dinner, your client asks for a drone demonstration in the yard. What does Part 107 require of you regarding alcohol?",
    answers: {
      A: "Pass a self-administered sobriety test before operating",
      B: "Do not operate a small UA within 8 hours of consuming any alcoholic beverage",
      C: "Ensure your visual observer has not consumed alcohol in the previous 12 hours"
    },
    correct: "B",
    explanation: "Part 107 adopts the FAA’s standard “8 hours bottle-to-throttle” rule:contentReference[oaicite:11]{index=11}:contentReference[oaicite:12]{index=12}. A remote pilot may not operate a drone within 8 hours of alcohol consumption, regardless of feeling sober. There’s also a 0.04% BAC limit and no operation allowed if still under the influence.",
    tags: ["regulations", "physiology"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 9,
    question: "According to Part 107 daylight operation rules, what is required for a small UAS flight at night or during civil twilight?",
    answers: {
      A: "Use of anti-collision lights visible for at least 3 statute miles",
      B: "A Certificate of Waiver specifically authorizing night operations",
      C: "Maintaining continuous two-way radio communication with the nearest control tower"
    },
    correct: "A",
    explanation: "Flying at night or during civil twilight (30 minutes before sunrise/after sunset) is permitted under Part 107 only if the drone has anti-collision lights visible for at least 3 SM:contentReference[oaicite:13]{index=13}. A waiver is no longer required for night flight (as of 2021), but proper lighting is mandatory. Radio contact with ATC is not required unless in controlled airspace with authorization.",
    tags: ["regulations", "night operations"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 10,
    question: "A professional photographer operates an sUAS from a moving vehicle (a truck) to film wildlife in a remote, sparsely populated wetland. The truck’s driver is not acting as a crew member. Is this operation compliant with Part 107 rules?",
    answers: {
      A: "Yes, it is compliant with Part 107 in this scenario",
      B: "No, it is not compliant with Part 107",
      C: "No, it violates state/local traffic laws for moving vehicles"
    },
    correct: "A",
    explanation: "Operating a drone from a moving vehicle is allowed under Part 107 only if it’s in a sparsely populated area and no one in the vehicle is required as part of the flight crew:contentReference[oaicite:14]{index=14}. In this case, the area is remote (sparsely populated) and the driver is not a required crew member, so it complies with 14 CFR 107.25.",
    tags: ["regulations", "operations"],
    figure: null,
    source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/"
  },
  {
    id: 11,
    question: "How many small unmanned aircraft is a single Remote Pilot in Command allowed to operate at once under Part 107?",
    answers: {
      A: "No more than one sUAS at a time",
      B: "Up to two drones if both remain in line-of-sight",
      C: "As many as the PIC can physically manage with visual observers"
    },
    correct: "A",
    explanation: "A person may not operate or act as PIC or VO for more than one unmanned aircraft operation at the same time:contentReference[oaicite:15]{index=15}. Part 107 limits one pilot to one drone operation at any given moment to ensure proper control and situational awareness.",
    tags: ["regulations", "operations"],
    figure: null,
    source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/"
  },
  {
    id: 12,
    question: "What is the minimum age required to be eligible for a Remote Pilot Certificate under Part 107?",
    answers: {
      A: "13 years old",
      B: "16 years old",
      C: "18 years old"
    },
    correct: "B",
    explanation: "To obtain a Remote Pilot Certificate, an applicant must be at least 16 years of age:contentReference[oaicite:16]{index=16}. (They must also pass the knowledge test and be vetted by TSA.) Age 13 is the minimum to register a drone, but 16 is the minimum to become a certified remote pilot.",
    tags: ["regulations"],
    figure: null,
    source: "https://careeremployer.com/test-prep/practice-tests/faa-part-107-practice-test/"
  },
  {
    id: 13,
    question: "After obtaining your Part 107 Remote Pilot Certificate, how often must you satisfy recurrent training or testing requirements to maintain it?",
    answers: {
      A: "Every 12 months",
      B: "Every 24 months",
      C: "Every 5 years",
    },
    correct: "B",
    explanation: "A Remote Pilot must complete FAA recurrent training (or previously, pass a recurrent test) every 24 calendar months to keep their certificate current:contentReference[oaicite:17]{index=17}. This two-year interval ensures pilots stay up to date on regulations and procedures.",
    tags: ["regulations"],
    figure: null,
    source: "https://careeremployer.com/test-prep/practice-tests/faa-part-107-practice-test/"
  },
  {
    id: 14,
    question: "Before any flight under Part 107, the Remote PIC must ensure that:",
    answers: {
      A: "The small UAS is in a condition for safe operation",
      B: "The control station has a 5G cellular data connection",
      C: "At least two crew members are present (PIC and VO)",
    },
    correct: "A",
    explanation: "The Remote PIC is responsible for conducting a preflight check to ensure the drone is safe to fly:contentReference[oaicite:18]{index=18}. This includes checking hardware, software, and surrounding conditions. A reliable internet connection and a visual observer are not required by Part 107 (VOs are optional; many operations are one-person).",
    tags: ["operations", "safety"],
    figure: null,
    source: "https://www.dronesarpilot.com/exam/faa-sample-test"
  },
  {
    id: 15,
    question: "Who is primarily responsible for ensuring that a small UAS is maintained in an airworthy condition?",
    answers: {
      A: "The owner or operator of the small UAS",
      B: "The remote pilot-in-command",
      C: "The certified mechanic who performed the last repair"
    },
    correct: "B",
    explanation: "Under Part 107, the Remote Pilot in Command is directly responsible for the operation and must ensure the aircraft is safe and airworthy before flight:contentReference[oaicite:19]{index=19}. While owners/operators should maintain their equipment, the PIC has the ultimate responsibility to verify airworthiness prior to each operation.",
    tags: ["regulations", "maintenance"],
    figure: null,
    source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/"
  },
  {
    id: 16,
    question: "Which crewmembers must be present during a Part 107 small UAS operation?",
    answers: {
      A: "At minimum, a Remote Pilot in Command is required (Visual Observers are optional)",
      B: "A Remote PIC and a Visual Observer are both required for every operation",
      C: "A Remote PIC, a Visual Observer, and a person manipulating the controls must all be used",
    },
    correct: "A",
    explanation: "Part 107 requires at least a Remote Pilot in Command for any operation:contentReference[oaicite:20]{index=20}. Other crew members (like visual observers or a separate person manipulating the controls under the PIC’s supervision) are optional and used as needed. Many operations are conducted by the Remote PIC alone, provided they can maintain line-of-sight.",
    tags: ["operations"],
    figure: null,
    source: "https://pilotinstitute.com/part-107-practice-test/"
  },
  {
    id: 17,
    question: "Under Part 107 rules, are you allowed to fly a small UAS over people who are not directly involved in the operation?",
    answers: {
      A: "No, not unless those people are under safe cover (such as a structure or vehicle) or the operation meets criteria of an approved category",
      B: "Yes, as long as you announce a warning to bystanders",
      C: "Yes, if the flight is below 50 feet AGL"
    },
    correct: "A",
    explanation: "Part 107 (107.39) prohibits flights over uninvolved people unless they are under a covered structure/inside a stationary vehicle that would protect them, or the operation has a waiver or qualifies under the new Category 1-4 rules for flight over people:contentReference[oaicite:21]{index=21}. Simply warning people or flying low doesn’t eliminate the risk, so those are not sufficient by themselves.",
    tags: ["regulations", "operations"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 18,
    question: "Which of the following operations would require a prior FAA waiver under Part 107 regulations?",
    answers: {
      A: "Flying a small UAS above 400 feet AGL without being within 400 feet of a structure",
      B: "Flying during civil twilight with anti-collision lights on the sUAS",
      C: "Flying in Class G airspace at an altitude of 200 feet AGL"
    },
    correct: "A",
    explanation: "Part 107 limits altitude to 400 ft AGL unless within 400 ft of a structure:contentReference[oaicite:22]{index=22}. To exceed that 400 ft AGL limit in other cases, a Certificate of Waiver is required. Flying at twilight with proper anti-collision lighting is permitted (no waiver needed), and Class G airspace operations are allowed up to 400 ft AGL by default without special approval.",
    tags: ["regulations", "waivers"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 19,
    question: "While operating your drone, a manned aircraft approaches the area. What should you, the Remote PIC, do?",
    answers: {
      A: "Yield the right-of-way and not pass over or under the manned aircraft",
      B: "Quickly climb above the manned aircraft’s altitude since small UAS are more maneuverable",
      C: "Maintain course and altitude because the manned aircraft will avoid you",
    },
    correct: "A",
    explanation: "Small unmanned aircraft must give way to all manned aircraft at all times:contentReference[oaicite:23]{index=23}. The Remote PIC should immediately yield by maneuvering clear – not climb or assume the manned traffic will move. Part 107 requires always yielding right-of-way to crewed aircraft to prevent collisions.",
    tags: ["operations", "see and avoid"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 20,
    question: "How may a Remote Pilot operate an sUAS in Class D airspace?",
    answers: {
      A: "Only by obtaining prior authorization from the Air Traffic Control (ATC) facility with jurisdiction over that airspace",
      B: "By monitoring the ATC radio frequency and proceeding if no conflicting traffic is heard",
      C: "No ATC permission is required below 400 ft AGL in Class D airspace",
    },
    correct: "A",
    explanation: "Operations in Class B, C, or D controlled airspace (and Class E surface areas) require approval from ATC before the flight:contentReference[oaicite:24]{index=24}:contentReference[oaicite:25]{index=25}. Under Part 107, you must request and receive authorization (often via FAA’s online systems like LAANC) to fly in Class D. Simply monitoring the frequency is not sufficient, and the 400 ft rule doesn’t bypass airspace rules.",
    tags: ["airspace", "regulations"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 21,
    question: "According to 14 CFR Part 107, who is responsible for ensuring that a drone is operated safely and within regulations in controlled airspace?",
    answers: {
      A: "The Remote Pilot in Command",
      B: "Air Traffic Control (ATC)",
      C: "The Visual Observer"
    },
    correct: "A",
    explanation: "The Remote Pilot in Command bears the responsibility for the operation, including regulatory compliance and safety, even when operating with ATC authorization in controlled airspace:contentReference[oaicite:26]{index=26}. ATC may grant access but does not assume responsibility for the drone’s operation. Visual Observers assist the PIC but do not hold responsibility for the flight’s compliance.",
    tags: ["regulations", "airspace"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 22,
    question: "(Refer to FAA-CT-8080-2H, Figure 22, area 2.) At Coeur d’Alene Airport, which frequency should be used as the Common Traffic Advisory Frequency (CTAF) to monitor and announce airport traffic?",
    answers: {
      A: "122.05 MHz",
      B: "135.075 MHz",
      C: "122.8 MHz"
    },
    correct: "C",
    explanation: "On the sectional chart for Coeur d’Alene (Figure 22 area 2), the CTAF is listed as 122.8 MHz:contentReference[oaicite:27]{index=27}. CTAF is the frequency used by pilots to self-announce at non-towered fields. 122.8 MHz is a common CTAF at many airports. 122.05 and 135.075 MHz are not CTAF frequencies at that location.",
    tags: ["airspace", "communications"],
    figure: "Figure22.jpg",
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 23,
    question: "Which technique should a Remote Pilot use to scan the sky for traffic during sUAS operations?",
    answers: {
      A: "Systematically focus on different segments of the sky for short intervals",
      B: "Concentrate on any movement detected in your peripheral vision",
      C: "Continuously scan the sky from right to left in one motion"
    },
    correct: "A",
    explanation: "Effective visual scanning involves systematically moving your eyes in short sections of the sky, pausing briefly to focus in each sector:contentReference[oaicite:28]{index=28}. This lets you detect movement. A continuous sweep or relying on peripheral vision alone can cause you to miss traffic. Scanning in 30-degree segments for a second or two each is recommended.",
    tags: ["operations", "see and avoid"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 24,
    question: "(Refer to FAA-CT-8080-2H, Figure 23, area 3.) What is the floor of the Savannah Class C airspace at the outer shelf area (outer dashed circle)?",
    answers: {
      A: "1,300 feet AGL",
      B: "1,300 feet MSL",
      C: "1,700 feet MSL"
    },
    correct: "B",
    explanation: "On sectional charts, Class C airspace floors are given in MSL. The figure shows “13” within the outer ring, meaning 1,300’ MSL is the floor of Class C in that shelf:contentReference[oaicite:29]{index=29}. (The primary surface area goes to the surface, and the shelf starts at 1,300’ MSL.) 1,300 AGL is a distractor – always check whether altitudes are listed as MSL or AGL.",
    tags: ["airspace", "sectional"],
    figure: "Figure23.jpg",
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 25,
    question: "(Refer to FAA-CT-8080-2H, Figure 20, area 3.) With ATC authorization, you are operating your small UAS about 4 SM southeast of Elizabeth City Regional Airport (ECG). What specific hazard is indicated in that area on the sectional chart?",
    answers: {
      A: "High-density military operations in the vicinity",
      B: "An unmarked balloon on a cable up to 3,008 feet AGL",
      C: "An unmarked balloon on a cable up to 3,008 feet MSL"
    },
    correct: "B",
    explanation: "Figure 20 shows a chart notation (a restricted area and caution symbol) southeast of ECG. It warns of an unmarked balloon on a cable up to 3,008 feet **AGL**:contentReference[oaicite:30]{index=30}. Such a tethered balloon is a serious hazard. (3,008 feet AGL at that location corresponds to a higher MSL altitude, but charts typically list the AGL height for obstruction hazards.)",
    tags: ["airspace", "sectional"],
    figure: "Figure20.jpg",
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 26,
    question: "(Refer to FAA-CT-8080-2H, Figure 21.) You plan to operate in the Devil’s Lake West MOA (Military Operations Area), east of area 2 on the chart. How can you find out if that MOA is active (hot) at the time of your planned flight?",
    answers: {
      A: "By checking the sectional chart legend for MOA activity times",
      B: "This information is available in the Small UAS facility map database",
      C: "By consulting the Military Operations Directory or sectional chart notes",
    },
    correct: "C",
    explanation: "To determine if an MOA is active, consult the sectional chart’s special use airspace information (often on the chart margins or in the Chart Supplement):contentReference[oaicite:31]{index=31}. The sectional notes or directory will list the MOA’s scheduled active times or the controlling agency to contact. The small UAS facility maps show airspace ceilings for authorizations, not real-time MOA status.",
    tags: ["airspace"],
    figure: "Figure21.jpg",
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 27,
    question: "The most comprehensive information on a given airport is provided by which publication or resource?",
    answers: {
      A: "The Chart Supplement U.S. (formerly Airport/Facility Directory)",
      B: "Notices to Airmen (NOTAMs)",
      C: "Terminal Area Chart (TAC)"
    },
    correct: "A",
    explanation: "The FAA Chart Supplement (formerly A/FD) contains detailed data on each airport (communications, runways, services, hours, etc.):contentReference[oaicite:32]{index=32}. NOTAMs provide time-critical temporary info (like closures) but not comprehensive details. Terminal Area Charts are sectional maps of Class B areas, not detailed directories of airport information.",
    tags: ["airspace", "reference"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 28,
    question: "Identify the hazardous attitude exhibited by a remote pilot who takes risks in order to impress others:",
    answers: {
      A: "Impulsivity",
      B: "Invulnerability",
      C: "Macho"
    },
    correct: "C",
    explanation: "The “Macho” attitude is characterized by taking risks to show off or impress others:contentReference[oaicite:33]{index=33}. This hazardous attitude can be dangerous in aviation. Impulsivity is acting without thinking, and Invulnerability is the attitude that “it won’t happen to me.” Here, trying to impress indicates Macho behavior.",
    tags: ["human factors", "attitudes"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 29,
    question: "(Refer to FAA-CT-8080-2H, Figure 26, area 4.) You have been hired to inspect a new tower under construction at coordinates 46°54’N, 98°36’W, near Jamestown Regional Airport (JMS). What must you receive prior to flying your sUAS in that area?",
    answers: {
      A: "Authorization from the U.S. military",
      B: "Authorization from Air Traffic Control",
      C: "Authorization from the National Park Service"
    },
    correct: "B",
    explanation: "The coordinates given (46.9N, 98.6W) place the operation near Jamestown Regional Airport, which has Class D airspace (requiring ATC authorization):contentReference[oaicite:34]{index=34}. Before operating in that controlled airspace (within 5 miles of JMS Class D), you must obtain ATC authorization. Military or NPS authorization is irrelevant here.",
    tags: ["airspace", "authorization"],
    figure: "Figure26.jpg",
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 30,
    question: "(Refer to FAA-CT-8080-2H, Figure 20, area 5.) How would a Remote PIC “CHECK NOTAMs” as noted in the CAUTION box regarding an unmarked balloon near Elizabeth City (ECG)?",
    answers: {
      A: "By using the FAA’s B4UFLY mobile application",
      B: "By contacting the nearest FAA Flight Standards District Office",
      C: "By obtaining a briefing via an online source like 1800WXBrief.com"
    },
    correct: "C",
    explanation: "The caution box instructs the pilot to “CHECK NOTAMs.” The proper way is to obtain an official briefing for Notices to Airmen, for example through 1800WXBrief (Flight Service):contentReference[oaicite:35]{index=35}. The B4UFLY app shows airspace restrictions but is not a comprehensive NOTAM source, and contacting a FSDO is not how pilots check NOTAMs.",
    tags: ["airspace", "NOTAMs"],
    figure: "Figure20.jpg",
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 31,
    question: "When adapting Crew Resource Management (CRM) concepts to small UAS operations, CRM should be integrated into:",
    answers: {
      A: "Only the flight portion of the operation",
      B: "All phases of the operation",
      C: "Only the communication procedures"
    },
    correct: "B",
    explanation: "Crew Resource Management (CRM) principles (effective communication, teamwork, decision-making) should be applied throughout all phases of the sUAS operation:contentReference[oaicite:36]{index=36}:contentReference[oaicite:37]{index=37}. This includes planning, briefing, flight, and post-flight. Limiting CRM to just flight or just communications would miss important aspects of crew coordination.",
    tags: ["operations", "crew resource management"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 32,
    question: "You are hired as a Remote Pilot by a TV news station to film breaking news with a drone. You express a safety concern, but the station manager tells you to “fly first, ask questions later.” Which hazardous attitude does this represent?",
    answers: {
      A: "Machismo",
      B: "Invulnerability",
      C: "Impulsivity"
    },
    correct: "C",
    explanation: "“Fly first, ask questions later” is an example of Impulsivity – acting without thinking or disregarding the proper consideration of safety:contentReference[oaicite:38]{index=38}. The manager is encouraging you to act quickly without analysis. Machismo would be doing it to show off, and Invulnerability would be thinking nothing bad will happen, neither of which exactly fit this scenario as well as Impulsivity.",
    tags: ["human factors", "attitudes"],
    figure: null,
    source: "https://www.dronepilotgroundschool.com/missed-part-107-test-prep-questions/"
  },
  {
    id: 33,
    question: "A local TV station’s drone pilot has had multiple near-misses with obstacles and two small UAS accidents. What action would help the news station improve their operating safety culture?",
    answers: {
      A: "Set a policy allowing no more than five incidents within six months",
      B: "No changes are needed – some accidents are unavoidable",
      C: "Recognize hazardous attitudes and implement standard operating procedures emphasizing safety"
    },
    correct: "C",
    explanation: "The best solution is to address safety culture: identify hazardous attitudes or poor procedures and develop standard operating procedures (SOPs) that emphasize safety:contentReference[oaicite:39]{index=39}. Simply tolerating a number of accidents or assuming they’re unavoidable is unacceptable. Proactively managing risk and establishing a safety-first policy is key.",
    tags: ["operations", "safety culture"],
    figure: null,
    source: "https://www.dronepilotgroundschool.com/missed-part-107-test-prep-questions/"
  },
  {
    id: 34,
    question: "(Refer to FAA-CT-8080-2H, Figure 26, area 2.) While monitoring the Cooperstown CTAF, you hear an aircraft report “midfield left downwind to Runway 13.” Where is this manned aircraft relative to the runway?",
    answers: {
      A: "The aircraft is east of the runway",
      B: "The aircraft is south of the runway",
      C: "The aircraft is west of the runway"
    },
    correct: "A",
    explanation: "On a left downwind for Runway 13, the aircraft is flying parallel to the runway in the opposite direction of landing, with the runway to its left. For runway heading 130°, a left downwind puts the aircraft roughly to the east of the runway (heading northwest). In this scenario, east is the relative position.",
    tags: ["airspace", "airport operations"],
    figure: "Figure26.jpg",
    source: "https://pilotinstitute.com/part-107-practice-test/"
  },
  {
    id: 35,
    question: "What effect does high density altitude (low air density) have on the efficiency of a drone’s propellers?",
    answers: {
      A: "Propeller efficiency is increased at high density altitude",
      B: "Propeller efficiency is decreased as air density decreases",
      C: "Density altitude has no effect on propeller performance"
    },
    correct: "B",
    explanation: "As air becomes thinner (higher density altitude – which means high elevation, high temperature, or high humidity), propellers generate less thrust. In low-density air the prop is less efficient:contentReference[oaicite:42]{index=42}:contentReference[oaicite:43]{index=43}. So high density altitude (thin air) decreases propeller efficiency. Propellers work best in dense air (low altitude).",
    tags: ["weather", "performance"],
    figure: null,
    source: "https://pilotinstitute.com/part-107-practice-test/"
  },
  {
    id: 36,
    question: "If an unmanned airplane weighs 33 pounds, what approximate weight would the airplane structure be required to support during a 30° banked turn while maintaining altitude?",
    answers: {
      A: "Approximately 34 pounds",
      B: "Approximately 47 pounds",
      C: "Approximately 38 pounds"
    },
    correct: "C",
    explanation: "A 30° banked level turn imposes about 1.154 times the normal load (per the load factor table). 33 lb × 1.154 ≈ 38 lbs:contentReference[oaicite:44]{index=44}. That means the structure must support roughly 38 pounds of force in that turn. (47 lbs would correspond to a steeper ~45° bank at 1.414 load factor, and 34 lbs would be only a slight bank.)",
    tags: ["performance"],
    figure: "Figure2.jpg",
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 37,
    question: "Which thunderstorm lifecycle stage is mostly characterized by downdrafts and dissipating rain?",
    answers: {
      A: "Cumulus stage",
      B: "Dissipating stage",
      C: "Mature stage"
    },
    correct: "B",
    explanation: "The dissipating stage of a thunderstorm is dominated by downdrafts. In this final stage, precipitation tapers off and downdrafts spread out, cutting off the storm’s supply of warm updraft air:contentReference[oaicite:45]{index=45}. The cumulus stage is all updrafts (building phase), and the mature stage has both updrafts and strong downdrafts (with heavy rain).",
    tags: ["weather"],
    figure: null,
    source: "https://www.dronepilotgroundschool.com/missed-part-107-test-prep-questions/"
  },
  {
    id: 38,
    question: "What is the minimum visibility required for a remote pilot to operate a small UAS? (Assume no waiver.)",
    answers: {
      A: "2 statute miles",
      B: "3 statute miles",
      C: "5 statute miles"
    },
    correct: "B",
    explanation: "According to 14 CFR §107.51, a minimum flight visibility of 3 statute miles is required for all sUAS operations:contentReference[oaicite:46]{index=46}:contentReference[oaicite:47]{index=47}. This visibility must be present from the control station’s location. Anything less than 3 SM (such as 2 SM) is below the legal minimum without a waiver.",
    tags: ["weather", "regulations"],
    figure: null,
    source: "https://pilotinstitute.com/part-107-practice-test/"
  },
  {
    id: 39,
    question: "What are the minimum cloud clearance distances a Remote Pilot must maintain during daylight sUAS operations?",
    answers: {
      A: "500 feet below clouds and 2,000 feet horizontally from clouds",
      B: "1,000 feet above clouds and 1 mile horizontally",
      C: "No specific clearance – just stay clear of clouds",
    },
    correct: "A",
    explanation: "Part 107 requires you to remain at least 500 ft below any cloud and 2,000 ft horizontally from any cloud:contentReference[oaicite:48]{index=48}. These distances help ensure sufficient separation from manned aircraft that may be operating in or above the clouds. “Clear of clouds” is a requirement for certain airspace classes when VFR, but Part 107 specifically quantifies it as 500 ft/2000 ft.",
    tags: ["weather", "regulations"],
    figure: null,
    source: "https://pilotinstitute.com/part-107-practice-test/"
  },
  {
    id: 40,
    question: "What are the current conditions for Chicago Midway Airport (KMDW) as given in this METAR report: “KMDW 121856Z 14006KT 1/2SM R04/2400FT -RA FG OVC007 17/16 A2980”?",
    answers: {
      A: "Sky 700 feet overcast, visibility 1/2 SM, light rain and fog",
      B: "Sky clear, visibility 5 SM, rain showers in vicinity",
      C: "Ceiling 7000 ft broken, 16°C dew point, winds calm"
    },
    correct: "A",
    explanation: "Breaking down the METAR: “1/2SM” means 1/2 statute mile visibility, “-RA FG” indicates light rain and fog, and “OVC007” is overcast clouds at 700 feet:contentReference[oaicite:49]{index=49}. So Midway has overcast at 700 ft, half-mile visibility in rain/fog, wind 140° at 6 knots, temperature 17°C, dew point 16°C, altimeter 29.80. The other options don’t match this METAR’s details.",
    tags: ["weather", "METAR"],
    figure: "Figure12.jpg",
    source: "https://www.dronesarpilot.com/exam/faa-sample-test"
  },
  {
    id: 41,
    question: "A Terminal Aerodrome Forecast (TAF) for Memphis International (KMEM) includes “FM1720 20012KT”. What does “20012KT” indicate in this TAF segment?",
    answers: {
      A: "Winds from 200° (south-southwest) at 12 knots",
      B: "Winds from 020° at 12 knots gusting to 00 knots",
      C: "No significant wind – calm conditions expected"
    },
    correct: "A",
    explanation: "In the TAF code “20012KT”, the first three digits (200) are the wind direction in degrees true (200° is roughly south-southwest), and the next two digits (12) are the wind speed in knots:contentReference[oaicite:50]{index=50}:contentReference[oaicite:51]{index=51}. So winds are from 200° at 12 kt. (If it were 02012KT, that would be from 020°.) The absence of a “G” means no gusts are forecast.",
    tags: ["weather", "TAF"],
    figure: null,
    source: "https://pilotinstitute.com/part-107-practice-test/"
  },
  {
    id: 42,
    question: "What are characteristics of a moist, unstable air mass?",
    answers: {
      A: "Turbulence and showery precipitation",
      B: "Poor visibility and smooth air",
      C: "Widespread haze with steady precipitation"
    },
    correct: "A",
    explanation: "An unstable air mass (especially if warm and moist) tends to produce turbulence, convective activity, and showery (intermittent) precipitation:contentReference[oaicite:52]{index=52}. In contrast, stable air is generally smooth with poor visibility (haze, fog) and steady precipitation if any. Turbulence and showers indicate instability (like in cumuliform cloud conditions).",
    tags: ["weather"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 43,
    question: "(Refer to FAA-CT-8080-2H, Figure 59, area 2.) Does the area marked with gray arrows labeled “VR1667, VR1617, VR1638, and VR1668” pose any risk to small UAS operations?",
    answers: {
      A: "No, all such military flight operations will occur above 400 feet AGL",
      B: "Yes, these are Military Training Routes with segments at or below 1,500 feet AGL",
      C: "Yes, they are designated approach paths for nearby Class C airports"
    },
    correct: "B",
    explanation: "The labels ‘VR1667’ etc. denote VFR Military Training Routes:contentReference[oaicite:53]{index=53}. When the route code has four digits (VR####), it indicates military flights possibly at or below 1,500 ft AGL, which absolutely can be a hazard to low-flying drones. These routes often involve high-speed military aircraft at low altitudes. Thus, small UAS operators should exercise caution. (Three-digit VR routes would mean segments above 1,500 AGL.)",
    tags: ["airspace", "sectional"],
    figure: "Figure59.jpg",
    source: "https://dronelaunchacademy.com/resources/part-107-test-21-practice-questions/"
  },
  {
    id: 44,
    question: "If you need additional information about Restricted Area R-2531 (which is indicated on a sectional chart), where can you find that information?",
    answers: {
      A: "The Aeronautical Information Manual (AIM)",
      B: "The sectional chart’s printed notes or legend for special use airspace",
      C: "The Chart Supplements U.S. (formerly Airport/Facility Directory)"
    },
    correct: "B",
    explanation: "Specific details for a restricted area (like times of use, controlling agency) are typically found on the sectional chart margins or legend for special use airspace, or sometimes in the Chart Supplement under Special Use Airspace. The AIM explains airspace in general but not the schedule of a specific area. The Chart Supplement does list restricted areas and schedules in its special use airspace section as well:contentReference[oaicite:54]{index=54}.",
    tags: ["airspace", "reference"],
    figure: null,
    source: "https://dronelaunchacademy.com/resources/part-107-test-21-practice-questions/"
  },
  {
    id: 45,
    question: "On sectional charts, what is indicated by airports depicted in blue versus magenta (purple) coloring?",
    answers: {
      A: "Airports with control towers are shown in blue, while magenta indicates non-towered airports",
      B: "Blue airports lie in Class A, B, or C airspace, and magenta indicates Class D or E airspace",
      C: "Blue denotes military airports; magenta denotes civil public airports",
    },
    correct: "A",
    explanation: "Airports with control towers (and thus controlled airspace at least part-time) are printed in blue on FAA aeronautical charts. Airports in magenta are non-towered (no ATC tower):contentReference[oaicite:55]{index=55}. The color is not directly indicating the class of airspace, just whether a tower is present.",
    tags: ["airspace", "sectional"],
    figure: null,
    source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/"
  },
  {
    id: 46,
    question: "What is the purpose of a Common Traffic Advisory Frequency (CTAF) at an airport?",
    answers: {
      A: "It allows pilots to self-announce and coordinate their actions at non-towered airports",
      B: "It is used by Remote PICs to communicate with each other during drone operations",
      C: "It’s a frequency where ATC monitors all uncontrolled airspace traffic",
    },
    correct: "A",
    explanation: "A CTAF is designated for pilots to broadcast their position and intentions at airports without an operating control tower (or after tower hours):contentReference[oaicite:56]{index=56}:contentReference[oaicite:57]{index=57}. This helps aircraft coordinate landings and takeoffs. ATC does not monitor CTAF, and it’s not specifically for drone-to-drone communication.",
    tags: ["communications", "airport operations"],
    figure: null,
    source: "https://pilotinstitute.com/part-107-practice-test/"
  },
  {
    id: 47,
    question: "Which publication contains an explanation of airport signs and pavement markings (such as hold short markings and signs)?",
    answers: {
      A: "The FAA Aeronautical Information Manual (AIM)",
      B: "FAA Advisory Circulars (ACs)",
      C: "The Chart Supplement U.S.",
    },
    correct: "A",
    explanation: "The AIM (Aeronautical Information Manual) contains diagrams and explanations of airport signs, markings, and lighting (for example, AIM Chapter 2, Section 3 covers airport marking aids):contentReference[oaicite:58]{index=58}. While Advisory Circulars may also discuss markings, the AIM is the primary go-to for pilots studying this topic. The Chart Supplement lists airport data but not detailed sign definitions.",
    tags: ["airport operations", "reference"],
    figure: null,
    source: "https://www.thedroneu.com/wp-content/uploads/2023/06/FAA-Part-107-Practice-Test-Answers.pdf"
  },
  {
    id: 48,
    question: "During sUAS operations, the Remote PIC or person manipulating the controls must maintain visual line of sight (VLOS) with the aircraft at all times. What does this mean practically?",
    answers: {
      A: "They must be able to see the drone with vision unaided by devices (other than glasses/contacts) at all times",
      B: "They should use binoculars or a first-person view camera to keep the drone in sight",
      C: "Visual line of sight is not required if a GPS tracking device is on board"
    },
    correct: "A",
    explanation: "Part 107 requires the drone be kept within the unaided visual line-of-sight of the Remote PIC and/or a visual observer. This means you must be able to see the aircraft with your eyes (corrective lenses allowed) throughout the flight:contentReference[oaicite:59]{index=59}. Binoculars may only be used momentarily (e.g., for collision avoidance), and relying solely on cameras or GPS is not permitted.",
    tags: ["operations", "visual line of sight"],
    figure: null,
    source: "https://www.dronesarpilot.com/exam/faa-sample-test"
  },
  {
    id: 49,
    question: "What is a 'flyaway' event with respect to unmanned aircraft operations?",
    answers: {
      A: "When the unmanned aircraft does not respond to control inputs and departs the intended flight area",
      B: "Any lost link (loss of control signal) between the control station and the unmanned aircraft",
      C: "When the drone’s GPS signal is lost, causing it to hover in place until control is regained"
    },
    correct: "A",
    explanation: "A “flyaway” is generally defined as an event in which the unmanned aircraft is not under control and does not execute pre-programmed lost link procedures – effectively, it flies off on its own:contentReference[oaicite:60]{index=60}. Not every lost link results in a flyaway, because many drones will hover or return-to-home on signal loss. A flyaway means the drone is truly out of control and leaves the area.",
    tags: ["operations", "emergency"],
    figure: null,
    source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/"
  },
  {
    id: 50,
    question: "What immediate action should the Remote PIC take during a flyaway event (drone is not responding to commands and is flying away unpredictably)?",
    answers: {
      A: "Immediately notify any crew members, bystanders, and ATC (if applicable) of the runaway aircraft",
      B: "Immediately notify the National Transportation Safety Board (NTSB)",
      C: "Shut off the controller to try and reset the connection",
    },
    correct: "A",
    explanation: "If a flyaway occurs, the Remote PIC’s first duty is to minimize risk to other aircraft and people: alert any crew and bystanders, and if in controlled airspace, inform ATC right away:contentReference[oaicite:61]{index=61}:contentReference[oaicite:62]{index=62}. The NTSB does not need immediate notification unless a reportable accident occurs. Turning off the controller is not advised as it could end any chance of regaining control or activating return-to-home – instead, try to reestablish control or let the drone’s failsafe respond.",
    tags: ["operations", "emergency"],
    figure: null,
    source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/"
  },
  {
    id: 51,
    question: "After landing at a tower-controlled airport (with permission), when should a manned aircraft pilot contact ground control?",
    answers: {
      A: "When advised by the tower to do so",
      B: "Immediately after clearing the active runway",
      C: "Only if they need to taxi to parking",
    },
    correct: "A",
    explanation: "(For general aviation knowledge) Pilots should remain on tower frequency after landing until the tower instructs them to contact ground. Typically, the tower will tell the aircraft “contact ground when off the runway” or similar:contentReference[oaicite:63]{index=63}. They should not switch frequencies unprompted. **Note:** Remote pilots generally do not operate on airports in this manner, but the question tests knowledge of standard aviation procedures.",
    tags: ["airport operations"],
    figure: null,
    source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/"
  },
  {
    id: 52,
    question: "Under Part 107, what is the maximum altitude above ground level (AGL) that you are generally allowed to fly your drone without special authorization?",
    answers: {
      A: "400 feet AGL",
      B: "500 feet AGL",
      C: "There is no altitude limit as long as you are in Class G airspace",
    },
    correct: "A",
    explanation: "The default maximum altitude is 400 ft AGL for small UAS operations:contentReference[oaicite:64]{index=64}. There are exceptions – for instance, you can fly higher if within 400 feet of a tall structure – but otherwise 400 ft AGL is the limit. Flying higher requires a waiver or other authorization. Class G airspace does not remove the 400 ft rule.",
    tags: ["regulations"],
    figure: null,
    source: "https://careeremployer.com/test-prep/practice-tests/faa-part-107-practice-test/"
  },
  {
    id: 53,
    question: "Part 107 allows you to fly higher than 400 ft AGL when:",
    answers: {
      A: "You are inspecting a structure and remain within 400 feet of that structure laterally",
      B: "You are in Class G airspace and not near any airport",
      C: "Your drone has a compliant altimeter and anti-collision lights",
    },
    correct: "A",
    explanation: "You may exceed 400 ft AGL by up to 400 additional feet if you are within a 400-foot radius of a structure and are inspecting or orbiting it:contentReference[oaicite:65]{index=65}. For example, near a 1000 ft tower, you could fly up to ~1400 ft MSL around it (if ground is ~0 MSL). The other choices do not on their own allow surpassing 400 ft without a waiver.",
    tags: ["regulations"],
    figure: null,
    source: "https://www.faa.gov/uas"
  },
  {
    id: 54,
    question: "When operating in Class B, C, D or surface E airspace under Part 107, you must:",
    answers: {
      A: "Obtain prior authorization from Air Traffic Control (typically via LAANC or FAA portal)",
      B: "Operate only below 100 feet AGL",
      C: "Have a transponder or ADS-B Out on your drone",
    },
    correct: "A",
    explanation: "To fly in controlled airspace (Classes B, C, D, or within the surface area of Class E designated for an airport), a Part 107 operator needs ATC authorization in advance:contentReference[oaicite:66]{index=66}. This is commonly done through the LAANC system or FAA DroneZone. There is currently no requirement or provision for drones to carry transponders/ADS-B for civil operations, and simply flying lower doesn’t negate the need for approval.",
    tags: ["airspace", "authorization"],
    figure: null,
    source: "https://www.faa.gov/uas/commercial_operators/part_107_auth"
  },
  {
    id: 55,
    question: "You discover a dent in your drone’s LiPo battery after a crash, though the drone still powers up. What is the recommended action regarding the battery?",
    answers: {
      A: "Follow manufacturer guidance – likely discontinue use and properly dispose of the damaged battery",
      B: "Attempt a test flight to see if the battery performance is affected",
      C: "Continue using it if it still holds a charge, but monitor it closely for heat",
    },
    correct: "A",
    explanation: "Any physical damage to a lithium-polymer battery can be dangerous. The safe move is to follow the manufacturer’s instructions, which typically say to stop using a battery that is swollen, punctured, or significantly dented. A damaged LiPo could overheat or catch fire, so it should be properly disposed of rather than flown. Testing it or just hoping for the best is risky and not recommended.",
    tags: ["safety", "maintenance"],
    figure: null,
    source: "https://dronelaunchacademy.com/resources/part-107-test-21-practice-questions/"
  },
  {
    id: 56,
    question: "Who is responsible for determining whether a pilot is fit to safely operate a small UAS?",
    answers: {
      A: "The pilot themselves (Remote PIC)",
      B: "The FAA medical examiner who issued their certificate",
      C: "The FAA Airman Medical branch",
    },
    correct: "A",
    explanation: "Even though Part 107 does not require a medical certificate, the remote pilot is responsible for not flying if they have a physical or mental condition that would interfere with safety. In manned aviation (and similarly for drones), the pilot in command must determine if they are fit to fly prior to each flight:contentReference[oaicite:67]{index=67}. An FAA medical examiner isn’t involved for drone pilots, and the FAA isn’t evaluating you on a day-to-day basis – it’s the pilot’s duty.",
    tags: ["physiology", "responsibility"],
    figure: null,
    source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/"
  },
  {
    id: 57,
    question: "Fatigue can be recognized:",
    answers: {
      A: "As a state of impaired performance (similar in effect to alcohol impairment)",
      B: "Only by very experienced pilots who know the signs",
      C: "By an individual’s ability to overcome sleep deprivation"
    },
    correct: "A",
    explanation: "Fatigue degrades a pilot’s ability to safely operate. It is effectively an impaired state. The FAA emphasizes that fatigue can be just as hazardous as intoxication in terms of judgement and reaction time:contentReference[oaicite:68]{index=68}. It’s not something that only experts can detect or that one can simply overcome by willpower. Being fatigued means you are not in peak condition to fly.",
    tags: ["human factors", "physiology"],
    figure: null,
    source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/"
  },
  {
    id: 58,
    question: "Under Part 107, what is the definition of an 'unmanned aircraft'?",
    answers: {
      A: "A device operated without the possibility of direct human intervention from within or on the aircraft",
      B: "Any aircraft flown for hobby or recreational use only",
      C: "An aircraft operated during search and rescue or law enforcement operations"
    },
    correct: "A",
    explanation: "14 CFR 107.3 defines an unmanned aircraft as “an aircraft operated without the possibility of direct human intervention from within or on the aircraft.”:contentReference[oaicite:69]{index=69} Essentially, there’s no onboard pilot. The definition isn’t tied to purpose (hobby or commercial) or specific types of operations.",
    tags: ["regulations", "definition"],
    figure: null,
    source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/"
  },
  {
    id: 59,
    question: "What is the maximum ground speed at which a small unmanned aircraft may be operated under Part 107 (absent a waiver)?",
    answers: {
      A: "100 mph (87 knots)",
      B: "87 mph (75 knots)",
      C: "200 knots",
    },
    correct: "A",
    explanation: "Regulations limit small UAS to a groundspeed of no more than 87 knots, which is about 100 mph:contentReference[oaicite:70]{index=70}. This is the top speed allowed without a waiver. 87 mph is slightly below the limit, and 200 knots is far above it.",
    tags: ["performance", "regulations"],
    figure: null,
    source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/"
  },
  {
    id: 60,
    question: "When an ATC clearance has been obtained for a manned aircraft, no pilot may deviate from that clearance unless:",
    answers: {
      A: "An emergency occurs",
      B: "The clearance states 'at pilot’s discretion'",
      C: "The pilot sees a chance to shortcut the route and later informs ATC"
    },
    correct: "A",
    explanation: "For manned aviation: 14 CFR 91.123 states that after accepting an ATC clearance, a pilot must not deviate from it unless they obtain an amended clearance or an emergency exists. The one exception that allows immediate deviation is an in-flight emergency:contentReference[oaicite:71]{index=71}. 'Pilot’s discretion' in a clearance applies to when a given action can be done (timing), not permission to deviate entirely. Since this is more a manned aviation rule, remote pilots operating under authorization should similarly follow all ATC instructions to the letter unless an emergency compels otherwise.",
    tags: ["airspace", "ATC"],
    figure: null,
    source: "https://www.thedroneu.com/wp-content/uploads/2023/06/FAA-Part-107-Practice-Test-Answers.pdf"
  },
  {
    id: 61,
    question: "What action is required if a small unmanned aircraft operation results in at least $500 worth of property damage (not including the drone) but no injuries?",
    answers: {
      A: "The Remote PIC must file an accident report to the FAA within 10 days",
      B: "No report is required if no persons were injured",
      C: "Notify local law enforcement within 3 days and provide a written report to the FAA within 30 days"
    },
    correct: "A",
    explanation: "14 CFR §107.9 defines that an accident resulting in at least $500 worth of damage to property (other than the UAS) requires reporting to the FAA no later than 10 days after the operation:contentReference[oaicite:72]{index=72}:contentReference[oaicite:73]{index=73}. The same rule covers serious injuries. Even if no one is hurt, the property damage threshold triggers the requirement. Local law enforcement notification is not mandated by Part 107 (unless local laws require it for property damage).",
    tags: ["regulations", "safety"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 62,
    question: "During flight operations, you and your visual observer rely on ATC traffic advisories to maintain separation from manned aircraft. Is this an acceptable practice under Part 107?",
    answers: {
      A: "No. The remote crew must see-and-avoid manned aircraft and cannot depend on ATC to keep clear of traffic",
      B: "Yes, if operating in controlled airspace with an authorization",
      C: "Yes, as long as one of you monitors the ATC communications continuously"
    },
    correct: "A",
    explanation: "Part 107 places the responsibility on the Remote PIC (and any visual observers) to see and avoid other aircraft at all times:contentReference[oaicite:74]{index=74}:contentReference[oaicite:75]{index=75}. Even in controlled airspace with ATC awareness, you cannot depend solely on ATC traffic calls; you must visually avoid other aircraft. ATC might not see all traffic (e.g., low-level VFR) to advise you. Therefore, you cannot shift the obligation to ATC.",
    tags: ["operations", "see and avoid"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 63,
    question: "Which event is considered NOT reportable to the FAA as an accident under Part 107?",
    answers: {
      A: "An sUAS flyaway that causes no damage or injuries",
      B: "An sUAS operation that results in a person’s broken arm",
      C: "An sUAS crash that damages a parked car with $600 in repairs"
    },
    correct: "A",
    explanation: "To require an FAA report, Part 107 specifies at least serious injury (e.g., level of injury that requires hospitalization or causes unconsciousness) or property damage over $500. A flyaway with no harm done doesn’t meet those thresholds. A broken arm is a serious injury, and $600 damage exceeds $500, so those would require reporting:contentReference[oaicite:76]{index=76}.",
    tags: ["regulations", "safety"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 64,
    question: "What FAA resource outlines the topics of the Part 107 knowledge test and can help you study what to expect on the exam?",
    answers: {
      A: "The FAA Remote Pilot – Small UAS Study Guide (FAA-G-8082-22)",
      B: "14 CFR Part 107 itself contains all test questions",
      C: "AC 107-2 (Aeronautical Knowledge Certification Standards)",
    },
    correct: "A",
    explanation: "The FAA publishes a free study guide (most recent versions titled Remote Pilot – Small UAS Study Guide) and an online training course covering Part 107 knowledge. The regulations (14 CFR Part 107) contain the rules but not necessarily guidance or context for exam prep. AC 107-2 is actually an Advisory Circular with some guidance, but the official study guide FAA-G-8082-22 is tailored to exam topics.",
    tags: ["reference"],
    figure: null,
    source: "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/media/remote_pilot_study_guide.pdf"
  },
  {
    id: 65,
    question: "What is one way that humidity and high temperatures affect a drone’s performance?",
    answers: {
      A: "They increase density altitude and decrease lift/thrust, worsening performance",
      B: "They improve propeller efficiency by thinning the air",
      C: "They have no noticeable effect on small UAS performance"
    },
    correct: "A",
    explanation: "Hot and humid conditions result in lower air density (high density altitude). Thin air reduces the amount of lift generated by the rotors or wings and reduces propeller thrust, so the drone’s performance (hover ability, payload capacity, climb rate) is degraded:contentReference[oaicite:78]{index=78}:contentReference[oaicite:79]{index=79}. Small UAS can definitely feel this effect – it’s not negligible. So option A is correct.",
    tags: ["weather", "performance"],
    figure: null,
    source: "https://pilotinstitute.com/part-107-practice-test/"
  },
  {
    id: 66,
    question: "When loading cameras or other equipment onto your drone, you should mount the items in a manner that:",
    answers: {
      A: "Does not adversely affect the aircraft’s center of gravity (CG)",
      B: "Keeps them visible to the visual observer or other crew members",
      C: "Allows quick release in case of emergency",
    },
    correct: "A",
    explanation: "It’s important to ensure that adding payload (like a camera) doesn’t shift the drone’s center of gravity outside of acceptable limits. An off-balance drone can be unstable or uncontrollable. While visibility of equipment and quick release might be nice-to-have, the key concern in mounting is maintaining proper balance and CG for safe flight.",
    tags: ["performance", "loading"],
    figure: null,
    source: "https://www.dronepilotgroundschool.com/missed-part-107-test-prep-questions/"
  },
  {
    id: 67,
    question: "The presence of ice pellets (sleet) at the surface is evidence that:",
    answers: {
      A: "Thunderstorms are likely in the vicinity",
      B: "There is a temperature inversion with freezing rain at higher altitude",
      C: "A cold front has recently passed through",
    },
    correct: "B",
    explanation: "Ice pellets reaching the surface typically indicate that rain is falling through a layer of sub-freezing air aloft (freezing rain up high), then refreezing into pellets before reaching the ground. This scenario implies a temperature inversion (warmer air above colder air) causing the rain to freeze on the way down:contentReference[oaicite:81]{index=81}. Thunderstorms and frontal passages could produce different precipitation (like hail or snow), but sleet specifically points to an inversion situation.",
    tags: ["weather"],
    figure: null,
    source: "https://www.dronepilotgroundschool.com/missed-part-107-test-prep-questions/"
  },
  {
    id: 68,
    question: "To get an official weather briefing tailored for your small UAS flight, you should:",
    answers: {
      A: "Contact Flight Service (FAA Flight Service Station) via 1-800-WX-BRIEF or online",
      B: "Rely on smartphone weather apps for METARs and forecasts",
      C: "Check the local TV station or NOAA website for general weather info",
    },
    correct: "A",
    explanation: "The FAA’s Flight Service Station (FSS) will provide an aviation weather briefing upon request:contentReference[oaicite:82]{index=82}. By calling 1-800-WX-BRIEF or using an online portal (like 1800wxbrief.com), you can get METARs, TAFs, NOTAMs, etc., specific to your flight area and time. Apps and TV/NOAA can give general info, but they are not considered an official briefing and might not include all necessary aviation details (like NOTAMs or specific aviation forecasts).",
    tags: ["weather", "reference"],
    figure: null,
    source: "https://pilotweb.nas.faa.gov/PilotWeb/"
  },
  {
    id: 69,
    question: "Which conditions are typically associated with stable air?",
    answers: {
      A: "Smooth air, poor visibility, steady (continuous) precipitation",
      B: "Turbulent air, showery precipitation, good visibility",
      C: "Hot, humid days with cumulus clouds and good visibility"
    },
    correct: "A",
    explanation: "Stable air masses often exhibit stratiform clouds or fog (which cause poor visibility) and steady, continuous precipitation if any. They generally have smooth air (little convection). Unstable air produces cumulus clouds, turbulence, good visibility, and showery precipitation:contentReference[oaicite:83]{index=83}. So smooth air + poor visibility + steady rain = stable conditions.",
    tags: ["weather"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 70,
    question: "If you see a magenta dashed line encircling an airport on a sectional chart, what does it denote?",
    answers: {
      A: "Class E airspace that begins at the surface around that airport",
      B: "Class C airspace boundary",
      C: "Special energy caution area (military or ultra-light activity)"
    },
    correct: "A",
    explanation: "A dashed magenta line indicates Class E airspace extending down to the surface around an airport:contentReference[oaicite:84]{index=84}. This usually means the airport has instrument approaches. It is not Class C (which is solid magenta or blue concentric circles) and not a special use area by itself. Pilots (including remote pilots) need authorization to operate in that surface Class E if it’s controlled (though Class E to the surface is treated like Class D for drone authorizations).",
    tags: ["airspace", "sectional"],
    figure: null,
    source: "https://pilotinstitute.com/part-107-practice-test/"
  },
  {
    id: 71,
    question: "While supervising a person flying your drone (who does not hold a Remote Pilot certificate), you are operating under Part 107 rules. What condition must be met for this to be legal?",
    answers: {
      A: "You, the Remote PIC, must be able to immediately take direct control of the drone at any time",
      B: "The person flying must also have taken the Part 107 knowledge test",
      C: "A visual observer must be present if the person flying is not certified"
    },
    correct: "A",
    explanation: "A non-certificated person may manipulate the flight controls of the drone only if a Remote PIC is directly supervising and able to take over instantly (for example, by using a dual-control setup or being within arm’s reach of the controller):contentReference[oaicite:85]{index=85}. The Remote PIC is accountable for the flight. The other person does not need to have passed the test, and a VO is not specifically required by that scenario unless needed to maintain VLOS.",
    tags: ["regulations", "operations"],
    figure: null,
    source: "https://pilotinstitute.com/part-107-practice-test/"
  },
  {
    id: 72,
    question: "You are planning to fly your drone at an altitude of 200 feet AGL in Class G airspace. What is the maximum distance you can fly from a cloud to remain compliant with Part 107?",
    answers: {
      A: "You must stay at least 2,000 feet horizontally away from any cloud",
      B: "You can fly closer as long as you remain clear of clouds",
      C: "There is no specific limit in Class G; just avoid the clouds"
    },
    correct: "A",
    explanation: "Regardless of airspace class, Part 107’s weather minimums apply: you must be at least 500 feet below and 2,000 feet horizontally from clouds:contentReference[oaicite:86]{index=86}. So even at 200 ft AGL in Class G, if there are clouds around, stay 2,000 ft away horizontally (and of course 500 ft below any cloud base above you). 'Clear of clouds' is not the phrasing in Part 107 – the specific distances are given.",
    tags: ["weather", "regulations"],
    figure: null,
    source: "https://www.faa.gov/uas"
  },
  {
    id: 73,
    question: "You plan to fly in an area where an FAA Temporary Flight Restriction (TFR) is in effect (for example, due to a stadium event or wildfire). Under what circumstances can you fly your sUAS in that TFR airspace?",
    answers: {
      A: "Only with specific authorization from the FAA (via a waiver or ATC authorization) or if you are certain the TFR exempts your operation",
      B: "As long as you stay below 400 ft AGL and in Class G, TFRs do not apply to drones",
      C: "If you are sponsored by an organization involved in the event (e.g., you’re a race team’s sponsor at an event with a TFR)"
    },
    correct: "A",
    explanation: "TFRs apply to all aircraft, including drones. You must not fly in a TFR unless you have permission (such as a specific waiver or are part of the approved operations for that TFR):contentReference[oaicite:87]{index=87}:contentReference[oaicite:88]{index=88}. The Indy 500 example in FAA materials highlights that even a sponsor can’t fly a drone in the TFR without authorization. Being low altitude or Class G doesn’t matter – the TFR is an absolute restriction except for exempted operations.",
    tags: ["airspace", "regulations"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 74,
    question: "Chapter 4 of the Part 107 Advisory Circular (AC 107-2) covers emergency procedures. Which of the following statements about emergency actions is TRUE for a Remote PIC?",
    answers: {
      A: "The Remote PIC may deviate from any rule in Part 107 to the extent necessary to respond to an emergency",
      B: "The Remote PIC must always adhere to Part 107 rules, even during emergencies",
      C: "During an in-flight emergency, ATC can waive Part 107 rules verbally"
    },
    correct: "A",
    explanation: "In an emergency, a Remote PIC is permitted to deviate from the Part 107 regulations as necessary to ensure safety:contentReference[oaicite:89]{index=89}. However, if they do deviate, upon request by the FAA they must send a written report explaining the deviation. ATC cannot “waive” rules on the fly; the PIC’s emergency authority is what allows the deviation. Safety of people is the priority, even if it means breaking a rule like flying over people or above altitude briefly to avoid a mid-air collision, for example.",
    tags: ["regulations", "emergency"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 75,
    question: "If you call 1-800-WX-BRIEF and ask for a standard weather briefing, the briefer will provide NOTAMs. What NOTAMs will they NOT give you unless you specifically ask?",
    answers: {
      A: "Temporary Flight Restrictions (TFRs)",
      B: "Drone-related NOTAMs",
      C: "Military training route NOTAMs"
    },
    correct: "A",
    explanation: "In a standard briefing, Flight Service will give NOTAMs that are applicable, but TFRs are sometimes not included unless specifically requested (as noted in some pilot resources):contentReference[oaicite:90]{index=90}. It’s always wise for a pilot to ask “Are there any TFRs?” to ensure they’re briefed. The briefer will cover NOTAMs like runway closures etc., but TFRs can be missed if not prompted. (This is a bit nuanced; nowadays they usually include TFRs, but traditionally pilots are reminded to ask.)",
    tags: ["airspace", "NOTAMs"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-test-questions-remote-pilot-knowledge-test/"
  },
  {
    id: 76,
    question: "After an sUAS operation, you realize that you inadvertently flew into a neighboring property without permission, deviating from your planned area. According to Part 107.21, if the FAA requests a report of this deviation, what must you do?",
    answers: {
      A: "Send a written report of the deviation to the FAA upon request",
      B: "Nothing, as long as no one complained about the deviation",
      C: "File a NASA ASRS report to protect yourself from enforcement"
    },
    correct: "A",
    explanation: "14 CFR 107.21 deals with in-flight emergencies and deviations. It states that if a PIC deviates from the rules (even if for safety reasons), and the FAA requests a report, the PIC must provide a written report of that deviation:contentReference[oaicite:91]{index=91}. Filing a voluntary NASA report is a good practice for unintentional violations (potentially reducing penalties), but it doesn’t replace the requirement to comply with an FAA request. And doing nothing would be incorrect if the FAA explicitly asks for a report.",
    tags: ["regulations"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 77,
    question: "You have been asked to fly your drone to photograph a wedding ceremony in a public park. The crowd will be out in the open. Under the Part 107 rule on operations over people, can you conduct this flight?",
    answers: {
      A: "No, not unless you obtain a waiver or everyone present is a direct participant or under shelter",
      B: "Yes, as long as you stay 10 feet above and 10 feet horizontal from any person",
      C: "Yes, people at public events are considered consenting participants by default"
    },
    correct: "A",
    explanation: "Part 107 generally prohibits flying over human beings not directly involved with the operation (and not under safe cover):contentReference[oaicite:92]{index=92}. A wedding crowd in the open consists of non-participants, so without a waiver for flying over people or the new category rules (if applicable), it’s not allowed. Distance like 10 feet is not a recognized buffer in the rule. And bystanders aren’t automatically considered willing participants just because they’re in public.",
    tags: ["operations", "over people"],
    figure: null,
    source: "https://www.faa.gov/news/fact_sheets/news_story.cfm?newsId=22615"
  },
  {
    id: 78,
    question: "TRUE or FALSE: A Remote Pilot in Command must hold a current FAA medical certificate to operate under Part 107.",
    answers: {
      A: "True – at least a 3rd Class medical is required",
      B: "False – no medical certificate is required, only that the pilot be in a condition to safely operate",
      C: "True – a basic FAA drone operator physical is required every 24 months"
    },
    correct: "B",
    explanation: "No medical certification is required for Part 107 remote pilots:contentReference[oaicite:93]{index=93}. The only requirements are that the pilot not know of any physical or mental condition that would interfere with safe operation. It’s the pilot’s responsibility to self-assess fitness (using a concept like IMSAFE). Manned aircraft pilots require medicals, but not sUAS operators.",
    tags: ["regulations", "physiology"],
    figure: null,
    source: "https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot"
  },
  {
    id: 79,
    question: "If your drone weighs 55.5 lbs on takeoff (including all attached equipment), can you fly it under Part 107 rules?",
    answers: {
      A: "No, 55.5 lbs exceeds the small UAS weight limit under Part 107",
      B: "Yes, as long as it’s registered and you fly in Class G airspace",
      C: "Yes, but only if you have a Part 61 pilot certificate in addition to Part 107"
    },
    correct: "A",
    explanation: "Part 107 only applies to small unmanned aircraft weighing less than 55 pounds on takeoff (including everything onboard or attached):contentReference[oaicite:94]{index=94}. 55.5 lbs is over the limit. To fly a drone that heavy, you’d need to operate under a different set of rules or an exemption (e.g., a Section 44807 exemption). Flying in Class G or having a manned pilot license doesn’t change the weight restriction.",
    tags: ["regulations", "limitations"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 80,
    question: "You are flying in an Alert Area (depicted with an “Alert” label on the chart). Who has the responsibility for collision avoidance in this airspace?",
    answers: {
      A: "All pilots operating in the Alert Area share equal responsibility to see and avoid each other",
      B: "The controlling agency monitors and separates traffic",
      C: "Remote pilots have right-of-way over manned training flights in an Alert Area"
    },
    correct: "A",
    explanation: "Alert Areas (charted with an “A-###”) are advisory airspace indicating high volume of training or unusual activity. Pilots (manned or unmanned) must be extra vigilant. There is no ATC separation service – **all pilots are responsible for collision avoidance**:contentReference[oaicite:95]{index=95}. No one has automatic right-of-way; standard right-of-way rules apply (manned aircraft still generally have priority over unmanned).",
    tags: ["airspace", "see and avoid"],
    figure: null,
    source: "https://www.thedroneu.com/wp-content/uploads/2023/06/FAA-Part-107-Practice-Test-Answers.pdf"
  },
  {
    id: 81,
    question: "Which of the following is a requirement for testing your small UAS for airworthiness before flight?",
    answers: {
      A: "Conduct a pre-flight inspection of the drone, including all control link equipment",
      B: "Have a certified mechanic inspect the drone once every 12 months",
      C: "Do an annual flight test under observation of an FAA inspector"
    },
    correct: "A",
    explanation: "Part 107.15 requires the Remote PIC to perform a preflight inspection to ensure the sUAS is in a condition for safe operation. This includes checking control links, battery levels, structural integrity, propellers, firmware status, etc. There’s no requirement for an FAA-certified mechanic or inspector to sign off small UAS; maintenance and inspections are the operator’s responsibility.",
    tags: ["operations", "maintenance"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 82,
    question: "During a flight, you experience a lost link (lost control signal) with your drone. What should you do?",
    answers: {
      A: "Execute the pre-planned lost link procedure (such as RTH or hover) and watch the drone until control is regained or it lands",
      B: "Immediately notify the FAA of a lost link event",
      C: "Cycle your controller power off and on repeatedly to try to reconnect"
    },
    correct: "A",
    explanation: "If you lose control link, you should follow the predetermined lost link procedures you set for the drone (e.g., it might hover, initiate Return-to-Home, or slowly descend depending on programming). Keep eyes on the drone, and be prepared to take manual control if possible (some systems allow reconnect). There’s no immediate requirement to notify the FAA unless it becomes a reportable incident. Power cycling the controller once might help, but doing so repeatedly could hinder reconnection or cause unpredictable behavior; it’s better to let the failsafe do its job and troubleshoot methodically.",
    tags: ["operations", "emergency"],
    figure: null,
    source: "https://www.faa.gov/uas/public_safety_gov/critical_infrastructure"
  },
  {
    id: 83,
    question: "You are planning a mapping mission that will take your drone 1 mile away from you at an altitude of 300 ft AGL. You have a visual observer (VO). Under Part 107, is it acceptable to conduct this operation beyond the direct vision of the Remote PIC?",
    answers: {
      A: "Yes, as long as the Remote PIC, VO, or both, maintain continuous visual line of sight with the drone",
      B: "Yes, the 1-mile range is fine if you have a VO, regardless of sight",
      C: "No, Part 107 prohibits flight beyond 0.5 miles from the PIC under all circumstances"
    },
    correct: "A",
    explanation: "Part 107 requires that the sUAS be kept within visual line of sight of the Remote PIC and/or visual observer at all times. This means at least one of you must always be able to see it with unaided vision. If the PIC can’t see it at 1 mile, the VO must. There’s no specific distance limit in miles, it’s about sight. 0.5 miles is not a set rule – the limit is whenever you can’t see it anymore.",
    tags: ["operations", "visual line of sight"],
    figure: null,
    source: "https://careeremployer.com/test-prep/practice-tests/faa-part-107-practice-test/"
  },
  {
    id: 84,
    question: "One of your crew members has a tendency to cut corners and says, “We don’t need to do all these checklists, let’s just fly.” This is an example of which hazardous attitude, and what’s a good countermeasure?",
    answers: {
      A: "Anti-Authority attitude; counter it by reminding them that procedures exist for safety reasons",
      B: "Macho attitude; counter it by agreeing and proceeding quickly to prove them wrong",
      C: "Invulnerability; counter it by emphasizing that accidents could happen to anyone"
    },
    correct: "A",
    explanation: "“Rules and procedures aren’t needed, let’s just go” reflects an Anti-Authority attitude (“Don’t tell me what to do”). The antidote is “Follow the rules. They are usually right.” So reminding them of why those procedures exist and insisting on following them is proper. Macho is about showing off, invulnerability is “it won’t happen to me.” Here the person is dismissing rules – classic anti-authority.",
    tags: ["human factors", "attitudes"],
    figure: null,
    source: "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak/Chapter17"
  },
  {
    id: 85,
    question: "Maximum endurance for a battery-powered multirotor drone (getting the longest flight time) is typically achieved by:",
    answers: {
      A: "Flying at an efficient hover or slow cruise, minimizing excessive maneuvers",
      B: "Flying at full throttle briefly to complete the mission faster",
      C: "Carrying the maximum battery capacity regardless of weight",
    },
    correct: "A",
    explanation: "For electric multirotors, gentle flight (slow, steady, minimal maneuvering) conserves energy. Hovering in ground effect or a slow forward flight can be the most efficient. Going full throttle or making aggressive maneuvers drains the battery faster. Adding more batteries can increase capacity but also adds weight, which can lead to diminishing returns or even shorter flight time if too heavy. So it’s about finding the optimal speed/power setting and minimizing wasted energy to maximize endurance.",
    tags: ["performance"],
    figure: null,
    source: "https://www.faa.gov/uas/resources/public_records/uas_data"
  },
  {
    id: 86,
    question: "How often is the Remote Pilot in Command required to inspect the small UAS to ensure it is in a condition for safe operation?",
    answers: {
      A: "Before each flight",
      B: "Every 100 flight hours",
      C: "Annually, per the inspection schedule in Part 107",
    },
    correct: "A",
    explanation: "The Remote PIC must conduct a preflight inspection of the sUAS prior to each flight:contentReference[oaicite:98]{index=98}. Part 107 doesn’t specify hourly or annual intervals like manned aircraft maintenance; instead it’s up to the pilot to check the drone for safe condition before takeoff every time.",
    tags: ["operations", "maintenance"],
    figure: null,
    source: "https://www.faa.gov/uas/commercial_operators/part_107_small_uas_rules"
  },
  {
    id: 87,
    question: "You are inspecting a high-rise building with your drone. To maintain the best GPS accuracy and control link, you should:",
    answers: {
      A: "Maintain a line of sight between your antenna and the drone, and beware of interference from the building",
      B: "Fly on the opposite side of the building from your position to reduce wind effects",
      C: "Rely on the building’s structure to amplify your control signal"
    },
    correct: "A",
    explanation: "Large structures can block or reflect GPS signals and radio communications. It’s important to position yourself (or antennas) to maintain an unobstructed line-of-sight to the drone as much as possible. Flying behind a building relative to you can lead to loss of control link or GPS issues (multipath). Building structures do not amplify signals; they more often attenuate or distort them. So answer A is the safe practice.",
    tags: ["operations"],
    figure: null,
    source: "https://www.faa.gov/uas/public_safety_gov/critical_infrastructure"
  },
  {
    id: 88,
    question: "Which of the following actions is required when operating a small unmanned aircraft within 30 minutes after official sunset (during civil twilight)?",
    answers: {
      A: "The sUAS must have anti-collision lights that are visible for at least 3 statute miles",
      B: "The Remote PIC must hold a night operations waiver",
      C: "The operation must be conducted in Class G airspace only"
    },
    correct: "A",
    explanation: "Civil twilight operations are allowed by Part 107 **provided the drone has anti-collision lighting visible out to 3 SM**:contentReference[oaicite:99]{index=99}. Since April 2021, a waiver is no longer required for night; instead, the rule mandates proper lighting and that the pilot has taken updated training. There’s no airspace restriction specific to twilight/night beyond the usual need for authorization in controlled airspace.",
    tags: ["night operations", "regulations"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 89,
    question: "During preflight, you notice one of your drone’s propellers has a small crack. What is the appropriate action?",
    answers: {
      A: "Replace or repair the propeller before flight – do not fly with a damaged prop",
      B: "Fly at reduced power to minimize stress on the cracked propeller",
      C: "Proceed with the flight if the crack is small and the other props are fine"
    },
    correct: "A",
    explanation: "Any structural damage like a cracked propeller should be fixed before flying. A cracked prop could fail in flight, leading to loss of control. The Remote PIC’s responsibility is to ensure the aircraft is in a safe condition, so the correct decision is to replace the propeller. Flying with it, even at low throttle, is an unnecessary risk and not within safe operating practice.",
    tags: ["maintenance", "safety"],
    figure: null,
    source: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_questions/uag_questions.pdf"
  },
  {
    id: 90,
    question: "An autonomous flight mode on your drone starts malfunctioning and the drone begins to drift toward people. What is your primary responsibility as Remote PIC?",
    answers: {
      A: "Immediately regain manual control and maneuver the drone to avoid people or land it safely",
      B: "Let the drone’s obstacle sensors handle it since manual input might confuse it",
      C: "Quickly turn off the controller to trigger the drone’s failsafe",
    },
    correct: "A",
    explanation: "The Remote PIC must be able to intervene and take manual control if the automated system isn’t performing safely:contentReference[oaicite:100]{index=100}. If the drone drifts toward people, you should switch to manual control (attitude mode or similar) and steer it away/land ASAP. Relying solely on automation or shutting off the controller (which could cause a crash on the spot) is not proper – positive action to ensure safety is needed.",
    tags: ["operations", "emergency"],
    figure: null,
    source: "https://www.faa.gov/uas/recreational_fliers"
  },
  {
    id: 91,
    question: "Which of the following is an example of a regulatory deviation that would require reporting to the FAA upon request?",
    answers: {
      A: "Flying in controlled airspace without authorization due to a mistake, after the fact",
      B: "Momentarily losing GPS signal during a flight but regaining it with no consequence",
      C: "Experiencing interference that requires a frequency change"
    },
    correct: "A",
    explanation: "If a Remote PIC deviates from Part 107 rules (e.g., inadvertently entered controlled airspace without clearance), that’s a violation. Under §107.21, if the FAA asks, the PIC must provide a written report about it:contentReference[oaicite:101]{index=101}. A brief GPS loss or changing radio frequency aren’t regulatory deviations – they’re technical issues handled in-flight and don’t need reporting unless they led to a rule being broken or an accident.",
    tags: ["regulations"],
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/"
  },
  {
    id: 92,
    question: "Remote ID rules require most drones to broadcast identification info. Which operations do NOT require Remote ID under the current rule?",
    answers: {
      A: "Flights within a FRIA (FAA-Recognized Identification Area)",
      B: "Flights under 50 feet AGL in Class G airspace",
      C: "Flights by recreational flyers with sub-250g drones, regardless of location"
    },
    correct: "A",
    explanation: "As of the Remote ID rule implementation, drones must have Remote ID unless they are flying at an FAA-recognized identification area (FRIA) or are otherwise excepted. Operating within a FRIA is a key exception where no broadcast module/standard RID is needed. There’s no blanket exemption for being low altitude or in Class G. Recreational flyers with drones under 250g are exempt *only if* flying strictly recreationally – but under Part 107 (commercial) even a sub-250g drone would need remote ID if not in a FRIA. So the best answer is FRIA operations:contentReference[oaicite:102]{index=102}.",
    tags: ["regulations", "remote ID"],
    figure: null,
    source: "https://www.faa.gov/uas/getting_started/remote_id"
  },
  {
    id: 93,
    question: "While flying a mapping mission, you realize the planned route will briefly clip the corner of a restricted area shown on the chart. What should you do?",
    answers: {
      A: "Alter your flight plan to remain clear of the restricted area unless you have permission to enter it",
      B: "Continue – restricted areas only apply to manned aircraft",
      C: "Fly through it quickly below 400 ft AGL, since small UAS are allowed at low altitude"
    },
    correct: "A",
    explanation: "Restricted areas denote airspace where flight is not allowed or is hazardous when active, unless you have controlling agency authorization. This applies to all aircraft, manned or unmanned. The safe and legal move is to avoid entering the restricted area’s boundaries. It’s a common planning task to adjust the route to remain outside restricted (or get clearance if possible/necessary). Flying through without clearance, even if low, is a violation and could be dangerous.",
    tags: ["airspace"],
    figure: null,
    source: "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section4.html"
  },
  {
    id: 94,
    question: "You check the density altitude at a high elevation airport on a hot, humid day and find it’s approximately 9,000 feet. How will your small quadcopter likely perform under these conditions?",
    answers: {
      A: "It will have reduced lift and thrust, resulting in noticeably decreased performance and shorter battery life",
      B: "It will perform the same as at sea level – small drones are not affected by density altitude",
      C: "It will lift more weight than usual due to the thinner air offering less resistance",
    },
    correct: "A",
    explanation: "High density altitude = thin air, which means rotors are less effective. Your motors work harder to produce lift, draining the battery faster and possibly not achieving the same top altitude or stability. So performance is worse (shorter flight time, reduced max lift). All aircraft, including small drones, are affected by air density. Thinner air doesn’t help lift; it reduces it, contrary to option C.",
    tags: ["performance", "weather"],
    figure: null,
    source: "https://pilotinstitute.com/part-107-practice-test/"
  },
  {
    id: 95,
    question: "In aviation weather reports, what does “BR” and “FG” indicate, respectively?",
    answers: {
      A: "Mist (BR) and Fog (FG)",
      B: "Rain showers (BR) and Freezing rain (FG)",
      C: "Broken sky (BR) and Fog (FG)"
    },
    correct: "A",
    explanation: "METAR/TAF weather code: “BR” is the abbreviation for mist (French 'brume'), which is 5/8 to 6 SM visibility, and “FG” stands for fog (vis < 5/8 SM). So BR is mist and FG is fog. “RA” is rain, “FZRA” would be freezing rain. “BR” is not showers or cloud cover; it specifically means mist. This level of detail might appear on the Part 107 exam to test familiarity with METAR codes.",
    tags: ["weather", "METAR"],
    figure: null,
    source: "https://www.faa.gov/air_traffic/publications/atpubs/fs_html/chap5_section2.html"
  },
  {
    id: 96,
    question: "An airport’s rotating beacon is on during daylight hours. What does this most likely indicate?",
    answers: {
      A: "The airport is under IFR conditions (visibility and/or ceiling below VFR minimums)",
      B: "The airport’s tower is closed",
      C: "There is a temporary control zone around the airport"
    },
    correct: "A",
    explanation: "For manned aviation: If the rotating beacon at an airport is operating during the day, it usually signals that the weather is below basic VFR minimums (i.e., the airport is IFR). A tower not being in operation is usually indicated by something else (and beacon operation isn’t the specific sign of that). There’s no such thing as 'temporary control zone indicated by beacon.' For drone pilots, this is tangential knowledge from general aviation.",
    tags: ["airport operations", "weather"],
    figure: null,
    source: "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section2.html"
  },
  {
    id: 97,
    question: "The FAA’s Visual Line of Sight rule for drones means:",
    answers: {
      A: "The Remote PIC or visual observer must be able to see the drone at all times without aids (other than eyeglasses)",
      B: "You can use binoculars as the primary means to keep the drone in sight",
      C: "First-person view (FPV) camera can satisfy the VLOS requirement if someone is watching the video feed"
    },
    correct: "A",
    explanation: "VLOS means unaided visual contact with the aircraft at all times during flight. You’re allowed to use FPV or binoculars as a supplement (scanning for traffic, etc.), but not as the sole means of tracking the drone. The rule intends for a person to directly observe the drone’s location, orientation, and clearance from obstacles by naked eye (glasses allowed). FPV alone does not meet this requirement.",
    tags: ["operations", "visual line of sight"],
    figure: null,
    source: "https://www.faa.gov/uas/regulations_policies/rulemaking/media/2120-AJ60_NPRM_2-15-15_joint_signature.pdf"
  },
  {
    id: 98,
    question: "If you change your address, how long can you wait before you must update your Part 107 certificate information with the FAA?",
    answers: {
      A: "You have 30 days to notify the FAA of an address change",
      B: "No need to update since the certificate is electronic",
      C: "Notify immediately within 24 hours"
    },
    correct: "A",
    explanation: "Certificate holders (including remote pilots) must notify the FAA of any change in permanent mailing address within 30 days of the move. This ensures you receive any official correspondence. It’s the same requirement as for manned pilot certificates. There’s an FAA website portal to update airmen certificate details. 24 hours is too short, and ignoring it is not compliant.",
    tags: ["regulations"],
    figure: null,
    source: "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-107#107.77"
  },
  {
    id: 99,
    question: "While flying in a distant rural area, you see military jets flying low through the area on what looks like a training route. As a remote pilot, what should you do?",
    answers: {
      A: "Yield the right of way and ensure you remain well clear of the military aircraft",
      B: "Ascend to a higher altitude since fast jets usually stay low",
      C: "Flash your drone’s lights to make it more visible to the jet pilots"
    },
    correct: "A",
    explanation: "Military Training Routes (MTRs) often involve high-speed, low-altitude flights. Drone pilots must always yield right-of-way to manned aircraft:contentReference[oaicite:104]{index=104}. The best action is to descend or move away safely to avoid conflict. Don’t climb (they might already be low and fast). Flashing lights might not be noticed by jet pilots at speed; ensuring physical separation is key. Essentially, stay well clear.",
    tags: ["operations", "airspace"],
    figure: null,
    source: "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/military_routes/"
  },
  {
    id: 100,
    question: "A certificate of waiver for a Part 107 operation may be requested to allow deviations from certain rules. Which of the following is an example of an operation that would require a waiver?",
    answers: {
      A: "Routine night-time operation without anti-collision lights (when lights can’t be used)",
      B: "Flying in Class G airspace",
      C: "Using a visual observer"
    },
    correct: "A",
    explanation: "Flying at night without the required anti-collision lighting would violate 107.29, and if someone had a special scenario where lights aren’t feasible, they’d need a waiver (though the FAA expects anti-collision lights for night instead of waiving it). Class G operations require no waiver (that’s normal). Using a visual observer is fully allowed and often encouraged; it doesn’t need any waiver. Other common waiver scenarios include beyond visual line of sight, over people, operating multiple drones, etc.",
    tags: ["waivers", "regulations"],
    figure: null,
    source: "https://www.faa.gov/uas/commercial_operators/part_107_waivers"
  },
 
 
    {
      id: 101,
      tag: "airspace",
      question: "What does a dashed magenta line around an airport indicate on a sectional chart?",
      answers: {
        A: "Class D airspace",
        B: "Class C airspace",
        C: "Class E surface area"
      },
      correct: "C",
      figure: "sectional_chart_example.jpg",
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "A dashed magenta line indicates Class E airspace extending down to the surface."
    },
    {
      id: 102,
      tag: "weather",
      question: "Which type of cloud is most closely associated with thunderstorms?",
      answers: {
        A: "Stratus",
        B: "Cumulonimbus",
        C: "Cirrus"
      },
      correct: "B",
      figure: null,
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "Cumulonimbus clouds are thunderstorm clouds and contain turbulence, lightning, and possible hail."
    },
    {
      id: 103,
      tag: "regulations",
      question: "How soon must an accident be reported to the FAA if it results in serious injury or property damage over $500?",
      answers: {
        A: "Immediately",
        B: "Within 10 days",
        C: "Within 30 days"
      },
      correct: "B",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Any accident with serious injury or property damage over $500 must be reported within 10 days under 14 CFR 107.9."
    },
    {
      id: 104,
      tag: "airspace",
      question: "Which airspace requires ATC authorization before operating a small UAS?",
      answers: {
        A: "Class G",
        B: "Class E (non-surface)",
        C: "Class B"
      },
      correct: "C",
      figure: null,
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "Operations in Class B, C, D, and surface E airspace require prior ATC authorization."
    },
    {
      id: 105,
      tag: "weather",
      question: "What does a METAR report with 'OVC008' indicate?",
      answers: {
        A: "Overcast clouds at 800 feet AGL",
        B: "Broken clouds at 8,000 feet AGL",
        C: "Overcast clouds at 8,000 feet MSL"
      },
      correct: "A",
      figure: null,
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "'OVC008' indicates overcast clouds at 800 feet above ground level."
    },
    {
      id: 106,
      tag: "charts",
      question: "What does a solid blue line encircling an airport represent on a sectional chart?",
      answers: {
        A: "Class D airspace",
        B: "Class B airspace",
        C: "Class C airspace"
      },
      correct: "A",
      figure: "sectional_chart_example.jpg",
      source: "https://www.thedroneu.com/blog/faa-part-107-practice-test/",
      explanation: "A solid blue line indicates Class D controlled airspace."
    },
    {
      id: 107,
      tag: "loading",
      question: "How does exceeding maximum takeoff weight affect a UAS’s performance?",
      answers: {
        A: "Increased maneuverability",
        B: "Reduced flight time and climb performance",
        C: "No effect"
      },
      correct: "B",
      figure: null,
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "Exceeding weight limits reduces lift, climb rate, and flight time."
    },
    {
      id: 108,
      tag: "regulations",
      question: "What is the maximum altitude allowed for sUAS operations under Part 107?",
      answers: {
        A: "500 feet AGL",
        B: "400 feet AGL",
        C: "600 feet AGL"
      },
      correct: "B",
      figure: null,
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "sUAS operations are limited to 400 feet AGL unless within 400 feet of a structure."
    },
    {
      id: 109,
      tag: "airspace",
      question: "When operating in Class C airspace, what must the Remote PIC have before flying?",
      answers: {
        A: "A visual observer",
        B: "ATC authorization",
        C: "A sectional chart"
      },
      correct: "B",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Class C airspace requires prior ATC authorization for UAS operations."
    },
    {
      id: 110,
      tag: "weather",
      question: "What type of weather is expected with a fast-moving cold front?",
      answers: {
        A: "Steady rain and low ceilings",
        B: "Showery precipitation and gusty winds",
        C: "Warm temperatures and clear skies"
      },
      correct: "B",
      figure: null,
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "Cold fronts cause showery precipitation, thunderstorms, turbulence, and gusty winds."
    },
   
   

  {
    id: 111,
    tag: "charts",
    question: "What does a magenta flag symbol indicate on a sectional chart?",
    answers: {
      A: "VFR Waypoint",
      B: "VFR advisory area where flight service station (FSS) services are available",
      C: "VFR checkpoint for transitioning controlled airspace"
    },
    correct: "C",
    figure: "sectional_chart_example.jpg",
    source: "https://pilotinstitute.com/part-107-practice-test/",
    explanation: "A magenta flag indicates a VFR waypoints used to help pilots identify reporting points for transitioning airspace."
  },
  {
    id: 112,
    tag: "airspace",
    question: "How is Class E airspace depicted on a sectional chart when it starts at 700 feet AGL?",
    answers: {
      A: "Fuzzy blue line",
      B: "Fuzzy magenta line",
      C: "Solid magenta line"
    },
    correct: "B",
    figure: "sectional_chart_example.jpg",
    source: "https://pilotinstitute.com/part-107-practice-test/",
    explanation: "Class E starting at 700 ft AGL is shown with a fuzzy magenta line; inside the fade is Class E down to 700 feet."
  },
  {
    id: 113,
    tag: "regulations",
    question: "When is a visual observer required under Part 107?",
    answers: {
      A: "Whenever operating in Class D airspace",
      B: "Whenever beyond visual line of sight",
      C: "A visual observer is never required"
    },
    correct: "B",
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
    explanation: "A visual observer is required if the Remote PIC cannot maintain visual line of sight (VLOS)."
  },
  {
    id: 114,
    tag: "weather",
    question: "Which weather condition would be most favorable for stable air?",
    answers: {
      A: "Cool, dry air mass",
      B: "Warm, moist air mass",
      C: "A temperature inversion"
    },
    correct: "C",
    figure: null,
    source: "https://pilotinstitute.com/part-107-practice-test/",
    explanation: "A temperature inversion creates stable air and traps pollutants close to the surface."
  },
  {
    id: 115,
    tag: "loading",
    question: "What is the impact of a rearward CG on a UAS?",
    answers: {
      A: "Increased stability but less maneuverability",
      B: "Decreased stability and increased maneuverability",
      C: "No impact"
    },
    correct: "B",
    figure: null,
    source: "https://pilotinstitute.com/part-107-practice-test/",
    explanation: "A rearward CG decreases stability and increases responsiveness or instability."
  },
  {
    id: 116,
    tag: "regulations",
    question: "When are you allowed to fly an sUAS over people without a waiver?",
    answers: {
      A: "When people are directly participating in the operation",
      B: "When flying a UAS less than 0.55 lbs",
      C: "When flying a UAS under Category 2 or 3 approval"
    },
    correct: "A",
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
    explanation: "Flights over people without waiver are allowed only if people are directly participating in the operation or protected under a covered structure."
  },
  {
    id: 117,
    tag: "airspace",
    question: "How is special use airspace indicated on sectional charts?",
    answers: {
      A: "Blue shaded areas",
      B: "Magenta dashed line",
      C: "Blue hatched boundary"
    },
    correct: "C",
    figure: "sectional_chart_example.jpg",
    source: "https://pilotinstitute.com/part-107-practice-test/",
    explanation: "Special use airspace (restricted, prohibited) is depicted with blue hatched boundaries."
  },
  {
    id: 118,
    tag: "charts",
    question: "What does a large star with a circle around it indicate on a sectional chart?",
    answers: {
      A: "Airport with a rotating beacon in operation",
      B: "Military training route",
      C: "Temporary flight restriction area"
    },
    correct: "A",
    figure: "sectional_chart_example.jpg",
    source: "https://pilotinstitute.com/part-107-practice-test/",
    explanation: "A large star with a circle indicates an airport with a rotating beacon operating in controlled airspace."
  },
  {
    id: 119,
    tag: "weather",
    question: "What does a SIGMET warn pilots about?",
    answers: {
      A: "Localized precipitation",
      B: "Widespread hazardous weather like severe icing or turbulence",
      C: "Temporary runway closures"
    },
    correct: "B",
    figure: null,
    source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
    explanation: "SIGMETs warn of widespread significant weather hazards such as severe turbulence, icing, or volcanic ash."
  },
  {
    id: 120,
    tag: "airspace",
    question: "How are military operations areas (MOAs) depicted on sectional charts?",
    answers: {
      A: "Solid blue line",
      B: "Magenta hatched boundary with 'MOA' label",
      C: "Magenta shaded circle"
    },
    correct: "B",
    figure: "sectional_chart_example.jpg",
    source: "https://pilotinstitute.com/part-107-practice-test/",
    explanation: "MOAs are shown with magenta hatched boundaries and labeled 'MOA'."
  },


    {
      id: 121,
      tag: "weather",
      question: "What is the meaning of 'VC' in a METAR report?",
      answers: {
        A: "In the vicinity of the airport",
        B: "Variable ceiling",
        C: "Visibility clear"
      },
      correct: "A",
      figure: null,
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "'VC' indicates weather phenomena occurring within 5-10 miles of the observation point (in the vicinity)."
    },
    {
      id: 122,
      tag: "airspace",
      question: "How is a prohibited area labeled on a sectional chart?",
      answers: {
        A: "P-###",
        B: "R-###",
        C: "MOA-###"
      },
      correct: "A",
      figure: "sectional_chart_example.jpg",
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "Prohibited areas are designated with a 'P' followed by a number, such as 'P-40'."
    },
    {
      id: 123,
      tag: "charts",
      question: "What does 'CTAF' indicate on a sectional chart?",
      answers: {
        A: "Controlled tower airfield",
        B: "Common Traffic Advisory Frequency",
        C: "Control Traffic and Flight operations"
      },
      correct: "B",
      figure: "sectional_chart_example.jpg",
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "CTAF stands for Common Traffic Advisory Frequency, used for self-announcing at non-towered airports."
    },
    {
      id: 124,
      tag: "weather",
      question: "What are characteristics of unstable air?",
      answers: {
        A: "Stratiform clouds and continuous precipitation",
        B: "Cumuliform clouds and turbulence",
        C: "Smooth air and poor visibility"
      },
      correct: "B",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "Unstable air produces cumulus clouds, turbulence, and showery precipitation."
    },
    {
      id: 125,
      tag: "regulations",
      question: "How often must a Remote Pilot Certificate holder complete recurrent training?",
      answers: {
        A: "Every 12 months",
        B: "Every 24 months",
        C: "Every 6 months"
      },
      correct: "B",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "A recurrent knowledge test or online training is required every 24 months to maintain currency."
    },
    {
      id: 126,
      tag: "airspace",
      question: "What airspace extends from the surface to 10,000 feet MSL surrounding the nation's busiest airports?",
      answers: {
        A: "Class C",
        B: "Class B",
        C: "Class D"
      },
      correct: "B",
      figure: null,
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "Class B airspace surrounds major airports and extends to 10,000 ft MSL."
    },
    {
      id: 127,
      tag: "weather",
      question: "A METAR reading 'TSRA' means:",
      answers: {
        A: "Thunderstorms and rain",
        B: "Turbulent skies and rain",
        C: "Temporary rain showers"
      },
      correct: "A",
      figure: null,
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "'TSRA' in METAR means thunderstorms with rain present."
    },
    {
      id: 128,
      tag: "charts",
      question: "A 'VFR Waypoint' marked by a magenta flag is used for:",
      answers: {
        A: "ATC controlled airspace transitions",
        B: "Pilot self-announcement points",
        C: "Drone launching locations"
      },
      correct: "B",
      figure: "sectional_chart_example.jpg",
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "Magenta flags indicate recommended VFR reporting points at non-towered airports."
    },
    {
      id: 129,
      tag: "regulations",
      question: "What is the minimum age to obtain a Remote Pilot Certificate under Part 107?",
      answers: {
        A: "14",
        B: "16",
        C: "18"
      },
      correct: "B",
      figure: null,
      source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
      explanation: "You must be at least 16 years old to hold a Remote Pilot Certificate."
    },
    {
      id: 130,
      tag: "loading",
      question: "A forward CG causes which characteristic in flight?",
      answers: {
        A: "Improved maneuverability",
        B: "Higher stall speed and stability",
        C: "Lower stall speed and instability"
      },
      correct: "B",
      figure: null,
      source: "https://pilotinstitute.com/part-107-practice-test/",
      explanation: "Forward CG increases stability but also increases stall speed."
    },
  

      {
        id: 131,
        tag: "weather",
        question: "In METAR, what does 'BR' stand for?",
        answers: {
          A: "Broken clouds",
          B: "Mist",
          C: "Breezy conditions"
        },
        correct: "B",
        figure: null,
        source: "https://pilotinstitute.com/part-107-practice-test/",
        explanation: "'BR' in METAR codes stands for mist, indicating visibility between 5/8 mile and 6 miles."
      },
      {
        id: 132,
        tag: "airspace",
        question: "A dashed magenta line around an airport indicates:",
        answers: {
          A: "Class C airspace",
          B: "Class E airspace starting at the surface",
          C: "Class D airspace"
        },
        correct: "B",
        figure: "sectional_chart_example.jpg",
        source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
        explanation: "Dashed magenta indicates Class E airspace beginning at the surface."
      },
      {
        id: 133,
        tag: "weather",
        question: "Which type of fog forms when warm moist air moves over a cooler surface?",
        answers: {
          A: "Radiation fog",
          B: "Advection fog",
          C: "Upslope fog"
        },
        correct: "B",
        figure: null,
        source: "https://pilotinstitute.com/part-107-practice-test/",
        explanation: "Advection fog forms when warm moist air moves horizontally over a cool surface."
      },
      {
        id: 134,
        tag: "loading",
        question: "If weight is added aft of the center of gravity, the aircraft will:",
        answers: {
          A: "Become more stable",
          B: "Become less stable and more difficult to recover from stalls",
          C: "Become easier to recover from stalls"
        },
        correct: "B",
        figure: null,
        source: "https://pilotinstitute.com/part-107-practice-test/",
        explanation: "Adding weight aft of CG makes the aircraft less stable and harder to recover."
      },
      {
        id: 135,
        tag: "regulations",
        question: "When must you file an accident report with the FAA under Part 107?",
        answers: {
          A: "Within 48 hours of any incident",
          B: "Within 10 days if serious injury or $500+ property damage occurs",
          C: "Only if ATC requests it"
        },
        correct: "B",
        figure: null,
        source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
        explanation: "Part 107 requires an accident report within 10 days if there's serious injury or $500+ in property damage."
      },
      {
        id: 136,
        tag: "airspace",
        question: "What is the typical radius of Class C airspace?",
        answers: {
          A: "5 nautical miles",
          B: "10 nautical miles",
          C: "20 nautical miles"
        },
        correct: "B",
        figure: null,
        source: "https://pilotinstitute.com/part-107-practice-test/",
        explanation: "Class C airspace typically extends 10 nm from the primary airport."
      },
      {
        id: 137,
        tag: "weather",
        question: "Which weather report provides forecasted surface winds?",
        answers: {
          A: "METAR",
          B: "TAF",
          C: "SIGMET"
        },
        correct: "B",
        figure: null,
        source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
        explanation: "TAF (Terminal Aerodrome Forecast) provides predicted surface winds for a specific airport."
      },
      {
        id: 138,
        tag: "charts",
        question: "On a sectional chart, what does a solid magenta circle represent?",
        answers: {
          A: "Class D airspace",
          B: "Class C airspace",
          C: "Non-towered airport with Class E airspace starting at surface"
        },
        correct: "C",
        figure: "sectional_chart_example.jpg",
        source: "https://pilotinstitute.com/part-107-practice-test/",
        explanation: "A solid magenta circle indicates Class E airspace starts at surface at a non-towered airport."
      },
      {
        id: 139,
        tag: "loading",
        question: "If an sUAS’s center of gravity is too far forward, the aircraft will:",
        answers: {
          A: "Be less stable but easier to pitch up",
          B: "Be more stable but harder to climb",
          C: "Be prone to high-speed stalls"
        },
        correct: "B",
        figure: null,
        source: "https://pilotinstitute.com/part-107-practice-test/",
        explanation: "A forward CG increases stability but reduces climb performance and increases stall speed."
      },
      {
        id: 140,
        tag: "weather",
        question: "Which condition increases the likelihood of a temperature inversion?",
        answers: {
          A: "Overcast skies",
          B: "Clear, calm night",
          C: "Strong surface winds"
        },
        correct: "B",
        figure: null,
        source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
        explanation: "Clear skies and calm winds allow surface cooling, leading to a temperature inversion."
      },
      {
        id: 141,
        tag: "airspace",
        question: "Class E airspace extends upward from either 700 or 1,200 feet AGL up to but not including:",
        answers: {
          A: "14,500 feet MSL",
          B: "18,000 feet MSL",
          C: "24,000 feet MSL"
        },
        correct: "B",
        figure: null,
        source: "https://pilotinstitute.com/part-107-practice-test/",
        explanation: "Class E airspace goes up to but does not include 18,000 ft MSL."
      },
      {
        id: 142,
        tag: "weather",
        question: "The presence of standing lenticular clouds indicates:",
        answers: {
          A: "Light turbulence",
          B: "Strong turbulence and possible mountain wave activity",
          C: "Calm stable air"
        },
        correct: "B",
        figure: null,
        source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
        explanation: "Lenticular clouds signal mountain wave activity and strong turbulence aloft."
      },
      {
        id: 143,
        tag: "charts",
        question: "A star symbol above an airport symbol on sectional charts indicates:",
        answers: {
          A: "ATIS broadcast available",
          B: "Airport with rotating beacon",
          C: "Controlled airport with Class C airspace"
        },
        correct: "B",
        figure: "sectional_chart_example.jpg",
        source: "https://pilotinstitute.com/part-107-practice-test/",
        explanation: "A star indicates the airport has a rotating beacon operating in controlled airspace."
      },
      {
        id: 144,
        tag: "regulations",
        question: "Under Part 107, operations from a moving vehicle are only allowed:",
        answers: {
          A: "In rural areas",
          B: "Under direct ATC supervision",
          C: "When operating within Class G airspace"
        },
        correct: "A",
        figure: null,
        source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
        explanation: "Part 107 allows operation from a moving vehicle only in sparsely populated areas."
      },
      {
        id: 145,
        tag: "loading",
        question: "What happens if you exceed maximum takeoff weight?",
        answers: {
          A: "Higher stall speed and longer takeoff distance",
          B: "Improved climb performance",
          C: "Lower stall speed and shorter landing"
        },
        correct: "A",
        figure: null,
        source: "https://pilotinstitute.com/part-107-practice-test/",
        explanation: "Exceeding MTOW increases stall speed, reduces climb, and increases takeoff/landing distance."
      },
      {
        id: 146,
        tag: "weather",
        question: "What effect does high density altitude have on UAS performance?",
        answers: {
          A: "Decreased propeller efficiency",
          B: "Increased propeller efficiency",
          C: "No effect on UAS"
        },
        correct: "A",
        figure: null,
        source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
        explanation: "High density altitude lowers air density, reducing propeller efficiency and lift."
      },
      {
        id: 147,
        tag: "regulations",
        question: "Remote PIC must retain records of maintenance, inspection, and repair for:",
        answers: {
          A: "3 months",
          B: "6 months",
          C: "12 months"
        },
        correct: "C",
        figure: null,
        source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
        explanation: "Maintenance records must be retained for 12 months under Part 107."
      },
      {
        id: 148,
        tag: "weather",
        question: "When reading a TAF, what does 'FM' indicate?",
        answers: {
          A: "Forecast valid until midnight",
          B: "Conditions expected from a specific time",
          C: "Frequency modulation"
        },
        correct: "B",
        figure: null,
        source: "https://pilotinstitute.com/part-107-practice-test/",
        explanation: "'FM' means conditions are forecast to begin at that specific time in a TAF."
      },
      {
        id: 149,
        tag: "charts",
        question: "A magenta 'C' symbol on a sectional chart near an airport indicates:",
        answers: {
          A: "CTAF frequency is the same as ATIS",
          B: "CTAF is used in place of tower frequency",
          C: "CTAF is also the UNICOM frequency"
        },
        correct: "B",
        figure: "sectional_chart_example.jpg",
        source: "https://pilotinstitute.com/part-107-practice-test/",
        explanation: "Magenta 'C' shows CTAF replaces tower frequency at a non-towered airport."
      },
      {
        id: 150,
        tag: "airspace",
        question: "What does 'MTR' refer to on a sectional chart?",
        answers: {
          A: "Military training route",
          B: "Marine traffic radar zone",
          C: "Municipal traffic routing"
        },
        correct: "A",
        figure: "sectional_chart_example.jpg",
        source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
        explanation: "'MTR' indicates Military Training Routes marked as VR (visual) or IR (IFR)."
      },
 
        {
          id: 151,
          tag: "airspace",
          question: "How is Class E airspace starting at 700 feet AGL depicted on a sectional chart?",
          answers: {
            A: "Dashed magenta line",
            B: "Shaded magenta area",
            C: "Solid blue line"
          },
          correct: "B",
          figure: "sectional_chart_example.jpg",
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "A shaded magenta area indicates Class E airspace starting at 700 feet AGL."
        },
        {
          id: 152,
          tag: "weather",
          question: "What is a characteristic of stable air?",
          answers: {
            A: "Turbulence and good visibility",
            B: "Stratiform clouds and smooth air",
            C: "Cumulus clouds and showers"
          },
          correct: "B",
          figure: null,
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "Stable air produces smooth air, stratiform clouds, poor visibility, and steady precipitation."
        },
        {
          id: 153,
          tag: "charts",
          question: "What does a 'VFR Waypoint' symbol look like on a sectional chart?",
          answers: {
            A: "Blue flag",
            B: "Magenta flag",
            C: "Blue star"
          },
          correct: "A",
          figure: "sectional_chart_example.jpg",
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "A blue flag marks a VFR Waypoint used for pilot navigation when approaching Class B, C, or D airspace."
        },
        {
          id: 154,
          tag: "regulations",
          question: "Under Part 107, a remote PIC may deviate from ATC instructions only:",
          answers: {
            A: "With ATC verbal approval",
            B: "During an emergency",
            C: "Never"
          },
          correct: "B",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Deviations from ATC clearance are only allowed during emergencies."
        },
        {
          id: 155,
          tag: "weather",
          question: "If the temperature and dew point are close together, what type of weather is likely?",
          answers: {
            A: "Clear skies",
            B: "Fog or low clouds",
            C: "Strong winds"
          },
          correct: "B",
          figure: null,
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "A small temperature/dewpoint spread indicates high humidity, often leading to fog or low clouds."
        },
        {
          id: 156,
          tag: "airspace",
          question: "What class of airspace requires a two-way radio and ATC clearance to enter?",
          answers: {
            A: "Class C",
            B: "Class B",
            C: "Class D"
          },
          correct: "B",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Class B airspace requires an explicit ATC clearance to enter."
        },
        {
          id: 157,
          tag: "loading",
          question: "What could happen if a drone is loaded beyond its maximum weight?",
          answers: {
            A: "Increased climb performance",
            B: "Reduced battery life, higher stall speed, and longer landing distance",
            C: "No significant effect unless flying above 400 feet"
          },
          correct: "B",
          figure: null,
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "Overloading increases stall speed, reduces battery life, increases landing/takeoff distances."
        },
        {
          id: 158,
          tag: "weather",
          question: "What causes surface inversions?",
          answers: {
            A: "Warm air aloft over cold surface air at night",
            B: "Cloudy skies and high humidity",
            C: "Strong winds mixing surface layers"
          },
          correct: "A",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Surface inversions occur at night with radiational cooling: warm air aloft, cooler surface."
        },
        {
          id: 159,
          tag: "charts",
          question: "How is a control tower frequency shown on a sectional chart?",
          answers: {
            A: "Magenta box with 'CTAF'",
            B: "Blue box with frequency next to airport name",
            C: "Star symbol above airport name"
          },
          correct: "B",
          figure: "sectional_chart_example.jpg",
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "A blue box next to the airport name contains the tower frequency."
        },
        {
          id: 160,
          tag: "regulations",
          question: "What must a remote PIC do prior to each flight?",
          answers: {
            A: "Call the FAA Flight Service Station",
            B: "Check that the drone is airworthy and safe for operation",
            C: "Contact the nearest ATC facility"
          },
          correct: "B",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "The remote PIC must inspect the sUAS to ensure it's in a safe condition before flight."
        },
        {
          id: 161,
          tag: "airspace",
          question: "A magenta dashed line surrounding an airport signifies:",
          answers: {
            A: "Class D airspace",
            B: "Class E airspace at surface",
            C: "Military operations area"
          },
          correct: "B",
          figure: "sectional_chart_example.jpg",
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Dashed magenta signifies Class E airspace starting at surface."
        },
        {
          id: 162,
          tag: "weather",
          question: "Which condition is favorable for thunderstorm formation?",
          answers: {
            A: "Stable, dry air",
            B: "Moist, unstable air and lifting mechanism",
            C: "Cool, dry descending air"
          },
          correct: "B",
          figure: null,
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "Thunderstorms need moisture, instability, and lifting action."
        },
        {
          id: 163,
          tag: "charts",
          question: "A magenta flag symbol indicates:",
          answers: {
            A: "Airport with beacon",
            B: "VFR Waypoint for traffic advisories",
            C: "Checkpoint for ATC reporting"
          },
          correct: "C",
          figure: "sectional_chart_example.jpg",
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "Magenta flag = VFR waypoints requiring position reporting to ATC in some conditions."
        },
        {
          id: 164,
          tag: "regulations",
          question: "What is the maximum allowable ground speed under Part 107?",
          answers: {
            A: "87 knots (100 mph)",
            B: "100 knots (115 mph)",
            C: "120 knots (138 mph)"
          },
          correct: "A",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Part 107 limits maximum groundspeed to 87 knots (100 mph)."
        },
        {
          id: 165,
          tag: "weather",
          question: "The presence of virga indicates:",
          answers: {
            A: "Rain reaching the surface",
            B: "Precipitation evaporating before reaching the surface",
            C: "Fog formation imminent"
          },
          correct: "B",
          figure: null,
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "Virga is precipitation that evaporates before reaching ground, common in dry air masses."
        },
        {
          id: 166,
          tag: "airspace",
          question: "The radius of the inner circle of Class C airspace typically extends:",
          answers: {
            A: "4 nautical miles",
            B: "5 nautical miles",
            C: "10 nautical miles"
          },
          correct: "B",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Inner core radius of Class C airspace is 5 NM from the primary airport."
        },
        {
          id: 167,
          tag: "weather",
          question: "A SIGMET provides warnings for:",
          answers: {
            A: "Convective weather hazards",
            B: "Non-convective weather hazards like severe icing or turbulence",
            C: "Wind shear below 1,000 feet"
          },
          correct: "B",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "SIGMET = significant meteorological info about severe non-convective hazards."
        },
        {
          id: 168,
          tag: "charts",
          question: "The symbol for a private airport is:",
          answers: {
            A: "Solid magenta circle with 'Pvt'",
            B: "Solid blue circle with 'Pvt'",
            C: "Dashed magenta circle"
          },
          correct: "A",
          figure: "sectional_chart_example.jpg",
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "A solid magenta circle with 'Pvt' marks a private non-towered airport."
        },
        {
          id: 169,
          tag: "weather",
          question: "What weather condition should a pilot expect with a fast-moving cold front?",
          answers: {
            A: "Smooth air and stratiform clouds",
            B: "Turbulent air, showers, and cumulonimbus clouds",
            C: "Gradual wind shift and light rain"
          },
          correct: "B",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Cold fronts bring turbulence, convective activity, and cumulonimbus clouds."
        },
        {
          id: 170,
          tag: "regulations",
          question: "What action is required if a remote ID malfunction occurs in flight?",
          answers: {
            A: "Land the drone as soon as practicable",
            B: "Contact FAA immediately",
            C: "Continue flight but log the malfunction"
          },
          correct: "A",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Regulations require you to land as soon as practicable if Remote ID fails in flight."
        },
        {
          id: 171,
          tag: "airspace",
          question: "Which airspace requires ATC authorization for sUAS operation under Part 107?",
          answers: {
            A: "Class G",
            B: "Class E",
            C: "Class C"
          },
          correct: "C",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "ATC authorization is required in Class B, C, D, or surface Class E airspace."
        },
        {
          id: 172,
          tag: "weather",
          question: "When the temperature-dew point spread is small and decreasing, what type of weather is likely?",
          answers: {
            A: "Thunderstorms",
            B: "Improved visibility",
            C: "Fog or low clouds"
          },
          correct: "C",
          figure: null,
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "A small, narrowing temperature/dewpoint spread indicates fog or low clouds forming."
        },
        {
          id: 173,
          tag: "charts",
          question: "A blue segmented line on a sectional chart represents:",
          answers: {
            A: "Class D airspace boundary",
            B: "Military operations area",
            C: "Special use airspace"
          },
          correct: "A",
          figure: "sectional_chart_example.jpg",
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Blue segmented lines indicate Class D airspace boundaries."
        },
        {
          id: 174,
          tag: "weather",
          question: "What weather condition occurs when moist unstable air is forced upward?",
          answers: {
            A: "Good visibility",
            B: "Stratiform clouds",
            C: "Cumulus clouds with turbulence"
          },
          correct: "C",
          figure: null,
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "Moist unstable air forced upward creates cumulus clouds, turbulence, and showers."
        },
        {
          id: 175,
          tag: "regulations",
          question: "Who is directly responsible for ensuring safe UAS operation?",
          answers: {
            A: "Visual Observer",
            B: "Remote Pilot in Command",
            C: "Owner of the UAS"
          },
          correct: "B",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "The Remote PIC is directly responsible for safe operation under Part 107."
        },
        {
          id: 176,
          tag: "airspace",
          question: "Class B airspace generally extends up to:",
          answers: {
            A: "10,000 feet MSL",
            B: "12,500 feet MSL",
            C: "18,000 feet MSL"
          },
          correct: "A",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Class B airspace generally extends from surface to 10,000 feet MSL."
        },
        {
          id: 177,
          tag: "charts",
          question: "On a sectional chart, a magenta 'R' inside a circle indicates:",
          answers: {
            A: "Restricted area",
            B: "Private airport requiring prior permission",
            C: "VFR waypoint"
          },
          correct: "A",
          figure: "sectional_chart_example.jpg",
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "A magenta 'R' indicates a restricted area requiring authorization to enter."
        },
        {
          id: 178,
          tag: "weather",
          question: "How do surface winds differ from winds aloft?",
          answers: {
            A: "They blow parallel to isobars",
            B: "They blow at same speed but in opposite direction",
            C: "They are slower and more influenced by terrain"
          },
          correct: "C",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Surface winds are slower and directionally altered by terrain and friction."
        },
        {
          id: 179,
          tag: "regulations",
          question: "Under Part 107, a visual observer is:",
          answers: {
            A: "Required for every flight",
            B: "Optional but must maintain visual contact if used",
            C: "Only required for night operations"
          },
          correct: "B",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "A visual observer is optional but must maintain visual contact when used."
        },
        {
          id: 180,
          tag: "airspace",
          question: "Controlled airspace at an airport without a control tower is:",
          answers: {
            A: "Class G",
            B: "Class E starting at surface",
            C: "Class D"
          },
          correct: "B",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Controlled airspace without tower = Class E surface area."
        },
        {
          id: 181,
          tag: "weather",
          question: "What weather phenomenon causes a temperature inversion?",
          answers: {
            A: "Warm air over cold ground",
            B: "Strong surface winds",
            C: "Surface heating"
          },
          correct: "A",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Temperature inversions occur when warm air overlies cooler surface air."
        },
        {
          id: 182,
          tag: "regulations",
          question: "To operate over a human assembly under Part 107, the drone must be:",
          answers: {
            A: "Category 1 or 2 compliant",
            B: "Over 55 lbs",
            C: "Certified under Part 91"
          },
          correct: "A",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Operations over people require Category 1 or 2 drones or waivers."
        },
        {
          id: 183,
          tag: "charts",
          question: "What does a magenta dashed box labeled 'TRSA' mean on a sectional chart?",
          answers: {
            A: "Temporary restricted airspace",
            B: "Terminal Radar Service Area",
            C: "Temporary radar station"
          },
          correct: "B",
          figure: "sectional_chart_example.jpg",
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "'TRSA' = Terminal Radar Service Area for optional radar advisory services."
        },
        {
          id: 184,
          tag: "weather",
          question: "Which statement about atmospheric stability is correct?",
          answers: {
            A: "Stable air resists vertical motion",
            B: "Stable air promotes thunderstorms",
            C: "Stable air causes convective clouds"
          },
          correct: "A",
          figure: null,
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "Stable air resists vertical motion; leads to stratiform clouds and smooth air."
        },
        {
          id: 185,
          tag: "airspace",
          question: "What does 'MOA' stand for on a sectional chart?",
          answers: {
            A: "Military operations area",
            B: "Magnetic orientation area",
            C: "Marine operations airspace"
          },
          correct: "A",
          figure: "sectional_chart_example.jpg",
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "'MOA' = Military Operations Area; caution advised during military activity."
        },
        {
          id: 186,
          tag: "weather",
          question: "What type of fog forms in valleys on clear, calm nights?",
          answers: {
            A: "Upslope fog",
            B: "Radiation fog",
            C: "Advection fog"
          },
          correct: "B",
          figure: null,
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "Radiation fog forms in low areas under clear skies and calm winds at night."
        },
        {
          id: 187,
          tag: "charts",
          question: "A 'VR' route marked on a sectional chart indicates:",
          answers: {
            A: "Visual reporting checkpoint",
            B: "Military visual route below 1,500 feet AGL",
            C: "Visual radar navigation corridor"
          },
          correct: "B",
          figure: "sectional_chart_example.jpg",
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "'VR' = Military Visual Flight Rules route below 1,500 AGL."
        },
        {
          id: 188,
          tag: "weather",
          question: "What weather report describes conditions expected at an airport?",
          answers: {
            A: "SIGMET",
            B: "METAR",
            C: "TAF"
          },
          correct: "C",
          figure: null,
          source: "https://pilotinstitute.com/part-107-practice-test/",
          explanation: "TAF provides forecasts for specific airports."
        },
        {
          id: 189,
          tag: "regulations",
          question: "When must a remote PIC yield the right of way?",
          answers: {
            A: "Only to manned airplanes",
            B: "To all other aircraft, including balloons and gliders",
            C: "Only to other drones"
          },
          correct: "B",
          figure: null,
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Remote PIC must yield to all other aircraft."
        },
        {
          id: 190,
          tag: "airspace",
          question: "How are restricted areas shown on sectional charts?",
          answers: {
            A: "Solid magenta outline",
            B: "Blue hatched boundary with 'R-###'",
            C: "Dashed blue circle"
          },
          correct: "B",
          figure: "sectional_chart_example.jpg",
          source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
          explanation: "Restricted areas use blue hatched boundaries labeled 'R-###'."
        },
     
  
          {
            id: 191,
            tag: "weather",
            question: "What type of cloud is often associated with turbulence and strong updrafts?",
            answers: {
              A: "Stratus",
              B: "Cumulus",
              C: "Cumulonimbus"
            },
            correct: "C",
            figure: null,
            source: "https://pilotinstitute.com/part-107-practice-test/",
            explanation: "Cumulonimbus clouds are storm clouds associated with turbulence, updrafts, and hazardous weather."
          },
          {
            id: 192,
            tag: "charts",
            question: "What does a dashed blue line on a sectional chart signify?",
            answers: {
              A: "Military operations area boundary",
              B: "Special use airspace boundary",
              C: "Class D airspace boundary"
            },
            correct: "C",
            figure: "sectional_chart_example.jpg",
            source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
            explanation: "Dashed blue lines depict Class D airspace."
          },
          {
            id: 193,
            tag: "regulations",
            question: "What must a Remote PIC do when deviating from a rule during an emergency?",
            answers: {
              A: "Report the deviation to the FAA upon request",
              B: "Notify ATC immediately",
              C: "Submit a written report within 10 days"
            },
            correct: "A",
            figure: null,
            source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
            explanation: "You only need to report an emergency deviation if the FAA specifically requests it."
          },
          {
            id: 194,
            tag: "weather",
            question: "Which type of NOTAM provides information on temporary flight restrictions?",
            answers: {
              A: "NOTAM (FDC)",
              B: "NOTAM (D)",
              C: "Military NOTAM"
            },
            correct: "A",
            figure: null,
            source: "https://pilotinstitute.com/part-107-practice-test/",
            explanation: "NOTAM (FDC) is issued for regulatory changes like temporary flight restrictions."
          },
          {
            id: 195,
            tag: "airspace",
            question: "What airspace class requires a Mode C transponder above 10,000 feet MSL?",
            answers: {
              A: "Class B",
              B: "Class E",
              C: "All airspace above 10,000 feet except Class A"
            },
            correct: "C",
            figure: null,
            source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
            explanation: "A Mode C transponder is required above 10,000 feet MSL, excluding Class A airspace."
          },
          {
            id: 196,
            tag: "charts",
            question: "What does 'VFR Waypoint' symbol on a sectional chart look like?",
            answers: {
              A: "Blue flag",
              B: "Magenta flag",
              C: "Black triangle"
            },
            correct: "A",
            figure: "sectional_chart_example.jpg",
            source: "https://pilotinstitute.com/part-107-practice-test/",
            explanation: "A blue flag marks a VFR Waypoint for traffic pattern entry or reporting."
          },
          {
            id: 197,
            tag: "weather",
            question: "In which type of air mass would you expect poor visibility and steady precipitation?",
            answers: {
              A: "Unstable moist air",
              B: "Stable moist air",
              C: "Stable dry air"
            },
            correct: "B",
            figure: null,
            source: "https://pilotinstitute.com/part-107-practice-test/",
            explanation: "Stable, moist air leads to poor visibility, stratiform clouds, and steady precipitation."
          },
          {
            id: 198,
            tag: "regulations",
            question: "How soon must you report a serious UAS accident to the FAA?",
            answers: {
              A: "Within 7 days",
              B: "Within 10 days",
              C: "Immediately"
            },
            correct: "B",
            figure: null,
            source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
            explanation: "Serious injuries or property damage accidents must be reported within 10 days."
          },
          {
            id: 199,
            tag: "charts",
            question: "A runway symbol with no control tower is shown on a sectional chart as:",
            answers: {
              A: "Blue airport symbol",
              B: "Magenta airport symbol",
              C: "Magenta airport symbol with control tower"
            },
            correct: "B",
            figure: "sectional_chart_example.jpg",
            source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
            explanation: "Magenta indicates an airport without a control tower; blue indicates towered."
          },
          {
            id: 200,
            tag: "weather",
            question: "What is wind shear?",
            answers: {
              A: "A sudden change in wind speed and/or direction over a short distance",
              B: "A steady crosswind above 5 knots",
              C: "A low-level turbulence near terrain"
            },
            correct: "A",
            figure: null,
            source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
            explanation: "Wind shear is a rapid change in wind speed or direction over a short distance."
          },

          
            {
              id: 201,
              tag: "weather",
              question: "What effect does high humidity have on aircraft performance?",
              answers: {
                A: "Increases engine power",
                B: "Decreases engine and propeller efficiency",
                C: "No effect on performance"
              },
              correct: "B",
              figure: null,
              source: "https://pilotinstitute.com/part-107-practice-test/",
              explanation: "High humidity reduces air density, lowering engine power and propeller efficiency."
            },
            {
              id: 202,
              tag: "charts",
              question: "What does a magenta dashed line indicate on a sectional chart?",
              answers: {
                A: "Class E airspace starting at the surface",
                B: "Class D airspace boundary",
                C: "Restricted area"
              },
              correct: "A",
              figure: "sectional_chart_example.jpg",
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "Dashed magenta lines indicate Class E airspace that extends to the surface."
            },
            {
              id: 203,
              tag: "regulations",
              question: "What is the maximum groundspeed allowed under Part 107?",
              answers: {
                A: "100 mph",
                B: "87 knots",
                C: "87 mph"
              },
              correct: "B",
              figure: null,
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "Maximum groundspeed is 87 knots (100 mph) under Part 107."
            },
            {
              id: 204,
              tag: "airspace",
              question: "What does 'MTR' stand for on a sectional chart?",
              answers: {
                A: "Minimum terrain route",
                B: "Military training route",
                C: "Mandatory traffic reporting"
              },
              correct: "B",
              figure: "sectional_chart_example.jpg",
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "'MTR' stands for Military Training Route."
            },
            {
              id: 205,
              tag: "weather",
              question: "A 'SIGMET' is issued for:",
              answers: {
                A: "Hazardous weather affecting all aircraft",
                B: "Weather affecting only VFR pilots",
                C: "Temporary flight restrictions"
              },
              correct: "A",
              figure: null,
              source: "https://pilotinstitute.com/part-107-practice-test/",
              explanation: "SIGMETs warn of significant weather hazards affecting all aircraft."
            },
            {
              id: 206,
              tag: "charts",
              question: "What color are airports with control towers depicted in on sectional charts?",
              answers: {
                A: "Blue",
                B: "Magenta",
                C: "Green"
              },
              correct: "A",
              figure: "sectional_chart_example.jpg",
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "Controlled airports (with towers) are shown in blue; uncontrolled airports are magenta."
            },
            {
              id: 207,
              tag: "regulations",
              question: "Part 107 prohibits flight over people unless:",
              answers: {
                A: "The people are indoors or under a covered structure",
                B: "A waiver is obtained",
                C: "The operation is part of a public safety mission"
              },
              correct: "A",
              figure: null,
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "Part 107 allows flight over people only if they are under cover or inside."
            },
            {
              id: 208,
              tag: "airspace",
              question: "What is required to operate in Class B airspace?",
              answers: {
                A: "Remote ID authorization",
                B: "ATC clearance",
                C: "Visual observer approval"
              },
              correct: "B",
              figure: null,
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "Operating in Class B requires prior ATC authorization."
            },
            {
              id: 209,
              tag: "weather",
              question: "You see towering cumulus clouds ahead. What can you expect?",
              answers: {
                A: "Smooth, stable air",
                B: "Turbulence and possible thunderstorms",
                C: "Improving visibility"
              },
              correct: "B",
              figure: null,
              source: "https://pilotinstitute.com/part-107-practice-test/",
              explanation: "Towering cumulus clouds often develop into thunderstorms and bring turbulence."
            },
            {
              id: 210,
              tag: "charts",
              question: "The number '34' near a Class C airport on a sectional chart represents:",
              answers: {
                A: "Class C airspace ceiling of 3,400 feet MSL",
                B: "Class C floor of 3,400 feet MSL",
                C: "Class C airspace radius of 3.4 NM"
              },
              correct: "A",
              figure: "sectional_chart_example.jpg",
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "'34' indicates a Class C ceiling of 3,400 ft MSL."
            },
            {
              id: 211,
              tag: "regulations",
              question: "Who is responsible for checking airspace before flight?",
              answers: {
                A: "Visual observer",
                B: "Remote PIC",
                C: "Drone manufacturer"
              },
              correct: "B",
              figure: null,
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "The Remote PIC must verify airspace before operating."
            },
            {
              id: 212,
              tag: "airspace",
              question: "What is the lateral limit of Class D airspace?",
              answers: {
                A: "Typically 4 NM radius",
                B: "10 NM radius",
                C: "5 NM radius"
              },
              correct: "A",
              figure: null,
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "Class D generally extends about 4 nautical miles from the airport."
            },
            {
              id: 213,
              tag: "weather",
              question: "What conditions are most conducive to fog formation?",
              answers: {
                A: "Clear sky, calm wind, high humidity",
                B: "Overcast sky, moderate wind, low humidity",
                C: "Clear sky, strong wind, low humidity"
              },
              correct: "A",
              figure: null,
              source: "https://pilotinstitute.com/part-107-practice-test/",
              explanation: "Fog forms best under clear skies, calm winds, and high humidity."
            },
            {
              id: 214,
              tag: "charts",
              question: "A 'CTAF' frequency on a sectional chart indicates:",
              answers: {
                A: "Control tower frequency",
                B: "Common traffic advisory frequency",
                C: "ATIS frequency"
              },
              correct: "B",
              figure: "sectional_chart_example.jpg",
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "'CTAF' stands for Common Traffic Advisory Frequency for pilots to self-announce."
            },
            {
              id: 215,
              tag: "regulations",
              question: "When can you fly a drone under Part 107 at night?",
              answers: {
                A: "With anti-collision lighting",
                B: "With ATC clearance",
                C: "Only with a waiver"
              },
              correct: "A",
              figure: null,
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "Night flight is allowed if anti-collision lights are used."
            },
            {
              id: 216,
              tag: "weather",
              question: "A METAR reports visibility as '3SM'. What does this mean?",
              answers: {
                A: "3 meters visibility",
                B: "3 miles visibility",
                C: "3 kilometers visibility"
              },
              correct: "B",
              figure: null,
              source: "https://pilotinstitute.com/part-107-practice-test/",
              explanation: "'SM' means statute miles; visibility is 3 miles."
            },
            {
              id: 217,
              tag: "charts",
              question: "The term 'UNREL TWR' on a chart means:",
              answers: {
                A: "Unreliable tower frequency",
                B: "Uncontrolled tower",
                C: "Tower operations unreliable during posted hours"
              },
              correct: "A",
              figure: "sectional_chart_example.jpg",
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "'UNREL TWR' indicates tower frequency reliability cannot be assured."
            },
            {
              id: 218,
              tag: "regulations",
              question: "What is the minimum visibility allowed for a Part 107 operation?",
              answers: {
                A: "2 statute miles",
                B: "3 statute miles",
                C: "5 statute miles"
              },
              correct: "B",
              figure: null,
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "Minimum required visibility is 3 statute miles."
            },
            {
              id: 219,
              tag: "airspace",
              question: "A Class E airspace beginning at 1,200 feet AGL is shown by:",
              answers: {
                A: "Fuzzy magenta shading",
                B: "Fuzzy blue shading",
                C: "Dashed blue line"
              },
              correct: "A",
              figure: "sectional_chart_example.jpg",
              source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
              explanation: "Fuzzy magenta indicates Class E starting at 1,200 feet AGL."
            },
            {
              id: 220,
              tag: "weather",
              question: "What weather condition is associated with stable air?",
              answers: {
                A: "Cumulus clouds and gusty winds",
                B: "Stratus clouds and poor visibility",
                C: "Showery precipitation"
              },
              correct: "B",
              figure: null,
              source: "https://pilotinstitute.com/part-107-practice-test/",
              explanation: "Stable air leads to stratus clouds and reduced visibility."
            },
      
            

            



              {
                id: 221,
                tag: "regulations",
                question: "According to Part 107, what is the maximum altitude you may fly your drone without a waiver?",
                answers: {
                  A: "400 feet above ground level",
                  B: "500 feet above mean sea level",
                  C: "600 feet AGL"
                },
                correct: "A",
                figure: null,
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Part 107 limits sUAS flights to 400 feet AGL unless within 400 feet of a structure."
              },
              {
                id: 222,
                tag: "airspace",
                question: "What is a prohibited area?",
                answers: {
                  A: "An area where flight is allowed only with ATC clearance",
                  B: "An area where all flight is prohibited for security reasons",
                  C: "An area where flight is discouraged but not illegal"
                },
                correct: "B",
                figure: "sectional_chart_example.jpg",
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Prohibited areas are closed to all aircraft for national security reasons."
              },
              {
                id: 223,
                tag: "weather",
                question: "What causes temperature inversions?",
                answers: {
                  A: "Warm air at higher altitudes trapping cooler air below",
                  B: "Cold air rising above warm air",
                  C: "Advection of warm air over mountains"
                },
                correct: "A",
                figure: null,
                source: "https://pilotinstitute.com/part-107-practice-test/",
                explanation: "A temperature inversion occurs when warmer air overlies cooler air, trapping pollutants and moisture."
              },
              {
                id: 224,
                tag: "charts",
                question: "What does the notation 'R-2503' on a sectional chart indicate?",
                answers: {
                  A: "Restricted area 2503",
                  B: "Runway 2503 feet long",
                  C: "Radar site located at grid 2503"
                },
                correct: "A",
                figure: "sectional_chart_example.jpg",
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "'R-2503' indicates restricted area number 2503."
              },
              {
                id: 225,
                tag: "regulations",
                question: "A remote PIC operating under Part 107 must report an accident to the FAA within:",
                answers: {
                  A: "24 hours",
                  B: "10 days",
                  C: "48 hours"
                },
                correct: "B",
                figure: null,
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Accidents must be reported to the FAA within 10 days if they involve serious injury or property damage."
              },
              {
                id: 226,
                tag: "airspace",
                question: "Which airspace class requires a Mode C transponder?",
                answers: {
                  A: "Class E",
                  B: "Class D",
                  C: "Class B"
                },
                correct: "C",
                figure: null,
                source: "https://pilotinstitute.com/part-107-practice-test/",
                explanation: "Class B airspace requires a Mode C transponder for manned aircraft; not required for drones under Part 107."
              },
              {
                id: 227,
                tag: "weather",
                question: "Which cloud type is associated with steady rain and poor visibility?",
                answers: {
                  A: "Cumulus",
                  B: "Stratus",
                  C: "Cirrus"
                },
                correct: "B",
                figure: null,
                source: "https://pilotinstitute.com/part-107-practice-test/",
                explanation: "Stratus clouds bring steady precipitation and low visibility."
              },
              {
                id: 228,
                tag: "charts",
                question: "What is indicated by a solid magenta circle around an airport on a sectional chart?",
                answers: {
                  A: "Class E airspace with surface-based floor",
                  B: "Class C airspace",
                  C: "Class D airspace"
                },
                correct: "A",
                figure: "sectional_chart_example.jpg",
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Solid magenta indicates Class E airspace beginning at the surface."
              },
              {
                id: 229,
                tag: "regulations",
                question: "When is a visual observer required under Part 107?",
                answers: {
                  A: "Whenever the drone is out of sight of the PIC",
                  B: "Only for night operations",
                  C: "When the remote PIC is using first-person view goggles"
                },
                correct: "C",
                figure: null,
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "A visual observer is required if the PIC is using FPV to maintain visual line of sight."
              },
              {
                id: 230,
                tag: "airspace",
                question: "Special use airspace is indicated on a sectional chart by:",
                answers: {
                  A: "Solid blue lines",
                  B: "Dashed magenta lines",
                  C: "Blue hashed lines"
                },
                correct: "C",
                figure: "sectional_chart_example.jpg",
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Special use airspace like restricted or MOAs are depicted with blue hashed boundaries."
              },
              {
                id: 231,
                tag: "weather",
                question: "What is an occluded front?",
                answers: {
                  A: "A warm air mass wedged between two cold masses",
                  B: "A front that has stalled",
                  C: "A cold front that moves faster than a warm front"
                },
                correct: "A",
                figure: null,
                source: "https://pilotinstitute.com/part-107-practice-test/",
                explanation: "An occluded front occurs when a cold front overtakes a warm front, lifting the warm air off the ground."
              },
              {
                id: 232,
                tag: "charts",
                question: "A segmented circle on an airport diagram indicates:",
                answers: {
                  A: "No entry zone",
                  B: "Traffic pattern direction indicators",
                  C: "Helipad landing site"
                },
                correct: "B",
                figure: "airport_diagram_example.jpg",
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Segmented circles show traffic pattern direction indicators and wind cones."
              },
              {
                id: 233,
                tag: "regulations",
                question: "Under Part 107, operations from a moving vehicle are allowed:",
                answers: {
                  A: "Never allowed",
                  B: "Only over sparsely populated areas",
                  C: "With prior ATC approval"
                },
                correct: "B",
                figure: null,
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "You may operate from a moving vehicle if in a sparsely populated area."
              },
              {
                id: 234,
                tag: "airspace",
                question: "Who controls Class D airspace?",
                answers: {
                  A: "ATC tower at the airport",
                  B: "Flight Service Station",
                  C: "Regional ATC center"
                },
                correct: "A",
                figure: null,
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Class D airspace is controlled by the ATC tower at the airport."
              },
              {
                id: 235,
                tag: "weather",
                question: "Wind shear is most hazardous:",
                answers: {
                  A: "Near mountain ranges",
                  B: "During calm wind conditions",
                  C: "Near ground level during takeoff or landing"
                },
                correct: "C",
                figure: null,
                source: "https://pilotinstitute.com/part-107-practice-test/",
                explanation: "Wind shear near ground level is especially hazardous during takeoff or landing."
              },
              {
                id: 236,
                tag: "charts",
                question: "A magenta flag symbol on a sectional chart represents:",
                answers: {
                  A: "Control tower",
                  B: "VFR waypoints",
                  C: "VFR advisory checkpoints"
                },
                correct: "C",
                figure: "sectional_chart_example.jpg",
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Magenta flags indicate VFR advisory checkpoints for contact with ATC."
              },
              {
                id: 237,
                tag: "regulations",
                question: "A drone flying under Part 107 must yield right-of-way to:",
                answers: {
                  A: "Other drones",
                  B: "Manned aircraft",
                  C: "Hot air balloons only"
                },
                correct: "B",
                figure: null,
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Drones must yield right-of-way to all manned aircraft."
              },
              {
                id: 238,
                tag: "airspace",
                question: "What is a MOA on a sectional chart?",
                answers: {
                  A: "Military Operations Area",
                  B: "Mandatory Operations Area",
                  C: "Minimum Obstacle Altitude"
                },
                correct: "A",
                figure: "sectional_chart_example.jpg",
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "'MOA' stands for Military Operations Area."
              },
              {
                id: 239,
                tag: "weather",
                question: "A 'TFR' issued by NOTAM means:",
                answers: {
                  A: "Temporary Flight Restriction",
                  B: "Transponder Frequency Required",
                  C: "Tactical Flight Route"
                },
                correct: "A",
                figure: null,
                source: "https://pilotinstitute.com/part-107-practice-test/",
                explanation: "A TFR is a Temporary Flight Restriction issued via NOTAM."
              },
              {
                id: 240,
                tag: "charts",
                question: "A dashed blue line on a sectional chart indicates:",
                answers: {
                  A: "Class D airspace boundary",
                  B: "Class E airspace at surface level",
                  C: "Class C airspace boundary"
                },
                correct: "A",
                figure: "sectional_chart_example.jpg",
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Dashed blue indicates Class D airspace boundary."
              },
              {
                id: 241,
                tag: "regulations",
                question: "Part 107 prohibits careless or reckless operation that:",
                answers: {
                  A: "Violates any ATC clearance",
                  B: "Endangers life or property",
                  C: "Occurs near a public event"
                },
                correct: "B",
                figure: null,
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Careless or reckless operation that endangers life or property is prohibited."
              },
              {
                id: 242,
                tag: "airspace",
                question: "ATC authorization is required in which airspace classes?",
                answers: {
                  A: "Class B, C, D, and E surface",
                  B: "Class E and G",
                  C: "Class D only"
                },
                correct: "A",
                figure: null,
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Authorization is needed for operations in Class B, C, D, or E surface airspace."
              },
              {
                id: 243,
                tag: "weather",
                question: "A METAR reporting '+TSRA' indicates:",
                answers: {
                  A: "Thunderstorms with heavy rain",
                  B: "Light rain showers with thunder",
                  C: "Thunderstorms without precipitation"
                },
                correct: "A",
                figure: null,
                source: "https://pilotinstitute.com/part-107-practice-test/",
                explanation: "'+' indicates heavy intensity; TSRA means thunderstorms and rain."
              },
              {
                id: 244,
                tag: "charts",
                question: "A star symbol next to an airport name indicates:",
                answers: {
                  A: "ATIS frequency available",
                  B: "Airport beacon operating sunset to sunrise",
                  C: "Control tower is non-operational"
                },
                correct: "B",
                figure: "sectional_chart_example.jpg",
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "A star indicates an airport beacon operating from sunset to sunrise."
              },
              {
                id: 245,
                tag: "regulations",
                question: "When is a waiver required under Part 107?",
                answers: {
                  A: "To fly under 200 feet AGL",
                  B: "To fly over people not under a protective structure",
                  C: "To fly at an uncontrolled airport"
                },
                correct: "B",
                figure: null,
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "A waiver is required to fly over people not protected by a structure."
              },
              {
                id: 246,
                tag: "airspace",
                question: "What airspace is depicted with a magenta vignette?",
                answers: {
                  A: "Class G",
                  B: "Class E starting at 700 ft AGL",
                  C: "Class E starting at surface"
                },
                correct: "B",
                figure: "sectional_chart_example.jpg",
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "A shaded magenta vignette indicates Class E starting at 700 feet AGL."
              },
              {
                id: 247,
                tag: "weather",
                question: "A METAR reporting 'OVC010' means:",
                answers: {
                  A: "Overcast clouds at 10,000 feet",
                  B: "Overcast clouds at 1,000 feet",
                  C: "Broken clouds at 1,000 feet"
                },
                correct: "B",
                figure: null,
                source: "https://pilotinstitute.com/part-107-practice-test/",
                explanation: "'OVC010' means overcast clouds at 1,000 feet AGL."
              },
              {
                id: 248,
                tag: "charts",
                question: "A blue dashed circle around an airport indicates:",
                answers: {
                  A: "Class C airspace",
                  B: "Class D airspace",
                  C: "Class B airspace"
                },
                correct: "B",
                figure: "sectional_chart_example.jpg",
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "A blue dashed circle represents Class D airspace boundary."
              },
              {
                id: 249,
                tag: "regulations",
                question: "When may you operate above 400 feet under Part 107?",
                answers: {
                  A: "When inspecting a tall structure within 400 feet laterally",
                  B: "Never allowed under any circumstances",
                  C: "Only with an FAA waiver"
                },
                correct: "A",
                figure: null,
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "You may exceed 400 feet AGL if within 400 feet of a structure."
              },
              {
                id: 250,
                tag: "airspace",
                question: "When flying near Class E surface area extensions, what authorization is required?",
                answers: {
                  A: "ATC clearance",
                  B: "No authorization",
                  C: "Only visual observer approval"
                },
                correct: "A",
                figure: null,
                source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                explanation: "Authorization is required to operate in Class E surface extensions."
              },
    

              




                {
                  id: 251,
                  tag: "weather",
                  question: "How can you determine if an airport has a control tower when viewing a sectional chart?",
                  answers: {
                    A: "Airport name shown in blue",
                    B: "Airport symbol inside dashed magenta circle",
                    C: "Airport name shown in magenta",
                  },
                  correct: "A",
                  figure: "sectional_chart_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Airports with control towers are depicted in blue on sectional charts; those without towers are magenta."
                },
                {
                  id: 252,
                  tag: "regulations",
                  question: "When operating near a Class D airport, you must:",
                  answers: {
                    A: "Contact ATC before entering Class D airspace",
                    B: "Monitor UNICOM frequency",
                    C: "Fly no higher than 200 feet without permission"
                  },
                  correct: "A",
                  figure: null,
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Operations in Class D airspace require prior ATC authorization."
                },
                {
                  id: 253,
                  tag: "airspace",
                  question: "What is the floor of Class B airspace generally?",
                  answers: {
                    A: "At surface level",
                    B: "Typically 3,000 feet AGL",
                    C: "Varies individually per airport"
                  },
                  correct: "C",
                  figure: "sectional_chart_example.jpg",
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "Class B airspace is tailored to each airport and has varying floors and ceilings."
                },
                {
                  id: 254,
                  tag: "weather",
                  question: "What does 'SKC' mean in a METAR report?",
                  answers: {
                    A: "Sky clear",
                    B: "Scattered clouds",
                    C: "Showers likely"
                  },
                  correct: "A",
                  figure: null,
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "'SKC' indicates sky clear in a METAR weather report."
                },
                {
                  id: 255,
                  tag: "charts",
                  question: "What does a magenta dashed circle represent on a sectional chart?",
                  answers: {
                    A: "Class E airspace starting at surface",
                    B: "Class D airspace",
                    C: "Military operations area"
                  },
                  correct: "A",
                  figure: "sectional_chart_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Magenta dashed lines indicate Class E airspace beginning at the surface."
                },
                {
                  id: 256,
                  tag: "regulations",
                  question: "When may a remote PIC deviate from an ATC clearance?",
                  answers: {
                    A: "Whenever necessary for operational efficiency",
                    B: "In an emergency",
                    C: "Never under Part 107"
                  },
                  correct: "B",
                  figure: null,
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "A remote PIC may deviate from an ATC clearance only in an emergency."
                },
                {
                  id: 257,
                  tag: "weather",
                  question: "What conditions are associated with stable air?",
                  answers: {
                    A: "Good visibility and turbulence",
                    B: "Poor visibility and smooth air",
                    C: "Showery precipitation and unstable air"
                  },
                  correct: "B",
                  figure: null,
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "Stable air produces poor visibility and smooth flying conditions."
                },
                {
                  id: 258,
                  tag: "airspace",
                  question: "What airspace requires a transponder for manned aircraft operations?",
                  answers: {
                    A: "Class D",
                    B: "Class B and C",
                    C: "Class E"
                  },
                  correct: "B",
                  figure: null,
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "Class B and C airspace require transponders for manned aircraft."
                },
                {
                  id: 259,
                  tag: "charts",
                  question: "A 'C' in a circle next to a frequency on a sectional chart indicates:",
                  answers: {
                    A: "CTAF frequency",
                    B: "Control tower required",
                    C: "Center frequency"
                  },
                  correct: "A",
                  figure: "sectional_chart_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "'C' in a circle shows CTAF (Common Traffic Advisory Frequency)."
                },
                {
                  id: 260,
                  tag: "regulations",
                  question: "Which of the following best describes a NOTAM?",
                  answers: {
                    A: "A notification to ATC from pilots",
                    B: "A notice to airmen about temporary flight information",
                    C: "A mandatory clearance"
                  },
                  correct: "B",
                  figure: null,
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "NOTAM stands for Notice to Airmen; it alerts pilots about temporary information."
                },
                {
                  id: 261,
                  tag: "weather",
                  question: "What is the definition of dew point?",
                  answers: {
                    A: "Temperature when condensation begins",
                    B: "Temperature when evaporation starts",
                    C: "Temperature at freezing level"
                  },
                  correct: "A",
                  figure: null,
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "Dew point is the temperature at which air becomes saturated and condensation begins."
                },
                {
                  id: 262,
                  tag: "charts",
                  question: "What does an 'L' symbol next to an airport indicate on a sectional?",
                  answers: {
                    A: "Lighting is available",
                    B: "Limited services",
                    C: "Landing prohibited"
                  },
                  correct: "A",
                  figure: "sectional_chart_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "'L' indicates lighting is available for night operations."
                },
                {
                  id: 263,
                  tag: "airspace",
                  question: "What is the radius of Class C airspace?",
                  answers: {
                    A: "10 NM core",
                    B: "5 NM core and 10 NM shelf",
                    C: "5 NM radius"
                  },
                  correct: "B",
                  figure: "sectional_chart_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Class C airspace generally has a 5 NM radius core and 10 NM shelf area."
                },
                {
                  id: 264,
                  tag: "regulations",
                  question: "When must a person register a sUAS?",
                  answers: {
                    A: "When it weighs more than 0.55 lbs",
                    B: "When operating commercially only",
                    C: "All sUAS must be registered regardless of weight"
                  },
                  correct: "A",
                  figure: null,
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Registration is required for drones weighing 0.55 lbs or more."
                },
                {
                  id: 265,
                  tag: "weather",
                  question: "What conditions are likely during a temperature inversion?",
                  answers: {
                    A: "Turbulence and high winds",
                    B: "Smooth air and poor visibility",
                    C: "Thunderstorms"
                  },
                  correct: "B",
                  figure: null,
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "Temperature inversions produce smooth air and poor visibility (haze, fog, etc.)."
                },
                {
                  id: 266,
                  tag: "charts",
                  question: "A 'Pvt' next to an airport name on a sectional chart indicates:",
                  answers: {
                    A: "Public airport",
                    B: "Private-use airport",
                    C: "Pilot-operated lighting"
                  },
                  correct: "B",
                  figure: "sectional_chart_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "'Pvt' means private-use airport."
                },
                {
                  id: 267,
                  tag: "regulations",
                  question: "What distance from clouds must be maintained under Part 107?",
                  answers: {
                    A: "500 ft below, 2,000 ft horizontal",
                    B: "Clear of clouds",
                    C: "1,000 ft above, 1,000 ft horizontal"
                  },
                  correct: "A",
                  figure: null,
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Part 107 requires 500 feet below and 2,000 feet horizontal separation from clouds."
                },
                {
                  id: 268,
                  tag: "weather",
                  question: "Which weather phenomenon reduces visibility more?",
                  answers: {
                    A: "Fog",
                    B: "Haze",
                    C: "Smoke"
                  },
                  correct: "A",
                  figure: null,
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "Fog reduces visibility much more than haze or smoke."
                },
                {
                  id: 269,
                  tag: "airspace",
                  question: "A magenta vignette surrounding an airport indicates:",
                  answers: {
                    A: "Class D airspace",
                    B: "Class E airspace starting at 700 ft AGL",
                    C: "Class B airspace"
                  },
                  correct: "B",
                  figure: "sectional_chart_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Magenta vignette indicates Class E starting at 700 ft AGL."
                },
                {
                  id: 270,
                  tag: "charts",
                  question: "A runway marked with two solid yellow lines on each side indicates:",
                  answers: {
                    A: "Taxiway edge",
                    B: "Hold short line",
                    C: "Runway safety area"
                  },
                  correct: "A",
                  figure: "airport_diagram_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Two solid yellow lines denote the edge of a taxiway."
                },
                {
                  id: 271,
                  tag: "regulations",
                  question: "Who is responsible for determining airworthiness before a flight?",
                  answers: {
                    A: "The owner",
                    B: "The remote PIC",
                    C: "The visual observer"
                  },
                  correct: "B",
                  figure: null,
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "The remote PIC must ensure the aircraft is safe for flight."
                },
                {
                  id: 272,
                  tag: "weather",
                  question: "What information is provided in a METAR?",
                  answers: {
                    A: "Forecast for next 24 hours",
                    B: "Observed weather at reporting station",
                    C: "Pilot reports"
                  },
                  correct: "B",
                  figure: null,
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "A METAR provides current observed weather."
                },
                {
                  id: 273,
                  tag: "airspace",
                  question: "What is a prohibited area marked on a sectional chart?",
                  answers: {
                    A: "A no-fly zone for national security",
                    B: "Military operations area",
                    C: "Temporary flight restriction area"
                  },
                  correct: "A",
                  figure: "sectional_chart_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "A prohibited area marks airspace where no flight is allowed for national security."
                },
                {
                  id: 274,
                  tag: "charts",
                  question: "A segmented circle with a traffic pattern indicator shows:",
                  answers: {
                    A: "Runway length",
                    B: "Traffic pattern direction",
                    C: "Airport elevation"
                  },
                  correct: "B",
                  figure: "airport_diagram_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "The segmented circle shows traffic pattern direction."
                },
                {
                  id: 275,
                  tag: "regulations",
                  question: "When is a visual observer required?",
                  answers: {
                    A: "Always required",
                    B: "Only when using FPV goggles",
                    C: "Only at night"
                  },
                  correct: "B",
                  figure: null,
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Visual observer is required if FPV goggles are used for operation."
                },
                {
                  id: 276,
                  tag: "weather",
                  question: "The presence of ice pellets at the surface indicates:",
                  answers: {
                    A: "Thunderstorms aloft",
                    B: "Freezing rain aloft",
                    C: "Cold front passage"
                  },
                  correct: "B",
                  figure: null,
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "Ice pellets at the surface indicate freezing rain aloft."
                },
                {
                  id: 277,
                  tag: "airspace",
                  question: "A special use airspace depicted by a blue hash line is a:",
                  answers: {
                    A: "Restricted area",
                    B: "MOA",
                    C: "Prohibited area"
                  },
                  correct: "A",
                  figure: "sectional_chart_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Blue hash lines indicate a restricted area."
                },
                {
                  id: 278,
                  tag: "charts",
                  question: "A magenta flag on a sectional chart indicates:",
                  answers: {
                    A: "VFR advisory checkpoint",
                    B: "Beacon location",
                    C: "No drone zone"
                  },
                  correct: "A",
                  figure: "sectional_chart_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Magenta flags show VFR advisory checkpoints."
                },
                {
                  id: 279,
                  tag: "regulations",
                  question: "When may a drone fly above 400 feet AGL?",
                  answers: {
                    A: "When within 400 feet of a tall structure",
                    B: "Never allowed",
                    C: "Only with waiver"
                  },
                  correct: "A",
                  figure: null,
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Allowed above 400 ft if within 400 ft of a structure."
                },
                {
                  id: 280,
                  tag: "weather",
                  question: "What hazard does wind shear pose to an aircraft?",
                  answers: {
                    A: "Reduces lift and causes abrupt attitude changes",
                    B: "Increases lift during climb",
                    C: "No hazard under VFR conditions"
                  },
                  correct: "A",
                  figure: null,
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "Wind shear causes sudden changes in lift and control."
                },
                {
                  id: 281,
                  tag: "charts",
                  question: "A segmented circle is used at airports to show:",
                  answers: {
                    A: "Runway heading",
                    B: "Landing direction",
                    C: "Traffic pattern information"
                  },
                  correct: "C",
                  figure: "airport_diagram_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Segmented circle shows traffic pattern direction."
                },
                {
                  id: 282,
                  tag: "airspace",
                  question: "Military training routes with no altitude restriction shown are conducted:",
                  answers: {
                    A: "At any altitude",
                    B: "Below 1,500 ft AGL",
                    C: "Above 10,000 ft MSL"
                  },
                  correct: "B",
                  figure: "sectional_chart_example.jpg",
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "Routes with no altitude label are below 1,500 ft AGL."
                },
                {
                  id: 283,
                  tag: "regulations",
                  question: "Maximum groundspeed allowed under Part 107 is:",
                  answers: {
                    A: "87 knots",
                    B: "100 mph",
                    C: "100 knots"
                  },
                  correct: "C",
                  figure: null,
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Max allowed is 100 mph (87 knots)."
                },
                {
                  id: 284,
                  tag: "weather",
                  question: "A low-level temperature inversion with high humidity can cause:",
                  answers: {
                    A: "Improved visibility",
                    B: "Poor visibility and fog",
                    C: "Strong turbulence"
                  },
                  correct: "B",
                  figure: null,
                  source: "https://pilotinstitute.com/part-107-practice-test/",
                  explanation: "Causes fog, haze, and poor visibility."
                },
                {
                  id: 285,
                  tag: "charts",
                  question: "A symbol of an airport name underlined means:",
                  answers: {
                    A: "Airport has lighting limitations",
                    B: "Airport has UNICOM frequency",
                    C: "Airport has no control tower"
                  },
                  correct: "A",
                  figure: "sectional_chart_example.jpg",
                  source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                  explanation: "Underlined name indicates part-time lighting."
                },
   

                  {
                    id: 286,
                    tag: "weather",
                    question: "What is a microburst?",
                    answers: {
                      A: "A small area of strong downdrafts",
                      B: "A localized area of fog",
                      C: "A fast-moving tornado"
                    },
                    correct: "A",
                    figure: null,
                    source: "https://pilotinstitute.com/part-107-practice-test/",
                    explanation: "A microburst is a small-scale intense downdraft that can be hazardous to aircraft."
                  },
                  {
                    id: 287,
                    tag: "regulations",
                    question: "When can you fly a small UA from a moving vehicle?",
                    answers: {
                      A: "Only over sparsely populated areas",
                      B: "Only with ATC authorization",
                      C: "Never under Part 107"
                    },
                    correct: "A",
                    figure: null,
                    source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                    explanation: "Part 107 allows flight from a moving vehicle only in sparsely populated areas."
                  },
                  {
                    id: 288,
                    tag: "charts",
                    question: "A runway marked with two solid lines and two dashed lines indicates:",
                    answers: {
                      A: "Runway hold short line",
                      B: "Taxiway edge",
                      C: "Runway safety area"
                    },
                    correct: "A",
                    figure: "airport_diagram_example.jpg",
                    source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                    explanation: "Two solid + two dashed yellow lines indicate a runway hold short line; you must not cross without clearance."
                  },
                  {
                    id: 289,
                    tag: "weather",
                    question: "What is true regarding unstable air?",
                    answers: {
                      A: "Poor visibility, steady precipitation",
                      B: "Good visibility, turbulence, and cumulus clouds",
                      C: "Stratus clouds and smooth air"
                    },
                    correct: "B",
                    figure: null,
                    source: "https://pilotinstitute.com/part-107-practice-test/",
                    explanation: "Unstable air creates cumulus clouds, turbulence, and good visibility."
                  },
                  {
                    id: 290,
                    tag: "airspace",
                    question: "Special use airspace is depicted on sectional charts as:",
                    answers: {
                      A: "Blue shaded areas",
                      B: "Various symbols and labels indicating MOA, restricted, or prohibited",
                      C: "Green dashed lines"
                    },
                    correct: "B",
                    figure: "sectional_chart_example.jpg",
                    source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                    explanation: "Special use airspace (MOA, restricted, prohibited) is labeled and depicted by various chart symbols."
                  },
                  {
                    id: 291,
                    tag: "regulations",
                    question: "How long must you retain sUAS inspection records?",
                    answers: {
                      A: "12 months",
                      B: "24 months",
                      C: "No retention required by Part 107"
                    },
                    correct: "C",
                    figure: null,
                    source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                    explanation: "Part 107 does not specify record retention; however, it is good practice to keep maintenance logs."
                  },
                  {
                    id: 292,
                    tag: "weather",
                    question: "What does a SIGMET warn pilots about?",
                    answers: {
                      A: "Convective activity",
                      B: "Significant weather hazards affecting all aircraft",
                      C: "Temporary flight restrictions"
                    },
                    correct: "B",
                    figure: null,
                    source: "https://pilotinstitute.com/part-107-practice-test/",
                    explanation: "A SIGMET warns of significant meteorological hazards like turbulence, icing, or volcanic ash."
                  },
                  {
                    id: 293,
                    tag: "charts",
                    question: "A circle with a 'star' on an airport symbol indicates:",
                    answers: {
                      A: "Airport beacon operates continuously",
                      B: "Airport beacon operates from sunset to sunrise",
                      C: "Airport has no beacon"
                    },
                    correct: "B",
                    figure: "sectional_chart_example.jpg",
                    source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                    explanation: "A star indicates the airport beacon operates from sunset to sunrise."
                  },
                  {
                    id: 294,
                    tag: "airspace",
                    question: "A VFR flyway is used for:",
                    answers: {
                      A: "Avoiding Class B airspace",
                      B: "Transitioning Class C airspace",
                      C: "Avoiding restricted airspace"
                    },
                    correct: "A",
                    figure: "sectional_chart_example.jpg",
                    source: "https://pilotinstitute.com/part-107-practice-test/",
                    explanation: "VFR flyways are suggested routes to avoid Class B airspace."
                  },
                  {
                    id: 295,
                    tag: "weather",
                    question: "What conditions favor radiation fog formation?",
                    answers: {
                      A: "Clear sky, light wind, moist ground",
                      B: "High humidity and strong winds",
                      C: "Cold front passage"
                    },
                    correct: "A",
                    figure: null,
                    source: "https://pilotinstitute.com/part-107-practice-test/",
                    explanation: "Radiation fog forms on clear nights with light winds and moist ground cooling."
                  },
                  {
                    id: 296,
                    tag: "regulations",
                    question: "Remote ID is required on sUAS:",
                    answers: {
                      A: "Only over populated areas",
                      B: "For all UAS unless exempt or equipped with broadcast module",
                      C: "Only for night operations"
                    },
                    correct: "B",
                    figure: null,
                    source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                    explanation: "Remote ID is required for nearly all UAS unless exempt or using a broadcast module."
                  },
                  {
                    id: 297,
                    tag: "charts",
                    question: "A dashed blue line around airspace indicates:",
                    answers: {
                      A: "Class D airspace",
                      B: "Class B airspace",
                      C: "Class E airspace at surface"
                    },
                    correct: "A",
                    figure: "sectional_chart_example.jpg",
                    source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                    explanation: "Dashed blue line shows Class D airspace."
                  },
                  {
                    id: 298,
                    tag: "airspace",
                    question: "When flying in a Military Operations Area (MOA), you should:",
                    answers: {
                      A: "Avoid unless authorized",
                      B: "Exercise extreme caution",
                      C: "Contact controlling agency for clearance"
                    },
                    correct: "B",
                    figure: "sectional_chart_example.jpg",
                    source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                    explanation: "MOAs do not restrict flights but pilots must use caution due to military activities."
                  },
                  {
                    id: 299,
                    tag: "weather",
                    question: "In aviation weather reports, 'BR' stands for:",
                    answers: {
                      A: "Breezy conditions",
                      B: "Mist",
                      C: "Broken clouds"
                    },
                    correct: "B",
                    figure: null,
                    source: "https://pilotinstitute.com/part-107-practice-test/",
                    explanation: "'BR' is the METAR code for mist."
                  },
                  {
                    id: 300,
                    tag: "regulations",
                    question: "Under Part 107, what is the minimum age to obtain a Remote Pilot Certificate?",
                    answers: {
                      A: "13",
                      B: "16",
                      C: "18"
                    },
                    correct: "B",
                    figure: null,
                    source: "https://jrupprechtlaw.com/part-107-knowledge-test/",
                    explanation: "You must be at least 16 to earn a Remote Pilot Certificate under Part 107."
                  }
                   
                ]











            
























      