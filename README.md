# VE Hybrid Finance Dashboard v2.0
### Vishal Electricals & Technopower

> **Hybrid System:** Google Sheets (historical) + Supabase (new FY 26-27) + Vercel (hosting)

---

## 🏗 ARCHITECTURE

```
┌─────────────────────────────────────────────────────┐
│                   LIVE DASHBOARD                    │
│              (Combined = S1 + S2)                   │
└──────────────┬──────────────────────┬──────────────┘
               │                      │
   ┌───────────▼──────────┐  ┌────────▼───────────┐
   │   SYSTEM 1           │  │  SYSTEM 2           │
   │   Google Sheets      │  │  Supabase DB        │
   │   (Historical)       │  │  (New FY 26-27)     │
   │   READ-ONLY          │  │  Entry forms        │
   │   Auto-sync 5 min    │  │  Real-time          │
   └──────────────────────┘  └────────────────────┘
```

---

## 🚀 DEPLOYMENT — STEP BY STEP

### STEP 1: Supabase Setup (Free)

1. Go to **https://supabase.com** → Create account → New Project
2. Name: "ve-dashboard" → Choose region: Mumbai (ap-south-1)
3. **SQL Editor** → New Query → Paste entire `supabase/schema.sql` → Run
4. **Settings → API** → Copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

### STEP 2: Google Service Account (for Sheets API)

1. **https://console.cloud.google.com** → New Project: "ve-dashboard"
2. **APIs & Services → Enable APIs** → Search "Google Sheets API" → Enable
3. **IAM & Admin → Service Accounts** → Create:
   - Name: ve-dashboard-sa
   - Role: Editor → Done
4. Click service account → **Keys → Add Key → JSON** → Download
5. Open JSON file, copy:
   - `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → `GOOGLE_PRIVATE_KEY`

### STEP 3: Share your Google Sheets

For **each** of your existing sheets:
1. Open sheet → Share
2. Paste `client_email` from Step 2
3. Role: **Viewer** (read-only is fine)
4. Copy Sheet ID from URL: `spreadsheets/d/SHEET_ID/edit`

### STEP 4: GitHub

```bash
cd ve-hybrid
git init
git add .
git commit -m "VE Hybrid Dashboard v2"
git remote add origin https://github.com/YOUR_USERNAME/ve-hybrid-dashboard.git
git push -u origin main
```

### STEP 5: Vercel Deploy

1. **vercel.com** → New Project → Import GitHub repo
2. **Settings → Environment Variables** — add ALL these:

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL          = https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY     = eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY         = eyJhbGci...

# Google Sheets
GOOGLE_SERVICE_ACCOUNT_EMAIL      = ve-dashboard-sa@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY                = -----BEGIN RSA PRIVATE KEY-----\nXXX\n-----END RSA PRIVATE KEY-----

# Your Sheet IDs
SHEET_REVENUE_ID                  = your_revenue_sheet_id
SHEET_STOCK_ID                    = your_stock_sheet_id
SHEET_REVENUE_TAB_VE              = VE Revenue 26-27
SHEET_REVENUE_TAB_VTPL            = VTPL Revenue 26-27
SHEET_STOCK_TAB                   = Sheet1

# Config
SYNC_INTERVAL_MINUTES             = 5
NEXT_PUBLIC_COMPANY_NAME          = Vishal Electricals & Technopower
NEXTAUTH_SECRET                   = random_32_char_string
NEXTAUTH_URL                      = https://your-app.vercel.app
```

3. **Deploy** → Wait 2-3 min → Live URL ready!

### STEP 6: First Sync

Open your app → Click **↻ Sync** button in sidebar → Data from sheets will appear.

Auto-sync happens every 5 minutes (Vercel cron job).

---

## 📱 HOW TO USE

```
1️⃣  Dashboard    → See combined live totals (Sheets + New)
2️⃣  ↻ Sync       → Manually refresh from Google Sheets
3️⃣  Parties      → Add new clients/vendors (FY 26-27)
4️⃣  Sites        → Add project sites
5️⃣  Invoices     → Create invoice against site
6️⃣  Payments     → Record payment + 13-field deduction breakup
7️⃣  Stock        → Material entry site-wise
8️⃣  Reports      → Ageing, outstanding, deductions
```

---

## 🗃 DATABASE (Supabase Tables)

| Table | Purpose |
|-------|---------|
| `parties` | Client/Vendor master |
| `sites` | Project sites |
| `invoices` | Invoice records |
| `payments` | Payment + deductions (13 fields) |
| `stock` | Material stock |
| `sheets_cache` | Cached Google Sheets data |
| `sync_log` | Sync history/errors |

### Auto-calculated in DB (PostgreSQL Generated Columns):
- `invoices.total_amount` = inv_amount + gst_amount
- `payments.total_deduction` = sum of all 13 deduction fields
- `payments.net_received` = received - total_deduction
- `stock.balance_qty` = boq_qty - issued_qty
- `stock.total_value` = issued_qty × unit_rate

---

## 🔄 SYNC LOGIC

```
Every 5 minutes (Vercel cron):
  → Fetch VE Revenue tab from Sheets
  → Fetch VTPL Revenue tab from Sheets
  → Fetch Stock Sheet
  → Normalize column names (flexible mapping)
  → Store in sheets_cache table
  → Log result in sync_log

Dashboard API:
  → Read sheets_cache (fast, no API call)
  → Read Supabase tables
  → Combine both → Return unified totals
```

---

## 🛠 LOCAL DEVELOPMENT

```bash
npm install
cp .env.example .env.local
# Fill .env.local with your values
npm run dev
# Open http://localhost:3000
```

---

## ⚠ IMPORTANT NOTES

1. **GOOGLE_PRIVATE_KEY** — paste with `\n` not actual newlines in Vercel
2. **.env.local** — never push to GitHub (already in .gitignore)
3. **Supabase free tier** — 500MB storage, 2GB bandwidth/month (enough for this)
4. **Vercel free tier** — 100GB bandwidth, unlimited deploys
5. **Column mapping** — System auto-detects your sheet column names (flexible)

---

*VE Hybrid Dashboard v2.0 — Built with Next.js 14 + Supabase + Google Sheets API + Vercel*
