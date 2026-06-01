/**
 * The Rasner Group — Report Charts Library
 * Loaded synchronously in <head> after Chart.js.
 * Chart.js is guaranteed defined by the time this runs.
 */

const RC = {
  C1:  '#295c6f',
  C2:  '#71a495',
  C1a: '#295c6f28',
  grid: { color:'rgba(0,0,0,0.05)', drawBorder:false },
};

Chart.defaults.font.family = "'DM Sans', sans-serif";
Chart.defaults.font.size   = 11;
Chart.defaults.color       = '#7a8a87';

var fmtM = function(v) { return v>=1e6 ? '$'+(v/1e6).toFixed(2)+'M' : '$'+(v/1000).toFixed(0)+'K'; };
var fmtK = function(v) { return v>=1e6 ? '$'+(v/1e6).toFixed(1)+'M'  : '$'+(v/1000).toFixed(0)+'K'; };

function makePrice(id, d, minV, maxV) {
  var ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'line',
    data: { labels: d.labels, datasets: [
      { label:'Avg Sale',    data:d.avgSale, borderColor:RC.C1, backgroundColor:RC.C1a, borderWidth:2.5, pointRadius:5, pointBackgroundColor:RC.C1, fill:true,  tension:0.35 },
      { label:'Median Sale', data:d.medSale, borderColor:RC.C2, backgroundColor:'transparent', borderWidth:2, pointRadius:4, pointBackgroundColor:RC.C2, fill:false, tension:0.35 },
      { label:'Avg List',    data:d.avgList, borderColor:'#bbb', backgroundColor:'transparent', borderWidth:1.5, borderDash:[5,4], pointRadius:3, pointBackgroundColor:'#bbb', fill:false, tension:0.35 },
    ]},
    options: {
      responsive:true, maintainAspectRatio:false,
      interaction:{ mode:'index', intersect:false },
      plugins:{ legend:{display:false}, tooltip:{callbacks:{label:function(c){return ' '+c.dataset.label+': '+fmtM(c.parsed.y);}}} },
      scales:{ x:{grid:RC.grid}, y:{grid:RC.grid, min:minV, max:maxV, ticks:{callback:fmtK, maxTicksLimit:5}} }
    }
  });
}

function makeRatio(id, d, minR, maxR) {
  var ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: { labels: d.labels, datasets:[{ label:'Sale/List %', data:d.ratio,
      backgroundColor: d.ratio.map(function(v){ return v>=104?RC.C1:v>=101?RC.C2:'#e1ece8'; }),
      borderRadius:3, borderSkipped:false }]},
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{callbacks:{label:function(c){return ' '+c.parsed.y.toFixed(2)+'%';}}} },
      scales:{ x:{grid:RC.grid}, y:{grid:RC.grid, min:minR, max:maxR, ticks:{callback:function(v){return v+'%';}, maxTicksLimit:5}} }
    }
  });
}

function makeSold(id, d) {
  var ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: { labels: d.labels, datasets:[{ label:'Sold', data:d.sold,
      backgroundColor:RC.C1, borderRadius:3, borderSkipped:false, hoverBackgroundColor:RC.C2 }]},
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{callbacks:{label:function(c){return ' '+c.parsed.y+' sold';}}} },
      scales:{ x:{grid:RC.grid}, y:{grid:RC.grid, beginAtZero:true, ticks:{maxTicksLimit:6}} }
    }
  });
}

function makeDom(id, d) {
  var ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: { labels: d.labels, datasets:[
      { label:'Avg DOM',       data:d.dom, backgroundColor:RC.C1, borderRadius:3, borderSkipped:false },
      { label:'Days to Offer', data:d.dto, backgroundColor:RC.C2, borderRadius:3, borderSkipped:false },
    ]},
    options: {
      responsive:true, maintainAspectRatio:false, interaction:{mode:'index',intersect:false},
      plugins:{ legend:{display:false} },
      scales:{ x:{grid:RC.grid}, y:{grid:RC.grid, beginAtZero:true, ticks:{callback:function(v){return v+'d';}, maxTicksLimit:6}} }
    }
  });
}

function initTabs() {
  document.querySelectorAll('.nav-tab').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.nav-tab').forEach(function(b){ b.classList.remove('active'); });
      document.querySelectorAll('.report-section').forEach(function(s){ s.classList.remove('active'); });
      btn.classList.add('active');
      var t = document.getElementById('section-'+btn.dataset.section);
      if(t) t.classList.add('active');
    });
  });
}

window.RasnerCharts = { makePrice:makePrice, makeRatio:makeRatio, makeSold:makeSold, makeDom:makeDom, initTabs:initTabs };
