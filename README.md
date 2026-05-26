# 🎨 Media Search App (Photos, Videos & GIFs)

A modern React-based media search application that allows users to search and explore **photos, videos, and GIFs** from multiple APIs in one place, and save their favorite items into a personal collection.

---

## 🚀 Features

* 🔍 **Search Media**

  * Search for **Photos** (Unsplash)
  * Search for **Videos** (Pexels)
  * Search for **GIFs** (Giphy)

* 🗂️ **Tabbed Interface**

  * Seamlessly switch between media types

* 💾 **Save to Collection**

  * Save favorite items locally
  * Persistent storage using `localStorage`

* ❌ **Manage Collections**

  * Remove individual items
  * Clear entire collection

* ⚡ **Fast & Responsive UI**

  * Built with React + Tailwind CSS

* 🔔 **User Feedback**

  * Toast notifications for actions

---

## 🛠️ Tech Stack

* **Frontend:** React, React Router
* **State Management:** Redux Toolkit
* **API Handling:** Axios
* **Styling:** Tailwind CSS
* **Notifications:** React Toastify

---

## 📁 Project Structure

```
src/
│
├── Api/
│   └── mediaApi.js        # API calls (Unsplash, Pexels, Giphy)
│
├── components/
│   ├── Navbar.jsx
│   ├── Searchbar.jsx
│   ├── Tabs.jsx
│   ├── ResultGrid.jsx
│   └── ResultCard.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Collections.jsx
│
├── Redux/
│   ├── Store.js
│   └── features/
│       ├── searchSlice.js
│       └── collectionSlice.js
│
└── App.jsx
```

---

## 🔑 Environment Variables

Create a `.env` file in the root:

```
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_GIPHY_KEY=your_giphy_api_key
```

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/kartikrana77/MediaSearch.git

# Navigate to project
cd media-search-app

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## ⚙️ How It Works

1. User enters a search query
2. Redux stores the query and active tab
3. Based on selected tab:

   * Photos → Unsplash API
   * Videos → Pexels API
   * GIFs → Giphy API
4. Results are displayed dynamically
5. Users can save items to local collection

---

## 🧠 Key Concepts Used

* Centralized state management using Redux Toolkit
* API abstraction layer
* Conditional rendering based on media type
* LocalStorage persistence
* Component-based architecture

---

## ⚠️ Known Issues / Improvements

* API errors could be handled more gracefully
* Infinite scrolling can be added
* Debounced search can improve performance
* Better accessibility support

---

## 🌟 Future Enhancements

* 🔄 Infinite scroll / pagination
* ❤️ Like/Favorite system
* 🔎 Advanced filters (orientation, duration, etc.)
* 🌙 Dark/Light theme toggle
* ☁️ Backend integration for user accounts

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a PR.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

* Unsplash API
* Pexels API
* Giphy API

---

## 👨‍💻 Author

**Kartik**

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
