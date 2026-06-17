// Bundled daily-verse rotation (BSB text, verbatim). LOCAL ONLY — no AI.
// Today's verse is chosen deterministically by day-of-year over this list, so it
// is identical for everyone on a given day and works fully offline. A future
// server pack can extend/override this via cache; the bundle is the fallback.
// SAFETY: never paraphrase `text`; it must stay verbatim BSB with exact citation.

export type DailyVerse = {
  ref: string;
  book: string;
  chapter: number;
  verse: number;
  text: string;
  thought: string;
};

export const DAILY_VERSES: DailyVerse[] = [
  {
    "ref": "John 3:16",
    "book": "John",
    "chapter": 3,
    "verse": 16,
    "text": "For God so loved the world that He gave His one and only Son, that everyone who believes in Him shall not perish but have eternal life.",
    "thought": "God's love is not earned but given. Receive it today."
  },
  {
    "ref": "Psalms 23:1",
    "book": "Psalms",
    "chapter": 23,
    "verse": 1,
    "text": "A Psalm of David. The LORD is my shepherd; I shall not want.",
    "thought": "If the LORD shepherds you, you lack nothing that you truly need."
  },
  {
    "ref": "Philippians 4:13",
    "book": "Philippians",
    "chapter": 4,
    "verse": 13,
    "text": "I can do all things through Christ who gives me strength.",
    "thought": "Strength for today comes from Christ, not from yourself."
  },
  {
    "ref": "Proverbs 3:5",
    "book": "Proverbs",
    "chapter": 3,
    "verse": 5,
    "text": "Trust in the LORD with all your heart, and lean not on your own understanding;",
    "thought": "Trust is choosing God's wisdom over your own understanding."
  },
  {
    "ref": "Isaiah 40:31",
    "book": "Isaiah",
    "chapter": 40,
    "verse": 31,
    "text": "But those who wait upon the LORD will renew their strength; they will mount up with wings like eagles; they will run and not grow weary, they will walk and not faint.",
    "thought": "Waiting on God is not wasted time; it renews your strength."
  },
  {
    "ref": "Joshua 1:9",
    "book": "Joshua",
    "chapter": 1,
    "verse": 9,
    "text": "Have I not commanded you to be strong and courageous? Do not be afraid; do not be discouraged, for the LORD your God is with you wherever you go.”",
    "thought": "Courage grows when you remember God goes with you."
  },
  {
    "ref": "Psalms 46:1",
    "book": "Psalms",
    "chapter": 46,
    "verse": 1,
    "text": "For the choirmaster. Of the sons of Korah. According to Alamoth. A song. God is our refuge and strength, an ever-present help in times of trouble.",
    "thought": "God is not distant in trouble; He is a present help."
  },
  {
    "ref": "Romans 8:28",
    "book": "Romans",
    "chapter": 8,
    "verse": 28,
    "text": "And we know that God works all things together for the good of those who love Him, who are called according to His purpose.",
    "thought": "God weaves even hard things toward good for those who love Him."
  },
  {
    "ref": "Matthew 11:28",
    "book": "Matthew",
    "chapter": 11,
    "verse": 28,
    "text": "Come to Me, all you who are weary and burdened, and I will give you rest.",
    "thought": "Bring your weariness to Jesus and find real rest."
  },
  {
    "ref": "Jeremiah 29:11",
    "book": "Jeremiah",
    "chapter": 29,
    "verse": 11,
    "text": "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, to give you a future and a hope.",
    "thought": "God's plans for you carry hope, not harm."
  },
  {
    "ref": "Psalms 119:105",
    "book": "Psalms",
    "chapter": 119,
    "verse": 105,
    "text": "Your word is a lamp to my feet and a light to my path.",
    "thought": "God's Word lights the next step when the path is dark."
  },
  {
    "ref": "Philippians 4:6",
    "book": "Philippians",
    "chapter": 4,
    "verse": 6,
    "text": "Be anxious for nothing, but in everything, by prayer and petition, with thanksgiving, present your requests to God.",
    "thought": "Trade anxiety for prayer; tell God everything."
  },
  {
    "ref": "Psalms 27:1",
    "book": "Psalms",
    "chapter": 27,
    "verse": 1,
    "text": "Of David. The LORD is my light and my salvation—whom shall I fear? The LORD is the stronghold of my life—whom shall I dread?",
    "thought": "With the LORD as your light, fear loses its grip."
  },
  {
    "ref": "Lamentations 3:22",
    "book": "Lamentations",
    "chapter": 3,
    "verse": 22,
    "text": "Because of the loving devotion of the LORD we are not consumed, for His mercies never fail.",
    "thought": "Each morning is fresh proof that His mercy has not run out."
  },
  {
    "ref": "Galatians 5:22",
    "book": "Galatians",
    "chapter": 5,
    "verse": 22,
    "text": "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness,",
    "thought": "The Spirit grows fruit in you that no effort can fake."
  },
  {
    "ref": "Psalms 121:1",
    "book": "Psalms",
    "chapter": 121,
    "verse": 1,
    "text": "A song of ascents. I lift up my eyes to the hills. From where does my help come?",
    "thought": "Lift your eyes; your help comes from the Maker of heaven."
  },
  {
    "ref": "Isaiah 41:10",
    "book": "Isaiah",
    "chapter": 41,
    "verse": 10,
    "text": "Do not fear, for I am with you; do not be afraid, for I am your God. I will strengthen you; I will surely help you; I will uphold you with My righteous right hand.",
    "thought": "You are held by the hand that upholds the universe."
  },
  {
    "ref": "Romans 12:2",
    "book": "Romans",
    "chapter": 12,
    "verse": 2,
    "text": "Do not be conformed to this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what is the good, pleasing, and perfect will of God.",
    "thought": "A renewed mind reshapes how you see everything."
  },
  {
    "ref": "Psalms 34:8",
    "book": "Psalms",
    "chapter": 34,
    "verse": 8,
    "text": "Taste and see that the LORD is good; blessed is the man who takes refuge in Him!",
    "thought": "Taste and see for yourself how good the LORD is."
  },
  {
    "ref": "2 Corinthians 5:7",
    "book": "2 Corinthians",
    "chapter": 5,
    "verse": 7,
    "text": "For we walk by faith, not by sight.",
    "thought": "Faith walks forward even when sight cannot."
  },
  {
    "ref": "Matthew 6:33",
    "book": "Matthew",
    "chapter": 6,
    "verse": 33,
    "text": "But seek first the kingdom of God and His righteousness, and all these things will be added unto you.",
    "thought": "Seek God first and watch the rest fall into place."
  },
  {
    "ref": "Psalms 37:4",
    "book": "Psalms",
    "chapter": 37,
    "verse": 4,
    "text": "Delight yourself in the LORD, and He will give you the desires of your heart.",
    "thought": "Delight in God and your desires begin to align with His."
  },
  {
    "ref": "Hebrews 11:1",
    "book": "Hebrews",
    "chapter": 11,
    "verse": 1,
    "text": "Now faith is the assurance of what we hope for and the certainty of what we do not see.",
    "thought": "Faith holds firmly to what hope already sees."
  },
  {
    "ref": "Zephaniah 3:17",
    "book": "Zephaniah",
    "chapter": 3,
    "verse": 17,
    "text": "The LORD your God is among you; He is mighty to save. He will rejoice over you with gladness; He will quiet you with His love; He will rejoice over you with singing.”",
    "thought": "God doesn't merely tolerate you; He rejoices over you."
  },
  {
    "ref": "Psalms 91:1",
    "book": "Psalms",
    "chapter": 91,
    "verse": 1,
    "text": "He who dwells in the shelter of the Most High will abide in the shadow of the Almighty.",
    "thought": "Shelter in God's presence is the safest place to dwell."
  },
  {
    "ref": "1 Corinthians 13:4",
    "book": "1 Corinthians",
    "chapter": 13,
    "verse": 4,
    "text": "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
    "thought": "Love is patient and kind before it is anything else."
  },
  {
    "ref": "Proverbs 18:10",
    "book": "Proverbs",
    "chapter": 18,
    "verse": 10,
    "text": "The name of the LORD is a strong tower; the righteous run to it and are safe.",
    "thought": "God's name is a tower; run to it and be safe."
  },
  {
    "ref": "John 14:27",
    "book": "John",
    "chapter": 14,
    "verse": 27,
    "text": "Peace I leave with you; My peace I give to you. I do not give to you as the world gives. Do not let your hearts be troubled; do not be afraid.",
    "thought": "Christ gives a peace the world can neither give nor take."
  },
  {
    "ref": "Romans 5:8",
    "book": "Romans",
    "chapter": 5,
    "verse": 8,
    "text": "But God proves His love for us in this: While we were still sinners, Christ died for us.",
    "thought": "Christ died for you while you were still far off."
  },
  {
    "ref": "Ephesians 2:8",
    "book": "Ephesians",
    "chapter": 2,
    "verse": 8,
    "text": "For it is by grace you have been saved through faith, and this not from yourselves; it is the gift of God,",
    "thought": "Grace, not effort, saves you. It is God's gift."
  },
  {
    "ref": "Psalms 139:14",
    "book": "Psalms",
    "chapter": 139,
    "verse": 14,
    "text": "I praise You, for I am fearfully and wonderfully made. Marvelous are Your works, and I know this very well.",
    "thought": "You are fearfully and wonderfully made by God."
  },
  {
    "ref": "1 Peter 5:7",
    "book": "1 Peter",
    "chapter": 5,
    "verse": 7,
    "text": "Cast all your anxiety on Him, because He cares for you.",
    "thought": "Cast your cares on Him, because He cares for you."
  },
  {
    "ref": "Matthew 5:16",
    "book": "Matthew",
    "chapter": 5,
    "verse": 16,
    "text": "In the same way, let your light shine before men, that they may see your good deeds and glorify your Father in heaven.",
    "thought": "Let your good works point others toward your Father."
  },
  {
    "ref": "John 8:12",
    "book": "John",
    "chapter": 8,
    "verse": 12,
    "text": "Once again, Jesus spoke to the people and said, “I am the light of the world. Whoever follows Me will never walk in the darkness, but will have the light of life.”",
    "thought": "Follow the Light of the world and never walk in darkness."
  },
  {
    "ref": "Psalms 103:12",
    "book": "Psalms",
    "chapter": 103,
    "verse": 12,
    "text": "As far as the east is from the west, so far has He removed our transgressions from us.",
    "thought": "Your forgiven sins are removed as far as east from west."
  },
  {
    "ref": "Isaiah 26:3",
    "book": "Isaiah",
    "chapter": 26,
    "verse": 3,
    "text": "You will keep in perfect peace the steadfast of mind, because he trusts in You.",
    "thought": "Minds fixed on God are kept in perfect peace."
  },
  {
    "ref": "Romans 15:13",
    "book": "Romans",
    "chapter": 15,
    "verse": 13,
    "text": "Now may the God of hope fill you with all joy and peace as you believe in Him, so that you may overflow with hope by the power of the Holy Spirit.",
    "thought": "May the God of hope fill you with joy and peace."
  },
  {
    "ref": "Colossians 3:23",
    "book": "Colossians",
    "chapter": 3,
    "verse": 23,
    "text": "Whatever you do, work at it with your whole being, as for the Lord and not for men,",
    "thought": "Whatever you do, work at it as for the Lord."
  },
  {
    "ref": "2 Timothy 1:7",
    "book": "2 Timothy",
    "chapter": 1,
    "verse": 7,
    "text": "For God has not given us a spirit of fear, but of power, love, and self-control.",
    "thought": "God gave you a spirit of power, love, and self-control."
  },
  {
    "ref": "Hebrews 13:8",
    "book": "Hebrews",
    "chapter": 13,
    "verse": 8,
    "text": "Jesus Christ is the same yesterday and today and forever.",
    "thought": "Jesus Christ is the same yesterday, today, and forever."
  },
  {
    "ref": "Psalms 16:11",
    "book": "Psalms",
    "chapter": 16,
    "verse": 11,
    "text": "You have made known to me the path of life; You will fill me with joy in Your presence, with eternal pleasures at Your right hand.",
    "thought": "In God's presence is fullness of joy."
  },
  {
    "ref": "Micah 6:8",
    "book": "Micah",
    "chapter": 6,
    "verse": 8,
    "text": "He has shown you, O man, what is good. And what does the LORD require of you but to act justly, to love mercy, and to walk humbly with your God?",
    "thought": "Act justly, love mercy, and walk humbly with your God."
  },
  {
    "ref": "John 16:33",
    "book": "John",
    "chapter": 16,
    "verse": 33,
    "text": "I have told you these things so that in Me you may have peace. In the world you will have tribulation. But take courage; I have overcome the world!”",
    "thought": "Take heart: Christ has overcome the world."
  },
  {
    "ref": "Psalms 51:10",
    "book": "Psalms",
    "chapter": 51,
    "verse": 10,
    "text": "Create in me a clean heart, O God, and renew a right spirit within me.",
    "thought": "Ask God for a clean heart and a renewed spirit."
  },
  {
    "ref": "Galatians 2:20",
    "book": "Galatians",
    "chapter": 2,
    "verse": 20,
    "text": "I have been crucified with Christ, and I no longer live, but Christ lives in me. The life I live in the body, I live by faith in the Son of God, who loved me and gave Himself up for me.",
    "thought": "The life you now live, you live by faith in Christ."
  },
  {
    "ref": "Deuteronomy 31:6",
    "book": "Deuteronomy",
    "chapter": 31,
    "verse": 6,
    "text": "Be strong and courageous; do not be afraid or terrified of them, for it is the LORD your God who goes with you; He will never leave you nor forsake you.”",
    "thought": "Be strong; the LORD will never leave you nor forsake you."
  },
  {
    "ref": "James 1:5",
    "book": "James",
    "chapter": 1,
    "verse": 5,
    "text": "Now if any of you lacks wisdom, he should ask God, who gives generously to all without finding fault, and it will be given to him.",
    "thought": "Lacking wisdom? Ask God, who gives generously."
  },
  {
    "ref": "Psalms 118:24",
    "book": "Psalms",
    "chapter": 118,
    "verse": 24,
    "text": "This is the day that the LORD has made; we will rejoice and be glad in it.",
    "thought": "This is the day the LORD has made; rejoice in it."
  },
  {
    "ref": "1 John 4:19",
    "book": "1 John",
    "chapter": 4,
    "verse": 19,
    "text": "We love because He first loved us.",
    "thought": "We love because He first loved us."
  },
  {
    "ref": "Proverbs 16:3",
    "book": "Proverbs",
    "chapter": 16,
    "verse": 3,
    "text": "Commit your works to the LORD and your plans will be achieved.",
    "thought": "Commit your works to the LORD and your plans take hold."
  }
];
