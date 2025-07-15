// Poem stanzas, each as a string
const stanzas = [
  `I don’t know how to begin this without my voice trembling through every word,<br>but maybe trembling is how the truth walks when it’s been buried too long.<br>So here it is — soft, trembling, but still true:<br><strong>I’m sorry.</strong><br>Not just for the silence. Not just for the mess.<br>But for every time I touched your world without steady hands,<br>for every moment I made you feel less,<br>when all you ever did was give me more.`,

  `Amanda…<br>You were poetry in a world that taught me only noise.<br>And I — a boy drowning in static,<br>tried to hold a symphony without learning the melody.<br>You gave me oceans, I came with a cracked cup.<br>You brought constellations, I showed up with shadows.`,

  `But God, how I loved you.<br>Even in my confusion, even in my chaos —<br>my soul whispered your name like a prayer,<br>like maybe if I said it enough, I’d become the man you needed.<br>But I didn’t. Not fast enough.<br>Not deep enough.<br>And for that, I ache.`,

  `You saw me.<br>In ways no one else did.<br>You kissed the bruises I hid from the world,<br>you traced your fingers over my fears,<br>and told me I was still worthy of love.<br>And what did I do?<br>I broke the very heart that was willing to fight for me.`,

  `I’m not proud.<br>I’m not writing this to paint over what happened.<br>I just want you to know:<br>if love was a language,<br>you were the poem I never learned how to read until you were gone.`,

  `Amanda, if I could go back…<br>I’d hold your hand tighter.<br>I’d ask how your soul was — not just your day.<br>I’d kiss your forehead longer.<br>I’d stay up late just to hear your sleepy voice say "goodnight."<br>I’d show up.<br>Not half, not almost — but fully.`,

  `I miss your laugh.<br>That little nervous one when you were pretending to be mad.<br>I miss how you said my name like it had roots in your chest.<br>I miss your honesty — even when it hurt.<br>I miss us — whatever version of us that was still growing, still learning.`,

  `But more than missing,<br>I’ve learned.<br>About myself.<br>About love.<br>About how fragile hearts are, and how sacred trust is.<br>And I’ll never treat either carelessly again.`,

  `Amanda…<br>You were not just a chapter.<br>You were a whole damn novel I never finished reading.<br>And maybe the story ended.<br>Or maybe it paused.`,

  `But wherever you are now —<br>I want you to know, with every fiber of my soul:<br>You mattered.<br>You still do.<br>And even if I never get to call you "mine" again,<br>you’ll always be the girl who woke something holy in me.`,

  `So this is not a cry to win you back.<br>This is just a man who finally found the words,<br>standing in the ruins of what he ruined,<br>saying —<br><strong>I’m sorry. I loved you. I still do…</strong> in a way only healed hearts understand.`,

  `Forever holding you in the quiet of my prayers,<br>— Moses`
];

const supportMessages = [
  "You made it through the first truth. That takes courage. Amanda, you are stronger than you know.",
  "Thank you for reading on. Even when the words are heavy, your heart is even braver.",
  "Every line you read is a step toward healing — for both of us.",
  "You are seen. You are valued. Thank you for letting these words reach you.",
  "Forgiveness is a journey. You are walking it with grace, Amanda.",
  "Your patience is beautiful. Your presence is a gift.",
  "You are more than the pain. You are the hope that follows.",
  "Thank you for letting me be honest. Your empathy is a light.",
  "Even in surrender, you are powerful. Thank you for being here.",
  "Amanda, your heart is rare. Thank you for letting it listen.",
  "You’ve come this far. That means everything."
];

let stanzaIdx = 0;
const poemDiv = document.getElementById('poem-stanza');
const supportDiv = document.getElementById('support-message');
const prevBtn = document.getElementById('prev-stanza');
const nextBtn = document.getElementById('next-stanza');
const body = document.getElementById('main-letter-body');

const backgrounds = [
  // Soft, loving, gentle
  'linear-gradient(135deg, #f8fafc 0%, #fbc2eb 100%)',
  'linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)',
  'linear-gradient(135deg, #fcb69f 0%, #ffecd2 100%)',
  'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
  'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
  'linear-gradient(120deg, #f7971e 0%, #ffd200 100%)',
  'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
  'linear-gradient(120deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
  'linear-gradient(120deg, #a18cd1 0%, #fbc2eb 100%)',
  // Final: deep, passionate
  'linear-gradient(135deg, #d72660 0%, #fbb040 100%)'
];

function updateBackground(idx) {
  body.style.background = backgrounds[Math.min(idx, backgrounds.length - 1)];
  body.style.transition = 'background 1.3s cubic-bezier(.7,0,.3,1)';
}

function showStanza() {
  updateBackground(stanzaIdx);
  poemDiv.innerHTML = stanzas[stanzaIdx];
  supportDiv.classList.add('hidden');
  nextBtn.disabled = true;
  prevBtn.disabled = stanzaIdx === 0;
  prevBtn.style.opacity = stanzaIdx === 0 ? 0.5 : 1;
  setTimeout(() => {
    supportDiv.textContent = supportMessages[stanzaIdx] || '';
    supportDiv.classList.remove('hidden');
    nextBtn.disabled = false;
    nextBtn.textContent = stanzaIdx < stanzas.length - 1 ? 'Continue' : 'Finish';
  }, 1800);
  // Show/hide buttons if finished
  if (stanzaIdx === stanzas.length) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = '';
    nextBtn.style.display = '';
  }
}

nextBtn.addEventListener('click', () => {
  if (stanzaIdx < stanzas.length - 1) {
    stanzaIdx++;
    showStanza();
  } else {
    poemDiv.innerHTML = '<span class="text-2xl font-bold text-blue-700">Thank you for reading, Amanda.</span><br><span class="text-lg text-gray-700">May you find peace, always.</span>';
    supportDiv.classList.add('hidden');
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    updateBackground(stanzas.length);
    showHeartsBurst();
  }
});

function showHeartsBurst() {
  const burst = document.getElementById('hearts-burst');
  burst.innerHTML = '';
  burst.style.display = 'flex';
  // Name
  const name = document.createElement('div');
  name.innerHTML = '<span style="font-size:2.2rem;font-weight:bold;color:#d72660;text-shadow:1px 2px 12px #fff">Lizzie Amanda Njeri</span>';
  name.className = 'mb-4 animate__animated animate__heartBeat';
  burst.appendChild(name);
  // Hearts
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement('span');
    heart.textContent = '💖';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 90 + '%';
    heart.style.top = (Math.random() * 60 + 20) + '%';
    heart.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
    heart.style.opacity = 0.85;
    heart.style.transition = 'transform 2.5s cubic-bezier(.23,1.02,.67,.98), opacity 2.5s';
    burst.appendChild(heart);
    setTimeout(() => {
      heart.style.transform = `translateY(-${Math.random()*180+120}px) scale(${Math.random()*0.7+0.7}) rotate(${Math.random()*360}deg)`;
      heart.style.opacity = 0;
    }, 100 + Math.random()*500);
  }
  // Hide after animation
  setTimeout(() => {
    burst.style.display = 'none';
  }, 3200);
}


prevBtn.addEventListener('click', () => {
  if (stanzaIdx > 0) {
    stanzaIdx--;
    showStanza();
  }
});

// Initial display
showStanza();
