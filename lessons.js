// PhonoLearn — Lesson Curriculum
// Phoneme-first curriculum for beginner Spanish learners

const LESSONS = [
  {
    id: "vowels",
    title: "Spanish Vowels",
    phoneme: "a · e · i · o · u",
    description: "Spanish vowels are pure and consistent — each has exactly one sound.",
    level: 1,
    words: [
      { word: "casa",   translation: "house",  hint: "Focus on the clear 'a' sound" },
      { word: "mesa",   translation: "table",  hint: "Notice the short 'e'" },
      { word: "vino",   translation: "wine",   hint: "The 'i' is always a clean 'ee'" },
      { word: "lobo",   translation: "wolf",   hint: "The 'o' is rounder than in English" },
      { word: "luna",   translation: "moon",   hint: "End with a clear 'oo' sound" },
    ]
  },
  {
    id: "k-sound",
    title: "The /k/ Sound",
    phoneme: "/k/",
    description: "In Spanish, 'c' before a/o/u and 'qu' before e/i both make the /k/ sound.",
    level: 2,
    words: [
      { word: "casa",    translation: "house",   hint: "'c' before 'a' = /k/" },
      { word: "cosa",    translation: "thing",   hint: "'c' before 'o' = /k/" },
      { word: "coco",    translation: "coconut", hint: "Two /k/ sounds in one word" },
      { word: "cabeza",  translation: "head",    hint: "'c' before 'a' = /k/" },
      { word: "queso",   translation: "cheese",  hint: "'qu' before 'e' = /k/, the 'u' is silent" },
    ]
  },
  {
    id: "p-sound",
    title: "The /p/ Sound",
    phoneme: "/p/",
    description: "Spanish /p/ has no puff of air (aspiration) unlike English 'p'.",
    level: 3,
    words: [
      { word: "pan",    translation: "bread",   hint: "No puff of air after the 'p'" },
      { word: "papá",   translation: "dad",     hint: "Two /p/ sounds — stay unaspirated" },
      { word: "puerta", translation: "door",    hint: "Feel no air on your hand" },
      { word: "pelo",   translation: "hair",    hint: "Crisp /p/ start" },
      { word: "piso",   translation: "floor",   hint: "Hold your hand near your mouth — no air!" },
    ]
  },
  {
    id: "diphthongs",
    title: "Diphthongs",
    phoneme: "ie · ue · ai · ei",
    description: "Two vowel sounds glide together in one syllable.",
    level: 4,
    words: [
      { word: "tierra",  translation: "earth",  hint: "The 'ie' glides from 'ee' to 'eh'" },
      { word: "puerta",  translation: "door",   hint: "The 'ue' glides from 'oo' to 'eh'" },
      { word: "aire",    translation: "air",    hint: "The 'ai' glides from 'ah' to 'ee'" },
      { word: "reina",   translation: "queen",  hint: "The 'ei' glides from 'eh' to 'ee'" },
      { word: "fuego",   translation: "fire",   hint: "The 'ue' — fast glide, one syllable" },
    ]
  },
  {
    id: "tap-r",
    title: "Tap R (r)",
    phoneme: "/ɾ/",
    description: "A single quick tap of the tongue — like the 'tt' in American English 'butter'.",
    level: 5,
    words: [
      { word: "pero",  translation: "but",   hint: "One quick tongue tap" },
      { word: "caro",  translation: "expensive", hint: "Tap, don't trill" },
      { word: "para",  translation: "for",   hint: "Light and fast" },
      { word: "loro",  translation: "parrot", hint: "Feel the difference from English 'r'" },
      { word: "coro",  translation: "choir", hint: "One tap only" },
    ]
  },
  {
    id: "trill-rr",
    title: "Trilled RR (rr)",
    phoneme: "/r/",
    description: "Multiple rapid tongue taps — the iconic Spanish trill.",
    level: 6,
    words: [
      { word: "perro",   translation: "dog",    hint: "Multiple tongue taps — brrrr!" },
      { word: "carro",   translation: "car",    hint: "Feel the vibration" },
      { word: "correr",  translation: "to run", hint: "End with a trill" },
      { word: "tierra",  translation: "earth",  hint: "Can you sustain the trill?" },
      { word: "arroz",   translation: "rice",   hint: "Start with the trill" },
    ]
  }
];
