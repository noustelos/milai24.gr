/**
 * milAI24.gr — Main Interactive Frontend Logic
 * Lightweight, vanilla JS without external dependencies.
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.MILAI_CONFIG || {};

  // 1. Hydrate UI elements from config.js
  hydrateConfig(config);

  // 2. Setup Live Demo Phone Card & Copy functionality
  setupDemoCard(config);

  // 3. Interactive Dialogue Simulator in Demo Box
  setupDialogueSimulator(config);

  // 4. Interactive ROI Calculator for Hotels & Businesses
  setupRoiCalculator();

  // 5. Accessible FAQ Accordion
  setupFaqAccordion();

  // 6. Mobile Navigation Toggle
  setupMobileNav();

  // 7. Navbar scroll state
  setupHeaderScroll();
});

/**
 * Hydrates static elements across the page using MILAI_CONFIG
 */
function hydrateConfig(config) {
  if (!config) return;

  // Hydrate Phone numbers
  if (config.demoPhone) {
    const demoNumberEls = document.querySelectorAll(".cfg-demo-phone");
    demoNumberEls.forEach((el) => {
      el.textContent = config.demoPhone.display;
    });

    const demoTelLinks = document.querySelectorAll(".cfg-demo-tel-link");
    demoTelLinks.forEach((el) => {
      el.setAttribute("href", `tel:${config.demoPhone.raw}`);
    });
  }

  // Hydrate Contact Email
  if (config.contact && config.contact.email) {
    const emailEls = document.querySelectorAll(".cfg-contact-email");
    emailEls.forEach((el) => {
      el.textContent = config.contact.email;
    });

    const emailLinks = document.querySelectorAll(".cfg-contact-email-link");
    emailLinks.forEach((el) => {
      const subject = encodeURIComponent(config.contact.subjectDefault || "Ενδιαφέρον για milAI24");
      el.setAttribute("href", `mailto:${config.contact.email}?subject=${subject}`);
    });
  }

  // Hydrate Pricing elements if available
  if (config.pricing) {
    const setupFeeEls = document.querySelectorAll(".cfg-price-setup");
    setupFeeEls.forEach((el) => {
      el.textContent = config.pricing.setupPriceDisplay || "Κατόπιν Μελέτης";
    });

    const monthlySubEls = document.querySelectorAll(".cfg-price-monthly");
    monthlySubEls.forEach((el) => {
      el.textContent = config.pricing.monthlySubscriptionToUs || "0€ / μήνα";
    });

    const minCostEls = document.querySelectorAll(".cfg-price-per-min");
    minCostEls.forEach((el) => {
      el.textContent = config.pricing.estimatedProviderCostPerMin || "~0,10€ / λεπτό";
    });
  }
}

/**
 * Demo Card interactions (Call button & Copy button)
 */
function setupDemoCard(config) {
  const copyBtn = document.getElementById("demo-copy-btn");
  const callBtn = document.getElementById("demo-call-btn");

  if (copyBtn && config.demoPhone) {
    copyBtn.addEventListener("click", () => {
      const textToCopy = config.demoPhone.raw || config.demoPhone.display;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Ο αριθμός αντιγράφηκε στο πρόχειρο!");
      }).catch(() => {
        showToast(`Αριθμός: ${config.demoPhone.display}`);
      });
    });
  }

  if (callBtn && config.demoPhone) {
    callBtn.addEventListener("click", (e) => {
      if (config.demoPhone.isPlaceholder) {
        e.preventDefault();
        showToast("Η γραμμή επίδειξης είναι υπό τελική ρύθμιση. Επικοινωνήστε μαζί μας για άμεση παρουσίαση!");
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }
}

/**
 * Interactive Step-by-Step Dialogue Simulator inside Demo Card
 */
function setupDialogueSimulator(config) {
  const steps = config.sampleConversation || [];
  if (!steps.length) return;

  const bubbleSender = document.getElementById("sim-sender");
  const bubbleText = document.getElementById("sim-text");
  const bubbleContainer = document.getElementById("sim-bubble");
  const stepCounter = document.getElementById("sim-step-counter");
  const nextBtn = document.getElementById("sim-next-btn");
  const prevBtn = document.getElementById("sim-prev-btn");
  const playToggleBtn = document.getElementById("sim-play-toggle");

  let currentIndex = 0;
  let autoPlayTimer = null;
  let isPlaying = false;

  function renderStep(idx) {
    const step = steps[idx];
    if (!step || !bubbleContainer) return;

    // Reset speaker classes
    bubbleContainer.className = `dialogue-bubble ${step.speaker}`;
    if (bubbleSender) {
      bubbleSender.className = `bubble-sender ${step.speaker}`;
      bubbleSender.innerHTML = `<span>${step.label}</span> <span class="lang-pill">${step.lang}</span>`;
    }
    if (bubbleText) {
      bubbleText.textContent = step.text;
    }
    if (stepCounter) {
      stepCounter.textContent = `${idx + 1} / ${steps.length}`;
    }
  }

  function advanceStep() {
    currentIndex = (currentIndex + 1) % steps.length;
    renderStep(currentIndex);
  }

  function prevStep() {
    currentIndex = (currentIndex - 1 + steps.length) % steps.length;
    renderStep(currentIndex);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      stopAutoPlay();
      advanceStep();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      stopAutoPlay();
      prevStep();
    });
  }

  function startAutoPlay() {
    isPlaying = true;
    if (playToggleBtn) playToggleBtn.textContent = "Παύση ⏸";
    autoPlayTimer = setInterval(advanceStep, 4500);
  }

  function stopAutoPlay() {
    isPlaying = false;
    if (playToggleBtn) playToggleBtn.textContent = "Αυτόματο ▶";
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  if (playToggleBtn) {
    playToggleBtn.addEventListener("click", () => {
      if (isPlaying) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
    });
  }

  // Initial step render & optional auto-play
  renderStep(0);
  startAutoPlay();
}

/**
 * Interactive ROI Calculator
 * Calculates estimated revenue lost per month and recovered direct booking value.
 */
function setupRoiCalculator() {
  const missedCallsInput = document.getElementById("calc-missed-calls");
  const avgOrderInput = document.getElementById("calc-avg-order");

  const missedCallsVal = document.getElementById("calc-missed-calls-val");
  const avgOrderVal = document.getElementById("calc-avg-order-val");
  const recoveredResult = document.getElementById("calc-recovered-sum");
  const otaSavingsResult = document.getElementById("calc-ota-savings");

  if (!missedCallsInput || !avgOrderInput) return;

  function calculate() {
    const dailyMissed = parseInt(missedCallsInput.value, 10) || 5;
    const avgValue = parseInt(avgOrderInput.value, 10) || 200;

    missedCallsVal.textContent = `${dailyMissed} κλήσεις/ημέρα`;
    avgOrderVal.textContent = `${avgValue}€`;

    // Monthly missed calls = daily * 30
    // Conservative conversion rate of missed calls saved = 15%
    const monthlyMissed = dailyMissed * 30;
    const convertedCalls = Math.round(monthlyMissed * 0.15);
    const recoveredRevenue = convertedCalls * avgValue;

    // Direct booking commission savings vs OTAs (avg 18% commission saved)
    const otaCommissionSaved = Math.round(recoveredRevenue * 0.18);

    if (recoveredResult) {
      recoveredResult.textContent = `+${recoveredRevenue.toLocaleString("el-GR")}€`;
    }

    if (otaSavingsResult) {
      otaSavingsResult.textContent = `~${otaCommissionSaved.toLocaleString("el-GR")}€ εξοικονόμηση προμηθειών OTA`;
    }
  }

  missedCallsInput.addEventListener("input", calculate);
  avgOrderInput.addEventListener("input", calculate);
  calculate();
}

/**
 * Accessible FAQ Accordion
 */
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all others for clean accordion feel
      faqItems.forEach((other) => {
        other.classList.remove("active");
        const btn = other.querySelector(".faq-question");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * Mobile Navigation Menu Toggle
 */
function setupMobileNav() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("mobile-open");
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }
}

/**
 * Header sticky shadow state
 */
function setupHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

/**
 * Lightweight Toast notification
 */
function showToast(message) {
  let toast = document.querySelector(".toast-notice");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

