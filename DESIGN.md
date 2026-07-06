# LoyaWin — Design System

> Tài liệu tham chiếu các thông số thiết kế, tokens, và patterns đang được sử dụng trong toàn bộ site.

---

## 1. Color Tokens

Tất cả màu sắc được định nghĩa dưới dạng CSS custom properties trong `src/styles/theme.css`.

### Brand Colors

| Token | Giá trị | Mô tả |
|---|---|---|
| `--loyawin-primary` | `#574ADB` | Màu chính – tím indigo |
| `--loyawin-primary-light` | `#7B71E8` | Tím nhạt hơn – dùng cho gradient cuối |
| `--loyawin-primary-dark` | `#3D33C4` | Tím đậm – hover states |
| `--loyawin-primary-xlight` | `rgba(87,74,219,0.12)` | Nền nhẹ – background hover/chip |
| `--loyawin-primary-glow` | `rgba(87,74,219,0.35)` | Box shadow cho CTA buttons |

### Neutral Palette

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--loyawin-neutral-900` | `#1a1830` | Heading text |
| `--loyawin-neutral-700` | `#3d3a6b` | Body text, nav links |
| `--loyawin-neutral-500` | `#6b6890` | Mô tả, placeholder, meta |
| `--loyawin-neutral-300` | `#b8b5d8` | Border nhẹ, divider |
| `--loyawin-neutral-100` | `#eceaf9` | Background accent, separator |

### Background

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--loyawin-bg` | `#ffffff` | Background mặc định |
| `--loyawin-bg2` | `#f8f7ff` | Background sections xen kẽ (Features, Pricing) |
| `--loyawin-bg3` | `#f2f1fc` | Background accent |

### Glassmorphism

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--loyawin-glass-bg` | `rgba(255,255,255,0.65)` | Card nền kính |
| `--loyawin-glass-border` | `rgba(87,74,219,0.18)` | Border card kính |
| `--loyawin-glass-shadow` | `0 8px 40px rgba(87,74,219,0.12)` | Shadow card kính |

---

## 2. Typography

Nguồn font: Google Fonts — `src/styles/fonts.css`

```
Be Vietnam Pro: 300, 400, 500, 600, 700, 800 (+ italic 400)
```

### Biến font

| Token | Giá trị |
|---|---|
| `--font-head` | `'Be Vietnam Pro', sans-serif` |
| `--font-body` | `'Be Vietnam Pro', sans-serif` |

> Cả hai token đều trỏ về Be Vietnam Pro. `--font-head` dùng weight 700–800; `--font-body` dùng weight 400–600.

### Scale & Weight

| Ngữ cảnh | Size | Weight | Letter Spacing |
|---|---|---|---|
| Hero H1 | `36px → 64px` (responsive) | 800 | `-0.02em` |
| Section H2 | `28px → 44px` (responsive) | 700 | `-0.02em` |
| Card H3 | `18px → 20px` | 600 | — |
| Body text | `16px → 17px` | 400 | — |
| Small / meta | `11px → 13px` | 400–500 | — |
| Badge / label | `12px` | 600 | `0.12em` |
| Stat number | `20px → 30px` | 700 | — |
| Price | `36px → 48px` | 800 | — |

### Line Height

| Ngữ cảnh | Line Height |
|---|---|
| Headings | `1.05 – 1.1` |
| Body | `1.7` |
| List items | `1.5` |

---

## 3. Spacing & Layout

### Container

```
max-width: 1280px
padding: 0 16px (mobile) → 0 24px (sm) → 0 48px (md) → 0 64px (lg)
```

### Section Padding

```
py: 48px (mobile) → 64px (sm) → 80px (md) → 96px (lg)
```

### Grid Systems

| Section | Columns | Gap |
|---|---|---|
| Hero | 1 col (mobile) / 2 col (lg) | `40px → 80px` |
| Features | 1 → 2 (sm) → 3 (lg) | `16px → 24px` |
| Pricing | 1 → 2 (md) | `24px → 32px` |
| Hero stats | 3 col fixed | `16px → 36px` |
| Hero mini stats | 3 col fixed | `8px → 12px` |

---

## 4. Border Radius

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--radius-sm` | `12px` | Float cards, mini stats, icon containers |
| `--radius-md` | `20px` | Loyalty card bên trong, medium cards |
| `--radius-lg` | `32px` | Main glass card, pricing cards |
| `rounded-full` | `9999px` | Buttons, badges, pills |
| `rounded-2xl` (24px) | — | Feature cards, dropdowns |
| `rounded-xl` (16px) | — | Mobile menu, dropdown panels |

---

## 5. Shadows & Elevation

| Tên | Giá trị | Dùng cho |
|---|---|---|
| Glass card | `0 8px 40px rgba(87,74,219,0.12)` | Glassmorphism cards |
| Feature card | `0 8px 32px rgba(87,74,219,0.08)` | Feature grid cards |
| CTA button | `0 6px 28px rgba(87,74,219,0.35)` | Primary button |
| CTA button sm | `0 4px 16px rgba(87,74,219,0.35)` | Navbar CTA |
| Pricing CTA | `0 6px 24px rgba(87,74,219,0.35)` | Pricing button |
| Navbar default | `0 4px 16px rgba(0,0,0,0.04)` | Navbar không scroll |
| Navbar scrolled | `0 8px 32px rgba(0,0,0,0.06)` | Navbar sau khi scroll |
| Dropdown | `0 16px 48px rgba(0,0,0,0.12)` | Language picker, mobile menu |
| CTA white button | `0 8px 32px rgba(0,0,0,0.2)` | CTA Band button (hover: glow trắng) |

---

## 6. Gradients

| Tên | Giá trị | Dùng cho |
|---|---|---|
| Primary gradient | `linear-gradient(135deg, #574ADB, #7B71E8)` | CTA buttons chính |
| Full brand gradient | `linear-gradient(135deg, #574ADB, #6B62E8, #8B82F0)` | Enterprise pricing card, CTA Band section |
| Loyalty card | `linear-gradient(135deg, #574ADB, #8B82F0, #a89ef0)` | Hero loyalty card mock |
| Icon bg | `linear-gradient(135deg, rgba(87,74,219,0.12), rgba(87,74,219,0.06))` | Feature card icon container |
| Feature card glow | `radial-gradient` via `--loyawin-primary` | Hover state background orb |
| Navbar | `linear-gradient(to bottom, rgba(255,255,255,0.65), rgba(255,255,255,0.55))` | Navbar background |

---

## 7. Glassmorphism

Pattern chuẩn cho glass cards:

```css
background: var(--loyawin-glass-bg);      /* rgba(255,255,255,0.65) */
border: 1px solid var(--loyawin-glass-border); /* rgba(87,74,219,0.18) */
box-shadow: var(--loyawin-glass-shadow);  /* 0 8px 40px rgba(87,74,219,0.12) */
backdrop-filter: blur(24px);
border-radius: var(--radius-lg);          /* 32px */
```

Biến thể lighter (Feature cards):

```css
background: rgba(255, 255, 255, 0.8);
border: 1px solid rgba(87, 74, 219, 0.12);
box-shadow: 0 8px 32px rgba(87, 74, 219, 0.08);
backdrop-filter: blur(24px);
border-radius: 24px;
```

---

## 8. Components

### Button – Primary

```
background: linear-gradient(135deg, --loyawin-primary, --loyawin-primary-light)
box-shadow: 0 6px 28px --loyawin-primary-glow
color: #ffffff
font-weight: 600
border-radius: 9999px (rounded-full)
padding: px-7–px-9 / py-3.5–py-4
hover: translateY(-3px)
```

### Button – Outline

```
background: transparent
border: 1.5px solid --loyawin-neutral-300
color: --loyawin-neutral-700
border-radius: 9999px
padding: px-6–px-7 / py-3–py-4
hover: background --loyawin-primary-xlight
```

### Button – Outline Primary (Navbar Login)

```
border: 1.5px solid --loyawin-primary
color: --loyawin-primary
background: transparent
border-radius: 9999px
hover: background --loyawin-primary-xlight
```

### Badge / Chip (Section label)

```
background: --loyawin-primary-xlight
border: 1px solid rgba(87,74,219,0.2)
color: --loyawin-primary
font-size: 12px
font-weight: 600
letter-spacing: 0.12em
text-transform: uppercase
border-radius: 9999px
padding: px-3.5 / py-1.5
```

### Feature Card

```
background: rgba(255,255,255,0.8)
border: 1px solid rgba(87,74,219,0.12)
box-shadow: 0 8px 32px rgba(87,74,219,0.08)
border-radius: 24px (rounded-3xl)
padding: 32px (p-8)
hover: translateY(-4px) + background orb opacity 0→0.2
```

### Icon Container (Feature cards)

```
size: 46px–52px (responsive)
background: gradient icon bg
border: 1px solid rgba(87,74,219,0.2)
border-radius: 12px–14px
icon color: --loyawin-primary
icon size: 20px–24px
```

### Float Card (Hero)

```
background: --loyawin-glass-bg
border: 1px solid --loyawin-glass-border
box-shadow: --loyawin-glass-shadow
backdrop-filter: blur(20px)
border-radius: --radius-sm (12px)
padding: px-4–px-[18px] / py-3–py-3.5
animation: floatCard 6s ease-in-out infinite (alternating delays)
```

### Pricing Card – Standard

```
background: --loyawin-glass-bg
border: 1px solid --loyawin-glass-border
border-radius: --radius-lg (32px)
padding: 44px (p-11)
hover: translateY(-6px)
backdrop-filter: blur(24px)
```

### Pricing Card – Enterprise (Featured)

```
background: linear-gradient(135deg, #574ADB, #6B62E8, #8B82F0)
text: white
border: transparent
border-radius: --radius-lg (32px)
padding: 44px
hover: translateY(-6px)
Badge "Most Popular": bg white/20, border white/30
```

### Divider (Pricing)

```
height: 1px
background: --loyawin-neutral-100 (standard) / white/20 (enterprise)
margin: 24px–28px vertical
```

### Bullet List Item (Pricing)

```
icon: 18px square, border-radius 5px
icon background: gradient primary
icon content: "›" white bold
text: 14px, --loyawin-neutral-700
line-height: 1.5
gap: 10px
```

### Info Box (Pricing note)

```
background: rgba(87,74,219,0.07)
border: 1px solid rgba(87,74,219,0.15)
border-radius: --radius-sm (12px)
padding: px-4 / py-3.5
font-size: 13px
line-height: 1.6
```

### Navbar

```
position: fixed, z-index: 100
height: py-3 (mobile) / py-4 (desktop)
background: glassmorphism gradient white/55–75 (scroll-aware)
backdrop-filter: blur(40px)
border-bottom: scroll-aware opacity
transition: all 500ms
```

### Language Dropdown

```
background: linear-gradient(rgba(255,255,255,0.98), rgba(255,255,255,0.95))
border: 1px solid rgba(0,0,0,0.08)
box-shadow: 0 16px 48px rgba(0,0,0,0.12)
backdrop-filter: blur(40px)
border-radius: 12px (rounded-xl)
min-width: 160px
item padding: px-4 / py-2.5
active item: --loyawin-primary-xlight background
```

---

## 9. Animations

### Định nghĩa trong `src/styles/loyawin.css`

| Class / Keyframe | Mô tả | Duration |
|---|---|---|
| `.reveal` | Scroll-triggered fade + slide up (`translateY(32px) → 0`) | `0.7s cubic-bezier(0.16,1,0.3,1)` |
| `.reveal-delay-1` – `.reveal-delay-5` | Delay 0.1s – 0.5s | — |
| `orbFloat` | Background orbs float lên xuống | `12–18s ease-in-out infinite` |
| `floatCard` | Hero float cards lên xuống `-10px` | `6s ease-in-out infinite` |
| `.float-card.fc1` | Delay 0s | — |
| `.float-card.fc2` | Delay 2s | — |
| `pulse` (`.pulse-dot`) | Scale 1→0.85 + opacity 1→0.6 | `2s ease-in-out infinite` |
| `scroll` (`.partners-track`) | Horizontal auto-scroll `-50%` | `22s linear infinite` |
| `ctaShimmer` | Shimmer sweep qua CTA Band | `3s ease-in-out infinite` |

### Hover Transitions

| Element | Effect |
|---|---|
| Primary button | `translateY(-3px)` |
| Navbar CTA | `translateY(-2px)` |
| Feature card | `translateY(-4px)` + glow orb fade in |
| Pricing card | `translateY(-6px)` |
| CTA Band button | `scale(1.05)` + `brightness(1.1)` + white glow shadow |
| Nav link | Color → `--loyawin-primary` + bg `--loyawin-primary-xlight` |
| Partners track | `animation-play-state: paused` |

---

## 10. Responsive Breakpoints

Tailwind standard breakpoints:

| Token | Width |
|---|---|
| `sm` | `≥ 640px` |
| `md` | `≥ 768px` |
| `lg` | `≥ 1024px` |
| `xl` | `≥ 1280px` |

Navbar switches từ mobile → desktop tại `lg` (1024px).  
Grids collapse về 1 column dưới `sm`.

---

## 11. Background Decorations

### Grid Pattern (global)

```css
body::before {
  background-image:
    linear-gradient(rgba(87,74,219,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(87,74,219,0.04) 1px, transparent 1px);
  background-size: 60px 60px; /* mobile: 40px */
  position: fixed; inset: 0; z-index: 0;
}
```

### Orbs (ambient lighting)

3 orbs cố định, blur 90px, opacity 0.22:

| Orb | Size | Color | Position |
|---|---|---|---|
| `.orb1` | 600px | `#574ADB → #a89ef0` | top-left |
| `.orb2` | 500px | `#a89ef0 → #574ADB` | mid-right |
| `.orb3` | 350px | `#7B71E8 → #c4bff5` | bottom-center |

---

## 12. Page Sections

| Section | ID | Background |
|---|---|---|
| Navbar | — | Glassmorphism (scroll-aware) |
| Hero | `#home` | `--loyawin-bg` (white) |
| Partners | — | `--loyawin-bg` |
| The Problem | — | `--loyawin-bg2` |
| Features (Our Solution) | `#features` | `--loyawin-bg2` |
| Killer Feature | — | `--loyawin-bg` |
| Platform | `#platform` | `--loyawin-bg2` |
| Testimonials | — | `--loyawin-bg` |
| Pricing | `#pricing` | `--loyawin-bg2` |
| CTA Band | — | Full brand gradient |
| Contact | `#contact` | `--loyawin-bg` |
| Footer | — | `--loyawin-neutral-900` |

---

## 13. i18n

Hỗ trợ 3 ngôn ngữ:

| Code | Tên | Flag |
|---|---|---|
| `en` | English | 🇬🇧 |
| `de` | Deutsch | 🇩🇪 |
| `vi` | Tiếng Việt | 🇻🇳 |

- Context: `src/app/contexts/LanguageContext.tsx`  
- Translations: `src/app/translations/index.ts`  
- Hook: `useTranslation(language)` → object `t`

---

## 14. File Structure

```
src/
├── app/
│   ├── App.tsx                  # Root, layout, scroll reveal logic
│   ├── contexts/
│   │   └── LanguageContext.tsx  # i18n context
│   ├── translations/
│   │   └── index.ts             # Toàn bộ strings EN / DE / VI
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Partners.tsx
│       ├── TheProblem.tsx
│       ├── Features.tsx
│       ├── KillerFeature.tsx
│       ├── Platform.tsx
│       ├── Testimonials.tsx
│       ├── Pricing.tsx
│       ├── CTABand.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
└── styles/
    ├── fonts.css    # Google Fonts import
    ├── theme.css    # CSS tokens + Tailwind @theme inline
    ├── loyawin.css  # Animations, orbs, grid, reveal classes
    ├── tailwind.css # @import "tailwindcss"
    └── index.css    # Entry – imports all above
```
