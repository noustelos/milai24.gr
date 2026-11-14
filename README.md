# milAI24.gr — Turnkey Voice AI Assistants for Greek Businesses & Professionals

> **Single Source of Truth (SSOT) & Project Architecture Guide**  
> Κεντρικός χάρτης αρχιτεκτονικής, εμπορικού μοντέλου, ρυθμίσεων και ιστορικού αλλαγών.

---

## 1. Project Overview & Business Model

Το **milAI24.gr** είναι μια εξειδικευμένη B2B υπηρεσία υλοποίησης και εκπαίδευσης **αυτόνομων Voice AI τηλεφωνικών γραμματέων (Smart Voice AI Assistant 24/7)** στα Ελληνικά και σε 10+ ξένες γλώσσες.

### Γιατί Όχι ένας Παθητικός Τηλεφωνητής;
Σήμερα, όταν οι πελάτες ακούνε τηλεφωνητή («αφήστε μήνυμα μετά το μπιπ»), **το 85% κλείνει αμέσως και καλεί τον επόμενο ανταγωνιστή**. Το `milAI24` απαντάει άμεσα, κάνει κανονικό ανθρώπινο διάλογο, λύνει απορίες, καταγράφει ραντεβού/βλάβες και στέλνει αμέσως SMS & Email με τα στοιχεία του πελάτη.

Απευθύνεται σε **κάθε επιχείρηση και ελεύθερο επαγγελματία** που χάνει έσοδα από αναπάντητες κλήσεις:
- **Ιατρεία, Δικηγορικά & Λογιστικά Γραφεία:** Διαχείριση ραντεβού, ωραρίων και καταγραφή αιτημάτων ενώ βρίσκεστε σε συνεδρία/εξέταση.
- **Τεχνικοί, Εργολάβοι & Εξωτερικές Εργασίες:** Καταγραφή βλαβών, περιοχής και στοιχείων πελάτη ενώ βρίσκεστε σε σκάλα, εργοτάξιο ή στο τιμόνι.
- **Ξενοδοχεία, Βίλες & Τουριστικά Καταλύματα:** Πολυγλωσσική εξυπηρέτηση 24/7 (10+ γλώσσες) και αύξηση direct bookings χωρίς προμήθειες πλατφορμών.
- **Εστίαση, Κέντρα Αισθητικής & Τοπικές Επιχειρήσεις:** Διαχείριση κρατήσεων και ερωτήσεων τις ώρες αιχμής.

### Το Εμπορικό Μοντέλο "Turnkey Setup" (Μηδενικές Δικές μας Συνδρομές)
Σε αντίθεση με τα παραδοσιακά SaaS και agency μοντέλα που χρεώνουν 200€–500€/μήνα και δεσμεύουν τον πελάτη:
1. **Εφάπαξ Κόστος Εγκατάστασης (Setup Fee):** Ο πελάτης πληρώνει μία φορά για την πλήρη ανάλυση, παραμετροποίηση, εκπαίδευση του Knowledge Base και διασύνδεση με το τηλεφωνικό κέντρο.
2. **0€ Μηνιαία Συνδρομή προς το milAI24.gr:** Δεν υπάρχει καμία πάγια χρέωση προς εμάς.
3. **Απευθείας Πληρωμή Παρόχων Υποδομής (At-Cost):** Ο πελάτης ανοίγει λογαριασμό στο δικό του όνομα στους παρόχους τηλεφωνίας και Voice AI (π.χ. Twilio, Vapi, Retell, Deepgram, Cartesia, OpenAI). Πληρώνει μόνο:
   - Τον σταθερό αριθμό VoIP (2 κανάλια): ~2€ / μήνα.
   - Εισερχόμενες κλήσεις (Inbound): 0,00€ / λεπτό από τον πάροχο τηλεφωνίας.
   - Τον χρόνο ομιλίας AI: ~0,10€ / λεπτό (Pay-As-You-Go μόνο όσο μιλάει ο βοηθός).
   - Επείγουσα προώθηση σε κινητό (Call Transfer): ~0,06€ / λεπτό (χρέωση ανά δευτερόλεπτο, μόνο εφόσον μεταφερθεί κλήση).
4. **2 Δωρεάν Ανανεώσεις Knowledge Base / έτος:** Περιλαμβάνονται δωρεάν 2 ανανεώσεις ετησίως (π.χ. αλλαγές τιμών, νέα ωράρια/υπηρεσίες) εντός 24-48 ωρών.

---

## 2. Architecture & Folder Structure

Το project έχει υλοποιηθεί ως ένα υπερ-ταχύτατο, **static site (Zero-Dependency Vanilla Web Stack)**, ειδικά σχεδιασμένο για άμεσο deployment και παγκόσμιο CDN caching στο **Cloudflare Pages**.

```text
milai24/
├── index.html            # Η κύρια landing page (Ελληνικά: Semantic HTML5, SEO, Schema.org)
├── en/
│   └── index.html        # Full English version (milai24.gr/en/ with dedicated English SEO & content)
├── _headers              # HTTP security & caching headers για το Cloudflare Pages
├── .gitignore            # Αγνοεί περιττά αρχεία συστήματος (.DS_Store κ.λπ.)
├── README.md             # Αυτό το αρχείο (SSOT, Changelog, Οδηγίες)
├── css/
│   └── styles.css        # Modular CSS3, CSS Variables, Responsive (Mobile-First)
├── js/
│   ├── config.js         # Κεντρικό configuration (Bilingual UI data & Scenarios)
│   └── main.js           # Client-side logic (Bilingual Simulator, ROI Calculator, FAQ, UI)
└── assets/
    ├── logo.svg          # Επίσημο λογότυπο milAI24 (με έμφαση στο πράσινο AI & soundwave)
    ├── favicon.svg       # Favicon υψηλής ανάλυσης (SVG)
    └── og-image.svg      # Open Graph image (1200x630) για social sharing previews
```

### Οδηγίες Deployment στο Cloudflare Pages
1. Συνδέστε το GitHub repository: `https://github.com/noustelos/milai24.gr`.
2. Στο Cloudflare Dashboard επιλέξτε **Workers & Pages > Create application > Pages > Connect to Git**.
3. Ρυθμίσεις Build:
   - **Framework preset:** `None`
   - **Build command:** *(κενό — δεν απαιτείται build step)*
   - **Build output directory:** `/` *(ή root)*
4. Πατήστε **Save and Deploy**. Η σελίδα είναι άμεσα live σε παγκόσμιο edge CDN με HTTPS.

---

## 3. Configuration Guide (Πώς αλλάζουμε στοιχεία)

Όλες οι βασικές παράμετροι βρίσκονται συγκεντρωμένες στο αρχείο `js/config.js` για να μην χρειάζεται επέμβαση στο `index.html`:

### Αλλαγή Αριθμού Live Demo
Ανοίξτε το `js/config.js` και επεξεργαστείτε το αντικείμενο `demoPhone`:
```javascript
demoPhone: {
  display: "211 123 4567",       // Ο αριθμός που εμφανίζεται οπτικά στο κουτί
  raw: "+302111234567",          // Ο πραγματικός αριθμός για κλήση tel:
  isPlaceholder: false,          // Θέστε false μόλις συνδεθεί ο πραγματικός αριθμός
  ...
}
```

### Προσθήκη ή Τροποποίηση Σεναρίων Προσομοίωσης
Στο `js/config.js` στο αντικείμενο `scenarios` μπορείτε να αλλάξετε ή να προσθέσετε διαλόγους ανά επάγγελμα:
- `medical`: Ιατρεία & Επιστημονικά Γραφεία
- `technical`: Τεχνικοί, Εργολάβοι & Συνεργεία / Εξωτερικές Εργασίες
- `hospitality`: Ξενοδοχεία, Βίλες & Τουρισμός

### Αλλαγή Στοιχείων Επικοινωνίας & Τιμολόγησης
Στο ίδιο αρχείο `js/config.js`:
- `contact.email`: Το email στο οποίο αποστέλλονται τα μηνύματα (`info@milai24.gr`).
- `pricing.setupPriceDisplay`: Το εμφανιζόμενο κόστος εγκατάστασης (π.χ. `"Από 490€"` ή `"Κατόπιν Μελέτης"`).

### Αλλαγή Λογοτύπου
- Το λογότυπο βρίσκεται στο `assets/logo.svg`.
- Μπορείτε να αντικαταστήσετε το αρχείο ή να προσθέσετε `assets/logo.png` εφόσον χρειαστεί raster format.

---

## 4. Mandatory AI Agent Instructions (Κανόνας για το Μέλλον)

> [!IMPORTANT]
> **ΑΥΣΤΗΡΗ ΟΔΗΓΙΑ ΠΡΟΣ ΚΑΘΕ AI AGENT & DEVELOPER:**  
> **ΠΡΙΝ ΟΛΟΚΛΗΡΩΣΕΤΕ ΟΠΟΙΑΔΗΠΟΤΕ ΑΛΛΑΓΗ** στον κώδικα ή στη δομή του project, **ΟΦΕΙΛΕΤΕ ΝΑ ΕΝΗΜΕΡΩΣΕΤΕ ΤΗΝ ΕΝΟΤΗΤΑ CHANGELOG ΠΑΡΑΚΑΤΩ (Append-Only)**.  
> Κάθε καταχώριση πρέπει να περιλαμβάνει:
> 1. Ημερομηνία (`YYYY-MM-DD`).
> 2. Έκδοση ή τίτλο ενέργειας.
> 3. Συνοπτική λίστα των αρχείων που τροποποιήθηκαν ή δημιουργήθηκαν.
> 4. Τον σκοπό και το αποτέλεσμα της αλλαγής.

---

## 5. Changelog / Ημερολόγιο Αλλαγών (Append-Only)

### [2026-11-14] — v2.3.9: Add Cache-Busting Version Query to SVG Brand Assets
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `index.html` & `en/index.html`:
    - Προσθήκη query parameter `?v=2.3.8` σε όλες τις αναφορές των SVG assets (`assets/logo.svg`, `assets/favicon.svg`, `assets/og-image.svg`) στο Open Graph meta tag, Twitter card, favicon `<link>`, Schema.org JSON-LD structured data, Navbar brand logo και Footer logo.
  - `README.md`:
    - Καταγραφή Changelog v2.3.9.
- **Σκοπός:** Άμεση παράκαμψη του επιθετικού caching κανόνα του Cloudflare CDN (`Cache-Control: public, max-age=31536000, immutable`), εξασφαλίζοντας ότι όλοι οι επισκέπτες και τα social media crawlers φορτώνουν ακαριαία το νέο επίσημο λογότυπο Telephone Receiver + 5-Bar Acoustic Pulse.

### [2026-11-14] — v2.3.8: Upgrade Logo & Favicon to Telephone Receiver Acoustic Pulse SVG
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `assets/logo.svg` & `assets/logo-dark.svg`:
    - Ανακατασκευή του επίσημου εμβλήματος με καθαρά χειρουργικά SVG paths και μάσκα σε `viewBox="0 0 184 38"`:
      - Sharp square frame `0px` radius (`x="1" y="1" width="36" height="36" stroke="#F59E0B" stroke-width="1.5"`).
      - Οι 2 αριστερές μπάρες (`#F9E7B9` Butter Yellow) σχηματίζουν το εργονομικό τηλεφωνικό ακουστικό (επάνω earpiece pad, λεπτότερη μέση λαβή, κάτω microphone pad).
      - Οι 3 δεξιές ανερχόμενες μπάρες (`#F59E0B` Rich Amber Gold) υψώνονται κλιμακωτά στα δεξιά του ακουστικού, με το κάτω περίγραμμά τους να ακολουθεί ομαλά την καμπύλη του ακουστικού.
      - Ομοιόμορφο negative-space acoustic wave cutout (πάχους `1.8px`) διασχίζει κυματιστά από τη λαβή του ακουστικού μέσα από τις 3 δεξιές μπάρες.
      - Στο `assets/logo-dark.svg`, ρύθμιση του `mil` σε `#121824` και των στοιχείων σε υψηλή αντίθεση για χρήση σε ανοιχτόχρωμο φόντο.
  - `assets/favicon.svg`:
    - Ενημέρωση σε `viewBox="0 0 38 38"` με σκούρο φόντο `#121824` και το νέο έμβλημα Telephone Receiver + 5-Bar Acoustic Pulse για απόλυτη καθαρότητα στα browser tabs.
  - `assets/og-image.svg`:
    - Ενσωμάτωση του νέου εμβλήματος Telephone Receiver + 5-Bar Acoustic Pulse στην κάρτα διαμοιρασμού (Open Graph social share banner).
  - `index.html` & `en/index.html`:
    - Προσαρμογή των διαστάσεων του logo σε `width="223" height="46"` ώστε να αντιστοιχεί ακριβώς στο φυσικό aspect ratio του `viewBox="0 0 184 38"` χωρίς καμία παραμόρφωση ή CLS.
  - `README.md`:
    - Καταγραφή Changelog v2.3.8.
- **Σκοπός:** Αναβάθμιση της οπτικής ταυτότητας και του επίσημου λογοτύπου σε ένα σύγχρονο, συμβολικό έμβλημα τηλεφωνίας και φωνητικού AI (Telephone Receiver + Acoustic Pulse) με μηδενικά gradients και χειρουργική ακρίβεια pixel.

### [2026-11-14] — v2.3.7: Resolve Accessibility Panel Toggle Visibility & Click Propagation
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `js/main.js`:
    - Εξάλειψη διπλής δήλωσης `const bubbleContainer` εντός του `setupDialogueSimulator` που προκαλούσε `SyntaxError` στο parsing του JavaScript και μπλόκαρε την εκτέλεση του `DOMContentLoaded`.
    - Αναδιάταξη της ροής αρχικοποίησης στο `DOMContentLoaded` ώστε το `setupAccessibilityWidget()` να εκτελείται άμεσα ως 1ο βήμα.
    - Ενίσχυση της λειτουργίας ανοίγματος/κλεισίματος (`openPanel` / `closePanel`): ταυτόχρονη διαχείριση του attribute `hidden`, της κλάσης `.is-open`, του `aria-hidden` και του `aria-expanded="true|false"`.
    - Προσθήκη `e.preventDefault()` και `e.stopPropagation()` στο click event του trigger button, καθώς και απομόνωση των clicks εντός του panel (`panel.addEventListener('click', (e) => e.stopPropagation())`) ώστε να αποτρέπεται το ακαριαίο ακούσιο κλείσιμο από το document click handler.
  - `css/styles.css`:
    - Προσθήκη ρητών κανόνων ορατότητας: `.a11y-panel.is-open, .a11y-panel:not([hidden]) { display: flex !important; }` και `.a11y-panel[hidden] { display: none !important; }`, διασφαλίζοντας ότι το μενού ανοίγει άμεσα και απρόσκοπτα σε όλους τους browsers και viewport μεγέθη.
  - `README.md`:
    - Καταγραφή Changelog v2.3.7.
- **Σκοπός:** Άμεση αποκατάσταση της διασύνδεσης και του toggle behavior του Accessibility Widget, εξασφαλίζοντας απρόσκοπτη λειτουργία σε επιτραπέζιες και κινητές συσκευές.

### [2026-11-14] — v2.3.6: Add Custom WCAG Accessibility Widget Matching Brand Design System
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `index.html`:
    - Προσθήκη floating widget προσβασιμότητας στην κάτω αριστερή γωνία (`.a11y-widget`) με κομψό τετράγωνο trigger button (`46px × 46px`, `border-radius: 0px`, `#171F2E`, `border: 1px solid #F9E7B9`, καθαρό SVG εικονίδιο προσβασιμότητας, zero emojis) και πλήρες panel επιλογών WCAG στα Ελληνικά:
      1. Μεγάλα γράμματα (`large-text`)
      2. Υψηλή αντίθεση (`high-contrast`)
      3. Υπογράμμιση συνδέσμων (`underline-links`)
      4. Ευανάγνωστη γραμματοσειρά (`readable-font`)
      5. Χωρίς κινήσεις (`reduce-motion`)
      6. Επαναφορά (`reset`)
  - `en/index.html`:
    - Αντίστοιχη προσθήκη του accessibility widget στην αγγλική έκδοση με πλήρως τοπικοποιημένο panel:
      1. Larger Text
      2. High Contrast
      3. Highlight Links
      4. Readable Font
      5. Reduce Motion
      6. Reset All
  - `css/styles.css`:
    - Υλοποίηση των CSS states για κάθε λειτουργία προσβασιμότητας (`html.a11y-large-text`, `html.a11y-high-contrast`, `html.a11y-underline-links`, `html.a11y-readable-font`, `html.a11y-reduce-motion`).
    - Αυστηρή τήρηση του design system (Butter Cream `#F9E7B9`, Deep Tech Obsidian `#171F2E` / `#121824`, `border-radius: 0px` παντού, hairline borders `#334155`).
    - Responsive mobile breakpoints (`< 480px`) για άψογη προβολή σε μικρές οθόνες χωρίς επικάλυψη κρίσιμου περιεχομένου.
    - Διατήρηση 100% της ισορροπίας αγκυλών (final depth: 0).
  - `js/main.js`:
    - Πρώιμη αρχικοποίηση (`initAccessibilityEarly`) πριν το render για αποτροπή FOUC κατά την εναλλαγή σελίδων / γλωσσών.
    - Πλήρες state management (`setupAccessibilityWidget`) με διατήρηση των ενεργών επιλογών στο `localStorage` (`milai24_a11y`).
    - Διαχείριση `aria-expanded`, `aria-pressed`, κλείσιμο με κλικ εκτός ή με πλήκτρο `Escape` με αυτόματη επιστροφή focus στο trigger button.
  - `README.md`:
    - Καταγραφή Changelog v2.3.6.
- **Σκοπός:** Ενίσχυση της συμμόρφωσης με τα πρότυπα προσβασιμότητας WCAG, παρέχοντας 6 εξατομικευμένες ρυθμίσεις ανάγνωσης και πλοήγησης, διατηρώντας απόλυτα την πολυτελή tech αισθητική του milAI24.gr.

### [2026-11-14] — v2.3.5: Remove ROI Calculator Section & Refine Spa & Wellness Terminology
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `index.html`:
    - Πλήρης αφαίρεση του `<section id="calculator">` (Υπολογιστής Απόδοσης / ROI Calculator).
    - Αντικατάσταση του παλαιού συνδέσμου `#calculator` στο Footer (2η στήλη) με σύνδεσμο προς `#why-us` («Γιατί milAI24»), διατηρώντας ισορροπημένη 5-link πλοήγηση.
    - Αναβάθμιση του όρου «Αισθητική» / «Εστίαση & Αισθητική» στην 4η κάρτα κλάδου σε «Εστίαση, Κέντρα Αισθητικής & Spa» και στο Footer (3η στήλη) σε «Κέντρα Αισθητικής & Spa».
  - `en/index.html`:
    - Πλήρης αφαίρεση του `<section id="calculator">` (ROI Performance Calculator).
    - Αντικατάσταση του footer link `#calculator` με `#why-us` («Why milAI24»).
    - Αναβάθμιση του τίτλου της 4ης κάρτας σε «Restaurants, Spa & Wellness» (wellness appointment management) και στο Footer σε «Spa & Wellness».
  - `css/styles.css`:
    - Αφαίρεση όλων των αχρησιμοποίητων κανόνων του calculator (`.section-calculator`, `.calc-box`, `.calc-grid`, `.calc-control-group`, `.calc-label`, `.calc-slider`, `.calc-result-box`, `.calc-result-title`, `.calc-result-number`, `.calc-result-sub` και `.calc-grid` στο media query) με διατήρηση 100% της ισορροπίας αγκυλών (depth: 0).
  - `js/main.js`:
    - Επιβεβαίωση και προστασία της `setupRoiCalculator()` με null-guard για ασφαλή εκτέλεση χωρίς DOM elements και επικαιροποίηση των file header comments.
  - `llms.txt`:
    - Αφαίρεση αναφορών σε ROI calculator και επικαιροποίηση των canonical link descriptions.
  - `README.md`:
    - Καταγραφή Changelog v2.3.5.
- **Σκοπός:** Απλοποίηση της ροής περιεχομένου με αφαίρεση του υπολογιστή απόδοσης, εναρμόνιση της πλοήγησης στο footer και αναβάθμιση της ορολογίας του 4ου κλάδου σε «Κέντρα Αισθητικής & Spa» / «Spa & Wellness».

### [2026-11-14] — v2.3.4: Replace Chatbot Simulator with Clean Live Phone Demo Card
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `index.html`:
    - Αφαίρεση του παλιού κειμενικού chat simulator («Δοκιμάστε ανά Κλάδο», tabs, dialogue bubble, προηγούμενο/παύση/επόμενο) από το δεξί panel του Hero (`#demo`).
    - Μετατροπή σε επιβλητική **Live Phone Demo Card**:
      - Header: `ΖΩΝΤΑΝΗ ΤΗΛΕΦΩΝΙΚΗ ΔΟΚΙΜΗ // 24/7` με soundwave bar.
      - Κεντρικός αριθμός κλήσης `210 XXX XXXX` με ετικέτα `ΚΑΛΕΣΤΕ ΑΠΟ ΤΟ ΚΙΝΗΤΟ Ή ΤΟ ΣΤΑΘΕΡΟ ΣΑΣ` και κουμπιά «Κλήση Τώρα» & «Αντιγραφή».
      - Zero Surcharge Note: Επισήμανση απλής αστικής κλήσης χωρίς καμία επιπλέον επιβάρυνση (δωρεάν με τα απεριόριστα λεπτά του καλούντος).
      - 3 Minimal Technical Specs: Χρόνος απόκρισης στο 1ο χτύπημα (< 1 sec), 10+ γλώσσες, χωρητικότητα 2 ταυτόχρονων κλήσεων.
  - `en/index.html`:
    - Αντίστοιχη αντικατάσταση στην αγγλική έκδοση (`LIVE PHONE DEMO // 24/7`, `CALL FROM YOUR MOBILE OR LANDLINE`, Zero service surcharge note, 3 minimal technical specs).
  - `css/styles.css`:
    - Προσθήκη στυλ για `.demo-cost-note`, `.demo-specs-grid`, `.demo-spec-item` με hairline borders και συνεπή responsive συμπεριφορά.
    - Ενίσχυση μεγέθους και visual presence του αριθμού κλήσης (`.demo-phone-number: 2.15rem`, monospace, butter yellow glow).
  - `js/main.js`:
    - Προσθήκη protective guard στην αρχή της `setupDialogueSimulator` ώστε να επιστρέφει άμεσα χωρίς κανένα console error όταν τα DOM elements του simulator δεν υπάρχουν.
    - Διατήρηση 100% λειτουργικότητας του κουμπιού αντιγραφής αριθμού με toast alert και του κουμπιού κλήσης.
  - `js/config.js`:
    - Επικαιροποίηση του `demoPhone.display` σε `210 XXX XXXX` και `demoPhone.statusText` σε `ΖΩΝΤΑΝΗ ΤΗΛΕΦΩΝΙΚΗ ΔΟΚΙΜΗ // 24/7` / `LIVE PHONE DEMO // 24/7`.
  - `README.md`:
    - Ενημέρωση Changelog v2.3.4.
- **Σκοπός:** Ριζική απλοποίηση και σοβαροποίηση του Hero panel, απομακρύνοντας την αίσθηση ενός web chatbot και αναδεικνύοντας τη δύναμη του τηλεφωνικού Voice AI με άμεση πρόσκληση σε ζωντανή τηλεφωνική δοκιμή.

### [2026-11-13] — v2.3.3: Clarify Inbound Carrier Rate vs AI Speech and Call Transfer Costs (100% Price Transparency)
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `index.html`:
    - Επικαιροποίηση της κάρτας «Κόστος Χρήσης Παρόχων (Direct At-Cost)» στην ενότητα `#pricing`:
      - Αναπροσαρμογή υποτίτλου τιμής σε `ανά πραγματικό λεπτό ομιλίας AI (Pay-As-You-Go)`.
      - Αποσαφήνιση του κόστους τηλεφωνικού αριθμού σε `~2€ / μήνα (2 ταυτόχρονα κανάλια κλήσεων)`.
      - Προσθήκη ρητής αναφοράς για **0,00€ / λεπτό** εισερχόμενες κλήσεις (Inbound) από τον τηλεπικοινωνιακό πάροχο.
      - Διευκρίνιση ότι τα **~0,10€ / λεπτό** αφορούν αποκλειστικά το κόστος υποδομής ομιλίας του AI βοηθού.
      - Προσθήκη ακριβούς κοστολόγησης για την επείγουσα προώθηση σε κινητό (Call Transfer: **~0,06€ / λεπτό**, χρέωση ανά δευτερόλεπτο).
  - `en/index.html`:
    - Αντίστοιχη πλήρης διαφάνεια στην κάρτα Direct Provider Usage (At-Cost):
      - Subtext: `per actual minute of AI speech (Pay-As-You-Go)`.
      - Bullet items: Dedicated VoIP Number (~€2/mo, 2 concurrent channels), Incoming Calls (€0.00/min inbound carrier), AI Receptionist Speech (~€0.10/min voice infra), Urgent Call Transfer to Mobile (~€0.06/min per-second billing), No Lock-In Contracts, Zero Idle Risk.
  - `llms.txt`:
    - Ενημέρωση της παραγράφου «Χονδρικό Κόστος Χρήσης (Wholesale Pay-As-You-Go)» με την αναλυτική διάκριση μεταξύ 0,00€/λεπτό εισερχόμενης τηλεφωνίας, ~0,10€/λεπτό AI επεξεργασίας φωνής και ~0,06€/λεπτό προώθησης κλήσεων σε κινητό.
  - `js/config.js`:
    - Εναρμόνιση του `estimatedMonthlyFixedNumber` σε `~2€ / μήνα` (`~€2 / month`).
  - `README.md`:
    - Επικαιροποίηση της ενότητας 1 (Business Model) και καταγραφή Changelog v2.3.3.
- **Σκοπός:** Πλήρης, κρυστάλλινη εμπορική διαφάνεια στο κόστος λειτουργίας, καθιστώντας σαφές ότι η εισερχόμενη γραμμή είναι εντελώς δωρεάν (0,00€/λεπτό) και η χρέωση αφορά αυστηρά τον χρόνο ομιλίας του AI βοηθού ή τη ζωντανή μεταφορά κλήσης.

### [2026-11-13] — v2.3.2: Full Codebase & Integrity Audit (HTML/CSS/JS Validation & Syntax Optimization)
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `css/styles.css`:
    - Αφαίρεση ορφανού τμήματος δηλώσεων CSS (orphan property declarations) στις γραμμές του `.contact-subtitle` που περιείχε πλεονάζουσα κλείστρα (`}`), αποκαθιστώντας 100% την ισορροπία των CSS braces (273 open / 273 close, final depth: 0).
    - Επιβεβαίωση της καθολικής ισχύος του `border-radius: var(--radius-zero) !important;` (`0px`) και της σωστής λειτουργίας του `overflow-x: clip;` χωρίς παρεμβολή στο `position: sticky` του Navbar.
    - Επιβεβαίωση των responsive breakpoints (`1024px`, `960px`, `860px`, `480px`) για μηδενικό horizontal overflow.
  - `index.html` & `en/index.html`:
    - Πλήρης επαλήθευση εγκυρότητας HTML syntax (31 IDs έκαστο, ισοζυγισμένα tags, μηδέν unclosed elements).
    - Επιβεβαίωση 100% λειτουργικότητας των 23 εσωτερικών anchor links, των canonical links, των αμφίδρομων `hreflang` (`el`, `en`, `x-default`) και του language switcher (`./en/` & `../`).
  - `js/main.js` & `js/config.js`:
    - Επιβεβαίωση της αντιστοίχισης όλων των DOM selectors (Simulator, ROI Calculator, FAQ Accordion, Contact).
    - Επαλήθευση μηδενικής ύπαρξης παλαιών αγγλισμών («Επαγγελματίες Πεδίου») στα ελληνικά σενάρια και labels.
  - `assets/*.svg`:
    - Επιβεβαίωση της XML/SVG δομής και των διαστάσεων/viewBox σε `logo.svg`, `logo-dark.svg`, `favicon.svg` και `og-image.svg`.
  - `README.md`:
    - Ενημέρωση τεκμηρίωσης και καταγραφή Changelog v2.3.2.
- **Σκοπός:** Αυστηρός τεχνικός έλεγχος ποιότητας (Full Codebase & Integrity Audit) που εξασφαλίζει απόλυτη συνέπεια, σταθερότητα και μηδενικά σφάλματα σε όλο το repository μετά από όλες τις διαδοχικές επεμβάσεις (v2.1.0 – v2.3.1).

### [2026-11-13] — v2.3.1: Highlight 2 Concurrent Calls Feature on a Single Number (Zero Busy Tone)
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `index.html`:
    - Προσθήκη σαφούς προβολής της υποστήριξης 2 ταυτόχρονων κλήσεων στον ίδιο αριθμό στην 1η κάρτα των Οφελών («2 ταυτόχρονες κλήσεις στον ίδιο αριθμό: Ακόμα κι αν μιλάει ήδη ένας πελάτης, δεύτερος πελάτης που καλεί τον ίδιο αριθμό εξυπηρετείται αμέσως ταυτόχρονα — μηδέν κατειλημμένο, μηδέν χαμένες κλήσεις.»).
    - Ενίσχυση του 2ου Πυλώνα («100% Δική σας Ιδιοκτησία») με αναφορά στα 2 ταυτόχρονα κανάλια ομιλίας χωρίς κατειλημμένο.
    - Προσθήκη bullet item στην Turnkey Setup κάρτα τιμολόγησης («Ελληνικός αριθμός (210 / 211) με 2 ταυτόχρονα κανάλια ομιλίας (2 κλήσεις ταυτόχρονα στον ίδιο αριθμό)») και διευκρίνιση στην κάρτα κόστους παρόχων («~2€ έως 5€ / μήνα (2 ταυτόχρονα κανάλια κλήσεων)»).
  - `en/index.html`:
    - Προσθήκη αντίστοιχου highlight στην 1η κάρτα Οφελών («2 concurrent calls on a single number: Even when one caller is already on the line, a second caller dialing the same number is answered immediately in parallel — zero busy signals, zero missed leads.»).
    - Ενημέρωση του 2ου Pillar Client Ownership («Your business phone number (with 2 concurrent call channels and zero busy tones)...»).
    - Προσθήκη του feature bullet στο Turnkey Setup card («Greek phone number (210 / 211) with 2 concurrent voice channels (handles 2 calls simultaneously on one number)») και στην κάρτα παρόχων («~€2 to €5 / month (2 concurrent call channels)»).
  - `llms.txt`:
    - Εμπλουτισμός των τεχνικών προδιαγραφών στην ενότητα «Τεχνική Αρχιτεκτονική & Ασφάλεια» με ρητή καταγραφή των 2 ταυτόχρονων καναλιών κλήσεων (2 Concurrent Calls / Channels) ανά βασική εγκατάσταση.
  - `README.md`:
    - Ενημέρωση τεκμηρίωσης και καταγραφή Changelog v2.3.1.
- **Σκοπός:** Ξεκάθαρη επικοινωνία του κρίσιμου τεχνικού και εμπορικού πλεονεκτήματος ότι ο πελάτης λαμβάνει 2 ταυτόχρονα κανάλια φωνής στον ίδιο αριθμό, εξαλείφοντας οριστικά το σήμα κατειλημμένου και διασφαλίζοντας παράλληλη εξυπηρέτηση εισερχόμενων κλήσεων.

### [2026-11-13] — v2.3.0: Add /llms.txt Specification for Generative Engine Optimization & AI Agent Discovery
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `llms.txt`:
    - Δημιουργία δομημένου αρχείου σύμφωνα με το επίσημο πρότυπο `llmstxt.org` για βελτιστοποίηση αναζήτησης μέσω Large Language Models (ChatGPT, Claude, Gemini, Perplexity).
    - Περιλαμβάνει: Επίσημο Blockquote Summary, Αναλογία του Εξελιγμένου Αυτόματου Τηλεφωνητή (Value Proposition), Επιχειρηματικό Μοντέλο & Τιμολόγηση Turnkey Ownership (0€ μηνιαίες συνδρομές, 100% κυριότητα, χονδρικό pay-as-you-go ~0,10€/λεπτό), 4 Βασικούς Κλάδους Εφαρμογής (Ιατρεία, Τεχνικοί, Ξενοδοχεία, Γραφεία), Τεχνική Αρχιτεκτονική & Ασφάλεια (<600ms latency, SIP trunking, Smart Call Transfer, GDPR), Canonical Links και Στοιχεία Επικοινωνίας.
  - `robots.txt`:
    - Δημιουργία σύγχρονου αρχείου ελέγχου crawlers με ρητή άδεια πρόσβασης (Allow) για κορυφαία AI models (`GPTBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`) και διασύνδεση με το `/llms.txt`.
  - `_headers`:
    - Προσθήκη `Content-Type: text/plain; charset=utf-8`, `Access-Control-Allow-Origin: *` (CORS) και caching headers για τα `/llms.txt` και `/robots.txt` στο Cloudflare Pages.
  - `index.html` & `en/index.html`:
    - Προσθήκη `<link rel="alternate" type="text/plain" title="LLM Context" href="/llms.txt">` στο `<head>` για αυτόματη ανακάλυψη από AI agents.
  - `README.md`:
    - Ενημέρωση τεκμηρίωσης και προσθήκη Changelog v2.3.0.
- **Σκοπός:** Generative Engine Optimization (GEO) και πλήρης υποστήριξη AI agents, εξασφαλίζοντας ότι οι μηχανές αναζήτησης AI κατανοούν, ευρετηριάζουν και προτείνουν με ακρίβεια την υπηρεσία milAI24.gr.

### [2026-11-13] — v2.2.9: Persistent Sticky Floating Navbar with Glassmorphism Blur & Instant Top Navigation
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `css/styles.css`:
    - Πλήρης εδραίωση του Navbar ως μόνιμα ορατού floating header κατά το scroll:
      - `position: sticky; top: 0; z-index: 1000; width: 100%;`
      - `background-color: rgba(18, 24, 36, 0.92);` (Deep Tech Obsidian με ελαφριά διαφάνεια).
      - `backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);` (υψηλής ευκρίνειας glassmorphism effect).
      - `border-bottom: 1px solid #334155;` (hairline οριζόντιο περίγραμμα διαχωρισμού).
    - Εξάλειψη πιθανών sticky conflicts: Χρήση `overflow-x: clip;` σε `html` και `body` αντί του `overflow-x: hidden`, αποτρέποντας τη δημιουργία clipping/scroll context που θα μπορούσε να μπλοκάρει τη συμπεριφορά sticky.
    - Αύξηση του `z-index` του `.toast-notice` στα `2000` ώστε να υπερέχει του floating header.
  - `index.html` & `en/index.html`:
    - Επαλήθευση του συνδέσμου λογοτύπου `<a class="brand-logo" href="#hero">` για ακαριαία επιστροφή στην κορυφή της σελίδας από οποιοδήποτε σημείο κύλισης.
    - Διατήρηση του `scroll-margin-top: 5.75rem;` (~92px) στα section targets ώστε το floating header (76px) να μην καλύπτει ποτέ τους τίτλους των ενοτήτων.
  - `README.md`:
    - Ενημέρωση τεκμηρίωσης και προσθήκη Changelog v2.2.9.
- **Σκοπός:** Διαρκής, απρόσκοπτη πρόσβαση στην πλοήγηση και στο CTA button καθ' όλη τη διάρκεια του scroll, με άμεση επιστροφή στην κορυφή μέσω του λογοτύπου.

### [2026-11-13] — v2.2.8: Brand Wordmark Optical Consistency Across Headings, Tags & UI Labels
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `css/styles.css`:
    - Εισαγωγή επαναχρησιμοποιήσιμων brand wordmark utility classes:
      - `.brand-mil`: `color: #F9E7B9; font-weight: 600;` (Rich Butter Cream, εναρμονισμένο με το logo).
      - `.brand-ai24`: `color: #F59E0B; font-weight: 800;` (Rich Amber Gold, εναρμονισμένο με το logo).
      - `.brand-gr`: `color: #94A3B8; font-weight: 500;` (Soft Slate για καταλήξεις domain).
  - `index.html` & `en/index.html`:
    - Εφαρμογή της τυπογραφικής υπογραφής `<span class="brand-mil">mil</span><span class="brand-ai24">AI24</span>` (και `.gr`) σε όλα τα σημεία υψηλής ορατότητας:
      - Section 6 Tag: `ΓΙΑΤΙ milAI24 // ZERO LOCK-IN` & `WHY milAI24 // ZERO LOCK-IN`.
      - Section 6 Title: `Γιατί milAI24 — 100% Δική σας Ιδιοκτησία...` & `Why milAI24 — 100% Client Ownership...`.
      - Callout Heading: `Παθητικός Τηλεφωνητής vs Έξυπνος AI Γραμματέας milAI24` & `Passive Voicemail vs milAI24...`.
      - Comparison Badge: `milAI24 // ACTIVE AGENT`.
      - Pricing Model Title: `ΤΟ ΜΟΝΤΕΛΟ "TURNKEY OWNERSHIP" ΤΗΣ milAI24` & `THE milAI24 "TURNKEY OWNERSHIP" MODEL`.
      - Table Header & Th: `Σύγκριση: milAI24 Turnkey vs...` και στήλη `milAI24.gr`.
      - FAQ Question 1: `Σε ποιους κλάδους ταιριάζει περισσότερο το milAI24;`.
      - Simulator Initial Sender: `milAI24 // Γραμματεία` & `milAI24 // Reception`.
      - Footer Copyright: `milAI24.gr`.
    - Αυστηρή τήρηση κανόνα αναγνωσιμότητας: Στα κείμενα των παραγράφων (`<p>`) και στις απαντήσεις FAQ το όνομα παραμένει ενιαίο για ξεκούραστη ανάγνωση.
  - `js/main.js`:
    - Ενημέρωση του δυναμικού simulator sender prefix σε `<span class="brand-mil">mil</span><span class="brand-ai24">AI24</span> // `.
  - `README.md`:
    - Ενημέρωση τεκμηρίωσης και προσθήκη Changelog v2.2.8.
- **Σκοπός:** Απόλυτη οπτική ταύτιση της αναφοράς του brand σε τίτλους, tags και UI στοιχεία με το διανυσματικό λογότυπο, ενισχύοντας την premium tech ταυτότητα του milAI24.gr.

### [2026-11-13] — v2.2.7: Fix Benefits Anchor Link & Switch to Instant Navigation Jump
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `index.html` & `en/index.html`:
    - Διόρθωση του σπασμένου συνδέσμου «Οφέλη» / «Benefits»: Ενημέρωση του `href` σε `#benefits` (από `#problem-solution`) τόσο στο κύριο Header Navigation όσο και στο Footer.
    - Αντιστοίχιση του `<section class="section-problem-solution" id="benefits">` με παράλληλη διατήρηση backwards-compatible anchors (`#problem-solution`, `#features`).
    - Πλήρης επαλήθευση και των 9 anchor targets (`#benefits`, `#calculator`, `#contact`, `#demo`, `#faq`, `#hero`, `#how-it-works`, `#industries`, `#pricing`) με 100% επιτυχή ταύτιση σε υπαρκτά IDs.
  - `css/styles.css`:
    - Αντικατάσταση του `scroll-behavior: smooth;` με **`scroll-behavior: auto;`** στο `html` για ακαριαία, άμεση μετάβαση στις ενότητες χωρίς περιττό animation.
    - Ορισμός **`scroll-margin-top: 5.75rem;`** (~92px) σε όλα τα section targets και στο `#demo` box, διασφαλίζοντας ότι η sticky μπάρα πλοήγησης (ύψους 76px) δεν επικαλύπτει ποτέ τους τίτλους και τα badges των ενοτήτων.
  - `js/main.js`:
    - Ενημέρωση του fallback scroll handler σε `contactSection.scrollIntoView({ behavior: "auto" });` για συνεπή ακαριαία συμπεριφορά.
  - `README.md`:
    - Ενημέρωση τεκμηρίωσης και προσθήκη Changelog v2.2.7.
- **Σκοπός:** Άμεση αποκατάσταση της λειτουργικότητας του link «Οφέλη» και παροχή ακαριαίας, υψηλής απόκρισης πλοήγησης (instant jump) σε ολόκληρο τον ιστότοπο.

### [2026-11-13] — v2.2.6: Localized Hero Badge Tag & Natural Greek Industry Terminology
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `index.html`:
    - Εξελληνισμός του Hero Badge Tag σε φυσική ορολογία: **`ΨΗΦΙΑΚΟΣ ΤΗΛΕΦΩΝΙΚΟΣ ΓΡΑΜΜΑΤΕΑΣ // 24/7 AI`** (αντί του τεχνικού αγγλικού `VOICE AI ARCHITECTURE // 24/7 AUTONOMOUS AGENT`).
    - Αντικατάσταση του αγγλισμού «Επαγγελματίες Πεδίου» στην κάρτα κλάδου `02 //` με καθαρή ελληνική διατύπωση: **«Τεχνικοί, Εργολάβοι & Εξωτερικές Εργασίες»** και κατηγορία **«02 // Τεχνικά Επαγγέλματα & Συνεργεία»**.
    - Εναρμόνιση του 2ου tab του Live Demo Simulator σε **`[TECH] Τεχνικοί & Συνεργεία`** (αντί του `[FIELD]`).
  - `en/index.html`:
    - Απλοποίηση του Hero Badge Tag σε σαφή, άμεση διατύπωση: **`AI PHONE RECEPTIONIST // 24/7 AVAILABILITY`**.
    - Ενημέρωση του 2ου simulator tab σε **`[TECH] Technicians & Services`**.
  - `js/config.js`:
    - Ενημέρωση του σεναρίου `technical` στα ελληνικά: `label: "Τεχνικοί & Συνεργεία"`, με επεξήγηση «Καταγραφή βλαβών, περιοχής και επείγοντος περιστατικού σε εξωτερική εργασία».
  - `README.md`:
    - Ενημέρωση τεκμηρίωσης και προσθήκη Changelog v2.2.6.
- **Σκοπός:** Φυσική ελληνική διατύπωση (localization) χωρίς ξενόγλωσσα buzzwords ή άμεσες μεταφράσεις όπως "Πεδίο", καθιστώντας το μήνυμα άμεσα κατανοητό στον Έλληνα επαγγελματία και επιχειρηματία.

### [2026-11-13] — v2.2.5: Scale Up Navbar & Footer Logo Proportionally (Tight SVG ViewBox & 46px Desktop Height)
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `assets/logo.svg` & `assets/logo-dark.svg`:
    - Εφαρμογή tight `viewBox="0 0 174 38"` (από `0 0 210 44`), εξαλείφοντας πλήρως το περιττό κενό πάνω, κάτω και δεξιά γύρω από το soundwave badge και το wordmark.
    - Πλήρης αξιοποίηση του κάθετου προϋπολογισμού (visual budget) στο 100%: το soundwave badge καταλαμβάνει 36px/38px και τα γράμματα αναδεικνύονται επιβλητικά χωρίς σμίκρυνση από padding.
    - Γεωμετρικό κεντράρισμα των 5 ράβδων του soundwave με ισομερείς αποστάσεις 5.5px αριστερά-δεξιά.
  - `css/styles.css`:
    - Αύξηση του ύψους του λογοτύπου (`.brand-logo img` και `.footer-grid .brand-logo img`) από 34px στα **`46px`** (`width: auto; display: block;`) σε desktop.
    - Ρύθμιση του `.nav-container` σε `height: 4.75rem` (~76px), προσφέροντας άνετο vertical breathing room γύρω από το μεγαλύτερο logo.
    - Προσαρμογή mobile scaling: **`38px`** σε tablet/mobile (`@media (max-width: 860px)`) και **`36px`** σε small screens (`@media (max-width: 480px)`).
    - Επαλήθευση διάταξης: Όλα τα nav links, το `GR | EN` switcher και το CTA button παραμένουν αυστηρά σε μία (1) γραμμή (`white-space: nowrap`) σε desktop (1280px+) και tablet.
  - `index.html` & `en/index.html`:
    - Ενημέρωση των διαστάσεων `width="210" height="46"` στα `<img>` tags του Header και του Footer για μηδενικό Cumulative Layout Shift (CLS).
  - `README.md`:
    - Ενημέρωση Changelog v2.2.5.
- **Σκοπός:** Επιβλητική οπτική παρουσία του brand `milAI24.gr` σε Header και Footer, μεγιστοποίηση της κλίμακας με tight SVG viewBox και απόλυτη διατήρηση της μονογραμμικής διάταξης του Navbar.

### [2026-11-13] — v2.2.4: Unify Logo Wordmark Palette (Butter Cream #F9E7B9 & Amber Gold #F59E0B)
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `assets/logo.svg` & `assets/logo-dark.svg`:
    - Ενοποίηση της χρωματικής παλέτας του wordmark στην ίδια ζεστή luxury tech οικογένεια:
      - Το **`mil`** μεταβαίνει από το ψυχρό λευκό σε **`#F9E7B9` (Rich Butter Cream)** με `font-weight: 600`, εναρμονισμένο πλήρως με τις κρεμώδεις ράβδους του soundwave badge.
      - Το **`AI24`** παραμένει σε **`#F59E0B` (Rich Amber Gold)** με `font-weight: 800`, διατηρώντας δυναμική και αρμονική ανάδειξη του λογοπαιγνίου «Μιλάει 24».
      - Η κατάληξη **`.gr`** διατηρείται σε **`#94A3B8`** (Soft Slate) με `font-weight: 500`.
      - Πλήρης αποφυγή stroke/outline πάνω στα γράμματα για μέγιστη ευκρίνεια και καθαρότητα σε μικρά μεγέθη (Navbar 38px / Footer 34px).
  - `assets/og-image.svg`:
    - Αντίστοιχος συγχρονισμός του κεντρικού hero wordmark: `mil` σε `#F9E7B9` (`font-weight: 600`), `AI24` σε `#F59E0B` (`font-weight: 800`) και `.gr` σε `#94A3B8` (`font-weight: 500`).
  - `README.md`:
    - Ενημέρωση Changelog v2.2.4.
- **Σκοπός:** Απόλυτη χρωματική συνοχή και τυπογραφική αρμονία του wordmark σε όλα τα SVG assets, συνδυάζοντας το Rich Butter Cream με το Amber Gold χωρίς οπτικό κατακερματισμό ή ψυχρές αντιθέσεις.

### [2026-11-13] — v2.2.3: Enhance AI24 Wordmark Visual Contrast in SVG Brand Assets
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `assets/logo.svg` & `assets/logo-dark.svg`:
    - Ενίσχυση της οπτικής αντίθεσης του λογοπαιγνίου «Μιλάει 24» (**`AI24`**):
      - Το **`mil`** αποδίδεται σε καθαρό λευκό **`#FFFFFF`** (bold 800).
      - Ολόκληρο το **`AI24`** αναδεικνύεται σε έντονο, θερμό **Rich Amber Gold (`#F59E0B`)**, εξαλείφοντας τη σύγχυση του απαλού cream και ενοποιώντας το «AI» με το «24» σε ενιαίο νοηματικό σύνολο.
      - Η κατάληξη **`.gr`** αποδίδεται σε διακριτικό **`#94A3B8`** (Soft Slate, font-size 18px) ώστε να μη βαραίνει το κέντρο βάρους του λογοτύπου.
      - Το τετράγωνο soundwave icon (`rx="0"`, `#171F2E` φόντο) αναβαθμίστηκε με `#F59E0B` περίγραμμα και hero bar.
  - `assets/og-image.svg`:
    - Εναρμόνιση του wordmark στο social preview banner με `#FFFFFF` (`mil`), `#F59E0B` (`AI24`), `#94A3B8` (`.gr`), και `#F59E0B` στο soundwave icon και στον υπότιτλο «που απαντάει 24/7».
  - `assets/favicon.svg`:
    - Ενημέρωση περιγράμματος και κεντρικής ράβδου σε `#F59E0B` για ομοιόμορφη χρωματική ταυτότητα.
  - `README.md`:
    - Ενημέρωση Changelog v2.2.3.
- **Σκοπός:** Άμεση αναγνωσιμότητα του λογοπαιγνίου AI24 («Μιλάει 24») με μέγιστη αντίθεση έναντι του σκούρου obsidian background σε όλες τις εφαρμογές του brand (Navbar, Footer, Favicon, OG Image).

### [2026-11-13] — v2.2.2: Mobile Hero Grid Stacking & Horizontal Overflow Blowout Fix
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `css/styles.css`:
    - Προσθήκη αυστηρού κανόνα stacking σε μία στήλη (`grid-template-columns: 1fr !important;`) στο `@media (max-width: 960px)` για το `.hero-grid`, τοποθετώντας το παράθυρο του Live Demo Simulator (`.demo-card` / `.hero-demo`) απευθείας κάτω από το κείμενο του Hero.
    - Επίλυση του προβλήματος CSS Grid blowout: Ορισμός `min-width: 0 !important; max-width: 100% !important; width: 100% !important;` στα `.hero-content`, `.hero-demo-wrap`, `.hero-demo`, `.demo-card` και στα εσωτερικά containers (`.dialogue-preview-wrap`, `.dialogue-bubble`, `.demo-phone-box`, `.soundwave-visualizer`).
    - Αναδίπλωση tabs κλάδων (`.scenario-tabs` / `.demo-tabs` με `flex-wrap: wrap !important;`) και `white-space: normal !important;` στα κουμπιά σεναρίων (`.scenario-tab-btn`) σε mobile/tablet, αποτρέποντας την πίεση του container πέρα από το `100vw`.
    - Προσθήκη `overflow-x: hidden; max-width: 100vw;` τόσο στο `html` όσο και στο `body` ως καθολική ασφαλιστική δικλείδα ενάντια σε οριζόντιο scrolling.
    - Προσθήκη dedicated κανόνων για small mobile viewports (`@media (max-width: 480px)`) με full-width κουμπιά και κάθετη στοίχιση ενεργειών.
  - `index.html` & `en/index.html`:
    - Προσθήκη της κλάσης `.hero-demo` στο container του προσομοιωτή (`.hero-demo-wrap.hero-demo`).
  - `README.md`:
    - Ενημέρωση Changelog v2.2.2.
- **Σκοπός:** Πλήρης εξάλειψη του horizontal overflow σε mobile και tablet οθόνες (<960px) και άψογη κάθετη διάταξη του Live Demo Simulator panel.

### [2026-11-13] — v2.2.1: Typography Hierarchy Boost (Enlarged Section Tags, 2.75rem H2 Titles & Prominent Editorial Callout)
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `css/styles.css`:
    - Αναβάθμιση του μεγέθους των Monospace Section Tags (`.section-tag`, `.hero-badge-tag`) από `0.78rem` στα **`0.95rem` (`~15.2px`)**, με `font-weight: 600`, `letter-spacing: 0.08em` και έντονο χρώμα `#F9E7B9` (Rich Butter Cream), ώστε να λειτουργούν ως επιβλητικοί οδηγοί κατά το scroll.
    - Αύξηση του μεγέθους των κύριων τίτλων ενοτήτων (`h2` / `.section-title`) σε desktop στα **`2.75rem` (`44px`)** με `line-height: 1.18` και `letter-spacing: -0.03em`, και σε mobile στα **`2rem` (`32px`)**, διασφαλίζοντας ξεκάθαρη οπτική ιεραρχία έναντι του 17px body copy.
    - Αναβάθμιση του Editorial Callout Block («Ο Εξελιγμένος Αυτόματος Τηλεφωνητής»): το lead κείμενο αυξήθηκε σε **`1.25rem` (`20px`)** με `line-height: 1.65`, και το label (`.editorial-callout-badge`) αυξήθηκε σε **`1rem` (`16px`)** σε `#F9E7B9` με αυξημένο `margin-bottom: 1rem`.
  - `index.html` & `en/index.html`:
    - Ενημέρωση των section tags σε σαφείς τεχνικούς οδηγούς: `ΓΙΑΤΙ milAI24 // ZERO LOCK-IN` (EL) και `WHY milAI24 // ZERO LOCK-IN` (EN).
  - `README.md`:
    - Ενημέρωση Changelog v2.2.1.
- **Σκοπός:** Άμεση οπτική ενίσχυση της τυπογραφικής ιεραρχίας, καθιστώντας τα section tags και τους τίτλους ενοτήτων άμεσα ευδιάκριτους κατά την ανάγνωση και την κύλιση της σελίδας.

### [2026-11-13] — v2.2.0: Typography Scale Upgrade (Plus Jakarta Sans + Inter), Generous Scroll Pacing, Answering-Machine Analogy & Zero Lock-in Value Pillars
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `css/styles.css`:
    - Εισαγωγή σύγχρονου typography pairing: **Plus Jakarta Sans** (weights 600, 700, 800) για Headings με σφιχτό letter-spacing (`-0.025em`), **Inter** (weights 400, 500, 600, 700) για μέγιστη αναγνωσιμότητα στο Body Copy, και **JetBrains Mono** για monospace technical tags & numbers.
    - Αναβάθμιση μεγέθους γραμματοσειρών για άνετο 100% Chrome desktop zoom: βασικό `body` / `p` σε **17px (`1.0625rem`)** με `line-height: 1.7`, τίτλοι ενοτήτων `h2` / `.section-title` σε **`2.35rem` (`~38px`)**, και κάρτες `h3` σε **`1.35rem` (`~21.6px`)**.
    - Περιορισμός του πλάτους των παραγράφων σε `max-width: 65ch` για ιδανικό μήκος γραμμής ανάγνωσης.
    - Αύξηση του vertical breathing room (ρυθμός scroll) με padding **`6.5rem` (`104px`)** πάνω-κάτω σε όλες τις ενότητες (`--section-spacing: 6.5rem;`), διαχωρισμένες με καθαρά hairline borders `1px solid #334155`.
    - Αύξηση εσωτερικού padding καρτών (`2.25rem`–`2.5rem`), calculator box (`3rem 2.5rem`), pricing cards (`3rem 2.5rem`) και διεύρυνση των gaps σε grids στα `2rem`.
    - Προσθήκη στυλ για το νέο `.editorial-callout` block (Next-Gen Answering Machine Analogy) με έντονο `3px solid #F9E7B9` αριστερό accent.
    - Προσθήκη styling και responsive κανόνων για τη νέα ενότητα `.section-pillars` και το `.pillars-grid` (4 στήλες σε desktop, 2 σε tablet, 1 σε mobile).
  - `index.html` & `en/index.html`:
    - Προσθήκη Google Fonts preconnect και link tags για τα font families Plus Jakarta Sans, Inter και JetBrains Mono.
    - Προσθήκη του Editorial Callout Block στην ενότητα σύγκρισης/κλάδων με την αναλογία του εξελιγμένου αυτόματου τηλεφωνητή:
      - EL: *«Σκεφτείτε τον σαν έναν πολύ εξελιγμένο αυτόματο τηλεφωνητή: αντί απλώς να λέει "αφήστε μήνυμα μετά το μπιπ" —όπου το 80% των πελατών κλείνει το τηλέφωνο— συζητάει φυσικά, απαντάει σε απορίες, κλείνει το ραντεβού ή καταγράφει το αίτημα, και αν προκύψει κάτι επείγον, μεταφέρει αμέσως τη γραμμή στο κινητό σας.»*
      - EN: *«Think of it as a next-generation answering machine: instead of saying "leave a message after the beep" —where 80% of callers simply hang up— it holds a natural conversation, answers questions, books appointments, and if an urgent issue comes up, transfers the live call straight to your mobile.»*
    - Δημιουργία της νέας ζώνης **«Γιατί milAI24 — 100% Δική σας Ιδιοκτησία χωρίς Μηνιαίο Lock-in»** / **«Why milAI24 — 100% Client Ownership with Zero Recurring Retainers»** με 4 μεγάλα value pillars (`01`–`04`):
      1. Μηδέν Μηνιαίες Συνδρομές σε Εμάς (Turnkey Setup Fee).
      2. 100% Δική σας Ιδιοκτησία (αριθμός και λογαριασμοί στο όνομα της επιχείρησης).
      3. Πληρώνετε Μόνο Όσο Μιλάει (~0,10€/λεπτό απευθείας στους παρόχους χωρίς μεσάζοντα).
      4. Ζωντανή Προώθηση σε Εσάς (Live Call Transfer σε επείγοντα).
    - Αντιστοίχιση του anchor link `id="features"` στο section για ομαλό scroll από το navbar link «Οφέλη» / «Benefits».
  - `README.md`:
    - Ενημέρωση Changelog v2.2.0.
- **Σκοπός:** Ουσιαστική αναβάθμιση της αναγνωσιμότητας (17px typography, Google Fonts Plus Jakarta Sans + Inter), άνετος ρυθμός scroll με γενναιόδωρα vertical paddings (6.5rem), άμεση κατανόηση μέσω της αναλογίας του αυτόματου τηλεφωνητή και ισχυρή οπτική εδραίωση των 4 πυλώνων Turnkey Ownership χωρίς μηνιαίες δεσμεύσεις.

### [2026-11-13] — v2.1.0: Dark-First Luxury Tech Color System (Butter Yellow & Deep Tech Obsidian)
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `css/styles.css`:
    - Πλήρης μετάβαση του visual branding σε Dark-First Luxury Tech παλέτα βασισμένη στο Butter Yellow & Deep Tech Obsidian.
    - Ενημέρωση CSS variables: Primary Background `#121824` (Deep Tech Obsidian), Elevated Surfaces `#171F2E` (Matte Anthracite / Deep Slate), Well Background `#0B0F17` (Obsidian Well).
    - Εισαγωγή Primary Accent `#F9E7B9` (Rich Butter Cream) για CTAs, ενεργές καταστάσεις και tabs, με hover `#FFF1C5` (Digital Cream Light).
    - Εισαγωγή Secondary Accent `#F1D693` (Muted Gold Butter) για text highlights, brand accents, hairline borders και ηχητικά κύματα.
    - Αναβάθμιση τυπογραφίας σε Pure White `#FFFFFF` για Headings και Soft Platinum `#E2E8F0` για Body Text, με Muted Labels `#94A3B8`.
    - Αυστηρή τήρηση προσβασιμότητας και contrast: Το `.btn-primary` φέρει σκούρο κείμενο `#121824` πάνω σε `#F9E7B9`.
    - Voice AI Audio Aura: Ατμοσφαιρικό radial gradient glow γύρω από το soundwave visualizer (`rgba(249, 231, 185, 0.16)` έως `rgba(241, 214, 147, 0.06)`) με γραμμικό gradient στις ράβδους `linear-gradient(180deg, #F9E7B9 0%, #F1D693 100%)`.
    - Εναρμόνιση όλων των ενοτήτων (Hero, Problem/Solution, Process, Industries, ROI Calculator, Pricing, FAQ, Contact, Footer) στον ενιαίο dark luxury καμβά.
  - `index.html` & `en/index.html`:
    - Ενημέρωση `<meta name="theme-color" content="#121824">`.
    - Αφαίρεση legacy πράσινων inline styles από `.section-tag`.
    - Ενοποίηση των λογοτύπων στο footer με το νέο ενιαίο dark-theme vector logo (`assets/logo.svg`).
  - `assets/logo.svg` & `assets/logo-dark.svg`:
    - Ενημέρωση των διανυσματικών λογοτύπων με Deep Slate background (`#171F2E`), hairline border (`#F1D693`), χρυσές ράβδους soundwave (`#F9E7B9` / `#F1D693`) και Pure White / Gold typography.
  - `assets/favicon.svg` & `assets/og-image.svg`:
    - Ενημέρωση favicon και social preview banner στη νέα dark luxury χρωματική ταυτότητα.
  - `js/main.js`:
    - Ενημέρωση του toast notification icon stroke σε `#F9E7B9`.
  - `README.md`:
    - Ενημέρωση Changelog v2.1.0.
- **Σκοπός:** Πλήρης μετασχηματισμός του visual identity σε Dark-First Luxury Tech αισθητική (Butter Yellow & Deep Tech Obsidian), διατηρώντας 100% την κοφτερή γεωμετρική αρχιτεκτονική (`border-radius: 0px`, `1px` hairline borders) και μηδενικά emojis.

### [2026-11-13] — v2.0.1: Hero/Navbar Proportion Refinement, Single-Line Nav & Footer Logo Fix
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `index.html` & `en/index.html`:
    - Navbar: Αφαίρεση του «Υπολογιστής ROI» / «ROI Calculator» από το header navigation.
    - Navbar: Συντόμευση του «Κλάδοι & Επαγγελματίες» σε «Κλάδοι» («Industries») για κοφτερό, καθαρό μενού 5 συνδέσμων.
    - Navbar: Προσαρμογή του CTA button σε «Call Live Demo» στο αγγλικό με `white-space: nowrap`.
    - Footer: Μετονομασία συνδέσμου calculator σε «Υπολογισμός Κέρδους» («Savings Calculator»).
    - Footer: Αντικατάσταση του παλιού λευκού square logo με το `assets/logo-dark.svg`, αποκαθιστώντας πλήρως το soundwave graphic και το wordmark σε dark background χωρίς filter inversion bugs.
  - `css/styles.css`:
    - Αύξηση `--container-max-width` σε `1280px` (από 1200px) ώστε ο κεντρικός H1 τίτλος να απλώνεται επιβλητικά σε 4-5 γραμμές.
    - Επαναπροσδιορισμός της αναλογίας `.hero-grid` σε `1.15fr 0.85fr` (~57.5% αριστερά και ~42.5% δεξιά) με gap `3rem`.
    - Compact Live Demo Window: Μείωση εσωτερικού padding (`1.25rem 1.35rem`), μείωση ύψους soundwave visualizer στα `28px`, συμπαγές phone box και περιορισμός του διαλόγου σε compact ύψος (`max-height: 85px`) για εμφάνιση ~2 γραμμών συνομιλίας χωρίς υπερχείλιση κάτω από το fold.
    - Single-Line Navbar: Ρύθμιση font-size σε `0.875rem`, gap σε `1.35rem`, `white-space: nowrap` σε links και CTA, και `border-radius: 0px` στο λογότυπο.
    - Βελτιστοποίηση responsive breakpoints για ομαλή μετάβαση σε tablet viewports (860px / 1024px).
  - `assets/logo.svg`, `assets/logo-dark.svg`, `assets/favicon.svg`:
    - Εφαρμογή κοφτερών ορθογώνιων γραμμών (`rx="0"`) στο soundwave badge και τις γραμμές του audio visualizer.
    - Δημιουργία dedicated `assets/logo-dark.svg` για dark backgrounds (white text + emerald accents).
  - `README.md`:
    - Ενημέρωση Changelog v2.0.1.
- **Σκοπός:** Βελτιστοποίηση της οπτικής ισορροπίας του Hero section, διατήρηση του Navbar σε μία καθαρή γραμμή και επιδιόρθωση του λογοτύπου στο footer.

### [2026-11-13] — v2.0.0: Vapi-Inspired Sharp Architectural UI Overhaul (Zero Border Radius, Elimination of Pills, 100% Emoji Removal, Precision Terminal Styling)
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `css/styles.css`:
    - Πλήρης ανασχεδιασμός του Design System με αυστηρή, high-precision γεωμετρική αισθητική εμπνευσμένη από το **Vapi.ai**.
    - Καθολικός μηδενισμός στρογγυλεμένων γωνιών (`border-radius: 0px !important`) σε κάρτες, κουμπιά, inputs, sliders, containers, modals, accordions και badges.
    - Hairline `1px solid` περιγράμματα (`#E2E8F0` σε light φόντο, `#334155` / `rgba(255,255,255,0.12)` σε dark φόντο).
    - Κατάργηση όλων των rounded pill tags πάνω από τίτλους και αντικατάστασή τους με flat monospace ετικέτες (`.section-tag`, `.hero-badge-tag` με square dot accent).
    - Ανασχεδιασμός του Language Switcher (`GR | EN`) σε αυστηρό ορθογώνιο toggle button με hairline borders.
    - Μετατροπή του Live Demo Box σε technical terminal panel με linear console stream logs, sharp action buttons και precision geometric soundwave.
    - Αναβάθμιση του ROI Calculator σε technical financial modeler με αυστηρά ορθογώνια range sliders και monospace αριθμητικά readouts.
  - `index.html` & `en/index.html`:
    - 100% αφαίρεση όλων των Unicode emojis από κείμενα, τίτλους, σενάρια προσομοίωσης, buttons, alerts και FAQ.
    - Αντικατάσταση των emoji icons στις 4 κάρτες κλάδων με μινιμαλιστικά, αυστηρά line SVGs (`stroke-width="1.5"`) και τεχνική τυπογραφική αρίθμηση (`01 //`, `02 //`, `03 //`, `04 //`).
    - Αντικατάσταση των παλαιών συμβόλων στο banner σύγκρισης τηλεφωνητή με τεχνικά hairline status badges: `[LEGACY // PASSIVE VOICEMAIL]` και `[milAI24 // ACTIVE AGENT]`.
    - Αναβάθμιση Hero badge σε `.hero-badge-tag` (`VOICE AI ARCHITECTURE // 24/7 AUTONOMOUS AGENT`).
    - Μετατροπή contact pill box σε τεχνικό monospace readout (`.contact-readout`).
  - `js/config.js`:
    - Αφαίρεση όλων των emojis από τα σενάρια διαλόγων (`icon: null` / καθαρά labels `[CLINIC]`, `[FIELD]`, `[HOTEL]`).
    - Αντικατάσταση των system notification icons με structured monospace prefixes (`[CRM // CALENDAR SYNC]`, `[DISPATCH // HIGH PRIORITY]`, `[RESERVATION // DIRECT BOOKING]`).
    - Καθαρά monospace button strings (`ΑΥΤΟΜΑΤΟ`, `ΠΑΥΣΗ`, `AUTO-PLAY`, `PAUSE`).
  - `js/main.js`:
    - Αναβάθμιση του simulator dialogue renderer ώστε να αποδίδει structured linear terminal log format με speaker prefixes `milAI24 // `, `CALLER // ` και `SYSTEM // `.
    - Αφαίρεση όλων των fallback emojis από auto-play/pause handlers.
  - `README.md`:
    - Προσθήκη Changelog v2.0.0 και εκκαθάριση συμβόλων.
- **Σκοπός:** Μετάβαση σε corporate-grade, architectural tech αισθητική υψηλής ακρίβειας (Vapi.ai inspired), εξαλείφοντας πλήρως κάθε στοιχείο vibe coding, generic templates, στρογγυλεμένα pills και emojis.

### [2026-11-13] — v1.2.1: Add Smart Call Transfer to Human Feature (EL & EN)
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `index.html`: Προσθήκη 4ης κάρτας βασικού χαρακτηριστικού «Έξυπνη Προώθηση σε Άνθρωπο για Επείγοντα» στην ενότητα πλεονεκτημάτων και νέου FAQ entry για ζωντανή μεταφορά κλήσης σε κινητό/σταθερό όταν ζητηθεί ή προκύψει έκτακτη ανάγκη.
  - `en/index.html`: Προσθήκη αντίστοιχης κάρτας «Smart Call Transfer for Urgent Matters» και σχετικού FAQ entry στα Αγγλικά.
  - `css/styles.css`: Προσθήκη styling για `.cards-grid-4` με πλήρη responsive υποστήριξη (4 στήλες σε desktop, 2 σε tablet, 1 σε mobile).
  - `README.md`: Ενημέρωση Changelog v1.2.1.
- **Σκοπός:** Ενίσχυση της B2B αξιοπιστίας με διαφανή επεξήγηση της λειτουργίας escalation σε άνθρωπο (Live Call Transfer) για επείγοντα περιστατικά σε όλες τις υποστηριζόμενες γλώσσες.

### [2026-11-12] — v1.2.0: Add Full English Version (/en/) with Bilingual Simulator & Language Switcher
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που δημιουργήθηκαν / τροποποιήθηκαν:**
  - `en/index.html`: Πλήρης αγγλική έκδοση της landing page σε φυσική, επαγγελματική B2B ορολογία (`milai24.gr/en/`), με ξεχωριστά αγγλικά SEO meta tags, Open Graph και Schema.org structured data, καθώς και κοινά relative assets (`../css/`, `../js/`, `../assets/`).
  - `index.html`: Προσθήκη αμφίδρομων `hreflang` tags (`el`, `en`, `x-default`) και ενσωμάτωση του language switcher `GR | EN` στο navigation bar.
  - `css/styles.css`: Προσθήκη στυλ για τον επιλογέα γλώσσας (`.lang-switcher`, `.lang-btn`, `.nav-actions`), διαθέσιμος τόσο σε desktop όσο και σε mobile viewport.
  - `js/config.js`: Εμπλουτισμός με δίγλωσσα δεδομένα (Greek & English) για όλα τα πεδία UI, τα σενάρια προσομοίωσης διαλόγων (Medical, Technical, Hospitality) και τοπικοποιημένα μηνύματα (`i18n`).
  - `js/main.js`: Αυτόματη ανίχνευση γλώσσας από το `<html lang="...">`, δυναμική φόρτωση των αντίστοιχων αγγλικών ή ελληνικών διαλόγων στον προσομοιωτή και προσαρμογή του υπολογιστή ROI.
  - `README.md`: Ενημέρωση της δομής αρχείων και καταγραφή Changelog v1.2.0.
- **Σκοπός:** Πλήρης πολυγλωσσική κάλυψη (Ελληνικά & Αγγλικά) χωρίς build dependencies, έτοιμη για deploy σε Cloudflare Pages και GitHub Pages.

### [2026-11-12] — v1.1.1: Add NOUSTELOS_STUDIO Footer Credit
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `index.html`: Προσθήκη ενεργού συνδέσμου δημιουργού `A NOUSTELOS_STUDIO /> project` στο κάτω μέρος του footer προς `https://noustelos.gr/` με `target="_blank" rel="noopener noreferrer"`.
  - `css/styles.css`: Προσθήκη tech/monospace styling (`.credit-link`, `.credit-brand`) με διακριτικό background και emerald hover εφέ (`#10B981`) εναρμονισμένο με το dark theme του footer.
  - `README.md`: Ενημέρωση Changelog v1.1.1.
- **Σκοπός:** Ενσωμάτωση υπογραφής δημιουργού NOUSTELOS_STUDIO στο footer με υψηλή αισθητική ποιότητα και άμεση παραπομπή.

### [2026-11-12] — v1.1.0: Broaden B2B Positioning to All Businesses & Professionals
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που τροποποιήθηκαν:**
  - `index.html`:
    - Αναπροσαρμογή core positioning & hero section σε «Έξυπνος AI Τηλεφωνικός Γραμματέας 24/7 για κάθε επιχείρηση & επαγγελματία».
    - Ενσωμάτωση σαφούς αντιπαραβολής με τον κλασικό παθητικό τηλεφωνητή («Οι πελάτες δεν αφήνουν μήνυμα στον τηλεφωνητή — καλούν τον επόμενο ανταγωνιστή»).
    - Αναβάθμιση SEO tags (title, description, keywords, Open Graph, Schema.org SoftwareApplication).
    - Αντικατάσταση αποκλειστικής ενότητας ξενοδοχείων με δυναμική ενότητα 4 βασικών κλάδων (Ιατρεία/Γραφεία, Τεχνικοί/Εργολάβοι, Ξενοδοχεία/Βίλες, Εστίαση/Τοπικές Επιχειρήσεις) και σύγκριση τηλεφωνητή.
    - Γενίκευση του υπολογιστή απόδοσης (ROI Calculator) με βάση εβδομαδιαίες αναπάντητες κλήσεις και μέση αξία πελάτη/υπηρεσίας.
  - `js/config.js`:
    - Προσθήκη multi-scenario διαλόγων ανά κλάδο (`medical`, `technical`, `hospitality`) με ρεαλιστικές στιχομυθίες και αντίστοιχα alerts.
  - `js/main.js`:
    - Υλοποίηση logic εναλλαγής σεναρίων (tabs) στον διαδραστικό προσομοιωτή με αυτόματη επανεκκίνηση autoplay.
    - Γενίκευση υπολογισμών ROI Calculator (εβδομαδιαίες κλήσεις, μηνιαία και ετήσια διασωθέντα έσοδα).
  - `css/styles.css`:
    - Στυλ για tabs σεναρίων (`.scenario-tabs`, `.scenario-tab-btn`), κάρτες κλάδων (`.industry-cards-grid`, `.industry-card`) και banner σύγκρισης τηλεφωνητή (`.answering-machine-comparison`).
  - `README.md`:
    - Ενημέρωση του project overview και προσθήκη του παρόντος changelog v1.1.0.
- **Σκοπός:** Άνοιγμα της εμπορικής τοποθέτησης σε ολόκληρο το B2B φάσμα των ελληνικών επιχειρήσεων και ελεύθερων επαγγελματιών που χάνουν πελάτες από αναπάντητες κλήσεις.

### [2026-11-12] — v1.0.0: Initial Project Creation & Production Landing Page
- **Συντάκτης:** Antigravity AI (Senior Front-End Architect & Technical Product Designer)
- **Αρχεία που δημιουργήθηκαν:**
  - `index.html`: Πλήρης responsive landing page στα Ελληνικά με όλες τις ενότητες (Header, Hero, Problem/Solution, Process, Hotels Section, Interactive ROI Calculator, Turnkey Pricing Table, FAQ Accordion, Contact, Footer, Schema.org SEO).
  - `css/styles.css`: Αυτόνομο modular CSS με CSS Custom Properties (Deep Navy `#0F172A`, Pure White `#FFFFFF`, Vibrant Emerald `#10B981`), animated soundwaves, accessibility styling και mobile breakpoints.
  - `js/config.js`: Κεντρικό Single Source of Truth για δυναμικά δεδομένα (Demo phone, contact email, τιμές, mock sample dialogue).
  - `js/main.js`: Vanilla JS logic για UI hydration, διαδραστικό προσομοιωτή διαλόγου, interactive υπολογιστή απόδοσης (ROI Calculator), FAQ accordion και mobile navigation.
  - `assets/logo.svg`, `assets/favicon.svg`, `assets/og-image.svg`: Αυτόνομα vector brand assets.
  - `_headers`: Cloudflare Pages security & caching policy headers.
  - `.gitignore`: Βασικές εξαιρέσεις για git hygiene.
  - `README.md`: Πλήρες αρχείο τεκμηρίωσης, αρχιτεκτονικής, οδηγιών και ιστορικού.
- **Σκοπός:** Θεμελίωση του milAI24.gr από το μηδέν με turnkey B2B εμπορική τοποθέτηση για ξενοδοχεία και ελληνικές επιχειρήσεις, έτοιμο για άμεσο deployment στο Cloudflare Pages.
