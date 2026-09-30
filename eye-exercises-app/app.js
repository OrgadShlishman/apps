/* ===================== Data ===================== */
const STATIONS = [
  { id:1, name:"מיקוד קרוב-רחוק", duration:40, equipment:"אגודל או עט",
    hint:"מבט מקרוב למבט מרחוק — מחליפים כל 5 שניות",
    steps:[
      "שבו או עמדו זקופים. החזיקו את האגודל מול העיניים, במרחק של כ-30 סנטימטר מהפנים.",
      "הביטו בקצה האגודל וספרו לאט עד חמש, עד שהוא נראה ברור וחד.",
      "העבירו את המבט לעצם שנמצא במרחק של לפחות שלושה מטרים, וספרו עד חמש.",
      "חזרו לאגודל. זו חזרה אחת. בצעו כשמונה חזרות עד סוף התחנה."
    ],
    pressureNote:"אם יש לחץ, הרפו מצח וכתפיים.",
    feel:"מיקוד קצר וברור בכל פעם",
    anim:"focus",
    cues:[{t:0,text:"מבט קרוב"},{t:5,text:"מבט רחוק"},{t:10,text:"מבט קרוב"},{t:15,text:"מבט רחוק"},{t:20,text:"מבט קרוב"},{t:25,text:"מבט רחוק"},{t:30,text:"מבט קרוב"},{t:35,text:"מבט רחוק"}]
  },
  { id:2, name:"מעקב בתבנית שמונה שוכבת", duration:40, equipment:null,
    hint:"העיניים עוקבות אחר נקודה, והראש נשאר יציב",
    steps:[
      "שבו בנוחות והביטו קדימה. השאירו את הראש יציב, ובצעו את כל התנועה בעיניים בלבד.",
      "דמיינו את הספרה שמונה שוכבת על הצד, במרחק של מטר עד שני מטרים מולכם.",
      "עקבו באיטיות אחר הנקודה לאורך כל הלולאה, בלי לקפוץ קדימה.",
      "המשיכו באותו קצב לצד השני."
    ],
    pressureNote:"אם העיניים מקפיצות, האטו את הקצב.",
    feel:"תנועה חלקה ורציפה",
    anim:"figure8",
    cues:[{t:20,text:"מחליפים כיוון"}]
  },
  { id:3, name:"סיבובי עיניים עדינים", duration:30, equipment:null,
    hint:"מניעים את המבט במעגל איטי, ומחליפים כיוון באמצע",
    steps:[
      "שבו יציב, ראש יציב, כתפיים רפויות, מבט קדימה.",
      "העבירו את המבט למעלה, ואז בתנועה מעגלית איטית: הצידה, למטה, לצד השני וחזרה למעלה.",
      "המשיכו לעוד סבב בכיוון ההפוך.",
      "אם אתם מרגישים סחרחורת, עצרו ונשמו. כשלושה מעגלים לכל כיוון מספיקים."
    ],
    pressureNote:"בלי מאמץ, ולעולם לא כאב.",
    feel:"מתיחה עדינה בקצוות שדה הראייה",
    anim:"rotate",
    cues:[{t:15,text:"מחליפים כיוון"},{t:27,text:"עצרו ונשמו אם צריך"}]
  },
  { id:4, name:"מצמוץ והרפיה", duration:30, equipment:null,
    hint:"עשרה מצמוצים רכים ומלאים, ולאחריהם הרפיה",
    steps:[
      "הביטו קדימה ומצמצו עשר פעמים בקצב טבעי. מצמצים באופן מלא ורך, בלי לכווץ את העיניים.",
      "עצמו את העיניים בעדינות למשך שתי נשימות ארוכות.",
      "פקחו את העיניים וחזרו על הרצף, עד שלושה סבבים."
    ],
    pressureNote:null,
    feel:"תחושת רעננות ולחות קלה בעיניים",
    anim:"blink",
    cues:[{t:0,text:"מצמצו בעדינות עשר פעמים"},{t:10,text:"עצמו עיניים ונשמו"},{t:20,text:"פתחו וחזרו שוב"}]
  },
  { id:5, name:"הרפיה בכפות הידיים", duration:45, equipment:null,
    hint:"חושך נעים, בלי לחץ על העיניים",
    steps:[
      "שפשפו את כפות הידיים זו בזו במשך כמה שניות, עד שהן מתחממות מעט.",
      "עצמו את העיניים והניחו את כפות הידיים מעליהן כקעריות, בלי לגעת בעיניים ובלי להפעיל לחץ.",
      "הרפו את המצח, הלסת והכתפיים. נשמו לאט חמש עד שש נשימות ארוכות.",
      "בסיום הורידו קודם את הידיים, ורק לאחר מכן פקחו את העיניים באיטיות."
    ],
    pressureNote:"מרגישים לחץ על העיניים? הרחיקו את הידיים.",
    feel:"חושך נעים וחום קל סביב העיניים",
    anim:"palm",
    cues:[{t:0,text:"חממו את כפות הידיים"},{t:10,text:"כסו את העיניים בעדינות"},{t:35,text:"נשמו לאט"}]
  },
  { id:6, name:"קירוב עיפרון", duration:45, equipment:"עיפרון או עט",
    hint:"מקרבים את העיפרון באיטיות ועוצרים לפני ראייה כפולה",
    steps:[
      "החזיקו עיפרון זקוף, במרחק זרוע מהפנים ובגובה העיניים.",
      "הביטו בקצה העיפרון וודאו שאתם רואים תמונה אחת וברורה.",
      "המשיכו להביט בקצהו וקרבו אותו באיטיות רבה לכיוון קצה האף.",
      "אם התמונה מתחילה להתפצל, עצרו, החזיקו שתי שניות, והרחיקו מעט את העיפרון עד שתראו תמונה אחת.",
      "הרחיקו את העיפרון בחזרה למרחק זרוע. זו חזרה אחת. בצעו כשלוש חזרות."
    ],
    pressureNote:"כפילות שנשארת או כאב — מפסיקים.",
    feel:"כינוס עדין של העיניים פנימה",
    anim:"pushup",
    cues:[{t:5,text:"מקרבים לאט"},{t:20,text:"לא מצליחים? מרחיקים ומתחילים שוב"},{t:35,text:"חזרה למרחק זרוע"}]
  },
  { id:7, name:"הפסקת עשרים-עשרים-עשרים", duration:20, equipment:null,
    hint:"מבט רחוק ורפוי",
    steps:[
      "הסיטו את המבט מהמסך לגמרי.",
      "מצאו עצם רחוק ככל האפשר, כמו סוף מסדרון, בניין או עץ מחוץ לחלון, במרחק של לפחות שישה מטרים.",
      "הביטו בו ברוגע במשך עשרים שניות. אפשר ורצוי למצמץ באופן טבעי."
    ],
    pressureNote:null,
    feel:"הקלה בתחושת המיקוד הקרוב",
    anim:"faraway",
    cues:[{t:0,text:"הסיטו את המבט מהמסך"},{t:10,text:"מבט רחוק ורפוי"}]
  }
];

const STREAK_GRADES = [
  {min:30,label:"אלופי ההפסקות"},
  {min:15,label:"מתמידים"},
  {min:5,label:"בקצב"},
  {min:1,label:"מתחממים"},
  {min:0,label:"יוצאים לדרך"}
];

/* ===================== Storage ===================== */
const STORE_KEY = "eyeAppData_v1";
function loadData(){
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e){}
  return { history:[], weeklyGoal:5, voiceEnabled:true };
}
function saveData(d){ localStorage.setItem(STORE_KEY, JSON.stringify(d)); }
let appData = loadData();

function localDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
function todayStr(){ return localDateKey(); }
function daysAgoStr(n){ const d=new Date(); d.setDate(d.getDate()-n); return localDateKey(d); }

function computeStreak(){
  const set = new Set(appData.history);
  let streak = 0;
  let cursor = new Date();
  // if today not done yet, streak counts up to yesterday
  if (!set.has(todayStr())) cursor.setDate(cursor.getDate()-1);
  while (true) {
    const s = localDateKey(cursor);
    if (set.has(s)) { streak++; cursor.setDate(cursor.getDate()-1); }
    else break;
  }
  return streak;
}
function weekDoneCount(){
  const set = new Set(appData.history);
  const now = new Date();
  const dow = now.getDay(); // 0=Sun
  let count = 0;
  const flags = [];
  for (let i=0;i<7;i++){
    const d = new Date(now);
    d.setDate(now.getDate() - dow + i);
    const s = localDateKey(d);
    const done = set.has(s);
    if (d <= now && done) count++;
    flags.push({label:["א","ב","ג","ד","ה","ו","ש"][i], done, isToday: s===todayStr(), future: d>now});
  }
  return {count, flags};
}
function streakGradeLabel(){
  const total = computeStreak();
  for (const g of STREAK_GRADES) if (total >= g.min) return g.label;
  return STREAK_GRADES[STREAK_GRADES.length-1].label;
}
function markTodayDone(){
  const t = todayStr();
  if (!appData.history.includes(t)) appData.history.push(t);
  saveData(appData);
}

/* ===================== Voice ===================== */
let heVoice = null;
function pickVoice(){
  const voices = speechSynthesis.getVoices ? speechSynthesis.getVoices() : [];
  heVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("he")) || null;
}
if ('speechSynthesis' in window) {
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}
function speak(text){
  if (!appData.voiceEnabled) return;
  if (!('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'he-IL';
    if (heVoice) u.voice = heVoice;
    u.rate = 1.0;
    speechSynthesis.speak(u);
  } catch(e){}
}
function toggleVoice(){
  appData.voiceEnabled = !appData.voiceEnabled;
  saveData(appData);
  if (!appData.voiceEnabled && 'speechSynthesis' in window) speechSynthesis.cancel();
  renderVoiceBtn();
}
function renderVoiceBtn(){
  const b = document.getElementById('voiceBtn');
  if (b) b.textContent = appData.voiceEnabled ? "🔊" : "🔇";
}

/* ===================== App State / Router ===================== */
let state = { screen:'home', stationIdx:0, singleStation:false };
let timerHandle = null;
let elapsed = 0;
let paused = false;
let stationStarted = false;
let timerStartedAt = null;
let spokenCueKeys = new Set();

const root = document.getElementById('app');

function goHome(){
  stopTimer();
  state = { screen:'home', stationIdx:0, singleStation:false };
  render();
}
function startFullTraining(){
  state = { screen:'training', stationIdx:0, singleStation:false };
  enterStation(0);
}
function startSingleStation(idx){
  state = { screen:'training', stationIdx:idx, singleStation:true };
  enterStation(idx);
}
function enterStation(idx){
  stopTimer();
  elapsed = 0; paused = false; stationStarted = false; timerStartedAt = null; spokenCueKeys = new Set();
  state.stationIdx = idx;
  render();
}
function announceStationStart(){
  const st = STATIONS[state.stationIdx];
  const firstCue = st.cues.find(c => c.t === 0);
  if (firstCue) spokenCueKeys.add(st.id + '_' + firstCue.t);
  speak([`תחנה ${st.id} מתוך שבע. ${st.name}. ${st.hint}`, firstCue?.text].filter(Boolean).join('. '));
}
function startCurrentStation(){
  if (stationStarted && !paused) return;
  stationStarted = true;
  paused = false;
  timerStartedAt = Date.now() - elapsed * 1000;
  announceStationStart();
  startTimer();
  renderTraining();
}
function startTimer(){
  stopTimer();
  timerHandle = setInterval(()=>{
    if (!stationStarted || paused || timerStartedAt === null) return;
    elapsed = Math.floor((Date.now() - timerStartedAt) / 1000);
    const st = STATIONS[state.stationIdx];
    st.cues.forEach(c=>{
      const key = st.id+'_'+c.t;
      if (elapsed >= c.t && !spokenCueKeys.has(key)) { spokenCueKeys.add(key); speak(c.text); }
    });
    if (elapsed >= Math.max(1, st.duration-4) && !spokenCueKeys.has('feel_'+st.id)) {
      spokenCueKeys.add('feel_'+st.id);
      speak(`מה אמורים להרגיש: ${st.feel}`);
    }
    if (elapsed >= st.duration) {
      elapsed = st.duration;
      updateTimerUI();
      stopTimer();
      onStationDone();
      return;
    }
    updateTimerUI();
  }, 250);
}
function stopTimer(){ if (timerHandle) { clearInterval(timerHandle); timerHandle=null; } }
function togglePause(){
  if (!stationStarted) return;
  if (paused) {
    paused = false;
    timerStartedAt = Date.now() - elapsed * 1000;
    startTimer();
  } else {
    elapsed = Math.floor((Date.now() - timerStartedAt) / 1000);
    paused = true;
    stopTimer();
  }
  renderTraining();
}
function skipStation(){ stopTimer(); onStationDone(); }
function onStationDone(){
  if (state.singleStation) {
    speak("סיימת את התרגיל.");
    goHome();
    return;
  }
  if (state.stationIdx < STATIONS.length-1) {
    speak("מעבר לתחנה הבאה");
    enterStation(state.stationIdx+1);
  } else {
    markTodayDone();
    speak("סיימת! כל הכבוד.");
    state.screen = 'summary';
    render();
  }
}

/* ===================== Break mode (20-20-20) ===================== */
let breakState = { phase:'work', remaining:20*60 };
let breakHandle = null;
function enterBreakMode(){
  state.screen = 'break';
  breakState = { phase:'work', remaining:20*60 };
  render();
  startBreakTimer();
}
function startBreakTimer(){
  stopBreakTimer();
  breakHandle = setInterval(()=>{
    breakState.remaining--;
    if (breakState.remaining <= 0) {
      if (breakState.phase === 'work') {
        breakState.phase = 'look';
        breakState.remaining = 20;
        speak("הסיטו את המבט מהמסך. הביטו קדימה על משהו רחוק, לפחות שישה מטרים.");
      } else {
        breakState.phase = 'work';
        breakState.remaining = 20*60;
        speak("חוזרים לעבודה.");
      }
    }
    renderBreakUI();
  }, 1000);
}
function stopBreakTimer(){ if (breakHandle) { clearInterval(breakHandle); breakHandle=null; } }
function breakSwitchNow(){
  if (breakState.phase === 'work') { breakState.phase='look'; breakState.remaining=20; speak("הביטו קדימה, רחוק ורפוי."); }
  else { breakState.phase='work'; breakState.remaining=20*60; speak("חוזרים לעבודה."); }
  renderBreakUI();
}
function exitBreakMode(){ stopBreakTimer(); goHome(); }

/* ===================== Rendering ===================== */
function fmtTime(s){ const m=Math.floor(s/60); const sec=s%60; return String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0'); }

function render(){
  if (state.screen === 'home') renderHome();
  else if (state.screen === 'training') renderTraining();
  else if (state.screen === 'summary') renderSummary();
  else if (state.screen === 'break') renderBreak();
  renderVoiceBtn();
}

function renderHome(){
  const streak = computeStreak();
  const {count, flags} = weekDoneCount();
  const grade = streakGradeLabel();
  const goal = appData.weeklyGoal;
  const remain = Math.max(0, goal - count);

  root.innerHTML = `
    <div class="hero">
      <div class="hero-emoji">🌿</div>
      <h1>תנו לעיניים רגע לנשום</h1>
      <p class="sub">בלי הבטחות קסם, רק הרגל יומי קטן</p>
      <button class="cta" onclick="startFullTraining()">התחלת אימון</button>
      <div class="hero-note">אימון אחד, כחמש דקות ושבע תחנות</div>
    </div>

    <div class="stats-strip">
      <div class="stat"><div class="stat-num">${streak}</div><div class="stat-label">ימים ברצף</div></div>
      <div class="stat"><div class="stat-num">${appData.history.length}</div><div class="stat-label">אימונים שהושלמו</div></div>
      <div class="stat"><div class="stat-num">${flags.find(f=>f.isToday && f.done) ? "✔️" : "—"}</div><div class="stat-label">היום</div></div>
    </div>

    <div class="card goals">
      <div class="goals-row">
        <span class="goals-title">קצב ומטרות</span>
        <span class="grade-badge">${grade}</span>
      </div>
      <div class="week-strip">
        ${flags.map(f=>`<div class="day ${f.done?'done':''} ${f.isToday?'today':''}"><div class="day-name">${f.label}</div><div class="day-dot">${f.done?'✔':''}</div></div>`).join('')}
      </div>
      <div class="goal-row">
        <span>יעד שבועי:</span>
        <button class="small" onclick="changeGoal(-1)">－</button>
        <span class="goal-num">${goal}</span>
        <button class="small" onclick="changeGoal(1)">＋</button>
      </div>
      <div class="goal-msg">${remain===0 ? "היעד השבועי הושג! כל הכבוד" : `נשארו עוד ${remain} אימונים להשגת היעד השבועי`}</div>
    </div>

    <div class="card">
      <div class="goals-title" style="margin-bottom:10px">שבע תחנות האימון</div>
      <div class="station-grid">
        ${STATIONS.map((st,i)=>`
          <div class="station-card" onclick="startSingleStation(${i})">
            <div class="st-num">${st.id}</div>
            <div class="st-name">${st.name}</div>
            <div class="st-hint">${st.hint}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="card break-card" onclick="enterBreakMode()">
      <div class="break-icon">⏱️</div>
      <div>
        <div class="goals-title">מצב הפסקת עשרים-עשרים-עשרים</div>
        <div class="st-hint">טיימר לעבודה מול מסך: כל עשרים דקות, עשרים שניות של מבט למרחק</div>
      </div>
    </div>

    ${footerHtml()}
  `;
}

function stationAnimHtml(anim){
  const map = {
    focus: `<div class="anim-focus"><div class="dot near"></div><div class="dot far"></div></div>`,
    figure8: `<div class="anim-fig8"><div class="mover"></div></div>`,
    rotate: `<div class="anim-rotate"><div class="mover2"></div></div>`,
    blink: `<div class="anim-blink"><div class="eye"></div></div>`,
    palm: `<div class="anim-palm">🤲</div>`,
    pushup: `<div class="anim-pushup"><div class="pencil">✏️</div></div>`,
    faraway: `<div class="anim-faraway">🌅</div>`
  };
  return map[anim] || '';
}

function renderTraining(){
  const st = STATIONS[state.stationIdx];
  const remaining = Math.max(0, st.duration - elapsed);
  const pct = Math.min(100, (elapsed/st.duration)*100);
  root.innerHTML = `
    <div class="train-header">
      <button class="back" onclick="goHome()">✕</button>
      <div class="progress-dots">
        ${STATIONS.map((s,i)=>`<span class="pdot ${i===state.stationIdx?'active':''} ${i<state.stationIdx?'past':''}"></span>`).join('')}
      </div>
      <div style="width:34px"></div>
    </div>

    <div class="card station-view">
      <div class="st-title">תחנה ${st.id} מתוך 7 — ${st.name}</div>
      ${st.equipment ? `<div class="eq-note">דרוש: ${st.equipment}</div>` : ''}

      <div class="demo-title">המחשה לתנועה</div>
      <div class="anim-area" role="img" aria-label="המחשה מונפשת לתרגיל">${stationAnimHtml(st.anim)}</div>

      <div class="timer-ring-wrap">
        <div class="timer-label">${stationStarted ? (paused ? "מושהה" : "זמן שנותר") : "מוכן להתחלה"}</div>
        <div class="timer-num">${fmtTime(remaining)}</div>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>

      <ol class="steps-list">
        ${st.steps.map(s=>`<li>${s}</li>`).join('')}
      </ol>
      ${st.pressureNote ? `<div class="pressure-note">${st.pressureNote}</div>` : ''}
      <div class="feel-line">מה אמורים להרגיש: ${st.feel}</div>

      <div class="train-controls">
        <button id="pauseBtn" onclick="togglePause()">השהה</button>
        <button onclick="skipStation()">דלג על התחנה</button>
      </div>
    </div>
    ${footerHtml()}
  `;
}
function updateTimerUI(){
  const st = STATIONS[state.stationIdx];
  const remaining = Math.max(0, st.duration - elapsed);
  const pct = Math.min(100, (elapsed/st.duration)*100);
  const num = document.querySelector('.timer-num');
  const fill = document.querySelector('.progress-fill');
  if (num) num.textContent = fmtTime(remaining);
  if (fill) fill.style.width = pct+'%';
}

function renderSummary(){
  const streak = computeStreak();
  const {count} = weekDoneCount();
  const goal = appData.weeklyGoal;
  root.innerHTML = `
    <div class="card summary-card">
      <div class="hero-emoji">✔️</div>
      <h2>האימון של היום נרשם</h2>
      <p>הרצף הנוכחי: <b>${streak}</b> ימים ברצף</p>
      <p>המצב השבועי: <b>${count} / ${goal}</b> אימונים</p>
      <p>רמת ההתמדה: <b>${streakGradeLabel()}</b></p>
      <button class="cta" onclick="goHome()">חזרה למסך הבית</button>
    </div>
    ${footerHtml()}
  `;
}

function renderBreak(){
  root.innerHTML = `
    <div class="train-header">
      <button class="back" onclick="exitBreakMode()">✕</button>
      <div class="goals-title">מצב הפסקת עשרים-עשרים-עשרים</div>
      <div style="width:34px"></div>
    </div>
    <div class="card break-view">
      <div class="break-phase" id="breakPhaseLabel"></div>
      <div class="break-ring"><div class="break-num" id="breakNum"></div></div>
      <div class="break-note">הטיימר פועל כל עוד הדף פתוח. אפשר לעבור שלב בכל רגע.</div>
      <div class="train-controls">
        <button onclick="breakSwitchNow()">מעבר לשלב הבא עכשיו</button>
      </div>
    </div>
    ${footerHtml()}
  `;
  renderBreakUI();
}
function renderBreakUI(){
  const label = document.getElementById('breakPhaseLabel');
  const num = document.getElementById('breakNum');
  if (!label || !num) return;
  label.textContent = breakState.phase === 'work' ? "עובדים מול מסך" : "הביטו למרחק";
  num.textContent = fmtTime(breakState.remaining);
  document.querySelector('.break-ring').className = 'break-ring ' + (breakState.phase==='look' ? 'look' : '');
}

function changeGoal(d){
  appData.weeklyGoal = Math.min(7, Math.max(1, appData.weeklyGoal + d));
  saveData(appData);
  renderHome();
}

function footerHtml(){
  return `
    <div class="disclaimer">
      <div class="disc-title">חשוב לדעת</div>
      <p>האפליקציה אינה טיפול רפואי ואינה דרך מוכחת למנוע בעיות ראייה. היא כלי להפסקות ולהרגלי מבט נוחים בלבד.</p>
      <p>אם מופיעים כאב, סחרחורת או ראייה כפולה — מפסיקים ופונים לאיש מקצוע.</p>
      <div class="disc-title" style="margin-top:10px">מקורות</div>
      <p><a href="https://www.aao.org/eye-health/tips-prevention/computer-usage" target="_blank">AAO — הרגלי מבט מול מסכים</a></p>
      <p><a href="https://www.aao.org/eye-health/diseases/what-is-eye-strain" target="_blank">AAO — מאמץ עיניים</a></p>
      <p><a href="https://www.uhd.nhs.uk" target="_blank">NHS — תרגילי התכנסות</a></p>
    </div>
  `;
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && state.screen === 'training' && stationStarted && !paused) {
    updateTimerUI();
  }
});

/* Init */
render();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
