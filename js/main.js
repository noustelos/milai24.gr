/**
 * milAI24.gr — Main Interactive Frontend Logic
 * Multi-scenario dialogue simulator, generalized ROI calculator,
 * bilingual i18n support (Greek & English), responsive navigation & FAQ accordion.
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.MILAI_CONFIG || {};

  // Detect current language from <html lang="...">
  const pageLang = document.documentElement.lang === "en" ? "en" : "el";
  const i18n = (config.i18n && config.i18n[pageLang]) || (config.i18n && config.i18n.el) || {};

  // 1. Hydrate UI elements from config.js
  hydrateConfig(config, pageLang);

  // 2. Setup Live Demo Phone Card & Copy functionality
  setupDemoCard(config, i18n);

  // 3. Interactive Multi-Scenario Dialogue Simulator
  setupDialogueSimulator(config, pageLang, i18n);

  // 4. Generalized B2B ROI Calculator for all businesses
  setupRoiCalculator(i18n, pageLang);

  // 5. Accessible FAQ Accordion
  setupFaqAccordion();

  // 6. Mobile Navigation Toggle
  setupMobileNav();

  // 7. Navbar scroll state
  setupHeaderScroll();
});

/**
 * Hydrates static elements across the page using MILAI_CONFIG and localized values
 */
function hydrateConfig(config, pageLang) {
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
      const subjectRaw = (config.contact.subjectDefault && config.contact.subjectDefault[pageLang]) 
        || config.contact.subjectDefault 
        || "milAI24 Inquiry";
      const subject = encodeURIComponent(subjectRaw);
      el.setAttribute("href", `mailto:${config.contact.email}?subject=${subject}`);
    });
  }

  // Hydrate Pricing elements if available
  if (config.pricing) {
    const setupFeeEls = document.querySelectorAll(".cfg-price-setup");
    setupFeeEls.forEach((el) => {
      const val = (config.pricing.setupPriceDisplay && config.pricing.setupPriceDisplay[pageLang]) 
        || config.pricing.setupPriceDisplay 
        || "Custom Quote";
      el.textContent = val;
    });

    const monthlySubEls = document.querySelectorAll(".cfg-price-monthly");
    monthlySubEls.forEach((el) => {
      const val = (config.pricing.monthlySubscriptionToUs && config.pricing.monthlySubscriptionToUs[pageLang]) 
        || config.pricing.monthlySubscriptionToUs 
        || "0€ / μήνα";
      el.textContent = val;
    });

    const minCostEls = document.querySelectorAll(".cfg-price-per-min");
    minCostEls.forEach((el) => {
      const val = (config.pricing.estimatedProviderCostPerMin && config.pricing.estimatedProviderCostPerMin[pageLang]) 
        || config.pricing.estimatedProviderCostPerMin 
        || "~0,10€ / λεπτό";
      el.textContent = val;
    });
  }
}

/**
 * Demo Card interactions (Call button & Copy button)
 */
function setupDemoCard(config, i18n) {
  const copyBtn = document.getElementById("demo-copy-btn");
  const callBtn = document.getElementById("demo-call-btn");

  if (copyBtn && config.demoPhone) {
    copyBtn.addEventListener("click", () => {
      const textToCopy = config.demoPhone.raw || config.demoPhone.display;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(i18n.copySuccess || "Phone number copied to clipboard!");
      }).catch(() => {
        showToast(`Number: ${config.demoPhone.display}`);
      });
    });
  }

  if (callBtn && config.demoPhone) {
    callBtn.addEventListener("click", (e) => {
      if (config.demoPhone.isPlaceholder) {
        e.preventDefault();
        showToast(i18n.demoPlaceholderNotice || "Live demo line is in final setup. Contact us for an immediate private demo!");
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "auto" });
        }
      }
    });
  }
}

/**
 * Interactive Multi-Scenario Dialogue Simulator inside Demo Card
 * Supports bilingual scenarios and allows visitors to toggle between Medical, Technical/Field, and Hospitality.
 */
function setupDialogueSimulator(config, pageLang, i18n) {
  // Guard: if simulator markup is removed/not present, exit cleanly
  const bubbleContainer = document.getElementById("sim-bubble");
  if (!bubbleContainer) return;

  // Select scenario set based on page language
  const scenarios = (config.scenarios && config.scenarios[pageLang]) 
    || (config.scenarios && config.scenarios.el) 
    || config.scenarios 
    || {};

  const scenarioKeys = Object.keys(scenarios).filter(k => k === "medical" || k === "technical" || k === "hospitality");
  if (!scenarioKeys.length) return;

  let currentScenarioKey = scenarioKeys[0]; // Default to medical
  let steps = scenarios[currentScenarioKey].steps || [];

  const bubbleSender = document.getElementById("sim-sender");
  const bubbleText = document.getElementById("sim-text");
  const bubbleContainer = document.getElementById("sim-bubble");
  const stepCounter = document.getElementById("sim-step-counter");
  const scenarioDesc = document.getElementById("sim-scenario-desc");
  const nextBtn = document.getElementById("sim-next-btn");
  const prevBtn = document.getElementById("sim-prev-btn");
  const playToggleBtn = document.getElementById("sim-play-toggle");
  const tabButtons = document.querySelectorAll(".scenario-tab-btn");

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
      const speakerPrefix = step.speaker === 'assistant' 
        ? '<span class="brand-mil">mil</span><span class="brand-ai24">AI24</span> // ' 
        : (step.speaker === 'caller' ? 'CALLER // ' : 'SYSTEM // ');
      const cleanLabel = step.label.replace(/^milAI24\s*/, '');
      bubbleSender.innerHTML = `<span>${speakerPrefix}${cleanLabel}</span> <span class="lang-pill">${step.lang}</span>`;
    }
    if (bubbleText) {
      bubbleText.textContent = step.text;
    }
    if (stepCounter) {
      stepCounter.textContent = `${idx + 1} / ${steps.length}`;
    }
  }

  function advanceStep() {
    if (!steps.length) return;
    currentIndex = (currentIndex + 1) % steps.length;
    renderStep(currentIndex);
  }

  function prevStep() {
    if (!steps.length) return;
    currentIndex = (currentIndex - 1 + steps.length) % steps.length;
    renderStep(currentIndex);
  }

  function switchScenario(newKey) {
    if (!scenarios[newKey]) return;
    currentScenarioKey = newKey;
    steps = scenarios[newKey].steps || [];
    currentIndex = 0;

    // Update active tab UI
    tabButtons.forEach((btn) => {
      if (btn.getAttribute("data-scenario") === newKey) {
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      }
    });

    // Update scenario description note
    if (scenarioDesc) {
      scenarioDesc.textContent = scenarios[newKey].subtitle || "";
    }

    renderStep(0);
    resetAutoPlay();
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetScenario = btn.getAttribute("data-scenario");
      if (targetScenario && targetScenario !== currentScenarioKey) {
        switchScenario(targetScenario);
      }
    });
  });

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
    if (playToggleBtn) playToggleBtn.textContent = i18n.pauseText || "PAUSE";
    autoPlayTimer = setInterval(advanceStep, 4500);
  }

  function stopAutoPlay() {
    isPlaying = false;
    if (playToggleBtn) playToggleBtn.textContent = i18n.playText || "AUTO-PLAY";
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function resetAutoPlay() {
    if (isPlaying) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = setInterval(advanceStep, 4500);
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

  // Initial render
  if (scenarioDesc && scenarios[currentScenarioKey]) {
    scenarioDesc.textContent = scenarios[currentScenarioKey].subtitle || "";
  }
  renderStep(0);
  startAutoPlay();
}

/**
 * Generalized B2B ROI Calculator
 * Calculates estimated revenue lost per month & year when calls go unanswered
 * Formula: Missed Calls/Week × 4.33 × Conversion Rate (20%) × Average Customer Value
 */
function setupRoiCalculator(i18n, pageLang) {
  const missedCallsInput = document.getElementById("calc-missed-calls");
  const avgOrderInput = document.getElementById("calc-avg-order");

  const missedCallsVal = document.getElementById("calc-missed-calls-val");
  const avgOrderVal = document.getElementById("calc-avg-order-val");
  const recoveredResult = document.getElementById("calc-recovered-sum");
  const annualSavingsResult = document.getElementById("calc-annual-savings");
  const convertedCustomersText = document.getElementById("calc-converted-customers");

  if (!missedCallsInput || !avgOrderInput) return;

  const numLocale = pageLang === "en" ? "en-US" : "el-GR";
  const currencySymbol = "€";

  function calculate() {
    const weeklyMissed = parseInt(missedCallsInput.value, 10) || 15;
    const avgValue = parseInt(avgOrderInput.value, 10) || 100;

    const unitCalls = i18n.callsPerWeek || "missed calls / week";
    missedCallsVal.textContent = `${weeklyMissed} ${unitCalls}`;
    avgOrderVal.textContent = pageLang === "en" ? `${currencySymbol}${avgValue}` : `${avgValue}${currencySymbol}`;

    // Monthly missed calls = weekly * ~4.33
    // Conservative conversion rate = 20% (customers who would book/buy if immediately answered)
    const monthlyMissedCalls = Math.round(weeklyMissed * 4.33);
    const convertedCustomers = Math.max(1, Math.round(monthlyMissedCalls * 0.20));
    const recoveredMonthlyRevenue = convertedCustomers * avgValue;
    const recoveredAnnualRevenue = recoveredMonthlyRevenue * 12;

    const formattedMonthly = recoveredMonthlyRevenue.toLocaleString(numLocale);
    const formattedAnnual = recoveredAnnualRevenue.toLocaleString(numLocale);

    if (recoveredResult) {
      if (pageLang === "en") {
        recoveredResult.textContent = `+€${formattedMonthly} / mo`;
      } else {
        recoveredResult.textContent = `+${formattedMonthly}€ / μήνα`;
      }
    }

    if (annualSavingsResult) {
      if (i18n.annualRevenueSaved) {
        annualSavingsResult.textContent = i18n.annualRevenueSaved.replace("{sum}", formattedAnnual);
      } else {
        annualSavingsResult.textContent = `~€${formattedAnnual} annual revenue saved from competitors`;
      }
    }

    if (convertedCustomersText) {
      if (i18n.rescuedClients) {
        convertedCustomersText.textContent = i18n.rescuedClients
          .replace("{count}", convertedCustomers)
          .replace("{total}", monthlyMissedCalls);
      } else {
        convertedCustomersText.textContent = `Equivalent to ~${convertedCustomers} rescued clients/mo (from ${monthlyMissedCalls} missed calls)`;
      }
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F9E7B9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}
