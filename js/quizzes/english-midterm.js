const questions = [
  // TENSES (Q1–13)
  {
    cat: "Tenses",
    q: "By the time she arrives, I <span class='highlight'>will have cooked</span> dinner. — What tense is the highlighted verb?",
    opts: ["Future Continuous", "Future Indefinite", "Future Perfect", "Future Perfect Continuous"],
    ans: 2,
    exp: "<strong>Future Perfect</strong> = will have + V3. It expresses an action that will be completed before a specific future moment. Signal phrase: 'by the time she arrives'."
  },
  {
    cat: "Tenses",
    q: "Which sentence is in the <strong>Past Continuous</strong> tense?",
    opts: ["She had eaten before he came.", "She was eating when he called.", "She ate quickly.", "She has eaten already."],
    ans: 1,
    exp: "<strong>Past Continuous</strong> = was/were + V-ing. 'She was eating when he called' shows an ongoing past action interrupted by another past event (he called)."
  },
  {
    cat: "Tenses",
    q: "'We <span class='highlight'>have not seen</span> her today.' — The word 'today' here suggests:",
    opts: ["The day is over, so Simple Past is needed", "The day is still ongoing — Present Perfect is correct", "Future tense should be used", "Past Perfect should be used"],
    ans: 1,
    exp: "Present Perfect is used because <strong>'today' is an unfinished period</strong> — the day is not yet over. If the day had ended, Simple Past ('We did not see her today') would be more natural."
  },
  {
    cat: "Tenses",
    q: "Select the correct <strong>Past Perfect Continuous</strong> sentence:",
    opts: ["She has been working all day.", "She had been working for three hours when the power cut.", "She was working when I arrived.", "She will have been working by noon."],
    ans: 1,
    exp: "<strong>Past Perfect Continuous</strong> = had + been + V-ing. It emphasizes the duration of an action before another past event. 'For three hours' signals duration; 'when the power cut' is the interrupting past event."
  },
  {
    cat: "Tenses",
    q: "I <span class='highlight'>lived</span> in Fiji in 1976. — This Simple Past sentence uses:",
    opts: ["An indefinite time reference", "A definite time reference", "No time reference", "A future time reference"],
    ans: 1,
    exp: "Simple Past with a <strong>definite time reference</strong> ('in 1976'). Definite references include: last week, yesterday, in 1990, six weeks ago. These always require Simple Past, never Present Perfect."
  },
  {
    cat: "Tenses",
    q: "Which auxiliary is used in <strong>Future Continuous</strong> tense?",
    opts: ["Will have", "Will be", "Shall have been", "Has been"],
    ans: 1,
    exp: "<strong>Future Continuous</strong> = will be + V-ing. E.g., 'She will be doing this work at noon.' It describes an action in progress at a specific future time."
  },
  {
    cat: "Tenses",
    q: "'It <span class='highlight'>has rained</span> a lot this year.' — Why is Present Perfect used here?",
    opts: ["Because the exact date of rain is known", "Because 'this year' is still an unfinished period", "Because it describes a future possibility", "Because the rain is a habitual action"],
    ans: 1,
    exp: "'This year' is an <strong>unfinished period</strong> — the year is not yet over. Present Perfect is used for actions during a period that has not ended. Compare: 'It rained a lot last year' (finished period → Simple Past)."
  },
  {
    cat: "Tenses",
    q: "Which sentence correctly uses <strong>Present Perfect</strong> to describe a very recent action?",
    opts: ["She just finished her work.", "She has just finished her work.", "She was just finishing her work.", "She had just finished her work."],
    ans: 1,
    exp: "<strong>Present Perfect + 'just'</strong> expresses an action completed in the very recent past. 'Just' always sits between have/has and the past participle. E.g., 'I have just eaten.' / 'He has just left.'"
  },
  {
    cat: "Tenses",
    q: "John Cabot <span class='highlight'>sailed</span> to America in 1498. — This is Simple Past because:",
    opts: ["The time is unspecified", "The exact year (1498) makes it a completed action at a definite time", "It describes a habit", "It is an ongoing action"],
    ans: 1,
    exp: "<strong>Simple Past</strong> is required when a specific time is given ('in 1498'). This is a completed historical action at a known, definite point in time. Present Perfect cannot be used with specific past time expressions."
  },
  {
    cat: "Tenses",
    q: "What is the correct structure for <strong>Present Continuous</strong> tense?",
    opts: ["Do/does + V1", "Is/am/are + V-ing", "Has/have + V3", "Was/were + V3"],
    ans: 1,
    exp: "<strong>Present Continuous</strong> = is/am/are + V-ing. E.g., 'She is doing this work.' Used for actions happening at the moment of speaking or for future arranged plans."
  },
  {
    cat: "Tenses",
    q: "'She <span class='highlight'>has studied</span> Japanese, Russian, and English.' — The Present Perfect here emphasizes:",
    opts: ["When exactly she studied", "Where she studied", "The result/experience — that she has this knowledge", "That she is currently studying"],
    ans: 2,
    exp: "When <strong>time is not important or unknown</strong>, Present Perfect focuses on the <em>result or experience</em>. We care that she has this ability, not when she acquired it. The same applies to: 'He has read War and Peace.'"
  },
  {
    cat: "Tenses",
    q: "Which sentence is grammatically correct?",
    opts: ["I have seen him yesterday.", "I saw him yesterday.", "I have saw him yesterday.", "I had saw him yesterday."],
    ans: 1,
    exp: "<strong>'Yesterday'</strong> is a specific, completed time reference, so <strong>Simple Past</strong> is required: 'I saw him yesterday.' Present Perfect ('have seen') cannot be used with definite past time expressions like yesterday, last week, in 2010."
  },
  {
    cat: "Tenses",
    q: "He <span class='highlight'>has been reading</span> since morning. — What does 'since' signal in this tense?",
    opts: ["Duration with a specific start point", "A repeated action", "A definite past time", "A future arrangement"],
    ans: 0,
    exp: "'<strong>Since</strong>' marks the <em>starting point</em> of an action that continues to the present. Used with Present Perfect and Present Perfect Continuous. Compare: '<strong>for</strong>' + duration (for two hours); '<strong>since</strong>' + start point (since morning)."
  },

  // CLAUSES & SENTENCE TYPES (Q14–23)
  {
    cat: "Clauses",
    q: "How many clauses does this sentence have: 'The moon was bright.'?",
    opts: ["Zero", "One", "Two", "Three"],
    ans: 1,
    exp: "<strong>One clause</strong> — this is a simple sentence with a single subject ('the moon') and verb ('was'). A simple sentence contains exactly one independent clause and no dependent clauses."
  },
  {
    cat: "Clauses",
    q: "Identify the sentence type: 'She studied hard because she wanted to pass, and she succeeded.'",
    opts: ["Simple sentence", "Compound sentence", "Complex sentence", "Compound-Complex sentence"],
    ans: 3,
    exp: "<strong>Compound-Complex</strong>: contains at least two independent clauses ('She studied hard' + 'she succeeded') AND at least one dependent clause ('because she wanted to pass'). It combines features of both compound and complex sentences."
  },
  {
    cat: "Clauses",
    q: "In '<span class='highlight'>Can you tell me what languages he speaks</span>?' — the highlighted part contains what type of clause?",
    opts: ["Coordinate Clause", "Main Clause only", "A subordinate clause introduced by the relative adjective 'what'", "A compound clause"],
    ans: 2,
    exp: "'<strong>what languages he speaks</strong>' is a <strong>subordinate clause</strong> introduced by the relative adjective 'what'. 'What' modifies 'languages' (noun) and introduces the embedded clause inside the main question."
  },
  {
    cat: "Clauses",
    q: "Which of the following is NOT a subordinating conjunction?",
    opts: ["Although", "Whenever", "But", "Because"],
    ans: 2,
    exp: "'<strong>But</strong>' is a <em>coordinating conjunction</em> (part of FANBOYS), not a subordinating one. Coordinating conjunctions join independent clauses of equal rank. Subordinating conjunctions (although, whenever, because, if, when) introduce dependent clauses."
  },
  {
    cat: "Clauses",
    q: "'<span class='highlight'>They rested</span> when evening came.' — Which part is the main clause?",
    opts: ["when evening came", "They rested", "evening came", "when evening"],
    ans: 1,
    exp: "<strong>'They rested'</strong> is the main (independent) clause — it expresses a complete thought and can stand alone as a sentence. 'When evening came' is the subordinate clause (introduced by 'when') — it cannot stand alone."
  },
  {
    cat: "Clauses",
    q: "A <strong>simple sentence</strong> contains:",
    opts: ["One independent clause and one dependent clause", "Two independent clauses", "Only one independent clause with no dependent clauses", "At least three clauses"],
    ans: 2,
    exp: "A <strong>simple sentence</strong> has exactly <em>one independent clause</em> and no dependent clauses. E.g., 'The moon was bright.' It may have modifiers and phrases, but only one subject-verb core."
  },
  {
    cat: "Clauses",
    q: "What makes 'when evening came' a subordinate clause?",
    opts: ["It has no verb", "It is introduced by 'when' and cannot stand alone as a complete sentence", "It has two subjects", "It contains a modal verb"],
    ans: 1,
    exp: "A subordinate clause has a subject and verb but is introduced by a <strong>subordinating conjunction</strong> ('when') and <em>cannot stand alone</em>. 'When evening came' — can you say this as a complete sentence? No. That is what makes it dependent."
  },
  {
    cat: "Clauses",
    q: "'Whatever decision you take, I can support you.' — This is an example of a:",
    opts: ["Compound sentence", "Simple sentence", "Complex sentence", "Coordinate clause"],
    ans: 2,
    exp: "<strong>Complex sentence</strong>: 'Whatever decision you take' is a subordinate clause (dependent); 'I can support you' is the main clause (independent). The relative adjective 'whatever' introduces the dependent clause."
  },
  {
    cat: "Clauses",
    q: "Coordinate clauses are joined by coordinating conjunctions. Which set below are ALL coordinating conjunctions?",
    opts: ["When, if, because, although", "And, but, so, or", "Since, until, unless, while", "Who, which, that, where"],
    ans: 1,
    exp: "<strong>And, but, so, or</strong> are all coordinating conjunctions (FANBOYS: For, And, Nor, But, Or, Yet, So). They join clauses of equal grammatical rank. The other options are subordinating conjunctions or relative pronouns."
  },
  {
    cat: "Clauses",
    q: "Which sentence contains a <strong>relative adjective</strong>?",
    opts: ["He came when I called.", "She doesn't know which road to take.", "They left because it was late.", "I stayed although it was cold."],
    ans: 1,
    exp: "'<strong>which road</strong>' — 'which' is a <strong>relative adjective</strong> modifying the noun 'road'. Compare: 'Which did she take?' (relative pronoun — replaces noun) vs 'which road' (relative adjective — modifies noun)."
  },
  {
    cat: "Clauses",
    q: "How many independent clauses does a compound sentence have?",
    opts: ["Zero", "Exactly one", "Two or more", "It depends on the subordinating conjunction"],
    ans: 2,
    exp: "A <strong>compound sentence</strong> has <em>two or more independent clauses</em> joined by coordinating conjunctions or a semicolon. Crucially, it contains <em>no dependent clauses</em> — that would make it complex or compound-complex."
  },

  // TYPES OF VERBS (Q24–33)
  {
    cat: "Types of Verbs",
    q: "'Alicia <span class='highlight'>has not spoken</span> to me for a week.' — 'has' is functioning as:",
    opts: ["A linking verb", "A stative verb", "An auxiliary (helping) verb", "A modal verb"],
    ans: 2,
    exp: "<strong>Auxiliary verb</strong>: 'has' helps form the Present Perfect tense and the negative construction. Auxiliary verbs (be, do, have) are always conjugated and work with a main verb to express tense, mood, or voice."
  },
  {
    cat: "Types of Verbs",
    q: "Which sentence contains a <strong>linking verb</strong>?",
    opts: ["She runs every morning.", "He seems very tired today.", "They built a new house.", "I moved out last month."],
    ans: 1,
    exp: "'<strong>Seems</strong>' is a linking verb — it connects the subject ('he') to the subject complement ('very tired'). Common linking verbs: be, seem, become, feel, appear, look, smell, taste, sound."
  },
  {
    cat: "Types of Verbs",
    q: "Why can't we say '<span class='highlight'>X She is knowing the answer</span>'?",
    opts: ["'Know' is a transitive verb", "'Know' is a stative verb — stative verbs cannot be used in continuous tenses", "'Know' is an irregular verb", "'Know' is a modal verb"],
    ans: 1,
    exp: "<strong>Stative verbs</strong> describe mental states, emotions, or perceptions and <em>cannot be used in progressive tenses</em>. 'Know' describes a mental state. Correct form: 'She knows the answer.' Other examples: believe, love, hate, seem, belong."
  },
  {
    cat: "Types of Verbs",
    q: "'Talia <span class='highlight'>ought to</span> perform at the talent show.' — 'ought to' is a:",
    opts: ["Phrasal verb", "Dynamic verb", "Modal verb", "Linking verb"],
    ans: 2,
    exp: "<strong>Modal verb</strong>: 'ought to' expresses obligation or recommendation. It functions like other modals (should, must) but always takes 'to'. Modal verbs do not change form based on subject. Other modals: can, could, may, might, will, would."
  },
  {
    cat: "Types of Verbs",
    q: "Which of these is a <strong>phrasal verb</strong>?",
    opts: ["Run", "Is running", "Give up", "Has run"],
    ans: 2,
    exp: "<strong>'Give up'</strong> = phrasal verb (verb + preposition/adverb) meaning 'to quit or stop'. The combined meaning is independent of the original words. Other examples: break down, look up, turn off, come across, move out."
  },
  {
    cat: "Types of Verbs",
    q: "'Did you <span class='highlight'>enjoy</span> the meal?' — 'did' here is:",
    opts: ["A modal verb", "A main verb", "An auxiliary verb used to form a question", "A linking verb"],
    ans: 2,
    exp: "<strong>Auxiliary 'do/did'</strong> is used to form questions and negatives in Simple Past and Simple Present. 'Did' is the past form. The main verb ('enjoy') remains in its base form (V1) after the auxiliary."
  },
  {
    cat: "Types of Verbs",
    q: "Which sentence contains a <strong>dynamic (action) verb</strong> used in continuous form correctly?",
    opts: ["She is believing in herself.", "He is knowing the truth.", "They are building a new school.", "I am belonging to the club."],
    ans: 2,
    exp: "'<strong>Building</strong>' is a <strong>dynamic (action) verb</strong> — it describes a specific, ongoing physical activity and can correctly be used in the continuous tense. Believe, know, and belong are stative verbs and cannot take the continuous form."
  },
  {
    cat: "Types of Verbs",
    q: "Tina <span class='highlight'>will have finished</span> her course by the end of next month. — 'finished' here is the past participle of a:",
    opts: ["Modal verb", "Irregular verb", "Regular verb", "Stative verb"],
    ans: 2,
    exp: "<strong>Regular verb</strong>: 'finish → finished → finished'. Regular verbs form both simple past and past participle by adding '-ed'. This sentence uses Future Perfect tense (will have + V3)."
  },
  {
    cat: "Types of Verbs",
    q: "Which of these pairs shows a verb being used first as a <strong>linking verb</strong>, then as an <strong>action verb</strong>?",
    opts: ["'She runs' / 'She ran'", "'The soup smells good' / 'She smells the soup'", "'He has gone' / 'He goes'", "'I believe' / 'I am believing'"],
    ans: 1,
    exp: "'<strong>The soup smells good</strong>' — 'smells' is a <strong>linking verb</strong> (connects subject to complement 'good'). '<strong>She smells the soup</strong>' — 'smells' is an <strong>action verb</strong> (she is actively sniffing it). Most linking verbs can double as action verbs."
  },
  {
    cat: "Types of Verbs",
    q: "'I <span class='highlight'>had swum</span> almost a mile when the island came into view.' — 'swum' is:",
    opts: ["Simple past of 'swim'", "Past participle of the irregular verb 'swim'", "Present participle of 'swim'", "Past participle of a regular verb"],
    ans: 1,
    exp: "'<strong>Swum</strong>' is the <strong>past participle</strong> of the <strong>irregular verb</strong> 'swim'. Conjugation: swim (base) → swam (simple past) → swum (past participle). Used here in Past Perfect: had + swum."
  },

  // PARTS OF SPEECH / NOUNS & ADJECTIVES (Q34–37)
  {
    cat: "Parts of Speech",
    q: "A verb is defined as:",
    opts: ["A word that describes a noun", "A word that describes what the subject is doing — indicating actions, occurrences, or states of being", "A word that joins clauses", "A word that replaces a noun"],
    ans: 1,
    exp: "A <strong>verb</strong> describes what the subject <em>does, experiences, or is</em>. Verbs indicate physical actions (run, kick), mental actions (think, believe), occurrences (happen, become), and states of being (is, seem, belong)."
  },
  {
    cat: "Parts of Speech",
    q: "In 'She is <span class='highlight'>proud</span>', 'proud' is an adjective functioning as a:",
    opts: ["Attributive adjective (before a noun)", "Subject complement (after a linking verb)", "Adverb modifying a verb", "Object complement"],
    ans: 1,
    exp: "'Proud' here is a <strong>subject complement (predicative adjective)</strong> — it follows the linking verb 'is' and describes the subject 'she'. Contrast with attributive use: 'She is a <em>proud</em> person' (adjective before noun)."
  },
  {
    cat: "Parts of Speech",
    q: "How many tenses exist in English <strong>Active Voice</strong> according to your course material?",
    opts: ["8", "10", "12", "16"],
    ans: 2,
    exp: "According to the course material, English Active Voice has <strong>12 tenses</strong>: 4 present (Indefinite, Continuous, Perfect, Perfect Continuous), 4 past, and 4 future. Passive Voice has only 8 tenses."
  },
  {
    cat: "Parts of Speech",
    q: "Which word in this sentence is functioning as a <strong>relative adjective</strong>: 'I shall encourage you, whichever career you choose.'?",
    opts: ["I", "shall", "whichever", "choose"],
    ans: 2,
    exp: "<strong>'Whichever'</strong> is the relative adjective — it modifies the noun 'career' (whichever career) and simultaneously introduces the subordinate clause 'whichever career you choose'. Relative adjectives: what, which, whatever, whichever."
  },

  // VOCABULARY (Q38–40)
  {
    cat: "Vocabulary",
    q: "Which sentence uses <strong>'shriek'</strong> correctly?",
    opts: ["She shrieked calmly at the good news.", "He shrieked with laughter when he heard the joke.", "The shriek was very silent.", "She shrieked the book onto the shelf."],
    ans: 1,
    exp: "<strong>Shriek</strong> (verb/noun): to make a loud, high-pitched cry or sound, usually from shock, fear, or excitement. E.g., 'She shrieked in terror.' / 'We heard a shriek from the next room.' Synonym: scream, screech."
  },
  {
    cat: "Vocabulary",
    q: "'He <span class='highlight'>tempted</span> her with the offer of a promotion.' — What does 'tempt' mean?",
    opts: ["To threaten someone forcefully", "To entice or attract someone toward something, often something they should resist", "To punish someone for a mistake", "To ignore someone deliberately"],
    ans: 1,
    exp: "<strong>Tempt</strong> (verb): to entice or attract someone toward doing something, often something they find hard to resist. E.g., 'Don't tempt me with chocolate.' / 'He was tempted to quit.' Noun form: temptation."
  },
  {
    cat: "Vocabulary",
    q: "Which sentence uses <strong>'inhabit'</strong> correctly?",
    opts: ["She inhabited the book in one evening.", "Many rare species inhabit the rainforest.", "He inhabited his homework quickly.", "They inhabited a loud argument."],
    ans: 1,
    exp: "<strong>Inhabit</strong> (verb): to live in or occupy a place as a resident or habitat. Used for both people and animals. E.g., 'Thousands of species inhabit the ocean.' / 'The island is inhabited by a small community.' Synonym: occupy, dwell in."
  }
];
