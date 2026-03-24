# ⚡ AutoFlow Pro — Automation Expert Portfolio

A beautiful, modern personal portfolio website for automation experts. Built with pure **HTML, CSS, and JavaScript** — ready to deploy on GitHub Pages.

---

## 🚀 Quick Start (GitHub Pages)

1. Create a new GitHub repository (e.g. `my-portfolio`)
2. Upload all files in this folder to the repository
3. Go to **Settings → Pages → Source → main branch → root**
4. Your site will be live at `https://yourusername.github.io/my-portfolio`

---

## 🖼️ Changing Your Profile Photos

Replace the images in the `images/` folder:

| File | Used On |
|------|---------|
| `images/profile1.jpg` | Hero section (first photo) |
| `images/profile2.jpg` | Hero section (second photo) + About section |

> Just keep the same filenames, or update the `src=""` in `index.html` if you rename them.

---

## ✏️ Updating Your Info

### Name & Tagline — `index.html`
- Search for `AutoFlow Pro` to update your brand name
- Update the hero title and description text

### Contact Links — `index.html`  
Find the `<!-- CONTACT -->` section and update:
```html
<p>your@email.com</p>
<p>@yourhandle</p>
<p>linkedin.com/in/yourprofile</p>
```

### Tools & Skill Levels — `index.html`
In the `<!-- TOOLS -->` section, adjust `--w:95%` to set each skill bar level.

---

## 🤖 Adding / Editing Automation Cards

Open `automations.js` and edit the `AUTOMATIONS` array. Each object is one card:

```js
{
  id: 7,              // unique number
  icon: "🔥",         // emoji icon
  tag: "make",        // filter tag: make | zapier | n8n | ai | python
  tagLabel: "Make.com",
  title: "Your Automation Title",
  summary: "Short description shown on the card.",
  category: "Category Name",
  details: "Full description shown in the popup modal.",
  features: [
    "Feature one",
    "Feature two",
    "Feature three",
  ],
  tools: ["Make.com", "Slack", "Gmail"],
},
```

Save the file — the website updates automatically.

---

## 📁 File Structure

```
📁 your-portfolio/
├── index.html       ← Main page structure
├── style.css        ← All styling & design
├── script.js        ← All interactivity
├── automations.js   ← Your automation portfolio data
├── README.md        ← This file
└── images/
    ├── profile1.jpg ← Hero photo 1
    └── profile2.jpg ← Hero photo 2
```

---

Made with ❤️ for automation professionals.
