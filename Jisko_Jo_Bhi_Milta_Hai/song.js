const lyrics = [
  "🎁 Jisko Jo Bhi Milta Hai....",
  "    Be-sabab Nahin Milta....",
  "💭 Mujhse Bole Mann Mera?",
  "✨ Sabko Sab Nahin Milta...."
];

// Yeh time HAI line ke start ka (song start se seconds)
const timestamps = [
  0.0,   // Line 1 start
  5,   // Line 2 start
  9.77,  // Line 3 start
  14.7   // Line 4 start
];

const COLORS = {
  start: "\x1b[33m", // yellow
  text: "\x1b[31m",  // red
  reset: "\x1b[0m",
};

const TYPING_DELAY = 170; // har character ke beech ka time (ms)

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

    console.log(""); // line complete -> new line
  }

  console.log(
    COLORS.start + "\n ✨ next song comment and follow @inspitech" + COLORS.reset
  );
}

printLyrics();
