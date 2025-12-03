# CNC Consultant — Static Site

This folder contains a simple static website for CNC Consultant (Civil & IT departments). Files:

- `index.html` — Home
- `about.html` — About Us
- `services.html` — Services (Civil & IT)
- `blog.html` — Blog / insights
- `contact.html` — Contact form (mailto)
- `assets/css/styles.css` — styles
- `assets/js/main.js` — small UI helpers
- `assets/images/logo.svg` — simple logo

Preview locally (PowerShell):

```powershell
# Change to site directory
cd c:/xampp/htdocs/construction/frontend/cnc-website

# Option A: If you have Python installed
python -m http.server 5173
# Then open http://localhost:5173 in your browser

# Option B: Use VS Code Live Server extension (right click index.html → Open with Live Server)
```

Notes:
- The contact form uses `mailto:`. Replace with backend endpoint if you have one.
- Edit content and styles in `assets/` to match branding.
