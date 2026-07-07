# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Auth: Clerk integration, route protection, auth pages, and user menu.

## Current Goal

- Completed — waiting for next spec.

## Completed

- Design system (`01-design-system.md`): shadcn/ui installed (new-york style), components added (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), lucide-react, `lib/utils.ts` with `cn()`, dark-only theme tokens in `globals.css`. Verified: lint, typecheck, and build all pass. No light styling present.
- Editor chrome (`02-editor-chrome.md`): `EditorNavbar` (fixed `h-12` top bar, `bg-surface` with subtle bottom border, left/center/right sections, sidebar toggle with `PanelLeftOpen`/`PanelLeftClose`), `ProjectSidebar` (floating `w-80`, slide-in from left, backdrop overlay, "Projects" header with close button, shadcn Tabs with "My Projects" / "Shared" placeholder states, full-width "New Project" button with `Plus` icon). Dialog pattern documented (shadcn Dialog already installed, app-level tokens ready for title/description/footer pattern).
- Auth (`03-auth.md`): `@clerk/ui` installed for the `dark` theme. `proxy.ts` at project root with `clerkMiddleware` and `createRouteMatcher` protecting all routes except `/sign-in` and `/sign-up`. Root layout wrapped with `<ClerkProvider>` using Clerk's `dark` theme with CSS variable overrides mapped to app tokens. Sign-in (`app/(auth)/sign-in/[[...sign-in]]`) and sign-up (`app/(auth)/sign-up/[[...sign-up]]`) pages created with Clerk components inside a shared responsive two-panel auth layout (large screens: logo + feature list on left, Clerk form on right; small screens: form only). Root page redirects authenticated users to `/editor`. `UserButton` added to editor navbar right section. Verified: `npm run build` passes.

## In Progress

- None.

## Next Up

- Next feature unit (TBD by subsequent spec).

## Open Questions

- None currently.

## Architecture Decisions

- Dark-only theme: all color tokens defined in `:root` in `globals.css` (no light mode). `dark` class applied to `<html>` so shadcn `dark:` variants resolve.
- Dual token layer: raw design tokens (per `ui-context.md`) are the source of truth and are exposed both as app-level Tailwind utilities (`bg-base`, `text-copy-primary`, `text-brand`, `bg-accent-dim`, etc.) and mapped to shadcn semantic variables (`--background`, `--primary`, ...). Generated shadcn components render in the dark palette without modification.
- Route protection via `proxy.ts` (Next.js 16 replaces `middleware.ts` with `proxy.ts`). Public routes: `/sign-in`, `/sign-up`. All other routes require authentication.
- Clerk appearance variables overridden using the app's existing CSS variables (`var(--bg-surface)`, `var(--text-primary)`, etc.) with Clerk's `dark` theme as the base.

## Session Notes

- Starting editor chrome: EditorNavbar and ProjectSidebar wire into `app/page.tsx` as the editor workspace shell.
- Navbar: `bg-surface` with `border-surface-border` bottom border, uses `PanelLeftOpen`/`PanelLeftClose` icons.
- Sidebar: fixed positioning, slide-in via transform, backdrop overlay on open, tabs + bottom New Project button.
- Auth: `proxy.ts` replaces the deprecated `middleware.ts` convention. Clerk's `dark` theme from `@clerk/ui/themes` provides the base dark palette; CSS variable overrides map Clerk's theme tokens to the app's existing design tokens so auth pages match the rest of the UI. The auth layout lives in a `(auth)` route group to keep auth pages visually separate from the editor workspace.
