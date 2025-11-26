// typingDelayHelper.js
// ✅ Is file ko alag se run karoge: node typingDelayHelper.js

// 1) Yahan apna lyrics array paste karo:
const lyrics = [
  "💔 Teri meri, meri teri prem kahani hai mushkil....",
  "🗣️ Do lafzon mein yeh bayaan na ho paaye....",
  "💞 Ik ladka ik ladki ki yeh kahani hai nayi....",
  "🥺 Do lafzon mein yeh bayan na ho paaye...."
];

// 2) Yahan song ka total time (seconds me) daalo:
const totalDuration = 27.91; // example: 27.91 sec

// ----------------------------------------------------
// 🎯 Calculation logic – isko touch mat karna (bas use karo)
// ----------------------------------------------------
function calcTypingDelay(lyrics, totalDuration) {
  // total characters count
  let totalChars = 0;
  lyrics.forEach((line, index) => {
    const len = line.length;
    totalChars += len;
    console.log(`Line ${index + 1} length:`, len);
  });

  console.log("\nTotal characters in all lines:", totalChars);

  // per char ideal delay (ms)
  const idealDelay = (totalDuration * 1000) / totalChars;

  // thoda fast feel ke liye 10% kam
  const suggestedDelay = Math.round(idealDelay * 0.9);

  console.log("\nIdeal per-char delay (ms):", idealDelay.toFixed(2));
  console.log("Suggested TYPING_DELAY (ms):", suggestedDelay);

  console.log(
    `\n👉 Use this in your main file:\n\nconst TYPING_DELAY = ${suggestedDelay};\n`
  );
}

calcTypingDelay(lyrics, totalDuration);
