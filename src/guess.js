var currentSong;

var play_audio = document.getElementById("play_audio");
var play_audio_source = document.getElementById("play_audio_source");
var next_song = document.getElementById("next_song");
var song_name = document.getElementById("song_name");
var info = document.getElementById("info");
var songs = document.getElementById("songs");
var submit_text = document.getElementById("submit-text");
var submit_button = document.getElementById("submit-button");
var sanses = document.getElementById("sanses");
var sans_lines = document.getElementById("sans-lines");
var stat_streak = document.getElementById("stat-streak");
var volume_slider = document.getElementById("volume-slider");
var time = 100; // 100, 500, 2000, 8000, 15000

var useUndertale = true;
var useDeltarune12 = false;
var useDeltarune34 = false;
var useDeltarune5 = false;

var undertale_songs = {
  "./sound/Once Upon a Time.ogg": "UT - Once Upon a Time",
  "./sound/Start Menu.ogg": "UT - Start Menu",
  "./sound/Your Best Friend.ogg": "UT - Your Best Friend",
  "./sound/Fallen Down.ogg": "UT - Fallen Down",
  "./sound/Ruins.ogg": "UT - Ruins",
  "./sound/Uwa!! So Temperate♫.ogg": "UT - Uwa!! So Temperate♫",
  "./sound/Anticipation.ogg": "UT - Anticipation",
  "./sound/Unnecessary Tension.ogg": "UT - Unnecessary Tension",
  "./sound/Enemy Approaching.ogg": "UT - Enemy Approaching",
  "./sound/Ghost Fight.ogg": "UT - Ghost Fight",
  "./sound/MEGALOVANIA.ogg": "UT - MEGALOVANIA",
  "./sound/Determination.ogg": "UT - Determination",
  "./sound/Home.ogg": "UT - Home",
  "./sound/Home (Music Box).ogg": "UT - Home (Music Box)",
  "./sound/Heartache.ogg": "UT - Heartache",
  "./sound/sans..ogg": "UT - sans.",
  "./sound/Nyeh Heh Heh!.ogg": "UT - Nyeh Heh Heh!",
  "./sound/Snowy.ogg": "UT - Snowy",
  "./sound/Uwa!! So Holiday♫.ogg": "UT - Uwa!! So Holiday♫",
  "./sound/Dogbass.ogg": "UT - Dogbass",
  "./sound/Mysterious Place.ogg": "UT - Mysterious Place",
  "./sound/Dogsong.ogg": "UT - Dogsong",
  "./sound/Snowdin Town.ogg": "UT - Snowdin Town",
  "./sound/Shop.ogg": "UT - Shop",
  "./sound/Bonetrousle.ogg": "UT - Bonetrousle",
  "./sound/Dating Start!.ogg": "UT - Dating Start!",
  "./sound/Dating Tense!.ogg": "UT - Dating Tense!",
  "./sound/Dating Fight!.ogg": "UT - Dating Fight!",
  "./sound/Premonition.ogg": "UT - Premonition",
  "./sound/Danger Mystery.ogg": "UT - Danger Mystery",
  "./sound/Undyne.ogg": "UT - Undyne",
  "./sound/Waterfall.ogg": "UT - Waterfall",
  "./sound/Run!.ogg": "UT - Run!",
  "./sound/Quiet Water.ogg": "UT - Quiet Water",
  "./sound/Memory.ogg": "UT - Memory",
  "./sound/Bird That Carries You Over A Disproportionately Small Gap.ogg":
    "UT - Bird That Carries You Over A Disproportionately Small Gap",
  "./sound/Dummy!.ogg": "UT - Dummy!",
  "./sound/Pathetic House.ogg": "UT - Pathetic House",
  "./sound/Spooktune.ogg": "UT - Spooktune",
  "./sound/Spookwave.ogg": "UT - Spookwave",
  "./sound/Ghouliday.ogg": "UT - Ghouliday",
  "./sound/Chill.ogg": "UT - Chill",
  "./sound/Thundersnail.ogg": "UT - Thundersnail",
  "./sound/Temmie Village.ogg": "UT - Temmie Village",
  "./sound/Tem Shop.ogg": "UT - Tem Shop",
  "./sound/NGAHHH!!.ogg": "UT - NGAHHH!!",
  "./sound/Spear of Justice.ogg": "UT - Spear of Justice",
  "./sound/Ooo.ogg": "UT - Ooo",
  "./sound/Alphys.ogg": "UT - Alphys",
  "./sound/It's Showtime!.ogg": "UT - It's Showtime!",
  "./sound/Metal Crusher.ogg": "UT - Metal Crusher",
  "./sound/Another Medium.ogg": "UT - Another Medium",
  "./sound/Uwa!! So HEATS!!♫.ogg": "UT - Uwa!! So HEATS!!♫",
  "./sound/Stronger Monsters.ogg": "UT - Stronger Monsters",
  "./sound/Hotel.ogg": "UT - Hotel",
  "./sound/Can You Really Call This A Hotel, I Didn't Receive A Mint On My Pillow Or Anything.ogg":
    "UT - Can You Really Call This A Hotel, I Didn't Receive A Mint On My Pillow Or Anything",
  "./sound/Confession.ogg": "UT - Confession",
  "./sound/Live Report.ogg": "UT - Live Report",
  "./sound/Death Report.ogg": "UT - Death Report",
  "./sound/Spider Dance.ogg": "UT - Spider Dance",
  "./sound/Oh! One True Love.ogg": "UT - Oh! One True Love",
  "./sound/Oh! Dungeon.ogg": "UT - Oh! Dungeon",
  "./sound/It's Raining Somewhere Else.ogg": "UT - It's Raining Somewhere Else",
  "./sound/CORE Approach.ogg": "UT - CORE Approach",
  "./sound/CORE.ogg": "UT - CORE",
  "./sound/Last Episode!.ogg": "UT - Last Episode!",
  "./sound/Oh My....ogg": "UT - Oh My...",
  "./sound/Death by Glamour.ogg": "UT - Death by Glamour",
  "./sound/For the Fans.ogg": "UT - For the Fans",
  "./sound/Long Elevator.ogg": "UT - Long Elevator",
  "./sound/Undertale.ogg": "UT - Undertale",
  "./sound/The Choice.ogg": "UT - The Choice",
  "./sound/Small Shock.ogg": "UT - Small Shock",
  "./sound/Barrier.ogg": "UT - Barrier",
  "./sound/Bergentrückung.ogg": "UT - Bergentrückung",
  "./sound/ASGORE.ogg": "UT - ASGORE",
  "./sound/You Idiot.ogg": "UT - You Idiot",
  "./sound/Your Best Nightmare.ogg": "UT - Your Best Nightmare",
  "./sound/Finale.ogg": "UT - Finale",
  "./sound/An Ending.ogg": "UT - An Ending",
  "./sound/She's Playing Piano.ogg": "UT - She's Playing Piano",
  "./sound/Here We Are.ogg": "UT - Here We Are",
  "./sound/Amalgam.ogg": "UT - Amalgam",
  "./sound/Fallen Down (Reprise).ogg": "UT - Fallen Down (Reprise)",
  "./sound/Don't Give Up.ogg": "UT - Don't Give Up",
  "./sound/Hopes and Dreams.ogg": "UT - Hopes and Dreams",
  "./sound/Burn in Despair!.ogg": "UT - Burn in Despair!",
  "./sound/SAVE the World.ogg": "UT - SAVE the World",
  "./sound/His Theme.ogg": "UT - His Theme",
  "./sound/Final Power.ogg": "UT - Final Power",
  "./sound/Reunited.ogg": "UT - Reunited",
  "./sound/Menu (Full).ogg": "UT - Menu (Full)",
  "./sound/Respite.ogg": "UT - Respite",
  "./sound/Bring It In, Guys!.ogg": "UT - Bring It In, Guys!",
  "./sound/Last Goodbye.ogg": "UT - Last Goodbye",
  "./sound/But the Earth Refused to Die.ogg":
    "UT - But the Earth Refused to Die",
  "./sound/Battle Against a True Hero.ogg": "UT - Battle Against a True Hero",
  "./sound/Power of -NEO-.ogg": "UT - Power of -NEO-",
};

var deltarune_chapter12_songs = {
  "./sound/deltarune/Chapter12/A CYBER'S WORLD.ogg": "C2 - A CYBER'S WORLD",
  "./sound/deltarune/Chapter12/Acid Tunnel of Love.ogg":
    "C2 - Acid Tunnel of Love",
  "./sound/deltarune/Chapter12/Attack of the Killer Queen.ogg":
    "C2 - Attack of the Killer Queen",
  "./sound/deltarune/Chapter12/Before the Story.ogg": "C1 - Before the Story",
  "./sound/deltarune/Chapter12/Berdly.ogg": "C2 - Berdly",
  "./sound/deltarune/Chapter12/BIG SHOT.ogg": "C2 - BIG SHOT",
  "./sound/deltarune/Chapter12/Card Castle.ogg": "C1 - Card Castle",
  "./sound/deltarune/Chapter12/Chaos King.ogg": "C1 - Chaos King",
  "./sound/deltarune/Chapter12/Checker Dance.ogg": "C1 - Checker Dance",
  "./sound/deltarune/Chapter12/Cyber Battle (Solo).ogg":
    "C2 - Cyber Battle (Solo)",
  "./sound/deltarune/Chapter12/Cyber Battle.ogg": "C2 - Cyber Battle",
  "./sound/deltarune/Chapter12/Darkness Falls.ogg": "C1 - Darkness Falls",
  "./sound/deltarune/Chapter12/Don't Forget.ogg": "C1 - Don't Forget",
  "./sound/deltarune/Chapter12/Empty Town.ogg": "C1 - Empty Town",
  "./sound/deltarune/Chapter12/Faint Glow.ogg": "C2 - Faint Glow",
  "./sound/deltarune/Chapter12/Field of Hopes and Dreams.ogg":
    "C1 - Field of Hopes and Dreams",
  "./sound/deltarune/Chapter12/Friendship.ogg": "C1 - Friendship",
  "./sound/deltarune/Chapter12/Hip Shop.ogg": "C1 - Hip Shop",
  "./sound/deltarune/Chapter12/Holiday Studio.ogg": "C2 - Holiday Studio",
  "./sound/deltarune/Chapter12/It's Pronounced 'Rules'.ogg":
    "C2 - It's Pronounced 'Rules'",
  "./sound/deltarune/Chapter12/Knock You Down !!.ogg": "C2 - Knock You Down !!",
  "./sound/deltarune/Chapter12/Lancer.ogg": "C1 - Lancer",
  "./sound/deltarune/Chapter12/Lantern.ogg": "C1 - Lantern",
  "./sound/deltarune/Chapter12/Lost Girl.ogg": "C2 - Lost Girl",
  "./sound/deltarune/Chapter12/My Castle Town.ogg": "C2 - My Castle Town",
  "./sound/deltarune/Chapter12/NOW'S YOUR CHANCE TO BE A.ogg":
    "C2 - NOW'S YOUR CHANCE TO BE A",
  "./sound/deltarune/Chapter12/Pandora Palace.ogg": "C2 - Pandora Palace",
  "./sound/deltarune/Chapter12/Quiet Autumn.ogg": "C1 - Quiet Autumn",
  "./sound/deltarune/Chapter12/Rouxls Kaard.ogg": "C1 - Rouxls Kaard",
  "./sound/deltarune/Chapter12/Rude Buster.ogg": "C1 - Rude Buster",
  "./sound/deltarune/Chapter12/Scarlet Forest.ogg": "C1 - Scarlet Forest",
  "./sound/deltarune/Chapter12/School.ogg": "C1 - School",
  "./sound/deltarune/Chapter12/Smart Race.ogg": "C2 - Smart Race",
  "./sound/deltarune/Chapter12/Sound Studio.ogg": "C2 - Sound Studio",
  "./sound/deltarune/Chapter12/Spamton.ogg": "C2 - Spamton",
  "./sound/deltarune/Chapter12/The Circus.ogg": "C1 - The Circus",
  "./sound/deltarune/Chapter12/THE HOLY.ogg": "C2 - THE HOLY",
  "./sound/deltarune/Chapter12/The Legend.ogg": "C1 - The Legend",
  "./sound/deltarune/Chapter12/Thrash Machine.ogg": "C1 - Thrash Machine",
  "./sound/deltarune/Chapter12/Until Next Time.ogg": "C2 - Until Next Time",
  "./sound/deltarune/Chapter12/Vs. Lancer.ogg": "C1 - Vs. Lancer",
  "./sound/deltarune/Chapter12/Vs. Susie.ogg": "C1 - Vs. Susie",
  "./sound/deltarune/Chapter12/WELCOME TO THE CITY (Alt).ogg":
    "C2 - WELCOME TO THE CITY (Alt)",
  "./sound/deltarune/Chapter12/WELCOME TO THE CITY.ogg":
    "C2 - WELCOME TO THE CITY",
  "./sound/deltarune/Chapter12/You Can Always Come Home.ogg":
    "C1 - You Can Always Come Home",
};

var deltarune_chater34_songs = {
  "./sound/deltarune/Chapter34/01 Flashback (Excerpt).ogg":
    "C3 - Flashback (Excerpt)",
  "./sound/deltarune/Chapter34/02 Feature Presentation.ogg":
    "C3 - Feature Presentation",
  "./sound/deltarune/Chapter34/03 And Now For Today’s Sponsors…!.ogg":
    "C3 - And Now For Today’s Sponsors…!",
  "./sound/deltarune/Chapter34/04 MIKE, the BOARD, please!.ogg":
    "C3 - MIKE, the BOARD, please!",
  "./sound/deltarune/Chapter34/05 Sandy Board.ogg": "C3 - Sandy Board",
  "./sound/deltarune/Chapter34/06 Adventure Board.ogg": "C3 - Adventure Board",
  "./sound/deltarune/Chapter34/07 Query .ogg": "C3 - Query ",
  "./sound/deltarune/Chapter34/08 Quiz!.ogg": "C3 - Quiz!",
  "./sound/deltarune/Chapter34/09 Dig! Dig! To The Center of the Earth!.ogg":
    "C3 - Dig! Dig! To The Center of the Earth!",
  "./sound/deltarune/Chapter34/10 Pushing Buddies.ogg": "C3 - Pushing Buddies",
  "./sound/deltarune/Chapter34/11 Ruder Buster.ogg": "C3 - Ruder Buster",
  "./sound/deltarune/Chapter34/12 Physical Challenge.ogg":
    "C3 - Physical Challenge",
  "./sound/deltarune/Chapter34/13 Board Clear!.ogg": "C3 - Board Clear!",
  "./sound/deltarune/Chapter34/14 Welcome to the Green Room.ogg":
    "C3 - Welcome to the Green Room",
  "./sound/deltarune/Chapter34/15 Vapor Buster.ogg": "C3 - Vapor Buster",
  "./sound/deltarune/Chapter34/16 Paradise, Paradise.ogg":
    "C3 - Paradise, Paradise",
  "./sound/deltarune/Chapter34/17 Raft Ride.ogg": "C3 - Raft Ride",
  "./sound/deltarune/Chapter34/18 SOUTH OF THE BORDER!!.ogg":
    "C3 - SOUTH OF THE BORDER!!",
  "./sound/deltarune/Chapter34/19 Sound Check.ogg": "C3 - Sound Check",
  "./sound/deltarune/Chapter34/20 Raise Up Your Bat.ogg":
    "C3 - Raise Up Your Bat",
  "./sound/deltarune/Chapter34/21 KING OF ROLYPOLY.ogg":
    "C3 - KING OF ROLYPOLY",
  "./sound/deltarune/Chapter34/22 Glowing Snow.ogg": "C3 - Glowing Snow",
  "./sound/deltarune/Chapter34/23 Big City Board.ogg": "C3 - Big City Board",
  "./sound/deltarune/Chapter34/24 Doom Board.ogg": "C3 - Doom Board",
  "./sound/deltarune/Chapter34/25 Metaphysical Challenge.ogg":
    "C3 - Metaphysical Challenge",
  "./sound/deltarune/Chapter34/26 TV WORLD.ogg": "C3 - TV WORLD",
  "./sound/deltarune/Chapter34/27 It’s TV Time!.ogg": "C3 - It’s TV Time!",
  "./sound/deltarune/Chapter34/28 Hall of Fame.ogg": "C3 - Hall of Fame",
  "./sound/deltarune/Chapter34/29 Breath.ogg": "C3 - Breath",
  "./sound/deltarune/Chapter34/30 Black Knife.ogg": "C3 - Black Knife",
  "./sound/deltarune/Chapter34/32 Dump.ogg": "C3 - Dump",
  "./sound/deltarune/Chapter34/33 SWORD.ogg": "C3 - SWORD",
  "./sound/deltarune/Chapter34/34 NORTHERNLIGHT.ogg": "C3 - NORTHERNLIGHT",
  "./sound/deltarune/Chapter34/35 GLACEIR.ogg": "C3 - GLACEIR",
  "./sound/deltarune/Chapter34/36 BIT ROOTS.ogg": "C3 - BIT ROOTS",
  "./sound/deltarune/Chapter34/37 ERAM.ogg": "C3 - ERAM",
  "./sound/deltarune/Chapter34/38 BURNING EYES.ogg": "C4 - BURNING EYES",
  "./sound/deltarune/Chapter34/39 Old wooden rafters.ogg":
    "C4 - Old wooden rafters",
  "./sound/deltarune/Chapter34/40 Hymn.ogg": "C4 - Hymn",
  "./sound/deltarune/Chapter34/41 Another day in hometown.ogg":
    "C4 - Another day in hometown",
  "./sound/deltarune/Chapter34/42 Friends.ogg": "C4 - Friends",
  "./sound/deltarune/Chapter34/43 Castle Funk.ogg": "C4 - Castle Funk",
  "./sound/deltarune/Chapter34/44 Knock You Down!! (Rhythm Ver.).ogg":
    "C4 - Knock You Down!! (Rhythm Ver.)",
  "./sound/deltarune/Chapter34/45 Gingerbread House.ogg":
    "C4 - Gingerbread House",
  "./sound/deltarune/Chapter34/46 The distance between two.ogg":
    "C4 - The distance between two",
  "./sound/deltarune/Chapter34/47 C.ogg": "C4 - C",
  "./sound/deltarune/Chapter34/48 ATRIUM.ogg": "C4 - ATRIUM",
  "./sound/deltarune/Chapter34/49 Dark Sanctuary.ogg": "C4 - Dark Sanctuary",
  "./sound/deltarune/Chapter34/50 From Now On (Battle 2).ogg":
    "C4 - From Now On (Battle 2)",
  "./sound/deltarune/Chapter34/51 Gyaa Ha ha!.ogg": "C4 - Gyaa Ha ha!",
  "./sound/deltarune/Chapter34/52 Fireplace.ogg": "C4 - Fireplace",
  "./sound/deltarune/Chapter34/53 A DARK ZONE.ogg": "C4 - A DARK ZONE",
  "./sound/deltarune/Chapter34/54 Mysterious Ringing.ogg":
    "C4 - Mysterious Ringing",
  "./sound/deltarune/Chapter34/55 Ever Higher.ogg": "C4 - Ever Higher",
  "./sound/deltarune/Chapter34/56 Wise words.ogg": "C4 - Wise words",
  "./sound/deltarune/Chapter34/57 Piano that may not be played that well.ogg":
    "C4 - Piano that may not be played that well",
  "./sound/deltarune/Chapter34/58 Hammer of Justice.ogg":
    "C4 - Hammer of Justice",
  "./sound/deltarune/Chapter34/59 12am.ogg": "C4 - 12am",
  "./sound/deltarune/Chapter34/60 The Second Sanctuary.ogg":
    "C4 - The Second Sanctuary",
  "./sound/deltarune/Chapter34/61 Ripple.ogg": "C4 - Ripple",
  "./sound/deltarune/Chapter34/62 13am.ogg": "C4 - 13am",
  "./sound/deltarune/Chapter34/63 The Third Sanctuary.ogg":
    "C4 - The Third Sanctuary",
  "./sound/deltarune/Chapter34/64 Dark Place.ogg": "C4 - Dark Place",
  "./sound/deltarune/Chapter34/65 Heavy Footsteps.ogg": "C4 - Heavy Footsteps",
  "./sound/deltarune/Chapter34/66 Crumbling Tower.ogg": "C4 - Crumbling Tower",
  "./sound/deltarune/Chapter34/67 SPAWN.ogg": "C4 - SPAWN",
  "./sound/deltarune/Chapter34/68 GUARDIAN.ogg": "C4 - GUARDIAN",
  "./sound/deltarune/Chapter34/69 Need a hand! .ogg": "C4 - Need a hand! ",
  "./sound/deltarune/Chapter34/70 The place where it rained.ogg":
    "C4 - The place where it rained",
  "./sound/deltarune/Chapter34/71 The Ol’ Jitterbug.ogg":
    "C4 - The Ol’ Jitterbug",
  "./sound/deltarune/Chapter34/72 Neverending Night.ogg":
    "C4 - Neverending Night",
  "./sound/deltarune/Chapter34/73 The LEGEND… .ogg": "C4 - The LEGEND… ",
  "./sound/deltarune/Chapter34/74 With Hope Crossed On Our Hearts.ogg":
    "C4 - With Hope Crossed On Our Hearts",
  "./sound/deltarune/Chapter34/75 Volume Adjustment.ogg":
    "C4 - Volume Adjustment",
  "./sound/deltarune/Chapter34/76 Catswing.ogg": "C4 - Catswing",
  "./sound/deltarune/Chapter34/77 Air Waves.ogg": "C4 - Air Waves",
  "./sound/deltarune/Chapter34/78 Concert for you.ogg": "C4 - Concert for you",
};

var deltarune_chapter_5_songs = {
  "./sound/deltarune/Chapter5/Garden of Hopes and Dreams.ogg":
    "C5 - Garden of Hopes and Dreams",
  "./sound/deltarune/Chapter5/Scarlet Forest (From -DELTARUNE Piano Collections Vol. 1-) (Credits Version).ogg":
    "C5 - Scarlet Forest (From -DELTARUNE Piano Collections Vol. 1-) (Credits Version)",
  "./sound/deltarune/Chapter5/Chapter 5 Logo.ogg": "C5 - Chapter 5 Logo",
  "./sound/deltarune/Chapter5/Inappropriate Recycling.ogg":
    "C5 - Inappropriate Recycling",
  "./sound/deltarune/Chapter5/Pirate Dojo.ogg": "C5 - Pirate Dojo",
  "./sound/deltarune/Chapter5/4rd Sanctuary.ogg": "C5 - 4rd Sanctuary",
  "./sound/deltarune/Chapter5/Festival.ogg": "C5 - Festival",
  "./sound/deltarune/Chapter5/Catfession...-.ogg": "C5 - Catfession...-",
  "./sound/deltarune/Chapter5/Bratfession...-.ogg": "C5 - Bratfession...-",
  "./sound/deltarune/Chapter5/I guess I'm in love feat. Itoki Hana.ogg":
    "C5 - I guess I'm in love",
  "./sound/deltarune/Chapter5/Weirder Birds.ogg": "C5 - Weirder Birds",
  "./sound/deltarune/Chapter5/Your Dad's Best Friend.ogg":
    "C5 - Your Dad's Best Friend",
  "./sound/deltarune/Chapter5/Rakuichi Buster feat. Rakuichi.ogg":
    "C5 - Rakuichi Buster",
  "./sound/deltarune/Chapter5/The Diner Song of Best Friends.ogg":
    "C5 - The Diner Song of Best Friends",
  "./sound/deltarune/Chapter5/Ride the Board.ogg": "C5 - Ride the Board",
  "./sound/deltarune/Chapter5/Quiet Glade.ogg": "C5 - Quiet Glade",
  "./sound/deltarune/Chapter5/Who might you be-.ogg": "C5 - Who might you be-",
  "./sound/deltarune/Chapter5/Petal Dance.ogg": "C5 - Petal Dance",
  "./sound/deltarune/Chapter5/Flying Feather.ogg": "C5 - Flying Feather",
  "./sound/deltarune/Chapter5/Sunset of Seven Suns.ogg":
    "C5 - Sunset of Seven Suns",
  "./sound/deltarune/Chapter5/Shop 3.ogg": "C5 - Shop 3",
  "./sound/deltarune/Chapter5/Violet Tactics.ogg": "C5 - Violet Tactics",
  "./sound/deltarune/Chapter5/Flower King.ogg": "C5 - Flower King",
  "./sound/deltarune/Chapter5/Flower Foyer.ogg": "C5 - Flower Foyer",
  "./sound/deltarune/Chapter5/Flower Castle.ogg": "C5 - Flower Castle",
  "./sound/deltarune/Chapter5/Thousand Cafe Zukan.ogg":
    "C5 - Thousand Cafe Zukan",
  "./sound/deltarune/Chapter5/I'm Telling!.ogg": "C5 - I'm Telling!",
  "./sound/deltarune/Chapter5/Stop, Criminell!.ogg": "C5 - Stop, Criminell!",
  "./sound/deltarune/Chapter5/Loving Steps.ogg": "C5 - Loving Steps",
  "./sound/deltarune/Chapter5/Running Water 3.ogg": "C5 - Running Water 3",
  "./sound/deltarune/Chapter5/Beautiful Bathtime.ogg":
    "C5 - Beautiful Bathtime",
  "./sound/deltarune/Chapter5/Pink.ogg": "C5 - Pink",
  "./sound/deltarune/Chapter5/Cutie Mew Mew Magic feat. Camellia.ogg":
    "C5 - Cutie Mew Mew Magic",
  "./sound/deltarune/Chapter5/Running Sky.ogg": "C5 - Running Sky",
  "./sound/deltarune/Chapter5/Flower Man feat. Camellia.ogg": "C5 - Flower Man",
  "./sound/deltarune/Chapter5/That Day.ogg": "C5 - That Day",
  "./sound/deltarune/Chapter5/Dreamwatchers.ogg": "C5 - Dreamwatchers",
  "./sound/deltarune/Chapter5/Weak Flowers.ogg": "C5 - Weak Flowers",
  "./sound/deltarune/Chapter5/Walking Home.ogg": "C5 - Walking Home",
  "./sound/deltarune/Chapter5/Goodnight, Sweet Prince.ogg":
    "C5 - Goodnight, Sweet Prince",
};

var all_songs = shuffleObject(undertale_songs);

var streak = Number(localStorage.getItem("streak")) || 0;
stat_streak.innerText = "Streak: " + streak;

var sanses_images = [
  "img/sans/Happy.png",
  "img/sans/Normal.png",
  "img/sans/SlightlyConcerned.png",
  "img/sans/SlightlyConcernedLookingLeft.png",
  "img/sans/Concerned.png",
  "img/sans/ConcernedMore.png",
  "img/sans/ConcernedMoreLookingLeft.png",
  "img/sans/MoreConcernedMoreLookingLeft.png",
  "img/sans/MoreMoreConcernedMoreLookingLeft.png",
  "img/sans/MoreMoreMoreConcernedMoreLookingLeft.png",
];

var dailyStreak = -1;

var currentSongId = 0;
function GenerateSongs() {
  currentSongId = 0;
  songs.innerHTML = "";
  for (var i = 0; i < Object.keys(all_songs).length; i++) {
    var song = document.createElement("option");
    song.value = Object.values(all_songs)[i];
    song.setAttribute("src", Object.keys(all_songs)[i]);
    songs.appendChild(song);
  }
}

volume_slider.addEventListener("change", () => {
  play_audio.volume = volume_slider.value;
});

function shuffleObject(obj) {
  const entries = Object.entries(obj);

  for (let i = entries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }

  return Object.fromEntries(entries);
}

function Reselect() {
  all_songs = {};

  if (useUndertale) Object.assign(all_songs, undertale_songs);
  if (useDeltarune12) Object.assign(all_songs, deltarune_chapter12_songs);
  if (useDeltarune34) Object.assign(all_songs, deltarune_chater34_songs);
  if (useDeltarune5) Object.assign(all_songs, deltarune_chapter_5_songs);

  all_songs = shuffleObject(all_songs);
  GenerateSongs();
  RegenerateSong();
}

var hasBeatenPapyrus = false;
var currentSansImage = 0;
function UpdateSans() {
  if (streak % 2 == 0) currentSansImage += 1;

  if (currentSansImage > sanses_images.length) {
    sanses.src = sanses_images[0];
    SansWriteSentence("Congrats, you beat my brother.", (sound = false));
    hasBeatenPapyrus = true;
    return;
  }
  sanses.src = sanses_images[currentSansImage];
  switch (streak) {
    case 4:
      if (hasBeatenPapyrus) return;
      currentDialouge = 99;
      SansWriteSentence("i know that song.", (sound = false));
      break;
    case 8:
      if (hasBeatenPapyrus) return;
      SansWriteSentence("you're too good...", (sound = false));
      break;
    case 14:
      if (hasBeatenPapyrus) return;
      SansWriteSentence("bro stop", (sound = false));
      break;
    case 16:
      if (hasBeatenPapyrus) return;
      SansWriteSentence(
        "could you please not beat my brother?",
        (sound = false),
      );
      break;
    case 20:
      SansWriteSentence("Okay you beat my score, congrats.", (sound = false));
      sanses.src = sanses_images[0];
      break;
  }
}

function HideAllMarkers() {
  document.getElementById("progress-time-1").setAttribute("hidden", true);
  document
    .getElementById("progress-marker-1")
    .classList.remove("marker-highlighted");

  document.getElementById("progress-time-2").setAttribute("hidden", true);
  document
    .getElementById("progress-marker-2")
    .classList.remove("marker-highlighted");

  document.getElementById("progress-time-3").setAttribute("hidden", true);
  document
    .getElementById("progress-marker-3")
    .classList.remove("marker-highlighted");

  document.getElementById("progress-time-4").setAttribute("hidden", true);
  document
    .getElementById("progress-marker-4")
    .classList.remove("marker-highlighted");

  document.getElementById("progress-time-5").setAttribute("hidden", true);
  document
    .getElementById("progress-marker-5")
    .classList.remove("marker-highlighted");
}

function UpdateDailyStreak(check = false) {
  dailyStreak = Number(localStorage.getItem("DailyStreak")) || 0;
  var lastDay = localStorage.getItem("lastDay");
  var looseDailyStreak = localStorage.getItem("looseDailyStreak") === "true";

  var today = new Date();
  var currentDay = today.toISOString().split("T")[0];

  if (!check && lastDay !== currentDay) {
    if (dailyStreak == 0) {
      dailyStreak = 1;
    } else {
      var lastDate = new Date(lastDay);
      var currentDate = new Date(currentDay);

      var difference = (currentDate - lastDate) / (1000 * 60 * 60 * 24);

      if (looseDailyStreak && difference > 1) dailyStreak = 1;
      else dailyStreak++;
    }
    localStorage.setItem("lastDay", currentDay);
    localStorage.setItem("DailyStreak", dailyStreak);
  }
  document.getElementById("daily-streak").innerText =
    "Daily Streak: " + dailyStreak;
}

var firstGuess = true;

var points = Number(localStorage.getItem("points")) || 0;
document.getElementById("points").innerText = "Points: " + points;

function InitDailySettings() {
  var select = document.getElementById("daily-streak-selection");
  if (!select) return;

  var loose = localStorage.getItem("looseDailyStreak") === "true";
  var resetFail = localStorage.getItem("ResetOnFail") === "true";
  var reset100 = localStorage.getItem("ResetOn100") === "true";

  if (reset100) select.value = "4";
  else if (resetFail) select.value = "3";
  else if (loose) select.value = "2";
  else select.value = "1";
}

document
  .getElementById("daily-streak-selection")
  .addEventListener("change", () => {
    var ele = document.getElementById("daily-streak-selection");
    switch (ele.value) {
      case "1":
        localStorage.setItem("looseDailyStreak", "false");
        localStorage.setItem("ResetOn100", "false");
        localStorage.setItem("ResetOnFail", "false");
        break;
      case "2":
        localStorage.setItem("looseDailyStreak", "true");
        localStorage.setItem("ResetOn100", "false");
        localStorage.setItem("ResetOnFail", "false");
        break;
      case "3":
        localStorage.setItem("looseDailyStreak", "true");
        localStorage.setItem("ResetOnFail", "true");
        localStorage.setItem("ResetOn100", "false");
        break;
      case "4":
        localStorage.setItem("looseDailyStreak", "true");
        localStorage.setItem("ResetOnFail", "true");
        localStorage.setItem("ResetOn100", "true");
        break;
    }
  });

function Guess() {
  if (time > 15000) return;
  var UserGuess = document.getElementById("song_name").value;
  if (UserGuess.toLowerCase() == currentSong.toLowerCase()) {
    next_song.style = "display:flex";
    info.innerHTML = "Correct Guess!";
    if (time < 500) points += 5;
    else if (time < 2000) points += 3;
    else if (time < 8000) points += 2;
    else if (time < 15000) points += 1;
    time = 1000000;
    HideAllMarkers();
    UpdateDailyStreak();
    streak += 1;
    localStorage.setItem("streak", streak);
    stat_streak.innerText = "Streak: " + streak;
    firstGuess = false;
    if (currentSong == "UT - MEGALOVANIA") {
      sanses.src = sanses_images[4];
      SansWriteSentence("I don't like this song", false);
    }
    if (currentSong == "UT - sans.") {
      SansWriteSentence("I like this song", false);
      sanses.src = sanses_images[0];
    }
    UpdateSans();
    time = 15000;
    PlaySong();
  } else {
    if (submit_button.lastChild.nodeValue.includes("SKIP")) {
      info.innerHTML = "Skipped";
      AddToHistory("Skipped");
    } else {
      info.innerHTML = "Wrong Guess";
      AddToHistory(song_name.value);
    }
    switch (time) {
      case 100:
        if (firstGuess && localStorage.getItem("ResetOn100") == "true") {
          localStorage.setItem("DailyStreak", 0);
          document.getElementById("daily-streak").innerText =
            "Daily Streak: " + dailyStreak;
        }
        document.getElementById("progress-time-2").removeAttribute("hidden");
        document.getElementById("progress-time-1").setAttribute("hidden", true);
        document
          .getElementById("progress-marker-1")
          .classList.remove("marker-highlighted");
        document
          .getElementById("progress-marker-2")
          .classList.add("marker-highlighted");
        time = 500;
        break;
      case 500:
        document.getElementById("progress-time-3").removeAttribute("hidden");
        document.getElementById("progress-time-2").setAttribute("hidden", true);
        document
          .getElementById("progress-marker-2")
          .classList.remove("marker-highlighted");
        document
          .getElementById("progress-marker-3")
          .classList.add("marker-highlighted");
        time = 2000;
        break;
      case 2000:
        document.getElementById("progress-time-4").removeAttribute("hidden");
        document.getElementById("progress-time-3").setAttribute("hidden", true);
        document
          .getElementById("progress-marker-3")
          .classList.remove("marker-highlighted");
        document
          .getElementById("progress-marker-4")
          .classList.add("marker-highlighted");
        time = 8000;
        break;
      case 8000:
        document.getElementById("progress-time-5").removeAttribute("hidden");
        document.getElementById("progress-time-4").setAttribute("hidden", true);
        document
          .getElementById("progress-marker-4")
          .classList.remove("marker-highlighted");
        document
          .getElementById("progress-marker-5")
          .classList.add("marker-highlighted");
        time = 15000;
        break;
      case 15000:
        document.getElementById("progress-time-5").setAttribute("hidden", true);
        document
          .getElementById("progress-marker-5")
          .classList.remove("marker-highlighted");
        streak = 0;
        localStorage.setItem("streak", streak);
        currentSansImage = 0;
        UpdateSans();
        stat_streak.innerText = "Streak: 0";
        info.innerHTML = currentSong;
        points -= Math.floor(points / 2);
        time = 1000000;
        next_song.style = "display:flex";
        if (firstGuess && localStorage.getItem("ResetOnFail") == "true") {
          localStorage.setItem("DailyStreak", 0);
          document.getElementById("daily-streak").innerText =
            "Daily Streak: " + dailyStreak;
        }
        firstGuess = false;
        break;
    }
  }
  document.getElementById("points").innerText = "Points: " + points;
  localStorage.setItem("points", points);
  song_name.value = "";
  submit_button.lastChild.nodeValue = "SKIP";
}

var sansCharTimeout = null;

function SansWriteSentence(text, sound = true) {
  sans_lines.innerHTML = "";

  clearTimeout(sansCharTimeout);
  SansWriteChar(0, text, undefined, sound);
}
SansWriteSentence("Hey. I've got some news for ya.");
function SansWriteChar(index, text, time = 80, sound = true) {
  try {
    if (sound && !sansesActive) {
      let voiceClone = sansVoice.cloneNode();
      voiceClone.volume = 0.5;
      voiceClone.play().catch(() => {});
    }
  } catch {}
  if (index >= text.length) {
    return;
  }
  sans_lines.innerHTML += text.charAt(index);
  sansCharTimeout = setTimeout(
    () => SansWriteChar(index + 1, text, time, sound),
    time,
  );
}

var voice_sans_appear = new Audio("sound/voice_sans_appear.wav");
var voice_sans_disappear = new Audio("sound/voice_sans_disappear.wav");
voice_sans_appear.load();
voice_sans_disappear.load();

var sansesActive = localStorage.getItem("sanses") === "true";
InitSans();

function InitSans(voice = false) {
  var toggle_sanses = document.getElementById("toggle-sanses");
  toggle_sanses.innerHTML = "";
  var toggle_star = document.createElement("span");
  toggle_star.innerHTML = "*";
  toggle_star.classList.add("toggle-star");
  if (!sansesActive) {
    console.log("showen");
    var disable_sans = document.createElement("span");
    disable_sans.classList.add("song-toggle");
    disable_sans.style = "font-size: small";
    disable_sans.innerText = "Disable Sanses";
    disable_sans.prepend(toggle_star);
    toggle_sanses.appendChild(disable_sans);
    document.getElementById("sans-box").removeAttribute("hidden");

    if (voice) {
      let voiceClone = voice_sans_appear.cloneNode();
      voiceClone.play();
    }
  } else {
    console.log("hidden");
    var enable_sans = document.createElement("span");
    enable_sans.classList.add("song-toggle");
    enable_sans.classList.add("active");
    enable_sans.style = "font-size: small";
    enable_sans.innerText = "Disable Sanses";
    enable_sans.prepend(toggle_star);
    toggle_sanses.appendChild(enable_sans);
    document.getElementById("sans-box").setAttribute("hidden", true);

    if (voice) {
      let voiceClone = voice_sans_disappear.cloneNode();
      voiceClone.play();
    }
  }
}

function ToggleSanses() {
  sansesActive = !sansesActive;
  InitSans(true);
  localStorage.setItem("sanses", sansesActive);
}

var sansVoice = new Audio("sound/voice_sans.mp3");
sansVoice.preload = "auto";
sansVoice.load();

var currentDialouge = 0;
function AdvanceSansStory() {
  switch (currentDialouge) {
    case 0:
      SansWriteSentence("So its simple");
      currentDialouge++;
      break;
    case 1:
      SansWriteSentence("I've found some random songs laying on the ground.");
      currentDialouge++;
      break;
    case 2:
      SansWriteSentence("And i've came up with a cool idea.");
      currentDialouge++;
      break;
    case 3:
      SansWriteSentence("I'll show you a small part of the song");
      currentDialouge++;
      break;
    case 4:
      SansWriteSentence("And you have to guess it.");
      currentDialouge++;
      break;
    case 5:
      SansWriteSentence("It's that easy.");
      currentDialouge++;
      break;
    case 6:
      SansWriteSentence(
        "Try building up a streak and beating my brother (his streak is 19)",
      );
      currentDialouge++;
      break;
    case 7:
      SansWriteSentence("( btw points are kindof useless )");
      currentDialouge++;
      break;
    case 90:
      SansWriteSentence("You listened trough every song i found.");
      sanses.src = sanses_images[0];
      currentDialouge++;
      break;
    case 91:
      SansWriteSentence("Congrats!");
      currentDialouge++;
      break;
  }
}

function AddToHistory(text, golden = false) {
  var history = document.getElementById("guess-history");

  var guess_entry = document.createElement("div");
  guess_entry.setAttribute("class", "guess-entry current");
  history.appendChild(guess_entry);

  var astrix = document.createElement("span");
  astrix.setAttribute("class", "guess-star");
  astrix.innerText = "*";
  guess_entry.appendChild(astrix);

  var content = document.createElement("span");
  content.innerText = " " + text;
  guess_entry.appendChild(content);
}

function OnInputChange() {
  if (song_name.value.replaceAll(/\s/g, "") == "")
    submit_button.lastChild.nodeValue = "SKIP";
  else submit_button.lastChild.nodeValue = "SUBMIT";
}

function RegenerateSong() {
  time = 100;
  progress.value = 0;
  next_song.style = "display:none";
  info.innerHTML = "";
  var keys = Object.keys(all_songs);
  currentSong = Object.values(all_songs)[currentSongId];
  play_audio_source.src = keys[currentSongId];
  play_audio.load();

  document.getElementById("guess-history").innerHTML = "";
  PlaySong();

  currentSongId++;
  if (currentSongId - 1 > Object.keys(all_songs).length) {
    currentSongId = 0;
    currentDialouge = 90;
    SansWriteSentence("Wow you got it.");
    return;
  }

  document.getElementById("progress-time-1").removeAttribute("hidden");
  document
    .getElementById("progress-marker-1")
    .classList.add("marker-highlighted");
}

var progressInterval = null;
function PlaySong() {
  clearInterval(progressInterval);
  play_audio.currentTime = 0;

  var playPromise = play_audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        var startTime = performance.now();

        progressInterval = setInterval(function () {
          var elapsed = performance.now() - startTime;

          progress.value = Math.min(elapsed, time);

          if (elapsed >= time) {
            clearInterval(progressInterval);

            play_audio.pause();

            play_audio.currentTime = 0;

            progress.value = time;
          }
        }, 10);
      })
      .catch((error) => {
        if (!error.includes("NotAllowedError")) alert("Audio Error: " + error);
      });
  }
}

function ToggleSongs(song) {
  if (song == "undertale") {
    useUndertale = !useUndertale;
    if (useUndertale) {
      document.getElementById("undertale-toggle").classList.add("active");
    } else {
      document.getElementById("undertale-toggle").classList.remove("active");
    }
  } else if (song == "deltarune12") {
    useDeltarune12 = !useDeltarune12;
    if (useDeltarune12) {
      document.getElementById("deltarune12-toggle").classList.add("active");
    } else {
      document.getElementById("deltarune12-toggle").classList.remove("active");
    }
  } else if (song == "deltarune34") {
    useDeltarune34 = !useDeltarune34;
    if (useDeltarune34) {
      document.getElementById("deltarune34-toggle").classList.add("active");
    } else {
      document.getElementById("deltarune34-toggle").classList.remove("active");
    }
  } else if (song == "deltarune5") {
    useDeltarune5 = !useDeltarune5;
    if (useDeltarune5) {
      document.getElementById("deltarune5-toggle").classList.add("active");
    } else {
      document.getElementById("deltarune5-toggle").classList.remove("active");
    }
  }

  Reselect();
}

GenerateSongs();
RegenerateSong();
UpdateDailyStreak(true);
InitDailySettings();
