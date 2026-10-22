// ============================== ICÔNES ==============================
const ICON_PHONE =
  "https://static.wikia.nocookie.net/steins-gate/images/5/5f/SG0sphone.png/revision/latest/scale-to-width-down/250?cb=20150922173529";
const ICON_TIME_MACHINE =
  "https://images.steamusercontent.com/ugc/2399942426260426012/CC8205EEDAC77035C67BC258BD5146BD16A0A263/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
const ICON_LEAP =
  "https://platform.vox.com/wp-content/uploads/sites/2/2025/08/Vox_Neurable_2.png?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100";
const WORLDLINES = [
  {
    id: "wl-1",
    greek: "α",
    name: "Alpha",
    cls: "alpha",
    off: 30,
    railX: 55,
    divVal: "0.000000",
    events: [
      { date: "1954", ep: "Kiokuhokan no Monograph", title: "SERN is founded" },
      { date: "1961", ep: "Kiokuhokan no Monograph", title: "Jellyshii" },
      {
        date: "1973",
        ep: "Kiokuhokan no Monograph",
        title: "SERN researches begins",
        desc: ["On time machine + beginning of Z program"],
      },
      {
        id: "event-1975",
        date: "1975",
        ep: "Boukan no Rebellion",
        title: "Suzuha arrives",
        desc: [
          "__ITER__ 0.337187%",
          "Kayano finds Suzuha, throws her off the rooftop. Suzu suffers from amnesia",
          "__ITER__ 0.409431%",
          "Kayano destroys her time machine, Suzuha has a déjà of Kayano",
        ],
      },
      {
        date: "01-xx-1993 - 0.456903%",
        ep: "EP8",
        title: "Luka's mother receives a D-Mail",
      },
      {
        date: "1994",
        ep: "Aishin Meizu no Babel",
        title: "Secret meeting",
        desc: [
          "The theory of relativity transcendence committee meeting, between Nakabachi, Akiha and Suzuha",
        ],
      },
      {
        date: "12-22-1996",
        ep: "Brownian no Motion",
        title: "Braun meets Suzuha",
        desc: ["Braun arrives in Akihabara then met Suzuha"],
      },
      {
        date: "1999 - 0.337187%",
        ep: "Boukan no Rebellion",
        title: "Suzuha regains her memory",
      },
      {
        date: "2000",
        ep: "mangas",
        title: "End of journey",
        desc: [
          "__ITER__ 0.337187%",
          `(Boukan no Rebellion): Suzuha commits suicide. Braun will bring the letter to lab in <a href="#event-08-13" class="t-a dmail-link">08-13-2010</a>`,
          "__ITER__ ITERATION CONTINUATION FROM 1996",
          "She does die, from time travel disease",
          "__ITER__ 0.571046%",
          "(Aishin Meizu no Babel) 20000 tapes taken away from Akiha family"
        ],
      },
      {
        date: "04-03-2000",
        ep: "EP9, Brownian no Motion",
        title: "Plane crash",
        desc: [
          "Yukitaka dies",
          "__ITER__ 0.409420%",
          "Yukitaka Akiha receives a D-Mail, does not board",
          "Yukitaka sells IBN to pay the (fake) ransom to save Faris",
        ],
      },
      {
        date: "2001",
        ep: "Kiokuhokan no Monograph",
        title: "Large Hadron Collider testing",
      },
      {
        date: "10-22-2001",
        ep: "Brownian no Motion",
        title: `End of mission (M2)`,
        desc: [
          "Kuroki brings Suzuha laptop to Braun",
          "Imamiya Tsuzuri is killed in a raid",
        ],
      },
      {
        date: "10-08-2002",
        ep: "Kiokuhokan no Monograph",
        title: "Jelly man Michael Lang found",
      },
      {
        date: "2003",
        ep: "Aishin Meizu no Babel",
        title: "Kurisu denies her dad's thesis",
      },
      {
        date: "02-14-2004",
        ep: "Kiokuhokan no Monograph",
        title: "Another jelly man found",
      },
      {
        date: "2004",
        ep: "MULTIPLE",
        title: "Mayuri's grandmother passes away",
      },
      {
        date: "01-28-2005",
        ep: "multiple",
        title: "Jelly - Mayuri's grandmother",
        desc: [
          "(Kiokuhokan no Monograph): Another jelly man found",
        ],
      },
      {
        id: "event-07-28-a",
        date: "07-28-2010 - 0.571024%",
        ep: "EP2",
        title: "First shift",
        desc: [
          "Lecture given by Kurisu",
          "Meets (2036) Suzuha, hired at Braun's shop",
          "Nakabachi conference cancelled because FG204 crashed on Radio",
          "John Titor introduction: Okabe learns about time travel, worldlines & SERN. JT says never been in 2000 and may have met another JT",
        ],
      },
      {
        date: "07-29-2010",
        ep: "EP2,3",
        title: "Meets Moeka, who is searching for the IBN 5100",
      },
      { date: "07-30-2010", ep: "EP3", title: "Daru hacks SERN" },
      {
        date: "07-31-2010 - 0.571024%",
        ep: "EP4,5",
        title: "IBN 5100 at the shrine & the thesis",
        desc: [
          "Left to Luka's family by someone ten years earlier (Faris' dad) for \"a man who will need it\"",
          "Suzuha is suspicious of Kurisu knowing she works for SERN in a line",
          "Helicopter overhead (fireworks coverage), Suzuha thinks it's for bombing",
          "Moeka secures the thesis",
        ],
      },
      { date: "08-01-2010", ep: "EP5", title: "Findings about SERN tests" },
      {
        date: "08-02-2010",
        ep: "EP6",
        title: "D-Mail test (reception -5 days) > banana turns jelly",
      },
      {
        date: "08-03-2010",
        ep: "EP6-8",
        title: "Changing the past is like a lottery",
        desc: [
          "Moeka (new member) informed about D-Mail and IBN localization",
          "Phone Microwave v1.03 can now send to any phone",
          'Lottery D-Mail sent by Moeka › shift to <b class="t-a">0.571015%</b> › Luka made a mistake in the ticket. Okabe has a bad feeling, Suzuha advises talking to JT',
          "JT is puzzled by Reading Steiner, says the D-Mail technique is unknown in 2036. Okabe is the one able to cross the 1% barrier and save the world from dystopia",
        ],
      },
      {
        date: "08-04-2010",
        ep: "EP8",
        title: "Moeka's D-Mail",
        desc: [
          'Message about a phone model (in reality about IBN localization) › shift to <b class="t-a">0.523299%</b> Moeka is not in the lab',
        ],
      },
      {
        date: "08-06-2010",
        ep: "EP8,9",
        title: "Luka's & Faris' D-Mail",
        desc: [
          'After becoming member 006 › gender-change D-Mail › <b class="t-a">0.456903%</b> Luka is a girl',
          "IBN no longer in the lab",
          "Butterfly Effect explained by Kurisu to Okabe",
          'To get IBN intel from Faris: she becomes member 007 + sends a D-Mail to 10 years ago to prevent her dad\'s crash › <b class="t-a">0.409420%</b> no more moe/otaku culture in Akihabara',
          "Faris' dad says he parted with the IBN and did not send it to the shrine",
        ],
      },
      {
        date: "08-08-2010",
        ep: "EP10",
        title: "Father quest",
        desc: [
          "Machine still crashed on the roof",
          "Suzuha becomes member 008, reveals she is searching for her father",
        ],
      },
      {
        date: "08-09-2010 - 0.337187%",
        ep: "Boukan no Rebellion",
        title: "offline meeting",
      },
      {
        date: "08-10-2010",
        ep: "EP10,11",
        title: "Suzuha's D-Mail",
        desc: [
          'Suzuha leaves the party on 08-09 › Okabe sends a D-Mail to prevent her leaving › <b class="t-a">0.337187%</b> Suzuha decides to take more time in 2010',
        ],
      },
      {
        id: "event-08-11",
        date: "08-11-2010",
        ep: "EP15,16,19",
        title: "Pin intel - IBN intel",
        desc: [
          "__ITER__ ITERATION FROM 08-13",
          'Time leaps to meet "barrel guy" Daru, who planned to fake being Suzuha\'s dad but really is',
          "Learns the machine can only go backward",
          "__ITER__ ITERATION FROM 08-16",
          "Goes to Moeka's place; learns the lack of FB message caused the suicide",
          "Okabe sees she kept the same phone model — the real D-Mail content was IBN localization",
          "Fails to undo the D-Mail; needs FB to send it to convince past Moeka",
          "Okabe says she'll commit suicide anyway; she reveals the IBN is in a coin locker",
        ],
      },
      {
        id: "event-08-13",
        date: "08-13-2010 - 0.337187%",
        ep: "EP12-18,21",
        title:
          "Mayuri's fate - Undo Suzuha, Faris & Luka's D-Mails - Retrieve IBN",
        desc: [
          "Time leap completed",
          "Time stops › Moeka + Rounders (6p) try to confiscate the IBN & valuable members › kill Mayuri › Suzuha's distraction permits a time leap to 4:56pm, Kurisu is shot",
          "__ITER__Iteration from 08-13",
          "Mayuri hit by a car › time leap to 4:17pm",
          "__ITER__Iteration from 08-13",
          "Mayuri pushed onto the train track by Nae › multiple time leaps",
          "Okabe tricks Moeka with IBN info, takes ker gun, learns about Rounders & FB, knocked out, put in van, escapes > Mayuri dead again > time leaps to 4:56pm",
          "Time leaps to 13:59 (Kurisu's advice)",
          "Divergence meter & time machine shown by Suzuha, revealing she is from 2036 and the pin from her dad",
          `Okabe realizes he prevented Suzuha from going to 1975 for the IBN > time leaps to 08-11, 14:21 <a href="#event-08-11" class="t-a dmail-link">0.571024% <img src="${ICON_LEAP}" " class="icon-leap"></a>`,
          "__ITER__ ITERATION CONTINUATION FROM 08-11",
          "Time machine repaired by Daru",
          `Suzuha leaves for <a href="#event-1975" class="t-a dmail-link">1975<img src="${ICON_TIME_MACHINE}" " class="dmail-icon time-machine"></a>, after giving medal to Okabe`,
          "Braun hands over a letter from Suzuha, who killed herself in 2000 (amnesia from lack of repair); she asked Okabe to let her leave sooner (before the storm)",
          'Okabe sends a D-Mail › <b class="t-a">0.409431%</b>',
          "Change: Mayuri does not die this day",
          "__ITER__ ITERATION FROM 08-14",
          "Decision to undo all D-Mails to find the IBN; time leap to 4:17pm",
          '1st goal: undo Faris\' D-Mail (she remembered its content from other line). Learns her dad received the IBN from Suzuha but sold it to get Faris back from Rai-netters. Undo D-Mail › <b class="t-a">0.456914%</b>. May Queen re-exists; IBN still missing (donated to the shrine, no longer there)',
          '2nd goal: undo Luka\'s D-Mail (memory of being a boy), reveals his homosexuality › <b class="t-a">0.523307%</b>',
          "__ITER__ ITERATION CONTINUATION FROM 08-11",
          "Multiple time leaps to follow the track of the IBN from coin locker to Braun",
          "__ITER__ ITERATION FROM 08-14",
          "Got the IBN to begin the hack",
          "Kurisu's dilemma: undo the D-Mail preventing her death?",
          "Okabe tries to die instead of Mayuri, but she protects him (car)",
          "Time leaps to 3:53pm, when Daru is about to hack",
        ],
      },
      {
        date: "08-14-2010",
        ep: "EP17,20 CH8OG",
        title: "Mayuri dies again - Undo Moeka's D-Mail",
        desc: [
          `Mayuri dies (Rounders) › time leap to <a href="#event-08-13" class="t-a dmail-link">5:02pm<img src="${ICON_LEAP}" " class="icon-leap"></a>`,
          "__ITER__ ITERATION CONTINUATION FROM 08-13",
          "Braun gives the IBN to the van man (destination: SERN France). Braun reveals he stopped messaging Moeka because the coin-locker mission was complete",
          "Moeka is shot by FB, who then shoots himself — otherwise the Rounders would take Nae to make him suffer",
          'D-Mail from FB\'s phone to Moeka to stop the IBN pursuit › <b class="t-a">0.571046%</b>',
          `Asks Luka for the IBN, but time leaps to <a href="#event-08-13" class="t-a dmail-link">the 13th<img src="${ICON_LEAP}" " class="icon-leap"></a> because Daru is at the convention`,
          "__ITER__ 0.456914%",
          "Luka is a girl",
          "IBN not in storehouse, lock unbroken. Eisuke remembers Rumiho donated the PC",
        ],
      },
      {
        date: "08-15-2010",
        ep: "EP21,22 CH9OG",
        title: "Déjà vu - IBN stolen",
        desc: [
          "__ITER__ ITERATION CONTINUATION FROM 08-13 0.571046%",
          "Mayuri experiences her deaths in dreams",
          "Kurisu partially remembers another line (chasing Mayuri + out-of-body death experience at the radio building)",
          "__ITER__ 0.523307%",
          "Luka D-Mail undone",
          "Eisuke goes to check treasury, storehouse's lock is broken",
        ],
      },
      {
        date: "08-16-2010",
        ep: "EP19,21",
        title: "Moeka & Mayuri death",
        desc: [
          "__ITER__ ITERATION CONTINUATION FROM 08-13",
          "3rd goal: undo Moeka's D-Mail (because localized IBN), but she committed suicide (police report after Okabe learns where she works)",
          `Mayuri dies at 19:52 › <a href="#event-08-11" class="t-a dmail-link">time leap to 08-11, 5:36pm<img src="${ICON_LEAP}" " class="icon-leap"></a>`,
        ],
      },
      {
        date: "08-17-2010",
        ep: "EP22",
        title: "Final dilemma",
        desc: [
          "__ITER__ ITERATION CONTINUATION FROM 08-16",
          `Final D-Mail deletion after Kurisu runs into the lab to confess her love › <a href="#event-08-21" class="t-b dmail-link">1.130205%<img src="${ICON_PHONE}" " class="dmail-icon"></a>`,
        ],
      },
      {
        id: "event-01-02",
        date: "01-02-2011 - 0.571082%",
        ep: "SG0 EP8, AD",
        title: "Meet up again",
        desc: [
          "__ITER__ ITERATION FROM 12-31-2010 (beta)",
          "Kurisu alive, phone wave has been destroyed by Okabe who resigned to save Mayuri in this line. Kurisu repairs it, creating microwave phone wave 2 (provisional)",
          `D-Mail (sent to 08-17-2010) content : "do not enter". Kurisu will hesitate when entering after Okabe decides to delete the first D-Mail, permitting SG-0G Okabe to return to beta > <a href="#event-01-05" class="t-b dmail-link">1.097302% 01-05-2011<img src="${ICON_PHONE}" " class="dmail-icon"></a>`,
          "__ITER__ Antinomic Dual",
          `Kurisu completes the rebuild of the Phonewave and they send D-Mail for Okabe to return in the beta AF > <a href="#event-01-02-2011-b" class="t-b dmail-link">1.053649%<img src="${ICON_PHONE}" " class="dmail-icon"></a>`
        ],
      },
      {
        date: "2034",
        ep: "Boukan no Rebbellion",
        title: "Dytopia",
        desc: ["Suzuha unable to snip Makise", "Population is brainwashed"],
      },
      {
        date: "2036",
        ep: "Boukan no Rebbellion",
        title: "Suzuha's journey begins",
        desc: [
          "She receives (on her birthday) Daru's video about time machine prototype",
          "Kayano kills valkyries + Yuki",
          `Suzuha travels to <a href="#event-07-28-a" class="t-a dmail-link">2010<img src="${ICON_TIME_MACHINE}" class="icon-leap"></a>`,
        ],
      },
    ],
  },
  {
    id: "wl-3",
    greek: "χ",
    name: "Steins;Gate",
    cls: "sg",
    off: 90,
    railX: 115,
    divVal: "1.048596",
    div: { from: "alpha", to: "sg", num: "1.048596", cls: "t-sg" },
    events: [
      {
        id: "event-06-30",
        date: "06-30-2005",
        ep: "MOV",
        title: `Kurisu meets young Okabe, who dies in an accident › <a href="#event-08-04" class="t-sg dmail-link">return to 08-04<img src="${ICON_TIME_MACHINE}" " class="dmail-icon time-machine"></a>`,
      },
      {
        id: "event-08-21-sg",
        date: "08-21-2010 - 1.048596%",
        ep: "EP24",
        title: "The Steins;Gate is real",
        desc: [
          "Suzuha vanishes (no reason to come to 2010 in this line). Moeka takes Suzuha's job",
          "Thesis paper burned",
          "All members get their pin OSHMKUFA2010; one stored in a box for future Suzuha",
          "Kurisu is still in Japan and thanks Okabe for saving her. Him calling her Christina makes her remember, she gets a pin",
        ],
      },
      {
        date: "10-14-2010",
        ep: "EP25",
        title: "OAV",
        desc: [
          "Trip to LA, Kurisu abandoned all about time machine research and has dream about alpha line",
          "Meets Yuki who had prediction given by psychic : to have husband & daughter in 7 years",
        ],
      },
      {
        date: "12-24-2010",
        ep: "Holy Day of the Calamitous Birth",
        title: "Chrismas party",
        desc: [
          "Start the production of FG Cellulaser Gun & Item Getter Robo MK. III",
          "Nae adventure (kidnapping) while her father and Moeka went on a mission",
          "Okabe reads Kurisu's letter",
        ],
      },
      {
        id: "event-08-03",
        date: "08-03-2011",
        ep: "MOV",
        title: "Okabe glitches",
        desc: [
          "__ITER__ Iteration from 08-11",
          "Kurisu sees Okabes appearing and disappearing",
          "Suzuha meets Kurisu and explains the overloaded Reading Steiner and the R worldline (0.000001% divergence from SG) where he jumps involuntarily. Suzuha says she must go back and cement his memory, making SG radically different from other lines",
        ],
      },
      {
        id: "event-08-04",
        date: "08-04-2011",
        ep: "MOV",
        title: "Who is Okabe ?",
        desc: [
          "Kurisu is in Japan for a conference",
          "Since seeing her, Okabe hallucinates",
          'Kurisu gets a message from Amane (not knowing it is her) to remember "cellphone", "microwave", "SERN"',
          "Okabe disappears; everyone forgets him except Kurisu",
          "__ITER__Iteration continuation from 08-03",
          "Kurisu confesses her love, but he disappears again",
          `Amane decides to travel with Kurisu to <a href="#event-06-30" class="t-sg dmail-link">06-30-2005<img src="${ICON_TIME_MACHINE}" " class="dmail-icon time-machine"></a>`,
          "__ITER__Iteration continuation from 06-30",
          '<p id="event-06-30"> Every member faintly remembers Okabe</p> and cheers Kurisu on to retry; she goes to the past again to kiss young Okabe › success',
          "Okabe is pulled into the SG worldline; people materialize around him",
        ],
      },
      {
        date: "08-11-2011",
        ep: "MOV",
        title: `Daru hacks SERN; Kurisu builds the time leap and returns to <a href="#event-08-03" class="t-sg dmail-link">08-03<img src="${ICON_LEAP}" " class="icon-leap"></a>`,
      },
    ],
  },
  {
    id: "wl-0",
    greek: "β",
    name: "Beta",
    cls: "beta",
    off: 30,
    railX: 55,
    divVal: "1.111111",
    div: { from: "sg", to: "beta", cls: "t-sg" },
    events: [
      {
        date: "02-02-1973", 
        ep: "SG0 PoR", 
        title: "Z-Program is defined",
      },
      { id:"1975", 
        date: "08-13-1975", 
        ep: "SG0 CE", 
        title: "First step of the plan",
        desc:[
          "Suzuha acquires the IBN. Suzuha makes Kagari a Valkyrie"
        ]
      },
      {
        date:"1989 - 1.382733%",
        ep:"SG0 PB",
        title:"Berlin Wall is not demolished, Gorbatchev nor Eltsine were never presidents"
      },
      {
        date: "1998",
        ep: "SG0 EP4",
        title: "Suzuha lost Kagari",
        desc: [
          "Searching her, Suzuha wasted fuel",
          `Gave up, went to <a href="#event-07-28-b" class="t-b dmail-link">07-28-2010<img src="${ICON_TIME_MACHINE}" " class="dmail-icon time-machine"></a>`,
          "__ITER__ 1.053649%",
          "Kagari is not brainwashed",
        ],
      },
      {
        date: "2000",
        ep: "SG0 PB, GS",
        title: "John Titor says WWIII will occur in 2015",
        desc:[
          "__ITER__ 1.143688%",
          "Convergence point for all world lines",
          "Y2K Problems"
        ]
      },
      {
        date: "2004",
        ep: "MULTIPLE",
        title: "Mayuri's grandmother passes away"
      },
      {
        date: "09-xx-2009",
        ep: "SG0 TA",
        title: "Kurisu joins Chondria Brain Science lab"
      },
      {
        id: "event-07-28-b",
        date: "07-28-2010",
        ep: "EP1,23,24",
        title: "Dr. Nakabachi's conference",
        desc: [
          "Time machine crash — Suzuha arrives from 2036",
          "Metal Upa picked up by Mayuri; she loses it › Kurisu picks it up and places it next to the thesis",
          "The banana experiment",
          "First meeting with Kurisu at the conference, she dies",
          `1st D-Mail sent to Daru to July 23rd > shift to <a href="#event-07-28-a" class="t-a dmail-link">0.571024% <img src="${ICON_PHONE}" " class="dmail-icon"></a>`,
          "__ITER__ ITERATION FROM 08-21",
          "Meets Kurisu, who drops her envelope (Okabe will place the metal Upa next to it). Kurisu says she met present Okabe 15 min earlier",
          "To destroy the academic empire he left, Dr. Nakabachi wants to publish her paper under his own name",
          "Okabe accidentally kills Kurisu; he screams, and present Okabe hears it",
          `Physical travel to <a href="#event-08-21" class="t-b dmail-link">08-21, 17:56<img src="${ICON_TIME_MACHINE}" " class="dmail-icon time-machine"></a>`,
          "__ITER__ iteration from 08-21",
          "Gets the metal Upa; Mayuri gets the green one",
          "Fake blood has dried",
          "Okabe tasers Kurisu and is stabbed by Nakabachi, who steals the thesis and flees. Past Okabe witnesses the scene › 3 weeks of suffering = loop preserved",
          `Physical return to 08-21 › <a href="#event-08-21-sg" class="t-sg dmail-link">1.048596%<img src="${ICON_TIME_MACHINE}" " class="dmail-icon time-machine"></a>`,
          "__ITER__ XDP",
          "International warrant to find the foreigner killer behind Kurisu's death (officially)"
        ],
      },
      {
        date: "07-xx-2010",
        ep: "SG0 XDP",
        title: "JPN-US joint investigation unit visits Chondria lab to get information about Kurisu's death"
      },
      {
        id: "event-08-21",
        date: "08-21-2010",
        ep: "EP23,24,23b, SG0 EP23 (multiple)",
        title: "Attempts to save Kurisu & the world",
        desc: [
          "__ITER__ ITERATION CONTINUATION FROM 08-17 alpha - 1.130205%",
          "Okabe sees the machine has a passenger seat; gives his phone to Mayuri",
          `Cheered on by Mayuri and Daru, physical travel to <a href="#wl-0" class="t-b dmail-link">07-28<img src="${ICON_TIME_MACHINE}" " class="dmail-icon time-machine"></a>`,
          "__ITER__Iteration from 07-28",
          "After the failure, Suzuha says they have fuel for one more round",
          "Okabe gets a message to watch the news: Nakabachi arrived in Russia; thanks to the metal Upa, the envelope survived the plane fire › WWIII begins. Mayuri slaps him to keep going",
          "Suzuha presents 2025 Okabe's video (received 07-28, unwatchable then because experiencing Kurisu's death was necessary)",
          `Physical travel to <a href="#wl-0" class="t-b dmail-link">11:51AM<img src="${ICON_TIME_MACHINE}" " class="dmail-icon time-machine"></a>`,
          "__ITER__Iteration FROM 07-28 (EP23b)",
          "Okabe does not open the movie mail; Mayuri begs him to stop › beginning of Steins;Gate 0",
          "Phone wave incomplete",
          "Kurisu's thesis is stolen by her father, who flees to Russia",
          "__ITER__ ITERATION FROM 07-07-2011",
          'Future Mayuri cheers Mayuri to encourage Okabe to save Kurisu > no more fuel, pulled in 18000BC (they will be saved by 2025 Okabe, disappearing from the line to ensure his "death")',
          "__ITER__ 1.130205%",
          "(Aishin Meizu no Babel) Okabe dismantles IBN and Phonewave",
        ],
      },
      {
        date: "11-xx-2010",
        ep: "SG0 ML, XDP",
        title: "Maho and Leskinen arrive in Japan",
        desc:[
          "Kurisu's mother got her house burnt by Russians"
        ]
      },
      {
        date: "11-23-2010",
        ep: "SG0 ML",
        title: "ATF Conference"
      },
      {
        date: "12-xx-2010",
        ep: "SG0 EP1-6",
        title: "Amadeus & Kagari introduced",
        desc: [
          "Okabe calls Amadeus; Maho reminds him she is dead",
          'Dream about <b class="t-b">1.382733%</b>: Soviets invading Japan + Leskinen\'s shadow › Reading Steiner activates, meaning the divergence changed. Cause: an organization manipulates fate',
          "Amane says she is looking for a girl (Kagari) who came with her from 2036 but got separated in 1998 Akihabara. Okabe asks Moeka to investigate",
          "Kagari found at Luka's shrine (one of her dad's acquaintance), having green Upa from her mom",
        ],
      },
      {
        date: "12-05-2010 - 1.129848%",
        ep: "SGO CE",
        title: "Report on encephalitis in US",
      },
      {
        date: "12-15-2010 - 1.129848%",
        ep: "SGO EP23, CE, XDP",
        title: "The phone decision",
        desc:[
          "__ITER__ EP23",
          "D-RINE deceive the world received",
          "__ITER__ CE",
          "Okabe decided to turn his phone off. Okabe and Daru learn about Kagari > <span class='t-b'>1.064750% (Stray Sheep)</span>",
          "__ITER__ XDP",
          "Okabe doesn't turn his phone off. He receives a D-Rine informing him the world can be tricked > continuation on <span class='t-b'> 1.129848% (X-Day Protocol)</span>",
          "He meets Leskinen and Maho having in mind the desire to stop his participation in Amadeus testing.",
          "The man who criticized the project at ATC attacked Izaki, Maho and Okabe. He is headshot"
        ]
      },
      {
        date: "12-21-2010 - 1.129848%",
        ep: "SGO XDP",
        title: "Daru tells Okabe about Kagari's existence"
      },
      {
        date: "12-23-2010 - 1.064750%",
        ep: "SGO SS",
        title: "Kagari is introduced and meets Mayuri"
      },
      {
        id:"event-12-25-b",
        date: "12-24-2010",
        ep: "SGO XDP, PB",
        title: "Chrismas at war",
        desc: [
          "__ITER__ 1.129848% ",
          `Christmas party > <a href="#event-12-25-b" class="t-b dmail-link">1.382733%<img src="${ICON_LEAP}" " class="icon-leap"></a>`,
          "__ITER__ 1.382733%",
          "Okabe is suddently on the front but move to be in a safer place (01-21)",
          "__ITER__ 1.129954%",
          "Okabe and Fubuki collapsed, Fubuki is still at the hospital one month later"
        ]
      },
      {
        date: "12-31-2010",
        ep: "SG0 EP6,7, OE",
        title: "New year attack and hack",
        desc: [
          "Last day of Comima",
          "DURPA attack because they got Kagari, one attacker has biker helmet > Braun saves them (still Rounders chief)",
          `Amadeus is hacked but calls Okabe begging for help, he responds allowing SERN to steal Kurisu\'s theory, beta premise is broken > reading steiner activation > shift to <a href="#event-01-02" class="t-a dmail-link">alpha 01-02-2011</a>`,
        ],
      },
      {
        date: "01-01-2011",
        ep: "SG0 OE,TA",
        title: "New Year celebration at the shrine",
        desc:[
          "Maho presents Amadeus to the lab but lost access",
          "Lab is attacked, Kagari kidnapping attempt",
          "__ITER__ 1.081163%",
          "Gaz leaks in Wako instead of lab being attacked. Maho and Leskinen move to Denki University",
          "Maho's hotel room is ransacked"
        ]
      },
      {
        id: "event-01-02-2011-b",
        date: "01-02-2011 - 1.064750%",
        ep: "SG0 OE, AD",
        title: "Amadeus call",
        desc:[
          "Okabe does not answer > <span class='t-b'>1.081163% (Twin Automata)</span>",
          `Okabe answers the call > <a href="#event-01-02" class="t-a dmail-link">0.571082% (Antinomic Dual)</a>`,
          "__ITER__ 1.053649%",
          "Kagari starts working at Braun's shop"
        ]
      },
      {
        id: "event-01-05",
        date: "01-05-2011",
        ep: "SG0 EP9-13, TA",
        title: "The PC and Kagari disappearance",
        desc: [
          "Okabe wakes up in hospital, was found with Nakase in lab, she dreamt about Mayuri being dead and that she worked at May Queen. Both collapsed. Had been an explosion & hotel theft (organization searching for Kurisu's PC)",
          "Maho comes to live with Faris",
          "Russia begins time-travel testing",
          "Suzuha says she only can jump once or twice on 6 months, used machine too much to find Kagari",
          "Amadeus is back",
          "Maho reveals she has PC, Daru able to retrieve the content",
          "Ambush between US & RU organizations, Okabe+Maho+Daru in-between, PC destroyed by russians",
          "Maho & Leskinen return to USA with Amadeus",
          'Kagari disappears for "several months", Moeka & Okabe finds an unregistered building where Kagari has awaken',
          "__ITER__ 1.081163%",
          "Attack involving a masked woman, Maho flees because she is the target",
          "Judy shoots Leskinen (lethal), Moeka rescues Maho and gives password to Reyes. Judy shoots Moeka but the Rounder kicks her back",
          "Amadeus reveals Kurisu's laptop passcode to Maho (Piano SOnata II) before her deletion"
        ],
      },
      {
        date: "01-06-2011 - 1.053649%",
        ep: "SG0 AD",
        title: "Maho learns everything",
        desc:[
          "Okabe offers a pink bunny fork to Kagari",
          "He tells Maho everything. They start building Time Leap Machine upgraded version",
          "Wako lab pillage",
        ]
      },
      {
        date: "01-11-2011 - 1.053649%",
        ep: "SG0 AD",
        title: "Maho and Daru's achievements",
        desc:[
          "Daru hacks SERN, Maho finished the Time Leap Machine",
          "Maho's hotel room is ransacked"
        ]
      },
      {
        date: "01-15-2011 - 1.053649%",
        ep: "SG0 AD",
        title: "STRATFOR is fooled",
        desc:[
          "Suzuha baits STRATFOR faking she is Kagari",
          "Daru hacks STRATFOR",
          "Okabe hesitates to overwrite Kagari's memory with Time Leap Machine upgraded, Kurisu's memories pick up the phone > RS activates <span class='t-b'>1.064756% Recursive Mother Goose</span>",
          "Okabe willingly answers the phone to Kagari's temple > RS activates <span class='t-b'>1.055821% Promised Rinascimento</span>"
        ]
      },
      {
        date: "01-16-2011 - 1.053649%",
        ep: "SG0 RMG",
        title: "Kagari is hit by a truck",
        desc:[
          "Kagari only remembers her past. Guided by GOD's voice, she gets hit by a truck. She remembers her past memories"
        ]
      },
      {
        date: "01-21-2011 - 1.382733%",
        ep: "SG0 PB",
        title: "Okabe arrives at an US air base",
        desc:[
          "An American soldier hands him a phone, it's Amadeus > <span class='t-b'>1.129954%</span>",
          "__ITER__ 1.129954%",
          "'New encephalitis strikes worldwide', heard on TV. It concerns 100 individuals globally, 10 Japanese"
        ]
      },
      {
        date: "01-23-2011",
        ep: "SG0 PB",
        title: "New Amadeus phonecall",
        desc:[
          "__ITER__ 1.129954%",
          "Call answered",
          "Wako and Maho's hotel room are ransacked",
          "__ITER__ (pre) PoR",
          "Does not answer the call. Okabe tells Maho about everything except his implication in Kurisu's murder",
          "Intruders arrive at Daru's hideout. Okabe, Daru and Maho bump into Moeka and another masked woman. Rounders are attacked by Russians and the laptop is destroyed",
          "Wako and Maho's hotel room are ransacked",

        ]
      },
      {
        date: "01-26-2011 - 1.129954%",
        ep: "SG0 PB, PR",
        title: "Maho and Leskinen leave Japan",
        desc: [
          "__ITER__ (pre) PoR",
          "Okabe's participation to Amadeus project ends"
        ]
      },
      {
        id:"event-01-31",
        date: "01-31-2011 - 1.055821%",
        ep: "SG0 PR",
        title: "Maho backups Okabe's memory into Amadeus system",
        desc:[
          "Hououin Kyouma revival. Kagari, Maho, Luka and Faris become lab members"
        ]
      },
      {
        date: "02-02-2011",
        ep: "SG0 PR",
        title: "Operation Salieri",
        desc:[
          "The lab tricks STRATFOR with noisy data location to avoid the organization to interfere with their hacking. Moeka leaks they posess Kurisu's laptop to bait them",
          "Brainwashed Kagari is proposed in exchange of the laptop + hard drive",
          "In Denki basement Reyes fails to overwrite Kagari's and her own memories because Daru deleted Kurisu's data. Consequently, Reyes is now an empty shell"
        ]
      },
      {
        date: "02-06-2011",
        ep: "SG0 PR",
        title: "OSHMFUFAHSA badges distribution",
      },
      {
        date: "02-18-2011",
        ep: "SG0 PR",
        title: "Phonewave is upgraded to send D-Rine",
        desc:["Launch of Helheim Operation, they send the 'deceive the world' D-Rine"]
      },
      {
        date: "02-xx-2011 - 1.081163%",
        ep: "SG0 TA",
        title: "Maho returns to USA",
      },
      {
        date: "06-25-2011",
        ep: "SG0 EP14,15, GS",
        title: "Hope to change the fate",
        desc: [
          "Maho back to Japan",
          "Daru gathered pieces of time leap machine destroyed by Okabe and asks Maho to help rebuild it",
          "Meets Leskinen at Japan hospital. Patients suffering of encephalitis are transferred to AH Hospital, including Fubuki",
          "Okabe offers a Fairy Upa to Mayuri",
          "Kagari returns to the lab in biker clothes to take her Upa back. She confronted Suzuha and Daru",
        ],
      },
      {
        date: "07-xx-2011",
        ep: "SG0 EP16, GS",
        title: "Jelly banana, the return",
        desc: [
          "__ITER__ ANIME",
          "Okabe finds jelly banana and Phonewave 2 (provisional)",
          "Daru explains he tests it because Suzuha can only jump 1 year before due to fuel = ultimate chance to save Kurisu & world",
          "__ITER__ 1.143688%",
          "Maho is brainwashed",
        ],
      },
      {
        date: "07-03-2011",
        ep: "SG0 PoR",
        title: "Maho and Leskinen return to Japan, Okabe is aware of Maho's returnal (≠GS)"
      },
      {
        id: "event-07-06",
        date: "07-06-2011",
        ep: "SG0 EP22, PB, GS",
        title: "RU US tensions & D-Rine",
        desc: [
          "__ITER__ ITERATION FROM 07-07",
          "Team learns Dr. Nakabachi travelled to RU with Kurisu's paper but did not succeed in completing the machine. RU destroyed the PC to put obstacles on US journey",
          "Daru built D-Rine system (prototype), invisible from ECHELON system. Last spring, only him had the app to receive",
          "__ITER__ 1.129954%",
          "Okabe shares everything to Maho (time-travel, thesis, RS...)",
          "__ITER__ 1.143688%",
          "Maho sells out Okabe to Leskinen. He is captured and placed in a dark STRATFOR basement. Leskinen plans to torture and export his memory to get information about time-travel"
        ],
      },
      {
        id: "event-07-07",
        date: "07-07-2011",
        ep: "SG0 EP17-23, RMG, GS",
        title: "Arc Light operation",
        desc: [
          "__ITER__ 1.097302%",
          "Mayuri understands she stopped Okabe to save Kurisu",
          '15:16 no network only "controlled information". Amadeus (+knowledge about time-travel) hacked',
          "Mayuri asks Suzuha to go to 08-21 with her",
          "Bike girl eliminated by Suzuha, who also shoots Okabe",
          "Suzuha receives D-Mail video from 2025 Daru detailing operation Arc Light",
          "Ambush by STRATFO, Mayuri wounded > Kagari kills soldiers",
          "Okabe meets Leskinen who learned all from Kagari",
          "Kagari dies",
          "Leskinen tells that in History time machine will be destroyed but rebuilt in 25 years, his plan is to steal it, trick the world to make believe it was destroyed and to go to the past",
          "DURPA comes with helicopter and shoot at time machine (with Mayuri & Suzuha inside)",
          "Time leap unfinished > they rebuild it",
          "__ITER__ ITERATION FROM 07-09",
          "Daru makes Amadeus backup",
          "17:15 time machine destroyed by DURPA missile, again",
          "Lab works on time leap machine > unknown amount of days pass > time leap but time stops. Machine was unfinished, Okabe's memory stuck into backup of the computer",
          "__ITER__ ITERATION FROM 2025",
          "15:25 asks to hack Amadeus",
          "Moeka is faking she is STRATFO member to confront Leskinen on rooftop",
          `Machine destroyed by Russian helicopter > <a href="#event-07-06" class="t-b dmail-link">time leaps to one day before 18:32<img src="${ICON_LEAP}" " class="icon-leap"></a>`,
          "__ITER__ ITERATION CONTINUATION FROM 07-06",
          'D-Rine to past Daru asking himself to delete all data from servers, alongside rights granted by Maho to do so > <b class="t-b">1.123581%</b>',
          "Team met Maho not because of Amadeus, which no more exists. Leskinen did not completely brainwashed Kagari (not having Amadeus)",
          `Kagari attacks protecting her future but then protects them when they leave, Operation Arc Light success : Mayuri & Suzuha go <a href="#event-08-21" class="t-b dmail-link">to 08-21-2010<img src="${ICON_TIME_MACHINE}" " class="dmail-icon time-machine"></a>`,
          '__ITER__ 1.064756%',
          "Suzuha and Kagari go to the past",
          "__ITER__ 1.143688%",
          "Maho tells everything to Mayuri who understands she needs to act",
          "STRATFOR invades Akihabara and destroyes time machine > the WWIII begins",
          "Kagari and Maho come to save Okabe. Kagari dies, Leskinen flees, Maho succeeds in rescuing him"
        ],
      },
      {
        date: "07-08-2011 - 1.143688%",
        ep: "SG0 GS",
        title: "Okabe awakes at the hospital"
      },
      {
        date: "07-09-2011",
        ep: "SG0 EP19",
        title: `Daru retrieves Amadeus & hacks SERN > <a href="#event-07-07" class="t-b dmail-link">time leap to 7th 15:00<img src="${ICON_LEAP}" " class="icon-leap"></a>`,
      },
      {
        id: "event-2025",
        date: "xx-xx-2025",
        ep: "SG0 EP21,23",
        title: "STRATFO operation - Conclusion of Arc Light",
        desc: [
          "__ITER__ ITERATION FROM 2036",
          "During STRATFO operation, Amadeus deactivates herself to go under radar. Use friends as baits having indicators activated on their phones (they will survive as Okabe saw them in the future)",
          `Continues time leaps until <a href="#event-07-07" class="t-b dmail-link">07-07-2011<img src="${ICON_LEAP}" " class="icon-leap"></a>`,
          "__ITER__ iteration continuation from 07-07-2011",
          "Video recording (D-Rine) for 07-28-2010 Okabe and for 07-07-2011 Suzuha",
          "Suzuha is a child, Kagari an adult",
          "Okabe is given the green Upa > physical travel (with prototype machine) to 18000BC to save Mayuri & Suzuha who completed operation Arc Light",
        ],
      },
      {
        date: "08-01-2025",
        ep: "Aishin no Babel",
        title: "Watch TV D-Mail",
        desc: [
          `Sent <a href="#event-08-21" class="t-b dmail-link">to 08-21-2010<img src="${ICON_PHONE}" " class="dmail-icon"></a>`,
        ],
      },
      {
        date: "xx-xx-2025",
        ep: "SG0 PR",
        title: "Time Leap Machine upgraded : can jump 2 weeks backward"
      },
      {
        date: "xx-xx-2032",
        ep: "SG0 PoR",
        title: "Kagari Shiina is registered as her name"
      },
      {
        date: "03-07-2036 - 1.055821%",
        ep: "SG0 EP20,21, PR",
        title: "Okabe's 2011 memories are restored",
        desc:[
          "__ITER__ Promised Rinascimento",
          "2 weeks ago, Daru found Okabe and Kurisu's memories in STRATFOR server (Denki University). He downloaded into Okabe's brain and he awoke 10 days later",
          `Luka is dead, Okabe decides to return to <a href='event-01-31' class='t-b dmail-link'>01-31-2011<img src='${ICON_LEAP}' class='icon-leap'/></a>`,
          "__ITER__ ANIME",
          "Okabe wakes up. Everyone except Daru thought he died in 2025, the year Okabe called Daru telling him to complete the machine, was kidnapped by STRATFO and turned into vegetative state",
          `Okabe time leaps (needs 3 000 jumps to reach 2011), <a href="#event-2025" class="t-b dmail-link">stopping by 2025<img src="${ICON_LEAP}" " class="icon-leap"></a>`,
        ]
      },
      {
        date: "08-13-2036 - 1.129848%",
        ep: "SG0 CE",
        title: "Suzuha & Kagari departure",
        desc:[
          `Mayuri offers Fairy Upa to Kagari. They left to <a href="#1975" class="t-b dmail-link">08-13-1975<img src="${ICON_TIME_MACHINE}" " class="dmail-icon time-machine"></a>`
        ]
      },
      {
        date: "xx-xx-2036",
        ep: "SG0 AD",
        title: "Dystopian future",
        desc: [
          'Attractor Field Theory becomes the common standard model for quantum physics'
        ],
      },
    ],
  },
  {
    id: "wl-4",
    greek: "δ",
    name: "Delta",
    cls: "delta",
    off: 90,
    railX: 115,
    divVal: "3.000000",
    div: { from: "beta", to: "delta", cls: "t-d" },
    events: [
      {
        date: "08-20-2004",
        ep: "MDE MAYURI",
        title: "Mayuri's grandmother dies",
      },
      {
        date: "08-11-2010",
        ep: "Hiyoku Renri no Sweets Final",
        title: "FG#14 incident",
        desc: ["Broadcasting of Kurisu’s dream in all Akihabara analog TV"],
      },
    ],
  },
  {
    id: "wl-5",
    greek: "γ",
    name: "Gamma",
    cls: "gamma",
    off: 30,
    railX: 55,
    divVal: "2.000000",
    div: { from: "delta", to: "gamma", cls: "t-g" },
    events: [
      {
        ep: "GAMMA CD",
        date: "01-xx-1993 - 2.615074%",
        title: "Luka's mother misinterprets the D-Mail, Luka will be a boy"
        
      },
      {
        date: "1993 - 2.615074%",
        ep: "GAMMA CD",
        title: "Luka's D-Mail caught by SERN"
      },
      {
        date: "2000 - 2.615074%",
        ep: "GAMMA CD",
        title: "2000 Crash",
        desc: [
          "Crash, leading to the death of Mayuri's and Okabe's parents. Childhood friends part away for 7 years"
        ]
      },
      {
        date: "2007 - 2.615074",
        ep: "GAMMA CD",
        title: "Mayuri and Okabe meet again"
      },
      {
        date: "2010 - 2.615074",
        ep: "GAMMA CD",
        title: "Operation Dvergr",
        desc: [
          "M3 killed an investigator from EUROPOL",
          `Okabe and Moeka force the coerce the lab to send the undoing D-Mail. Okabe dies, Moeka succeeds in doing so > <a href="#event-08-13" class="t-a dmail-link">08-13<img src="${ICON_PHONE} » " class="dmail-icon"></a>`,
        ]
      },
    ],
  }
];
