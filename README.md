# The Rasner Group — Local Market Updates Site

A static GitHub Pages site for quarterly real estate market reports across Greater Boston.

---

## 📁 Folder Structure

```
rasner-market-reports/
├── index.html                  ← Landing page with town directory
├── assets/
│   ├── css/
│   │   └── style.css           ← Shared stylesheet (all branding tokens)
│   └── js/
│       ├── report-charts.js    ← Shared Chart.js factory functions
│       └── towns.js            ← Master town registry (edit to add towns)
└── towns/
    ├── _TEMPLATE.html          ← Copy this to create any new town report
    ├── cambridge.html          ← Example — fully populated
    ├── brookline.html          ← (add when data is ready)
    └── ...
```

---

## 🚀 GitHub Pages Setup

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set Source to **Deploy from a branch → main → / (root)**.
4. Your site will be live at `https://<your-org>.github.io/<repo-name>/`.

---

## ➕ Adding a New Town Report

### Step 1 — Copy the template
```bash
cp towns/_TEMPLATE.html towns/newton.html
```

### Step 2 — Replace the placeholder tokens
Open `towns/newton.html` and find-replace every `[[ ]]` token:

| Token | Example value |
|---|---|
| `[[TOWN_NAME]]` | `Newton` |
| `[[STATE]]` | `MA` |
| `[[DATE_RANGE]]` | `Q1 2025 – Q1 2026` |
| `[[LABELS_JSON]]` | `["Q1 25","Q2 25","Q3 25","Q4 25","Q1 26"]` |

### Step 3 — Fill in the data constants
Near the bottom of the file, populate the three data objects (`SF`, `CONDO`, `MF`) with real MLS numbers:

```js
const SF = {
  labels:  LABELS,
  avgSale: [1200000, 1350000, 1420000, 1310000, 1500000],
  medSale: [1100000, 1250000, 1300000, 1200000, 1380000],
  avgList: [1190000, 1320000, 1400000, 1290000, 1480000],
  ratio:   [101.5, 103.2, 102.8, 101.1, 102.5],
  sold:    [22, 45, 50, 30, 12],
  dom:     [35, 21, 28, 32, 29],
  dto:     [28, 15, 22, 25, 21],
};
```

### Step 4 — Register the town
Open `assets/js/towns.js` and add an entry:

```js
{ slug:'newton', name:'Newton', region:'Greater Boston', latestQuarter:'Q1 2026' },
```

The `slug` must match the filename (without `.html`).

### Step 5 — Commit and push
GitHub Pages auto-deploys. The new town appears in the directory within ~60 seconds.

---

## 🔄 Quarterly Updates

When a new quarter closes:

1. Open the town's `.html` file.
2. Add the new quarter's values to each data array (append to the end).
3. Add the new label to `LABELS` (e.g. add `"Q2 26"`).
4. Update `[[DATE_RANGE]]` in the header and footer.
5. Update `latestQuarter` in `assets/js/towns.js`.

The KPI cards auto-calculate changes from the final two data points — no other edits needed.

---

## 🎨 Branding & Design Tokens

All colors live in `assets/css/style.css` under `:root`:

```css
--ink:        #333333;   /* Primary text */
--teal-dark:  #295c6f;   /* Primary brand */
--teal-mid:   #71a495;   /* Secondary brand */
--teal-light: #e1ece8;   /* Light accent bg */
--bg:         #f2f2f2;   /* Page background */
--white:      #ffffff;   /* Cards */
```

Chart color constants live in `assets/js/report-charts.js` under the `RC` object.

---

## 📞 Contact

ilya@rasnergroup.com · (617) 823-9780 · rasnergroup.com
