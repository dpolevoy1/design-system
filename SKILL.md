# Assemble Design System Execution Skill

## Purpose

Use this skill to implement, review, or refine UI in a way that stays fully aligned with the `design-system` standards in `.impeccable.md`.

This skill exists to prevent visual drift, reduce "AI slop," and keep outputs consistent across design, prototype, and production implementation.

## When To Use

Activate this skill for requests such as:

- "implement this UI/component/screen"
- "polish/refine this interface"
- "review this design/system for consistency"
- "make this align with our design system"
- "apply Assemble style to this feature"

## Required Inputs

Before changing anything, collect:

1. Target files/components/screens
2. Surface context (`web`, `PowerPoint add-in`, `table-heavy admin`, etc.)
3. Existing design primitives used (buttons, inputs, badges, cards, sidebar)
4. Current token usage (colors, spacing, typography, shadows, motion)

## Non-Negotiable Source Of Truth

Always apply rules in this order:

1. `.impeccable.md`
2. Design-system components/tokens in this repository
3. Existing screen implementation patterns

If implementation conflicts with `.impeccable.md`, update implementation to match the guideline.

## Execution Workflow

1. **Classify surface**
   - Decide which pattern family applies first (decision card, table-heavy, form-heavy, add-in compact, sidebar shell).

2. **Map to primitives**
   - Reuse canonical components and states.
   - Do not introduce one-off visual variants when equivalent primitives exist.

3. **Apply token-first styling**
   - Use semantic and neutral tokens only.
   - Avoid hardcoded colors, ad hoc shadows, and inconsistent spacing scales.

4. **Apply depth system**
   - Use the shared container depth model from `.impeccable.md`:
     - machined bevel
     - levitating shadow stack
     - type-driven glow tokens
   - Keep the warm A.Team direction (`#futureorganic`) in tuning decisions.

5. **Validate interaction quality**
   - Ensure complete states (`default`, `hover`, `focus`, `disabled`, plus semantic states where relevant).
   - Ensure keyboard-visible focus and non-color-only meaning.
   - Preserve layout stability for loading/empty/validation states.

6. **Run ship gate mentally**
   - Verify against `Review Checklist (Ship Gate)` and `Quality Gate by Severity` in `.impeccable.md`.

## Failure Conditions (Must Fix Before Finalizing)

- Hardcoded visual values where tokens exist
- Missing or ambiguous component states
- Inconsistent card/container depth behavior
- Decorative color/motion overriding semantic clarity
- One-off component styling outside system primitives

## Output Standard

When delivering changes, provide:

- what was normalized to system primitives
- what tokens/rules were applied
- any residual trade-offs or follow-up tuning items

Keep outputs implementation-ready and concise.
