const rawSinsData= [
  { "id": 21, "act": "oppression (zulm)", "reference": "Quran 42:42 - 'The way is only against those who oppress people and tyrannize on the earth without right; those will have a painful punishment.'; Hadith - Sahih Muslim 2578: 'Beware of the supplication of the oppressed, for there is no barrier between it and Allah.'", "type": "sin" },
  { "id": 22, "act": "suicide", "reference": "Quran 4:29 - 'Do not kill yourselves; indeed, Allah is to you ever Merciful.'; Hadith - Sahih Bukhari 1365: 'Whoever kills himself with something will be punished with it on the Day of Resurrection.'", "type": "sin" },
  { "id": 23, "act": "breaking family ties", "reference": "Quran 47:22-23 - 'Would you then, if you were given authority, spread corruption in the land and sever your ties of kinship? Those are the ones Allah has cursed.'; Hadith - Sahih Muslim 2556: 'The one who severs family ties will not enter Paradise.'", "type": "sin" },
  { "id": 24, "act": "envy (hasad)", "reference": "Quran 113:5 - 'And from the evil of an envier when he envies.'; Hadith - Sahih Muslim 2564: 'Beware of envy, for it consumes good deeds like fire consumes wood.'", "type": "sin" },
  { "id": 25, "act": "spying on others", "reference": "Quran 49:12 - 'And do not spy or backbite one another.'; Hadith - Sahih Bukhari 6265: 'Beware of suspicion, for suspicion is the worst of false tales.'", "type": "sin" },
  { "id": 26, "act": "being ungrateful to Allah", "reference": "Quran 14:7 - 'If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.'; Hadith - Sahih Muslim 2807: 'He who does not thank people does not thank Allah.'", "type": "sin" },
  { "id": 27, "act": "falsely swearing by Allah", "reference": "Quran 16:94 - 'And do not take your oaths as [means of] deceit between you.'; Hadith - Sahih Bukhari 6659: 'Whoever swears by other than Allah has committed shirk.'", "type": "sin" },
  { "id": 28, "act": "delaying prayer intentionally", "reference": "Quran 107:4-5 - 'So woe to those who pray but are heedless of their prayer.'; Hadith - Sahih Muslim 626: 'The covenant between us and them is prayer; whoever abandons it has disbelieved.'", "type": "sin" },
  { "id": 29, "act": "breaking a treaty or agreement", "reference": "Quran 8:56 - 'Those with whom you made a treaty, then they break their covenant every time.'; Hadith - Sahih Bukhari 3166: 'Whoever breaks a promise will have a flag of treachery raised for him on the Day of Judgment.'", "type": "sin" },
  { "id": 30, "act": "withholding knowledge", "reference": "Hadith - Abu Dawood 3658: 'Whoever is asked about knowledge and conceals it will be bridled with fire on the Day of Judgment.'; Quran 2:159 - 'Those who conceal what We sent down of clear proofs… those Allah has cursed.'", "type": "sin" },
  { "id": 31, "act": "gossiping (namimah)", "reference": "Hadith - Sahih Muslim 105 - 'The tale-bearer will not enter Paradise.'; Quran 49:12 - 'And do not spy or backbite one another.'", "type": "sin" },
  { "id": 32, "act": "falsely accusing someone", "reference": "Quran 24:23 - 'Indeed, those who accuse chaste, unaware, believing women are cursed in this world and the Hereafter.'; Hadith - Sahih Bukhari 4750: 'Avoid the seven destructive sins,' including false accusation.", "type": "sin" },
  { "id": 33, "act": "disobeying one's husband", "reference": "Hadith - Tirmidhi 1161: 'If a woman prays her five prayers, fasts her month, guards her chastity, and obeys her husband, she will enter Paradise.' (Implies disobedience is sinful in context).", "type": "sin" },
  { "id": 34, "act": "neglecting the rights of neighbors", "reference": "Hadith - Sahih Bukhari 6014: 'He who harms his neighbor is not a believer.'; Quran 4:36 - 'Worship Allah and do good to neighbors.'", "type": "sin" },
  { "id": 35, "act": "deliberate misinterpretation of the Quran", "reference": "Quran 3:7 - 'But those in whose hearts is deviation pursue that which is metaphorical, seeking discord.'; Hadith - Sahih Bukhari 4547: 'Whoever interprets the Quran with his opinion will take his place in the Fire.'", "type": "sin" },
  { "id": 36, "act": "being two-faced", "reference": "Hadith - Sahih Bukhari 6058: 'The worst of people is the two-faced person.'; Quran 4:145 - 'The hypocrites will be in the lowest depths of the Fire.'", "type": "sin" },
  { "id": 37, "act": "mistreating orphans", "reference": "Quran 93:9 - 'So as for the orphan, do not oppress him.'; Hadith - Sahih Bukhari 6008: 'The one who looks after an orphan and I will be like this in Paradise,' (showing two fingers together).", "type": "sin" },
  { "id": 38, "act": "violating trust (amanah)", "reference": "Quran 8:27 - 'O you who have believed, do not betray Allah and the Messenger or betray your trusts.'; Hadith - Sahih Muslim 145: 'There is no faith for one who has no trustworthiness.'", "type": "sin" },
  { "id": 39, "act": "showing off in worship (riya)", "reference": "Quran 107:6 - 'Those who make show [of their deeds].'; Hadith - Sahih Muslim 2986: 'The smallest amount of showing off is shirk.'", "type": "sin" },
  { "id": 40, "act": "refusing to give water to the thirsty", "reference": "Hadith - Sahih Bukhari 2363: 'A woman was punished for denying water to her cat.'; Quran 7:85 - Encourages fairness and kindness.", "type": "sin" },
  { "id": 41, "act": "abandoning jihad (struggle in the way of Allah)", "reference": "Quran 9:38 - 'O you who have believed, what is [the matter] with you that you are reluctant in the cause of Allah?'; Hadith - Sahih Muslim 1910: 'Whoever dies without fighting or intending to fight dies on a branch of hypocrisy.'", "type": "sin" },
  { "id": 42, "act": "wearing silk or gold (for men)", "reference": "Hadith - Sahih Bukhari 5831: 'Gold and silk are forbidden for the males of my Ummah.'", "type": "sin" },
  { "id": 43, "act": "being miserly (bukhl)", "reference": "Quran 92:8-10 - 'But he who is a greedy miser and thinks himself self-sufficient… We will ease him toward difficulty.'; Hadith - Sahih Bukhari 6443: 'Beware of miserliness, for it destroyed those before you.'", "type": "sin" },
  { "id": 44, "act": "harming animals", "reference": "Hadith - Sahih Muslim 1958: 'A woman entered Hell for mistreating a cat.'; Quran 6:38 - Animals are communities like humans.", "type": "sin" },
  { "id": 45, "act": "making fun of religious matters", "reference": "Quran 9:65-66 - 'They say, \"We were only jesting,\" but Allah will take them to task.'; Hadith - Tirmidhi 2315: 'Woe to the one who lies to make people laugh.'", "type": "sin" },
  { "id": 46, "act": "cursing others", "reference": "Hadith - Sahih Muslim 2599: 'A believer does not curse.'; Quran 49:11 - 'Let not a people ridicule another people.'", "type": "sin" },
  { "id": 47, "act": "listening to gossip", "reference": "Hadith - Abu Dawood 4874: 'The listener of gossip is as sinful as the gossiper.'; Quran 49:12 - 'Avoid much suspicion.'", "type": "sin" },
  { "id": 48, "act": "making statues or pictures of living beings", "reference": "Hadith - Sahih Bukhari 5950: 'Those who make images will be severely punished.'; Some scholars allow non-worship images.", "type": "sin" },
  { "id": 49, "act": "imitating the opposite gender", "reference": "Hadith - Sahih Bukhari 5885: 'Allah curses men who imitate women and women who imitate men.'", "type": "sin" },
  { "id": 50, "act": "deliberately missing fasting in Ramadan", "reference": "Hadith - Tirmidhi 723: 'Whoever breaks a fast without excuse cannot make up for it.'; Quran 2:185 - Fasting is obligatory.", "type": "sin" },
  { "id": 151, "act": "wearing silk for men", "reference": "Hadith - Sahih Bukhari 5831: 'Gold and silk are forbidden for the males of my Ummah.'", "type": "sin" },
  { "id": 152, "act": "gambling", "reference": "Quran 5:90 - 'O you who have believed, indeed, intoxicants, gambling… are an abomination.'; Hadith - Sahih Muslim 1647: 'Whoever plays with dice is like one who dips his hand in swine flesh and blood.'", "type": "sin" },
  { "id": 153, "act": "lying", "reference": "Quran 22:30 - 'Avoid false statement.'; Hadith - Sahih Bukhari 6094: 'Truthfulness leads to righteousness, and lying leads to wickedness.'", "type": "sin" },
  { "id": 154, "act": "backbiting", "reference": "Quran 49:12 - 'And do not backbite one another.'; Hadith - Sahih Muslim 2589: 'Backbiting is mentioning your brother in a way he dislikes.'", "type": "sin" },
  { "id": 155, "act": "bribery", "reference": "Quran 2:188 - 'And do not consume one another’s wealth unjustly or send it to the rulers.'; Hadith - Abu Dawood 3580: 'The one who gives a bribe and the one who takes it are both in the Fire.'", "type": "sin" },
  { "id": 156, "act": "stealing", "reference": "Quran 5:38 - 'As for the thief, cut off his hand.'; Hadith - Sahih Bukhari 6787: 'The hand should be cut off for stealing a quarter of a dinar or more.'", "type": "sin" },
  { "id": 157, "act": "drinking alcohol", "reference": "Quran 5:90 - 'Intoxicants… are an abomination of Satan’s handiwork.'; Hadith - Sahih Bukhari 5589: 'Every intoxicant is khamr, and every khamr is forbidden.'", "type": "sin" },
  { "id": 158, "act": "eating pork", "reference": "Quran 2:173 - 'He has only forbidden to you… the flesh of swine.'; Hadith - Sahih Muslim 1936: 'Allah has forbidden pork.'", "type": "sin" },
  { "id": 159, "act": "disrespecting parents", "reference": "Quran 17:23 - 'Your Lord has decreed that you worship none but Him, and to parents, good treatment.'; Hadith - Sahih Bukhari 5971: 'The pleasure of Allah is in the pleasure of the parents.'", "type": "sin" },
  { "id": 160, "act": "breaking promises", "reference": "Quran 16:91 - 'Fulfill the covenant of Allah when you have taken it.'; Hadith - Sahih Muslim 108: 'The sign of a hypocrite is breaking promises.'", "type": "sin" },
  { "id": 161, "act": "missing Salah deliberately", "reference": "Hadith - Sahih Muslim 82: 'The difference between us and them is Salah; whoever abandons it has disbelieved.'; Quran 19:59 - 'Woe to those who neglect their prayers.'", "type": "sin" },
  { "id": 162, "act": "fasting in Ramadan without necessity", "reference": "Quran 2:185 - 'The month of Ramadan [is that] in which was revealed the Quran… whoever is present, let him fast.'; Hadith - Sahih Bukhari 1891: Fasting Ramadan is obligatory.", "type": "sin" },
  { "id": 163, "act": "suicide", "reference": "Quran 4:29 - 'Do not kill yourselves.'; Hadith - Sahih Bukhari 1365: 'Whoever kills himself will be punished with it in Hell.'", "type": "sin" },
  { "id": 187, "act": "using interest-based bank accounts", "reference": "Quran 2:275 - 'Allah has permitted trade and forbidden usury.'; Hadith - Sahih Muslim 1598: 'A dirham of riba is worse than 36 acts of adultery.'", "type": "sin" },
  { "id": 198, "act": "delaying Hajj without valid reason", "reference": "Quran 3:97 - 'Hajj is a duty owed to Allah by those who can afford it.'; Hadith - Sahih Bukhari 1515: 'Whoever intends Hajj should hasten to perform it.'", "type": "sin" },
  { "id": 201, "act": "arrogance (kibr)", "reference": "Quran 31:18 - 'And do not turn your cheek [in contempt] toward people.'; Hadith - Sahih Muslim 91: 'He who has an atom’s weight of arrogance in his heart will not enter Paradise.'", "type": "sin" },
  { "id": 202, "act": "cheating in trade", "reference": "Quran 83:1-3 - 'Woe to those who give less [than due].'; Hadith - Sahih Bukhari 2077: 'Whoever cheats us is not one of us.'", "type": "sin" },
  { "id": 203, "act": "consuming riba (usury)", "reference": "Quran 2:275 - 'Allah has permitted trade and forbidden usury.'; Hadith - Sahih Muslim 1598: 'A dirham of riba is more severe than 36 acts of adultery.'", "type": "sin" },
  { "id": 204, "act": "slandering chaste women", "reference": "Quran 24:23 - 'Indeed, those who accuse chaste, unaware, believing women are cursed.'; Hadith - Sahih Bukhari 4750: 'Avoid the seven destructive sins,' including slander.", "type": "sin" },
  { "id": 205, "act": "killing a believer", "reference": "Quran 4:93 - 'Whoever kills a believer intentionally, his recompense is Hell.'; Hadith - Sahih Bukhari 6878: 'The killing of a Muslim is greater in Allah’s sight than the destruction of the world.'", "type": "sin" },
  { "id": 71, "act": "eating chicken", "reference": "Quran 5:4 - 'Lawful to you is the good things.'; Hadith - Sahih Bukhari 5536: Chicken is permissible as food.", "type": "not sin" },
  { "id": 72, "act": "drinking coffee", "reference": "No prohibition in Quran or Hadith; permissible unless harmful.", "type": "not sin" },
  { "id": 73, "act": "using technology", "reference": "Quran 55:33 - 'O company of jinn and mankind, if you are able to pass beyond the regions of the heavens and the earth, then pass.' (Encourages use of Allah’s blessings); No prohibition in Hadith.", "type": "not sin" },
  { "id": 74, "act": "playing football", "reference": "Hadith - Sahih Bukhari 443: 'The strong believer is better than the weak one.' (Encourages physical activity); No prohibition.", "type": "not sin" },
  { "id": 75, "act": "traveling for leisure", "reference": "Quran 29:20 - 'Travel through the earth and see how He began creation.'; No prohibition in Hadith.", "type": "not sin" },
  { "id": 76, "act": "keeping pets", "reference": "Hadith - Sahih Bukhari 3318: Cats are permissible; No prohibition except for dangerous animals.", "type": "not sin" },
  { "id": 77, "act": "wearing perfume", "reference": "Hadith - Sahih Bukhari 5929: 'Perfume is something a man should wear.'", "type": "not sin" },
  { "id": 78, "act": "eating non-alcoholic chocolates", "reference": "Quran 5:4 - 'Lawful to you are the good things.'; No prohibition in Hadith.", "type": "not sin" },
  { "id": 79, "act": "drinking milk", "reference": "Quran 16:66 - 'And indeed, for you in livestock is a lesson… We give you drink from what is in their bellies.'; Hadith - Sahih Bukhari 5609: Milk is praised.", "type": "not sin" },
  { "id": 80, "act": "eating vegetables", "reference": "Quran 6:99 - 'It is He who sends down rain… producing gardens and grain.'; No prohibition in Hadith.", "type": "not sin" },
  { "id": 81, "act": "exercising", "reference": "Hadith - Sahih Bukhari 443: 'The strong believer is better than the weak one.'", "type": "not sin" },
  { "id": 82, "act": "reading books", "reference": "Quran 96:1 - 'Read in the name of your Lord.'; No prohibition in Hadith.", "type": "not sin" },
  { "id": 83, "act": "learning new skills", "reference": "Hadith - Sahih Muslim 2699: 'Seeking knowledge is an obligation upon every Muslim.'", "type": "not sin" },
  { "id": 84, "act": "helping others", "reference": "Quran 2:177 - 'Righteousness is… giving wealth to the needy.'; Hadith - Sahih Bukhari 1445: 'The best of people are those who benefit others.'", "type": "not sin" },
  { "id": 85, "act": "sleeping early", "reference": "Hadith - Sahih Bukhari 568: 'The Prophet disliked sleeping before Isha and talking after it.' (Implies early sleep is encouraged).", "type": "not sin" },
  { "id": 86, "act": "waking up early", "reference": "Hadith - Sahih Bukhari 645: 'O Allah, bless my Ummah in their early mornings.'", "type": "not sin" },
  { "id": 87, "act": "visiting family", "reference": "Quran 13:21 - 'Those who join what Allah has commanded to be joined.'; Hadith - Sahih Bukhari 5986: 'Whoever believes in Allah should honor his kin.'", "type": "not sin" },
  { "id": 88, "act": "giving charity", "reference": "Quran 2:261 - 'The example of those who spend their wealth in the way of Allah is like a seed.'; Hadith - Sahih Muslim 1017: 'Charity extinguishes sin as water extinguishes fire.'", "type": "not sin" },
  { "id": 89, "act": "driving a car", "reference": "No prohibition in Quran or Hadith; permissible as a means of transport.", "type": "not sin" },
  { "id": 90, "act": "wearing comfortable clothing", "reference": "Quran 7:26 - 'O children of Adam, We have bestowed upon you clothing…'; Hadith - Sahih Bukhari 5828: Modesty is encouraged.", "type": "not sin" },
  { "id": 91, "act": "playing chess", "reference": "No clear prohibition; Hadith - Sahih Muslim 2260 mentions dice games as disliked, but chess is debated.", "type": "not sin" },
  { "id": 92, "act": "listening to nature sounds", "reference": "Quran 17:44 - 'The seven heavens and the earth glorify Him.'; No prohibition in Hadith.", "type": "not sin" },
  { "id": 93, "act": "drinking fruit juice", "reference": "Quran 16:11 - 'He causes to grow for you fruits.'; No prohibition in Hadith.", "type": "not sin" },
  { "id": 94, "act": "eating honey", "reference": "Quran 16:69 - 'From their bellies comes a drink of varying colors, wherein is healing.'; Hadith - Sahih Bukhari 5445: 'Honey is a cure.'", "type": "not sin" },
  { "id": 95, "act": "smiling", "reference": "Hadith - Tirmidhi 1956: 'Your smile for your brother is charity.'", "type": "not sin" },
  { "id": 96, "act": "keeping a beard", "reference": "Hadith - Sahih Bukhari 5892: 'Trim the mustache and grow the beard.'", "type": "not sin" },
  { "id": 97, "act": "wearing a watch", "reference": "No prohibition in Quran or Hadith; permissible as a tool.", "type": "not sin" },
  { "id": 98, "act": "writing poetry", "reference": "Hadith - Sahih Bukhari 6150: Poetry is permissible unless it promotes evil.", "type": "not sin" },
  { "id": 99, "act": "walking in the park", "reference": "Quran 29:20 - 'Travel through the earth.'; No prohibition in Hadith.", "type": "not sin" },
  { "id": 100, "act": "taking photographs", "reference": "No clear prohibition; scholarly differences exist, but modern scholars often permit non-worship images.", "type": "not sin" },
  { "id": 101, "act": "eating with the right hand", "reference": "Hadith - Sahih Muslim 2021: 'Eat with your right hand.'", "type": "not sin" },
  { "id": 102, "act": "fasting outside Ramadan", "reference": "Hadith - Sahih Bukhari 1983: 'Whoever fasts a day for Allah’s sake, Allah will keep his face from the Fire.'", "type": "not sin" },
  { "id": 103, "act": "doing wudu", "reference": "Quran 5:6 - 'O you who have believed, when you rise to pray, wash yourselves.'; Hadith - Sahih Muslim 225: 'Wudu is purification.'", "type": "not sin" },
  { "id": 104, "act": "shaking hands", "reference": "Hadith - Sahih Bukhari 6263: 'Two Muslims who meet and shake hands have their sins forgiven.' (Within gender guidelines)", "type": "not sin" },
  { "id": 105, "act": "wearing sunglasses", "reference": "No prohibition in Quran or Hadith; permissible for protection.", "type": "not sin" },
  { "id": 106, "act": "using a mobile phone", "reference": "No prohibition in Quran or Hadith; permissible as a tool.", "type": "not sin" },
  { "id": 107, "act": "studying science", "reference": "Quran 35:28 - 'Those who have knowledge fear Allah.'; Hadith - Sahih Muslim 2699: 'Seeking knowledge is obligatory.'", "type": "not sin" },
  { "id": 108, "act": "doing household chores", "reference": "Hadith - Sahih Bukhari 536: 'The Prophet used to help his family.'", "type": "not sin" },
  { "id": 109, "act": "working for a lawful income", "reference": "Quran 62:10 - 'Seek the bounty of Allah.'; Hadith - Sahih Bukhari 2072: 'The best income is from lawful work.'", "type": "not sin" },
  { "id": 110, "act": "buying halal food", "reference": "Quran 2:168 - 'Eat of what is lawful and good.'; Hadith - Sahih Muslim 1015: 'Seek the halal.'", "type": "not sin" },
  { "id": 111, "act": "making dua", "reference": "Quran 40:60 - 'Call upon Me; I will respond.'; Hadith - Sahih Bukhari 6340: 'Dua is worship.'", "type": "not sin" },
  { "id": 112, "act": "visiting the sick", "reference": "Hadith - Sahih Bukhari 5653: 'Whoever visits a sick person, an angel calls out: Blessed be you.'", "type": "not sin" },
  { "id": 113, "act": "attending Islamic lectures", "reference": "Hadith - Sahih Muslim 2699: 'Seeking knowledge is an obligation.'", "type": "not sin" },
  { "id": 114, "act": "giving water to others", "reference": "Hadith - Sahih Muslim 224: 'The best charity is giving water.'", "type": "not sin" },
  { "id": 115, "act": "traveling for knowledge", "reference": "Hadith - Sahih Bukhari 731: 'Whoever travels a path seeking knowledge, Allah makes easy a path to Paradise.'", "type": "not sin" },
  { "id": 116, "act": "keeping good company", "reference": "Quran 18:28 - 'Keep yourself with those who call on their Lord.'; Hadith - Sahih Bukhari 6204: 'A man is on the religion of his friend.'", "type": "not sin" },
  { "id": 117, "act": "planting trees", "reference": "Hadith - Sahih Muslim 1552: 'If a Muslim plants a tree, whatever is eaten from it is charity.'", "type": "not sin" },
  { "id": 118, "act": "writing beneficial knowledge", "reference": "Quran 96:4 - 'Who taught by the pen.'; Hadith - Sahih Muslim 2699: Knowledge is encouraged.", "type": "not sin" },
  { "id": 119, "act": "wearing white clothes", "reference": "Hadith - Sahih Bukhari 5828: 'Wear white clothes, for they are the best.'", "type": "not sin" },
  { "id": 120, "act": "helping the poor", "reference": "Quran 2:177 - 'Righteousness is giving wealth to the needy.'; Hadith - Sahih Bukhari 1395: 'Whoever helps a poor person, Allah helps him.'", "type": "not sin" },
  { "id": 121, "act": "giving salaam", "reference": "Quran 4:86 - 'When you are greeted, return it with better.'; Hadith - Sahih Bukhari 6236: 'Spread the salaam.'", "type": "not sin" },
  { "id": 122, "act": "marrying", "reference": "Quran 24:32 - 'Marry those among you who are single.'; Hadith - Sahih Bukhari 5066: 'Whoever dislikes my Sunnah is not of me.'", "type": "not sin" },
  { "id": 123, "act": "loving for the sake of Allah", "reference": "Hadith - Sahih Muslim 2566: 'Those who love for Allah’s sake will be under His shade on the Day of Judgment.'", "type": "not sin" },
  { "id": 124, "act": "having patience", "reference": "Quran 2:153 - 'Indeed, Allah is with the patient.'; Hadith - Sahih Bukhari 1469: 'Patience is a light.'", "type": "not sin" },
  { "id": 125, "act": "maintaining ties of kinship", "reference": "Quran 13:21 - 'Those who join what Allah has commanded.'; Hadith - Sahih Bukhari 5986: 'Whoever maintains ties of kinship, Allah maintains ties with him.'", "type": "not sin" },
  { "id": 126, "act": "saying Alhamdulillah after sneezing", "reference": "Hadith - Sahih Bukhari 6224: 'When one sneezes, say Alhamdulillah.'", "type": "not sin" },
  { "id": 127, "act": "eating dates", "reference": "Quran 19:25 - Dates mentioned as a blessing; Hadith - Sahih Bukhari 5445: 'Whoever eats seven dates in the morning is protected.'", "type": "not sin" },
  { "id": 128, "act": "avoiding excessive speech", "reference": "Hadith - Sahih Bukhari 6475: 'Whoever believes in Allah should say good or remain silent.'", "type": "not sin" },
  { "id": 129, "act": "reciting Quran", "reference": "Quran 17:78 - 'Establish prayer and recite the Quran.'; Hadith - Sahih Muslim 789: 'The best of you are those who learn and teach the Quran.'", "type": "not sin" },
  { "id": 130, "act": "giving honest advice", "reference": "Hadith - Sahih Muslim 55: 'Religion is sincerity.'", "type": "not sin" },
  { "id": 131, "act": "protecting animals", "reference": "Hadith - Sahih Bukhari 3318: 'There is a reward for kindness to every living thing.'", "type": "not sin" },
  { "id": 132, "act": "making peace between people", "reference": "Quran 4:114 - 'There is charity in reconciling people.'; Hadith - Sahih Bukhari 2690: 'Shall I not tell you of something better than fasting? Reconciling people.'", "type": "not sin" },
  { "id": 133, "act": "writing wills", "reference": "Quran 2:180 - 'Prescribed for you when death approaches is to make a bequest.'; Hadith - Sahih Bukhari 2738: 'It is not right for a Muslim to go three nights without a will.'", "type": "not sin" },
  { "id": 134, "act": "following the Sunnah", "reference": "Quran 33:21 - 'There has certainly been for you in the Messenger an excellent pattern.'; Hadith - Sahih Bukhari 5066: 'Whoever follows my Sunnah is of me.'", "type": "not sin" },
  { "id": 164, "act": "praying in congregation", "reference": "Hadith - Sahih Bukhari 645: 'Prayer in congregation is 27 times better than praying alone.'", "type": "not sin" },
  { "id": 165, "act": "giving charity", "reference": "Quran 2:261 - 'Those who spend their wealth in Allah’s way…'; Hadith - Sahih Bukhari 1410: 'Charity does not decrease wealth.'", "type": "not sin" },
  { "id": 166, "act": "helping the poor", "reference": "Quran 76:8 - 'They feed the poor, the orphan, and the captive.'; Hadith - Sahih Muslim 1017: 'Charity extinguishes sin.'", "type": "not sin" },
  { "id": 167, "act": "respecting neighbors", "reference": "Quran 4:36 - 'Do good to neighbors.'; Hadith - Sahih Bukhari 6014: 'Jibreel kept advising me about neighbors.'", "type": "not sin" },
  { "id": 168, "act": "learning knowledge", "reference": "Quran 58:11 - 'Allah raises those who have knowledge.'; Hadith - Sahih Muslim 2699: 'Seeking knowledge is an obligation.'", "type": "not sin" },
  { "id": 176, "act": "eating at non-Muslim restaurants", "reference": "Quran 5:5 - 'The food of the People of the Book is lawful for you.'; Hadith - Sahih Bukhari 5476: Permissible if halal.", "type": "not sin" },
  { "id": 184, "act": "crying at funerals", "reference": "Hadith - Sahih Bukhari 1284: 'The Prophet wept at his son’s death.' (Allowed if not excessive)", "type": "not sin" },
  { "id": 186, "act": "keeping a beard", "reference": "Hadith - Sahih Bukhari 5892: 'Grow the beard and trim the mustache.'", "type": "not sin" },
  { "id": 191, "act": "reciting Surah Al-Kahf on Fridays", "reference": "Hadith - Tirmidhi 2891: 'Whoever recites Surah Al-Kahf on Friday will have a light between two Fridays.'", "type": "not sin" },
  { "id": 193, "act": "using cosmetics", "reference": "Quran 7:31 - 'Adorn yourselves at every place of worship.'; Hadith - Sahih Bukhari 5931: Permissible if not harmful.", "type": "not sin" },
  { "id": 194, "act": "praying with shoes on", "reference": "Hadith - Sahih Bukhari 386: 'The Prophet prayed with his shoes on.' (If clean)", "type": "not sin" },
  { "id": 196, "act": "eating food cooked by non-Muslims", "reference": "Quran 5:5 - 'The food of the People of the Book is lawful.'; Hadith - Sahih Bukhari 5476: Permissible if halal.", "type": "not sin" },
  { "id": 197, "act": "reciting Quran without Wudu", "reference": "Hadith - Tirmidhi 146: 'Only a pure person should touch the Quran.' (Recitation allowed, touching Mushaf requires Wudu)", "type": "not sin" },
  { "id": 199, "act": "reciting Darood on Fridays", "reference": "Hadith - Sahih Muslim 853: 'Send blessings on me on Friday, for it is witnessed by angels.'", "type": "not sin" },
  { "id": 200, "act": "having pet birds", "reference": "Hadith - Sahih Bukhari 3318: 'There is a reward for kindness to every living thing.'", "type": "not sin" },
  { "id": 206, "act": "seeking knowledge", "reference": "Quran 20:114 - 'My Lord, increase me in knowledge.'; Hadith - Sahih Muslim 2699: 'Seeking knowledge is an obligation upon every Muslim.'", "type": "not sin" },
  { "id": 207, "act": "maintaining hygiene", "reference": "Quran 2:222 - 'Indeed, Allah loves those who keep themselves pure.'; Hadith - Sahih Muslim 223: 'Cleanliness is half of faith.'", "type": "not sin" },
  { "id": 208, "act": "visiting the sick", "reference": "Hadith - Sahih Bukhari 5653: 'Whoever visits a sick person, an angel calls out: Blessed be you.'", "type": "not sin" },
  { "id": 209, "act": "smiling at others", "reference": "Hadith - Tirmidhi 1956: 'Your smile for your brother is charity.'", "type": "not sin" },
  { "id": 210, "act": "eating dates", "reference": "Quran 19:25 - Dates as a blessing; Hadith - Sahih Bukhari 5445: 'Whoever eats seven dates in the morning is protected.'", "type": "not sin" },
  { "id": 141, "act": "listening to music", "reference": "Hadith - Sahih Bukhari 5590: 'People will permit wine and musical instruments.'; Quran 31:6 - 'Idle tales' interpreted by some as music; scholarly disagreement persists.", "type": "unclear" },
  { "id": 142, "act": "women driving", "reference": "No direct prohibition in Quran or Hadith; some scholars allow, others discourage based on cultural norms.", "type": "unclear" },
  { "id": 143, "act": "celebrating birthdays", "reference": "No mention in Quran or Hadith; some scholars permit as custom, others forbid as imitation of non-Muslims.", "type": "unclear" },
  { "id": 144, "act": "shaving the beard", "reference": "Hadith - Sahih Bukhari 5892: 'Grow the beard.'; Some scholars say it’s not obligatory, others insist on keeping it.", "type": "unclear" },
  { "id": 145, "act": "wearing western clothes", "reference": "No prohibition in Quran or Hadith; depends on modesty (Quran 24:31), debated among scholars.", "type": "unclear" },
  { "id": 146, "act": "watching movies", "reference": "No direct mention; depends on content, some scholars discourage as time-wasting or haram exposure.", "type": "unclear" },
  { "id": 147, "act": "working in mixed-gender environments", "reference": "No prohibition if Islamic guidelines (lowering gaze, modesty) are followed; debated by scholars.", "type": "unclear" },
  { "id": 148, "act": "tattoos", "reference": "Hadith - Sahih Bukhari 5942: 'Allah curses those who get tattoos.'; Some scholars allow if not permanent or cultural.", "type": "unclear" },
  { "id": 149, "act": "wearing gold for men", "reference": "Hadith - Sahih Bukhari 5831: 'Gold and silk are forbidden for men.'; Interpretations vary on strictness.", "type": "unclear" },
  { "id": 150, "act": "eating shrimp", "reference": "Quran 5:96 - 'Lawful to you is the game of the sea.'; Hanafi scholars debate, others permit.", "type": "unclear" },
  { "id": 169, "act": "smoking", "reference": "Quran 2:195 - 'Do not throw yourselves into destruction.'; No direct mention, scholars debate harmfulness.", "type": "unclear" },
  { "id": 170, "act": "playing video games", "reference": "No mention in Quran or Hadith; depends on content and time spent, scholarly opinions vary.", "type": "unclear" },
  { "id": 171, "act": "women working", "reference": "No prohibition if Islamic guidelines (modesty, necessity) are met; debated by scholars.", "type": "unclear" },
  { "id": 172, "act": "investing in stock market", "reference": "No direct mention; permissible if Shariah-compliant, debated if involving riba.", "type": "unclear" },
  { "id": 173, "act": "having life insurance", "reference": "No mention in Quran or Hadith; some scholars prohibit as gambling, others allow as necessity.", "type": "unclear" },
  { "id": 174, "act": "watching TV", "reference": "No mention; depends on content and time, some scholars discourage.", "type": "unclear" },
  { "id": 175, "act": "wearing tight clothes", "reference": "Quran 24:31 - Modesty required; depends on interpretation, debated by scholars.", "type": "unclear" },
  { "id": 177, "act": "using perfumes with alcohol", "reference": "No direct mention; some scholars permit if not intoxicating, others prohibit.", "type": "unclear" },
  { "id": 178, "act": "shaking hands with opposite gender", "reference": "Hadith - Sahih Muslim 1866: 'It is better to be stabbed in the head than touch a woman not lawful to you.'; Some allow if necessary.", "type": "unclear" },
  { "id": 179, "act": "keeping dogs as pets", "reference": "Hadith - Sahih Muslim 1574: 'Angels do not enter a house with a dog.' (Allowed for guarding/hunting, otherwise discouraged)", "type": "unclear" },
  { "id": 180, "act": "praying in a non-Muslim place of worship", "reference": "No direct prohibition; some scholars allow if no alternative, others discourage.", "type": "unclear" },
  { "id": 181, "act": "sleeping on your stomach", "reference": "Hadith - Abu Dawood 5040: 'Allah dislikes sleeping on the stomach.'; Disliked but not clearly haram.", "type": "unclear" },
  { "id": 182, "act": "donating organs", "reference": "No mention in Quran or Hadith; some scholars permit to save lives, others prohibit as altering creation.", "type": "unclear" },
  { "id": 183, "act": "listening to Quran with background music", "reference": "No mention; scholars discourage mixing Quran with music due to respect.", "type": "unclear" },
  { "id": 185, "act": "participating in non-Muslim festivals", "reference": "No direct mention; some scholars permit greetings, others prohibit as imitation.", "type": "unclear" },
  { "id": 188, "act": "trading cryptocurrencies", "reference": "No mention in Quran or Hadith; depends on Shariah compliance, debated by scholars.", "type": "unclear" },
  { "id": 189, "act": "modifying one's physical appearance with surgery", "reference": "Quran 4:119 - 'I will command them to alter Allah’s creation.'; Allowed for medical reasons, debated otherwise.", "type": "unclear" },
  { "id": 190, "act": "men wearing engagement rings", "reference": "No mention; depends on cultural norms and gold prohibition debate.", "type": "unclear" },
  { "id": 192, "act": "sleeping before Isha prayer", "reference": "Hadith - Sahih Bukhari 568: 'The Prophet disliked sleeping before Isha and talking after it.'; Disliked but not clearly haram.", "type": "unclear" },
  { "id": 195, "act": "keeping long nails", "reference": "Hadith - Sahih Muslim 258: 'The Fitrah includes clipping the nails.' (Discouraged if excessive)", "type": "unclear" },
  { 
    "id": 196, 
    "act": "homosexuality (LGBT)", 
    "reference": "Hadith - Sunan al-Tirmidhi 1456: 'Whoever you find committing the act of the people of Lut, kill the one who does it and the one to whom it is done.' (Also referenced in Quran 26:165-166 and 7:80-81, condemning the act of Lut's people)", 
    "type": "sin" 
  },
  
    {
      "id": 197,
      "act": "Zina (Fornication/Adultery)",
      "reference": "Quran 17:32 - 'And do not approach unlawful sexual intercourse. Indeed, it is an immorality and an evil way.' | Hadith - Sahih al-Bukhari 6805: 'No man is alone with a woman but the third of them is Satan.'",
      "type": "sin"
    },
    {
      "id": 198,
      "act": "Pornography",
      "reference": "Quran 24:30-31 - 'Tell the believing men to lower their gaze and guard their chastity...' | Hadith - Sahih al-Bukhari 6474: 'The (adultery) of the eyes is looking, and the (adultery) of the tongue is speaking... and the private parts confirm or deny that.'",
      "type": "sin"
    },
    {
      "id": 199,
      "act": "Free Mixing of Males and Females",
      "reference": "Quran 33:53 - 'And when you ask [his wives] for something, ask them from behind a partition. That is purer for your hearts and their hearts.' | Hadith - Sunan Abu Dawood 5272: 'It is not permissible for a man to be alone with a woman except that there is a Mahram with her.'",
      "type": "sin"
    },
    {
      "id": 200,
      "act": "Male-Female Communication (Unnecessary)",
      "reference": "Quran 33:32 - '...do not be soft in speech [with men], lest he in whose heart is disease should covet...' | Hadith - Sahih Muslim 2221: 'A man should not be alone with a woman unless a Mahram is present.'",
      "type": "sin"
    },
    {
      "id": 201,
      "act": "Male-Female Friendships",
      "reference": " | Hadith - Jami` at-Tirmidhi 1171: 'A man is upon the religion of his close friend, so let one of you look at whom he befriends.'",
      "type": "sin"
    },
    {
      "id": 202,
      "act": "Online Relationships (Texting, Chatting, Social Media)",
      "reference": "Quran 24:30 - 'Tell the believing men to lower their gaze and guard their private parts...' | Fatwa - IslamQA #1497: 'Private conversations between non-mahrams, even if virtual, can lead to fitnah.'",
      "type": "sin"
    },
    {
      "id": 203,
      "act": "Flirting and Casual Relationships",
      "reference": "Quran 33:35 - 'Indeed, the men who guard their chastity and the believing women who do so... Allah has prepared for them forgiveness and a great reward.' | Hadith - Sunan Ibn Majah 3933: 'Whoever guarantees me what is between his jaws and what is between his legs, I shall guarantee him Paradise.'",
      "type": "sin"
    },
    {
      "id": 204,
      "act": "Cross-Dressing & Gender Fluidity",
      "reference": "Hadith - Sahih al-Bukhari 5885: 'The Messenger of Allah cursed men who imitate women and women who imitate men.' | Quran 4:119 - 'And I will command them so they will change the creation of Allah.'",
      "type": "sin"
    },
    {
      "id": 205,
      "act": "Transgenderism and Gender Reassignment",
      "reference": "Quran 42:49-50 - 'To Allah belongs the dominion of the heavens and the earth; He creates what He wills...' | Hadith - Sunan Abu Dawood 4928: 'Allah has cursed those who change the creation of Allah.'",
      "type": "unclear"
    },
    {
      "id": 206,
      "act": "Third-Gender (Khawaja Sira, Hijra, Eunuchs)",
      "reference": "Hadith - Sunan Abu Dawood 4928: 'The Prophet cursed the mukhannathun (effeminate men) and mutarajjilat (masculine women).' | Classical scholars differentiate between congenital conditions and intentional imitation.",
      "type": "unclear"
    },
    {
      "id": 207,
      "act": "Polygamy (Multiple Wives)",
      "reference": "Quran 4:3 - 'Marry those that please you of [other] women, two or three or four. But if you fear that you will not be just, then [marry only] one.' | Hadith - Sahih Muslim 1467: 'Whoever has two wives and inclines to one over the other will come on the Day of Judgment with one of his sides leaning.'",
      "type": "unclear"
    },
    {
      "id": 208,
      "act": "Mut'ah (Temporary Marriage)",
      "reference": "Hadith - Sahih Muslim 1406: 'The Messenger of Allah prohibited Mut'ah (temporary marriage) and the meat of domestic donkeys at the time of Khaybar.' | Quran 4:24 (interpreted differently by sects).",
      "type": "unclear"
    },
    {
      "id": 209,
      "act": "Misyar (Marriage of Convenience)",
      "reference": "Fatwa - Various Islamic scholars differ on its permissibility. Some consider it halal but discouraged. | Quran 30:21 - 'And among His signs is that He created for you spouses that you may find tranquility in them.'",
      "type": "unclear"
    },
    {
      "id": 210,
      "act": "LGBTQ+ Identity vs. Inclinations",
      "reference": "Quran 7:81 - 'Indeed, you approach men with desire, instead of women. Rather, you are a transgressing people.' | Fatwa - Many scholars differentiate between sinful actions and uncontrollable inclinations.",
      "type": "unclear"
    }
  
];

// Helper: parse the raw reference string to extract Quran and Hadith references
function parseReference(ref) {
  let quranRef = null;
  let hadithRef = null;

  // First, try splitting by ";" if present
  let parts = ref.split(";");
  if (parts.length < 2) {
    // if no semicolon, try pipe as separator
    parts = ref.split("|");
  }

  // Look for parts containing keywords
  parts.forEach(part => {
    const trimmed = part.trim();
    if (trimmed.toLowerCase().includes("quran")) {
      quranRef = trimmed;
    }
    if (trimmed.toLowerCase().includes("hadith")) {
      hadithRef = trimmed;
    }
  });

  return { quranRef, hadithRef };
}

// Transform the raw data into the new structure
const sinsData = rawSinsData.map(item => {
  const { quranRef, hadithRef } = parseReference(item.reference);
  return {
    id: item.id,
    act: item.act,
    type: item.type,
    quranRef: quranRef || "No Quran reference available.",
    hadithRef: hadithRef || "No Hadith reference available."
  };
});


export default sinsData;