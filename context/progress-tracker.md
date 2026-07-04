# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Editor chrome: Navbar & Project Sidebar

## Current Goal

- Completed — waiting for next spec.

## Completed

- Design system (`01-design-system.md`): shadcn/ui installed (new-york style), components added (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), lucide-react, `lib/utils.ts` with `cn()`, dark-only theme tokens in `globals.css`. Verified: lint, typecheck, and build all pass. No light styling present.
- Editor chrome (`02-editor-chrome.md`): `EditorNavbar` (fixed `h-12` top bar, `bg-surface` with subtle bottom border, left/center/right sections, sidebar toggle with `PanelLeftOpen`/`PanelLeftClose`), `ProjectSidebar` (floating `w-80`, slide-in from left, backdrop overlay, "Projects" header with close button, shadcn Tabs with "My Projects" / "Shared" placeholder states, full-width "New Project" button with `Plus` icon). Dialog pattern documented (shadcn Dialog already installed, app-level tokens ready for title/description/footer pattern).

## In Progress

- None.

## Next Up

- Next feature unit (TBD by subsequent spec).

## Open Questions

- None currently.

## Architecture Decisions

- Dark-only theme: all color tokens defined in `:root` in `globals.css` (no light mode). `dark` class applied to `<html>` so shadcn `dark:` variants resolve.
- Dual token layer: raw design tokens (per `ui-context.md`) are the source of truth and are exposed both as app-level Tailwind utilities (`bg-base`, `text-copy-primary`, `text-brand`, `bg-accent-dim`, etc.) and mapped to shadcn semantic variables (`--background`, `--primary`, ...). Generated shadcn components render in the dark palette without modification.

## Session Notes

- Starting editor chrome: EditorNavbar and ProjectSidebar wire into `app/page.tsx` as the editor workspace shell.
- Navbar: `bg-surface` with `border-surface-border` bottom border, uses `PanelLeftOpen`/`PanelLeftClose` icons.
- Sidebar: fixed positioning, slide-in via transform, backdrop overlay on open, tabs + bottom New Project button.
