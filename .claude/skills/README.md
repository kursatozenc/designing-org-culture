# Skills

Skills vendored into the repo so they load in every Claude Code session on this
project, including web sessions, whose containers are rebuilt from a fresh clone
each time. A skill installed into `~/.claude/skills/` in one of those containers
disappears with it; a skill committed here does not.

| Skill | What it does |
| --- | --- |
| `no-ai-slop` | Edits a draft into sharper writing while keeping the writer's voice, or audits it and names the AI patterns without rewriting. |

## no-ai-slop

Upstream: [petergyang/no-ai-slop](https://github.com/petergyang/no-ai-slop), MIT,
vendored at commit `000650b` (2026-09-01). Copied from the upstream
`skills/no-ai-slop/` directory unchanged, plus the repo's `LICENSE`.

Useful here for anything that goes out under the course's name — people-page
copy, session briefs, the partner one-pagers, the emails that recruit a partner
org. Ask for the work, or name it:

- "Take the AI slop out of this partner email."
- "Does this session brief read as AI-written?"
- "/no-ai-slop (paste the draft)"

It edits by default. Ask it to audit, scan, or flag and it reports the patterns
it found with the offending lines quoted, and leaves the draft alone.

To update it, copy the upstream `skills/no-ai-slop/` directory over this one and
note the new commit above. Nothing here is patched, so an update is a clean
overwrite.
