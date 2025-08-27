# Tiny-Boi-CSS

**A tiny, fun spinoff of Tailwind CSS.**  

Tiny-Boi-CSS is a lightweight utility-first CSS framework inspired by [Tailwind CSS](https://tailwindcss.com). It provides familiar class names for spacing, borders, rounding, and gaps, making it easy to quickly style your HTML without writing custom CSS.

## Features

- Utility classes for **padding (`p-*`) and margin (`m-*`)**
- **Border-width (`border-*`)** and **border-radius (`rounded-*`)** utilities
- **Gap utilities** for grids and flex layouts
- Simple, lightweight, and easy to include in any project
- No dependencies — works with plain HTML, JS, or frameworks

## Installation

```bash
npm install tiny-boi-css
```

## Usage

Include the CSS in your project:

```html
<link rel="stylesheet" href="node_modules/tiny-boi-css/dist/output.css">
```

Then use the classes:
```html
<div class="p-4 m-2 rounded-lg border-2">
  Hello Tiny-Boi-CSS!
</div>
```

## Available Utilities

**Spacing**: p-*, m-*, px-*, py-*, mx-*, my-*

**Borders**: border, border-2, border-4, border-8, border-0

**Rounding**: rounded-sm, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-full

**Gap**: gap-0, gap-1, gap-2, gap-4, gap-6, gap-8

For full list of classes, check the dist/output.css

## Contributions
Contributions are welcome! Even though I just made it as a fun project, if you find issues or want to add utilities, feel free to open a PR.

## Disclaimer
Tiny-Boi-CSS is inspired by Tailwind CSS, but all code is original and independently implemented. I just made it because I was bored and wanted to do something.
