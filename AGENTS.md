# INC272-2026 Agent Instructions

Use this repository as a **6-week teaching repository** for browser-based IoT applications.

## Primary Teaching Constraints

- Keep the main workflow compatible with `2 online weeks + 4 onsite weeks`.
- Do not reintroduce `Proteus`, `VSPD`, or Windows-only serial-bridge tooling as the default path.
- Prefer the local mock hardware server for demos, labs, and student onboarding.
- Keep the student-facing stack lightweight: HTML, CSS, JavaScript, Node.js, browser, and simple static serving.

## Curriculum Rules

- Preserve the assessment model of `1 readiness task + 1 exam + 1 final project` unless the user explicitly asks to change it.
- Preserve the default rule that the exam is `paper-based only` unless the user explicitly changes the format.
- Treat proposal, checkpoint, demo, and repository quality as internal parts of the final project, not separate categories by default.
- Keep the repo readable for students. Prefer direct instructions and short task lists over long theoretical notes.

## Simulator Rules

- Maintain compatibility with the legacy example apps where practical.
- When changing the simulator protocol, update `docs/mock-simulator.md` and mention the impact on existing examples.
- Prefer deterministic or easy-to-understand simulated behavior over realism.

## Documentation Rules

- When editing the weekly structure, keep the difference between pre-class weeks and onsite weeks explicit.
- Update `README.md`, `Syllabus.md`, and `Outline.md` together when the course model changes.
- Keep student-facing docs current before adding new advanced features.

## Agent Workflow

- For curriculum changes, read `README.md`, `Syllabus.md`, `Outline.md`, and `docs/project-guide.md`.
- For simulator changes, read `docs/mock-simulator.md` and `simulator/mock-hardware-server/README.md`.
- For Codex-oriented workflow reuse, read `.codex/skills/inc272-course-maintainer/SKILL.md`.
