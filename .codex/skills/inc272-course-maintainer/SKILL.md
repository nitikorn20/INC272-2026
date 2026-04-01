---
name: inc272-course-maintainer
description: Maintain and evolve the INC272-2026 teaching repository for a 6-week browser-based IoT applications course. Use when updating syllabus, weekly materials, simulator workflow, student-facing setup guides, project instructions, or course structure for this repository. Prefer the mock hardware server over Proteus/VSPD and preserve the default model of 2 online weeks, 4 onsite weeks, 1 readiness task, 1 exam, and 1 final project.
---

# INC272 Course Maintainer

Read these files first:

- `README.md`
- `Syllabus.md`
- `Outline.md`
- `AGENTS.md`

For simulator work, also read:

- `docs/mock-simulator.md`
- `simulator/mock-hardware-server/README.md`

## Workflow

1. Confirm whether the requested change affects curriculum, simulator behavior, or student setup.
2. Keep the 6-week teaching structure explicit.
3. Keep the default path light: HTML, CSS, JavaScript, Node.js, browser, and mock simulator.
4. Avoid reintroducing Proteus or Windows-only setup steps as required defaults.
5. If simulator behavior changes, update docs and student quick-start instructions in the same change.

## Expected Priorities

- Student onboarding clarity
- Teaching flow consistency
- Compatibility with the legacy example apps where practical
- Minimal setup friction

## References

- Read `references/course-workflow.md` when planning larger course changes.
