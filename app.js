const MORSE = {
    A:'.-', B:'-...', C:'-.-.', D:'-..', E:'.', F:'..-.', G:'--.',
    H:'....', I:'..', J:'.---', K:'-.-', L:'.-..', M:'--', N:'-.',
    Ñ:'--.--', O:'---', P:'.--.', Q:'--.-', R:'.-.', S:'...', T:'-',
    U:'..-', V:'...-', W:'.--', X:'-..-', Y:'-.--', Z:'--..'
  };

  // Bancos de palabras reales, verificadas letra por letra (longitud exacta),
  // agrupadas por cantidad de letras. Solo cubren 3-10 letras.
  const WORDS_ES = {
    3: ["SOL","MAR","PAN","OJO","PIE","SAL","RIO","LUZ","VOZ","RED","AVE","OSO","PEZ","TEA","UVA","COZ","AJI","SUR","RIA","FIN","LEY","REY","LEA","TOS","AMO","ODA","ALA","ATA","BOA","CAL","CAN","COL","CON","CUY","DIA","DOY","DOS","EJE","ERA","ESA","ESE","ESO","FEO","GAS","GEN","HOY","HUY","IBA","LAS","LES","LOS","MAL","MAS","MES","MIO","MIS","NOS","OIA","OLA","ORO","OSA","PAZ","PIN","PUS","QUE","SEA","SED","SER","SET","SIN","SUS","TAL","TAN","TEN","TIO","TUS","VAN","VAS","VEZ","VID","VIL","VIO","VOY","AÑO"],
    4: ["CASA","MESA","LUNA","GATO","MONO","LEON","OSOS","PATO","VACA","RANA","FLOR","HOJA","NUBE","FRIO","LOBO","CAMA","SOFA","ROPA","CAFE","SOPA","JUGO","VINO","VIDA","AMOR","BESO","RISA","HIJO","TIOS","PAIS","NIÑA","MANO","PIEL","OJOS","BOCA","DEDO","CODO","TAZA","ROJO","AZUL","ROSA","AGUA"],
    5: ["PLAYA","MONTE","VERDE","NEGRO","PLATA","COBRE","METAL","PAPEL","TELAS","LANAS","SEDAS","CUERO","GOMAS","FIBRA","HUMOR","RISAS","ENOJO","MIEDO","CALMA","PACES","ODIOS","CELOS","VALOR","DEBIL","LENTO","ALTOS","BAJOS","ANCHO","OVALO","PUNTO","LINEA","CUBOS","PLANO","CALOR","FRIOS","TIBIO","SECOS","SUCIO","NUEVO","VIEJO","JOVEN","CHICO","MEDIA","PARTE","TODOS","NADAS","VARIO","MUCHO","POCOS","TANTO","LIBRO","PERRO","OVEJA","CERDO","NIEVE","ARBOL","PARED","TECHO","SUELO","COCHE","PLATO","GORRA","LECHE","CARNE","PASTA","CIELO","MUNDO","PADRE","MUJER","NORTE","FUEGO"],
    6: ["CAMINO","PUEBLO","CIUDAD","PARQUE","PLAZAS","TIENDA","BANCOS","TEATRO","CINEMA","MUSICA","LITERA","POESIA","NOVELA","CUENTO","DANZAS","CANTOS","BAILES","FIESTA","VIAJES","PRIMOS","NIETOS","ABUELA","MADRES","PADRES","ESPOSO","ESPOSA","NOVIOS","AMANTE","VECINO","COLEGA","ALUMNO","OBRERO","PINTOR","POETAS","MUSICO","CANTAN","BAILAR","ACTRIZ","CAMARA","SONIDO","IMAGEN","VIDEOS","REPTIL","DELFIN","VOLCAN","DINERO","CORAJE"],
    7: ["GALAXIA","PLANETA","COMETAS","METEORO","ENERGIA","MATERIA","ATOMICA","QUIMICA","FISICAS","ESPECIE","PLANTAS","INSECTO","ANFIBIO","PAJAROS","OCEANOS","MONTAÑA","BOSQUES","PRADERA","GLACIAR","CASCADA","LAGUNAS","LATITUD","TROPICO","ARTICOS","HURACAN","TRUENOS","GRANIZO","NEBLINA","HUMEDAD","SEQUIAS","TEJIDOS","CULTURA","NATURAL","AMISTAD","ALEGRIA","PALABRA","SILUETA","BURBUJA","CORAZON","PALOMAS","ARDILLA","TORTUGA","JIRAFAS","CANGURO","PANTERA","ESCUELA","COLEGIO","OFICINA","FABRICA","MERCADO","IGLESIA","PINTURA","DESFILE","TURISMO","SECRETO","FAMILIA","HERMANO","SOBRINO","MAESTRO","GERENTE","ARTISTA","PRODUCE","NOTICIA","REVISTA"],
    8: ["VOLCANES","GENETICA","MOLECULA","ELECTRON","PROTONES","ELEMENTO","REACCION","OBSERVAR","ANALIZAR","FUNCIONA","PROCESOS","SISTEMAS","MUSCULOS","NERVIOSO","CIRCULAR","JUVENTUD","INFANCIA","FAMILIAR","SOCIEDAD","CULTURAS","CREENCIA","RELIGION","ESPIRITU","LIBERTAD","JUSTICIA","TRISTEZA","SILENCIO","ELEFANTE","CASTILLO","VENTANAS","SOMBRERO","BOTANICA","HOSPITAL","FARMACIA","CARNAVAL","AVENTURA","PROFESOR","DIRECTOR","EMPLEADO","ESCRITOR","PELICULA","SATELITE","GRAVEDAD","BIOLOGIA","LONGITUD","TORMENTA","UNIVERSO"],
    9: ["GALACTICO","ELEMENTAL","COMPUESTO","REACTIVOS","ANALIZADO","CATEGORIA","FUNCIONAL","MECANISMO","PROCESADO","SISTEMICO","ORGANISMO","CELULARES","MUSCULOSA","ESQUELETO","NERVIOSAS","DIGESTIVA","ENDOCRINO","REPRODUCE","COMUNIDAD","TRADICION","COSTUMBRE","FILOSOFIA","CHOCOLATE","PARTICULA","GENETICOS","UNIVERSAL","MOLECULAR","CLASIFICA","TERREMOTO","RELAMPAGO","ASTEROIDE","PENINSULA","MERIDIANO","ANTARTIDA","NECESIDAD","FELICIDAD","PRODUCTOR","GUIONISTA","PERIODICO"],
    10: ["ESTRUCTURA","DESARROLLO","LONGEVIDAD","MADURACION","CORDILLERA","CONTINENTE","HEMISFERIO","ASTRONAUTA","ARQUITECTO","INUNDACION","BIBLIOTECA","COMPUTADOR","CASUALIDAD","CANTIDADES","DIFICULTAD","ESTUDIANTE","DOCUMENTAL","PERIODISTA"],
  };
  const WORDS_EN = {
    3: ["CAT","DOG","SUN","MAP","PEN","CUP","BOX","KEY","BAG","HAT","JAR","BUS","CAR","BED","EGG","FAN","GUN","HEN","ICE","JAM","KID","LAP","MUD","NET","OWL","PIG","RAT","SEA","TEA","VAN","WEB","ZOO","AIR","ANT","ARM","ART","BAT","BAY","BOW","BOY","COW","CRY","CUT","DAY","DRY","EAR","EAT","EYE","FAT","FEW","FIT","FLY","FOG","FOX","FUN","GAP","GAS","GYM","HOT","JOB","JOY","LAW","LEG","LOW","MAN","MIX","NUT","OIL","PAY","PIE","POT","RAW","RED","RUN","SAD","SAW","SIT","SKY","TAX","TIE","TIP","TOP","TOY","TRY","WAR","WAY","WET","WIN","YES"],
    4: ["BOOK","DESK","LAMP","DOOR","WALL","TREE","BIRD","FISH","LION","BEAR","WOLF","DUCK","GOAT","MILK","CAKE","SOUP","RICE","MEAT","SALT","SNOW","RAIN","WIND","STAR","MOON","ROCK","SAND","LAKE","HILL","PARK","ROAD","GATE","GAME","BALL","BAND","BANK","BARN","BASE","BEAN","BELT","BEND","BEST","BILL","BLUE","BOAT","BOLD","BOMB","BOND","BONE","BORN","BOSS","BOTH","BOWL","BULB","BULK","BURN","BUSY","CALM","CAMP","CARD","CARE","CASE","CASH","CAST","CHAT","CHIP","CITY","CLAY","CLIP","CLUB","COAL","COAT","CODE","COIN","COLD","COOK","COOL","COPY","CORE","COST","CREW","CROP","DARK","DATA","DATE","DEAL","DEBT","DEEP","DIET","DISH","DOSE","DRAW","DROP","DRUG","DUST","DUTY","EACH","EAST","EASY","EDGE","FACE","FACT","FADE","FAIL","FAIR","FALL","FARM","FAST","FEAR","FEED","FEEL","FILE","FILL","FILM","FIND","FINE","FIRE","FIRM","FLAG","FLAT","FLOW","FOOD","FOOT","FORM","FORT","FREE","FUEL","FULL","FUND","GAIN","GEAR","GIFT","GLAD","GOAL","GOLD","GOOD","GRAY","GREW","GRID","GRIP","GROW","HAIR","HALF","HALL","HAND","HARD","HEAD","HEAL","HEAT","HELD","HELP","HERB","HERE","HERO","HIDE","HIGH","HOLD","HOLE","HOME","HOOK","HOPE","HORN","HOST","HOUR","HUGE","HUNT","HURT","ICON","IDEA","INCH","IRON","ITEM","JOIN","JOKE","JUMP","JURY","JUST","KEEN","KEEP","KICK","KIND","KING","KNOW","LACK","LAND","LANE","LAST","LATE","LAWN","LEAD","LEAF","LEAN","LEFT","LESS","LIFE","LIFT","LIKE","LIMB","LIME","LINE","LINK","LIST","LIVE","LOAD","LOAN","LOCK","LOGO","LONG","LOOK","LORD","LOSE","LOSS","LOST","LOUD","LOVE","LUCK"],
    5: ["APPLE","BEACH","BREAD","BRAIN","BRAVE","BRICK","BRIDE","BRIEF","BRING","BROAD","BROOM","BROWN","BRUSH","BUILD","BUYER","CABLE","CANDY","CARGO","CARRY","CATCH","CAUSE","CHAIN","CHAIR","CHALK","CHARM","CHART","CHASE","CHEAP","CHECK","CHEEK","CHESS","CHEST","CHIEF","CHILD","CHILL","CHIME","CHOIR","CHORD","CHORE","CIVIL","CLAIM","CLASS","CLEAN","CLEAR","CLERK","CLIMB","CLOCK","CLOSE","CLOTH","CLOUD","CLOWN","COACH","COAST","COLOR","COUCH","COUGH","COULD","COUNT","COURT","COVER","CRACK","CRAFT","CRASH","CRAWL","CREAM","CREEK","CRIME","CROSS","CROWD","CROWN","CRUEL","CRUSH","CURVE","DANCE","DEATH","DEBUT","DELAY","DEPTH","DIARY","DODGE","DOUBT","DOZEN","DRAFT","DRAIN","DRAMA","DRAWN","DREAM","DRESS","DRIED","DRINK","DRIVE","DROVE","DRUNK","EARLY","EARTH","EIGHT","ELBOW","ELDER","EMPTY","ENJOY","ENTER","ENTRY","EQUAL","ERROR","EVENT","EVERY","EXACT","EXIST","EXTRA","FAITH","FALSE","FANCY","FAULT","FAVOR","FENCE","FIELD","FIFTH","FIFTY","FIGHT","FINAL","FIRST","FIXED","FLAME","FLASH","FLEET","FLOOR","FLUID","FOCUS","FORCE","FORTH","FORTY","FORUM","FOUND","FRAME","FRAUD","FRESH","FRONT","FROST","FRUIT","FUNNY","GHOST","GIANT","GLASS","GLOBE","GLORY","GOOSE","GRACE","GRADE","GRAIN","GRAND","GRANT","GRAPE","GRASP","GRASS","GREAT","GREEN","GREET","GRIEF","GRILL","GROSS","GROUP","GROVE","GUARD","GUESS","GUEST","GUIDE"],
    6: ["ANIMAL","ANSWER","ANYONE","ANYWAY","ARRIVE","ARTIST","ASSIST","ASSUME","ATTACK","ATTEND","AUTHOR","AUTUMN","BACKUP","BANNER","BARELY","BATTLE","BEAUTY","BECOME","BEFORE","BEHALF","BEHIND","BELIEF","BELONG","BENIGN","BESIDE","BETTER","BEYOND","BISHOP","BORDER","BOTTLE","BOTTOM","BOUGHT","BRANCH","BRIGHT","BROKEN","BUDGET","BURDEN","BUTTER","CAMERA","CANCEL","CANCER","CANDLE","CANNOT","CARBON","CAREER","CASTLE","CASUAL","CENTER","CHANCE","CHANGE","CHAPEL","CHARGE","CHOICE","CHOOSE","CHOSEN","CIRCLE","CLOSED","COFFEE","COMBAT","COMEDY","COMING","COMMIT","COMPLY","CORNER","COTTON","COUPLE","COURSE","COUSIN","CREATE","CREDIT","CRISIS","CUSTOM","DAMAGE","DANGER","DEBATE","DECADE","DECENT","DECIDE","DEGREE","DEMAND","DEPUTY","DESERT","DESIGN","DESIRE","DETAIL","DEVICE","DIFFER","DINNER","DIRECT","DOCTOR","DONKEY","DOUBLE","DRIVER","DURING","EASILY","EATING","EDITOR","EFFORT","EIGHTY","EITHER","ELEVEN","EMERGE","EMPIRE","ENABLE","ENDING","ENERGY","ENGAGE","ENGINE","ENOUGH","ENSURE","ENTIRE","ESCAPE","ETHNIC","EXCEED","EXCEPT","EXCESS","EXPAND","EXPECT","EXPERT","EXTEND","EXTENT","FABRIC","FACTOR","FAMILY","FAMOUS","FASTEN","FELLOW","FEMALE","FIGURE","FILTER","FINGER","FINISH","FLIGHT","FLORAL","FOLLOW","FORCED","FOREST","FORGET","FORMAL","FORMER","FOSTER","FOUGHT","FRIEND","FROZEN","FUTURE","GARAGE","GARDEN","GATHER","GENTLE","GENTLY","GLOBAL","GOLDEN","GROUND","GROWTH","GUITAR","BULLET"],
    7: ["ABILITY","ABSENCE","ABSOLVE","ACADEMY","ACCOUNT","ACCUSED","ACHIEVE","ACQUIRE","ADDRESS","ADVANCE","ADVISOR","AGAINST","AIRLINE","ALCOHOL","ALREADY","AMAZING","ANCIENT","ANOTHER","ANXIETY","ANXIOUS","ANYBODY","APPLIED","APPOINT","ARRANGE","ARRIVAL","ARTICLE","ASSAULT","ASSUMED","ATTEMPT","ATTRACT","AUCTION","AVERAGE","BACKING","BALANCE","BANQUET","BARRIER","BATTERY","BEARING","BENEATH","BENEFIT","BETWEEN","BICYCLE","BIOLOGY","BLANKET","BLESSED","BOUNDED","BRACKET","BREAKUP","BRIEFLY","BROTHER","BUILDER","BURNING","CABINET","CAPABLE","CAPITAL","CAPTAIN","CAPTIVE","CAPTURE","CAREFUL","CARRIED","CATALOG","CAUTION","CEILING","CENTURY","CERAMIC","CERTAIN","CHAMBER","CHANNEL","CHAPTER","CHARITY","CHECKUP","CHEMIST","CHICKEN","CIRCUIT","CITIZEN","CLASSIC","CLEANUP","CLIMATE","CLOSELY","CLOTHES","COLLECT","COLLEGE","COMFORT","COMMAND","COMMENT","COMPACT","COMPANY","COMPARE","COMPETE","COMPLEX","CONCEDE","CONCEPT","CONCERN","CONCERT","CONDUCT","CONFIRM","CONNECT","CONSENT","CONSIST","CONSULT","CONTACT","CONTAIN","CONTENT","CONTEST","CONTEXT","CONTROL","CONVERT","CONVICT","COOKING","COOLING","COUNTRY","COURAGE","ASSURED"],
    8: ["ABSOLUTE","ACADEMIC","ACCEPTED","ACCIDENT","ACCURATE","ACHIEVED","ACTIVITY","ACTUALLY","ADDITION","ADEQUATE","ADVANCED","ADVISORY","AFFECTED","AIRCRAFT","AIRPLANE","ALLIANCE","ALTHOUGH","ANALYSIS","ANCESTOR","ANNOUNCE","APPARENT","APPETITE","APPROACH","ARGUMENT","ASSEMBLY","ASSIGNED","ATHLETIC","ATTACHED","ATTORNEY","AUDIENCE","AVIATION","BACKYARD","BASEBALL","BASELINE","BASEMENT","BATHROOM","BEHAVIOR","BENEFITS","BIRTHDAY","BLESSING","BOARDING","BOOKCASE","BOOKMARK","BORROWED","BOTANIST","BOUNDARY","BREAKING","BREEDING","BRUTALLY","BUILDING","BUSINESS","CALENDAR","CAMPAIGN","CAPACITY","CATEGORY","CEREMONY","CHAMPION","CHEMICAL","CIRCULAR","CLIMBING","CLOTHING","COLLAPSE","COLONIAL","COMEBACK","COMMERCE","COMPLETE","COMPOUND","COMPUTER","CONCLUDE","CONCRETE","UNIVERSE"],
    9: ["AGREEMENT","ALCOHOLIC","ANNOUNCED","ASSISTANT","ASSOCIATE","BEAUTIFUL","BODYGUARD","BRILLIANT","BROADCAST","CANDLELIT","CAREFULLY","CATALOGUE","CATHEDRAL","CHALLENGE","CHARACTER","CHILDCARE","CHILDHOOD","CHOCOLATE","CITYSCAPE","CLASSROOM","CLEARANCE","COASTLINE","KNOWLEDGE","CONFIDENT","DIFFICULT","EDUCATION","EMOTIONAL","EXCELLENT","FANTASTIC","FURNITURE","GENERATOR","HOSPITALS","IMMIGRANT","INDICATOR","INSURANCE","LANDSCAPE","LIBRARIAN","MAGNITUDE","MOUNTAINS","NUTRITION","OPERATION","PAINTINGS","POLLUTION","PRESIDENT","PRINCIPLE","QUESTIONS","SCIENTIST","SENTENCES","STRUCTURE","TELEPHONE","TERRITORY","TREATMENT","VEGETABLE","VOLUNTEER","WONDERFUL","ELEPHANTS","EXPENSIVE","FOOTBALLS","MAGAZINES","YESTERDAY"],
    10: ["BRAINPOWER","CONFERENCE","JOURNALIST","MYSTERIOUS","RESTAURANT","SANDWICHES","BASKETBALL","CHOCOLATES","FRIENDSHIP","GENERATION","HISTORICAL","IMPORTANCE","INDUSTRIAL","INSTRUCTOR","NEWSPAPERS","OPERATIONS","PARTICULAR","PHOTOGRAPH","POPULATION","PROFESSION","QUESTIONED","STATISTICS","STRUCTURES","SUBSTANCES","SUPERVISOR","SURROUNDED","TECHNOLOGY","VOLUNTEERS"],
  };
  
  const ABC = Object.keys(MORSE);

  const len = document.getElementById('len');
  const countLabel = document.getElementById('countLabel');
  const word = document.getElementById('word');
  const morseOut = document.getElementById('morseOut');
  const digitsOut = document.getElementById('digitsOut');
  const genBtn = document.getElementById('genBtn');
  const hideToggle = document.getElementById('hideToggle');
  const valRaya = document.getElementById('valRaya');
  const valPunto = document.getElementById('valPunto');
  const valEspacio = document.getElementById('valEspacio');
  const subText = document.getElementById('subText');
  const modeNormal = document.getElementById('modeNormal');
  const modeInverso = document.getElementById('modeInverso');
  const sourceRandom = document.getElementById('sourceRandom');
  const sourceEs = document.getElementById('sourceEs');
  const sourceEn = document.getElementById('sourceEn');
  const autoToggle = document.getElementById('autoToggle');
  const autoControls = document.getElementById('autoControls');
  const metronomeDot = document.getElementById('metronomeDot');
  const bpmValue = document.getElementById('bpmValue');
  const bpmRange = document.getElementById('bpmRange');
  const bpmNumber = document.getElementById('bpmNumber');
  const subdivisionSelect = document.getElementById('subdivisionSelect');
  const soundToggle = document.getElementById('soundToggle');
  const soundControls = document.getElementById('soundControls');
  const toneRange = document.getElementById('toneRange');
  const volumeRange = document.getElementById('volumeRange');
  const subSoundToggle = document.getElementById('subSoundToggle');
  const subSoundControls = document.getElementById('subSoundControls');
  const morseSoundToggle = document.getElementById('morseSoundToggle');
  const morseSoundControls = document.getElementById('morseSoundControls');
  const morseToneRange = document.getElementById('morseToneRange');
  const morseToneValue = document.getElementById('morseToneValue');
  const morseVolumeRange = document.getElementById('morseVolumeRange');
  const subToneRange = document.getElementById('subToneRange');
  const subVolumeRange = document.getElementById('subVolumeRange');
  const toneValue = document.getElementById('toneValue');
  const subToneValue = document.getElementById('subToneValue');
  const runManual = document.getElementById('runManual');
  const runAuto = document.getElementById('runAuto');
  const autoPanel = document.getElementById('autoPanel');
  const fixedWordPanel = document.getElementById('fixedWordPanel');
  const fixedWordToggle = document.getElementById('fixedWordToggle');
  const fixedWordControls = document.getElementById('fixedWordControls');
  const fixedWordInput = document.getElementById('fixedWordInput');
  const pinCurrentBtn = document.getElementById('pinCurrentBtn');
  const progressFill = document.getElementById('progressFill');
  const nextWordText = document.getElementById('nextWordText');
  const nextPreviewRow = document.getElementById('nextPreviewRow');
  const rhythmCounterRow = document.getElementById('rhythmCounterRow');
  const rhythmCounterText = document.getElementById('rhythmCounterText');

  let nextWord = null;

  // --- Reloj único (scheduler) ---
  // Tanto el pulso del metrónomo como el avance de palabra se calculan como
  // tiempos absolutos desde un mismo origen (originTime), multiplicando por
  // una cantidad entera de pulsos/ticks — nunca sumando delay sobre delay.
  // Así se elimina el desfasaje técnico entre ambos relojes; el desfasaje
  // "musical" (una palabra que no termina justo en un pulso) es esperado.
  let schedulerHandle = null;
  let originTime = 0;
  let beatMs = 0;
  let tickMs = 0;
  let beatCount = 0;
  let subTickCount = 0;
  let cumulativeTicks = 0;
  let currentWordTotalTicks = 0;
  let currentWordStartTicks = 0;
  let lastTickInWord = -1;
  let morseOnsets = [];   // ticks absolutos (grilla) donde empieza cada punto/raya de la palabra actual
  let morseOnsetIdx = 0;
  let audioCtx = null;

  // Denominador "real" (múltiplo de 2) y paso por tick para cada subdivisión.
  // Puntillo cuenta en la subdivisión recta inmediatamente menor (x3 pasos);
  // los tresillos usan el denominador de la subdivisión que dividen, con etiqueta.
  const SUBDIVISION_INFO = {
    "1":            { denom: 4,  step: 1, tresillo: false }, // negra
    "0.5":          { denom: 8,  step: 1, tresillo: false }, // corchea
    "0.25":         { denom: 16, step: 1, tresillo: false }, // semicorchea
    "0.3333333333": { denom: 8,  step: 1, tresillo: true  }, // tresillo de corcheas
    "0.1666666667": { denom: 16, step: 1, tresillo: true  }  // tresillo de semicorcheas
  };
  function getSubdivisionInfo(){
    return SUBDIVISION_INFO[subdivisionSelect.value] || { denom: 4, step: 1, tresillo: false };
  }

  let audioTimeOrigin = null; // audioCtx.currentTime en el momento perfTimeOrigin
  let perfTimeOrigin = null;  // performance.now() en ese mismo instante

  function ensureAudioCtx(){
    if(!audioCtx){
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      perfTimeOrigin = performance.now();
      audioTimeOrigin = audioCtx.currentTime;
    }
    if(audioCtx.state === 'suspended') audioCtx.resume();
  }

  // Convierte un instante de performance.now() al reloj de audio, para poder
  // programar el sonido en el momento EXACTO del pulso en vez de "ahora
  // mismo" (que queda atado al jitter del poll de 20ms del scheduler).
  function perfToAudioTime(perfMs){
    if(audioTimeOrigin === null) return audioCtx.currentTime;
    return audioTimeOrigin + (perfMs - perfTimeOrigin) / 1000;
  }

  function playClick(idealPerfTime){
    if(!soundToggle.checked) return;
    ensureAudioCtx();
    const t = Math.max(audioCtx.currentTime, perfToAudioTime(idealPerfTime));
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = parseFloat(toneRange.value);
    const vol = parseFloat(volumeRange.value) / 100;
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.09);
  }

  // Tick de subdivisión: más corto que el pulso principal para que se
  // distinga como un "tick" liviano debajo del click del compás.
  function playSubClick(idealPerfTime){
    if(!soundToggle.checked || !subSoundToggle.checked) return;
    ensureAudioCtx();
    const t = Math.max(audioCtx.currentTime, perfToAudioTime(idealPerfTime));
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = parseFloat(subToneRange.value);
    const vol = parseFloat(subVolumeRange.value) / 100;
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.05);
  }

  // Sonido Morse: un click al comienzo de cada dígito (punto, raya y espacio), en la grilla.
  function playMorseClick(idealPerfTime){
    if(!soundToggle.checked || !morseSoundToggle.checked) return;
    ensureAudioCtx();
    const t = Math.max(audioCtx.currentTime, perfToAudioTime(idealPerfTime));
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = parseFloat(morseToneRange.value);
    const vol = parseFloat(morseVolumeRange.value) / 100;
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.07);
  }

  let mode = 'normal'; // 'normal' = letra→morse, 'inverso' = morse→letra
  let wordSource = 'es'; // 'random' | 'es' | 'en' — por defecto: español
  let hasGenerated = false;

  len.addEventListener('input', () => {
    countLabel.textContent = len.value;
    refreshNextPreview();
  });

  function randomWord(n){
    let out = '';
    for(let i=0;i<n;i++){
      out += ABC[Math.floor(Math.random()*ABC.length)];
    }
    return out;
  }

  // Con fuente ES/EN, se elige una palabra real del banco correspondiente
  // a esa longitud exacta. Con "Aleatorio" se generan letras sueltas.
  function pickWord(n){
    if(wordSource === 'random') return randomWord(n);
    const bank = wordSource === 'es' ? WORDS_ES : WORDS_EN;
    const bucket = bank[n];
    if(!bucket || bucket.length === 0) return randomWord(n); // resguardo
    return bucket[Math.floor(Math.random() * bucket.length)];
  }

  function sanitizeFixedWord(raw){
    return raw.toUpperCase().replace(/[^A-ZÑ]/g, '').slice(0, 10);
  }

  // Si "Palabra fija" está activo y hay algo cargado, siempre devuelve esa
  // misma palabra (loop) ignorando fuente y cantidad de letras.
  function resolveWord(n){
    if(autoToggle.checked && fixedWordToggle.checked){
      const fw = sanitizeFixedWord(fixedWordInput.value);
      if(fw.length > 0) return fw;
    }
    return pickWord(n);
  }

  function setSource(newSource){
    wordSource = newSource;
    sourceRandom.classList.toggle('active', wordSource === 'random');
    sourceEs.classList.toggle('active', wordSource === 'es');
    sourceEn.classList.toggle('active', wordSource === 'en');

    // Con palabras reales, el rango de letras se restringe a >= 3
    // (nuestros bancos solo cubren 3 a 10 letras).
    const minLen = wordSource === 'random' ? 1 : 3;
    len.min = String(minLen);
    if(parseInt(len.value, 10) < minLen){
      len.value = String(minLen);
    }
    // El navegador puede clampear len.value apenas cambia min, así que
    // sincronizamos la etiqueta con el valor real en vez de asumirlo.
    countLabel.textContent = len.value;
    refreshNextPreview();
  }

  sourceRandom.addEventListener('click', () => setSource('random'));
  sourceEs.addEventListener('click', () => setSource('es'));
  sourceEn.addEventListener('click', () => setSource('en'));

  // Igual que en los dígitos: siempre se agrega un espacio final (fin de
  // palabra) además de los espacios entre letras.
  function toMorse(w){
    return w.split('').map(ch => MORSE[ch]).join(' / ') + ' /';
  }

  // raya, punto y espacio entre letras son configurables por el usuario
  // Siempre se agrega un espacio al final de la palabra completa (fin de
  // palabra), además de los espacios entre letras — con el valor configurado.
  function toDigits(w){
    const raya = valRaya.value;
    const punto = valPunto.value;
    const espacio = valEspacio.value;
    const letras = w.split('').map(ch =>
      MORSE[ch].split('').map(sym => sym === '-' ? raya : punto).join('')
    ).join(espacio);
    return letras + espacio;
  }

  const SUB_TEXT = {
    normal: 'Elegí cuántas letras querés y generá una combinación al azar para practicar su patrón morse.',
    inverso: 'Vas a ver el morse y los dígitos primero. Adiviná la letra antes de revelarla.'
  };

  function setMode(newMode){
    mode = newMode;
    modeNormal.classList.toggle('active', mode === 'normal');
    modeInverso.classList.toggle('active', mode === 'inverso');
    subText.textContent = SUB_TEXT[mode];
    updatePreviewVisibility();
    renderNextPreview();
    if(!hasGenerated){
      word.textContent = mode === 'normal' ? 'tocá generar' : '? ? ?';
    } else {
      applyVisibility();
    }
  }

  modeNormal.addEventListener('click', () => setMode('normal'));
  modeInverso.addEventListener('click', () => setMode('inverso'));

  function getBpm(){
    return parseInt(bpmRange.value, 10);
  }
  function getSubdivisionFactor(){
    return parseFloat(subdivisionSelect.value);
  }
  function sumDigits(digitsStr){
    return digitsStr.split('').reduce((acc, ch) => acc + parseInt(ch, 10), 0);
  }

  // Vacía al instante y llena linealmente hasta el fin real de la palabra.
  function startProgress(remainingMs, startFraction = 0){
    progressFill.style.transition = 'none';
    progressFill.style.width = (startFraction * 100) + '%';
    void progressFill.offsetWidth; // forzar reflow para reiniciar la transición
    progressFill.style.transition = `width ${remainingMs}ms linear`;
    progressFill.style.width = '100%';
  }
  function stopProgress(){
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';
  }

  function beatPulse(){
    metronomeDot.classList.add('beat');
    setTimeout(() => metronomeDot.classList.remove('beat'), 100);
  }

  // Reinicia el origen del reloj: se usa al activar el modo automático o
  // cuando cambian BPM/subdivisión (ambos redefinen la duración del pulso).
  function resetEpoch(){
    originTime = performance.now();
    beatMs = 60000 / getBpm();
    tickMs = beatMs * getSubdivisionFactor();
    beatCount = 0;
    subTickCount = 0;
    cumulativeTicks = 0;
    morseOnsets = [];
    morseOnsetIdx = 0;
  }

  function startScheduler(){
    stopScheduler();
    resetEpoch();
    schedulerHandle = setInterval(schedulerTick, 20);
  }

  function stopScheduler(){
    if(schedulerHandle){ clearInterval(schedulerHandle); schedulerHandle = null; }
    metronomeDot.classList.remove('beat');
    stopProgress();
    currentWordTotalTicks = 0;
    lastTickInWord = -1;
    morseOnsets = [];
    morseOnsetIdx = 0;
    rhythmCounterText.textContent = '—';
  }

  // Muestra "posición/den : total/den" (+ " - Tresillo" si corresponde)
  function updateRhythmCounter(tickInWord, totalTicks){
    const info = getSubdivisionInfo();
    const cur = tickInWord * info.step;
    const tot = totalTicks * info.step;
    const label = info.tresillo ? ' - Tresillo' : '';
    rhythmCounterText.textContent = `${cur}/${info.denom} : ${tot}/${info.denom}${label}`;
  }

  function schedulerTick(){
    const now = performance.now();

    // Pulso principal: si el navegador pausó el timer (pestaña en segundo
    // plano, etc.) saltamos directo al pulso que corresponde ahora en vez
    // de disparar una ráfaga de clicks pegados recuperando los saltados.
    const nextBeatTime = originTime + beatCount * beatMs;
    if(now >= nextBeatTime){
      const idealCount = Math.floor((now - originTime) / beatMs);
      const idealTime = originTime + idealCount * beatMs;
      beatPulse();
      playClick(idealTime);
      beatCount = idealCount + 1;
    }

    const nextSubTickTime = originTime + subTickCount * tickMs;
    if(now >= nextSubTickTime){
      const idealCount = Math.floor((now - originTime) / tickMs);
      const idealTime = originTime + idealCount * tickMs;
      playSubClick(idealTime);
      subTickCount = idealCount + 1;
    }

    const nextWordTime = originTime + cumulativeTicks * tickMs;
    if(autoToggle.checked && now >= nextWordTime){
      generate();
    }
    // Morse: dispara cada onset al llegar su tick de la grilla (después de
    // generate() para que el onset del tick 0 de la palabra suene de inmediato).
    // Los onsets muy atrasados (timer pausado) se descartan en vez de ráfaga.
    while(morseOnsetIdx < morseOnsets.length){
      const onsetTime = originTime + morseOnsets[morseOnsetIdx] * tickMs;
      if(onsetTime > now) break;
      if(now - onsetTime < 120) playMorseClick(onsetTime);
      morseOnsetIdx++;
    }
    // Posición actual dentro de la palabra (1..total), sincronizada al reloj único
    if(autoToggle.checked && currentWordTotalTicks > 0){
      const wordStart = originTime + currentWordStartTicks * tickMs;
      let t = Math.floor((now - wordStart) / tickMs) + 1;
      t = Math.max(1, Math.min(currentWordTotalTicks, t));
      if(t !== lastTickInWord){
        lastTickInWord = t;
        updateRhythmCounter(t, currentWordTotalTicks);
      }
    }
  }

  // Avanza el contador de ticks en base a la palabra recién generada, y
  // arranca la barra de progreso con la duración real de esa palabra.
  // Usa Math.max con el tiempo transcurrido para no quedar "atrasado" si
  // generate() se disparó manualmente en vez de por el scheduler.
  function advanceWordSchedule(w){
    if(!autoToggle.checked) return;
    const totalTicks = sumDigits(toDigits(w));
    const now = performance.now();
    const elapsedTicks = (now - originTime) / tickMs;
    // Disparo del scheduler (llegó la hora): la palabra arranca exactamente en
    // la grilla, sin saltear ticks aunque el poll llegue unos ms tarde.
    // Disparo manual (antes de tiempo): arranca en el próximo tick de la grilla.
    const startTicks = elapsedTicks >= cumulativeTicks
      ? Math.max(cumulativeTicks, Math.floor(elapsedTicks))
      : Math.ceil(elapsedTicks);
    cumulativeTicks = startTicks + totalTicks;
    currentWordStartTicks = startTicks;
    currentWordTotalTicks = totalTicks;
    // Onsets de cada dígito (punto/raya y espacio), mismo recorrido que toDigits().
    morseOnsets = [];
    morseOnsetIdx = 0;
    let offTicks = 0;
    for(const ch of w){
      for(const sym of MORSE[ch]){
        morseOnsets.push(startTicks + offTicks);
        offTicks += sumDigits(sym === '-' ? valRaya.value : valPunto.value);
      }
      morseOnsets.push(startTicks + offTicks); // dígito de espacio (entre letras / fin de palabra)
      offTicks += sumDigits(valEspacio.value);
    }
    lastTickInWord = 1;
    updateRhythmCounter(1, totalTicks);

    // La barra se alinea al inicio/fin reales de la palabra en la grilla.
    const wordStartMs = originTime + startTicks * tickMs;
    const wordEndMs = wordStartMs + tickMs * totalTicks;
    const startFraction = Math.max(0, (now - wordStartMs) / (wordEndMs - wordStartMs));
    startProgress(Math.max(0, wordEndMs - now), startFraction);
  }

  // Según el checkbox "Mantener oculto", la incógnita del modo actual
  // queda siempre visible (por defecto) o siempre oculta.
  function applyVisibility(){
    const shouldHide = hideToggle.checked;
    const targets = mode === 'normal' ? [morseOut, digitsOut] : [word];
    const others = mode === 'normal' ? [word] : [morseOut, digitsOut];
    targets.forEach(el => el.classList.toggle('hidden', shouldHide));
    others.forEach(el => el.classList.remove('hidden'));
  }

  // La "siguiente palabra" se precomputa para poder mostrarla de antemano;
  // al generar, se convierte en la actual y se calcula una nueva para el preview.
  // En Morse → Letra la siguiente palabra se muestra como morse.
  function renderNextPreview(){
    if(!nextWord) return;
    nextWordText.textContent = mode === 'inverso' ? toMorse(nextWord) : nextWord;
  }

  // Visible en automático, y en Morse → Letra también en manual.
  function updatePreviewVisibility(){
    nextPreviewRow.classList.toggle('visible', autoToggle.checked || mode === 'inverso');
  }

  function refreshNextPreview(){
    nextWord = resolveWord(parseInt(len.value,10));
    renderNextPreview();
  }

  function generate(){
    const w = nextWord || resolveWord(parseInt(len.value,10));
    hasGenerated = true;

    morseOut.textContent = toMorse(w);
    morseOut.classList.remove('empty');

    digitsOut.textContent = toDigits(w);
    digitsOut.classList.remove('empty');

    word.classList.remove('placeholder');
    word.textContent = w;

    applyVisibility();
    refreshNextPreview();
    advanceWordSchedule(w);
  }

  refreshNextPreview();
  genBtn.addEventListener('click', generate);
  hideToggle.addEventListener('change', applyVisibility);

  autoToggle.addEventListener('change', () => {
    autoControls.classList.toggle('disabled', !autoToggle.checked);
    updatePreviewVisibility();
    autoPanel.style.display = autoToggle.checked ? '' : 'none';
    fixedWordPanel.style.display = autoToggle.checked ? '' : 'none';
    runManual.classList.toggle('active', !autoToggle.checked);
    runAuto.classList.toggle('active', autoToggle.checked);
    refreshNextPreview(); // la palabra fija solo aplica en automático
    rhythmCounterRow.classList.toggle('visible', autoToggle.checked);
    if(autoToggle.checked){
      startScheduler();
      generate();
    } else {
      stopScheduler();
    }
  });

  bpmRange.addEventListener('input', () => {
    bpmNumber.value = bpmRange.value;
    bpmValue.textContent = bpmRange.value;
    if(autoToggle.checked){
      resetEpoch();
      currentWordTotalTicks = 0;
    }
  });

  bpmNumber.addEventListener('input', () => {
    let v = parseInt(bpmNumber.value, 10);
    if(isNaN(v)) return;
    v = Math.min(240, Math.max(30, v));
    bpmRange.value = v;
    bpmValue.textContent = v;
    if(autoToggle.checked){
      resetEpoch();
      currentWordTotalTicks = 0;
    }
  });

  subdivisionSelect.addEventListener('change', () => {
    if(autoToggle.checked){
      resetEpoch();
      currentWordTotalTicks = 0; // la palabra en curso queda cortada por el reinicio de reloj
    }
  });

  toneRange.addEventListener('input', () => {
    toneValue.textContent = `(${toneRange.value}Hz)`;
  });
  subToneRange.addEventListener('input', () => {
    subToneValue.textContent = `(${subToneRange.value}Hz)`;
  });

  soundToggle.addEventListener('change', () => {
    soundControls.classList.toggle('disabled', !soundToggle.checked);
    if(soundToggle.checked) ensureAudioCtx();
  });

  morseToneRange.addEventListener('input', () => {
    morseToneValue.textContent = `(${morseToneRange.value}Hz)`;
  });
  morseSoundToggle.addEventListener('change', () => {
    morseSoundControls.classList.toggle('disabled', !morseSoundToggle.checked);
    if(morseSoundToggle.checked) ensureAudioCtx();
  });

  subSoundToggle.addEventListener('change', () => {
    subSoundControls.classList.toggle('disabled', !subSoundToggle.checked);
    if(subSoundToggle.checked) ensureAudioCtx();
  });

  // Flechas de codificación: valores de un dígito (1–9), porque toDigits/sumDigits cuentan dígito a dígito.
  const CODE_INPUTS = [valRaya, valPunto, valEspacio];
  function clampDigit(n){ return Math.min(9, Math.max(1, n)); }
  function stepCodeInput(el, d){
    const n = parseInt(el.value, 10);
    el.value = clampDigit((isNaN(n) ? 1 : n) + d);
  }
  document.querySelectorAll('[data-step-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      stepCodeInput(document.getElementById(btn.dataset.stepTarget), parseInt(btn.dataset.step, 10));
    });
  });
  document.querySelectorAll('[data-step-all]').forEach(btn => {
    btn.addEventListener('click', () => {
      const d = parseInt(btn.dataset.stepAll, 10);
      // Si alguno llegaría al límite no se mueve ninguno, para conservar las diferencias entre valores.
      const vals = CODE_INPUTS.map(el => { const n = parseInt(el.value, 10); return isNaN(n) ? 1 : n; });
      if(vals.some(n => n + d < 1 || n + d > 9)) return;
      CODE_INPUTS.forEach((el, i) => { el.value = vals[i] + d; });
    });
  });

  function setRun(auto){
    if(autoToggle.checked === auto) return;
    autoToggle.checked = auto;
    autoToggle.dispatchEvent(new Event('change'));
  }
  runManual.addEventListener('click', () => setRun(false));
  runAuto.addEventListener('click', () => setRun(true));

  fixedWordToggle.addEventListener('change', () => {
    fixedWordControls.classList.toggle('disabled', !fixedWordToggle.checked);
    refreshNextPreview();
  });

  fixedWordInput.addEventListener('input', () => {
    const clean = sanitizeFixedWord(fixedWordInput.value);
    if(clean !== fixedWordInput.value) fixedWordInput.value = clean;
    if(fixedWordToggle.checked) refreshNextPreview();
  });

  pinCurrentBtn.addEventListener('click', () => {
    if(!hasGenerated) return;
    fixedWordInput.value = word.textContent;
    fixedWordToggle.checked = true;
    fixedWordControls.classList.remove('disabled');
    refreshNextPreview();
  });

  // Estado inicial por defecto: Letra → Morse, Automático, Español.
  setRun(true);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch((err) => {
        console.warn('No se pudo registrar el service worker:', err);
      });
    });
  }