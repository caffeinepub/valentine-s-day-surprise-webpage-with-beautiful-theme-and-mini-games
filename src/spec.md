# Specification

## Summary
**Goal:** Remove all visible "© + year" copyright text (including dynamic current-year variants) from the app UI.

**Planned changes:**
- Remove the copyright line that renders "© {year}" from the Closing section footer.
- Ensure no other UI area (prompt, reveal, hero, message, games, nav) renders "© 2026" or any "© + year" text.
- Adjust spacing/layout to avoid empty footer elements or awkward gaps after the text is removed.

**User-visible outcome:** The app no longer displays any "© 2026" (or "© {currentYear}") text anywhere, and the layout remains visually consistent.
