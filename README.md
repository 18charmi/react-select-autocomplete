# 🔍 React + TypeScript + TailwindCSS + Vite — Searchable Autocomplete Component

A fully customizable, accessible, and async-powered **autocomplete input** built with `react-select`, `TypeScript`, `TailwindCSS`, and `Vite`.

This component supports real-time option fetching, controlled selection handling, keyboard accessibility, and full theming using TailwindCSS — making it a perfect fit for modern React applications.

---

## ✨ Features

- **🔄 Dynamic Option Fetching**  
  Fetch options on-the-fly based on user input (ideal for APIs, large datasets, etc.).

- **♿ Keyboard Accessibility**  
  Fully navigable and selectable using keyboard, thanks to `react-select`'s accessibility features.

- **📤 Controlled Component**  
  Easily manage selected values from the parent component using props and callbacks.

- **🎨 TailwindCSS for Styling**  
  Built using utility-first TailwindCSS classes for simple yet clean UI customization.

- **🧠 Written in TypeScript**  
  Fully typed for a smooth and safe development experience.

- **⚡ Fast Development**  
  Bootstrapped using **Vite** for lightning-fast builds and HMR.

---

## 🚀 Tech Stack

- React
- TypeScript
- Vite
- TailwindCSS
- react-select

---

## 📁 Project Setup

```bash
git clone https://github.com/18charmi/react-select-autocomplete
cd react-select-autocomplete
npm install
npm run dev
````

---

## 🔧 Usage

Import the `Autocomplete` component and use it with your custom fetch function and value handler:

```tsx
<Autocomplete
  loadOptions={yourAsyncFunction}
  onChange={handleSelection}
  placeholder="Search..."
  isClearable
/>
```

Customize the `components`, `styles`, or props to match your use case. Refer to the examples in the repo for guidance.

---

## 📌 To Do

* [x] Vite project setup
* [x] TailwindCSS integration
* [x] `react-select` autocomplete customization
* [ ] REST API / GraphQL data integration examples

---

## 📷 Demo

Watch the demo video on YouTube:
📺 [React Autocomplete Component Demo](https://youtu.be/Bbo-5aHNwgA)
