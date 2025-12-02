# Component Documentation

This document provides detailed information about the custom components used in the Interest Picker UI project.

## 🎯 Core Components

### Header
Location: `components/Header.tsx`

A responsive header component that includes navigation and theme switching.

**Props:**
- `className` (string, optional): Additional CSS classes

### Theme Provider
Location: `components/theme-provider.tsx`

Handles theming throughout the application using next-themes.

## 🎨 UI Components

All UI components are located in the `components/ui` directory and are built using shadcn/ui. These include:

- **Buttons**: Various button styles and variants
- **Cards**: For displaying content in a contained box
- **Forms**: Form elements like inputs, checkboxes, etc.
- **Navigation**: Menus, tabs, and other navigation components
- **Feedback**: Alerts, toasts, and dialogs
- **Data Display**: Tables, lists, and other data presentation components

## 🔧 Custom Hooks

### useMobile
Location: `hooks/use-mobile.ts`

Detects if the current device is a mobile device.

**Returns:**
- `isMobile` (boolean): True if on a mobile device

### useToast
Location: `hooks/use-toast.ts`

Provides toast notification functionality throughout the app.

**Usage:**
```typescript
const { toast } = useToast();

toast({
  title: "Success",
  description: "Your action was successful!",
});
```

## 🎯 Usage Examples

### Using a Button Component

```tsx
import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  );
}
```

### Creating a Form

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

## 🎨 Theming

The application supports light and dark themes. The theme can be toggled using the theme switcher in the header.

### Adding Custom Colors

To add custom colors, update the `tailwind.config.js` file and extend the theme:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000",
          foreground: "#ffffff",
        },
      },
    },
  },
};
```
