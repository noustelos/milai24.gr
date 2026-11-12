/**
 * milAI24.gr — Κεντρικό Αρχείο Ρυθμίσεων (Single Source of Truth για παραμέτρους UI)
 *
 * Υποστηρίζει δίγλωσσες ρυθμίσεις (Greek & English) για:
 * - Live Demo στοιχεία (αριθμοί, μηνύματα)
 * - Εμπορικό μοντέλο & τιμολόγηση
 * - Σενάρια προσομοίωσης διαλόγου ανά γλώσσα (el / en)
 * - Τοπικοποιημένα μηνύματα (i18n)
 */

window.MILAI_CONFIG = {
  brandName: "milAI24",
  domain: "milai24.gr",

  // Στοιχεία Live Demo (Hero Section & Navbar CTA)
  demoPhone: {
    display: "211 XXX XXXX",         // Εμφανιζόμενος αριθμός στην κάρτα Demo
    raw: "+30211XXXXXXX",            // Αριθμός για κλήση (tel: link)
    isPlaceholder: true,             // Θέστε σε false όταν συνδεθεί ο πραγματικός αριθμός
    statusText: {
      el: "Ζωντανή Γραμμή Δοκιμής • Διαθέσιμη 24/7",
      en: "Live Demo Line • Available 24/7"
    },
    helperNote: {
      el: "Καλέστε από κινητό ή σταθερό και μιλήστε ελεύθερα στα Ελληνικά ή Αγγλικά υποδυόμενος έναν πελάτη.",
      en: "Call from your mobile or landline and speak freely in English or Greek as a customer."
    }
  },

  // Στοιχεία Επικοινωνίας
  contact: {
    email: "info@milai24.gr",
    subjectDefault: {
      el: "Ενδιαφέρον για AI Τηλεφωνικό Γραμματέα — milAI24.gr",
      en: "Inquiry for AI Phone Receptionist — milAI24.gr"
    },
    responseTime: {
      el: "Απάντηση εντός 24 ωρών",
      en: "Reply within 24 hours"
    }
  },

  // Εμπορικό Μοντέλο & Τιμολόγηση (Turnkey Setup)
  pricing: {
    setupFeeLabel: {
      el: "Εφάπαξ Κόστος Εγκατάστασης & Παραμετροποίησης",
      en: "One-Time Setup & Training Fee"
    },
    setupPriceDisplay: {
      el: "Κατόπιν Μελέτης",
      en: "Custom Quote"
    },
    monthlySubscriptionToUs: {
      el: "0€ / μήνα",
      en: "€0 / month"
    },
    estimatedProviderCostPerMin: {
      el: "~0,10€ / λεπτό",
      en: "~€0.10 / min"
    },
    estimatedMonthlyFixedNumber: {
      el: "~2€ - 5€ / μήνα",
      en: "~€2 - €5 / month"
    },
    freeYearlyUpdates: 2,
    deliveryDays: {
      el: "5 - 7 εργάσιμες ημέρες",
      en: "5 - 7 business days"
    }
  },

  // Τοπικοποίηση κειμένων UI / JS Strings (i18n)
  i18n: {
    el: {
      copySuccess: "Ο αριθμός αντιγράφηκε στο πρόχειρο!",
      demoPlaceholderNotice: "Η γραμμή επίδειξης είναι υπό τελική ρύθμιση. Επικοινωνήστε μαζί μας για άμεση παρουσίαση!",
      playText: "Αυτόματο ▶",
      pauseText: "Παύση ⏸",
      callsPerWeek: "κλήσεις / εβδομάδα",
      monthlyRevenueSuffix: "+{sum}€ / μήνα",
      annualRevenueSaved: "~{sum}€ ετήσια έσοδα που δεν χάνονται στον ανταγωνισμό",
      rescuedClients: "Αντιστοιχεί σε ~{count} διασωθέντες πελάτες/μήνα (από {total} αναπάντητες)"
    },
    en: {
      copySuccess: "Phone number copied to clipboard!",
      demoPlaceholderNotice: "The live demo line is in final setup. Contact us for an immediate private demo!",
      playText: "Auto-play ▶",
      pauseText: "Pause ⏸",
      callsPerWeek: "missed calls / week",
      monthlyRevenueSuffix: "+€{sum} / mo",
      annualRevenueSaved: "~€{sum} annual revenue saved from competitors",
      rescuedClients: "Equivalent to ~{count} rescued clients/mo (from {total} missed calls)"
    }
  },

  // Διαδραστικά Σενάρια Προσομοίωσης ανά Κλάδο & Γλώσσα (Bilingual Multi-Scenario Simulation)
  scenarios: {
    // 1. Ελληνικά Σενάρια (Default)
    el: {
      medical: {
        id: "medical",
        label: "Ιατρεία & Γραφεία",
        icon: "🩺",
        subtitle: "Διαχείριση ραντεβού, ωραρίων και καταγραφή ιστορικού/αιτήματος",
        steps: [
          {
            speaker: "assistant",
            label: "milAI24 Γραμματεία",
            lang: "EL",
            text: "Καλησπέρα σας! Καλέσατε το Ορθοπαιδικό Ιατρείο του κ. Δημητρίου. Είμαι η ψηφιακή γραμματέας. Πώς θα μπορούσα να σας εξυπηρετήσω;"
          },
          {
            speaker: "caller",
            label: "Ασθενής / Πελάτης",
            lang: "EL",
            text: "Καλησπέρα, έχω έναν έντονο πόνο στο γόνατο και θα ήθελα να κλείσω ένα ραντεβού για εξέταση αυτή την Πέμπτη απόγευμα αν γίνεται."
          },
          {
            speaker: "assistant",
            label: "milAI24 Γραμματεία",
            lang: "EL",
            text: "Μάλιστα. Για αυτή την Πέμπτη υπάρχει διαθεσιμότητα στις 17:30 ή στις 19:00. Ποια ώρα σας εξυπηρετεί καλύτερα για να κρατήσω τα στοιχεία σας;"
          },
          {
            speaker: "system",
            label: "Άμεση Ειδοποίηση (SMS & Email στον Ιατρό)",
            lang: "SYS",
            text: "📩 Νέο Αίτημα Ραντεβού: Κωνσταντίνος Μάνθος (+30 694 XXX XXXX) • Πέμπτη 17:30 • Αιτία: Έντονος πόνος στο γόνατο • Καταχωρήθηκε αυτόματα στο ημερολόγιο."
          }
        ]
      },
      technical: {
        id: "technical",
        label: "Τεχνικοί & Επαγγελματίες",
        icon: "🔧",
        subtitle: "Καταγραφή βλαβών, περιοχής και επείγοντος περιστατικού στο πεδίο",
        steps: [
          {
            speaker: "assistant",
            label: "milAI24 Τεχνική Υποστήριξη",
            lang: "EL",
            text: "Γεια σας! Καλέσατε την ClimaTech Υπηρεσίες Κλιματισμού. Ο τεχνικός μας βρίσκεται αυτή τη στιγμή σε εγκατάσταση. Ποιο είναι το πρόβλημα που αντιμετωπίζετε;"
          },
          {
            speaker: "caller",
            label: "Πελάτης",
            lang: "EL",
            text: "Γεια σας, έσταξε νερά το κλιματιστικό στο γραφείο στο Μαρούσι και μυρίζει περίεργα. Είναι επείγον γιατί έχουμε εγκαίνια αύριο."
          },
          {
            speaker: "assistant",
            label: "milAI24 Τεχνική Υποστήριξη",
            lang: "EL",
            text: "Κατανοητό, το σημειώνω ως εξαιρετικά επείγον για Μαρούσι. Μου δίνετε το ονοματεπώνυμο και την οδό σας; Στέλνω άμεσα ειδοποίηση προτεραιότητας στον τεχνικό για να σας καλέσει σε 10 λεπτά."
          },
          {
            speaker: "system",
            label: "SMS Alert Υψηλής Προτεραιότητας στο Κινητό Τεχνικού",
            lang: "SYS",
            text: "🚨 ΕΠΕΙΓΟΝ: Βλάβη κλιματιστικού (διαρροή) • Μαρούσι • Ελένη Βασιλείου (+30 697 XXX XXXX) • Απαιτείται άμεση κλήση εντός 10'!"
          }
        ]
      },
      hospitality: {
        id: "hospitality",
        label: "Ξενοδοχεία & Τουρισμός",
        icon: "🛎️",
        subtitle: "Πολυγλωσσική εξυπηρέτηση 24/7 και direct booking SMS links",
        steps: [
          {
            speaker: "assistant",
            label: "milAI24 Concierge",
            lang: "EL",
            text: "Καλησπέρα σας! Καλωσορίσατε στο Aegialis Suites. Είμαι η ψηφιακή βοηθός της ρεσεψιόν. Σε τι μπορώ να σας εξυπηρετήσω;"
          },
          {
            speaker: "caller",
            label: "Ταξιδιώτης",
            lang: "EL",
            text: "Καλησπέρα, έχετε διαθέσιμο δίκλινο με θέα θάλασσα για 14-17 Ιουλίου; Περιλαμβάνεται πρωινό;"
          },
          {
            speaker: "assistant",
            label: "milAI24 Concierge",
            lang: "EL",
            text: "Ναι, υπάρχει διαθέσιμη Deluxe Sea View σουίτα με ελληνικό μπουφέ πρωινού. Σας στέλνω αμέσως SMS με link απευθείας κράτησης και έκπτωση -10% χωρίς προμήθειες!"
          },
          {
            speaker: "system",
            label: "Άμεση Ειδοποίηση Direct Booking στο Ξενοδοχείο",
            lang: "SYS",
            text: "📩 Νέο Αίτημα Κράτησης: Mark Stevens (+44 7700 XXX XXX) • 14-17 Ιουλίου (3 νύχτες) • Deluxe Sea View • Εστάλη direct booking link με SMS."
          }
        ]
      }
    },

    // 2. English Scenarios
    en: {
      medical: {
        id: "medical",
        label: "Clinics & Offices",
        icon: "🩺",
        subtitle: "Appointment scheduling, clinic hours, and patient request intake",
        steps: [
          {
            speaker: "assistant",
            label: "milAI24 Reception",
            lang: "EN",
            text: "Good afternoon! You've reached Dr. Miller's Orthopedic Practice. I am the digital receptionist. How may I assist you today?"
          },
          {
            speaker: "caller",
            label: "Patient",
            lang: "EN",
            text: "Hello, I have acute knee pain and I would like to schedule an examination for this Thursday afternoon if possible."
          },
          {
            speaker: "assistant",
            label: "milAI24 Reception",
            lang: "EN",
            text: "Certainly. For this Thursday, we have openings at 5:30 PM or 7:00 PM. Which time suits you best so I can take down your details?"
          },
          {
            speaker: "system",
            label: "Instant Notification (SMS & Email to Doctor)",
            lang: "SYS",
            text: "📩 New Appointment Request: David Harris (+1 555 XXX XXXX) • Thursday 5:30 PM • Reason: Acute knee pain • Added automatically to calendar."
          }
        ]
      },
      technical: {
        id: "technical",
        label: "Technicians & Services",
        icon: "🔧",
        subtitle: "Capturing equipment breakdowns, job location, and emergency dispatch",
        steps: [
          {
            speaker: "assistant",
            label: "milAI24 Technical Support",
            lang: "EN",
            text: "Hello! You've reached ClimaTech HVAC Solutions. Our technician is currently on an installation. What issue are you experiencing?"
          },
          {
            speaker: "caller",
            label: "Client",
            lang: "EN",
            text: "Hi, our office AC unit is leaking water and has a strange burning smell. It's urgent because we have an event tomorrow morning."
          },
          {
            speaker: "assistant",
            label: "milAI24 Technical Support",
            lang: "EN",
            text: "Understood. I am flagging this as high priority. May I have your full name and office address? I am sending an immediate dispatch alert to the technician to call you within 10 minutes."
          },
          {
            speaker: "system",
            label: "Priority SMS Alert to Field Technician's Mobile",
            lang: "SYS",
            text: "🚨 URGENT: AC breakdown (water leak) • Midtown Office • Sarah Jenkins (+1 555 XXX XXXX) • Callback required within 10 min!"
          }
        ]
      },
      hospitality: {
        id: "hospitality",
        label: "Hotels & Villas",
        icon: "🛎️",
        subtitle: "24/7 multilingual concierge and direct booking SMS links",
        steps: [
          {
            speaker: "assistant",
            label: "milAI24 Concierge",
            lang: "EN",
            text: "Good afternoon! Welcome to Aegialis Suites. I am the digital concierge. How can I help you today?"
          },
          {
            speaker: "caller",
            label: "Traveler",
            lang: "EN",
            text: "Hello, do you have a sea view suite available for July 14th to 17th? Is breakfast included?"
          },
          {
            speaker: "assistant",
            label: "milAI24 Concierge",
            lang: "EN",
            text: "Yes, our Deluxe Sea View Suite is available with complimentary Mediterranean buffet breakfast. I'm texting you a direct booking link right now with a 10% direct discount!"
          },
          {
            speaker: "system",
            label: "Instant Direct Booking Notification to Front Desk",
            lang: "SYS",
            text: "📩 New Booking Request: Mark Stevens (+44 7700 XXX XXX) • July 14-17 (3 nights) • Deluxe Sea View • Direct booking SMS link dispatched."
          }
        ]
      }
    }
  }
};

// Backward compatibility alias for any direct access
window.MILAI_CONFIG.scenarios.medical = window.MILAI_CONFIG.scenarios.el.medical;
window.MILAI_CONFIG.scenarios.technical = window.MILAI_CONFIG.scenarios.el.technical;
window.MILAI_CONFIG.scenarios.hospitality = window.MILAI_CONFIG.scenarios.el.hospitality;
