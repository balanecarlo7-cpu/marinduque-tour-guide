- Laboratory Activity #4 — Prompt Engineering for AI-Assisted Web Development
 Important: The code in this folder is a prepared AI-assisted draft. Before submission, run the prompts in GitHub Copilot and replace the output descriptions with what Copilot actually generated. Do not claim that a response came from Copilot unless you recorded it there.

- Project Concept
Project Name: Marinduque Heritage & Eco-Tour Guide  
Sector: Tourism & Cultural Innovation  
Target Users: Local tourists, visitors, students, and residents  

Local Challenge: Visitors may have difficulty finding organized, beginner-friendly information about Marinduque destinations and cultural attractions.

Proposed Solution: A responsive single-page tourism guide using demonstration data only.

Core Features:
1. Destination cards with name, category, location, and description.
2. Category filter for heritage, nature, beach, and food.
3. Interactive one-day visit checklist with completion count.

- Task 2 — Zero-Shot Prompting
Objective: Generate a basic tourism webpage without examples or detailed constraints.

Exact Prompt:
- Create a simple webpage about tourist attractions in Marinduque.

Actual Copilot Output:
Prepared baseline draft should be saved in `outputs/task-2-zero-shot/`. Replace this note with the actual Copilot response or source-file reference after running the prompt.

What Worked:
Record the actual title, content, layout, and functionality Copilot generated.

What Needs Improvement:
Record what was missing, unclear, or non-functional.

Next Action / Verification:
Use a structured prompt with role, context, constraints, expected output, and acceptance criteria.

- Task 3 — Structured Prompt
Objective: Improve relevance using prompt anatomy.

Exact Prompt:
Act as a frontend web developer. Create a responsive single-page website called “Marinduque Heritage and Eco-Tour Guide.” The website is for local tourists, visitors, students, and residents who need an organized way to explore tourism and cultural destinations in Marinduque, Philippines. Include destination cards, category filtering for heritage, nature, beach, and food, and a sample one-day visit checklist. Use semantic HTML, CSS, and vanilla JavaScript only. Do not use React, Bootstrap, external frameworks, a backend, a database, authentication, external APIs, or live travel information. Use clearly labeled demonstration data. The page must be responsive on mobile and desktop screens, use accessible headings and labels, provide keyboard-friendly controls and visible focus styles, and work without a backend. Provide separate index.html, style.css, and script.js files. Acceptance criteria: cards are visible, filtering works, the checklist is interactive, and the layout is readable on mobile.

Actual Copilot Output:
Prepared implementation is in the project root. After running Copilot, preserve its actual files in `outputs/task-3-structured/` and describe any differences.

Comparison with Zero-Shot:
- Structured prompt adds a specific Marinduque context and target users.
- Structured prompt specifies three core features instead of only requesting a webpage.
- Structured prompt sets technology, scope, accessibility, and responsive-design constraints.

- Task 4A — Few-Shot Prompting
Objective: Use examples to make destination data more consistent.

Exact Prompt:
 Create tourism destination data using this format. Example 1: Name: Boac Heritage Town; Category: Heritage; Location: Boac, Marinduque; Description: A demonstration entry highlighting historic buildings, local culture, and walking-tour activities. Example 2: Name: Poctoy White Beach; Category: Beach; Location: Torrijos, Marinduque; Description: A demonstration entry describing a beach destination suitable for relaxation and sightseeing. Using the same format, create four additional demonstration destinations in Marinduque. Use Heritage, Nature, Beach, and Food categories. Then render all entries as cards and add a category filter using semantic HTML, CSS, and vanilla JavaScript.

Actual Copilot Output:
Preserve the actual generated data or code in `outputs/task-4-few-shot/`.

What Worked:
Record whether every item followed the same fields and whether the cards were consistently rendered.

What Needs Improvement:
Record any inconsistent categories, missing descriptions, or filter problems.

- Task 4B — Role Assignment
Objective: Ask Copilot to inspect the same interface as an accessibility reviewer.

Exact Prompt:
 Act as a frontend accessibility reviewer. Review my Marinduque Heritage and Eco-Tour Guide interface and its HTML, CSS, and JavaScript. Check semantic structure, heading order, labels for form controls, keyboard access, visible focus indicators, color contrast, button usability, and mobile usability. Identify the most important problems and recommend targeted corrections without adding a backend, external API, or major new features. Explain how to verify each recommendation in the browser.

Actual Copilot Output:
Save the actual review in `outputs/task-4-role-review/accessibility-review.md`.

Observation:
Record the accessibility concerns Copilot actually identified.

- Task 5 — Structured Analysis and Refinement
Objective: Identify and correct a specific implementation weakness.

Exact Prompt:
 Review the current Marinduque Heritage and Eco-Tour Guide against the original requirements. Check whether the category filter works correctly, whether the checklist interaction works, whether the HTML uses semantic elements, whether controls are keyboard accessible, and whether the page works on mobile screens. Identify the two most important implementation issues based on the actual code. For each issue, provide the problem, the smallest appropriate correction, the file and code area to change, and a browser-based verification procedure. Give only a concise technical diagnosis, correction, and testing procedure.

Actual Copilot Output:
Save the actual analysis in `outputs/task-5-analysis/analysis.md`.

Selected Correction and Verification:
The prepared draft includes a working category filter, accessible form label, visible focus styles, checklist progress, and a clear button. Verify these manually in a browser. Replace this section with the actual Copilot-recommended correction and your test evidence.

- Task 6 — Comparison and Reflection
| Technique           | Observation                                                |
| Zero-Shot           | Record what Copilot assumed or omitted.                    |
| Structured Prompt   | Record what improved after adding context and constraints. |
| Few-Shot            | Record what became more consistent.                        |
| Role Assignment     | Record the specialized concerns identified.                |
| Structured Analysis | Record the correction that was verified.                   |

- Final Reflection
Write your own reflection based on the actual experiments. Explain which prompt produced the most useful result and why. Mention that AI-generated code was inspected and tested rather than accepted automatically.
