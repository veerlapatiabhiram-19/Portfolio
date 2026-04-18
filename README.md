# Veerlapati Abhiram - Portfolio

A personal portfolio website built with **React + Vite**.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📁 Project Structure
```
src/
├── components/
│   ├── Navbar.jsx       # Fixed navigation bar
│   ├── Hero.jsx         # Landing section with photo
│   ├── About.jsx        # About me section
│   ├── Skills.jsx       # Skills with progress bars
│   ├── Projects.jsx     # Project cards
│   ├── Education.jsx    # Education timeline
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
public/
└── abhiram.jpg          # Profile photo
```

## 🛠 Tech Stack
- React 18
- Vite
- CSS Variables (no external CSS framework)

## 📝 Customization
- Update your **email** in `Contact.jsx`
- Add more **projects** in `Projects.jsx`
- Update **social links** in `Hero.jsx` and `Footer.jsx`
