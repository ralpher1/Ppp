### Builder — PPP-3: React Router and Component Architecture

**Routing setup** — BrowserRouter wraps the app at the root level in `main.jsx`, keeping routing context available to all components. Routes are defined in `App.jsx`:

```jsx
// src/App.jsx — Route structure
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
```

**NavLink active styling** — Using `NavLink` instead of `Link` gives automatic `.active` class on the current route, enabling visual feedback without manual state tracking:

```jsx
// src/components/Navbar.jsx — Active link highlighting
<NavLink to="/" end>Home</NavLink>
<NavLink to="/about">About</NavLink>
```

The `end` prop on the Home link prevents it from matching all routes (since every path starts with `/`).

### Builder — PPP-4: UI Polish Decisions

**Gradient heading** — Applied `background-clip: text` for a subtle gradient effect on the main heading without affecting other text elements:

```css
.home h1 {
  background: linear-gradient(135deg, #e94560, #ff6b81);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Interactive card hover** — About page cards lift on hover with `translateY(-3px)` and a border color shift to the accent, providing tactile feedback without layout shift.
