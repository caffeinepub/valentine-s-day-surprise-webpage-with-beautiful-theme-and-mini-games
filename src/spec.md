# Specification

## Summary
**Goal:** Add a first-entry “Do you love me?” prompt mini-game that gates the Valentine page until the user selects “Yes”.

**Planned changes:**
- Add a full-page prompt overlay shown on initial load that asks “Do you love me?” with exactly two buttons: “Yes” and “No”.
- Prevent the existing Valentine experience (Surprise reveal + all sections) from rendering until the prompt is completed.
- Implement evasive behavior for the “No” button: on click/tap it moves vertically (up/down) within the prompt bounds so it’s difficult to select, while “Yes” stays stationary and proceeds normally.
- Ensure that after selecting “Yes”, the existing Valentine page flow and replay behavior continue exactly as before.

**User-visible outcome:** On opening the app, the user first sees a “Do you love me?” overlay with “Yes” and “No”; trying to tap “No” makes it jump up/down, and tapping “Yes” reveals the original Valentine experience unchanged.
