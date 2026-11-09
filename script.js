/* =========================================================
   ROLL & REVEAL
   SUPABASE CONFIGURATION
========================================================= */

const SUPABASE_URL = "https://hwnpfaojnvhgmkqojebs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_rDM3DYfNfbIxpnDH2_qt6w_x6cZH4_V";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);


/* =========================================================
   GAME SETTINGS
========================================================= */

const GAME_LIMIT = 20;
const HISTORY_LIMIT = 10;

const PLAYERS = ["Sudhan", "Raksha"];

const CATEGORIES = [
  "All Categories",
  "Funny & Crazy",
  "This or That",
  "Imagination & What If",
  "Childhood & Memories",
  "Personality & Quirky Habits",
  "Friendship & Connection",
  "Cute & Light",
  "Silly Mini Challenges"
];


/* =========================================================
   QUESTION BANK
   135 ORIGINAL QUESTIONS
========================================================= */

const questions = [

  /* =========================
     FUNNY & CRAZY - 25
  ========================== */

  {
    id: "funny-1",
    category: "Funny & Crazy",
    text: "If animals could talk, which animal would be the rudest?"
  },
  {
    id: "funny-2",
    category: "Funny & Crazy",
    text: "If you became invisible for one day, what is the first silly thing you would do?"
  },
  {
    id: "funny-3",
    category: "Funny & Crazy",
    text: "If your life had a background laugh track, when would it play the loudest?"
  },
  {
    id: "funny-4",
    category: "Funny & Crazy",
    text: "What is the most ridiculous excuse you have ever made?"
  },
  {
    id: "funny-5",
    category: "Funny & Crazy",
    text: "If you were arrested for something completely silly, what would your friends assume you did?"
  },
  {
    id: "funny-6",
    category: "Funny & Crazy",
    text: "If you had to replace your hands with random household objects, what would you choose?"
  },
  {
    id: "funny-7",
    category: "Funny & Crazy",
    text: "What would be the worst possible name for a restaurant?"
  },
  {
    id: "funny-8",
    category: "Funny & Crazy",
    text: "If you had to communicate only through movie titles for a day, which title would you use most?"
  },
  {
    id: "funny-9",
    category: "Funny & Crazy",
    text: "What completely useless superpower would you secretly enjoy having?"
  },
  {
    id: "funny-10",
    category: "Funny & Crazy",
    text: "If your pet could give a speech about you, what embarrassing thing would it reveal?"
  },
  {
    id: "funny-11",
    category: "Funny & Crazy",
    text: "What would happen if you suddenly became famous for something extremely random?"
  },
  {
    id: "funny-12",
    category: "Funny & Crazy",
    text: "If your laugh had a physical shape, what would it look like?"
  },
  {
    id: "funny-13",
    category: "Funny & Crazy",
    text: "What would be the strangest thing to hear from your alarm clock every morning?"
  },
  {
    id: "funny-14",
    category: "Funny & Crazy",
    text: "If vegetables could take revenge, which vegetable would be the most dangerous?"
  },
  {
    id: "funny-15",
    category: "Funny & Crazy",
    text: "If you had to wear one ridiculous costume forever, what would you choose?"
  },
  {
    id: "funny-16",
    category: "Funny & Crazy",
    text: "What is the most dramatic thing you could do while ordering food?"
  },
  {
    id: "funny-17",
    category: "Funny & Crazy",
    text: "If your phone could complain about you, what would its biggest complaint be?"
  },
  {
    id: "funny-18",
    category: "Funny & Crazy",
    text: "What would be the funniest possible title for your autobiography?"
  },
  {
    id: "funny-19",
    category: "Funny & Crazy",
    text: "If you had to fight one hundred tiny versions of yourself, what strategy would you use?"
  },
  {
    id: "funny-20",
    category: "Funny & Crazy",
    text: "What would be the worst thing to accidentally say during a serious meeting?"
  },
  {
    id: "funny-21",
    category: "Funny & Crazy",
    text: "If your life became a low-budget comedy, what would the first scene look like?"
  },
  {
    id: "funny-22",
    category: "Funny & Crazy",
    text: "What is something completely normal that becomes funny when you think about it too much?"
  },
  {
    id: "funny-23",
    category: "Funny & Crazy",
    text: "If you could make one everyday sound extremely dramatic, which sound would you choose?"
  },
  {
    id: "funny-24",
    category: "Funny & Crazy",
    text: "What would your personal warning label say?"
  },
  {
    id: "funny-25",
    category: "Funny & Crazy",
    text: "If you had to become famous for a completely useless skill, what would it be?"
  },


  /* =========================
     THIS OR THAT - 20
  ========================== */

  {
    id: "this-1",
    category: "This or That",
    text: "Unlimited pizza or unlimited ice cream?"
  },
  {
    id: "this-2",
    category: "This or That",
    text: "Beach sunset or mountain sunrise?"
  },
  {
    id: "this-3",
    category: "This or That",
    text: "Ability to fly or ability to teleport?"
  },
  {
    id: "this-4",
    category: "This or That",
    text: "Never sleep or never eat?"
  },
  {
    id: "this-5",
    category: "This or That",
    text: "Funny person or mysterious person?"
  },
  {
    id: "this-6",
    category: "This or That",
    text: "Morning adventure or midnight adventure?"
  },
  {
    id: "this-7",
    category: "This or That",
    text: "Always be ten minutes early or always be ten minutes late?"
  },
  {
    id: "this-8",
    category: "This or That",
    text: "Read minds or predict the future?"
  },
  {
    id: "this-9",
    category: "This or That",
    text: "City lights or quiet countryside?"
  },
  {
    id: "this-10",
    category: "This or That",
    text: "Spontaneous plan or perfectly planned day?"
  },
  {
    id: "this-11",
    category: "This or That",
    text: "Coffee forever or tea forever?"
  },
  {
    id: "this-12",
    category: "This or That",
    text: "Live without music or live without movies?"
  },
  {
    id: "this-13",
    category: "This or That",
    text: "Be incredibly lucky or incredibly talented?"
  },
  {
    id: "this-14",
    category: "This or That",
    text: "Have a pause button or a rewind button for life?"
  },
  {
    id: "this-15",
    category: "This or That",
    text: "Always know the right answer or always know the right joke?"
  },
  {
    id: "this-16",
    category: "This or That",
    text: "Road trip or train journey?"
  },
  {
    id: "this-17",
    category: "This or That",
    text: "Talk to animals or understand every language?"
  },
  {
    id: "this-18",
    category: "This or That",
    text: "Have perfect memory or perfect sense of direction?"
  },
  {
    id: "this-19",
    category: "This or That",
    text: "One huge party or one quiet evening with great conversation?"
  },
  {
    id: "this-20",
    category: "This or That",
    text: "Be the funniest person in every room or the calmest person in every room?"
  },


  /* =========================
     IMAGINATION - 20
  ========================== */

  {
    id: "imagination-1",
    category: "Imagination & What If",
    text: "If you could live inside a movie for one week, which movie would you choose?"
  },
  {
    id: "imagination-2",
    category: "Imagination & What If",
    text: "If you won a lottery tomorrow, what is the most unexpected thing you would buy?"
  },
  {
    id: "imagination-3",
    category: "Imagination & What If",
    text: "If you could travel anywhere right now, where would you disappear to?"
  },
  {
    id: "imagination-4",
    category: "Imagination & What If",
    text: "If you could swap lives with anyone for twenty-four hours, who would it be?"
  },
  {
    id: "imagination-5",
    category: "Imagination & What If",
    text: "If you could instantly master one skill, what would you choose?"
  },
  {
    id: "imagination-6",
    category: "Imagination & What If",
    text: "If you could design your dream room with no budget limit, what is one unusual feature it must have?"
  },
  {
    id: "imagination-7",
    category: "Imagination & What If",
    text: "If you could create a brand-new holiday, what would people celebrate?"
  },
  {
    id: "imagination-8",
    category: "Imagination & What If",
    text: "If you could spend one week in any fictional world, where would you go?"
  },
  {
    id: "imagination-9",
    category: "Imagination & What If",
    text: "If you could have dinner with any three fictional characters, who would you invite?"
  },
  {
    id: "imagination-10",
    category: "Imagination & What If",
    text: "If you could rename yourself for one day, what name would you choose?"
  },
  {
    id: "imagination-11",
    category: "Imagination & What If",
    text: "If you woke up tomorrow with a completely different voice, whose voice would you want?"
  },
  {
    id: "imagination-12",
    category: "Imagination & What If",
    text: "If you could make one boring daily task completely disappear, what would it be?"
  },
  {
    id: "imagination-13",
    category: "Imagination & What If",
    text: "If your life had a theme song that played whenever you entered a room, what style would it be?"
  },
  {
    id: "imagination-14",
    category: "Imagination & What If",
    text: "If you could open a tiny shop selling something unusual, what would the shop sell?"
  },
  {
    id: "imagination-15",
    category: "Imagination & What If",
    text: "If you could instantly visit any historical period for one day, where would you go?"
  },
  {
    id: "imagination-16",
    category: "Imagination & What If",
    text: "If you could turn one everyday object into something magical, which object would you choose?"
  },
  {
    id: "imagination-17",
    category: "Imagination & What If",
    text: "If you could create a new rule that everyone had to follow for one day, what would it be?"
  },
  {
    id: "imagination-18",
    category: "Imagination & What If",
    text: "If you had your own television show, what would it be about?"
  },
  {
    id: "imagination-19",
    category: "Imagination & What If",
    text: "If you could choose the weather for an entire month, what would you choose?"
  },
  {
    id: "imagination-20",
    category: "Imagination & What If",
    text: "If you could build a secret hideout anywhere, what would it look like?"
  },


  /* =========================
     CHILDHOOD - 15
  ========================== */

  {
    id: "childhood-1",
    category: "Childhood & Memories",
    text: "What childhood mischief still makes you laugh?"
  },
  {
    id: "childhood-2",
    category: "Childhood & Memories",
    text: "What was your funniest school memory?"
  },
  {
    id: "childhood-3",
    category: "Childhood & Memories",
    text: "Which cartoon character did you secretly want to become?"
  },
  {
    id: "childhood-4",
    category: "Childhood & Memories",
    text: "What is something you believed as a child that was completely ridiculous?"
  },
  {
    id: "childhood-5",
    category: "Childhood & Memories",
    text: "What was your favorite way to spend a free afternoon as a child?"
  },
  {
    id: "childhood-6",
    category: "Childhood & Memories",
    text: "What school subject surprised you by becoming more useful than expected?"
  },
  {
    id: "childhood-7",
    category: "Childhood & Memories",
    text: "What was the first thing you remember being really proud of?"
  },
  {
    id: "childhood-8",
    category: "Childhood & Memories",
    text: "What was your favorite snack when you were younger?"
  },
  {
    id: "childhood-9",
    category: "Childhood & Memories",
    text: "Did you ever have a nickname you found funny or embarrassing?"
  },
  {
    id: "childhood-10",
    category: "Childhood & Memories",
    text: "What game could you play for hours without getting bored?"
  },
  {
    id: "childhood-11",
    category: "Childhood & Memories",
    text: "What was your most dramatic school moment?"
  },
  {
    id: "childhood-12",
    category: "Childhood & Memories",
    text: "What was something adults told you that you completely misunderstood?"
  },
  {
    id: "childhood-13",
    category: "Childhood & Memories",
    text: "What was the first movie you remember watching many times?"
  },
  {
    id: "childhood-14",
    category: "Childhood & Memories",
    text: "What was your favorite excuse for not doing homework?"
  },
  {
    id: "childhood-15",
    category: "Childhood & Memories",
    text: "What childhood memory can instantly make you smile?"
  },


  /* =========================
     PERSONALITY - 15
  ========================== */

  {
    id: "personality-1",
    category: "Personality & Quirky Habits",
    text: "What is one weird habit you will never admit publicly?"
  },
  {
    id: "personality-2",
    category: "Personality & Quirky Habits",
    text: "Are you the kind of person who overthinks a message before sending it?"
  },
  {
    id: "personality-3",
    category: "Personality & Quirky Habits",
    text: "What instantly improves your mood?"
  },
  {
    id: "personality-4",
    category: "Personality & Quirky Habits",
    text: "What is your most useless talent?"
  },
  {
    id: "personality-5",
    category: "Personality & Quirky Habits",
    text: "What tiny thing can distract you for far too long?"
  },
  {
    id: "personality-6",
    category: "Personality & Quirky Habits",
    text: "What is something you always notice that other people often miss?"
  },
  {
    id: "personality-7",
    category: "Personality & Quirky Habits",
    text: "Are you more likely to make a detailed plan or figure things out as you go?"
  },
  {
    id: "personality-8",
    category: "Personality & Quirky Habits",
    text: "What is your funniest automatic reaction when something unexpected happens?"
  },
  {
    id: "personality-9",
    category: "Personality & Quirky Habits",
    text: "What kind of compliment do you find easiest to believe?"
  },
  {
    id: "personality-10",
    category: "Personality & Quirky Habits",
    text: "What is one small thing that can completely ruin your concentration?"
  },
  {
    id: "personality-11",
    category: "Personality & Quirky Habits",
    text: "What do you do when you are trying to avoid doing something boring?"
  },
  {
    id: "personality-12",
    category: "Personality & Quirky Habits",
    text: "What is one thing you can talk about for much longer than people expect?"
  },
  {
    id: "personality-13",
    category: "Personality & Quirky Habits",
    text: "What is your most predictable habit?"
  },
  {
    id: "personality-14",
    category: "Personality & Quirky Habits",
    text: "What makes you feel unusually productive?"
  },
  {
    id: "personality-15",
    category: "Personality & Quirky Habits",
    text: "If your personality had a color today, what color would it be?"
  },


  /* =========================
     FRIENDSHIP - 15
  ========================== */

  {
    id: "friendship-1",
    category: "Friendship & Connection",
    text: "What makes a conversation memorable?"
  },
  {
    id: "friendship-2",
    category: "Friendship & Connection",
    text: "What is one quality you appreciate in people?"
  },
  {
    id: "friendship-3",
    category: "Friendship & Connection",
    text: "If we went on a random adventure, who would get lost first?"
  },
  {
    id: "friendship-4",
    category: "Friendship & Connection",
    text: "What is one thing that instantly makes someone interesting?"
  },
  {
    id: "friendship-5",
    category: "Friendship & Connection",
    text: "What makes someone easy to talk to?"
  },
  {
    id: "friendship-6",
    category: "Friendship & Connection",
    text: "What kind of humor do you enjoy most?"
  },
  {
    id: "friendship-7",
    category: "Friendship & Connection",
    text: "What is the best kind of unexpected conversation?"
  },
  {
    id: "friendship-8",
    category: "Friendship & Connection",
    text: "Would you rather explore a new place with someone adventurous or someone extremely organized?"
  },
  {
    id: "friendship-9",
    category: "Friendship & Connection",
    text: "What makes a person feel genuinely welcoming?"
  },
  {
    id: "friendship-10",
    category: "Friendship & Connection",
    text: "What is a small gesture that can make someone's day better?"
  },
  {
    id: "friendship-11",
    category: "Friendship & Connection",
    text: "What kind of conversation can make hours feel like minutes?"
  },
  {
    id: "friendship-12",
    category: "Friendship & Connection",
    text: "What would make a random road trip unexpectedly memorable?"
  },
  {
    id: "friendship-13",
    category: "Friendship & Connection",
    text: "What is something people often underestimate about good friendships?"
  },
  {
    id: "friendship-14",
    category: "Friendship & Connection",
    text: "What is the best way to recover from an awkward moment?"
  },
  {
    id: "friendship-15",
    category: "Friendship & Connection",
    text: "What is one topic you think always leads to interesting conversations?"
  },


  /* =========================
     CUTE & LIGHT - 15
  ========================== */

  {
    id: "cute-1",
    category: "Cute & Light",
    text: "What is your idea of a perfect unexpected surprise?"
  },
  {
    id: "cute-2",
    category: "Cute & Light",
    text: "Do you believe a random conversation can make someone's day?"
  },
  {
    id: "cute-3",
    category: "Cute & Light",
    text: "What kind of compliment makes you genuinely smile?"
  },
  {
    id: "cute-4",
    category: "Cute & Light",
    text: "Is a little teasing a sign of a good friendship?"
  },
  {
    id: "cute-5",
    category: "Cute & Light",
    text: "What is more attractive in a person: a good sense of humor or a kind heart?"
  },
  {
    id: "cute-6",
    category: "Cute & Light",
    text: "What is a small thing someone can do that instantly feels thoughtful?"
  },
  {
    id: "cute-7",
    category: "Cute & Light",
    text: "What kind of message can unexpectedly make you smile?"
  },
  {
    id: "cute-8",
    category: "Cute & Light",
    text: "What makes someone have a comforting presence?"
  },
  {
    id: "cute-9",
    category: "Cute & Light",
    text: "What is your favorite kind of harmless teasing?"
  },
  {
    id: "cute-10",
    category: "Cute & Light",
    text: "What is one simple thing that can make an ordinary day feel special?"
  },
  {
    id: "cute-11",
    category: "Cute & Light",
    text: "What is the nicest kind of unexpected compliment?"
  },
  {
    id: "cute-12",
    category: "Cute & Light",
    text: "What makes a person easy to remember in a good way?"
  },
  {
    id: "cute-13",
    category: "Cute & Light",
    text: "Would you rather receive a funny surprise or a thoughtful surprise?"
  },
  {
    id: "cute-14",
    category: "Cute & Light",
    text: "What kind of personality instantly makes a group more fun?"
  },
  {
    id: "cute-15",
    category: "Cute & Light",
    text: "What is something unexpectedly wholesome that always makes you smile?"
  },


  /* =========================
     SILLY MINI CHALLENGES - 10
  ========================== */

  {
    id: "challenge-1",
    category: "Silly Mini Challenges",
    text: "Describe your current mood using only three emojis."
  },
  {
    id: "challenge-2",
    category: "Silly Mini Challenges",
    text: "Make up a ridiculous movie title about your life."
  },
  {
    id: "challenge-3",
    category: "Silly Mini Challenges",
    text: "Invent a new word and explain its meaning."
  },
  {
    id: "challenge-4",
    category: "Silly Mini Challenges",
    text: "Give the other player a funny nickname."
  },
  {
    id: "challenge-5",
    category: "Silly Mini Challenges",
    text: "Describe yourself as a food item."
  },
  {
    id: "challenge-6",
    category: "Silly Mini Challenges",
    text: "Create a dramatic slogan for your personality."
  },
  {
    id: "challenge-7",
    category: "Silly Mini Challenges",
    text: "Describe your day as if you are narrating a wildlife documentary."
  },
  {
    id: "challenge-8",
    category: "Silly Mini Challenges",
    text: "Invent the worst possible app and explain what it does."
  },
  {
    id: "challenge-9",
    category: "Silly Mini Challenges",
    text: "Describe the other player using three completely random words."
  },
  {
    id: "challenge-10",
    category: "Silly Mini Challenges",
    text: "Give an acceptance speech for winning an award nobody has ever heard of."
  }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const welcomeScreen = document.getElementById("welcomeScreen");
const gameScreen = document.getElementById("gameScreen");
const finalScreen = document.getElementById("finalScreen");

const roomSetup = document.getElementById("roomSetup");
const roomCreatedBox = document.getElementById("roomCreatedBox");

const createRoomBtn = document.getElementById("createRoomBtn");
const joinRoomBtn = document.getElementById("joinRoomBtn");
const enterCreatedRoomBtn = document.getElementById("enterCreatedRoomBtn");
const copyRoomCodeBtn = document.getElementById("copyRoomCodeBtn");

const createdRoomCode = document.getElementById("createdRoomCode");
const joinRoomCode = document.getElementById("joinRoomCode");
const welcomeStatus = document.getElementById("welcomeStatus");

const roomCodeHeader = document.getElementById("roomCodeHeader");

const rollDiceBtn = document.getElementById("rollDiceBtn");
const dice = document.getElementById("dice");
const diceMessage = document.getElementById("diceMessage");

const turnStatusText = document.getElementById("turnStatusText");
const turnDot = document.getElementById("turnDot");
const playerIdentityText = document.getElementById("playerIdentityText");

const sudhanScoreEl = document.getElementById("sudhanScore");
const rakshaScoreEl = document.getElementById("rakshaScore");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const categoryFilters = document.getElementById("categoryFilters");
const shuffleCategoryBtn = document.getElementById("shuffleCategoryBtn");

const questionCard = document.getElementById("questionCard");
const questionCategory = document.getElementById("questionCategory");
const answeringPlayer = document.getElementById("answeringPlayer");
const questionText = document.getElementById("questionText");

const answeredBtn = document.getElementById("answeredBtn");
const anotherQuestionBtn = document.getElementById("anotherQuestionBtn");
const skipQuestionBtn = document.getElementById("skipQuestionBtn");
const nextTurnBtn = document.getElementById("nextTurnBtn");

const questionHistory = document.getElementById("questionHistory");

const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatStatus = document.getElementById("chatStatus");

const soundToggleBtn = document.getElementById("soundToggleBtn");

const resetGameBtn = document.getElementById("resetGameBtn");
const resetModal = document.getElementById("resetModal");
const cancelResetBtn = document.getElementById("cancelResetBtn");
const confirmResetBtn = document.getElementById("confirmResetBtn");

const celebrationLayer = document.getElementById("celebrationLayer");
const toast = document.getElementById("toast");

const finalTotal = document.getElementById("finalTotal");
const finalSudhan = document.getElementById("finalSudhan");
const finalRaksha = document.getElementById("finalRaksha");
const finalCategory = document.getElementById("finalCategory");
const closingMessage = document.getElementById("closingMessage");
const playAgainBtn = document.getElementById("playAgainBtn");


/* =========================================================
   GAME STATE
========================================================= */

let currentPlayerName = "Sudhan";
let selectedCreatePlayer = "Sudhan";
let selectedJoinPlayer = "Sudhan";

let roomId = null;
let roomCode = null;
let currentRoom = null;

let selectedCategory = "All Categories";

let roomChannel = null;
let chatChannel = null;

let isRolling = false;
let soundEnabled = false;

let recentlyShownQuestionIds = new Set();


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}


function generateRoomCode() {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let code = "";

  for (let i = 0; i < 6; i++) {
    code += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return code;
}


function showScreen(screen) {
  document.querySelectorAll(".screen").forEach(item => {
    item.classList.remove("active");
  });

  screen.classList.add("active");
}


function showToast(message) {
  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


function otherPlayer(player) {
  return player === "Sudhan" ? "Raksha" : "Sudhan";
}


function setButtonDisabled(button, disabled) {
  button.disabled = disabled;

  button.classList.toggle("disabled-turn", disabled);
}


/* =========================================================
   SIMPLE SOUND
========================================================= */

function playSound(type = "click") {

  if (!soundEnabled) return;

  try {

    const AudioContextClass =
      window.AudioContext ||
      window.webkitAudioContext;

    const context = new AudioContextClass();

    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.connect(gain);
    gain.connect(context.destination);

    let frequency = 440;

    if (type === "roll") frequency = 220;
    if (type === "success") frequency = 660;

    oscillator.frequency.value = frequency;
    oscillator.type = "sine";

    gain.gain.setValueAtTime(
      0.05,
      context.currentTime
    );

    oscillator.start();

    oscillator.stop(
      context.currentTime + 0.12
    );

  } catch (error) {
    console.log("Sound unavailable.");
  }

}


/* =========================================================
   SETUP TABS
========================================================= */

document.querySelectorAll(".setup-tab").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll(".setup-tab").forEach(tab => {
      tab.classList.remove("active");
    });

    button.classList.add("active");

    const tab = button.dataset.tab;

    document
      .getElementById("createPanel")
      .classList.toggle("active", tab === "create");

    document
      .getElementById("joinPanel")
      .classList.toggle("active", tab === "join");

  });

});


/* =========================================================
   PLAYER IDENTITY SELECTION
========================================================= */

document.querySelectorAll(".identity-btn").forEach(button => {

  button.addEventListener("click", () => {

    selectedCreatePlayer = button.dataset.player;

    document
      .querySelectorAll(".identity-btn")
      .forEach(item => item.classList.remove("selected"));

    button.classList.add("selected");

  });

});


document.querySelectorAll(".join-identity-btn").forEach(button => {

  button.addEventListener("click", () => {

    selectedJoinPlayer = button.dataset.player;

    document
      .querySelectorAll(".join-identity-btn")
      .forEach(item => item.classList.remove("selected"));

    button.classList.add("selected");

  });

});


/* =========================================================
   CREATE ROOM
========================================================= */

createRoomBtn.addEventListener("click", async () => {

  try {

    createRoomBtn.disabled = true;

    welcomeStatus.textContent =
      "Creating your game room...";

    const code = generateRoomCode();

    const { data, error } =
      await supabaseClient
        .from("game_rooms")
        .insert({

          room_code: code,

          current_player: selectedCreatePlayer,

          answering_player: null,

          current_mode: "player",

          current_question: null,

          current_category: null,

          current_question_id: null,

          is_rolling: false,

          sudhan_score: 0,

          raksha_score: 0,

          total_questions_played: 0,

          selected_category: "All Categories",

          status: "playing"

        })
        .select()
        .single();


    if (error) throw error;


    currentPlayerName = selectedCreatePlayer;

    roomId = data.id;
    roomCode = data.room_code;
    currentRoom = data;


    createdRoomCode.textContent = roomCode;

    roomSetup.classList.add("hidden");

    roomCreatedBox.classList.remove("hidden");

    welcomeStatus.textContent =
      "Room created successfully.";

  } catch (error) {

    console.error(error);

    welcomeStatus.textContent =
      "Could not create the room. Please check your Supabase setup.";

  } finally {

    createRoomBtn.disabled = false;

  }

});


/* =========================================================
   COPY ROOM CODE
========================================================= */

copyRoomCodeBtn.addEventListener("click", async () => {

  if (!roomCode) return;

  try {

    await navigator.clipboard.writeText(roomCode);

    copyRoomCodeBtn.textContent = "Copied";

    setTimeout(() => {
      copyRoomCodeBtn.textContent = "Copy";
    }, 1500);

  } catch (error) {

    showToast(
      `Room code: ${roomCode}`
    );

  }

});


/* =========================================================
   ENTER CREATED ROOM
========================================================= */

enterCreatedRoomBtn.addEventListener("click", async () => {

  await enterGame();

});


/* =========================================================
   JOIN ROOM
========================================================= */

joinRoomBtn.addEventListener("click", async () => {

  const code =
    joinRoomCode.value.trim().toUpperCase();


  if (!code) {

    welcomeStatus.textContent =
      "Please enter a room code.";

    return;

  }


  try {

    joinRoomBtn.disabled = true;

    welcomeStatus.textContent =
      "Joining game room...";


    const { data, error } =
      await supabaseClient
        .from("game_rooms")
        .select("*")
        .eq("room_code", code)
        .maybeSingle();


    if (error) throw error;


    if (!data) {

      welcomeStatus.textContent =
        "Room not found.";

      return;

    }


    currentPlayerName = selectedJoinPlayer;

    roomId = data.id;
    roomCode = data.room_code;
    currentRoom = data;


    welcomeStatus.textContent =
      "Room joined successfully.";


    await enterGame();

  } catch (error) {

    console.error(error);

    welcomeStatus.textContent =
      "Could not join the room.";

  } finally {

    joinRoomBtn.disabled = false;

  }

});


/* =========================================================
   ENTER GAME
========================================================= */

async function enterGame() {

  if (!roomId) return;

  roomCodeHeader.textContent =
    `ROOM ${roomCode}`;

  playerIdentityText.textContent =
    `You are ${currentPlayerName}`;

  showScreen(gameScreen);

  renderCategoryFilters();

  await loadRoom();

  await loadQuestionHistory();

  await loadChatMessages();

  subscribeToRoom();

  subscribeToChat();

}


/* =========================================================
   LOAD ROOM
========================================================= */

async function loadRoom() {

  if (!roomId) return;

  const { data, error } =
    await supabaseClient
      .from("game_rooms")
      .select("*")
      .eq("id", roomId)
      .single();


  if (error) {

    console.error("Room load error:", error);

    return;

  }


  currentRoom = data;

  updateGameUI();

}


/* =========================================================
   ROOM REALTIME SUBSCRIPTION
========================================================= */

function subscribeToRoom() {

  if (roomChannel) {
    supabaseClient.removeChannel(roomChannel);
  }


  roomChannel =
    supabaseClient
      .channel(`room-state-${roomId}`)

      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "game_rooms",
          filter: `id=eq.${roomId}`
        },
        async payload => {

          if (payload.new) {

            currentRoom = payload.new;

            updateGameUI();

            await loadQuestionHistory();

          }

        }
      )

      .subscribe(status => {

        console.log(
          "Room subscription:",
          status
        );

        if (status === "SUBSCRIBED") {
          chatStatus.textContent = "Connected";
        }

        if (
          status === "CHANNEL_ERROR" ||
          status === "TIMED_OUT"
        ) {
          chatStatus.textContent =
            "Reconnecting";
        }

      });

}


/* =========================================================
   MAIN UI UPDATE
========================================================= */

function updateGameUI() {

  if (!currentRoom) return;


  const total =
    Number(currentRoom.total_questions_played || 0);

  const sudhanScore =
    Number(currentRoom.sudhan_score || 0);

  const rakshaScore =
    Number(currentRoom.raksha_score || 0);


  /* SCORES */

  sudhanScoreEl.textContent = sudhanScore;
  rakshaScoreEl.textContent = rakshaScore;


  /* PROGRESS */

  progressText.textContent =
    `${total} / ${GAME_LIMIT}`;

  const percentage =
    Math.min(
      (total / GAME_LIMIT) * 100,
      100
    );

  progressBar.style.width =
    `${percentage}%`;


  /* CURRENT TURN */

  const currentTurn =
    currentRoom.current_player;

  const isMyTurn =
    currentTurn === currentPlayerName;

  const hasQuestion =
    Boolean(currentRoom.current_question);

  const rolling =
    Boolean(currentRoom.is_rolling);

  const gameFinished =
    currentRoom.status === "finished";


  /*
    The roll button is enabled ONLY when:

    1. It is your turn.
    2. There is no active question.
    3. Nobody is rolling.
    4. Game is not finished.
  */

  const canRoll =
    isMyTurn &&
    !hasQuestion &&
    !rolling &&
    !gameFinished;


  setButtonDisabled(
    rollDiceBtn,
    !canRoll
  );


  /* TURN STATUS */

  updateTurnText();


  /* DICE MESSAGE */

  if (gameFinished) {

    diceMessage.textContent =
      "This session is complete.";

  } else if (rolling) {

    diceMessage.textContent =
      `${currentTurn} is rolling the dice.`;

  } else if (hasQuestion) {

    const person =
      currentRoom.answering_player ||
      currentTurn;

    diceMessage.textContent =
      `${person} has the current question.`;

  } else if (isMyTurn) {

    diceMessage.textContent =
      "It is your turn to roll.";

  } else {

    diceMessage.textContent =
      `Waiting for ${currentTurn} to roll.`;

  }


  /* QUESTION CARD */

  if (hasQuestion) {

    questionCard.classList.remove("hidden");

    questionText.textContent =
      currentRoom.current_question;

    questionCategory.textContent =
      currentRoom.current_category ||
      "Question";

    answeringPlayer.textContent =
      getAnsweringLabel();


    const personAnswering =
      currentRoom.answering_player ||
      currentTurn;

    const amIAnswering =
      personAnswering === currentPlayerName;


    /*
      Only the selected answering player can
      modify the current question.
    */

    setButtonDisabled(
      answeredBtn,
      !amIAnswering
    );

    setButtonDisabled(
      anotherQuestionBtn,
      !amIAnswering
    );

    setButtonDisabled(
      skipQuestionBtn,
      !amIAnswering
    );

    setButtonDisabled(
      nextTurnBtn,
      true
    );

  } else {

    questionCard.classList.add("hidden");

  }


  /* ACTIVE PLAYER VISUAL */

  document
    .getElementById("sudhanStat")
    .classList.toggle(
      "active-player",
      currentTurn === "Sudhan"
    );

  document
    .getElementById("rakshaStat")
    .classList.toggle(
      "active-player",
      currentTurn === "Raksha"
    );


  /* FINAL SCREEN */

  if (gameFinished) {
    showFinalScreen();
  }

}


/* =========================================================
   TURN TEXT
========================================================= */

function updateTurnText() {

  if (!currentRoom) return;


  const turn =
    currentRoom.current_player;

  const isMyTurn =
    turn === currentPlayerName;


  if (currentRoom.status === "finished") {

    turnStatusText.textContent =
      "The session is complete.";

    turnDot.classList.remove("active");

    return;

  }


  if (currentRoom.is_rolling) {

    turnStatusText.textContent =
      `${turn} is rolling the dice.`;

    turnDot.classList.add("active");

    return;

  }


  if (currentRoom.current_question) {

    const person =
      currentRoom.answering_player ||
      turn;

    if (person === currentPlayerName) {

      turnStatusText.textContent =
        "Your turn to answer.";

    } else {

      turnStatusText.textContent =
        `${person}'s turn to answer.`;

    }

    turnDot.classList.add("active");

    return;

  }


  if (isMyTurn) {

    turnStatusText.textContent =
      "Your turn to roll the dice.";

    turnDot.classList.add("active");

  } else {

    turnStatusText.textContent =
      `Waiting for ${turn} to roll.`;

    turnDot.classList.remove("active");

  }

}


/* =========================================================
   ANSWERING LABEL
========================================================= */

function getAnsweringLabel() {

  const player =
    currentRoom.answering_player ||
    currentRoom.current_player;


  if (currentRoom.current_mode === "truth") {
    return `${player} — Truth`;
  }

  if (currentRoom.current_mode === "dare") {
    return `${player} — Dare`;
  }

  return player;

}


/* =========================================================
   CATEGORY FILTERS
========================================================= */

function renderCategoryFilters() {

  categoryFilters.innerHTML = "";


  CATEGORIES.forEach(category => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.textContent = category;

    button.className = "category-filter";

    if (category === selectedCategory) {
      button.classList.add("active");
    }


    button.addEventListener("click", async () => {

      if (
        currentRoom &&
        currentRoom.current_question
      ) {

        showToast(
          "Finish or skip the current question first."
        );

        return;

      }


      selectedCategory = category;


      document
        .querySelectorAll(".category-filter")
        .forEach(item => {

          item.classList.toggle(
            "active",
            item.textContent === category
          );

        });


      if (roomId) {

        const { data, error } =
          await supabaseClient
            .from("game_rooms")
            .update({
              selected_category: category
            })
            .eq("id", roomId)
            .select()
            .single();


        if (!error && data) {
          currentRoom = data;
        }

      }

    });


    categoryFilters.appendChild(button);

  });

}


/* =========================================================
   SHUFFLE CATEGORY
========================================================= */

shuffleCategoryBtn.addEventListener(
  "click",
  () => {

    const available =
      CATEGORIES.filter(
        category =>
          category !== "All Categories"
      );


    selectedCategory =
      randomItem(available);


    renderCategoryFilters();

    showToast(
      `Category selected: ${selectedCategory}`
    );

  }
);


/* =========================================================
   GET RANDOM UNUSED QUESTION
========================================================= */

async function getRandomUnusedQuestion() {

  const { data, error } =
    await supabaseClient
      .from("used_questions")
      .select("question_id")
      .eq("room_id", roomId);


  if (error) {

    console.error(error);

    return null;

  }


  const usedIds =
    new Set(
      (data || []).map(
        item => item.question_id
      )
    );


  let availableQuestions =
    questions.filter(
      question =>
        !usedIds.has(question.id)
    );


  const roomCategory =
    currentRoom?.selected_category ||
    selectedCategory;


  if (
    roomCategory &&
    roomCategory !== "All Categories"
  ) {

    const categoryQuestions =
      availableQuestions.filter(
        question =>
          question.category === roomCategory
      );


    if (categoryQuestions.length > 0) {
      availableQuestions = categoryQuestions;
    }

  }


  if (!availableQuestions.length) {

    return null;

  }


  return randomItem(availableQuestions);

}


/* =========================================================
   ROLL DICE
========================================================= */

rollDiceBtn.addEventListener(
  "click",
  rollDice
);


async function rollDice() {

  if (isRolling) return;

  if (!currentRoom) return;


  /*
    Local protection.
  */

  if (
    currentRoom.current_player !==
    currentPlayerName
  ) {

    showToast(
      "It is not your turn to roll."
    );

    return;

  }


  if (currentRoom.current_question) {

    showToast(
      "Finish the current question first."
    );

    return;

  }


  /*
    Database lock.

    This prevents Sudhan and Raksha from
    successfully rolling simultaneously.
  */

  const { data: lockData, error: lockError } =
    await supabaseClient
      .from("game_rooms")
      .update({
        is_rolling: true
      })
      .eq("id", roomId)
      .eq(
        "current_player",
        currentPlayerName
      )
      .eq("is_rolling", false)
      .is("current_question", null)
      .select()
      .maybeSingle();


  if (lockError || !lockData) {

    await loadRoom();

    showToast(
      "The game state changed. Please wait."
    );

    return;

  }


  /*
    This player now owns the roll.
  */

  currentRoom = lockData;

  isRolling = true;

  updateGameUI();

  dice.classList.add("rolling");

  playSound("roll");


  await delay(1300);


  dice.classList.remove("rolling");


  /*
    Three dice outcomes:

    Sudhan
    Raksha
    Truth or Dare

    Truth or Dare applies to the person
    whose turn it was to roll.
  */

  const result =
    randomItem([
      "Sudhan",
      "Raksha",
      "TruthOrDare"
    ]);


  let answeringPerson;
  let mode = "player";


  if (result === "Sudhan") {

    answeringPerson = "Sudhan";

  } else if (result === "Raksha") {

    answeringPerson = "Raksha";

  } else {

    answeringPerson =
      currentRoom.current_player;

    mode =
      randomItem([
        "truth",
        "dare"
      ]);

  }


  const question =
    await getRandomUnusedQuestion();


  if (!question) {

    await supabaseClient
      .from("game_rooms")
      .update({
        is_rolling: false,
        status: "finished"
      })
      .eq("id", roomId);


    isRolling = false;

    await loadRoom();

    return;

  }


  await setQuestion(
    question,
    answeringPerson,
    mode
  );


  isRolling = false;

}


/* =========================================================
   SET QUESTION
========================================================= */

async function setQuestion(
  question,
  answeringPerson,
  mode
) {

  /*
    First reserve this question.

    The UNIQUE room_id + question_id rule
    should exist in Supabase.

    That prevents duplicate questions.
  */

  const { error: usedError } =
    await supabaseClient
      .from("used_questions")
      .insert({
        room_id: roomId,
        question_id: question.id
      });


  if (usedError) {

    console.error(
      "Question reservation error:",
      usedError
    );


    await supabaseClient
      .from("game_rooms")
      .update({
        is_rolling: false
      })
      .eq("id", roomId);


    isRolling = false;

    await loadRoom();

    showToast(
      "That question was already selected. Please roll again."
    );

    return;

  }


  /*
    Save the EXACT question.

    Both browsers receive this exact data
    from Supabase.
  */

  const { data, error } =
    await supabaseClient
      .from("game_rooms")
      .update({

        answering_player:
          answeringPerson,

        current_mode:
          mode,

        current_question:
          question.text,

        current_category:
          question.category,

        current_question_id:
          question.id,

        is_rolling:
          false,

        status:
          "playing"

      })
      .eq("id", roomId)
      .select()
      .single();


  if (error) {

    console.error(error);

    await supabaseClient
      .from("game_rooms")
      .update({
        is_rolling: false
      })
      .eq("id", roomId);

    showToast(
      "The question could not be saved."
    );

    return;

  }


  currentRoom = data;

  updateGameUI();

  await loadQuestionHistory();

}


/* =========================================================
   MARK ANSWERED
========================================================= */

answeredBtn.addEventListener(
  "click",
  async () => {

    if (
      !currentRoom ||
      !currentRoom.current_question
    ) return;


    const answeringPerson =
      currentRoom.answering_player ||
      currentRoom.current_player;


    if (
      answeringPerson !==
      currentPlayerName
    ) {

      showToast(
        "Only the selected player can complete this question."
      );

      return;

    }


    const newTotal =
      Number(
        currentRoom.total_questions_played || 0
      ) + 1;


    const updates = {

      total_questions_played:
        newTotal,

      current_player:
        otherPlayer(
          currentRoom.current_player
        ),

      answering_player:
        null,

      current_question:
        null,

      current_category:
        null,

      current_question_id:
        null,

      current_mode:
        "player",

      is_rolling:
        false

    };


    if (answeringPerson === "Sudhan") {

      updates.sudhan_score =
        Number(
          currentRoom.sudhan_score || 0
        ) + 1;

    }


    if (answeringPerson === "Raksha") {

      updates.raksha_score =
        Number(
          currentRoom.raksha_score || 0
        ) + 1;

    }


    if (newTotal >= GAME_LIMIT) {

      updates.status =
        "finished";

    }


    const { data, error } =
      await supabaseClient
        .from("game_rooms")
        .update(updates)
        .eq("id", roomId)
        .eq(
          "current_question_id",
          currentRoom.current_question_id
        )
        .select()
        .maybeSingle();


    if (error || !data) {

      console.error(error);

      showToast(
        "The game state changed. Please try again."
      );

      await loadRoom();

      return;

    }


    currentRoom = data;

    updateGameUI();

    playSound("success");


    if (
      newTotal > 0 &&
      newTotal % 10 === 0
    ) {
      celebrate();
    }


    if (
      newTotal > 0 &&
      newTotal % 3 === 0 &&
      newTotal < GAME_LIMIT
    ) {
      showRandomGameMessage();
    }


    await loadQuestionHistory();

  }
);


/* =========================================================
   ANOTHER QUESTION
========================================================= */

anotherQuestionBtn.addEventListener(
  "click",
  async () => {

    if (
      !currentRoom ||
      !currentRoom.current_question
    ) return;


    const answeringPerson =
      currentRoom.answering_player ||
      currentRoom.current_player;


    if (
      answeringPerson !==
      currentPlayerName
    ) {

      showToast(
        "Only the selected player can change this question."
      );

      return;

    }


    const question =
      await getRandomUnusedQuestion();


    if (!question) {

      showToast(
        "No unused questions remain."
      );

      return;

    }


    await setQuestion(
      question,
      answeringPerson,
      currentRoom.current_mode
    );

  }
);


/* =========================================================
   SKIP QUESTION
========================================================= */

skipQuestionBtn.addEventListener(
  "click",
  async () => {

    if (
      !currentRoom ||
      !currentRoom.current_question
    ) return;


    const answeringPerson =
      currentRoom.answering_player ||
      currentRoom.current_player;


    if (
      answeringPerson !==
      currentPlayerName
    ) {

      showToast(
        "Only the selected player can skip this question."
      );

      return;

    }


    const newTotal =
      Number(
        currentRoom.total_questions_played || 0
      ) + 1;


    const updates = {

      total_questions_played:
        newTotal,

      current_player:
        otherPlayer(
          currentRoom.current_player
        ),

      answering_player:
        null,

      current_question:
        null,

      current_category:
        null,

      current_question_id:
        null,

      current_mode:
        "player",

      is_rolling:
        false

    };


    if (newTotal >= GAME_LIMIT) {
      updates.status = "finished";
    }


    const { data, error } =
      await supabaseClient
        .from("game_rooms")
        .update(updates)
        .eq("id", roomId)
        .eq(
          "current_question_id",
          currentRoom.current_question_id
        )
        .select()
        .maybeSingle();


    if (error || !data) {

      await loadRoom();

      showToast(
        "The game state changed."
      );

      return;

    }


    currentRoom = data;

    updateGameUI();

    showToast(
      "Skipped. No pressure."
    );

    await loadQuestionHistory();

  }
);


/* =========================================================
   QUESTION HISTORY
========================================================= */

async function loadQuestionHistory() {

  if (!roomId) return;


  const { data, error } =
    await supabaseClient
      .from("used_questions")
      .select("question_id, created_at")
      .eq("room_id", roomId)
      .order("created_at", {
        ascending: false
      })
      .limit(HISTORY_LIMIT);


  if (error) {

    console.error(error);

    return;

  }


  questionHistory.innerHTML = "";


  if (!data || !data.length) {

    questionHistory.innerHTML =
      `<p class="empty-history">No questions yet.</p>`;

    return;

  }


  data.forEach(item => {

    const question =
      questions.find(
        question =>
          question.id === item.question_id
      );


    if (!question) return;


    const historyItem =
      document.createElement("div");

    historyItem.className =
      "history-item";

    historyItem.innerHTML = `
      <span>${escapeHtml(question.category)}</span>
      <p>${escapeHtml(question.text)}</p>
    `;


    questionHistory.appendChild(historyItem);

  });

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHtml(value) {

  const div =
    document.createElement("div");

  div.textContent =
    value || "";

  return div.innerHTML;

}


/* =========================================================
   CHAT
========================================================= */

async function loadChatMessages() {

  if (!roomId) return;


  const { data, error } =
    await supabaseClient
      .from("chat_messages")
      .select("*")
      .eq("room_id", roomId)
      .order("created_at", {
        ascending: true
      });


  if (error) {

    console.error(error);

    return;

  }


  chatMessages.innerHTML = "";


  if (!data || !data.length) {

    chatMessages.innerHTML = `
      <div class="system-message">
        Your conversation starts here.
      </div>
    `;

    return;

  }


  data.forEach(renderChatMessage);

  scrollChatToBottom();

}


function subscribeToChat() {

  if (chatChannel) {
    supabaseClient.removeChannel(chatChannel);
  }


  chatChannel =
    supabaseClient
      .channel(`chat-${roomId}`)

      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chat_messages",
          filter: `room_id=eq.${roomId}`
        },
        payload => {

          renderChatMessage(
            payload.new
          );

          scrollChatToBottom();

        }
      )

      .subscribe(status => {

        if (status === "SUBSCRIBED") {

          chatStatus.textContent =
            "Connected";

        }

      });

}


chatForm.addEventListener(
  "submit",
  async event => {

    event.preventDefault();


    const message =
      chatInput.value.trim();


    if (!message) return;


    chatInput.disabled = true;


    const { error } =
      await supabaseClient
        .from("chat_messages")
        .insert({

          room_id:
            roomId,

          player_name:
            currentPlayerName,

          message:
            message

        });


    if (error) {

      console.error(error);

      showToast(
        "Message could not be sent."
      );

    } else {

      chatInput.value = "";

    }


    chatInput.disabled = false;

    chatInput.focus();

  }
);


function renderChatMessage(messageData) {

  const message =
    document.createElement("div");

  const mine =
    messageData.player_name ===
    currentPlayerName;


  message.className =
    `chat-message ${mine ? "mine" : "theirs"}`;


  const name =
    messageData.player_name || "Player";

  const content =
    messageData.message || "";


  message.innerHTML = `
    <span class="chat-name">
      ${escapeHtml(name)}
    </span>

    <p>
      ${escapeHtml(content)}
    </p>
  `;


  chatMessages.appendChild(message);

}


function scrollChatToBottom() {

  setTimeout(() => {

    chatMessages.scrollTop =
      chatMessages.scrollHeight;

  }, 50);

}


/* =========================================================
   RANDOM GAME MESSAGES
========================================================= */

function showRandomGameMessage() {

  const messages = [

    "That answer deserves a trophy.",
    "Interesting answer. We need an explanation for that.",
    "The other player is probably laughing right now.",
    "That was unexpectedly wholesome.",
    "This conversation is getting interesting.",
    "Some answers deserve to be remembered forever.",
    "That was not the answer anyone expected.",
    "Excellent. The mystery continues."

  ];


  showToast(
    randomItem(messages)
  );

}


/* =========================================================
   CELEBRATION
========================================================= */

function celebrate() {

  celebrationLayer.innerHTML = "";


  for (let i = 0; i < 40; i++) {

    const piece =
      document.createElement("span");

    piece.className =
      "celebration-piece";

    piece.style.left =
      `${Math.random() * 100}%`;

    piece.style.animationDelay =
      `${Math.random() * 0.5}s`;


    celebrationLayer.appendChild(piece);

  }


  celebrationLayer.classList.add(
    "active"
  );


  setTimeout(() => {

    celebrationLayer.classList.remove(
      "active"
    );

    celebrationLayer.innerHTML = "";

  }, 2500);

}


/* =========================================================
   SOUND TOGGLE
========================================================= */

soundToggleBtn.addEventListener(
  "click",
  () => {

    soundEnabled =
      !soundEnabled;


    soundToggleBtn.textContent =
      soundEnabled
        ? "Sound On"
        : "Sound Off";


    if (soundEnabled) {
      playSound("click");
    }

  }
);


/* =========================================================
   RESET GAME
========================================================= */

resetGameBtn.addEventListener(
  "click",
  () => {

    resetModal.classList.remove(
      "hidden"
    );

  }
);


cancelResetBtn.addEventListener(
  "click",
  () => {

    resetModal.classList.add(
      "hidden"
    );

  }
);


confirmResetBtn.addEventListener(
  "click",
  async () => {

    resetModal.classList.add(
      "hidden"
    );


    const confirmed =
      confirm(
        "This will reset the entire room for both players. Continue?"
      );


    if (!confirmed) return;


    await supabaseClient
      .from("used_questions")
      .delete()
      .eq("room_id", roomId);


    const { data, error } =
      await supabaseClient
        .from("game_rooms")
        .update({

          current_player:
            "Sudhan",

          answering_player:
            null,

          current_mode:
            "player",

          current_question:
            null,

          current_category:
            null,

          current_question_id:
            null,

          is_rolling:
            false,

          sudhan_score:
            0,

          raksha_score:
            0,

          total_questions_played:
            0,

          selected_category:
            "All Categories",

          status:
            "playing"

        })
        .eq("id", roomId)
        .select()
        .single();


    if (error) {

      console.error(error);

      showToast(
        "Could not reset the game."
      );

      return;

    }


    currentRoom = data;

    selectedCategory =
      "All Categories";


    renderCategoryFilters();

    updateGameUI();

    await loadQuestionHistory();

    showToast(
      "Game reset successfully."
    );

  }
);


/* =========================================================
   FINAL SCREEN
========================================================= */

async function showFinalScreen() {

  if (!currentRoom) return;


  const total =
    currentRoom.total_questions_played || 0;

  const sudhan =
    currentRoom.sudhan_score || 0;

  const raksha =
    currentRoom.raksha_score || 0;


  finalTotal.textContent = total;
  finalSudhan.textContent = sudhan;
  finalRaksha.textContent = raksha;


  finalCategory.textContent =
    await getMostPopularCategory();


  const messages = [

    "A collection of random questions somehow became a collection of good memories.",

    "Somewhere between the silly answers and unexpected stories, this became a very good conversation.",

    "Turns out one dice can start quite a lot of conversations.",

    "That was a successful collection of laughs, surprises and unexpected answers.",

    "The questions may be random, but the memories are not."

  ];


  closingMessage.textContent =
    randomItem(messages);


  showScreen(finalScreen);

}


/* =========================================================
   MOST POPULAR CATEGORY
========================================================= */

async function getMostPopularCategory() {

  const { data, error } =
    await supabaseClient
      .from("used_questions")
      .select("question_id")
      .eq("room_id", roomId);


  if (error || !data || !data.length) {
    return "-";
  }


  const counts = {};


  data.forEach(item => {

    const question =
      questions.find(
        question =>
          question.id === item.question_id
      );


    if (!question) return;


    counts[question.category] =
      (counts[question.category] || 0) + 1;

  });


  let topCategory = "-";
  let highest = 0;


  Object.entries(counts).forEach(
    ([category, count]) => {

      if (count > highest) {

        highest = count;
        topCategory = category;

      }

    }
  );


  return topCategory;

}


/* =========================================================
   PLAY AGAIN
========================================================= */

playAgainBtn.addEventListener(
  "click",
  async () => {

    if (!roomId) {

      showScreen(welcomeScreen);

      return;

    }


    await supabaseClient
      .from("used_questions")
      .delete()
      .eq("room_id", roomId);


    const { data, error } =
      await supabaseClient
        .from("game_rooms")
        .update({

          current_player:
            "Sudhan",

          answering_player:
            null,

          current_mode:
            "player",

          current_question:
            null,

          current_category:
            null,

          current_question_id:
            null,

          is_rolling:
            false,

          sudhan_score:
            0,

          raksha_score:
            0,

          total_questions_played:
            0,

          selected_category:
            "All Categories",

          status:
            "playing"

        })
        .eq("id", roomId)
        .select()
        .single();


    if (error) {

      showToast(
        "Could not start a new game."
      );

      return;

    }


    currentRoom = data;

    selectedCategory =
      "All Categories";


    renderCategoryFilters();

    await loadQuestionHistory();

    showScreen(gameScreen);

    updateGameUI();

  }
);


/* =========================================================
   CLEANUP
========================================================= */

window.addEventListener(
  "beforeunload",
  () => {

    if (roomChannel) {
      supabaseClient.removeChannel(
        roomChannel
      );
    }

    if (chatChannel) {
      supabaseClient.removeChannel(
        chatChannel
      );
    }

  }
);


/* =========================================================
   INITIAL STATE
========================================================= */

renderCategoryFilters();