// logic.js - maneja registro, login y oportunidades.
// Soporta Firebase (Firestore) si se configura en firebase.js, de lo contrario usa localStorage para demo.

function nowISO(){ return (new Date()).toISOString(); }
function daysBetweenISO(isoA, isoB){
  if(!isoA||!isoB) return Infinity;
  const a = new Date(isoA), b = new Date(isoB);
  return Math.floor((b - a)/(1000*60*60*24));
}

async function appRegister(curp){
  // Validate CURP basic pattern (simplified)
  if(!/^[A-Z0-9]{10,18}$/.test(curp)) return {success:false,message:'CURP inválida. Use solo letras y números.'};
  // check if exists
  const existing = await getUser(curp);
  if(existing.exists) return {success:false,message:'El CURP ya está registrado. Inicia sesión'};
  // create user
  const userDoc = {
    passwordFixed: window.APP_FIXED_PASSWORD || 'ClaveFija123!',
    oportunidadesBio:2,
    oportunidadesSeg:2,
    ultimaPresentacionBio: null,
    ultimaPresentacionSeg: null,
    creado: nowISO()
  };
  await saveUser(curp,userDoc);
  return {success:true};
}

async function appLogin(curp){
  const user = await getUser(curp);
  if(!user.exists) return {success:false,message:'CURP no registrado.'};
  // password check is done at UI level comparing with fixed password
  return {success:true};
}

// Storage helpers: try Firebase, else localStorage
async function getUser(curp){
  if(window.useFirebase && window.db){
    const doc = await window.db.collection('usuarios').doc(curp).get();
    if(!doc.exists) return {exists:false};
    const data = doc.data();
    // Check auto reset by 2 days for each course
    const updated = checkAndResetIfNeeded(curp,data);
    return {exists:true, data: updated};
  } else {
    const raw = localStorage.getItem('user_'+curp);
    if(!raw) return {exists:false};
    const data = JSON.parse(raw);
    const updated = checkAndResetIfNeeded(curp,data);
    return {exists:true, data: updated};
  }
}

async function saveUser(curp, data){
  if(window.useFirebase && window.db){
    await window.db.collection('usuarios').doc(curp).set(data,{merge:true});
  } else {
    localStorage.setItem('user_'+curp, JSON.stringify(data));
  }
}

// Decrement opportunity when user proceeds to form
async function decrementOpportunity(curp, type){
  const found = await getUser(curp);
  if(!found.exists) return {success:false, message:'Usuario no encontrado.'};
  const data = found.data;
  const now = nowISO();
  if(type==='bio'){
    if(data.oportunidadesBio<=0) return {success:false,message:'No tiene oportunidades disponibles.'};
    data.oportunidadesBio = Math.max(0,data.oportunidadesBio-1);
    data.ultimaPresentacionBio = now;
  } else {
    if(data.oportunidadesSeg<=0) return {success:false,message:'No tiene oportunidades disponibles.'};
    data.oportunidadesSeg = Math.max(0,data.oportunidadesSeg-1);
    data.ultimaPresentacionSeg = now;
  }
  await saveUser(curp,data);
  return {success:true};
}

// Checks and resets opportunities automatically if 2 days passed since last presentation
function checkAndResetIfNeeded(curp,data){
  const now = nowISO();
  let changed=false;
  if(data.ultimaPresentacionBio){
    const days = daysBetweenISO(data.ultimaPresentacionBio, now);
    if(days>=2 && data.oportunidadesBio<2){
      data.oportunidadesBio = 2;
      data.ultimaPresentacionBio = null;
      changed=true;
    }
  }
  if(data.ultimaPresentacionSeg){
    const days = daysBetweenISO(data.ultimaPresentacionSeg, now);
    if(days>=2 && data.oportunidadesSeg<2){
      data.oportunidadesSeg = 2;
      data.ultimaPresentacionSeg = null;
      changed=true;
    }
  }
  if(changed){
    // persist change
    saveUser(curp,data);
  }
  return data;
}
