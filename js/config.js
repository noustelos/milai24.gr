/**
 * milAI24.gr — Κεντρικό Αρχείο Ρυθμίσεων (Single Source of Truth για παραμέτρους UI)
 *
 * Οδηγίες:
 * Αλλάξτε τις παρακάτω τιμές για να ενημερώσετε αυτόματα το τηλέφωνο του Live Demo,
 * το email επικοινωνίας και τις τιμές/πακέτα σε ολόκληρη τη σελίδα.
 */

window.MILAI_CONFIG = {
  brandName: "milAI24",
  domain: "milai24.gr",

  // Στοιχεία Live Demo (Hero Section & Navbar CTA)
  demoPhone: {
    display: "211 XXX XXXX",         // Εμφανιζόμενος αριθμός στην κάρτα Demo
    raw: "+30211XXXXXXX",            // Αριθμός για κλήση (tel: link)
    isPlaceholder: true,             // Θέστε σε false όταν συνδεθεί ο πραγματικός αριθμός
    statusText: "Ζωντανή Γραμμή Δοκιμής • Διαθέσιμη 24/7",
    helperNote: "Καλέστε από κινητό ή σταθερό και μιλήστε ελεύθερα στα Ελληνικά, Αγγλικά ή Γερμανικά ως πελάτης ξενοδοχείου."
  },

  // Στοιχεία Επικοινωνίας
  contact: {
    email: "info@milai24.gr",
    subjectDefault: "Ενδιαφέρον για AI Τηλεφωνικό Βοηθό — milAI24.gr",
    responseTime: "Απάντηση εντός 24 ωρών"
  },

  // Εμπορικό Μοντέλο & Τιμολόγηση (Turnkey Setup)
  pricing: {
    setupFeeLabel: "Εφάπαξ Κόστος Εγκατάστασης",
    setupPriceDisplay: "Κατόπιν Μελέτης", // π.χ. "Από 490€ (Εφάπαξ)" ή "Κατόπιν Μελέτης"
    monthlySubscriptionToUs: "0€ / μήνα",
    estimatedProviderCostPerMin: "~0,10€ / λεπτό",
    estimatedMonthlyFixedNumber: "~2€ - 5€ / μήνα",
    freeYearlyUpdates: 2,
    deliveryDays: "5 - 7 εργάσιμες ημέρες"
  },

  // Προσομοίωση διαλόγου για το διαδραστικό preview στην κάρτα Demo
  sampleConversation: [
    {
      speaker: "assistant",
      label: "milAI24 Receptionist",
      lang: "EL",
      text: "Καλησπέρα σας! Καλέσατε το Aegialis Boutique Hotel. Είμαι η ψηφιακή βοηθός της ρεσεψιόν. Πώς μπορώ να σας εξυπηρετήσω;"
    },
    {
      speaker: "caller",
      label: "Πελάτης",
      lang: "EL",
      text: "Καλησπέρα, θα ήθελα να ρωτήσω αν έχετε δίκλινο δωμάτιο με θέα θάλασσα για 14 με 17 Ιουλίου και αν περιλαμβάνεται πρωινό."
    },
    {
      speaker: "assistant",
      label: "milAI24 Receptionist",
      lang: "EL",
      text: "Βεβαίως! Για 14 έως 17 Ιουλίου (3 διανυκτερεύσεις) διαθέτουμε Deluxe Sea View δωμάτιο με παραδοσιακό ελληνικό μπουφέ πρωινού. Θέλετε να καταχωρήσω το όνομά σας και να σας στείλω αμέσως SMS με τον σύνδεσμο απευθείας κράτησης και -10% έκπτωση;"
    },
    {
      speaker: "system",
      label: "Άμεση Ειδοποίηση (SMS & Email στον Ξενοδόχο)",
      lang: "SYS",
      text: "📩 Νέο Αίτημα Κράτησης: Γιώργος Παπαδόπουλος (+30 697 XXX XXXX) • 14-17 Ιουλίου (3 βράδια) • Deluxe Sea View • Εστάλη link απευθείας κράτησης."
    }
  ]
};

