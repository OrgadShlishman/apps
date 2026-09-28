/* ===================== Data ===================== */
const STATIONS = [
  { id:1, name:"מיקוד קרוב-רחוק", duration:40, equipment:"אגודל או עט",
    hint:"קרוב לאגודל, רחוק לעצם — מחליפים כל 5 שניות",
    steps:[
      "עמדו זקוף, במרחק של כ-30 סנטימטר מהפנים, והחזיקו אגודל ישר מול העיניים.",
      "הביטו בקצה האגודל ומנו לאט עד 5, עד שהוא נראה חד לגמרי.",
      "הזיזו את המבט לעצם רחוק, לפחות שלושה מטרים, ומנו עד 5.",
      "חזרו לאגודל. זו חזרה אחת. צאו כשמונה חזרות עד סוף התחנה."
    ],
    pressureNote:"אם יש לחץ, הרפו מצח וכתפיים.",
    feel:"נעילה קצרה וחדה בכל מיקוד",
    anim:"focus",
    cues:[{t:0,text:"מבט קרוב"},{t:5,text:"מבט רחוק"},{t:10,text:"מבט קרוב"},{t:15,text:"מבט רחוק"},{t:20,text:"מבט קרוב"},{t:25,text:"מבט רחוק"},{t:30,text:"מבט קרוב"},{t:35,text:"מבט רחוק"}]
  },
  { id:2, name:"מעקב בתבנית שמונה", duration:40, equipment:null,
    hint:"העיניים עוקבות אחרי נקודה, הראש לא זז",
    steps:[
      "שבו יציב, ראש נינוח מולכם, בלי להזיז את הראש. כל התנועה בעיניים בלבד.",
      "דמיינו שמונה גדולה שוכבת על הצד, במרחק מטר עד שני מטרים מולכם.",
      "עקבו אחרי הנקודה לאורך כל הלולאה, לאיטיות ובלי לקפוץ קדימה.",
      "המשיכו באותו קצב לצד השני."
    ],
    pressureNote:"אם העיניים מקפיצות, האטו את הקצב.",
    feel:"תנועה חלקה ורציפה",
    anim:"figure8",
    cues:[{t:20,text:"מחליפים כיוון"}]
  },
  { id:3, name:"סיבובי עיניים", duration:30, equipment:null,
    hint:"עיגול איטי של המבט, הכיוון מתהפך באמצע",
    steps:[
      "שבו יציב, ראש יציב, כתפיים רפויות, מבט קדימה.",
      "הובילו את המבט למעלה, ואז בעיגול איטי: לצד, למטה, לצד השני וחזרה למעלה.",
      "המשיכו לסבב לצד השני.",
      "עצרו ונשמו אם מסתחררים. כשלושה עיגולים לכל כיוון מספיקים."
    ],
    pressureNote:"בלי מאמץ, ולעולם לא כאב.",
    feel:"מתיחה נעימה בקצוות הראייה",
    anim:"rotate",
    cues:[{t:15,text:"מחליפים כיוון"},{t:27,text:"עצרו ונשמו אם צריך"}]
  },
  { id:4, name:"מצמוץ והפרהה", duration:30, equipment:null,
    hint:"עשרה מצמוצים רכים ומלאים, וחזרה",
    steps:[
      "הביטו קדימה ומצמצו עשר פעמים בקצב טבעי: מצמוץ מלא ורך, בלי לכווץ.",
      "עצמו עיניים בעדינות למשך שתי נשימות ארוכות.",
      "פתחו וחזרו על אותו דבר שוב, כשלושה סבבים."
    ],
    pressureNote:null,
    feel:"רעננות ולחות קלה בעיניים",
    anim:"blink",
    cues:[{t:0,text:"מצמצו בעדינות עשר פעמים"},{t:10,text:"עצמו עיניים ונשמו"},{t:20,text:"פתחו וחזרו שוב"}]
  },
  { id:5, name:"מנוחה בכפות הידיים", duration:45, equipment:null,
    hint:"חושך מלא, בלי לחץ על העיניים",
    steps:[
      "שפשפו את כפות הידיים זו בזו במשך כמה שניות, עד שהן מתחממות מעט.",
      "עצמו עיניים והניחו את הידיים כקעריות עליהן, בלי לגעת בעיניים ובלי לחץ.",
      "שחררו את המצח, הלסת והכתפיים. נשמו לאט חמש עד שש נשימות ארוכות.",
      "בסיום הורידו קודם את הידיים, ורק אז פקחו עיניים לאט לאט."
    ],
    pressureNote:"מרגישים לחץ על העיניים? הרחיקו את הידיים.",
    feel:"חושך נעים וחום קל",
    anim:"palm",
    cues:[{t:0,text:"חממו את כפות הידיים"},{t:10,text:"כסו את העיניים בעדינות"},{t:35,text:"נשמו לאט"}]
  },
  { id:6, name:"פנסיל פוש-אפ", duration:45, equipment:"עיפרון או עט",
    hint:"מקרבים לאט, עוצרים לפני כפילות",
    steps:[
      "החזיקו עיפרון זקוף במרחק זרוע פשוטה מהפנים, בגובה העיניים.",
      "הביטו בקצה שלו וודאו ששתי העיניים רואות אותו אחד וחד.",
      "כשהעיניים עוקבות כל הדרך, קרבו אותו לאט מאוד לכיוון קצה האף.",
      "לא מצליחים לחדד לאחד? עצרו, החזיקו שתי שניות וניסו לחדד בחזרה.",
      "הרחיקו בחזרה למרחק זרוע. זו חזרה אחת, צאו כשלוש חזרות."
    ],
    pressureNote:"כפילות שנשארת או כאב — מפסיקים.",
    feel:"איסוף עדין של העיניים פנימה",
    anim:"pushup",
    cues:[{t:5,text:"מקרבים לאט"},{t:20,text:"לא מצליחים? מרחיקים ומתחילים שוב"},{t:35,text:"חזרה למרחק זרוע"}]
  },
  { id:7, name:"הפסקת עשרים-עשרים-עשרים", duration:20, equipment:null,
    hint:"מבט רחוק ורפוי",
    steps:[
      "הסיטו את המבט מהמסך לגמרי.",
      "מצאו את העצם הרחוק ביותר שאפשר: סוף מסדרון, בניין או עץ מחוץ לחלון, לפחות כשישה מטרים.",
      "הביטו בו בריפיון עשרים שניות. אפשר ורצוי לצמצם בחופשיות."
    ],
    pressureNote:null,
    feel:"שחרור של תחושת המיקוד הקרוב",
    anim:"faraway",
    cues:[{t:0,text:"הסיטו את המבט מהמסך"},{t:10,text:"מבט רחוק ורפוי"}]
  }
];

const STREAK_GRADES = [
  {min:30,label:"אלופי ההפסקות"},
  {min:15,label:"הדבקה יפה"},
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

function todayStr(){ return new Date().toISOString().slice(0,10); }
function daysAgoStr(n){ const d=new Date(); d.setDate(d.getDate()-n); return d.toISOString().slice(0,10); }

function computeStreak(){
  const set = new Set(appData.history);
  let streak = 0;
  let cursor = new Date();
  // if today not done yet, streak counts up to yesterday
  if (!set.has(todayStr())) cursor.setDate(cursor.getDate()-1);
  while (true) {
    const s = cursor.toISOString().slice(0,10);
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
    const s = d.toISOString().slice(0,10);
    const done = set.has(s);
    if (d <= now && done) count++;
    flags.push({label:["א","ב","ג","ד","ה","ו","ש"][i], done, isToday: s===todayStr(), future: d>now});
  }
  return {count, flags};
}
function streakGradeLabel(){
  const total = appData.history.length;
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
  elapsed = 0; paused = false; spokenCueKeys = new Set();
  state.stationIdx = idx;
  render();
  const st = STATIONS[idx];
  speak(`תחנה ${st.id} מתוך שבע. ${st.name}. ${st.hint}`);
  startTimer();
}
function startTimer(){
  stopTimer();
  timerHandle = setInterval(()=>{
    if (paused) return;
    elapsed++;
    const st = STATIONS[state.stationIdx];
    st.cues.forEach(c=>{
      const key = st.id+'_'+c.t;
      if (elapsed === c.t && !spokenCueKeys.has(key)) { spokenCueKeys.add(key); speak(c.text); }
    });
    if (elapsed === Math.max(1, st.duration-4) && !spokenCueKeys.has('feel_'+st.id)) {
      spokenCueKeys.add('feel_'+st.id);
      speak(`אמור להרגיש: ${st.feel}`);
    }
    if (elapsed >= st.duration) {
      stopTimer();
      onStationDone();
      return;
    }
    updateTimerUI();
  }, 1000);
}
function stopTimer(){ if (timerHandle) { clearInterval(timerHandle); timerHandle=null; } }
function togglePause(){
  paused = !paused;
  document.getElementById('pauseBtn').textContent = paused ? "המשך" : "השהה";
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
      <p class="sub">בלי הבטחות קסם — רק הרגל יומי קטן</p>
      <button class="cta" onclick="startFullTraining()">מתחילים אימון</button>
      <div class="hero-note">אימון אחד — כ-5 דקות, שבע תחנות</div>
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
      <div class="goal-msg">${remain===0 ? "היעד השבועי הושג! כל הכבוד" : `עוד ${remain} אימונים להשגת היעד השבועי`}</div>
    </div>

    <div class="card">
      <div class="goals-title" style="margin-bottom:10px">רשת שבע התחנות</div>
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
        <div class="goals-title">מצב הפסקת 20-20-20</div>
        <div class="st-hint">טיימר עגול לעבודה מול מסך: כל 20 דקות, 20 שניות מבט למרחק</div>
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

      <div class="anim-area">${stationAnimHtml(st.anim)}</div>

      <div class="timer-ring-wrap">
        <div class="timer-num">${fmtTime(remaining)}</div>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>

      <ol class="steps-list">
        ${st.steps.map(s=>`<li>${s}</li>`).join('')}
      </ol>
      ${st.pressureNote ? `<div class="pressure-note">${st.pressureNote}</div>` : ''}
      <div class="feel-line">אמור להרגיש: ${st.feel}</div>

      <div class="train-controls">
        <button id="pauseBtn" onclick="togglePause()">השהה</button>
        <button onclick="skipStation()">דלג לתחנה הבאה</button>
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
      <p>דרגת הדבקה: <b>${streakGradeLabel()}</b></p>
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
      <div class="break-note">הטיימר פועל רק כל עוד הדף הזה פתוח. אפשר לעבור שלב בכל רגע.</div>
      <div class="train-controls">
        <button onclick="breakSwitchNow()">מעבר שלב עכשיו</button>
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

/* Init */
render();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
