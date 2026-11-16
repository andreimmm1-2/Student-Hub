/* Revision Club GCSE Maths pathway — daily content expansion, 16 November 2026. */
(function () {
  'use strict';
  const topics = [
    {id:'place-value-rounding',title:'Place value, ordering and rounding',level:'Foundation & Higher',area:'Number',
     overview:'Use place value to compare numbers, round to a stated accuracy and estimate calculations before using a calculator.',
     notes:['Each digit has a value ten times the digit to its right in a base-ten number. In 4,582.37, the 5 represents 500 and the 7 represents 0.07.','To round to a given place, identify the next digit: 0–4 keeps the rounding digit unchanged; 5–9 increases it by one.','For significant figures, start counting at the first non-zero digit. Leading zeros are not significant; zeros between non-zero digits are significant.','Bounds describe the range of values that round to a stated value. A measurement rounded to the nearest cm as 12 cm lies from 11.5 cm up to, but not including, 12.5 cm.'],
     example:{q:'Round 0.007846 to 2 significant figures.',steps:['Ignore the leading zeros; the first significant digit is 7.','The second significant digit is 8.','The next digit is 4, so the 8 stays the same.'],answer:'0.0078',note:'The zeroes before 7 are placeholders, not significant figures.'},
     mistakes:['Counting leading zeros as significant figures.','Rounding twice instead of rounding directly from the original value.','Writing an upper bound with an inclusive inequality when the value would round up.'],
     questions:[{q:'Write 63,407 to 2 significant figures.',a:'63,000',why:'The first two significant digits are 6 and 3; the next digit is 4, so 63 stays and the remaining places become zeros.'},{q:'A length is 8.2 cm to the nearest 0.1 cm. State its lower and upper bounds.',a:'7. (Correction: 8.15 cm ≤ length < 8.25 cm)',why:'Half of 0.1 is 0.05. Subtract and add 0.05; the upper bound is excluded.'},{q:'Estimate 49.8 × 0.203 by rounding each number to 1 significant figure.',a:'10',why:'50 × 0.2 = 10.'}]},
    {id:'fraction-operations',title:'Adding, subtracting and multiplying fractions',level:'Foundation & Higher',area:'Number',
     overview:'Find common denominators for addition and subtraction, and multiply numerators and denominators directly.',
     notes:['A fraction represents a division: 3/4 means 3 ÷ 4. Equivalent fractions are made by multiplying or dividing the numerator and denominator by the same non-zero number.','For addition or subtraction, use a common denominator. Add or subtract the numerators and keep the denominator. Simplify the final fraction.','To multiply fractions, multiply the numerators together and the denominators together. Cancel common factors before multiplying when possible.','To divide by a fraction, multiply by its reciprocal. Keep the first fraction, change ÷ to ×, and flip the second fraction.'],
     example:{q:'Calculate 2/3 + 3/4.',steps:['The lowest common denominator of 3 and 4 is 12.','Convert 2/3 to 8/12 and 3/4 to 9/12.','Add the numerators: 8 + 9 = 17.'],answer:'17/12 = 1 5/12',note:'An improper fraction is acceptable; simplify or convert to a mixed number if requested.'},
     mistakes:['Adding denominators as well as numerators.','Forgetting to use a common denominator before adding.','Flipping the first fraction instead of the divisor when dividing.'],
     questions:[{q:'Calculate 5/6 − 1/4.',a:'7/12',why:'Use denominator 12: 10/12 − 3/12 = 7/12.'},{q:'Calculate 3/5 × 10/9 and simplify.',a:'2/3',why:'Cancel 10 with 5 to get 2 and 1; then 3×2/(1×9)=6/9=2/3.'},{q:'Calculate 4/7 ÷ 2/3.',a:'6/7',why:'4/7 × 3/2 = 12/14 = 6/7.'}]},
    {id:'percentages-change',title:'Percentage of an amount and percentage change',level:'Foundation & Higher',area:'Number',
     overview:'Find percentages using multipliers, compare percentage changes and solve reverse-percentage problems.',
     notes:['To find p% of an amount, multiply by p/100. For example, 15% of £80 = 0.15 × 80 = £12.','A percentage increase of p% uses multiplier 1 + p/100. A decrease uses 1 − p/100.','Percentage change = (change ÷ original amount) × 100%. The original value is the denominator.','For reverse percentages, divide by the multiplier. If a price after a 20% increase is £72, the original price is 72 ÷ 1.2 = £60.'],
     example:{q:'A jacket costs £64 and is reduced by 25%. Find the sale price.',steps:['A 25% reduction leaves 75%.','Write 75% as 0.75.','Multiply: 64 × 0.75 = 48.'],answer:'£48',note:'The discount is £16; subtracting it from £64 gives the same result.'},
     mistakes:['Using the new value rather than the original value when calculating percentage change.','Subtracting 20 instead of multiplying by 0.8 for a 20% decrease.','Finding 20% of the final price in a reverse-percentage question.'],
     questions:[{q:'Find 17% of 240.',a:'40.8',why:'0.17 × 240 = 40.8.'},{q:'Increase £350 by 8%.',a:'£378',why:'350 × 1.08 = 378.'},{q:'After a 10% discount, a bag costs £54. Find its original price.',a:'£60',why:'54 ÷ 0.9 = 60.'}]},
    {id:'ratio-sharing',title:'Ratio, sharing and unit rates',level:'Foundation & Higher',area:'Ratio and proportion',
     overview:'Simplify ratios, divide quantities in a given ratio and use unit rates to compare value.',
     notes:['A ratio compares quantities in the same order. Simplify by dividing every part by the highest common factor.','To share an amount in a:b, add the parts, divide the total by a+b, then multiply by each ratio part.','A ratio can be scaled by multiplying or dividing every part by the same number. Keep units consistent before comparing quantities.','A unit rate gives the amount for one unit, such as miles per hour or price per kilogram. Calculate it by dividing by the number of units.'],
     example:{q:'Share £84 in the ratio 3:4.',steps:['Add the parts: 3 + 4 = 7.','One part is £84 ÷ 7 = £12.','The shares are 3×£12 and 4×£12.'],answer:'£36 and £48',note:'Check: £36 + £48 = £84.'},
     mistakes:['Dividing by one ratio part instead of the sum of all parts.','Changing only one side of a ratio when scaling.','Comparing prices without converting to the same unit.'],
     questions:[{q:'Simplify 42:56.',a:'3:4',why:'Divide both parts by 14.'},{q:'Share 96 in the ratio 5:7.',a:'40 and 56',why:'12 parts total; each part is 96÷12=8, so 40 and 56.'},{q:'A 750 g pack costs £2.40. Find the cost per kg.',a:'£3.20 per kg',why:'£2.40 ÷ 0.75 kg = £3.20 per kg.'}]},
    {id:'linear-expressions-equations',title:'Expanding, factorising and solving linear equations',level:'Foundation & Higher',area:'Algebra',
     overview:'Collect like terms, expand a single bracket, factorise expressions and solve equations using inverse operations.',
     notes:['Like terms have the same variables raised to the same powers. 3x + 5x = 8x, but 3x + 5x² cannot be combined.','Expand a bracket by multiplying every term inside by the term outside: 4(x − 3) = 4x − 12.','Factorise by taking out the highest common factor: 6x + 9 = 3(2x + 3).','Solve an equation by applying the same operation to both sides. Undo addition/subtraction first, then multiplication/division, or use inverse operations in a clear sequence.'],
     example:{q:'Solve 5(2x − 1) = 3x + 16.',steps:['Expand: 10x − 5 = 3x + 16.','Subtract 3x: 7x − 5 = 16.','Add 5: 7x = 21.','Divide by 7.'],answer:'x = 3',note:'Substitute: left side 5(6−1)=25; right side 9+16=25.'},
     mistakes:['Only multiplying the first term inside a bracket.','Changing a sign incorrectly when expanding a negative bracket.','Doing an operation to one side only.'],
     questions:[{q:'Simplify 7a − 3 + 2a + 8.',a:'9a + 5',why:'Collect a terms and constants separately.'},{q:'Expand and simplify 3(2y − 4) + y.',a:'7y − 12',why:'6y − 12 + y = 7y − 12.'},{q:'Solve 4x + 7 = 31.',a:'x = 6',why:'Subtract 7 to get 4x=24, then divide by 4.'}]},
    {id:'sequences-nth-term',title:'Sequences and the nth term',level:'Foundation & Higher',area:'Algebra',
     overview:'Recognise arithmetic sequences, find term-to-term rules and derive an expression for the nth term.',
     notes:['A sequence follows a rule. In an arithmetic sequence, the difference between consecutive terms is constant.','For a linear sequence, the coefficient of n is the common difference. Substitute n=1 into the expression to find the constant term.','For example, 5, 8, 11, 14 has common difference 3, so its nth term starts 3n. The first term is 5, so subtract 3: 3n+2.','Check an nth-term rule by substituting n=1, 2 and 3 and comparing with the sequence.'],
     example:{q:'Find the nth term of 7, 11, 15, 19, …',steps:['The common difference is 4, so start with 4n.','When n=1, 4n gives 4 but the first term is 7.','Add 3 to every term.'],answer:'4n + 3',note:'For n=4: 4×4+3=19, matching the fourth term.'},
     mistakes:['Using the first term as the constant without accounting for the common difference.','Confusing the term number n with the term value.','Assuming every sequence is linear; check first differences.'],
     questions:[{q:'Find the next two terms: 12, 17, 22, 27, …',a:'32, 37',why:'Add 5 each time.'},{q:'Find the nth term of 2, 6, 10, 14, …',a:'4n − 2',why:'Difference 4; 4n gives 4 for the first term, so subtract 2.'},{q:'Which term of 3n + 4 equals 40?',a:'12th term',why:'3n+4=40 gives 3n=36 and n=12.'}]},
    {id:'angles-polygons',title:'Angles in parallel lines and polygons',level:'Foundation & Higher',area:'Geometry and measures',
     overview:'Use angle facts to calculate missing angles in lines, triangles, quadrilaterals and regular polygons.',
     notes:['Angles on a straight line add to 180°. Angles around a point add to 360°. Vertically opposite angles are equal.','Angles in a triangle add to 180°; angles in a quadrilateral add to 360°. An isosceles triangle has two equal base angles.','For parallel lines, corresponding angles are equal, alternate angles are equal, and co-interior angles add to 180°.','The sum of interior angles of an n-sided polygon is (n−2)×180°. Each interior angle of a regular n-gon is [(n−2)×180°]÷n.'],
     example:{q:'Find each interior angle of a regular octagon.',steps:['An octagon has n=8 sides.','Interior angle sum = (8−2)×180° = 1080°.','All eight angles are equal: 1080° ÷ 8.'],answer:'135°',note:'An exterior angle of a regular polygon is 360°÷8 = 45°; 135°+45°=180°.'},
     mistakes:['Using 360° as the interior angle sum for every polygon.','Assuming a diagram is drawn to scale.','Mixing up corresponding and co-interior angles.'],
     questions:[{q:'A triangle has angles 48° and 67°. Find the third angle.',a:'65°',why:'180−48−67=65.'},{q:'Find the interior angle sum of a decagon.',a:'1440°',why:'(10−2)×180=1440°.'},{q:'Two co-interior angles are x and 113°. Find x.',a:'67°',why:'Co-interior angles sum to 180°, so x=180−113.'}]},
    {id:'probability-basics',title:'Probability, sample spaces and expected frequency',level:'Foundation & Higher',area:'Probability',
     overview:'Calculate probabilities, list equally likely outcomes and use probability to estimate expected frequencies.',
     notes:['Probability is between 0 and 1. Impossible events have probability 0 and certain events have probability 1.','For equally likely outcomes, probability = number of successful outcomes ÷ total number of outcomes.','The probabilities of all mutually exclusive outcomes in a complete sample space add to 1. Use this to find missing probabilities.','Expected frequency = probability × number of trials. It is a long-run estimate, not a guaranteed result.'],
     example:{q:'A fair six-sided die is rolled 240 times. Estimate how often a 5 will appear.',steps:['Probability of a 5 is 1/6.','Expected frequency = 240 × 1/6.'],answer:'40 times',note:'Actual results may differ because of random variation.'},
     mistakes:['Giving a probability greater than 1 or less than 0.','Forgetting to include every possible outcome in the denominator.','Treating expected frequency as a guaranteed count.'],
     questions:[{q:'A bag has 3 red, 5 blue and 2 green counters. Find P(blue).',a:'1/2',why:'There are 10 counters and 5 are blue: 5/10=1/2.'},{q:'The probability of rain is 0.35. Find the probability it does not rain.',a:'0.65',why:'Complementary probabilities sum to 1.'},{q:'A spinner lands on yellow with probability 0.2. Estimate yellow outcomes in 75 spins.',a:'15',why:'0.2×75=15.'}]}
  ];
  let level='All', selected=null;
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const page=document.getElementById('page');
  if(!page)return;
  function showDirectory(){
    selected=null;
    const shown=topics.filter(t=>level==='All'||t.level.includes(level));
    page.innerHTML='<button data-maths-home-back>← Home</button><section class="subject-hero"><span class="pill">GCSE MATHEMATICS · FOUNDATION & HIGHER</span><h2>Maths topic pathway</h2><p>Build confidence step by step. Choose a topic, study the worked example, then test yourself.</p><div class="row"><button data-maths-level="All" class="'+(level==='All'?'primary':'')+'">All topics</button><button data-maths-level="Foundation" class="'+(level==='Foundation'?'primary':'')+'">Foundation</button><button data-maths-level="Higher" class="'+(level==='Higher'?'primary':'')+'">Higher</button></div></section><div class="grid">'+shown.map(t=>'<article class="card"><span class="pill">'+esc(t.area)+' · '+esc(t.level)+'</span><h3>'+esc(t.title)+'</h3><p>'+esc(t.overview)+'</p><button class="primary" data-maths-topic="'+esc(t.id)+'">Open topic →</button></article>').join('')+'</div><p class="muted">New topic lessons are added progressively. Answers include worked reasoning so you can learn from mistakes.</p>';
  }
  function showTopic(id){
    selected=topics.find(t=>t.id===id);if(!selected){showDirectory();return;}
    const t=selected;
    page.innerHTML='<button data-maths-back>← All Maths topics</button><section class="subject-hero"><span class="pill">GCSE MATHEMATICS · '+esc(t.area)+' · '+esc(t.level)+'</span><h2>'+esc(t.title)+'</h2><p>'+esc(t.overview)+'</p></section><section class="card"><h3>Key knowledge</h3><ul>'+t.notes.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></section><section class="card"><span class="pill">WORKED EXAMPLE</span><h3>'+esc(t.example.q)+'</h3><ol>'+t.example.steps.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ol><p><b>Answer:</b> '+esc(t.example.answer)+'</p><p class="muted">'+esc(t.example.note)+'</p></section><section class="card"><h3>Common mistakes</h3><ul>'+t.mistakes.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></section><section class="card"><span class="pill">CHECK YOUR UNDERSTANDING</span>'+t.questions.map((q,i)=>'<details class="poem"><summary>'+esc(q.q)+'</summary><p><b>Answer:</b> '+esc(q.a)+'</p><p>'+esc(q.why)+'</p></details>').join('')+'</section>';
  }
  page.addEventListener('click',e=>{
    const b=e.target.closest('[data-go="mathsHome"],[data-subject-tab="maths"],[data-maths-home-back],[data-maths-topic],[data-maths-back],[data-maths-level]');
    if(!b)return;
    e.preventDefault();e.stopImmediatePropagation();
    if(b.dataset.mathsLevel!==undefined){level=b.dataset.mathsLevel;showDirectory();return;}
    if(b.dataset.mathsTopic){showTopic(b.dataset.mathsTopic);return;}
    if(b.dataset.mathsBack!==undefined||b.dataset.mathsHomeBack!==undefined){showDirectory();return;}
    level='All';showDirectory();
  },true);
  const updateLabels=()=>{
    document.querySelectorAll('.hub-tile').forEach(b=>{if(b.querySelector('.tile-title')?.textContent.trim()==='Maths'){const c=b.querySelector('.tile-copy');if(c)c.textContent='GCSE Maths · Foundation & Higher';}});
    const courses=document.getElementById('subjectCourses');
    if(courses&&document.querySelector('[data-subject-tab="maths"].active'))courses.innerHTML='<article class="card subject-course"><span class="pill">GCSE · FOUNDATION & HIGHER</span><h3>Maths topic pathway</h3><p>Number, algebra, ratio, geometry and probability, with worked examples and practice.</p><button class="primary" data-go="mathsHome">Open Maths →</button></article>';
  };
  new MutationObserver(updateLabels).observe(document.getElementById('page'),{childList:true,subtree:true});
  updateLabels();
})();