# Specification

## Summary
**Goal:** Enhance the Closing section of the Valentine experience with a visible animated teddy and a final Yes/No choice flow.

**Planned changes:**
- Add a teddy illustration to the Closing section and apply a continuous jump/bounce loop animation that respects `prefers-reduced-motion`.
- Add “Yes” and “No” buttons in the Closing section; on “Yes” show exactly: "I love you, wife garu", and on “No” show an English prompt instructing the user to click “Yes”.
- Ensure existing Closing section actions (“Back to Top”, “Replay Surprise”) remain available and continue working.
- Add the teddy image as a static asset under `frontend/public/assets/generated` and reference it via a `/assets/generated/...` path.

**User-visible outcome:** At the end of the experience, the user sees a bouncing teddy and can choose Yes/No; selecting Yes shows "I love you, wife garu" and selecting No shows a playful instruction to click Yes, while Back to Top and Replay Surprise still work.
