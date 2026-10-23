# Website Implementation Brief

> Fill in the sections you know before asking the agent to build. Delete examples that do not apply. If a decision is not known, ask the agent to propose a sensible option before committing to it.

## 1. Project Overview

- **Website or project name:** [Name]
- **Website type:** [Landing page / dashboard / portfolio / ecommerce / other]
- **Target audience:** [Who will use it]
- **Primary goal:** [What visitors should understand or accomplish]
- **Pages/routes required:** [List pages; or say one page]
- **Reference website(s):** [URLs, if any]
- **Design screenshots or assets:** [File paths, if any]

## 2. Scope and Constraints

- **Frontend:** React
- **Styling:** Tailwind CSS
- **Backend/API:** None. This is a UI-only project.
- **Data:** Use realistic local mock data where needed.
- **Persistence:** [None / local storage / other]
- **Existing project:** Inspect and preserve the current setup.
- **Dependencies:** Reuse installed dependencies where practical. Ask before adding new ones.
- **Other constraints:** [Anything else]

## 3. Visual Direction

- **Overall style:** [Minimal / premium editorial / bold / SaaS / playful / other]
- **Mood and impression:** [How the site should feel]
- **Color palette:** [Specific colors or references]
- **Typography:** [Font preferences, or ask for a recommendation]
- **Layout:** [Wide/narrow container, columns, whitespace, density]
- **Imagery:** [Photography / illustrations / product images / none]
- **Icons:** Use a consistent icon library already installed, if available.
- **Avoid:** [e.g. generic gradients, excessive rounded cards, oversized headings]

### Design references
For each reference, specify what to take from it:
- [URL or asset] — [e.g. typography and navigation only; do not copy its branding]

Do not copy a reference wholesale. Use it to understand the requested visual direction and create a coherent design for this project.

## 4. Page Structure and Content

### Page: [Page name]

1. **Header/navigation:** [Elements, links, logo, CTA]
2. **Hero/intro:** [Heading, supporting text, image, primary action]
3. **Section 2:** [Purpose and content]
4. **Section 3:** [Purpose and content]
5. **Additional sections:** [As needed]
6. **Footer:** [Links, contact details, legal links, etc.]

Repeat this section for each page. Replace this example structure with the actual requirements.

### Content and assets
- **Required copy:** [Provide it, or authorize the agent to draft it]
- **Images/assets available locally:** [Paths]
- **External assets permitted:** [Yes/no and any source restrictions]
- **Placeholder content policy:** Use plausible, consistent content. Do not use lorem ipsum unless requested.

## 5. Interactions

List the behavior each element should have. Remove anything that does not apply.

- **Navigation:** [Routes or scroll-to-section behavior]
- **Mobile menu:** [Expected behavior]
- **Search/filter/sort:** Operate on local mock data.
- **Tabs/accordions/dropdowns:** [Expected behavior]
- **Forms:** Client-side validation and clear success/error feedback. Do not submit to a nonexistent server.
- **Modals/dialogs:** [Expected behavior]
- **Buttons/links:** Every visible control should have a meaningful action or be clearly non-interactive.
- **Other interactions:** [Details]

Do not build backend infrastructure or invent API endpoints. Clearly distinguish simulated behavior from real persistence.

## 6. Responsive and Accessibility Requirements

- Support mobile, tablet, and desktop widths.
- Reflow layouts deliberately rather than merely shrinking the desktop view.
- Prevent horizontal overflow.
- Ensure touch targets are usable.
- Use semantic HTML, labels for form fields, keyboard-accessible controls, visible focus indicators, and appropriate accessible names.
- Respect reduced-motion preferences if animation is used.
- Include relevant empty, success, and error states.

## 7. Component and Code Organization

- Identify shared components after inspecting the current project.
- Extract repeated UI patterns when doing so improves consistency.
- Keep component responsibilities clear.
- Store repeated mock content in data structures rather than duplicating markup.
- Avoid unnecessary global state, dependencies, abstractions, and unrelated refactors.
- Follow the current project's linting, formatting, and naming conventions.

## 8. Acceptance Criteria

The work is complete when:

- [ ] The requested pages and sections are implemented.
- [ ] The visual direction matches the brief and supplied references.
- [ ] Layouts work at mobile, tablet, and desktop widths.
- [ ] All interactive controls behave as specified.
- [ ] UI-only behavior uses local state/mock data and does not pretend to call a backend.
- [ ] No unintended horizontal overflow or broken images remain.
- [ ] Available build, lint, and test commands pass, or any existing/unresolved failures are documented.
- [ ] The rendered website has been inspected in a browser if the environment supports it.
- [ ] The final summary states what changed, what was actually checked, and what remains unverified.

## 9. Working Agreement

Before substantial implementation:
1. Inspect the repository and this brief.
2. Summarize the proposed page structure, component plan, and any important assumptions.
3. Flag only the missing decisions that would materially affect the result.
4. Implement in manageable stages so the UI can be reviewed early.

After the first main screen is implemented, pause for visual review if practical. Do not build every page on top of a clearly incorrect design direction.

Do not declare the task complete merely because code was generated or compiled. Verify what the environment allows, and be explicit about limitations.
