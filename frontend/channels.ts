// https://www.siriusxm.com/albumart/Live/Default/DefaultMDS_m_52.jpg
export interface Channel {
  id: string;
  deeplink: string;
  name: string;
  number: number;
  genre: string;
  desc: string;
  playlist: string;
}

export const channels: Channel[] = [
  {
    id: 'siriushits1',
    deeplink: 'SiriusXMHits1',
    number: 2,
    name: 'SiriusXM Hits 1',
    genre: 'Pop',
    desc: 'Today\'s Pop Hits',
    playlist: '40al90DcGyME5Hri3nxE9P',
  },
  {
    id: '9389',
    deeplink: 'Venus',
    number: 3,
    name: 'Venus',
    genre: 'Pop',
    desc: 'Pop Music You Can Move To',
    playlist: '5EMlxbEmQpcA9bMDZawvfN',
  },
  {
    id: '9406',
    deeplink: 'PitbullsGlobalization',
    number: 4,
    name: 'Pitbull\'s Globalization',
    genre: 'Pop',
    desc: 'Worldwide Rhythmic Hits',
    playlist: '6WV3W3FH1mgK9Ao3mRlsdW',
  },
  {
    id: 'siriusgold',
    deeplink: '50son5',
    number: 5,
    name: '\'50s on 5',
    genre: 'Pop',
    desc: '\'50s Pop Hits',
    playlist: '0MQHK3oxSSaqQgIEd7sqCm',
  },
  {
    id: '60svibrations',
    deeplink: '60son6',
    number: 6,
    name: '\'60s on 6',
    genre: 'Pop',
    desc: '\'60s Pop Hits w/ Cousin Brucie',
    playlist: '1TKPtgYaVx2XXDHyXG8vTr',
  },
  {
    id: 'totally70s',
    deeplink: '70son7',
    number: 7,
    name: '\'70s on 7',
    genre: 'Pop',
    desc: '\'70s Pop Hits',
    playlist: '54XRfhXgr5N5QT4LRJ5Elf',
  },
  {
    id: 'big80s',
    deeplink: '80son8',
    number: 8,
    name: '\'80s on 8',
    genre: 'Pop',
    desc: '\'80s Pop Hits',
    playlist: '47uqNTJniFyzXf5UMli4E7',
  },
  {
    id: '8206',
    deeplink: '90son9',
    number: 9,
    name: '\'90s on 9',
    genre: 'Pop',
    desc: '\'90s Pop Hits',
    playlist: '3sZC2O1CF7b32afyxMohFs',
  },
  {
    id: '8208',
    deeplink: 'Pop2K',
    number: 10,
    name: 'Pop2K',
    genre: 'Pop',
    desc: '2000s Pop Hits',
    playlist: '0ho4C6Yj4EYJSpiFgwzXWC',
  },
  // {
  //   id: '9138',
  //   number: 13,
  //   name: 'SiriusXM Limited Edition',
  //   genre: 'Pop',
  //   desc: 'Exclusive Limited-Run Channels',
  // },
  {
    id: 'coffeehouse',
    deeplink: 'TheCoffeeHouse',
    number: 14,
    name: 'The Coffee House',
    genre: 'Pop',
    desc: 'Acoustic/Singer-Songwriters',
    playlist: '6KzgIcb4jxpU7dgq5WVJA1',
  },
  {
    id: 'thepulse',
    deeplink: 'ThePulse',
    number: 15,
    name: 'The Pulse',
    genre: 'Pop',
    desc: 'Adult Pop Hits',
    playlist: '1B8WYlu9LA5yDm3mPilKnK',
  },
  {
    id: 'starlite',
    deeplink: 'TheBlend',
    number: 16,
    name: 'The Blend',
    genre: 'Pop',
    desc: 'Bright Pop Hits',
    playlist: '4U1w1DNhpN6Y8ZvxvJpwn0',
  },
  {
    id: '9450',
    deeplink: 'PopRocks',
    number: 17,
    name: 'PopRocks',
    genre: 'Pop',
    desc: 'Rock & Pop from the \'90s & 2Ks',
    playlist: '1PcSu1p5PaLOssq9VnW30g',
  },
  // {
  //   id: '9446',
  //   number: 18,
  //   name: 'The Beatles Channel',
  //   genre: 'Rock',
  //   desc: 'The Fab Four, 24/8',
  // },
  // {
  //   id: 'elvisradio',
  //   number: 19,
  //   name: 'Elvis Radio',
  //   genre: 'Rock',
  //   desc: 'Elvis 24/7 Live from Graceland',
  // },
  // {
  //   id: 'estreetradio',
  //   number: 20,
  //   name: 'E Street Radio',
  //   genre: 'Rock',
  //   desc: 'Bruce Springsteen, 24/7',
  // },
  {
    id: 'undergroundgarage',
    deeplink: 'UndergroundGarage',
    number: 21,
    name: 'Underground Garage',
    genre: 'Rock',
    desc: 'Little Steven\'s Garage Rock',
    playlist: '1CRqLRDsoD0PJOJa4M87F4',
  },
  // {
  //   id: '8370',
  //   number: 22,
  //   name: 'Pearl Jam Radio',
  //   genre: 'Rock',
  //   desc: 'Pearl Jam 24/7',
  // },
  // {
  //   id: 'gratefuldead',
  //   number: 23,
  //   name: 'Grateful Dead Channel',
  //   genre: 'Rock',
  //   desc: 'Grateful Dead, 24/7',
  // },
  {
    id: 'radiomargaritaville',
    deeplink: 'RadioMargaritaville',
    number: 24,
    name: 'Radio Margaritaville',
    genre: 'Rock',
    desc: 'Escape to Margaritaville',
    playlist: '0JwUOCX909iPq2sk8mgtAU',
  },
  {
    id: 'classicrewind',
    deeplink: 'ClassicRewind',
    number: 25,
    name: 'Classic Rewind',
    genre: 'Rock',
    desc: '\'70s/\'80s Classic Rock',
    playlist: '7vTtnf3vjVvzvlCMGOrWyC',
  },
  {
    id: 'classicvinyl',
    deeplink: 'ClassicVinyl',
    number: 26,
    name: 'Classic Vinyl',
    genre: 'Rock',
    desc: '\'60s/\'70s Classic Rock',
    playlist: '78n3FrbkunJt6IH5TUZ8Ni',
  },
  {
    id: 'thevault',
    deeplink: 'DeepTracks',
    number: 27,
    name: 'Deep Tracks',
    genre: 'Rock',
    desc: 'Deep Classic Rock',
    playlist: '54uqMB4L3mmKJnxY8suNjZ',
  },
  {
    id: 'thespectrum',
    deeplink: 'TheSpectrum',
    number: 28,
    name: 'The Spectrum',
    genre: 'Rock',
    desc: 'New Rock Meets Classic Rock',
    playlist: '5wf2VnbUFSaOENW4NzL4Id',
  },
  // {
  //   id: 'jamon',
  //   number: 29,
  //   name: 'Jam_ON',
  //   genre: 'Rock',
  //   desc: 'Jam Bands',
  //   playlist: '',
  // },
  {
    id: '8207',
    deeplink: 'TheLoft',
    number: 30,
    name: 'The Loft',
    genre: 'Rock',
    desc: 'Eclectic Rock',
    playlist: '5SnpYIF1lrdv5pM9GYhpgJ',
  },
  // {
  //   id: '9407',
  //   number: 31,
  //   name: 'Tom Petty Radio',
  //   genre: 'Rock',
  //   desc: 'Music Curated by Tom Petty',
  // },
  {
    id: 'thebridge',
    deeplink: 'TheBridge',
    number: 32,
    name: 'The Bridge',
    genre: 'Rock',
    desc: 'Mellow Rock',
    playlist: '0NHFhSjOzj6WqKC35hnq3e',
  },
  {
    id: 'firstwave',
    deeplink: '1stWave',
    number: 33,
    name: '1st Wave',
    genre: 'Rock',
    desc: '\'80s Alternative/New Wave',
    playlist: '5PirJdWNH0K8FecVmIZDog',
  },
  {
    id: '90salternative',
    deeplink: 'Lithium',
    number: 34,
    name: 'Lithium',
    genre: 'Rock',
    desc: '\'90s Alternative/Grunge',
    playlist: '0NSVcRasPeL716J4CCA4sX',
  },
  {
    id: 'leftofcenter',
    deeplink: 'SiriusXMU',
    number: 35,
    name: 'SiriusXMU',
    genre: 'Rock',
    desc: 'New Indie Rock',
    playlist: '2dUxEz8plLylyhIpa9ERXT',
  },
  {
    id: 'altnation',
    deeplink: 'AltNation',
    number: 36,
    name: 'Alt Nation',
    genre: 'Rock',
    desc: 'New Alternative Rock',
    playlist: '2D0rRuf9aL6W8xRZ7Gbzpn',
  },
  {
    id: 'octane',
    deeplink: 'Octane',
    number: 37,
    name: 'Octane',
    genre: 'Rock',
    desc: 'New Hard Rock',
    playlist: '4uEfLey0UZfmEp4vobm378',
  },
  {
    id: 'buzzsaw',
    deeplink: 'OzzysBoneyard',
    number: 38,
    name: 'Ozzy\'s Boneyard',
    genre: 'Rock',
    desc: 'Ozzy\'s Classic Hard Rock',
    playlist: '3v2ddXnIRIq8A33FQH2DaJ',
  },
  {
    id: 'hairnation',
    deeplink: 'HairNation',
    number: 39,
    name: 'Hair Nation',
    genre: 'Rock',
    desc: '\'80s Hair Bands',
    playlist: '1lsFTg8ohGiqf1JHnwIrmB',
  },
  {
    id: 'hardattack',
    deeplink: 'LiquidMetal',
    number: 40,
    name: 'Liquid Metal',
    genre: 'Rock',
    desc: 'Heavy Metal-XL',
    playlist: '002KgHoHT4zKaarhGgpWhu',
  },
  {
    id: '9413',
    deeplink: 'SiriusXMTurbo',
    number: 41,
    name: 'SiriusXM Turbo',
    genre: 'Rock',
    desc: 'Hard Rock from the \'90s/2000s',
    playlist: '2rXLvsVeVTcpZrbesfRxFw',
  },
  {
    id: 'reggaerhythms',
    deeplink: 'TheJoint',
    number: 42,
    name: 'The Joint',
    genre: 'R&B',
    desc: 'Reggae',
    playlist: '3unI3vzoWlLSJzoeitejbC',
  },
  {
    id: '9471',
    deeplink: 'RockTheBellsRadio',
    number: 43,
    name: 'Rock The Bells Radio',
    genre: 'Hip-Hop',
    desc: 'Classic Hip-Hop-XL',
    playlist: '6dJf2NJOX1l0mWoXFf1Hki',
  },
  {
    id: 'hiphopnation',
    deeplink: 'HipHopNation',
    number: 44,
    name: 'Hip-Hop Nation',
    genre: 'Hip-Hop',
    desc: 'Today\'s Hip-Hop Hits-XL',
    playlist: '1gjLA07Y6zdKtSdGx4NR0f',
  },
  {
    id: 'shade45',
    deeplink: 'Shade45',
    number: 45,
    name: 'Shade 45',
    genre: 'Hip-Hop',
    desc: 'Eminem\'s Hip-Hop Channel XL',
    playlist: '0p3t02TwsD8urU3ZNqVfMp',
  },
  {
    id: 'hotjamz',
    deeplink: 'TheHeat',
    number: 46,
    name: 'The Heat',
    genre: 'R&B',
    desc: 'Today\'s R&B Hits',
    playlist: '0S2qEvq6d9pDwmhdHSSNIy',
  },
  {
    id: '9339',
    deeplink: 'SiriusXMFLY',
    number: 47,
    name: 'SiriusXM FLY',
    genre: 'R&B',
    desc: '\'90s & 2000s Hip-Hop/R&B - XL',
    playlist: '4iCBk59izwYcvP4pzplQLg',
  },
  // {
  //   id: 'heartandsoul',
  //   number: 48,
  //   name: 'Heart & Soul',
  //   genre: 'R&B',
  //   desc: 'Adult R&B Hits',
  // },
  // {
  //   id: 'soultown',
  //   number: 49,
  //   name: 'Soul Town',
  //   genre: 'R&B',
  //   desc: 'Classic Soul/Motown',
  // },
  {
    id: '8228',
    deeplink: 'TheGroove',
    number: 50,
    name: 'The Groove',
    genre: 'R&B',
    desc: '\'70s/\'80s R&B',
    playlist: '0U3AEZcxXPCKYXimd8C3KE',
  },
  {
    id: 'thebeat',
    deeplink: 'BPM',
    number: 51,
    name: 'BPM',
    genre: 'Electronic',
    desc: 'Electronic Dance Music Hits',
    playlist: '7DEiHntTkFb4TcJcRCJhL0',
  },
  {
    id: '9472',
    deeplink: 'DiplosRevolution',
    number: 52,
    name: 'Diplo\'s Revolution',
    genre: 'Electronic',
    desc: 'Top Rhythmic Music',
    playlist: '5HpCrxQKRXg7YnYBdBY4eT',
  },
  {
    id: 'chill',
    deeplink: 'SiriusXMChill',
    number: 53,
    name: 'SiriusXM Chill',
    genre: 'Electronic',
    desc: 'Downtempo/Deep House',
    playlist: '4zCgB1d2enUh63CdekFeij',
  },
  {
    id: '9145',
    deeplink: 'Studio54Radio',
    number: 54,
    name: 'Studio 54 Radio',
    genre: 'Electronic',
    desc: '\'70s-2000s Dance Hits',
    playlist: '2gKrN0ChUDzaWkTpmvgsDf',
  },
  {
    id: '9421',
    deeplink: 'TheGarthChannel',
    number: 55,
    name: 'The Garth Channel',
    genre: 'Country',
    desc: 'Garth\'s Own Channel, 24/7',
    playlist: '1F3Y68SEvPruvDQ9P1wICu',
  },
  {
    id: 'newcountry',
    deeplink: 'TheHighway',
    number: 56,
    name: 'The Highway',
    genre: 'Country',
    desc: 'Today\'s Country Hits',
    playlist: '1NEhiGacNUMoSdH4pI73yr',
  },
  {
    id: '9418',
    deeplink: 'NoShoesRadio',
    number: 57,
    name: 'No Shoes Radio',
    genre: 'Country',
    desc: 'Kenny Chesney\'s Music Channel',
    playlist: '6MQ1c1ixTNbgP74sMJASgm',
  },
  {
    id: 'primecountry',
    deeplink: 'PrimeCountry',
    number: 58,
    name: 'Prime Country',
    genre: 'Country',
    desc: '\'80s/\'90s Country Hits',
    playlist: '7jnOANbKO2EHLg4bjCD4IO',
  },
  {
    id: 'theroadhouse',
    deeplink: 'WilliesRoadhouse',
    number: 59,
    name: 'Willie\'s Roadhouse',
    genre: 'Country',
    desc: 'Willie\'s Classic Country',
    playlist: '0VTk5reFEU3RCTFMJsepOF',
  },
  {
    id: 'outlawcountry',
    deeplink: 'OutlawCountry',
    number: 60,
    name: 'Outlaw Country',
    genre: 'Country',
    desc: 'Rockin\' Country Rebels',
    playlist: '7q3kzMhlxwd9eoo9ZCPfSq',
  },
  {
    id: '9340',
    deeplink: 'Y2Kountry',
    number: 61,
    name: 'Y2Kountry',
    genre: 'Country',
    desc: '2000s Country Hits',
    playlist: '5anBQRaNx5vSG3x6ia0VpX',
  },
  {
    id: 'bluegrass',
    deeplink: 'BluegrassJunction',
    number: 62,
    name: 'Bluegrass Junction',
    genre: 'Country',
    desc: 'Bluegrass',
    playlist: '3RzhOj8Kj2EtF6fiObNNvi',
  },
  {
    id: 'spirit',
    deeplink: 'TheMessage',
    number: 63,
    name: 'The Message',
    genre: 'Christian',
    desc: 'Christian Pop & Rock',
    playlist: '0WYpaAG3IBHOAxU3biDqn5',
  },
  // {
  //   id: 'praise',
  //   number: 64,
  //   name: "Kirk Franklin's Praise",
  //   genre: 'Christian',
  //   desc: "Kirk Franklin's Gospel Channel",
  // },
  // {
  //   id: '8229',
  //   number: 65,
  //   name: 'enLighten',
  //   genre: 'Christian',
  //   desc: 'Southern Gospel',
  // },
  {
    id: 'jazzcafe',
    deeplink: 'Watercolors',
    number: 66,
    name: 'Watercolors',
    genre: 'Jazz',
    desc: 'Smooth/Contemporary Jazz',
    playlist: '74UCWlZbDE50BAfsebS45P',
  },
  {
    id: 'purejazz',
    deeplink: 'RealJazz',
    number: 67,
    name: 'Real Jazz',
    genre: 'Jazz',
    desc: 'Classic Jazz',
    playlist: '3mDuSPlntj533CvZXvMnDS',
  },
  {
    id: 'Spa',
    deeplink: 'Spa',
    number: 68,
    name: 'Spa',
    genre: 'Jazz',
    desc: 'New Age',
    playlist: '6nDBgy12A29JltPBr9dhH9',
  },
  // {
  //   id: '8215',
  //   number: 69,
  //   name: 'Escape',
  //   genre: 'Jazz',
  //   desc: 'Easy Listening',
  // },
  // {
  //   id: 'siriusblues',
  //   number: 70,
  //   name: "BB King's Bluesville",
  //   genre: 'Jazz',
  //   desc: "B.B. King's Blues Channel",
  // },
  // {
  //   id: 'siriusly`sina`tra',
  //   number: 71,
  //   name: 'Siriusly Sinatra',
  //   genre: 'Jazz',
  //   desc: 'Standards By Sinatra & More',
  // },
  // {
  //   id: 'broadwaysbest',
  //   number: 72,
  //   name: 'On Broadway',
  //   genre: 'Jazz',
  //   desc: 'Show Tunes',
  // },
  // {
  //   id: '8205',
  //   number: 73,
  //   name: '40s Junction',
  //   genre: 'Jazz',
  //   desc: "'40s Pop Hits/Big Band",
  // },
  // {
  //   id: 'metropolitanopera',
  //   number: 74,
  //   name: 'Met Opera Radio',
  //   genre: 'Classical',
  //   desc: 'Opera/Classical Voices',
  // },
  {
    id: 'symphonyhall',
    deeplink: 'SymphonyHall',
    number: 76,
    name: 'Symphony Hall',
    genre: 'Classical',
    desc: 'Classical Music',
    playlist: '4KdXsNll67tp8qsp8wT0jF',
  },
  // {
  //   id: 'rumbon',
  //   number: 158,
  //   name: 'Caliente',
  //   genre: 'Pop',
  //   desc: 'Tropical Latin Music',
  // },
  {
    id: 'yachtrockradio',
    deeplink: 'YachtRockRadio',
    number: 178,
    name: 'Yacht Rock Radio',
    genre: 'Rock',
    desc: '\'70s/\'80s Smooth-Sailing Soft Rock',
    playlist: '0iEg6jD6Bappj9Ed7txsAp',
  },
  // {
  //   id: '9412',
  //   number: 300,
  //   name: 'Celebrate!',
  //   genre: 'Pop',
  //   desc: 'Happy Songs For A Celebration',
  // },
  {
    id: '9415',
    deeplink: 'RoadTripRadio',
    number: 301,
    name: 'Road Trip Radio',
    genre: 'Pop',
    desc: 'Music to Drive to!',
    playlist: '07GjrjDZV4egbvK15AYoR6',
  },
  // {
  //   id: '9416',
  //   number: 302,
  //   name: 'The Covers Channel',
  //   genre: 'Pop',
  //   desc: '24/7 Cover Songs',
  // },
  // {
  //   id: '9419',
  //   number: 303,
  //   name: 'ONEderland',
  //   genre: 'Pop',
  //   desc: 'One-Hit Wonders, 24/7',
  // },
  {
    id: '9361',
    deeplink: 'Velvet',
    number: 304,
    name: 'Velvet',
    genre: 'Pop',
    desc: 'Today’s Pop Vocalists',
    playlist: '0rO5UkNWpDLOCPgBZdHNfK',
  },
  // {
  //   id: '9174',
  //   number: 310,
  //   name: 'Rock and Roll Hall of Fame Radio',
  //   genre: 'Rock',
  //   desc: 'Rock Hall Inducted Artists',
  // },
  // {
  //   id: '9175',
  //   number: 313,
  //   name: 'RockBar',
  //   genre: 'Rock',
  //   desc: 'Rock & Roll Jukebox Songs',
  // },
  {
    id: 'faction',
    deeplink: 'FactionPunk',
    number: 314,
    name: 'Faction Punk',
    genre: 'Rock',
    desc: 'Punk & Beats w/ Jason Ellis XL',
    playlist: '3HRoF7JJ3UcyRoc49eGNpZ',
  },
  // {
  //   id: '9176',
  //   number: 316,
  //   name: 'SiriusXM Comes Alive!',
  //   genre: 'Rock',
  //   desc: 'Live Classic Rock',
  // },
  // {
  //   id: '9364',
  //   number: 330,
  //   name: 'SiriusXM Silk',
  //   genre: 'R&B',
  //   desc: 'Smooth R&B Love Songs',
  // },
  // {
  //   id: '9219',
  //   number: 340,
  //   name: "Tiësto's Club Life Radio",
  //   genre: 'Electronic',
  //   desc: "Tiësto's EDM Channel",
  // },
  {
    id: '9365',
    deeplink: 'Utopia',
    number: 341,
    name: 'Utopia',
    genre: 'Electronic',
    desc: '\'90s/2000s Dance Hits',
    playlist: '3FEpFULHGJMO8a9Khm0ZG7',
  },
  {
    id: '9178',
    deeplink: 'RedWhiteBooze',
    number: 350,
    name: 'Red White & Booze',
    genre: 'Country',
    desc: 'Country Bar Songs',
    playlist: '0vBFF5hqInc8S1riqCAgfr',
  },
  // {
  //   id: '8372',
  //   number: 700,
  //   name: 'Neil Diamond Radio',
  //   genre: 'Pop',
  //   desc: 'Neil Diamond, 24/7',
  // },
  // {
  //   id: '9362',
  //   number: 702,
  //   name: 'Elevations',
  //   genre: 'Pop',
  //   desc: 'Reimagined Pop & Rock Classics',
  // },
  // {
  //   id: '9378',
  //   number: 703,
  //   name: 'Oldies Party',
  //   genre: 'Pop',
  //   desc: 'Party Songs from the 50s & 60s',
  // },
  // {
  //   id: '9372',
  //   number: 704,
  //   name: '70s/80s Pop',
  //   genre: 'Pop',
  //   desc: "''70s & '80s Super Party Hits",
  // },
  // {
  //   id: '9373',
  //   number: 705,
  //   name: '80s/90s Pop',
  //   genre: 'Pop',
  //   desc: "'80s & '90s Party Hits",
  // },
  // {
  //   id: '9352',
  //   number: 712,
  //   name: "Tom Petty's Buried Treasure",
  //   genre: 'Rock',
  //   desc: 'Tom Petty’s Buried Treasure 24/7',
  // },
  {
    id: '9447',
    deeplink: 'TheEmoProject',
    number: 713,
    name: 'The Emo Project',
    genre: 'Rock',
    desc: 'Emotionally Driven Alt Rock',
    playlist: '78boQ0amoXinbWAbBWGgpd',
  },
  {
    id: '9451',
    deeplink: 'Indie10',
    number: 714,
    name: 'Indie 1.0',
    genre: 'Rock',
    desc: 'First-generation Indie Rock',
    playlist: '1D8g8Vvz4qr3jtlTYJuX1x',
  },
  {
    id: '9375',
    deeplink: 'ClassicRockParty',
    number: 715,
    name: 'Classic Rock Party',
    genre: 'Rock',
    desc: 'Non-Stop Classic Rock',
    playlist: '19DiREdiropsGcjcNIXFY8',
  },
  // {
  //   id: '9139',
  //   number: 716,
  //   name: 'SiriusXM Limited Edition 2',
  //   genre: 'Rock',
  //   desc: 'Home for limited-run channels',
  // },
  // {
  //   id: '9353',
  //   number: 717,
  //   name: 'SiriusXM Limited Edition 3',
  //   genre: 'Rock',
  //   desc: 'Home for limited-run channels',
  // },
  // {
  //   id: '9397',
  //   number: 720,
  //   name: "Sway's Universe",
  //   genre: 'Hip-Hop',
  //   desc: "Sway's Lifestyle Channel XL",
  // },
  // {
  //   id: '9398',
  //   number: 721,
  //   name: 'SiriusXM Limited Edition 4',
  //   genre: 'Hip-Hop',
  //   desc: 'Home for limited-run channels XL',
  // },
  // {
  //   id: '9399',
  //   number: 726,
  //   name: 'SiriusXM Limited Edition 5',
  //   genre: 'R&B',
  //   desc: 'Home for limited-run channels',
  // },
  // {
  //   id: '9400',
  //   number: 730,
  //   name: 'SiriusXM Limited Edition 6',
  //   genre: 'Electronic',
  //   desc: 'Home for limited-run channels',
  // },
  // {
  //   id: '8227',
  //   number: 741,
  //   name: 'The Village',
  //   genre: 'Country',
  //   desc: 'Folk',
  // },
  // {
  //   id: '9401',
  //   number: 742,
  //   name: 'SiriusXM Limited Edition 7',
  //   genre: 'Country',
  //   desc: 'Home for limited-run channels',
  // },
  // {
  //   id: '9402',
  //   number: 745,
  //   name: 'SiriusXM Limited Edition 8',
  //   genre: 'Christian',
  //   desc: 'Home for limited-run channels',
  // },
  // {
  //   id: '8211',
  //   number: 750,
  //   name: 'Cinemagic',
  //   genre: 'Jazz',
  //   desc: 'Movie Soundtracks and More',
  // },
  // {
  //   id: '9179',
  //   number: 751,
  //   name: 'Krishna Das Yoga Radio',
  //   genre: 'Jazz',
  //   desc: 'Chant/Sacred/Spiritual Music',
  // },
  // {
  //   id: '9403',
  //   number: 752,
  //   name: 'SiriusXM Limited Edition 9',
  //   genre: 'Jazz',
  //   desc: 'Home for limited-run channels',
  // },
  // {
  //   id: 'siriuspops',
  //   number: 755,
  //   name: 'SiriusXM Pops',
  //   genre: 'Classical',
  //   desc: 'Classical Pops',
  // },
  // {
  //   id: '9404',
  //   number: 756,
  //   name: 'SiriusXM Limited Edition 10',
  //   genre: 'Classical',
  //   desc: 'Home for limited-run channels',
  // },
  // {
  //   id: '9186',
  //   number: 761,
  //   name: 'Águila',
  //   genre: 'Latino',
  //   desc: 'Regional Mexican Music',
  // },
  // {
  //   id: '9188',
  //   number: 762,
  //   name: 'Caricia',
  //   genre: 'Latino',
  //   desc: 'Ballads in Spanish & English',
  // },
  // {
  //   id: '8225',
  //   number: 763,
  //   name: 'Viva',
  //   genre: 'Latino',
  //   desc: 'Modern Latin Pop & Ballads',
  // },
  // {
  //   id: '9187',
  //   number: 764,
  //   name: 'Latidos',
  //   genre: 'Latino',
  //   desc: 'Latin Love Songs',
  // },
  // {
  //   id: '9185',
  //   number: 765,
  //   name: 'Flow Nación',
  //   genre: 'Latino',
  //   desc: 'Latin Urban Music',
  // },
  // {
  //   id: '9189',
  //   number: 766,
  //   name: 'Luna',
  //   genre: 'Latino',
  //   desc: 'Latin Jazz',
  // },
  // {
  //   id: '9190',
  //   number: 767,
  //   name: 'Rumbón',
  //   genre: 'Latino',
  //   desc: 'Classic Salsa',
  // },
  // {
  //   id: '9191',
  //   number: 768,
  //   name: 'La Kueva',
  //   genre: 'Latino',
  //   desc: 'Latin Rock',
  // },
  // {
  //   id: '9342',
  //   number: 782,
  //   name: 'Holiday Traditions',
  //   genre: 'Pop',
  //   desc: 'Traditional Holiday Music',
  // },
  // {
  //   id: '9363',
  //   number: 791,
  //   name: 'Jason Ellis',
  //   genre: 'Rock',
  //   desc: 'Jason Ellis Show Nonstop XL',
  // },
];
