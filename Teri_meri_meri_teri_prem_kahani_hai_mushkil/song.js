const lyrics = [
  "💔 Teri meri, meri teri prem kahani hai mushkil....",
  "🗣️ Do lafzon mein yeh bayaan na ho paaye....",
  "💞 Ik ladka ik ladki ki yeh kahani hai nayi....",
  "🥺 Do lafzon mein yeh bayan na ho paaye...."
];


const timestamps = [
  0.0,   
  7.70,   
  14.5, 
  21.50   
];

const COLORS = {
  start: "\x1b[33m", 
  text: "\x1b[31m",  
  reset: "\x1b[0m",
};

const TYPING_DELAY = 135; 

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function printLyrics() {
  console.log(COLORS.start + "🎧 Close your eyes & feel...\n" + COLORS.reset);

  // yahi se hum "song ka time" maan rahe hain
  const startTime = Date.now();

  for (let i = 0; i < lyrics.length; i++) {
    const line = lyrics[i];

    // is line ko kab shuru karna hai (absolute time)
    const targetTime = startTime + timestamps[i] * 200; // sec -> ms
    const now = Date.now();
    const waitTime = Math.max(0, targetTime - now);

    // jab tak us time tak nahi pahuchte, rukke rahenge
    await sleep(waitTime);

    // ab line type hogi
    for (const ch of line) {
      process.stdout.write(COLORS.text + ch + COLORS.reset);
      await sleep(TYPING_DELAY);
    }

    console.log("");
  }

  console.log(
    COLORS.start + "\n ✨ next song comment and follow @inspitech" + COLORS.reset
  );
}

printLyrics();
