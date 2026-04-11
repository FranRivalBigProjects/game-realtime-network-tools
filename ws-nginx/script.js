const res=document.getElementById('res');
function run(){
  const txt=document.getElementById('input').value||'';
  const val=parseFloat(document.getElementById('value').value||'0');
  const count = txt ? txt.split('\n').length : 0;
  const total = (count + val).toFixed(2);
  res.innerText = 'Realtime Connections: ' + total;
}