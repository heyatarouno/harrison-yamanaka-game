(function(){

/* ===== ワードリスト ===== */

// 難易度1（簡単）：計72個（子供でもわかる、身近な単語や概念）
var WORDS_EASY = [
  // 果物
  ["りんご","果物"],["バナナ","果物"],["いちご","果物"],["みかん","果物"],["メロン","果物"],
  ["ぶどう","果物"],["すいか","果物"],["もも","果物"],
  // 野菜
  ["トマト","野菜"],["にんじん","野菜"],["じゃがいも","野菜"],["たまねぎ","野菜"],["きゅうり","野菜"],
  // 飲み物
  ["コーラ","飲み物"],["オレンジジュース","飲み物"],["牛乳","飲み物"],["お茶","飲み物"],["水","飲み物"],
  ["麦茶","飲み物"],["コーヒー","飲み物"],["ココア","飲み物"],
  // 食べ物
  ["ケーキ","食べ物"],["チョコレート","食べ物"],["アイスクリーム","食べ物"],["おにぎり","食べ物"],["クッキー","食べ物"],
  ["寿司","食べ物"],["カレー","食べ物"],["ラーメン","食べ物"],
  ["パン","食べ物"],["うどん","食べ物"],["オムライス","食べ物"],["ハンバーグ","食べ物"],["サンドイッチ","食べ物"],
  // 動物
  ["犬","動物"],["猫","動物"],["うさぎ","動物"],["ペンギン","動物"],["キリン","動物"],
  ["ライオン","動物"],["パンダ","動物"],
  ["ゾウ","動物"],["サル","動物"],["ブタ","動物"],["ウマ","動物"],["コアラ","動物"],
  // 乗り物
  ["電車","乗り物"],["自転車","乗り物"],["バス","乗り物"],["車","乗り物"],["飛行機","乗り物"],
  ["新幹線","乗り物"],["タクシー","乗り物"],["トラック","乗り物"],["ヘリコプター","乗り物"],["船","乗り物"],
  // 場所
  ["海","場所"],["公園","場所"],["学校","場所"],["病院","場所"],["スーパー","場所"],
  ["東京タワー","場所"],["富士山","場所"],
  ["動物園","場所"],["水族館","場所"],["コンビニ","場所"],["駅","場所"],["プール","場所"],
  // スポーツ
  ["サッカー","スポーツ"],["野球","スポーツ"],["卓球","スポーツ"],["スキー","スポーツ"],
];

// 難易度2（中間）：計74個（一般的な大人の常識＋EASYより一部）
var WORDS_MEDIUM = [
  // 食べ物
  ["ハンバーガー","食べ物"],["ピザ","食べ物"],["たこ焼き","食べ物"],["餃子","食べ物"],["焼肉","食べ物"],
  ["すき焼き","食べ物"],["天ぷら","食べ物"],["しゃぶしゃぶ","食べ物"],["グラタン","食べ物"],["パスタ","食べ物"],
  ["寿司","食べ物"],["カレー","食べ物"],["ラーメン","食べ物"],["アイスクリーム","食べ物"],["ケーキ","食べ物"],
  // 職業
  ["医者","職業"],["消防士","職業"],["パイロット","職業"],["弁護士","職業"],["美容師","職業"],
  ["漫画家","職業"],["俳優","職業"],["警察官","職業"],["教師","職業"],["シェフ","職業"],
  ["看護師","職業"],["プログラマー","職業"],["大工","職業"],["保育士","職業"],["薬剤師","職業"],
  // スポーツ
  ["テニス","スポーツ"],["バスケットボール","スポーツ"],["水泳","スポーツ"],["マラソン","スポーツ"],["ゴルフ","スポーツ"],
  ["バレーボール","スポーツ"],["ラグビー","スポーツ"],["柔道","スポーツ"],["剣道","スポーツ"],["スノーボード","スポーツ"],
  ["サッカー","スポーツ"],["野球","スポーツ"],["スキー","スポーツ"],
  // 場所
  ["温泉","場所"],["図書館","場所"],["遊園地","場所"],["神社","場所"],["映画館","場所"],
  ["美術館","場所"],["空港","場所"],["市役所","場所"],["警察署","場所"],["郵便局","場所"],
  ["動物園","場所"],["水族館","場所"],["富士山","場所"],
  // 日用品
  ["スマートフォン","日用品"],["傘","日用品"],["めがね","日用品"],["ヘッドホン","日用品"],["腕時計","日用品"],
  ["掃除機","日用品"],["冷蔵庫","日用品"],["洗濯機","日用品"],["パソコン","日用品"],["電子レンジ","日用品"],
  // 楽器
  ["ピアノ","楽器"],["ギター","楽器"],["バイオリン","楽器"],["ドラム","楽器"],["トランペット","楽器"],
  // 動物
  ["ライオン","動物"],["パンダ","動物"],["ペンギン","動物"],["キリン","動物"],["ゾウ","動物"],
];

// 難易度3（ニッチ・難しい）：計81個
var WORDS_HARD = [
  // 食べ物（5）
  ["くさや","食べ物"],["ドリアン","食べ物"],["フォアグラ","食べ物"],["ブルーチーズ","食べ物"],["フグ","食べ物"],
  // スポーツ選手（5）
  ["イチロー","スポーツ選手"],["マイケル・ジョーダン","スポーツ選手"],["ウサイン・ボルト","スポーツ選手"],
  ["ロジャー・フェデラー","スポーツ選手"],["モハメド・アリ","スポーツ選手"],
  // 歴史人物（10）
  ["織田信長","歴史人物"],["徳川家康","歴史人物"],["豊臣秀吉","歴史人物"],["坂本龍馬","歴史人物"],["聖徳太子","歴史人物"],
  ["西郷隆盛","歴史人物"],["源頼朝","歴史人物"],["紫式部","歴史人物"],["卑弥呼","歴史人物"],["福沢諭吉","歴史人物"],
  // 世界の偉人（5）
  ["アインシュタイン","世界の偉人"],["ナポレオン","世界の偉人"],["クレオパトラ","世界の偉人"],
  ["シェイクスピア","世界の偉人"],["レオナルド・ダ・ヴィンチ","世界の偉人"],
  // 感情（10）
  ["憎しみ","感情"],["孤独","感情"],["嫉妬","感情"],["後悔","感情"],["不安","感情"],
  ["諦念","感情"],["郷愁","感情"],["焦燥","感情"],["畏敬","感情"],["歓喜","感情"],
  // ことわざ（5）
  ["七転び八起き","ことわざ"],["石の上にも三年","ことわざ"],["棚から牡丹餅","ことわざ"],
  ["猫に小判","ことわざ"],["馬の耳に念仏","ことわざ"],
  // 四字熟語（5）
  ["一石二鳥","四字熟語"],["温故知新","四字熟語"],["試行錯誤","四字熟語"],
  ["自業自得","四字熟語"],["以心伝心","四字熟語"],
  // 思想（6）
  ["民主主義","思想"],["資本主義","思想"],["実存主義","思想"],
  ["哲学","思想"],["無常","思想"],["諸行無常","思想"],
  // 心理（5）
  ["同調圧力","心理"],["自己肯定感","心理"],["認知バイアス","心理"],
  ["プラシーボ効果","心理"],["ゲシュタルト崩壊","心理"],
  // 理論（3）
  ["相対性理論","理論"],["超ひも理論","理論"],["進化論","理論"],
  // 概念（3）
  ["パラドックス","概念"],["ジレンマ","概念"],["カオス","概念"],
  // 状態（7）
  ["二日酔い","状態"],["時差ぼけ","状態"],["デジャヴ","状態"],["渋滞","状態"],["スランプ","状態"],
  ["現実逃避","状態"],["燃え尽き症候群","状態"],
  // 日本文化（3）
  ["侘び寂び","日本文化"],["物の哀れ","日本文化"],["枯山水","日本文化"],
];

function getWordPool(difficulty){
  if(difficulty === 1) return WORDS_EASY;
  if(difficulty === 3) return WORDS_HARD;
  return WORDS_MEDIUM;
}

/* ===== 状態 ===== */

var state = {
  screen: "home",
  difficulty: 1,
  pendingMode: null,
  two: { countdown:3, timeLeft:180, score:0, passes:3, wordPool:[], currentWord:null, aborted:false },
  party: {
    numPlayers:3,
    names:["プレイヤー1","プレイヤー2","プレイヤー3","プレイヤー4","プレイヤー5"],
    laps:1,
    players:[],
    order:[],
    roundIndex:0,
    wordPool:[],
    currentWord:null,
    selected:{},
    lastRound:null,
    aborted:false,
    revealTimeLeft:15,
    answerTimeLeft:10
  }
};

var twoCountdownTimer = null;
var twoGameTimer = null;
var partyRevealTimer = null;
var partyAnswerTimer = null;

function esc(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function shuffle(arr){
  var a = arr.slice();
  for(var i=a.length-1;i>0;i--){
    var j = Math.floor(Math.random()*(i+1));
    var t=a[i]; a[i]=a[j]; a[j]=t;
  }
  return a;
}

function clearAllTimers(){
  if(twoCountdownTimer){ clearInterval(twoCountdownTimer); twoCountdownTimer=null; }
  if(twoGameTimer){ clearInterval(twoGameTimer); twoGameTimer=null; }
  if(partyRevealTimer){ clearInterval(partyRevealTimer); partyRevealTimer=null; }
  if(partyAnswerTimer){ clearInterval(partyAnswerTimer); partyAnswerTimer=null; }
}

function goHome(){
  clearAllTimers();
  state.screen = "home";
  render();
}

function goHowTo(){
  state.screen = "howto";
  render();
}

/* ===== 難易度選択 ===== */

function selectMode(mode){
  state.pendingMode = mode;
  state.screen = "difficulty";
  render();
}

function setDifficulty(d){
  state.difficulty = d;
  render();
}

function confirmDifficulty(){
  if(state.pendingMode === "two"){
    beginTwoCountdown();
  } else {
    state.screen = "partyPlayers";
    render();
  }
}

/* ===== 二人モード ===== */

function popTwoWord(){
  if(state.two.wordPool.length === 0){
    state.two.wordPool = shuffle(getWordPool(state.difficulty));
  }
  var pair = state.two.wordPool.pop();
  return {w: pair[0], g: pair[1]};
}

function startTwoFlow(){
  selectMode("two");
}

function beginTwoCountdown(){
  clearAllTimers();
  state.two.countdown = 3;
  state.two.timeLeft = 180;
  state.two.score = 0;
  state.two.passes = 3;
  state.two.aborted = false;
  state.two.wordPool = shuffle(getWordPool(state.difficulty));
  state.screen = "twoCountdown";
  render();
  twoCountdownTimer = setInterval(twoCountdownTick, 1000);
}

function twoCountdownTick(){
  state.two.countdown -= 1;
  if(state.two.countdown < 0){
    clearInterval(twoCountdownTimer);
    twoCountdownTimer = null;
    state.two.currentWord = popTwoWord();
    state.screen = "twoPlaying";
    render();
    twoGameTimer = setInterval(twoGameTick, 1000);
  } else {
    render();
  }
}

function cancelTwoCountdown(){
  clearAllTimers();
  goHome();
}

function twoGameTick(){
  state.two.timeLeft -= 1;
  if(state.two.timeLeft <= 0){
    finishTwo();
  } else {
    render();
  }
}

function finishTwo(){
  if(twoGameTimer){ clearInterval(twoGameTimer); twoGameTimer = null; }
  state.screen = "twoResult";
  render();
}

function abortTwo(){
  state.two.aborted = true;
  finishTwo();
}

function twoCorrect(){
  state.two.score += 1;
  state.two.currentWord = popTwoWord();
  render();
}

function twoPass(){
  if(state.two.passes > 0){
    state.two.passes -= 1;
    state.two.currentWord = popTwoWord();
    render();
  }
}

/* ===== パーティーモード ===== */

function startPartyFlow(){
  state.party.aborted = false;
  state.screen = "partyPlayers";
  render();
}

function setPlayerCount(n){
  state.party.numPlayers = n;
  render();
}

function setName(i,val){
  state.party.names[i] = val;
}

function setLaps(n){
  state.party.laps = n;
  render();
}

function nextPartyWord(){
  if(state.party.wordPool.length === 0){
    state.party.wordPool = shuffle(getWordPool(state.difficulty));
  }
  var pair = state.party.wordPool.pop();
  return {w: pair[0], g: pair[1]};
}

function startParty(){
  state.party.players = [];
  for(var i=0;i<state.party.numPlayers;i++){
    state.party.players.push({name: state.party.names[i].trim() || ("プレイヤー"+(i+1)), score: 0});
  }
  state.party.order = [];
  for(var lap=0; lap<state.party.laps; lap++){
    for(var p=0; p<state.party.numPlayers; p++){
      state.party.order.push(p);
    }
  }
  state.party.wordPool = shuffle(getWordPool(state.difficulty));
  state.party.roundIndex = 0;
  state.party.aborted = false;
  beginPartyRound();
}

function beginPartyRound(){
  state.party.currentWord = nextPartyWord();
  state.party.selected = {};
  state.screen = "partyIntro";
  render();
}

function revealPartyWord(){
  clearAllTimers();
  state.party.revealTimeLeft = 15;
  state.screen = "partyReveal";
  render();
  partyRevealTimer = setInterval(partyRevealTick, 1000);
}

function partyRevealTick(){
  state.party.revealTimeLeft -= 1;
  if(state.party.revealTimeLeft <= 0){
    finishPartyReveal();
  } else {
    render();
  }
}

function finishPartyReveal(){
  if(partyRevealTimer){ clearInterval(partyRevealTimer); partyRevealTimer=null; }
  state.party.answerTimeLeft = 10;
  state.screen = "partyAnswering";
  render();
  partyAnswerTimer = setInterval(partyAnswerTick, 1000);
}

function partyAnswerTick(){
  if(state.party.answerTimeLeft > 0){
    state.party.answerTimeLeft -= 1;
  } else {
    if(partyAnswerTimer){ clearInterval(partyAnswerTimer); partyAnswerTimer=null; }
  }
  render();
}

function skipPartyAnswering(){
  if(partyAnswerTimer){ clearInterval(partyAnswerTimer); partyAnswerTimer=null; }
  state.screen = "partyGuess";
  render();
}

function toPartyGuess(){
  if(partyRevealTimer){ clearInterval(partyRevealTimer); partyRevealTimer=null; }
  finishPartyReveal();
}

function togglePartyCorrect(i){
  state.party.selected[i] = !state.party.selected[i];
  render();
}

function confirmPartyRound(){
  var harrisonIdx = state.party.order[state.party.roundIndex];
  var correctIdx = [];
  for(var key in state.party.selected){
    if(state.party.selected[key]){ correctIdx.push(parseInt(key,10)); }
  }
  for(var i=0;i<correctIdx.length;i++){
    state.party.players[correctIdx[i]].score += 1;
  }
  state.party.players[harrisonIdx].score += correctIdx.length;
  nextPartyRoundOrFinish();
}

function nextPartyRoundOrFinish(){
  if(state.party.roundIndex + 1 < state.party.order.length){
    state.party.roundIndex += 1;
    beginPartyRound();
  } else {
    state.screen = "partyFinal";
    render();
  }
}

function abortParty(){
  clearAllTimers();
  state.party.aborted = true;
  state.screen = "partyFinal";
  render();
}

function resetPartyToSetup(){
  clearAllTimers();
  state.party.players = [];
  state.party.roundIndex = 0;
  state.party.aborted = false;
  state.screen = "partyPlayers";
  render();
}

/* ===== 共通UIパーツ ===== */

function topBar(fnName, label){
  return '<div style="display:flex;justify-content:flex-end;margin-bottom:8px;">'
    + '<button class="ghost" onclick="hyGame.'+fnName+'()"><i class="ti ti-player-stop" style="font-size:15px;margin-right:4px;vertical-align:-2px;"></i>'+(label||"中断")+'</button>'
    + '</div>';
}

function partyScoreboard(highlightIdx){
  var rows = "";
  for(var i=0;i<state.party.players.length;i++){
    var p = state.party.players[i];
    var hi = (i===highlightIdx);
    rows += '<div class="row">'
      + '<span style="font-size:16px;'+(hi?'font-weight:700;':'')+'">'+esc(p.name)+(hi?' <i class="ti ti-microphone-2" style="font-size:16px;"></i>':'')+'</span>'
      + '<span style="font-size:16px;font-weight:700;">'+p.score+'</span>'
      + '</div>';
  }
  return '<div class="card" style="margin-top:14px;">'
    + '<p class="label">スコア</p>'
    + rows
    + '</div>';
}

function partyProgressChip(){
  var lap = Math.floor(state.party.roundIndex/state.party.numPlayers)+1;
  var turnOverall = state.party.roundIndex+1;
  var totalTurns = state.party.order.length;
  return '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;">'
    + '<span class="chip"><i class="ti ti-repeat" style="font-size:15px;"></i>ラウンド '+lap+' / '+state.party.laps+'</span>'
    + '<span class="chip"><i class="ti ti-flag" style="font-size:15px;"></i>'+turnOverall+' / '+totalTurns+' 問目</span>'
    + '</div>';
}

function difficultyLabel(d){
  if(d===1) return "EASY";
  if(d===2) return "NORMAL";
  return "HARD";
}
function difficultyDesc(d){
  if(d===1) return "スリー、ツー、ワン、GOでゲームを始めましょうか";
  if(d===2) return "もっと大きなヤマを狙いませんか？";
  return "最もディフィカルトで、最もチャレンジングで、そして最もフェティッシュな難易度でいかせていただきます";
}

/* ===== レンダー ===== */

function renderHome(){
  return '<div class="card" style="text-align:center;">'
    + '<button class="primary" style="width:100%;" onclick="hyGame.startTwoFlow()"><i class="ti ti-users" style="font-size:18px;margin-right:6px;vertical-align:-3px;"></i>二人モード</button>'
    + '<button class="primary" style="width:100%;margin-top:10px;" onclick="hyGame.startPartyFlow()"><i class="ti ti-confetti" style="font-size:18px;margin-right:6px;vertical-align:-3px;"></i>パーティーモード</button>'
    + '<button style="width:100%;margin-top:10px;" onclick="hyGame.goHowTo()"><i class="ti ti-help-circle" style="font-size:18px;margin-right:6px;vertical-align:-3px;"></i>遊び方</button>'
    + '</div>';
}

function renderHowTo(){
  return '<div class="card">'
    + '<p class="label">二人モード</p>'
    + '<p class="muted">2人で協力プレイ。片方がハリソン山中になりお題を独特な言い回しで表現し、相方が3分間で何問正解できるか挑戦します。わからないときは「パス」が3回まで使えます。</p>'
    + '<p class="label">パーティーモード</p>'
    + '<p class="muted">3〜5人で対戦。順番にハリソン山中になってお題を表現します。ハリソン山中は<strong>15秒以内</strong>に表現し、その後回答者が<strong>10秒</strong>で同時に回答。当てた人は1点、ハリソン山中は正解者の数だけ加点されます。</p>'
    + '<p class="label">難易度</p>'
    + '<p class="muted">難易度1（EASY）〜3（HARD）の3段階。モード選択後に設定できます。</p>'
    + '<button style="width:100%;margin-top:4px;" onclick="hyGame.goHome()">戻る</button>'
    + '</div>';
}

function renderDifficulty(){
  var btns = "";
  for(var d=1;d<=3;d++){
    btns += '<button class="'+(state.difficulty===d?"active":"")+'" style="width:100%;margin-bottom:8px;text-align:left;padding:14px 16px;" onclick="hyGame.setDifficulty('+d+')">'
      + '<div style="font-size:16px;font-weight:600;"><i class="ti ti-check" style="font-size:15px;margin-right:6px;vertical-align:-2px;color:var(--accent);visibility:'+(state.difficulty===d?'visible':'hidden')+';"></i>'+difficultyLabel(d)+'</div>'
      + '<div style="font-size:13px;color:var(--text-secondary);margin-top:3px;">'+difficultyDesc(d)+'</div>'
      + '</button>';
  }
  return topBar("goHome","ホームへ")
    + '<div class="card">'
    + '<p class="label"><i class="ti ti-adjustments" style="font-size:15px;vertical-align:-2px;margin-right:4px;"></i>難易度を選ぶ</p>'
    + btns
    + '<button class="primary" style="width:100%;margin-top:6px;" onclick="hyGame.confirmDifficulty()">決定<i class="ti ti-arrow-right" style="font-size:15px;margin-left:4px;vertical-align:-2px;"></i></button>'
    + '</div>';
}

function renderTwoCountdown(){
  return topBar("cancelTwoCountdown")
    + '<div class="card" style="text-align:center;">'
    + '<p style="font-size:72px;font-weight:700;margin:12px 0;">'+(state.two.countdown > 0 ? state.two.countdown : "GO")+'</p>'
    + '</div>';
}

function renderTwoPlaying(){
  return topBar("abortTwo")
    + '<div class="card" style="text-align:center;">'
    + '<div style="display:flex;justify-content:space-between;margin-bottom:14px;">'
    + '<span class="chip"><i class="ti ti-clock" style="font-size:15px;"></i> '+state.two.timeLeft+'秒</span>'
    + '<span class="chip">パス残り '+state.two.passes+'</span>'
    + '</div>'
    + '<p class="label">ジャンル</p>'
    + '<p style="font-size:18px;margin:0 0 14px;">'+esc(state.two.currentWord.g)+'</p>'
    + '<p class="label">お題</p>'
    + '<p class="t-accent" style="font-size:36px;font-weight:700;margin:0 0 20px;">'+esc(state.two.currentWord.w)+'</p>'
    + '<div style="display:flex;gap:8px;">'
    + '<button style="flex:1;" onclick="hyGame.twoPass()"'+(state.two.passes<=0?' disabled':'')+'>パス</button>'
    + '<button class="primary" style="flex:1;" onclick="hyGame.twoCorrect()">正解</button>'
    + '</div>'
    + '<p class="muted" style="margin-top:14px;margin-bottom:0;">現在のスコア: '+state.two.score+'</p>'
    + '</div>';
}

function renderTwoResult(){
  var usedPasses = 3 - state.two.passes;
  return '<div class="card" style="text-align:center;">'
    + '<p class="label">'+(state.two.aborted ? "中断しました" : "タイムアップ！")+'</p>'
    + '<p style="font-size:46px;font-weight:700;margin:10px 0;">'+state.two.score+'<span class="muted" style="font-size:18px;font-weight:400;"> 問正解</span></p>'
    + '<p class="muted">使ったパス: '+usedPasses+' / 3</p>'
    + '<div style="display:flex;gap:8px;margin-top:16px;">'
    + '<button style="flex:1;" onclick="hyGame.goHome()">ホームへ</button>'
    + '<button class="primary" style="flex:1;" onclick="hyGame.beginTwoCountdown()">もう一度</button>'
    + '</div></div>';
}

function renderPartyPlayers(){
  var counts = [3,4,5];
  var btns = "";
  for(var i=0;i<counts.length;i++){
    var n = counts[i];
    btns += '<button class="'+(state.party.numPlayers===n?"active":"")+'" style="flex:1;" onclick="hyGame.setPlayerCount('+n+')">'+n+'人</button>';
  }
  var inputs = "";
  for(var j=0;j<state.party.numPlayers;j++){
    inputs += '<div class="field">'
      + '<label>プレイヤー'+(j+1)+'</label>'
      + '<input type="text" value="'+esc(state.party.names[j])+'" placeholder="プレイヤー'+(j+1)+'" oninput="hyGame.setName('+j+',this.value)" />'
      + '</div>';
  }
  var lapCounts = [1,2,3,4,5];
  var lapBtns = "";
  for(var k=0;k<lapCounts.length;k++){
    var ln = lapCounts[k];
    lapBtns += '<button class="'+(state.party.laps===ln?"active":"")+'" style="flex:1;" onclick="hyGame.setLaps('+ln+')">'+ln+'</button>';
  }
  var diffBtns = "";
  for(var d=1;d<=3;d++){
    var label = d===1?"EASY":d===2?"NORMAL":"HARD";
    diffBtns += '<button class="'+(state.difficulty===d?"active":"")+'" style="flex:1;" onclick="hyGame.setDifficulty('+d+')">'+label+'</button>';
  }
  return topBar("goHome","ホームへ")
    + '<div class="card">'
    + '<p class="label"><i class="ti ti-users" style="font-size:15px;vertical-align:-2px;margin-right:4px;"></i>人数を選ぶ</p>'
    + '<div style="display:flex;gap:8px;margin-bottom:18px;">'+btns+'</div>'
    + inputs
    + '<p class="label" style="margin-top:14px;"><i class="ti ti-repeat" style="font-size:15px;vertical-align:-2px;margin-right:4px;"></i>何ラウンドする？（全員が1回ハリソン山中になるのが1ラウンド）</p>'
    + '<div style="display:flex;gap:8px;margin-bottom:18px;">'+lapBtns+'</div>'
    + '<p class="label"><i class="ti ti-adjustments" style="font-size:15px;vertical-align:-2px;margin-right:4px;"></i>難易度</p>'
    + '<div style="display:flex;gap:8px;margin-bottom:18px;">'+diffBtns+'</div>'
    + '<button class="primary" style="width:100%;margin-top:4px;" onclick="hyGame.startParty()">ゲーム開始<i class="ti ti-player-play" style="font-size:16px;margin-left:4px;vertical-align:-2px;"></i></button>'
    + '</div>';
}

function renderPartyIntro(){
  var harrisonIdx = state.party.order[state.party.roundIndex];
  var harrison = state.party.players[harrisonIdx];
  return topBar("abortParty")
    + partyProgressChip()
    + '<div class="card" style="text-align:center;">'
    + '<p class="label">今回のハリソン山中</p>'
    + '<p style="font-size:26px;font-weight:700;margin:0 0 16px;">'+esc(harrison.name)+'</p>'
    + '<p class="muted" style="margin:0 0 16px;">他の人は画面を見ないでください</p>'
    + '<button class="primary" style="width:100%;" onclick="hyGame.revealPartyWord()"><i class="ti ti-eye" style="font-size:16px;margin-right:4px;vertical-align:-2px;"></i>お題を見る</button>'
    + '</div>'
    + partyScoreboard(harrisonIdx);
}

function renderPartyReveal(){
  var harrisonIdx = state.party.order[state.party.roundIndex];
  var harrison = state.party.players[harrisonIdx];
  var t = state.party.revealTimeLeft;
  var barPct = Math.round((t/15)*100);
  var barColor = t > 7 ? "var(--success)" : t > 4 ? "var(--gold)" : "var(--accent)";
  return topBar("abortParty")
    + partyProgressChip()
    + '<div class="card" style="text-align:center;">'
    + '<div style="margin-bottom:14px;">'
    + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">'
    + '<span style="font-size:14px;color:var(--text-secondary);">表現タイム</span>'
    + '<span style="font-size:22px;font-weight:700;color:'+barColor+';">'+t+'秒</span>'
    + '</div>'
    + '<div style="height:8px;background:var(--border);border-radius:4px;overflow:hidden;">'
    + '<div style="height:100%;width:'+barPct+'%;background:'+barColor+';border-radius:4px;transition:width 0.9s linear;"></div>'
    + '</div>'
    + '</div>'
    + '<p class="label">ジャンル</p>'
    + '<p style="font-size:18px;margin:0 0 18px;">'+esc(state.party.currentWord.g)+'</p>'
    + '<p class="label">お題</p>'
    + '<p class="t-accent" style="font-size:36px;font-weight:700;margin:0 0 18px;">'+esc(state.party.currentWord.w)+'</p>'
    + ''
    + '<button class="primary" style="width:100%;" onclick="hyGame.toPartyGuess()">表現し終えた<i class="ti ti-arrow-right" style="font-size:15px;margin-left:4px;vertical-align:-2px;"></i></button>'
    + '</div>';
}

function renderPartyAnswering(){
  var t = state.party.answerTimeLeft;
  var barPct = Math.round((t/10)*100);
  var barColor = t > 5 ? "var(--success)" : t > 2 ? "var(--gold)" : "var(--accent)";
  var timeDisplay = t > 0 ? t : '<i class="ti ti-check" style="font-size:48px;"></i>';
  return topBar("abortParty")
    + partyProgressChip()
    + '<div class="card" style="text-align:center;padding:32px 22px;">'
    + '<p style="font-size:19px;font-weight:700;margin:0 0 6px;">回答タイム</p>'
    + '<p style="font-size:64px;font-weight:700;margin:0 0 20px;color:'+barColor+';">'+timeDisplay+'</p>'
    + '<div style="height:8px;background:var(--border);border-radius:4px;overflow:hidden;margin-bottom:20px;">'
    + '<div style="height:100%;width:'+barPct+'%;background:'+barColor+';border-radius:4px;transition:width 0.9s linear;"></div>'
    + '</div>'
    + '<button class="primary" style="width:100%;" onclick="hyGame.skipPartyAnswering()">スキップ<i class="ti ti-arrow-right" style="font-size:15px;margin-left:4px;vertical-align:-2px;"></i></button>'
    + '</div>';
}

function renderPartyGuess(){
  var harrisonIdx = state.party.order[state.party.roundIndex];
  var rows = "";
  var anyOther = false;
  for(var i=0;i<state.party.players.length;i++){
    if(i === harrisonIdx) continue;
    anyOther = true;
    var on = !!state.party.selected[i];
    rows += '<button class="'+(on?"active":"")+'" style="width:100%;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;" onclick="hyGame.togglePartyCorrect('+i+')">'
      + '<span>'+esc(state.party.players[i].name)+'</span>'
      + (on?'<i class="ti ti-check" style="font-size:18px;"></i>':'')
      + '</button>';
  }
  var count = 0;
  for(var k in state.party.selected){ if(state.party.selected[k]) count++; }
  return topBar("abortParty")
    + partyProgressChip()
    + '<div class="card">'
    + '<p class="t-accent" style="font-size:32px;font-weight:700;margin:0 0 4px;">'+esc(state.party.currentWord.w)+'</p>'
    + '<p class="muted" style="margin:0 0 14px;">'+esc(state.party.currentWord.g)+'</p>'
    + '<p class="label">正解した人を選んでください</p>'
    + (anyOther ? rows : '<p class="muted">他のプレイヤーがいません</p>')
    + '<button class="primary" style="width:100%;margin-top:4px;" onclick="hyGame.confirmPartyRound()">確定（'+count+'人正解）<i class="ti ti-check" style="font-size:15px;margin-left:4px;vertical-align:-2px;"></i></button>'
    + '</div>'
    + partyScoreboard(harrisonIdx);
}

function renderPartyResult(){
  var lr = state.party.lastRound;
  var harrison = state.party.players[lr.harrisonIdx];
  var names = [];
  for(var i=0;i<lr.correctIdx.length;i++){
    names.push(state.party.players[lr.correctIdx[i]].name);
  }
  var isLast = (state.party.roundIndex + 1 >= state.party.order.length);
  return topBar("abortParty")
    + partyProgressChip()
    + '<div class="card">'
    + '<p class="label">お題</p>'
    + '<p style="font-size:20px;font-weight:700;margin:0 0 12px;">'+esc(lr.word.w)+'<span class="muted" style="font-weight:400;"> （'+esc(lr.word.g)+'）</span></p>'
    + '<p style="font-size:16px;margin:0 0 4px;">正解者: '+(names.length ? esc(names.join("、")) : "なし")+'</p>'
    + '<p class="t-success" style="font-size:16px;margin:0 0 16px;">'+esc(harrison.name)+'さんに +'+lr.correctIdx.length+'点</p>'
    + '<button class="primary" style="width:100%;" onclick="hyGame.nextPartyRoundOrFinish()">'+(isLast ? "結果を見る" : "次のラウンドへ")+'<i class="ti ti-arrow-right" style="font-size:15px;margin-left:4px;vertical-align:-2px;"></i></button>'
    + '</div>'
    + partyScoreboard(-1);
}

function renderPartyFinal(){
  var ranked = state.party.players.map(function(p,i){ return {name:p.name, score:p.score, idx:i}; });
  ranked.sort(function(a,b){ return b.score - a.score; });
  var top = ranked.length ? ranked[0].score : 0;
  var winners = [];
  for(var w=0;w<ranked.length;w++){
    if(ranked[w].score === top){ winners.push(ranked[w].name); }
  }
  var rows = "";
  for(var i=0;i<ranked.length;i++){
    var isWinner = ranked[i].score === top;
    rows += '<div class="row">'
      + '<span style="font-size:16px;'+(isWinner?"font-weight:700;":"")+'">'+(i+1)+'. '+esc(ranked[i].name)+(isWinner?' <i class="ti ti-trophy" style="font-size:16px;"></i>':"")+'</span>'
      + '<span style="font-size:16px;font-weight:700;">'+ranked[i].score+'</span>'
      + '</div>';
  }
  return '<div class="card" style="text-align:center;">'
    + '<p class="t-success" style="font-size:19px;font-weight:700;margin:0 0 18px;">おめでとう！真のハリソン山中は'+esc(winners.join("と"))+'だ！</p>'
    + '</div>'
    + '<div class="card" style="margin-top:14px;">'
    + '<p class="label">最終結果'+(state.party.aborted ? "（中断）" : "")+'</p>'
    + rows
    + '<div style="display:flex;gap:8px;margin-top:18px;">'
    + '<button style="flex:1;" onclick="hyGame.goHome()">ホームへ</button>'
    + '<button class="primary" style="flex:1;" onclick="hyGame.resetPartyToSetup()">もう一度プレイ</button>'
    + '</div></div>';
}

function render(){
  var el = document.getElementById("app");
  var html = "";
  if(state.screen === "home") html = renderHome();
  else if(state.screen === "howto") html = renderHowTo();
  else if(state.screen === "difficulty") html = renderDifficulty();
  else if(state.screen === "twoCountdown") html = renderTwoCountdown();
  else if(state.screen === "twoPlaying") html = renderTwoPlaying();
  else if(state.screen === "twoResult") html = renderTwoResult();
  else if(state.screen === "partyPlayers") html = renderPartyPlayers();
  else if(state.screen === "partyIntro") html = renderPartyIntro();
  else if(state.screen === "partyReveal") html = renderPartyReveal();
  else if(state.screen === "partyAnswering") html = renderPartyAnswering();
  else if(state.screen === "partyGuess") html = renderPartyGuess();
  else if(state.screen === "partyFinal") html = renderPartyFinal();
  el.innerHTML = html;
}

window.hyGame = {
  goHome: goHome,
  goHowTo: goHowTo,
  setDifficulty: setDifficulty,
  confirmDifficulty: confirmDifficulty,
  startTwoFlow: startTwoFlow,
  beginTwoCountdown: beginTwoCountdown,
  cancelTwoCountdown: cancelTwoCountdown,
  abortTwo: abortTwo,
  twoCorrect: twoCorrect,
  twoPass: twoPass,
  startPartyFlow: startPartyFlow,
  setPlayerCount: setPlayerCount,
  setName: setName,
  setLaps: setLaps,
  startParty: startParty,
  revealPartyWord: revealPartyWord,
  toPartyGuess: toPartyGuess,
  skipPartyAnswering: skipPartyAnswering,
  togglePartyCorrect: togglePartyCorrect,
  confirmPartyRound: confirmPartyRound,
  nextPartyRoundOrFinish: nextPartyRoundOrFinish,
  abortParty: abortParty,
  resetPartyToSetup: resetPartyToSetup
};

render();
})();
