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
├── index.html            # Η κύρια landing page (Semantic HTML5, SEO, Schema.org)
├── _headers              # HTTP security & caching headers για το Cloudflare Pages
├── .gitignore            # Αγνοεί περιττά αρχεία συστήματος (.DS_Store κ.λπ.)
├── README.md             # Αυτό το αρχείο (SSOT, Changelog, Οδηγίες)
├── css/
│   └── styles.css        # Modular CSS3, CSS Variables, Responsive (Mobile-First)
├── js/
│   ├── config.js         # Κεντρικό configuration (Single Source of Truth για UI data & Scenarios)
│   └── main.js           # Client-side logic (Multi-scenario Simulator, ROI Calculator, FAQ, UI)
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

> ⚠️ **ΑΥΣΤΗΡΗ ΟΔΗΓΙΑ ΠΡΟΣ ΚΑΘΕ AI AGENT & DEVELOPER:**  
> **ΠΡΙΝ ΟΛΟΚΛΗΡΩΣΕΤΕ ΟΠΟΙΑΔΗΠΟΤΕ ΑΛΛΑΓΗ** στον κώδικα ή στη δομή του project, **ΟΦΕΙΛΕΤΕ ΝΑ ΕΝΗΜΕΡΩΣΕΤΕ ΤΗΝ ΕΝΟΤΗΤΑ CHANGELOG ΠΑΡΑΚΑΤΩ (Append-Only)**.  
> Κάθε καταχώριση πρέπει να περιλαμβάνει:
> 1. Ημερομηνία (`YYYY-MM-DD`).
> 2. Έκδοση ή τίτλο ενέργειας.
> 3. Συνοπτική λίστα των αρχείων που τροποποιήθηκαν ή δημιουργήθηκαν.
> 4. Τον σκοπό και το αποτέλεσμα της αλλαγής.

---

## 5. Changelog / Ημερολόγιο Αλλαγών (Append-Only)

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
