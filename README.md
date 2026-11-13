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
- **Τεχνικοί, Εργολάβοι & Επαγγελματίες Πεδίου:** Καταγραφή βλαβών, περιοχής και στοιχείων πελάτη ενώ βρίσκεστε σε σκάλα, εργοτάξιο ή στο τιμόνι.
- **Ξενοδοχεία, Βίλες & Τουριστικά Καταλύματα:** Πολυγλωσσική εξυπηρέτηση 24/7 (10+ γλώσσες) και αύξηση direct bookings χωρίς προμήθειες πλατφορμών.
- **Εστίαση, Κέντρα Αισθητικής & Τοπικές Επιχειρήσεις:** Διαχείριση κρατήσεων και ερωτήσεων τις ώρες αιχμής.

### Το Εμπορικό Μοντέλο "Turnkey Setup" (Μηδενικές Δικές μας Συνδρομές)
Σε αντίθεση με τα παραδοσιακά SaaS και agency μοντέλα που χρεώνουν 200€–500€/μήνα και δεσμεύουν τον πελάτη:
1. **Εφάπαξ Κόστος Εγκατάστασης (Setup Fee):** Ο πελάτης πληρώνει μία φορά για την πλήρη ανάλυση, παραμετροποίηση, εκπαίδευση του Knowledge Base και διασύνδεση με το τηλεφωνικό κέντρο.
2. **0€ Μηνιαία Συνδρομή προς το milAI24.gr:** Δεν υπάρχει καμία πάγια χρέωση προς εμάς.
3. **Απευθείας Πληρωμή Παρόχων Υποδομής (At-Cost):** Ο πελάτης ανοίγει λογαριασμό στο δικό του όνομα στους παρόχους τηλεφωνίας και Voice AI (π.χ. Twilio, Vapi, Retell, Deepgram, Cartesia, OpenAI). Πληρώνει μόνο:
   - Τον αριθμό VoIP: ~2€ έως 5€ / μήνα.
   - Τον πραγματικό χρόνο ομιλίας: ~0,10€ / λεπτό (Pay-As-You-Go).
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
- `technical`: Τεχνικοί, Εργολάβοι & Υπηρεσίες Πεδίου
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
