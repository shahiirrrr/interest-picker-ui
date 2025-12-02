# Interest Picker UI

A modern web interface for selecting and managing interests, built with Next.js and shadcn/ui.

## ✨ Features

- **Responsive UI**: Works on all device sizes
- **Component Library**: Built with shadcn/ui components
- **Custom Hooks**: Includes `useMobile` and `useToast`
- **Theming**: Light and dark mode support

## 🏗️ Project Structure

```
components/     # Reusable UI components
  ui/          # shadcn/ui components
  Header.tsx   # Main navigation header
  
hooks/          # Custom React hooks
  use-mobile.ts # Mobile detection
  use-toast.ts  # Toast notifications

public/         # Static assets
  *.svg         # SVG icons and images

styles/         # Global styles
  globals.css   # Main stylesheet

app/            # App router pages
  page.tsx      # Home page
  layout.tsx    # Root layout
```

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Dependencies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- next-themes

## 🔧 Development

- Lint: `pnpm lint`
- Format: `pnpm format`
- Build: `pnpm build`
