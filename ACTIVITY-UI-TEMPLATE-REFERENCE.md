# Playbook Activity UI — End-to-End Template Reference

A single, complete, **clone-this** reference for a Playbook activity and its UI in the
Policy Suite app (`x_gegis_ins_policy`).

> ## ⭐ Live clone target: "Template to Clone"
> A purpose-built, fully-wired activity exists in the repo specifically for cloning. Copy these
> 15 records, run find/replace of the sys_ids below → fresh ones, change the names, register in
> `keys.ts`, Build & Install.
>
> | Record | sys_id | File (under `src/fluent/generated/`) |
> |---|---|---|
> | Activity Definition | `833c6e9782f8bd740bd8cbc24453ac94` | `automation/activity-definition/sys_pd_activity_definition_833c6e9782f8bd740bd8cbc24453ac94.now.ts` |
> | Element Mappings (×2) | (inside def-flow file) | `automation/flow/sys_pd_activity_definition_833c6e9782f8bd740bd8cbc24453ac94.now.ts` |
> | Playbook Actions (×3) | `e8bc4c1d…`, `0c7127c0…`, `b5d0733b…` | `other/sys-playbook-experience-action-assignment-map/…` |
> | Layout | `306bdbc649a21791dbac0a2b880fe1c7` | `other/sys-pd-activity-type/sys_pd_activity_type_306bdbc649a21791dbac0a2b880fe1c7.now.ts` |
> | Experience Props (×6) | `f6711d12…`,`01cce022…`,`7f63a1f0…`,`31da71ee…`,`d63256ba…`,`6ab4ad85…` | `other/sys-pd-activity-type-prop/…` |
> | Activity UI | `419a84672eda71a08fb3aec30e37ea6f` | `other/sys-playbook-experience-activity-ui/…419a8467….now.ts` |
> | Screen | `575033d6cbd0b16257cc8a112abc4686` | `other/sys-ux-screen/sys_ux_screen_575033d6cbd0b16257cc8a112abc4686.now.ts` |
> | Macroponent | `ebf0c46d53a5c7107d5fd301a0490e4a` | shared — reuse, don't clone |
>
> Replace `Template to Clone` → your label and `x_gegis_ins_policy_template_to_clone` → your scoped name.

The annotated structure below uses **Concentration Analysis** (the activity "Template to Clone" was itself cloned from).

Every layer below is a real record in this repo. To add a brand-new activity, copy each
record, mint a new `sys_id`, change only the marked fields, register the new `sys_id`s in
`keys.ts`, then Build & Install.

---

## 1. The chain (how the records connect)

```
sys_pd_activity_definition   "Concentration Analysis"      0fb7741ea59ac558a04ec186635b52ba
        │ activity_type ─────────────────────────────────────────┐
        ▼                                                         │
sys_pd_activity_type (LAYOUT) "Concentration Analysis UI Layout"  cc6ca77193394ef9d996d171065e0b8b
        │ default_activity_ui ────────────────────────────┐      ▲
        │                                                  │      │ model (×6)
        │                                                  ▼      │
        │                          sys_playbook_experience_activity_ui (ACTIVITY UI)
        │                          "Concentration Analysis Activity UI"  8568fb5595c0c5b61042daca86a44d40
        │                                   │ experience_type ──────────┘
        │                                   │ screen ───────────────┐
        │                                   │ macroponent ──────┐   │
        │                                   │ ui_template       │   │
        │                                   ▼                   │   ▼
        │                          sys_ux_screen (SCREEN)       │  90f125bfcae75c0415e004535441d088
        │                          "Concentration Analysis Activity UI"
        │                                   │ macroponent ──────┤
        ▼                                   ▼                   ▼
   6× sys_pd_activity_type_prop      sys_ux_macroponent (SHARED "Base Activity UI")
   (experience properties)          ebf0c46d53a5c7107d5fd301a0490e4a
```

**Rule of thumb:** the Layout (`sys_pd_activity_type`) is the hub.
- The **Activity Definition** points *down* to the Layout via `activity_type`.
- The **Activity UI** points *up* to the Layout via `experience_type`, and the Layout points
  *back* to the Activity UI via `default_activity_ui` (this two-way link is what makes the
  default UI render — if either side is missing you get the blank read-only screen).
- The **Activity UI** points to its own **Screen**; both point to the **shared macroponent**.

---

## 2. Shared / platform constants (reuse verbatim — do NOT clone these)

| Purpose | Field | Value |
|---|---|---|
| Base Activity UI macroponent | `macroponent` | `ebf0c46d53a5c7107d5fd301a0490e4a` |
| Activity UI template | `ui_template` | `ecf7ce28ff313010667053ea793bf126` |
| Global Playbook Experience | `playbook_experience` | `98e09a560f2200102920c912d4767e1a` |
| Screen app config | `app_config` | `2ba981dcc31a201098c960bc0eba8f00` |
| Screen type | `screen_type` | `89ddbb5ac3113010948404186e40dd1d` |
| Screen parent macroponent | `parent_macroponent` | `64f1d8fbc3ca201098c960bc0eba8fe3` |
| Layout color | `color` | `#F1F6DB` |
| Layout color category | `color_category` | `7be0d143070e201083c548f78ad30050` |
| Layout icon | `icon` | `news_outline` |
| Activity flow source | `source` | `db1084e553a5c7107d5fd301a0490e31` (`sys_hub_flow`) |
| Activity category | `category` | `708801831b0c1010affd0e55cc4bcb81` |

---

## 3. The records (clone each; change only the **▶ CHANGE** fields)

### Layer 1 — Activity Definition  `sys_pd_activity_definition`
File: `src/fluent/generated/automation/activity-definition/sys_pd_activity_definition_<NEW_DEF_ID>.now.ts`

```ts
import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['0fb7741ea59ac558a04ec186635b52ba'],          // ▶ CHANGE: new sys_id
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: 'cc6ca77193394ef9d996d171065e0b8b',     // ▶ CHANGE: → new LAYOUT sys_id
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences: 'associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;',
        label: 'Concentration Analysis',                       // ▶ CHANGE: human label
        name: 'x_gegis_ins_policy_concentration_analysis',     // ▶ CHANGE: scoped name
        public_access: 'false',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        table: 'global',
        wait_for_completion: 'true',
    },
})
```

### Layer 2 — Layout (UI Layout)  `sys_pd_activity_type`
File: `src/fluent/generated/other/sys-pd-activity-type/sys_pd_activity_type_<NEW_LAYOUT_ID>.now.ts`

```ts
import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['cc6ca77193394ef9d996d171065e0b8b'],          // ▶ CHANGE: new LAYOUT sys_id
    table: 'sys_pd_activity_type',
    data: {
        color: '#F1F6DB',
        color_category: '7be0d143070e201083c548f78ad30050',
        default_activity_ui: '8568fb5595c0c5b61042daca86a44d40', // ▶ CHANGE: → new ACTIVITY UI sys_id
        icon: 'news_outline',
        name: 'Concentration Analysis UI Layout',              // ▶ CHANGE: "<Name> UI Layout"
    },
})
```

### Layer 3 — Experience Properties  `sys_pd_activity_type_prop`  (×6)
Folder: `src/fluent/generated/other/sys-pd-activity-type-prop/`
Six props per layout (`is_automated`, `associated_table`, `associated_record`,
`experience_status_table`, `description`, `experience_status_record`). Each has:
`model` = `model_id` = the **Layout** sys_id, and
`name` = `var__m_sys_pd_activity_type_prop_<LAYOUT_ID>`.

The 6 elements: `is_automated`, `associated_table`, `associated_record`,
`experience_status_table`, `experience_status_record`, `description`.

```ts
Record({
    $id: Now.ID['c2f735190add81a98b538cdb98c6c561'],          // ▶ CHANGE: new sys_id (×6, one per element)
    table: 'sys_pd_activity_type_prop',
    data: {
        active: 'true', array: 'false',
        column_label: 'Is Automated', element: 'is_automated', // varies per prop (see 6 elements above)
        internal_type: 'boolean', label: 'Is Automated',
        model: 'cc6ca77193394ef9d996d171065e0b8b',             // ▶ CHANGE: → new LAYOUT sys_id
        model_id: 'cc6ca77193394ef9d996d171065e0b8b',          // ▶ CHANGE: → new LAYOUT sys_id
        name: 'var__m_sys_pd_activity_type_prop_cc6ca77193394ef9d996d171065e0b8b', // ▶ CHANGE: var__m_..._<LAYOUT_ID>
        order: '100',
        // ...remaining boolean defaults copied verbatim from the template prop
    },
})
```
> Tip: copy all 6 prop files from an existing layout and run a single find/replace of the old
> Layout sys_id → new Layout sys_id (it appears in `model`, `model_id`, and `name`).
> Concentration Analysis's 6 prop sys_ids: `c2f735190add81a98b538cdb98c6c561` (is_automated),
> `16a0f46a99e10face0561b566347489b` (associated_table), `13566272b44a95f4243a93ab5efdce21`
> (associated_record), `32ac9f64375626536ee2a9e88007073d` (experience_status_table),
> `72ed755903cd5128b7d08c003bea3ad3` (experience_status_record), `e5185799388469d1c1881ef8098fa28e` (description).

### Layer 4 — Activity UI  `sys_playbook_experience_activity_ui`
File: `src/fluent/generated/other/sys-playbook-experience-activity-ui/sys_playbook_experience_activity_ui_<NEW_AUI_ID>.now.ts`

```ts
import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['8568fb5595c0c5b61042daca86a44d40'],          // ▶ CHANGE: new ACTIVITY UI sys_id
    table: 'sys_playbook_experience_activity_ui',
    data: {
        experience_type: 'cc6ca77193394ef9d996d171065e0b8b',   // ▶ CHANGE: → new LAYOUT sys_id
        macroponent: 'ebf0c46d53a5c7107d5fd301a0490e4a',       // shared — keep
        name: 'Concentration Analysis Activity UI',            // ▶ CHANGE: "<Name> Activity UI"
        playbook_experience: '98e09a560f2200102920c912d4767e1a', // shared — keep
        screen: '90f125bfcae75c0415e004535441d088',            // ▶ CHANGE: → new SCREEN sys_id
        sys_domain: 'global',
        sys_domain_path: '/',
        ui_template: 'ecf7ce28ff313010667053ea793bf126',       // shared — keep
    },
})
```

### Layer 5 — Screen  `sys_ux_screen`
File: `src/fluent/generated/other/sys-ux-screen/sys_ux_screen_<NEW_SCREEN_ID>.now.ts`
**Copy the whole template screen file verbatim** (~313 lines, including the big
`macroponent_config` JSON) and change ONLY two things:

```ts
Record({
    $id: Now.ID['90f125bfcae75c0415e004535441d088'],          // ▶ CHANGE: new SCREEN sys_id
    table: 'sys_ux_screen',
    data: {
        active: false,
        app_config: '2ba981dcc31a201098c960bc0eba8f00',        // shared — keep
        macroponent: 'ebf0c46d53a5c7107d5fd301a0490e4a',       // shared — keep
        macroponent_config: `{ ... copy VERBATIM, do not edit ... }`,
        name: 'Concentration Analysis Activity UI',            // ▶ CHANGE: "<Name> Activity UI"
        screen_type: '89ddbb5ac3113010948404186e40dd1d',       // shared — keep
        parent_macroponent: '64f1d8fbc3ca201098c960bc0eba8fe3',// shared — keep
        sys_domain: 'global', sys_domain_path: '/',
        // ...remaining fields copied verbatim
    },
})
```

### Layer 6 — Macroponent  `sys_ux_macroponent`
**Do not clone.** All Activity UIs share the one "Base Activity UI" macroponent
`ebf0c46d53a5c7107d5fd301a0490e4a`. Each screen carries its own instance config in
`macroponent_config`; the macroponent itself is the reusable component.

---

## 4. `keys.ts` registration (required)

Every new `$id` must be registered in `src/fluent/generated/keys.ts` inside the
`explicit: { ... }` block (file is CRLF; entries have **no** trailing commas):

```ts
                    '<NEW_DEF_ID>': {
                        table: 'sys_pd_activity_definition'
                        id: '<NEW_DEF_ID>'
                    }
                    '<NEW_LAYOUT_ID>': {
                        table: 'sys_pd_activity_type'
                        id: '<NEW_LAYOUT_ID>'
                    }
                    '<NEW_AUI_ID>': {
                        table: 'sys_playbook_experience_activity_ui'
                        id: '<NEW_AUI_ID>'
                    }
                    '<NEW_SCREEN_ID>': {
                        table: 'sys_ux_screen'
                        id: '<NEW_SCREEN_ID>'
                    }
                    // + one entry per new sys_pd_activity_type_prop (×6)
```

---

## 5. Clone checklist (for the developer)

1. [ ] Mint fresh random 32-hex `sys_id`s (one per new record). Do **not** reuse template
       sys_ids or invent sequential ones; any unique lowercase 32-hex GUID works.
2. [ ] Layer 1 — copy Activity Definition; set `activity_type` → new Layout, set `label`/`name`.
3. [ ] Layer 2 — copy Layout; set `name`, set `default_activity_ui` → new Activity UI.
4. [ ] Layer 3 — copy the 6 Experience Properties; replace old Layout sys_id → new in
       `model`, `model_id`, `name` (`var__m_sys_pd_activity_type_prop_<LAYOUT_ID>`).
5. [ ] Layer 4 — copy Activity UI; set `experience_type` → new Layout, `screen` → new Screen,
       `name` = "<Name> Activity UI". Keep macroponent / ui_template / playbook_experience.
6. [ ] Layer 5 — copy the whole Screen file verbatim; change only `$id` and `name`.
7. [ ] Register every new `sys_id` in `keys.ts` (no trailing commas; keep `explicit:` block).
8. [ ] Build & Install. Verify in the `sys_playbook_experience_activity_ui` list the new
       record shows **Layout** and **UI Template** populated (not `(empty)`).

---

## 6. Verified working reference files (open these to copy)

| Layer | File |
|---|---|
| Activity Definition | `automation/activity-definition/sys_pd_activity_definition_0fb7741ea59ac558a04ec186635b52ba.now.ts` |
| Layout | `other/sys-pd-activity-type/sys_pd_activity_type_cc6ca77193394ef9d996d171065e0b8b.now.ts` |
| Experience Props (×6) | `other/sys-pd-activity-type-prop/sys_pd_activity_type_prop_{c2f735190add81a98b538cdb98c6c561, 16a0f46a99e10face0561b566347489b, 13566272b44a95f4243a93ab5efdce21, 32ac9f64375626536ee2a9e88007073d, 72ed755903cd5128b7d08c003bea3ad3, e5185799388469d1c1881ef8098fa28e}.now.ts` (model = the layout) |
| Activity UI | `other/sys-playbook-experience-activity-ui/sys_playbook_experience_activity_ui_8568fb5595c0c5b61042daca86a44d40.now.ts` |
| Screen | `other/sys-ux-screen/sys_ux_screen_90f125bfcae75c0415e004535441d088.now.ts` |
| Macroponent (shared) | `other/sys-ux-macroponent/sys_ux_macroponent_ebf0c46d53a5c7107d5fd301a0490e4a.now.ts` |

All paths are under `src/fluent/generated/`.
