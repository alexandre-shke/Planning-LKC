// ─── DATA ───────────────────────────────────────────────────────────────────
const RAW_TASKS = [{"uid":"0","id":0,"name":"PA3","level":0,"start":"2026-01-05","finish":"2027-04-05","milestone":false,"summary":true,"pct":5,"preds":[]},{"uid":"658","id":1,"name":"Missions préalables","level":1,"start":"2026-01-05","finish":"2026-06-30","milestone":false,"summary":true,"pct":0,"preds":[]},{"uid":"665","id":2,"name":"Obtention accord CDC - Phase 3","level":2,"start":"2026-02-11","finish":"2026-02-11","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"667","id":3,"name":"Mission Tolila (Fiche de Lot, suivi PC…)","level":2,"start":"2026-02-02","finish":"2026-03-02","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"672","id":4,"name":"Choix architecte + BE","level":2,"start":"2026-02-02","finish":"2026-03-06","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"671","id":5,"name":"Accord SAS/EPFIF sur Secteur 3","level":2,"start":"2026-03-02","finish":"2026-03-27","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"659","id":6,"name":"Calendrier validé de démolition et calendrier ICPE","level":2,"start":"2026-05-04","finish":"2026-05-29","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"674","id":7,"name":"ICPE (à confirmer)","level":2,"start":"2026-05-29","finish":"2026-06-30","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"673","id":8,"name":"Travaux SAS de démolition","level":2,"start":"2027-01-04","finish":"2027-04-05","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"364","id":9,"name":"Promesse Vente Terrain","level":1,"start":"2026-06-01","finish":"2026-09-30","milestone":false,"summary":true,"pct":76,"preds":[]},{"uid":"677","id":11,"name":"Accord EPFIF / SAS","level":2,"start":"2026-06-15","finish":"2026-06-30","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"675","id":12,"name":"Accord SAS / SSCV","level":2,"start":"2026-07-01","finish":"2026-07-08","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"367","id":13,"name":"Réunion Lancement Notaire","level":2,"start":"2026-07-13","finish":"2026-07-13","milestone":true,"summary":false,"pct":100,"preds":[]},{"uid":"369","id":15,"name":"Rédaction Projet Promesse terrain","level":2,"start":"2026-07-13","finish":"2026-08-24","milestone":false,"summary":false,"pct":100,"preds":[]},{"uid":"370","id":16,"name":"Relecture et négociations","level":2,"start":"2026-08-24","finish":"2026-09-11","milestone":false,"summary":false,"pct":100,"preds":[]},{"uid":"526","id":17,"name":"Comité d'engagement pour signature Promesse","level":2,"start":"2026-09-14","finish":"2026-09-14","milestone":true,"summary":false,"pct":100,"preds":[]},{"uid":"527","id":18,"name":"Relecture et négociation","level":2,"start":"2026-09-17","finish":"2026-09-18","milestone":false,"summary":false,"pct":100,"preds":[]},{"uid":"371","id":19,"name":"Signature PUV/PSV","level":2,"start":"2026-09-21","finish":"2026-09-21","milestone":true,"summary":false,"pct":100,"preds":[]},{"uid":"510","id":71,"name":"Permis de construire","level":1,"start":"2026-03-02","finish":"2026-12-02","milestone":false,"summary":true,"pct":0,"preds":[]},{"uid":"670","id":72,"name":"Esquisse PC","level":2,"start":"2026-03-09","finish":"2026-04-30","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"666","id":73,"name":"Validation PC - Aménagement","level":2,"start":"2026-04-15","finish":"2026-04-30","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"668","id":74,"name":"Validation PC - Mairie","level":2,"start":"2026-05-04","finish":"2026-05-04","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"669","id":75,"name":"Validation financier avant dépôt PC","level":2,"start":"2026-05-04","finish":"2026-05-04","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"511","id":76,"name":"Dépôt du PC incomplet","level":2,"start":"2026-05-11","finish":"2026-05-11","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"516","id":77,"name":"Complétude PC","level":2,"start":"2026-05-11","finish":"2026-06-10","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"654","id":78,"name":"Instruction PC","level":2,"start":"2026-06-11","finish":"2026-09-14","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"517","id":79,"name":"Obtention PC","level":2,"start":"2026-09-14","finish":"2026-09-14","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"518","id":80,"name":"Délai de purge PC","level":2,"start":"2026-09-14","finish":"2026-12-14","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"519","id":81,"name":"Obtention PC définitif","level":2,"start":"2026-12-14","finish":"2026-12-14","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"169","id":82,"name":"Contrats de réservation","level":1,"start":"2026-05-11","finish":"2026-08-28","milestone":false,"summary":true,"pct":0,"preds":[]},{"uid":"676","id":83,"name":"Validation Bailleur-Exploitant / Ville","level":2,"start":"2026-03-02","finish":"2026-04-30","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"173","id":84,"name":"Négociation prix","level":2,"start":"2026-05-11","finish":"2026-06-02","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"647","id":85,"name":"OFFRE FERME","level":2,"start":"2026-06-03","finish":"2026-06-03","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"175","id":86,"name":"Rédaction de l'Avant Contrat","level":2,"start":"2026-06-03","finish":"2026-06-16","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"176","id":87,"name":"Relecture de l'Avant Contrat","level":2,"start":"2026-06-17","finish":"2026-06-23","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"177","id":88,"name":"Négociation // Relecture commune","level":2,"start":"2026-06-24","finish":"2026-06-30","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"179","id":89,"name":"Signature de l'Avant Contrat","level":2,"start":"2026-06-30","finish":"2026-06-30","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"190","id":152,"name":"PHASE PRO/MARCHE","level":1,"start":"2026-09-01","finish":"2027-02-12","milestone":false,"summary":true,"pct":0,"preds":[]},{"uid":"380","id":153,"name":"Phase pro/marché","level":2,"start":"2026-09-01","finish":"2027-02-12","milestone":false,"summary":true,"pct":0,"preds":[]},{"uid":"191","id":154,"name":"Réunion lancement phase PRO","level":3,"start":"2026-09-01","finish":"2026-09-01","milestone":true,"summary":false,"pct":100,"preds":[]},{"uid":"521","id":155,"name":"Demande de raccordements concessionnaires","level":3,"start":"2026-09-01","finish":"2026-09-29","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"644","id":156,"name":"Audit structure","level":3,"start":"2026-09-01","finish":"2026-10-05","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"582","id":157,"name":"Etudes Acoustique Thermique Handicapé Incendie","level":3,"start":"2026-09-01","finish":"2026-10-05","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"645","id":158,"name":"Audit HQE","level":3,"start":"2026-09-21","finish":"2026-10-09","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"583","id":159,"name":"Etudes Fluides","level":3,"start":"2026-09-21","finish":"2026-10-09","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"571","id":160,"name":"Reprise plans archi suite audits","level":3,"start":"2026-10-06","finish":"2026-10-26","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"572","id":161,"name":"Plans Architectes Figés - Plans Architecte PRO","level":3,"start":"2026-10-27","finish":"2026-10-27","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"575","id":162,"name":"Etudes clashs structure & fluides","level":3,"start":"2026-10-21","finish":"2026-11-03","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"577","id":163,"name":"Carnet de Détails et façades","level":3,"start":"2026-10-27","finish":"2026-11-24","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"578","id":164,"name":"Reprise Plans Architecte","level":3,"start":"2026-11-18","finish":"2026-12-01","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"585","id":165,"name":"Plans fluides","level":3,"start":"2026-11-04","finish":"2026-11-18","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"586","id":166,"name":"Plans structure","level":3,"start":"2026-11-04","finish":"2026-11-18","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"655","id":167,"name":"Plans, coupes et détails paysage/VRD","level":3,"start":"2026-11-18","finish":"2026-12-01","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"579","id":168,"name":"Plans Marché V0","level":3,"start":"2026-12-01","finish":"2026-12-01","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"580","id":169,"name":"PIC","level":3,"start":"2026-11-18","finish":"2026-12-01","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"202","id":170,"name":"Rédaction CCTP CEA et lot 00","level":3,"start":"2026-11-02","finish":"2026-11-23","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"203","id":171,"name":"Rédaction CCTP GO (Gros Œuvre)","level":3,"start":"2026-11-02","finish":"2026-11-23","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"204","id":172,"name":"Rédaction CCTP CET (Corps Etat Technique)","level":3,"start":"2026-11-02","finish":"2026-11-23","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"653","id":173,"name":"Rédaction CCTP Paysage et VRD","level":3,"start":"2026-11-02","finish":"2026-11-23","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"205","id":174,"name":"Relecture CCTP","level":3,"start":"2026-11-24","finish":"2026-12-07","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"206","id":175,"name":"Reprise des CCTP","level":3,"start":"2026-12-01","finish":"2026-12-14","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"207","id":176,"name":"CCTP Marché V0","level":3,"start":"2026-12-23","finish":"2026-12-23","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"216","id":177,"name":"Etablissement Evaluation Provisoire Labels","level":3,"start":"2026-11-18","finish":"2026-12-15","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"217","id":178,"name":"Evaluation Provisoire Labels","level":3,"start":"2026-12-23","finish":"2026-12-23","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"587","id":179,"name":"Production des plans de vente","level":3,"start":"2026-11-24","finish":"2026-12-07","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"208","id":180,"name":"Etablissement RICT","level":3,"start":"2027-01-04","finish":"2027-01-15","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"209","id":181,"name":"RICT Marché V0","level":3,"start":"2027-01-15","finish":"2027-01-15","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"212","id":182,"name":"Etablissement PGCSPS","level":3,"start":"2027-01-04","finish":"2027-01-15","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"214","id":183,"name":"PGCSPS Marché V0","level":3,"start":"2027-01-15","finish":"2027-01-15","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"213","id":184,"name":"Etablissement DIUO","level":3,"start":"2027-01-04","finish":"2027-01-15","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"215","id":185,"name":"DIUO Marché V0","level":3,"start":"2027-01-15","finish":"2027-01-15","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"218","id":186,"name":"Rédaction Pièce Marché","level":3,"start":"2026-09-23","finish":"2026-10-13","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"220","id":187,"name":"Relecture & Modification Pièce Marché","level":3,"start":"2026-10-14","finish":"2026-11-03","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"221","id":188,"name":"Pièce Marché Définitive","level":3,"start":"2026-11-25","finish":"2026-11-25","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"581","id":189,"name":"Relecture Dossier Marché V0","level":3,"start":"2027-01-11","finish":"2027-01-15","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"223","id":190,"name":"Intégration Remarques","level":3,"start":"2027-02-01","finish":"2027-02-05","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"224","id":191,"name":"Dossier Marché V1","level":3,"start":"2027-02-05","finish":"2027-02-05","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"378","id":192,"name":"ACTES AUTHENTIQUES","level":1,"start":"2026-03-31","finish":"2026-12-31","milestone":false,"summary":true,"pct":0,"preds":[]},{"uid":"275","id":193,"name":"Signature Actes Authentiques","level":2,"start":"2026-03-31","finish":"2026-12-31","milestone":false,"summary":true,"pct":0,"preds":[]},{"uid":"227","id":194,"name":"Réunion Lancement Assurances (DO - TRC - CNR)","level":3,"start":"2026-09-07","finish":"2026-09-07","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"228","id":195,"name":"Constitution Dossier Assurances (DO - TRC)","level":3,"start":"2026-10-07","finish":"2026-10-27","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"229","id":196,"name":"Obtention Attestations Assurances (DO, TRC, CNR)","level":3,"start":"2026-10-26","finish":"2026-12-03","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"230","id":197,"name":"Réunion Lancement GFA","level":3,"start":"2026-09-07","finish":"2026-09-07","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"600","id":198,"name":"Constitution Dossier GFA","level":3,"start":"2026-09-07","finish":"2026-09-25","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"601","id":199,"name":"Obtention du projet de GFA","level":3,"start":"2026-10-01","finish":"2026-10-07","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"602","id":200,"name":"Relecture GFA (Client)","level":3,"start":"2026-10-12","finish":"2026-10-16","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"603","id":201,"name":"Validation GFA","level":3,"start":"2026-10-31","finish":"2026-10-31","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"656","id":202,"name":"Demande des agréments CDC","level":3,"start":"2026-10-15","finish":"2026-11-30","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"657","id":203,"name":"Obtention des agréments CDC","level":3,"start":"2026-11-30","finish":"2026-11-30","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"591","id":204,"name":"Obtention Plans de vente et tableaux de surface","level":3,"start":"2026-10-19","finish":"2026-10-19","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"592","id":206,"name":"Réunion Lancement EDD","level":3,"start":"2026-09-07","finish":"2026-09-07","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"593","id":207,"name":"Rédaction EDD (Plans + Règlements)","level":3,"start":"2026-10-19","finish":"2026-10-30","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"595","id":208,"name":"Relecture EDD & Modification EDD","level":3,"start":"2026-11-02","finish":"2026-11-16","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"596","id":209,"name":"Rédaction Statuts EDD","level":3,"start":"2026-11-17","finish":"2026-11-30","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"597","id":210,"name":"Relecture Statuts EDD","level":3,"start":"2026-12-01","finish":"2026-12-08","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"598","id":211,"name":"Calcul de la répartition de charges","level":3,"start":"2026-11-17","finish":"2026-11-23","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"599","id":212,"name":"EDD VF","level":3,"start":"2026-12-09","finish":"2026-12-09","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"226","id":213,"name":"Rédaction Projet VEFA","level":3,"start":"2026-11-30","finish":"2026-12-08","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"241","id":214,"name":"Relecture","level":3,"start":"2026-11-30","finish":"2026-12-08","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"249","id":215,"name":"RDV Relecture Notaires","level":3,"start":"2026-12-09","finish":"2026-12-14","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"250","id":216,"name":"Mise à jour Projet VEFA","level":3,"start":"2026-12-15","finish":"2026-12-21","milestone":false,"summary":false,"pct":0,"preds":[]},{"uid":"251","id":217,"name":"Comité Engagement Final","level":3,"start":"2026-12-18","finish":"2026-12-18","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"604","id":218,"name":"Signature VEFA","level":3,"start":"2026-12-31","finish":"2026-12-31","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"253","id":219,"name":"Signature Dossier Marché","level":3,"start":"2026-12-18","finish":"2026-12-18","milestone":true,"summary":false,"pct":0,"preds":[]},{"uid":"298","id":220,"name":"Achat du terrain","level":2,"start":"2026-12-31","finish":"2026-12-31","milestone":false,"summary":true,"pct":0,"preds":[]},{"uid":"256","id":221,"name":"Purge droit de préemption autre","level":3,"start":"2026-12-31","finish":"2026-12-31","milestone":true,"summary":false,"pct":0,"preds":[]}];

// ─── STATE ─────────────────────────────────────────────────────────────────
let tasks = RAW_TASKS.map((t,i) => ({...t, _idx: i}));
let collapsed = new Set();
let selectedUid = null;
let ctxUid = null;
let editUid = null;
let showToday = true;
let zoomLevel = 1; // 0=month, 1=week, 2=day
const ZOOM_LABELS = ['Mois', 'Semaine', 'Jour'];
// Continuous zoom: pixels per day (replaces discrete levels for trackpad)
let continuousZoom = 16; // default = week view
const ZOOM_MIN = 0.8;   // très dézoomé (vue ~2 ans)
const ZOOM_MAX = 60;    // très zoomé (vue jour détaillée)
let isTrackpadZooming = false;
let filterMode = 'all';
let filterPhaseUid = null;
let searchQuery = '';

// Phase color assignment by level-1 parent
const PHASE_COLORS = {};
let phaseColorIdx = 0;

// ─── DRAG STATE ──────────────────────────────────────────────────────────────
let dragState = null;

// ─── DEADLINES ───────────────────────────────────────────────────────────────
let deadlines = []; // [{ date: 'YYYY-MM-DD', label: 'Deadline' }]

// ─── LINKS (liaisons fin→début) ──────────────────────────────────────────────
let links = {}; // { fromUid: [toUid, ...] }
let linkMode = false;
let linkSource = null;

// ─── UNDO HISTORY ────────────────────────────────────────────────────────────
const undoStack = [];
const UNDO_MAX = 50;

function saveSnapshot() {
  const snapshot = {
    tasks: tasks.map(t => ({...t})),
    links: JSON.parse(JSON.stringify(links)),
    colors: {...CUSTOM_TASK_COLORS}
  };
  undoStack.push(snapshot);
  if (undoStack.length > UNDO_MAX) undoStack.shift();
}

function undo() {
  if (undoStack.length === 0) {
    showToast('Rien à annuler');
    return;
  }
  const snap = undoStack.pop();
  tasks = snap.tasks;
  Object.keys(links).forEach(k => delete links[k]);
  Object.assign(links, snap.links);
  Object.keys(CUSTOM_TASK_COLORS).forEach(k => delete CUSTOM_TASK_COLORS[k]);
  Object.assign(CUSTOM_TASK_COLORS, snap.colors);
  render();
  showToast('↩ Annulé');
}


// ─── DOM READY ───────────────────────────────────────────────────────────────


document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
    e.preventDefault();
    undo();
  }
});

document.getElementById('btnUndo').addEventListener('click', undo);

// ─── CUSTOM COLORS ──────────────────────────────────────────────────────────
const CUSTOM_TASK_COLORS = {}; // uid -> color string

const COLOR_PALETTE = [
  '#4f7cff','#7c5cfc','#3b82f6','#06b6d4','#10b981','#34d399',
  '#f59e0b','#f97316','#ef4444','#f87171','#ec4899','#a855f7',
  '#64748b','#94a3b8','#ffffff','#fbbf24',
];

let colorPopupUid = null; // which task the popup is targeting
let modalSelectedColor = null; // color chosen in the modal

// ─── HELPERS ────────────────────────────────────────────────────────────────
function parseDate(s) { return new Date(s + 'T00:00:00'); }

function formatDate(d) {
  return d.toLocaleDateString('fr-FR', {day:'2-digit', month:'2-digit', year:'numeric'});
}

function formatShortDate(d) {
  // dd/mm/yy
  return d.toLocaleDateString('fr-FR', {day:'2-digit', month:'2-digit', year:'2-digit'});
}

function daysBetween(a, b) {
  return Math.round((b - a) / 86400000);
}

function addDays(d, n) {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

function getPhaseColor(uid) {
  if (!(uid in PHASE_COLORS)) {
    PHASE_COLORS[uid] = phaseColorIdx++ % 6;
  }
  return PHASE_COLORS[uid];
}

// Find level-1 ancestor for color
function getPhaseAncestor(task) {
  if (task.level === 0) return task.uid;
  if (task.level === 1) return task.uid;
  // Walk up
  const myIdx = tasks.findIndex(t => t.uid === task.uid);
  for (let i = myIdx - 1; i >= 0; i--) {
    if (tasks[i].level === 1) return tasks[i].uid;
    if (tasks[i].level === 0) return tasks[i].uid;
  }
  return task.uid;
}

// ─── TIMELINE CONFIG ────────────────────────────────────────────────────────
let PROJECT_START = parseDate('2026-01-05');
let PROJECT_END = parseDate('2027-04-05');

function recalcTimeline() {
  let minD = Infinity, maxD = -Infinity;
  tasks.forEach(t => {
    const s = parseDate(t.start).getTime();
    const f = parseDate(t.finish).getTime();
    if (s < minD) minD = s;
    if (f > maxD) maxD = f;
  });
  if (minD !== Infinity) {
    PROJECT_START = addDays(new Date(minD), -30); // 30j marge avant
    PROJECT_END = addDays(new Date(maxD), 60);    // 60j marge après
  }
}

let COL_W; // pixels per day
function getColW() {
  return continuousZoom;
}

function getZoomLevel() {
  if (continuousZoom < 6) return 0;   // month view
  if (continuousZoom < 24) return 1;  // week view
  return 2;                            // day view
}

function getZoomLabel() {
  const z = continuousZoom;
  if (z < 3) return 'Vue globale';
  if (z < 6) return 'Mois';
  if (z < 24) return 'Semaine';
  return 'Jour';
}

function dateToX(d) {
  const days = daysBetween(PROJECT_START, d);
  return days * getColW();
}

function totalWidth() {
  return daysBetween(PROJECT_START, PROJECT_END) * getColW() + 200;
}

// ─── VISIBILITY ─────────────────────────────────────────────────────────────
function isVisible(task) {
  if (filterMode !== 'all') {
    if (filterMode === 'milestones' && !task.milestone) return false;
    if (filterMode === 'phase' && filterPhaseUid) {
      const ancestor = getPhaseAncestor(task);
      if (ancestor !== filterPhaseUid && task.uid !== filterPhaseUid) return false;
    }
  }
  if (searchQuery) {
    if (!task.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
  }
  // Check all ancestors: walk backward, hide if any direct ancestor is collapsed
  const myIdx = tasks.findIndex(t => t.uid === task.uid);
  let currentLevel = task.level;
  for (let i = myIdx - 1; i >= 0; i--) {
    if (tasks[i].level < currentLevel) {
      // This is a direct ancestor
      if (collapsed.has(tasks[i].uid)) return false;
      currentLevel = tasks[i].level;
      if (currentLevel === 0) break; // reached root, no more ancestors to check
    }
  }
  return true;
}

// ─── RENDER ─────────────────────────────────────────────────────────────────
// ── Dynamic phase filter buttons ────────────────────────────────────────────
function renderPhaseButtons() {
  const container = document.getElementById('phaseFilterBtns');
  if (!container) return;

  // Get current level-1 summary tasks (phases)
  const phases = tasks.filter(t => t.level === 1 && t.summary);

  // Rebuild buttons only if phases changed (by uid+name)
  const sig = phases.map(p => p.uid + ':' + p.name).join('|');
  if (container._sig === sig) return; // no change
  container._sig = sig;

  container.innerHTML = '';
  phases.forEach(phase => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn filter-phase-btn';
    btn.dataset.phaseUid = phase.uid;
    // Truncate long names for button display
    const label = phase.name.length > 14 ? phase.name.slice(0, 13) + '…' : phase.name;
    btn.textContent = label;
    btn.title = phase.name;
    if (filterMode === 'phase' && filterPhaseUid === phase.uid) {
      btn.classList.add('active');
    }
    btn.addEventListener('click', () => setFilter('phase', phase.uid));
    container.appendChild(btn);
  });
}

function render() {
  recalcTimeline();
  renderPhaseButtons();
  renderTaskList();
  renderGantt();
  updateStats();
}

function updateStats() {
  const visible = tasks.filter(t => !t.summary && !t.milestone);
  const milestones = tasks.filter(t => t.milestone);
  const avgPct = visible.length ? Math.round(visible.reduce((a,t) => a + t.pct, 0) / visible.length) : 0;
  // statTasks removed
  // statMilestones removed
  // statProgress removed
  // statEnd removed
}

function renderTaskList() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const vis = isVisible(task);
    const div = document.createElement('div');
    div.className = `task-row level-${task.level}${vis ? '' : ' hidden'}`;
    div.dataset.uid = task.uid;

    // Indent
    const indent = task.level * 14;
    div.style.paddingLeft = (12 + indent) + 'px';

    // Expand toggle
    const hasChildren = tasks.some(t => {
      const ti = tasks.findIndex(x => x.uid === task.uid);
      const ci = tasks.findIndex(x => x.uid === t.uid);
      return ci > ti && t.level === task.level + 1 && !tasks.slice(ti+1, ci).some(x => x.level <= task.level);
    });

    const exp = document.createElement('div');
    exp.className = 'task-expand' + (hasChildren && !collapsed.has(task.uid) ? ' open' : '');
    exp.textContent = hasChildren ? '▶' : '';
    if (hasChildren) {
      exp.addEventListener('click', e => {
        e.stopPropagation();
        if (collapsed.has(task.uid)) collapsed.delete(task.uid);
        else collapsed.add(task.uid);
        render();
      });
    }
    div.appendChild(exp);

    // Name
    const nameEl = document.createElement('div');
    nameEl.className = 'task-name';
    if (task.milestone) {
      nameEl.innerHTML = '<span class="milestone-icon">◆</span>' + task.name;
    } else {
      nameEl.textContent = task.name;
    }
    div.appendChild(nameEl);

    // Dates
    const datesEl = document.createElement('div');
    datesEl.className = 'task-dates';
    const startEl = document.createElement('div');
    startEl.className = 'task-date start';
    startEl.textContent = formatShortDate(parseDate(task.start));
    const endEl = document.createElement('div');
    endEl.className = 'task-date end';
    // For milestones with same start/end, only show one date
    if (task.milestone && task.start === task.finish) {
      endEl.textContent = '—';
    } else {
      endEl.textContent = formatShortDate(parseDate(task.finish));
    }
    // Duration
    const durEl = document.createElement('div');
    // Duration = finish - start + 1 (start day counts as day 1)
    const durDays = daysBetween(parseDate(task.start), parseDate(task.finish)) + 1;
    if (task.milestone) {
      durEl.className = 'task-date dur milestone-dur';
      durEl.textContent = '◆';
    } else {
      durEl.className = 'task-date dur';
      durEl.textContent = durDays + 'j';
      // ── Editable duration on click ──
      durEl.title = 'Cliquer pour modifier la durée';
      durEl.addEventListener('click', e => {
        e.stopPropagation();
        const currentDays = daysBetween(parseDate(task.start), parseDate(task.finish)) + 1;
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'dur-edit-input';
        input.value = currentDays;
        input.min = 1;
        input.title = 'Durée en jours';
        durEl.textContent = '';
        durEl.appendChild(input);
        input.focus();
        input.select();

        const commit = () => {
          const newDays = Math.max(parseInt(input.value) || 1, 1);
          const oldFinish = task.finish;
          // Start day counts as day 1, so finish = start + (newDays - 1)
          const newFinish = addDays(parseDate(task.start), newDays - 1);
          saveSnapshot();
          task.finish = toDateStr(newFinish);
          // Cascade to linked successors
          const delta = daysBetween(parseDate(oldFinish), newFinish);
          if (delta !== 0) propagateLinks(task.uid, delta, new Set([task.uid]));
          render();
          showToast(`⏱ Durée modifiée : ${newDays}j`);
        };

        input.addEventListener('keydown', ev => {
          if (ev.key === 'Enter') { ev.preventDefault(); commit(); }
          if (ev.key === 'Escape') { render(); }
          ev.stopPropagation();
        });
        input.addEventListener('click', ev => ev.stopPropagation());
      });
    }
    datesEl.appendChild(startEl);
    datesEl.appendChild(endEl);
    datesEl.appendChild(durEl);
    div.appendChild(datesEl);

    div.addEventListener('click', () => {
      selectedUid = task.uid;
      document.querySelectorAll('.task-row').forEach(r => r.classList.remove('selected'));
      div.classList.add('selected');

      // Scroll Gantt horizontally to show the task bar
      const barReg = window._barRegistry?.[task.uid];
      if (barReg) {
        const chartBody = document.getElementById('chartBody');
        const barX = barReg.x;
        const barW = barReg.w || 10;
        const viewW = chartBody.clientWidth;
        // Center the bar in the view, with padding
        const targetScroll = barX - viewW / 2 + barW / 2;
        chartBody.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
      }
    });

    // Linked hover: highlight both task row and gantt row
    div.addEventListener('mouseenter', () => {
      div.classList.add('row-hover');
      const ganttRow = document.querySelector(`.gantt-row[data-uid="${task.uid}"]`);
      if (ganttRow) ganttRow.classList.add('row-hover');
    });
    div.addEventListener('mouseleave', () => {
      div.classList.remove('row-hover');
      const ganttRow = document.querySelector(`.gantt-row[data-uid="${task.uid}"]`);
      if (ganttRow) ganttRow.classList.remove('row-hover');
    });

    div.addEventListener('contextmenu', e => {
      e.preventDefault();
      showCtxMenu(e.clientX, e.clientY, task.uid);
    });

    list.appendChild(div);
  });
} // fin renderTaskList



function renderGantt() {
  const canvas = document.getElementById('ganttCanvas');
  const chartBody = document.getElementById('chartBody');
  const w = totalWidth();
  canvas.style.width = w + 'px';

  // Remove all children except the SVG overlay and snap indicator
  Array.from(canvas.children).forEach(c => {
    if (c.id !== 'linkSvg' && c.id !== 'snapIndicator') canvas.removeChild(c);
  });

  // Reset bar registry for arrow drawing
  window._barRegistry = {};

  // Weekend columns
  let d = new Date(PROJECT_START);
  while (d <= PROJECT_END) {
    const dow = d.getDay();
    if (dow === 0 || dow === 6) {
      const col = document.createElement('div');
      col.className = 'weekend-col';
      col.style.left = dateToX(d) + 'px';
      col.style.width = getColW() + 'px';
      canvas.appendChild(col);
    }
    d = addDays(d, 1);
  }

  // Today line
  if (showToday) {
    const today = new Date();
    const x = dateToX(today);
    const line = document.createElement('div');
    line.className = 'today-line';
    line.style.left = x + 'px';
    const lbl = document.createElement('div');
    lbl.className = 'today-label';
    lbl.textContent = 'Aujourd\'hui';
    line.appendChild(lbl);
    canvas.appendChild(line);
  }

  // Deadline lines
  deadlines.forEach((dl, idx) => {
    const dlDate = parseDate(dl.date);
    const dlX = dateToX(dlDate);
    const dlEl = document.createElement('div');
    dlEl.className = 'deadline-line deadline-line-draggable';
    dlEl.style.left = dlX + 'px';
    dlEl.dataset.dlIdx = idx;
    const dlLbl = document.createElement('div');
    dlLbl.className = 'deadline-label';
    dlLbl.textContent = dl.label + ' — ' + formatShortDate(dlDate);
    dlEl.appendChild(dlLbl);

    // Drag to reposition deadline
    dlEl.addEventListener('mousedown', e => {
      e.preventDefault();
      e.stopPropagation();
      const chartBody = document.getElementById('chartBody');
      const onMove = ev => {
        const relX = ev.clientX - canvas.getBoundingClientRect().left + chartBody.scrollLeft;
        const days = Math.round(relX / getColW());
        const newDate = addDays(PROJECT_START, days);
        deadlines[idx].date = toDateStr(newDate);
        dlEl.style.left = dateToX(newDate) + 'px';
        dlLbl.textContent = dl.label + ' — ' + formatShortDate(newDate);
      };
      const onUp = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        render();
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });

    // Right-click to remove
    dlEl.addEventListener('contextmenu', e => {
      e.preventDefault();
      e.stopPropagation();
      deadlines.splice(idx, 1);
      render();
      showToast('Deadline supprimée');
    });

    canvas.appendChild(dlEl);
  });

  // Task rows
  tasks.forEach((task, rowIdx) => {
    const vis = isVisible(task);
    const row = document.createElement('div');
    row.className = `gantt-row level-${task.level}${vis ? '' : ' hidden'}`;
    row.dataset.uid = task.uid;
    row.style.height = '32px';

    if (vis) {
      const start = parseDate(task.start);
      const end = parseDate(task.finish);
      const x = dateToX(start);
      const phaseUid = getPhaseAncestor(task);
      const phaseIdx = getPhaseColor(phaseUid);

      if (task.milestone) {
        const diamond = document.createElement('div');
        // Detect contractual milestone type by name keywords
        const mName = task.name.toLowerCase();
        let mType = null;
        let mEmoji = '◆';
        if (mName.includes('dépôt') && mName.includes('pc') || mName.includes('depot') && mName.includes('pc')) {
          mType = 'type-pc'; mEmoji = '📋';
        } else if ((mName.includes('obtention') && mName.includes('pc')) || mName.includes('pc définitif') || mName.includes('pc definitif') || mName.includes('obtention pc')) {
          mType = 'type-pc-purge'; mEmoji = '✅';
        } else if (mName.includes('achat') || mName.includes('vefa') || mName.includes('acte') || mName.includes('foncier') || mName.includes('terrain')) {
          mType = 'type-acte'; mEmoji = '🔑';
        } else if (mName.includes('gfa') || mName.includes('garantie')) {
          mType = 'type-gfa'; mEmoji = '🏦';
        } else if (mName.includes('livraison') || mName.includes('dot') || mName.includes('doc') || mName.includes('dat')) {
          mType = 'type-livraison'; mEmoji = '🏠';
        } else if (mName.includes('engagement') || mName.includes('comité')) {
          mType = 'type-engagement'; mEmoji = '🎯';
        }
        diamond.className = mType ? `gantt-milestone milestone-key-icon ${mType}` : 'gantt-milestone';
        if (mType) {
          diamond.style.width = '13px';
          diamond.style.height = '13px';
          diamond.style.left = (x - 6) + 'px';
          // Emoji label above
          const lbl = document.createElement('span');
          lbl.style.cssText = `position:absolute;top:-16px;left:50%;transform:translateX(-50%) rotate(-45deg);font-size:10px;white-space:nowrap;pointer-events:none;z-index:5;`;
          lbl.textContent = mEmoji;
          diamond.appendChild(lbl);
        } else {
          diamond.style.left = (x - 5) + 'px';
        }
        diamond.dataset.uid = task.uid;
        // Apply custom color to milestone
        if (CUSTOM_TASK_COLORS[task.uid]) {
          diamond.style.background = CUSTOM_TASK_COLORS[task.uid];
          diamond.style.boxShadow = `0 0 8px ${CUSTOM_TASK_COLORS[task.uid]}88`;
        }
        addBarEvents(diamond, task);
        row.appendChild(diamond);
        window._barRegistry[task.uid] = { el: diamond, x: x, w: 10, rowEl: row };
      } else {
        const dur = Math.max(daysBetween(start, end), 0.5);
        const barW = Math.max(dur * getColW(), 4);

        const bar = document.createElement('div');
        bar.className = `gantt-bar level-${task.level} phase-${phaseIdx}`;
        bar.style.left = x + 'px';
        bar.style.width = barW + 'px';
        bar.dataset.uid = task.uid;

        // Apply custom color if set
        if (CUSTOM_TASK_COLORS[task.uid]) {
          bar.style.background = CUSTOM_TASK_COLORS[task.uid];
          bar.classList.remove(`phase-${phaseIdx}`);
        }

        // Progress bar
        if (task.pct > 0 && !task.summary) {
          const prog = document.createElement('div');
          prog.className = 'gantt-bar-progress';
          prog.style.width = Math.min(task.pct, 100) + '%';
          bar.appendChild(prog);
        }

        // Task name label: always show for summary/phase bars (level <= 1), show for others only if pct=0
        if (barW > 60 && task.level <= 2 && (task.summary || task.pct === 0)) {
          const lbl = document.createElement('div');
          lbl.className = 'gantt-bar-label';
          lbl.style.maxWidth = (barW - 12) + 'px';
          lbl.textContent = task.level <= 1 ? task.name : '';
          bar.appendChild(lbl);
        }

        addBarEvents(bar, task);

        // ── Resize handles (left / right) ──
        if (!task.milestone) {
          const handleL = document.createElement('div');
          handleL.className = 'bar-resize-handle left';
          handleL.dataset.uid = task.uid;
          handleL.dataset.side = 'left';
          addResizeEvents(handleL, bar, task, 'left');
          bar.appendChild(handleL);

          const handleR = document.createElement('div');
          handleR.className = 'bar-resize-handle right';
          handleR.dataset.uid = task.uid;
          handleR.dataset.side = 'right';
          addResizeEvents(handleR, bar, task, 'right');
          bar.appendChild(handleR);
        }

        row.appendChild(bar);
        window._barRegistry[task.uid] = { el: bar, x: x, w: barW, rowEl: row };
      }
    }

    canvas.appendChild(row);
  });

  // Draw link arrows
  drawLinkArrows();

  // Resize SVG to canvas
  const svg = document.getElementById('linkSvg');
  if (svg) {
    svg.style.width = w + 'px';
    svg.style.height = (tasks.filter(t => isVisible(t)).length * 32) + 'px';
  }

  // Header
  renderChartHeader(w);


}

function addBarEvents(el, task) {
  // ── Context menu & dblclick ──
  el.addEventListener('contextmenu', e => {
    e.preventDefault();
    e.stopPropagation();
    showCtxMenu(e.clientX, e.clientY, task.uid);
  });
  el.addEventListener('dblclick', () => openEditModal(task.uid));

  // ── Click: link mode only ──
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    if (linkMode) {
      handleLinkClick(task.uid);
    }
  });

  // ── Drag & Drop ──
  el.addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    if (linkMode) return;
    // Don't drag if clicking on a resize handle
    if (e.target.classList.contains('bar-resize-handle')) return;
    e.preventDefault();
    e.stopPropagation();

    const chartBody = document.getElementById('chartBody');
    const startMouseX = e.clientX + chartBody.scrollLeft;
    const origStart = task.start;
    const origFinish = task.finish;
    const origDuration = daysBetween(parseDate(origStart), parseDate(origFinish));

    // Ghost label — created only after real drag movement (> 4px)
    let ghost = null;
    let hasDragged = false;

    // Sauvegarder positions originales des enfants au début du drag
    const origChildren = {};
    if (task.summary) {
      getDescendants(task.uid).forEach(child => {
        origChildren[child.uid] = { start: child.start, finish: child.finish };
      });
    }

    dragState = { uid: task.uid, startMouseX, origStart, origFinish, origDuration, el, ghost: null };

    const onMove = (ev) => {
      if (!dragState) return;
      const currentX = ev.clientX + chartBody.scrollLeft;
      const deltaPx = currentX - dragState.startMouseX;
      const deltaDays = Math.round(deltaPx / getColW());

      // Only start real drag after 4px movement
      if (!hasDragged && Math.abs(deltaPx) < 4) return;

      if (!hasDragged) {
        hasDragged = true;
        el.classList.add('dragging');
        saveSnapshot();
        ghost = document.createElement('div');
        ghost.className = 'drag-ghost';
        ghost.textContent = task.name;
        document.body.appendChild(ghost);
        dragState.ghost = ghost;
      }

      // Move ghost
      ghost.style.left = ev.clientX + 'px';
      ghost.style.top = ev.clientY + 'px';

      // Compute new dates
      const newStart = addDays(parseDate(dragState.origStart), deltaDays);
      const newFinish = addDays(newStart, dragState.origDuration);

      // Update task data live
      task.start = toDateStr(newStart);
      task.finish = toDateStr(newFinish);

      // Si c'est une phase groupe (summary), déplacer aussi tous les enfants
      if (task.summary) {
        getDescendants(task.uid).forEach(child => {
          const orig = origChildren[child.uid];
          if (!orig) return;
          const childStart  = addDays(parseDate(orig.start), deltaDays);
          const childFinish = addDays(parseDate(orig.finish), deltaDays);
          child.start  = toDateStr(childStart);
          child.finish = toDateStr(childFinish);
          const childReg = window._barRegistry?.[child.uid];
          if (childReg) {
            const childX = dateToX(childStart);
            childReg.el.style.left = (child.milestone ? childX - 5 : childX) + 'px';
          }
          updateTaskRowDates(child.uid, child.start, child.finish);
        });
      }

      // Move bar visually without full re-render
      const newX = dateToX(newStart);
      el.style.left = (task.milestone ? newX - 5 : newX) + 'px';

      // Update task panel dates
      updateTaskRowDates(task.uid, task.start, task.finish);

      // Move linked tasks too
      propagateLinks(task.uid, deltaDays, new Set([task.uid]));

      // Redraw arrows
      drawLinkArrows();
    };

    const onUp = () => {
      if (ghost) ghost.remove();
      el.classList.remove('dragging');
      if (hasDragged) {
        dragState = null;
        rollupParents();
        render();
      } else {
        dragState = null;
      }
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}

// ─── RESIZE HANDLE EVENTS ─────────────────────────────────────────────────────
function addResizeEvents(handle, barEl, task, side) {
  handle.addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    if (linkMode) return;
    e.preventDefault();
    e.stopPropagation();

    const chartBody = document.getElementById('chartBody');
    const startMouseX = e.clientX + chartBody.scrollLeft;
    const origStart = task.start;
    const origFinish = task.finish;
    const origDuration = daysBetween(parseDate(origStart), parseDate(origFinish));

    saveSnapshot();

    // Ghost label — created only after real resize movement
    let ghost = null;
    let hasResized = false;

    dragState = { uid: task.uid, resizing: true };
    barEl.style.cursor = 'ew-resize';
    document.body.style.cursor = 'ew-resize';

    const onMove = ev => {
      const currentX = ev.clientX + chartBody.scrollLeft;
      const deltaPx = currentX - startMouseX;
      const deltaDays = Math.round(deltaPx / getColW());

      if (!hasResized && Math.abs(deltaPx) < 4) return;

      if (!hasResized) {
        hasResized = true;
        ghost = document.createElement('div');
        ghost.className = 'drag-ghost';
        ghost.textContent = side === 'right' ? `→ ${origDuration}j` : `← ${origDuration}j`;
        document.body.appendChild(ghost);
      }

      ghost.style.left = ev.clientX + 'px';
      ghost.style.top = (ev.clientY - 30) + 'px';

      if (side === 'right') {
        // Stretch/shrink finish date
        const newDur = Math.max(origDuration + deltaDays, 1);
        const newFinish = addDays(parseDate(origStart), newDur);
        task.finish = toDateStr(newFinish);

        // Visual update
        const newW = Math.max(newDur * getColW(), 4);
        barEl.style.width = newW + 'px';
        if (ghost) ghost.textContent = `→ ${newDur}j`;

        // Cascade: propagate delta to linked successors
        // delta for successors = change in finish = deltaDays clamped to actual change
        const actualDelta = daysBetween(parseDate(origFinish), newFinish);
        if (actualDelta !== 0) {
          propagateLinks(task.uid, actualDelta, new Set([task.uid]));
        }

      } else {
        // Stretch/shrink start date
        const newDur = Math.max(origDuration - deltaDays, 1);
        const clampedStart = addDays(parseDate(origFinish), -newDur);
        task.start = toDateStr(clampedStart);

        // Visual update
        const newX = dateToX(clampedStart);
        const newW = Math.max(newDur * getColW(), 4);
        barEl.style.left = newX + 'px';
        barEl.style.width = newW + 'px';
        if (ghost) ghost.textContent = `← ${newDur}j`;

        // Cascade: start moved so propagate delta to linked successors
        const actualDelta = daysBetween(parseDate(origStart), clampedStart);
        if (actualDelta !== 0) {
          propagateLinks(task.uid, actualDelta, new Set([task.uid]));
        }
      }

      // Update date cells in task panel
      updateTaskRowDates(task.uid, task.start, task.finish);
      drawLinkArrows();
    };

    const onUp = () => {
      dragState = null;
      barEl.style.cursor = '';
      document.body.style.cursor = '';
      if (ghost) ghost.remove();
      render();
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}

// ─── HELPERS FOR DRAG ────────────────────────────────────────────────────────
function toDateStr(d) {
  return d.toISOString().slice(0, 10);
}

function updateTaskRowDates(uid, start, finish) {
  // Update the date cells in the task panel without full re-render
  const rows = document.querySelectorAll(`.task-row[data-uid="${uid}"] .task-date`);
  if (rows.length >= 2) {
    rows[0].textContent = formatShortDate(parseDate(start));
    rows[1].textContent = (finish === start && tasks.find(t=>t.uid===uid)?.milestone) ? '—' : formatShortDate(parseDate(finish));
  }
}

// ── Collecte tous les descendants directs et récursifs d'une tâche summary ──
function getDescendants(uid) {
  const myIdx = tasks.findIndex(t => t.uid === uid);
  if (myIdx < 0) return [];
  const myLevel = tasks[myIdx].level;
  const result = [];
  for (let i = myIdx + 1; i < tasks.length; i++) {
    if (tasks[i].level <= myLevel) break; // on est sorti de la branche
    result.push(tasks[i]);
  }
  return result;
}

// ── Roll-up : recalcule les dates start/finish des phases parentes ──
function rollupParents() {
  // Parcourir du bas vers le haut (niveau max → niveau 0)
  const maxLevel = Math.max(...tasks.map(t => t.level));
  for (let level = maxLevel - 1; level >= 0; level--) {
    tasks.filter(t => t.level === level && t.summary).forEach(parent => {
      const children = getDescendants(parent.uid).filter(c => c.level === parent.level + 1);
      if (children.length === 0) return;
      const starts = children.map(c => parseDate(c.start).getTime());
      const ends   = children.map(c => parseDate(c.finish).getTime());
      parent.start  = toDateStr(new Date(Math.min(...starts)));
      parent.finish = toDateStr(new Date(Math.max(...ends)));
    });
  }
}

// Propagate move to all linked successors (cascade)
function propagateLinks(uid, deltaDays, visited) {
  const succs = links[uid] || [];
  succs.forEach(succUid => {
    if (visited.has(succUid)) return;
    visited.add(succUid);
    const t = tasks.find(x => x.uid === succUid);
    if (!t) return;
    const newStart = addDays(parseDate(t.start), deltaDays);
    const newFinish = addDays(parseDate(t.finish), deltaDays);
    t.start = toDateStr(newStart);
    t.finish = toDateStr(newFinish);
    // Move bar visually
    const reg = window._barRegistry?.[succUid];
    if (reg) {
      const newX = dateToX(newStart);
      reg.el.style.left = (t.milestone ? newX - 5 : newX) + 'px';
    }
    updateTaskRowDates(succUid, t.start, t.finish);
    propagateLinks(succUid, deltaDays, visited);
  });
}

// ─── LINK ARROWS ─────────────────────────────────────────────────────────────
function drawLinkArrows() {
  const svg = document.getElementById('linkSvg');
  if (!svg) return;
  // Clear old arrows
  Array.from(svg.querySelectorAll('.link-arrow')).forEach(a => a.remove());

  const ROW_H = 32;
  Object.entries(links).forEach(([fromUid, toUids]) => {
    toUids.forEach(toUid => {
      const fromTask = tasks.find(t => t.uid === fromUid);
      const toTask = tasks.find(t => t.uid === toUid);
      if (!fromTask || !toTask) return;
      if (!isVisible(fromTask) || !isVisible(toTask)) return;

      // From: right edge of source bar
      const fromX = dateToX(parseDate(fromTask.finish)) + (fromTask.milestone ? 5 : Math.max(daysBetween(parseDate(fromTask.start), parseDate(fromTask.finish)), 0.5) * getColW());
      const fromRowIdx = getVisibleRowIndex(fromUid);
      const toRowIdx = getVisibleRowIndex(toUid);
      if (fromRowIdx < 0 || toRowIdx < 0) return;

      const fromY = fromRowIdx * ROW_H + ROW_H / 2;
      const toX = dateToX(parseDate(toTask.start)) + (toTask.milestone ? 0 : 0);
      const toY = toRowIdx * ROW_H + ROW_H / 2;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('class', 'link-arrow');
      const cx1 = fromX + Math.abs(toX - fromX) * 0.4;
      const cx2 = toX - Math.abs(toX - fromX) * 0.4;
      path.setAttribute('d', `M${fromX},${fromY} C${cx1},${fromY} ${cx2},${toY} ${toX},${toY}`);
      svg.appendChild(path);
    });
  });
}

function getVisibleRowIndex(uid) {
  let idx = 0;
  for (const t of tasks) {
    if (!isVisible(t)) continue;
    if (t.uid === uid) return idx;
    idx++;
  }
  return -1;
}

// ─── LINK MODE ────────────────────────────────────────────────────────────────
function handleLinkClick(uid) {
  if (!linkSource) {
    // First click: set source
    linkSource = uid;
    // Highlight source
    const reg = window._barRegistry?.[uid];
    if (reg) reg.el.style.boxShadow = '0 0 0 2px #fbbf24, 0 0 12px rgba(251,191,36,.5)';
    showToast(`Source : "${tasks.find(t=>t.uid===uid)?.name}" — cliquez sur la tâche cible`);
  } else {
    // Second click: create link
    if (uid === linkSource) {
      // Cancel
      linkSource = null;
      render();
      return;
    }
    if (!links[linkSource]) links[linkSource] = [];
    if (!links[linkSource].includes(uid)) {
      saveSnapshot();
      links[linkSource].push(uid);
      showToast(`✅ Liaison créée : ${tasks.find(t=>t.uid===linkSource)?.name} → ${tasks.find(t=>t.uid===uid)?.name}`);
    }
    linkSource = null;
    render();
  }
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
      background: #FFFFFF; border: 1px solid rgba(82,93,244,.3); color: #1A2347;
      padding: 10px 20px; border-radius: 10px; font-size: 13px; font-family: 'DM Sans', sans-serif;
      font-weight: 500; z-index: 9999; box-shadow: 0 8px 32px rgba(82,93,244,.15);
      transition: opacity .3s; white-space: nowrap;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 3000);
}


// Link mode toggle
function toggleLinkMode() {
  linkMode = !linkMode;
  linkSource = null;
  const btn = document.getElementById('btnLinkModeHeader');
  if (btn) btn.classList.toggle('active', linkMode);
  document.body.classList.toggle('link-mode', linkMode);
  if (linkMode) {
    showToast('🔗 Mode liaison activé — cliquez sur la tâche source, puis sur la cible');
  } else {
    render();
  }
}
const _btnLinkHeader = document.getElementById('btnLinkModeHeader');
if (_btnLinkHeader) _btnLinkHeader.addEventListener('click', toggleLinkMode);

// Add "Supprimer liaisons" to context menu
document.getElementById('ctxDelete').insertAdjacentHTML('beforebegin', `
  <div class="ctx-item" id="ctxRemoveLinks">🔗 Supprimer liaisons</div>
  <div class="ctx-sep"></div>
`);
document.getElementById('ctxRemoveLinks').addEventListener('click', () => {
  if (!ctxUid) return;
  saveSnapshot();
  // Remove as source
  delete links[ctxUid];
  // Remove as target
  Object.keys(links).forEach(k => {
    links[k] = links[k].filter(v => v !== ctxUid);
  });
  render();
  showToast('Liaisons supprimées');
});

function renderChartHeader(totalW) {
  const monthsRow = document.getElementById('monthsRow');
  const weeksRow = document.getElementById('weeksRow');
  monthsRow.innerHTML = '';
  weeksRow.innerHTML = '';
  monthsRow.style.width = totalW + 'px';
  weeksRow.style.width = totalW + 'px';

  const today = new Date();

  if (getZoomLevel() === 0) {
    // Month view
    let cur = new Date(PROJECT_START.getFullYear(), PROJECT_START.getMonth(), 1);
    while (cur <= PROJECT_END) {
      const nextMonth = new Date(cur.getFullYear(), cur.getMonth() + 1, 1);
      const x = dateToX(cur);
      const x2 = dateToX(nextMonth);
      const cell = document.createElement('div');
      cell.className = 'month-cell' + (cur.getMonth() === today.getMonth() && cur.getFullYear() === today.getFullYear() ? ' current-month' : '');
      cell.style.left = x + 'px';
      cell.style.width = (x2 - x) + 'px';
      cell.style.position = 'absolute';
      cell.textContent = cur.toLocaleDateString('fr-FR', {month:'short', year:'2-digit'}).replace('. ', ' \'');
      monthsRow.appendChild(cell);
      cur = nextMonth;
    }
  } else {
    // Month labels (week/day view)
    let cur = new Date(PROJECT_START.getFullYear(), PROJECT_START.getMonth(), 1);
    while (cur <= PROJECT_END) {
      const nextMonth = new Date(cur.getFullYear(), cur.getMonth() + 1, 1);
      const x = Math.max(dateToX(cur), 0);
      const x2 = dateToX(nextMonth);
      const cell = document.createElement('div');
      cell.className = 'month-cell' + (cur.getMonth() === today.getMonth() && cur.getFullYear() === today.getFullYear() ? ' current-month' : '');
      cell.style.left = x + 'px';
      cell.style.width = (x2 - x) + 'px';
      cell.style.position = 'absolute';
      cell.textContent = cur.toLocaleDateString('fr-FR', {month:'long', year:'numeric'});
      monthsRow.appendChild(cell);
      cur = nextMonth;
    }

    // Week cells
    let wd = new Date(PROJECT_START);
    // Go to monday
    const dow = wd.getDay();
    wd.setDate(wd.getDate() - (dow === 0 ? 6 : dow - 1));
    while (wd <= PROJECT_END) {
      const x = dateToX(wd);
      const cell = document.createElement('div');
      const isCurrentWeek = Math.abs(daysBetween(wd, today)) < 7;
      cell.className = 'week-cell' + (isCurrentWeek ? ' current-week' : '');
      cell.style.left = x + 'px';
      cell.style.width = (7 * getColW()) + 'px';
      cell.style.position = 'absolute';
      if (getZoomLevel() === 1) {
        cell.textContent = 'S' + getWeekNumber(wd);
      } else {
        // Day labels
        cell.textContent = wd.getDate() + '/' + (wd.getMonth()+1);
      }
      weeksRow.appendChild(cell);
      wd = addDays(wd, 7);
    }
  }
}

function getWeekNumber(d) {
  const date = new Date(d);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  const week1 = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

// ─── CONTEXT MENU ───────────────────────────────────────────────────────────
function showCtxMenu(x, y, uid) {
  ctxUid = uid;
  const menu = document.getElementById('ctxMenu');
  menu.style.left = x + 'px';
  menu.style.top = y + 'px';
  menu.classList.add('open');
}

document.addEventListener('click', () => {
  document.getElementById('ctxMenu').classList.remove('open');
});

document.getElementById('ctxEdit').addEventListener('click', () => {
  if (ctxUid) openEditModal(ctxUid);
});

document.getElementById('ctxColor').addEventListener('click', (e) => {
  e.stopPropagation();
  if (!ctxUid) return;
  const uid = ctxUid;
  document.getElementById('ctxMenu').classList.remove('open');
  // Delay so the global document click handler fires first and doesn't close the popup
  setTimeout(() => openColorPopup(uid, { getBoundingClientRect: () => ({right: e.clientX, top: e.clientY}) }), 50);
});

document.getElementById('ctxDelete').addEventListener('click', () => {
  if (ctxUid) {
    saveSnapshot();
    tasks = tasks.filter(t => t.uid !== ctxUid);
    render();
  }
});

document.getElementById('ctxAddChild').addEventListener('click', () => {
  if (ctxUid) openAddModal(ctxUid);
});

// ─── COLOR POPUP ─────────────────────────────────────────────────────────────
function openColorPopup(uid, anchorEl) {
  colorPopupUid = uid;
  const popup = document.getElementById('colorPopup');

  // Build swatches in popup
  buildColorSwatches('colorPopupGrid', CUSTOM_TASK_COLORS[uid] || null, (color) => {
    saveSnapshot();
    CUSTOM_TASK_COLORS[colorPopupUid] = color;
    render();
  });

  // Custom color input in popup
  const customInput = document.getElementById('colorPopupCustom');
  customInput.value = CUSTOM_TASK_COLORS[uid] || '#4f7cff';
  customInput.oninput = () => {
    CUSTOM_TASK_COLORS[colorPopupUid] = customInput.value;
    // Mark all swatches as deselected
    document.querySelectorAll('#colorPopupGrid .color-swatch').forEach(s => s.classList.remove('selected'));
    render();
  };

  // Position popup near anchor
  const rect = anchorEl ? anchorEl.getBoundingClientRect() : {right: 200, top: 200};
  popup.style.left = Math.min(rect.right + 8, window.innerWidth - 240) + 'px';
  popup.style.top = Math.min(rect.top, window.innerHeight - 300) + 'px';
  popup.classList.add('open');
}

document.getElementById('colorPopupReset').addEventListener('click', () => {
  if (colorPopupUid) {
    delete CUSTOM_TASK_COLORS[colorPopupUid];
    document.getElementById('colorPopup').classList.remove('open');
    render();
  }
});

document.getElementById('colorPopupClose').addEventListener('click', () => {
  document.getElementById('colorPopup').classList.remove('open');
});

document.addEventListener('click', (e) => {
  const popup = document.getElementById('colorPopup');
  if (!popup.contains(e.target)) {
    popup.classList.remove('open');
  }
});

// ─── MODAL ──────────────────────────────────────────────────────────────────

function openEditModal(uid) {
  editUid = uid;
  const task = tasks.find(t => t.uid === uid);
  modalSelectedColor = CUSTOM_TASK_COLORS[uid] || null;
  document.getElementById('modalTitle').textContent = 'Modifier la tâche';
  document.getElementById('fName').value = task.name;
  document.getElementById('fStart').value = task.start;
  document.getElementById('fEnd').value = task.finish;
  document.getElementById('fPct').value = task.pct;
  document.getElementById('fType').value = task.milestone ? 'milestone' : task.summary ? 'summary' : 'task';
  populateParentSelect(null);
  buildColorSwatches('modalColorPicker', CUSTOM_TASK_COLORS[uid] || null, (c) => { modalSelectedColor = c; });
  document.getElementById('modalOverlay').classList.add('open');
}

function populateParentSelect(defaultUid) {
  const sel = document.getElementById('fParent');
  sel.innerHTML = '<option value="">— Aucun parent —</option>';
  tasks.filter(t => t.summary).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.uid;
    opt.textContent = '  '.repeat(t.level) + t.name;
    if (t.uid === defaultUid) opt.selected = true;
    sel.appendChild(opt);
  });
}

document.getElementById('btnCancel').addEventListener('click', () => {
  document.getElementById('modalOverlay').classList.remove('open');
});

document.getElementById('btnSave').addEventListener('click', () => {
  const name = document.getElementById('fName').value.trim();
  if (!name) return;
  const start = document.getElementById('fStart').value;
  const finish = document.getElementById('fEnd').value;

  // Validation : date de fin >= date de début
  if (start && finish && finish < start) {
    document.getElementById('fEnd').style.borderColor = 'var(--red)';
    document.getElementById('fEnd').style.boxShadow = '0 0 0 3px rgba(214,53,88,.15)';
    showToast('⚠️ La date de fin ne peut pas être avant la date de début');
    return;
  }
  document.getElementById('fEnd').style.borderColor = '';
  document.getElementById('fEnd').style.boxShadow = '';

  saveSnapshot();
  const pct = parseInt(document.getElementById('fPct').value) || 0;
  const type = document.getElementById('fType').value;
  const parentUid = document.getElementById('fParent').value;

  let level = 0;
  if (parentUid) {
    const parent = tasks.find(t => t.uid === parentUid);
    if (parent) level = parent.level + 1;
  }

  if (editUid) {
    const task = tasks.find(t => t.uid === editUid);
    task.name = name;
    task.start = start;
    task.finish = finish;
    task.pct = pct;
    task.milestone = type === 'milestone';
    task.summary = type === 'summary';
    if (modalSelectedColor) CUSTOM_TASK_COLORS[editUid] = modalSelectedColor;
  } else {
    const newUid = 'new_' + Date.now();
    const newTask = {
      uid: newUid,
      id: tasks.length,
      name, level, start, finish,
      milestone: type === 'milestone',
      summary: type === 'summary',
      pct, preds: []
    };
    if (modalSelectedColor) CUSTOM_TASK_COLORS[newUid] = modalSelectedColor;
    if (parentUid) {
      const pIdx = tasks.findIndex(t => t.uid === parentUid);
      tasks.splice(pIdx + 1, 0, newTask);
    } else {
      tasks.push(newTask);
    }
  }

  document.getElementById('modalOverlay').classList.remove('open');
  rollupParents();
  render();
});

// btnAdd removed from header — use context menu right-click to add tasks

// ─── COLOR PICKER HELPERS ────────────────────────────────────────────────────
function buildColorSwatches(containerId, currentColor, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  COLOR_PALETTE.forEach(color => {
    const sw = document.createElement('div');
    sw.className = 'color-swatch' + (currentColor === color ? ' selected' : '');
    sw.style.background = color;
    if (color === '#ffffff') sw.style.border = '2px solid #64748b';
    sw.addEventListener('click', () => {
      container.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
      sw.classList.add('selected');
      onSelect(color);
    });
    container.appendChild(sw);
  });

  // Custom color swatch
  const customSw = document.createElement('div');
  customSw.className = 'color-swatch custom-color' + (!COLOR_PALETTE.includes(currentColor) && currentColor ? ' selected' : '');
  customSw.title = 'Couleur personnalisée';
  customSw.textContent = '+';
  customSw.style.fontSize = '16px';
  customSw.style.fontWeight = '300';
  customSw.style.color = '#fff';
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'color';
  hiddenInput.className = 'color-custom-input';
  hiddenInput.value = currentColor && !COLOR_PALETTE.includes(currentColor) ? currentColor : '#ff6b6b';
  customSw.appendChild(hiddenInput);
  customSw.addEventListener('click', () => hiddenInput.click());
  hiddenInput.addEventListener('input', () => {
    container.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
    customSw.classList.add('selected');
    customSw.style.background = hiddenInput.value;
    onSelect(hiddenInput.value);
  });
  container.appendChild(customSw);
}

// ─── MODAL COLOR PICKER ────────────────────────────────────────────────────
function openAddModal(parentUid) {
  editUid = null;
  modalSelectedColor = null;
  document.getElementById('modalTitle').textContent = 'Nouvelle tâche';
  document.getElementById('fName').value = '';
  document.getElementById('fStart').value = new Date().toISOString().slice(0,10);
  document.getElementById('fEnd').value = new Date().toISOString().slice(0,10);
  document.getElementById('fPct').value = 0;
  document.getElementById('fType').value = 'task';
  populateParentSelect(parentUid);
  buildColorSwatches('modalColorPicker', null, (c) => { modalSelectedColor = c; });
  document.getElementById('modalOverlay').classList.add('open');
}

// ─── ZOOM ────────────────────────────────────────────────────────────────────
function applyZoom(newZoom, anchorScrollLeft) {
  const chartBody = document.getElementById('chartBody');
  // Calculate the ratio to preserve scroll position relative to visible center
  const oldZoom = continuousZoom;
  const scrollCenter = (anchorScrollLeft !== undefined ? anchorScrollLeft : chartBody.scrollLeft) + chartBody.clientWidth / 2;
  const dayAtCenter = scrollCenter / oldZoom;

  continuousZoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, newZoom));
  document.getElementById('zoomLabel').textContent = getZoomLabel();

  render();

  // Re-center scroll on same day
  const newScrollCenter = dayAtCenter * continuousZoom;
  chartBody.scrollLeft = Math.max(0, newScrollCenter - chartBody.clientWidth / 2);
}

document.getElementById('zoomIn').addEventListener('click', () => {
  applyZoom(continuousZoom * 1.5);
});
document.getElementById('zoomOut').addEventListener('click', () => {
  applyZoom(continuousZoom / 1.5);
});

// Trackpad pinch-to-zoom and Ctrl+scroll
document.getElementById('chartBody').addEventListener('wheel', (e) => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
    // deltaY negative = zoom in, positive = zoom out
    const factor = e.deltaY > 0 ? 0.92 : 1.09;
    applyZoom(continuousZoom * factor, e.currentTarget.scrollLeft + e.offsetX);
  }
}, { passive: false });

// Also handle on the gantt wrapper for trackpad pinch gesture
document.querySelector('.gantt-wrapper').addEventListener('wheel', (e) => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.92 : 1.09;
    const chartBody = document.getElementById('chartBody');
    applyZoom(continuousZoom * factor, chartBody.scrollLeft);
  }
}, { passive: false });

// Click on zoom label resets to default week view
document.getElementById('zoomLabel').addEventListener('click', () => {
  applyZoom(16);
});

// ─── EXPORT PDF ─────────────────────────────────────────────────────────────
document.getElementById('btnExport')?.addEventListener('click', () => {
  document.getElementById('exportModalOverlay').classList.add('open');
});
document.getElementById('exportCancel')?.addEventListener('click', () => {
  document.getElementById('exportModalOverlay').classList.remove('open');
});

document.getElementById('exportConfirm')?.addEventListener('click', () => {
  const scope = document.getElementById('exportScope').value;
  const zoomChoice = document.getElementById('exportZoom').value;
  document.getElementById('exportModalOverlay').classList.remove('open');

  // Save current state
  const savedZoom = continuousZoom;
  const savedCollapsed = new Set(collapsed);

  // Apply export zoom
  const zoomMap = { month: 3.5, week: 14, day: 38 };
  continuousZoom = zoomMap[zoomChoice];

  // Expand all if needed
  if (scope === 'all') {
    collapsed.clear();
  }

  // Re-render with export settings
  render();

  // Expand chart body to show full canvas for printing
  const chartBody = document.getElementById('chartBody');
  const canvas = document.getElementById('ganttCanvas');
  const taskList = document.getElementById('taskList');

  const origChartBodyStyle = chartBody.getAttribute('style') || '';
  const origTaskListStyle = taskList.getAttribute('style') || '';

  // Force full height for print
  chartBody.style.overflow = 'visible';
  chartBody.style.height = canvas.scrollHeight + 'px';
  taskList.style.overflow = 'visible';
  taskList.style.height = canvas.scrollHeight + 'px';

  // Set document title for PDF filename
  document.title = 'Planning_PA3_' + new Date().toISOString().slice(0,10);

  setTimeout(() => {
    window.print();

    // Restore state after print dialog
    setTimeout(() => {
      continuousZoom = savedZoom;
      collapsed.clear();
      savedCollapsed.forEach(uid => collapsed.add(uid));
      chartBody.setAttribute('style', origChartBodyStyle);
      taskList.setAttribute('style', origTaskListStyle);
      chartBody.style.overflow = '';
      taskList.style.overflow = '';
      document.title = 'Planning Immobilier — PA3';
      render();
    }, 500);
  }, 300);
});


document.getElementById('todayToggle')?.addEventListener('click', () => {
  showToday = !showToday;
  const btn = document.getElementById('todayToggle'); if(!btn) return;
  btn.style.opacity = showToday ? 1 : 0.4;
  render();
});

// ─── DEADLINE ────────────────────────────────────────────────────────────────
let deadlinePickMode = false;

document.getElementById('btnDeadline')?.addEventListener('click', () => {
  deadlinePickMode = !deadlinePickMode;
  const btn = document.getElementById('btnDeadline'); if(!btn) return;
  if (deadlinePickMode) {
    btn.style.borderColor = '#f87171';
    btn.style.color = '#f87171';
    document.getElementById('chartBody').style.cursor = 'crosshair';
    showToast('⚑ Cliquez sur le Gantt pour placer la deadline — clic droit sur la ligne pour la supprimer');
  } else {
    btn.style.borderColor = '';
    btn.style.color = '';
    document.getElementById('chartBody').style.cursor = '';
  }
});

document.getElementById('chartBody').addEventListener('click', e => {
  if (!deadlinePickMode) return;
  if (e.target.closest('.deadline-line')) return;
  const canvas = document.getElementById('ganttCanvas');
  const chartBody = document.getElementById('chartBody');
  const relX = e.clientX - canvas.getBoundingClientRect().left + chartBody.scrollLeft;
  const days = Math.round(relX / getColW());
  const dlDate = addDays(PROJECT_START, days);
  const label = 'Deadline ' + (deadlines.length + 1);
  deadlines.push({ date: toDateStr(dlDate), label });
  deadlinePickMode = false;
  const btn = document.getElementById('btnDeadline'); if(!btn) return;
  btn.style.borderColor = '';
  btn.style.color = '';
  chartBody.style.cursor = '';
  render();
  showToast(`⚑ ${label} placée au ${formatShortDate(dlDate)} — glissez-la pour ajuster, clic droit pour supprimer`);
});

// ─── FILTERS ─────────────────────────────────────────────────────────────────
// filterPhaseUid declared at top level

function setFilter(mode, phaseUid) {
  filterMode = mode;
  filterPhaseUid = phaseUid || null;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (mode === 'all') document.getElementById('filterAll')?.classList.add('active');
  else if (mode === 'milestones') document.getElementById('filterMilestones')?.classList.add('active');
  else if (mode === 'phase' && phaseUid) {
    document.querySelector(`.filter-phase-btn[data-phase-uid="${phaseUid}"]`)?.classList.add('active');
  }
  render();
}

document.getElementById('filterAll').addEventListener('click', () => setFilter('all'));
document.getElementById('filterMilestones').addEventListener('click', () => setFilter('milestones'));
// Phase buttons are rendered dynamically in renderPhaseButtons()
// called from render() — no static wiring needed here

// ─── SEARCH ──────────────────────────────────────────────────────────────────
document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value;
  render();
});

// ─── SAVE / LOAD SYSTEM ──────────────────────────────────────────────────────
// ─── FICHIER POPUP — système simplifié ───────────────────────────────────────

function buildStateSnapshot(name) {
  return {
    id: Date.now(),
    name: name || ('Planning_' + new Date().toLocaleDateString('fr-FR').replace(/\//g, '-')),
    date: new Date().toISOString(),
    tasks: tasks.map(t => ({...t})),
    links: JSON.parse(JSON.stringify(links)),
    deadlines: [...deadlines],
    colors: {...CUSTOM_TASK_COLORS},
    zoom: continuousZoom,
    collapsed: [...collapsed]
  };
}

function downloadJson(name) {
  const snap = buildStateSnapshot(name);
  const blob = new Blob([JSON.stringify(snap, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name.replace(/[^a-z0-9\-_]/gi, '_') + '.json';
  a.click();
  URL.revokeObjectURL(url);
  closeFilePopup();
  showToast('✅ Fichier téléchargé — ' + a.download);
}

function applySnapshot(snap) {
  saveSnapshot(); // push undo
  tasks = snap.tasks.map(t => ({...t}));
  Object.keys(links).forEach(k => delete links[k]);
  Object.assign(links, snap.links || {});
  deadlines = snap.deadlines || [];
  Object.keys(CUSTOM_TASK_COLORS).forEach(k => delete CUSTOM_TASK_COLORS[k]);
  Object.assign(CUSTOM_TASK_COLORS, snap.colors || {});
  continuousZoom = snap.zoom || 16;
  collapsed = new Set(snap.collapsed || []);
  if (snap.name) {
    const titleEl = document.getElementById('projectTitle');
    if (titleEl) titleEl.textContent = snap.name;
  }
  render();
  showToast('📂 Planning chargé — ' + (snap.name || 'fichier importé'));
}

function openFilePopup() {
  // Pre-fill filename from current project title
  const title = document.getElementById('projectTitle')?.textContent?.trim() || 'Planning';
  document.getElementById('filePopupName').value = title;
  document.getElementById('fileConfirmOverlay').classList.remove('open');
  document.getElementById('filePopupOverlay').classList.add('open');
  setTimeout(() => document.getElementById('filePopupName').focus(), 80);
}

function closeFilePopup() {
  document.getElementById('filePopupOverlay').classList.remove('open');
  document.getElementById('fileConfirmOverlay').classList.remove('open');
}

// Open popup
document.getElementById('btnOpenFilePopup').addEventListener('click', openFilePopup);

// Close on overlay click or × button
document.getElementById('filePopupOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('filePopupOverlay')) closeFilePopup();
});
document.getElementById('filePopupClose').addEventListener('click', closeFilePopup);

// Save → download .json
document.getElementById('filePopupBtnSave').addEventListener('click', () => {
  const name = document.getElementById('filePopupName').value.trim()
    || ('Planning_' + new Date().toLocaleDateString('fr-FR').replace(/\//g, '-'));
  downloadJson(name);
});
document.getElementById('filePopupName').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('filePopupBtnSave').click();
  if (e.key === 'Escape') closeFilePopup();
});

// Export PDF → open print modal
document.getElementById('filePopupBtnPdf').addEventListener('click', () => {
  closeFilePopup();
  setTimeout(() => document.getElementById('exportModalOverlay').classList.add('open'), 100);
});

// Import → show confirm overlay first
let _pendingImportFile = null;
document.getElementById('filePopupBtnImport').addEventListener('click', () => {
  document.getElementById('filePopupFileInput').click();
});
document.getElementById('filePopupFileInput').addEventListener('change', e => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  _pendingImportFile = file;
  document.getElementById('fileConfirmOverlay').classList.add('open');
});
document.getElementById('fileConfirmCancel').addEventListener('click', () => {
  _pendingImportFile = null;
  document.getElementById('fileConfirmOverlay').classList.remove('open');
});
document.getElementById('fileConfirmOk').addEventListener('click', () => {
  if (!_pendingImportFile) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      const snap = Array.isArray(data) ? data[0] : data;
      if (!snap || !Array.isArray(snap.tasks) || snap.tasks.length === 0) {
        closeFilePopup();
        showToast('❌ Fichier invalide — planning non reconnu');
        return;
      }
      const first = snap.tasks[0];
      if (!('uid' in first) || !('name' in first) || !('start' in first)) {
        closeFilePopup();
        showToast('❌ Format incorrect — champs attendus manquants');
        return;
      }
      closeFilePopup();
      applySnapshot(snap);
    } catch {
      closeFilePopup();
      showToast('❌ Erreur de lecture — fichier JSON invalide');
    }
  };
  reader.readAsText(_pendingImportFile);
  _pendingImportFile = null;
});

// Keyboard shortcut Ctrl+S → open popup (or quick-download if already named)
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    openFilePopup();
  }
});

// Auto-save désactivé — sauvegarde manuelle uniquement

// ─── INIT ────────────────────────────────────────────────────────────────────
// Collapse level-2+ by default for cleaner initial view
// (Applied later when landing is dismissed via launchApp)

// Scroll to today on load — deferred until landing dismissed
// (handled in launchApp)

// ─── LANDING PAGE ────────────────────────────────────────────────────────────
(function() {

  // Skeleton générique LCY — sera remplacé par le vrai JSON fourni ultérieurement
  const GENERIC_LCY_SKELETON = {
    name: 'Planning Générique LCY',
    date: new Date().toISOString(),
    id: Date.now(),
    tasks: [
      {"uid":"lcy_0","id":0,"name":"PROJET GÉNÉRIQUE LCY","level":0,"start":"2026-01-05","finish":"2027-06-30","milestone":false,"summary":true,"pct":0,"preds":[]},
      {"uid":"lcy_1","id":1,"name":"Phase 1 — Études préalables","level":1,"start":"2026-01-05","finish":"2026-04-30","milestone":false,"summary":true,"pct":0,"preds":[]},
      {"uid":"lcy_2","id":2,"name":"Choix des intervenants","level":2,"start":"2026-01-05","finish":"2026-02-28","milestone":false,"summary":false,"pct":0,"preds":[]},
      {"uid":"lcy_3","id":3,"name":"Études de faisabilité","level":2,"start":"2026-02-01","finish":"2026-03-31","milestone":false,"summary":false,"pct":0,"preds":[]},
      {"uid":"lcy_4","id":4,"name":"Validation programme","level":2,"start":"2026-04-01","finish":"2026-04-30","milestone":true,"summary":false,"pct":0,"preds":[]},
      {"uid":"lcy_5","id":5,"name":"Phase 2 — Permis de construire","level":1,"start":"2026-03-01","finish":"2026-10-31","milestone":false,"summary":true,"pct":0,"preds":[]},
      {"uid":"lcy_6","id":6,"name":"Esquisse & APS","level":2,"start":"2026-03-01","finish":"2026-05-31","milestone":false,"summary":false,"pct":0,"preds":[]},
      {"uid":"lcy_7","id":7,"name":"Dépôt PC","level":2,"start":"2026-06-01","finish":"2026-06-01","milestone":true,"summary":false,"pct":0,"preds":[]},
      {"uid":"lcy_8","id":8,"name":"Instruction PC","level":2,"start":"2026-06-02","finish":"2026-09-30","milestone":false,"summary":false,"pct":0,"preds":[]},
      {"uid":"lcy_9","id":9,"name":"Obtention PC","level":2,"start":"2026-10-01","finish":"2026-10-01","milestone":true,"summary":false,"pct":0,"preds":[]},
      {"uid":"lcy_10","id":10,"name":"Phase 3 — Montage juridique & financier","level":1,"start":"2026-05-01","finish":"2026-12-31","milestone":false,"summary":true,"pct":0,"preds":[]},
      {"uid":"lcy_11","id":11,"name":"Promesse de vente terrain","level":2,"start":"2026-05-01","finish":"2026-09-30","milestone":false,"summary":false,"pct":0,"preds":[]},
      {"uid":"lcy_12","id":12,"name":"Acte authentique","level":2,"start":"2026-10-01","finish":"2026-12-31","milestone":true,"summary":false,"pct":0,"preds":[]},
      {"uid":"lcy_13","id":13,"name":"Phase 4 — Travaux","level":1,"start":"2026-11-01","finish":"2027-06-30","milestone":false,"summary":true,"pct":0,"preds":[]},
      {"uid":"lcy_14","id":14,"name":"Consultation entreprises","level":2,"start":"2026-11-01","finish":"2026-12-31","milestone":false,"summary":false,"pct":0,"preds":[]},
      {"uid":"lcy_15","id":15,"name":"Signature marchés travaux","level":2,"start":"2027-01-15","finish":"2027-01-15","milestone":true,"summary":false,"pct":0,"preds":[]},
      {"uid":"lcy_16","id":16,"name":"Démarrage chantier","level":2,"start":"2027-02-01","finish":"2027-02-01","milestone":true,"summary":false,"pct":0,"preds":[]},
      {"uid":"lcy_17","id":17,"name":"Livraison","level":2,"start":"2027-06-30","finish":"2027-06-30","milestone":true,"summary":false,"pct":0,"preds":[]}
    ],
    links: {},
    deadlines: [],
    colors: {},
    zoom: 16,
    collapsed: []
  };

  function showLandingError(msg) {
    const el = document.getElementById('landingError');
    el.style.display = 'block';
    el.textContent = msg;
    setTimeout(() => { el.style.display = 'none'; }, 5000);
  }

  function launchApp(snap) {
    // Apply snapshot into app state
    if (snap.tasks && snap.tasks.length > 0) {
      tasks = snap.tasks.map(t => ({...t}));
    }
    if (snap.links) {
      Object.keys(links).forEach(k => delete links[k]);
      Object.assign(links, snap.links);
    }
    if (snap.deadlines) deadlines = [...snap.deadlines];
    if (snap.colors) {
      Object.keys(CUSTOM_TASK_COLORS).forEach(k => delete CUSTOM_TASK_COLORS[k]);
      Object.assign(CUSTOM_TASK_COLORS, snap.colors);
    }
    if (snap.zoom) continuousZoom = snap.zoom;
    if (snap.collapsed) collapsed = new Set(snap.collapsed);
    if (snap.name) {
      const titleEl = document.getElementById('projectTitle');
      if (titleEl) titleEl.textContent = snap.name;
    }

    // Rebuild initial collapse state if it's an import without collapsed info
    if (!snap.collapsed || snap.collapsed.length === 0) {
      tasks.forEach(t => { if (t.level >= 2 && t.summary) collapsed.add(t.uid); });
    }

    // Hide landing, show app
    const landing = document.getElementById('landingPage');
    landing.style.transition = 'opacity .35s ease';
    landing.style.opacity = '0';
    setTimeout(() => {
      landing.style.display = 'none';
      document.body.classList.remove('landing-active');
    }, 350);

    render();
    initScrollSync();

    // Scroll to today after render
    setTimeout(() => {
      const today = new Date();
      const x = daysBetween(PROJECT_START, today) * getColW() - 200;
      document.getElementById('chartBody').scrollLeft = Math.max(0, x);
      document.getElementById('zoomLabel').textContent = getZoomLabel();
    }, 150);

    showToast('✅ Planning chargé — ' + (snap.name || 'calendrier importé'));
  }

  // Import button → open file picker
  document.getElementById('landingBtnImport').addEventListener('click', () => {
    document.getElementById('landingFileInput').click();
  });

  // File selected
  document.getElementById('landingFileInput').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    e.target.value = '';
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);

        // Accept either a single snapshot or an array (take first)
        const snap = Array.isArray(data) ? data[0] : data;

        // Validate minimal structure
        if (!snap || !Array.isArray(snap.tasks) || snap.tasks.length === 0) {
          showLandingError('❌ Fichier invalide — ce fichier ne contient pas de planning PlanningPro reconnaissable. Vérifiez que vous importez bien un fichier .json exporté depuis cet outil.');
          return;
        }

        // Check tasks have expected fields
        const firstTask = snap.tasks[0];
        if (!('uid' in firstTask) || !('name' in firstTask) || !('start' in firstTask)) {
          showLandingError('❌ Format incorrect — les tâches ne contiennent pas les champs attendus (uid, name, start). Vérifiez la source du fichier.');
          return;
        }

        launchApp(snap);

      } catch (err) {
        showLandingError('❌ Erreur de lecture — le fichier sélectionné n\'est pas un JSON valide. Vérifiez qu\'il n\'est pas corrompu.');
      }
    };
    reader.readAsText(file);
  });

  // Generic LCY button
  document.getElementById('landingBtnGeneric').addEventListener('click', () => {
    launchApp(GENERIC_LCY_SKELETON);
  });

})();


(function() {
  // Generate app icon as a canvas data URL (blue gradient with "PP" text)
  function makeIcon(size) {
    const c = document.createElement('canvas');
    c.width = size; c.height = size;
    const ctx = c.getContext('2d');
    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, '#EBF0FC');
    grad.addColorStop(1, '#F2F5FD');
    ctx.fillStyle = grad;
    // Rounded rect
    const r = size * 0.2;
    ctx.beginPath();
    ctx.moveTo(r, 0); ctx.lineTo(size-r, 0);
    ctx.quadraticCurveTo(size, 0, size, r);
    ctx.lineTo(size, size-r);
    ctx.quadraticCurveTo(size, size, size-r, size);
    ctx.lineTo(r, size); ctx.quadraticCurveTo(0, size, 0, size-r);
    ctx.lineTo(0, r); ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.closePath();
    ctx.fill();

    // Accent bar left
    const barGrad = ctx.createLinearGradient(0, 0, 0, size);
    barGrad.addColorStop(0, '#4f7cff');
    barGrad.addColorStop(1, '#7c5cfc');
    ctx.fillStyle = barGrad;
    ctx.fillRect(size*0.1, size*0.2, size*0.07, size*0.6);

    // Gantt bars illustration
    const bars = [
      { y: 0.28, x: 0.22, w: 0.52, c: '#4f7cff' },
      { y: 0.43, x: 0.22, w: 0.35, c: '#7c5cfc' },
      { y: 0.58, x: 0.22, w: 0.45, c: '#06b6d4' },
      { y: 0.73, x: 0.22, w: 0.28, c: '#34d399' },
    ];
    bars.forEach(b => {
      ctx.fillStyle = b.c;
      const bh = size * 0.1;
      const br = bh / 2;
      const bx = size * b.x, by = size * b.y, bw = size * b.w;
      ctx.beginPath();
      ctx.moveTo(bx + br, by); ctx.lineTo(bx + bw - br, by);
      ctx.quadraticCurveTo(bx+bw, by, bx+bw, by+br);
      ctx.lineTo(bx+bw, by+bh-br);
      ctx.quadraticCurveTo(bx+bw, by+bh, bx+bw-br, by+bh);
      ctx.lineTo(bx+br, by+bh); ctx.quadraticCurveTo(bx, by+bh, bx, by+bh-br);
      ctx.lineTo(bx, by+br); ctx.quadraticCurveTo(bx, by, bx+br, by);
      ctx.closePath();
      ctx.fill();
    });

    return c.toDataURL('image/png');
  }

  const icon192 = makeIcon(192);
  const icon512 = makeIcon(512);

  // Set apple touch icon
  document.getElementById('appleTouchIcon').href = icon192;

  // Inject manifest as blob URL
  const manifest = {
    name: 'PlanningPro — Immobilier',
    short_name: 'PlanningPro',
    description: 'Planning de conception immobilière',
    start_url: '.',
    display: 'standalone',
    background_color: '#F0F4FB',
    theme_color: '#F0F4FB',
    orientation: 'landscape',
    icons: [
      { src: icon192, sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
      { src: icon512, sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
    ]
  };
  const manifestBlob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
  const manifestURL = URL.createObjectURL(manifestBlob);
  document.getElementById('pwaManifest').href = manifestURL;

  // Register inline Service Worker for offline support
  const swCode = `
    const CACHE = 'planningpro-v1';
    self.addEventListener('install', e => {
      self.skipWaiting();
    });
    self.addEventListener('activate', e => {
      e.waitUntil(clients.claim());
    });
    self.addEventListener('fetch', e => {
      e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request).catch(() => new Response('Offline')))
      );
    });
  `;
  const swBlob = new Blob([swCode], { type: 'application/javascript' });
  const swURL = URL.createObjectURL(swBlob);
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(swURL, { scope: '/' }).catch(() => {});
  }

  // ── Install prompt banner ──────────────────────────────────────────────────
  let deferredPrompt = null;

  const banner = document.createElement('div');
  banner.id = 'installBanner';
  banner.style.cssText = `
    display: none; position: fixed; bottom: 24px; right: 24px; z-index: 9999;
    background: #FFFFFF; border: 1px solid rgba(82,93,244,.25);
    border-radius: 14px; padding: 16px 20px; width: 300px;
    box-shadow: 0 8px 32px rgba(82,93,244,.18);
    font-family: 'DM Sans', sans-serif; color: #1A2347;
    animation: slideUp .3s ease;
  `;
  banner.innerHTML = `
    <style>@keyframes slideUp { from { transform:translateY(20px); opacity:0; } to { transform:translateY(0); opacity:1; } }</style>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <canvas id="bannerIcon" width="40" height="40" style="border-radius:8px;flex-shrink:0"></canvas>
      <div>
        <div style="font-weight:600;font-size:14px;color:#1A2347">Installer PlanningPro</div>
        <div style="font-size:11px;color:#8B9BC8;margin-top:1px">Accès rapide depuis votre bureau</div>
      </div>
      <button onclick="document.getElementById('installBanner').style.display='none'"
        style="margin-left:auto;background:none;border:none;color:#8B9BC8;cursor:pointer;font-size:18px;line-height:1">×</button>
    </div>
    <div style="display:flex;gap:8px">
      <button id="installBtn" style="
        flex:1; background:#525DF4; border:none; color:#fff; border-radius:8px;
        padding:9px; cursor:pointer; font-size:13px; font-family:'DM Sans',sans-serif; font-weight:500;">
        📲 Installer
      </button>
      <button onclick="document.getElementById('installBanner').style.display='none'" style="
        background:transparent; border:1px solid rgba(82,93,244,.2); color:#4A5578; border-radius:8px;
        padding:9px 14px; cursor:pointer; font-size:13px; font-family:'DM Sans',sans-serif;">
        Plus tard
      </button>
    </div>
  `;
  document.body.appendChild(banner);

  // Draw mini icon on banner canvas
  setTimeout(() => {
    const bc = document.getElementById('bannerIcon');
    if (bc) {
      const ctx = bc.getContext('2d');
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, 40, 40);
      img.src = makeIcon(40);
    }
  }, 100);

  document.getElementById('installBtn')?.addEventListener('click', async () => {
    if (!deferredPrompt) {
      // Safari / manual instructions
      showToast('Sur Safari : appuyez sur Partager → "Sur l\'écran d\'accueil". Sur Chrome : menu ⋮ → "Installer l\'application".');
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') showToast('✅ PlanningPro installé !');
    deferredPrompt = null;
    banner.style.display = 'none';
  });

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    setTimeout(() => { banner.style.display = 'block'; }, 1500);
  });

  window.addEventListener('appinstalled', () => {
    banner.style.display = 'none';
    showToast('✅ PlanningPro installé sur votre bureau !');
  });

  // Add install button to header
  const installHeaderBtn = document.createElement('button');
  installHeaderBtn.id = 'btnInstall';
  installHeaderBtn.title = 'Installer comme application bureau';
  installHeaderBtn.style.cssText = `
    background: rgba(82,93,244,.07); border: 1px solid rgba(82,93,244,.18); color: #4A5578;
    border-radius: 6px; padding: 5px 13px; cursor: pointer; font-size: 12px;
    font-family: 'DM Sans', sans-serif; transition: all .15s;
  `;
  installHeaderBtn.textContent = '📲 Installer';
  installHeaderBtn.onmouseenter = () => { installHeaderBtn.style.borderColor = '#525DF4'; installHeaderBtn.style.color = '#525DF4'; };
  installHeaderBtn.onmouseleave = () => { installHeaderBtn.style.borderColor = 'rgba(82,93,244,.18)'; installHeaderBtn.style.color = '#4A5578'; };
  installHeaderBtn.onclick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
    } else {
      banner.style.display = banner.style.display === 'block' ? 'none' : 'block';
    }
  };
  // Insert before the first header button
  const header = document.querySelector('header');
  const firstBtn = header.querySelector('button');
  if (firstBtn) header.insertBefore(installHeaderBtn, firstBtn);
  else header.appendChild(installHeaderBtn);

})();

// ─── SCROLL SYNC — initialisé une seule fois (fix fuite mémoire) ─────────────
function initScrollSync() {
  const list      = document.getElementById('taskList');
  const chartBody = document.getElementById('chartBody');

  // Horizontal : translateX sur chartHeaderInner
  chartBody.addEventListener('scroll', () => {
    const hi = document.getElementById('chartHeaderInner');
    if (hi) hi.style.transform = 'translateX(-' + chartBody.scrollLeft + 'px)';
  });

  // Vertical : rAF pour éviter boucle infinie
  let ticking = false;
  list.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { chartBody.scrollTop = list.scrollTop; ticking = false; });
      ticking = true;
    }
  });
  chartBody.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { list.scrollTop = chartBody.scrollTop; ticking = false; });
      ticking = true;
    }
  });

  
  // ── Curseur vertical sur le Gantt ──
  const cursorEl = document.createElement('div');
  cursorEl.style.cssText = 'position:fixed;top:0;bottom:0;width:1px;background:rgba(82,93,244,.22);pointer-events:none;z-index:8;display:none;';
  document.body.appendChild(cursorEl);
  chartBody.addEventListener('mousemove', (e) => {
    const rect = chartBody.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right) return;
    cursorEl.style.display = 'block';
    cursorEl.style.left = e.clientX + 'px';
  });
  chartBody.addEventListener('mouseleave', () => {
    cursorEl.style.display = 'none';
  });
}
