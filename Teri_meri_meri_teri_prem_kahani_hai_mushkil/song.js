const lyrics = [
  "💔 Teri meri, meri teri prem kahani hai mushkil....",
  "🗣️ Do lafzon mein yeh bayaan na ho paaye....",
  "💞 Ik ladka ik ladki ki yeh kahani hai nayi....",
  "🥺 Do lafzon mein yeh bayan na ho paaye...."
];

const COLORS = {
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  reset: "\x1b[0m",
};


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getDelay(line) {
  const words = line.split(/\s+/).filter(Boolean).length;

  return 500 + words * 250;
}

async function typeLine(line) {
  process.stdout.write(COLORS.cyan);

  for (const ch of line) {
    process.stdout.write(ch);
    await sleep(50);
  }

  process.stdout.write(COLORS.reset + "\n");
}

async function run() {
  console.log(COLORS.yellow + "🎧 Close your eyes & feel..." + COLORS.reset);
  await sleep(200);
  console.log("");

  for (const line of lyrics) {
    await typeLine(line);
    await sleep(getDelay(line));
    console.log("");
  }

console.log(
  COLORS.yellow + "✨ next song comment and follow @inspitech" + COLORS.reset
);

}

run();

