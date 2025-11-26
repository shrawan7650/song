const lyrics = [
  "🎁 Jisko Jo Bhi Milta Hai....",
  "    Be-sabab Nahin Milta....",
  "💭 Mujhse Bole Mann Mera?",
  "✨ Sabko Sab Nahin Milta....",
];

const timestamps = [0.0, 5, 9.77, 14.7];

const COLORS = {
  start: "\x1b[33m",
  text: "\x1b[31m",
  reset: "\x1b[0m",
};

const TYPING_DELAY = 170;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function printLyrics() {
  console.log(COLORS.start + "🎧 Close your eyes & feel...\n" + COLORS.reset);

  const startTime = Date.now();

  for (let i = 0; i < lyrics.length; i++) {
    const line = lyrics[i];

    const targetTime = startTime + timestamps[i] * 200;
    const now = Date.now();
    const waitTime = Math.max(0, targetTime - now);

    await sleep(waitTime);

    for (const ch of line) {
      process.stdout.write(COLORS.text + ch + COLORS.reset);
      await sleep(TYPING_DELAY);
    }

    console.log("");
  }

  console.log(
    COLORS.start +
      "\n ✨ next song comment and follow @inspitech" +
      COLORS.reset
  );
}

printLyrics();
