const COLORS = {
  beta: getComputedStyle(document.documentElement)
    .getPropertyValue("--beta")
    .trim(),
  alpha: getComputedStyle(document.documentElement)
    .getPropertyValue("--alpha")
    .trim(),
  sg: getComputedStyle(document.documentElement)
    .getPropertyValue("--sg")
    .trim(),
  delta: getComputedStyle(document.documentElement)
    .getPropertyValue("--delta")
    .trim(),
  gamma: getComputedStyle(document.documentElement)
    .getPropertyValue("--gamma")
    .trim(),
};

// Link each event to an attractor field
const EVENT_WL = {};
WORLDLINES.forEach((wl) => {
  EVENT_WL[wl.id] = wl.id;
  wl.events.forEach((ev) => {
    if (ev.id) EVENT_WL[ev.id] = wl.id;
  });
});

/**
 * Turn description into <li> items, classify '__ITER__' ones
 * @param {string[]} desc
 * @returns {string} concatenated <li> items as HTML
 */
function liItems(desc) {
  return desc
    .map((d) => {
      if (d.startsWith("__ITER__"))
        return `<li class="iter">${d.replace("__ITER__", "")}</li>`; 
      return `<li>${d}</li>`; 
    })
    .join(""); 
}

/**
 * Render event individually 
 * @param {Object} ev 
 * @returns {string} HTML card class <div> joining tags, title and desc
 */
function renderEvent(ev) {
  const hasDetail = ev.desc && ev.desc.length;
  const tags = [];
  if (ev.date) tags.push(`<span class="date">${ev.date}</span>`);
  if (ev.ep) tags.push(`<span class="ep">${ev.ep}</span>`);
  const detail = hasDetail
    ? `<div class="detail"><div class="detail-inner"><ul>${liItems(ev.desc)}</ul></div></div>` 
    : ""; 
  const arrow = hasDetail ? '<span class="arrow">▶</span>' : "";
  const eventId = ev.id ? ` id="${ev.id}"` : ""; 

  return `
    <div class="event${hasDetail ? " has-detail" : ""}"${eventId}> 
        <div class="card">
            ${tags.length ? `<div class="top">${tags.join("")}</div>` : ""}
            <div class="title">${arrow}<span>${ev.title}</span></div>
            ${detail}
        </div>
    </div>`;
}

/**
 * Render one world line, insert events linked to the wl
 * @param {Object} wl 
 * @returns {string} HTML <section> for one wl
 */
function renderWorldline(wl, single) {
  const evs = wl.events.map((e) => renderEvent(e)).join("");
  const off = single ? 0 : wl.off;
  const divTag = wl.divVal
    ? `<div class="wl-div">divergence <b>${wl.divVal}%</b></div>`
    : "";
  return `
    <section class="worldline ${wl.cls}" id="${wl.id}" style="--c:var(--${wl.cls});--off:${off}px">
        <div class="rail"></div>
        <div class="wl-head">
            <div class="greek">${wl.greek}</div>
            <div class="name">${wl.name} Worldline</div>
            ${divTag}
        </div>
        ${evs}
    </section>`;
}

/**
 * Draw lines between worldline, in the default view (multiple wl)
 * @param {number} prevX 
 * @param {number} curX 
 * @param {number} fromColor 
 * @param {string} toColor 
 * @returns {string} HTML markup for SVG line between world lines
 */
function buildDivergenceSVG(prevX, curX, fromColor, toColor) {
  const w = 840, h = 96;
  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const path = isMobile
    ? `M ${prevX} 0 L ${prevX} ${h}`
    : `M ${prevX} 0 C ${prevX} 48, ${curX} 48, ${curX} ${h}`;

  const id = "g" + Math.random().toString(36).slice(2, 7);
  return `
    <div class="divergence">
      <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
        <defs>
          <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${fromColor}"/>
            <stop offset="100%" stop-color="${toColor}"/>
          </linearGradient>
        </defs>
        <path pathLength="1" class="div-path" d="${path}" stroke="url(#${id})"/>
      </svg>
    </div>`;
}

let revealObserver = null;

/**
 * Observe / Unobserve worldlines, divergences and events as the user scroll (revelation)
 * @returns {void} 
 */
function initReveal() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          revealObserver.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document
    .querySelectorAll(".worldline, .divergence")
    .forEach((el) => revealObserver.observe(el));

  document.querySelectorAll(".worldline").forEach((wl) => {
    const evs = wl.querySelectorAll(".event");
    const evIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const idx = [...evs].indexOf(en.target);
            setTimeout(
              () => en.target.classList.add("visible"),
              Math.min(idx, 6) * 70,
            );
            evIO.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    evs.forEach((ev) => evIO.observe(ev));
  });
}

/**
 * Scroll to id element and indicate with a glowing effect
 * @param {string} id 
 * @returns {void}
 */
function scrollToEvent(id) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => window.scrollBy({ top: -130, behavior: "smooth" }), 500);

  const wl = el.closest(".worldline");
  const c = wl
    ? getComputedStyle(wl).getPropertyValue("--c").trim()
    : "red";

  el.style.transition = "box-shadow .3s ease";
  el.style.boxShadow = `0 0 30px ${c}`;
  setTimeout(() => {
    el.style.boxShadow = "none";
  }, 1400);

  if (el.classList.contains("has-detail")) el.classList.add("open");
}

/**
 * Parse divergence inout, then, search divergence input into worldlines and events
 * @param {string} rawQuery 
 * @returns {{
 *  error?: 'missing-percent' | 'invalid-format',
 *  query: string, 
 *  value?: string,,
 * worldlines?: Object[]
 * }} Either error + query or query + value + worldlines
 */
function searchByDivergence(rawQuery) {
  const query = rawQuery.trim();
  if (!query.endsWith("%")) return { error: "missing-percent", query };

  const value = query.slice(0, -1).trim();
  if (!/^\d+(\.\d+)?$/.test(value)) return { error: "invalid-format", query };

  const matchingWlIds = new Set();
  WORLDLINES.forEach((wl) => {
    if (wl.divVal === value) matchingWlIds.add(wl.id);
  });

  const results = [];
  WORLDLINES.forEach((wl) => {
    const isWlMatch = matchingWlIds.has(wl.id);
    const events = wl.events.filter((ev) => {
      if (isWlMatch) return true;
      const text = [
        ev.date || "",
        ev.title || "",
        (ev.desc || []).join(" "),
      ].join(" ");
      return text.includes(value + "%");
    });
    if (events.length) results.push({ ...wl, events });
  });

  return { query, value, worldlines: results };
}


// ============================== STATE ==============================
const timeline = document.getElementById("timeline");
const glitch = document.getElementById("glitch");
const glitchNum = document.getElementById("glitchNum");
const searchForm = document.getElementById("searchForm");
const divInput = document.getElementById("divInput");
const resetBtn = document.getElementById("resetBtn");
const scrollToTopBtn = document.getElementById("scroll-to-top")

let currentFilter = null;
let rollTimer = null;

// ============================== SECURITY ==============================
function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// ============================== PAINT ==============================
/**
 * Render the timeline based on filter result
 * Handles 4 cases : 
 *  * No filter > all wls
 *  * Filter > check errors || no match 
 *  * Filter > single wl
 * @param {Object|null} filter 
 * @returns {void} 
 */
function paintResults(filter) {
  currentFilter = filter;
  let html = "";

  if (filter === null) {
    WORLDLINES.forEach((wl, i) => {
      if (wl.div) {
        const prev = WORLDLINES[i - 1];
        const fromColor = COLORS[wl.div.from] || "#fff";
        const toColor = COLORS[wl.div.to] || "#fff";
        html += buildDivergenceSVG(prev.railX, wl.railX, fromColor, toColor);
      }
      html += renderWorldline(wl, false);
    });
  } else if (filter.error) {
    const msg =
      filter.error === "missing-percent"
        ? `The divergence must end with a <b>%</b> symbol.`
        : `<img class="error-keepout" src="/medias/keepout.jpeg"></img>`;
    html = `<div class="no-result">${msg}</div>`;
  } else if (filter.worldlines.length === 0) {
    html = `<div class="no-result">No event matches the divergence <b>${escapeHTML(filter.query)}</b>.</div>`;
  } else {
    const single = filter.worldlines.length === 1;
    filter.worldlines.forEach((wl) => {
      html += renderWorldline(wl, single);
    });
  }

  timeline.innerHTML = html;
  timeline.classList.remove("swapping");
  void timeline.offsetWidth;
  timeline.classList.add("swapping");
  initReveal();
}

// ============================== READING STEINER ==============================
function randNum() {
  return (Math.random() * 2).toFixed(6);
}

/**
 * Display divergence after a RS > divergence number animation effect > show final divergence or first alpha
 * @param {string} color Glitch color
 * @param {string} finalNum Arrival divergence 
 * @returns {void}
 */
function playReadingSteiner(color, finalNum) {
  glitch.style.setProperty("--gc", color || "#e7ecf5");
  glitch.classList.add("active");

  clearInterval(rollTimer);
  rollTimer = setInterval(() => {
    glitchNum.textContent = randNum();
  }, 55);

  setTimeout(() => {
    clearInterval(rollTimer);
    glitchNum.textContent = finalNum || "0.000000";
  }, 620);

  setTimeout(() => {
    glitch.classList.remove("active");
  }, 1000);
}

// ============================== SEARCH HANDLERS ==============================
/**
 * Retrieves error or worldline, get its color > RS and scroll upward
 * @param {string} rawValue divergence searched
 * @returns {void}
 */
function handleSearch(rawValue) {
  const filter = searchByDivergence(rawValue);
  divInput.classList.toggle("invalid", !!filter.error);

  const color = filter.worldlines?.[0]
    ? COLORS[filter.worldlines[0].cls]
    : "#ff5d6c";

  playReadingSteiner(color, filter.value || "0.000000");

  setTimeout(() => {
    paintResults(filter);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, 300);
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSearch(divInput.value);
});

resetBtn.addEventListener("click", () => {
  divInput.value = "";
  divInput.classList.remove("invalid");
  playReadingSteiner("#e7ecf5", "0.000000");
  setTimeout(() => {
    paintResults(null);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, 300);
});

// ============================== CARD EXPAND ==============================
timeline.addEventListener("click", (e) => {
  if (e.target.closest(".dmail-link")) return;
  const card = e.target.closest(".event.has-detail");
  if (card) card.classList.toggle("open");
});

// ============================== D-MAIL LINKS ==============================
document.addEventListener("click", function (e) {
  const link = e.target.closest(".dmail-link");
  if (!link) return;
  e.preventDefault();

  const targetId =
  (link.getAttribute("href") || "").replace("#", "");
  if (!/^[a-zA-Z0-9_-]+$/.test(targetId)) return;

  // 1. Icon vibration
  const icon = link.querySelector(".dmail-icon, .icon-leap");
  if (icon) {
    icon.style.animation = "none";
    void icon.offsetHeight; // reflow
    icon.style.animation = "vibrate 0.3s ease-in-out";
  }

  // 2. Target and source wl
  const destWlId = EVENT_WL[targetId];
  const sourceWl = link.closest(".worldline");
  const sourceWlId = sourceWl ? sourceWl.id : null;

  // 3. Target and source wl not in the same attractor field
  const isCrossWl = destWlId && sourceWlId && destWlId !== sourceWlId;

  // 4. Target wl (object): id, color, divergence value
  const destWl = isCrossWl ? WORLDLINES.find((w) => w.id === destWlId) : null;
  const crossColor = destWl ? COLORS[destWl.cls] : "#e7ecf5";
  const crossNum = destWl && destWl.divVal ? destWl.divVal : "0.000000";

  setTimeout(() => {
    const target = document.getElementById(targetId);

    if (target) {
      if (isCrossWl) {
        playReadingSteiner(crossColor, crossNum);
        setTimeout(() => scrollToEvent(targetId), 700);
      } else {
        scrollToEvent(targetId);
      }
    } else {
      divInput.value = "";
      divInput.classList.remove("invalid");
      return;
    }
  }, 400);
});

// ============================== UPLOAD FILE BUTTON ==============================
function downloadFont() {
  const a = document.createElement('a');
  a.href = 'Steinsgatelow-Regular.ttf';
  a.download = 'Steinsgatelow-Regular.ttf';
  a.click();
}

// ============================== UPLOAD FILE BUTTON ==============================
/* Show button when 20px scrolled */
window.onscroll = function() {scrollFunction()}
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; // Chrome
}

// ============================== INIT ==============================
paintResults(null);


