import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// ===== Quote & Bind Playbook =====

// Activity 1: Product Selection Details
Record({
    $id: Now.ID['e08ddec205bb4af7ad2e2a95e9a406d9'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: 'cbbdb6ac7670074d6a19c9d22290c282',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;',
        label: 'Product Selection Details',
        name: 'x_gegis_ins_policy_product_selection_details',
        public_access: 'true',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'true',
        table: 'global',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['4d32e63a483e2486e87fab17e4d19b08'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: 'e08ddec205bb4af7ad2e2a95e9a406d9',
        table: 'var__m_sys_pd_activity_type_prop_cbbdb6ac7670074d6a19c9d22290c282',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['8ff07f0fc59a77768a0a8228133bb5ad'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: 'e08ddec205bb4af7ad2e2a95e9a406d9',
        table: 'var__m_sys_pd_activity_type_prop_cbbdb6ac7670074d6a19c9d22290c282',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})

// Activity 2: Quote Workspace
Record({
    $id: Now.ID['504cf189cb4b904db5ccf5a789ff9aed'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: '777635957093577a89e9c312694d1513',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;',
        label: 'Quote Workspace',
        name: 'x_gegis_ins_policy_quote_workspace',
        public_access: 'true',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'true',
        table: 'global',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['2df3e8f4b3fc492d9905bce21f8a7280'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '504cf189cb4b904db5ccf5a789ff9aed',
        table: 'var__m_sys_pd_activity_type_prop_777635957093577a89e9c312694d1513',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['7225a06878fc364ad7cd8cbcb9a43113'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '504cf189cb4b904db5ccf5a789ff9aed',
        table: 'var__m_sys_pd_activity_type_prop_777635957093577a89e9c312694d1513',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})

// Activity 3: Rating and Pricing
Record({
    $id: Now.ID['79164f0773b292e336a3120ae8831a93'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: 'd9b42f4542c2d9c76539c5ce7add0b47',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;',
        label: 'Rating and Pricing',
        name: 'x_gegis_ins_policy_rating_and_pricing',
        public_access: 'true',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'true',
        table: 'global',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['4d48854df806dd3bbc58fdc8498449ee'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '79164f0773b292e336a3120ae8831a93',
        table: 'var__m_sys_pd_activity_type_prop_d9b42f4542c2d9c76539c5ce7add0b47',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['97678fef5ec2acdb194171a0032427e5'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '79164f0773b292e336a3120ae8831a93',
        table: 'var__m_sys_pd_activity_type_prop_d9b42f4542c2d9c76539c5ce7add0b47',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})

// Activity 4: Quote Selection
Record({
    $id: Now.ID['212f8f8d049530afaf3ab145ba6cf319'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: 'fec003462b5cd211d3b32ea59f25d27d',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;',
        label: 'Quote Selection',
        name: 'x_gegis_ins_policy_quote_selection',
        public_access: 'true',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'true',
        table: 'global',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['ef6ca6f5bac13a5c0306accbec09fb25'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '212f8f8d049530afaf3ab145ba6cf319',
        table: 'var__m_sys_pd_activity_type_prop_fec003462b5cd211d3b32ea59f25d27d',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['5c6c540f6f25fd74216b7960b3586f54'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '212f8f8d049530afaf3ab145ba6cf319',
        table: 'var__m_sys_pd_activity_type_prop_fec003462b5cd211d3b32ea59f25d27d',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})

// Activity 5: Contract Review
Record({
    $id: Now.ID['9ab16a5506079bc4912295aa357c2f14'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: '1d5839fc47ff07f7e3ffe8e5f960b0dd',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;',
        label: 'Contract Review',
        name: 'x_gegis_ins_policy_contract_review',
        public_access: 'true',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'true',
        table: 'global',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['d2bdb5508e7679bd5c4d730f60ed7056'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '9ab16a5506079bc4912295aa357c2f14',
        table: 'var__m_sys_pd_activity_type_prop_1d5839fc47ff07f7e3ffe8e5f960b0dd',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['54495d1eee8bd31e9c798501cb078959'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '9ab16a5506079bc4912295aa357c2f14',
        table: 'var__m_sys_pd_activity_type_prop_1d5839fc47ff07f7e3ffe8e5f960b0dd',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})

// Activity 6: Activation
Record({
    $id: Now.ID['35934e3b557fca3ff1d64abc3b7c9eb1'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: '5e8d1c459d6d7e13ea6aa3874327506b',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;',
        label: 'Activation',
        name: 'x_gegis_ins_policy_activation',
        public_access: 'true',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'true',
        table: 'global',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['a0e936fa5c37d2c945f2de17c92f5bc4'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '35934e3b557fca3ff1d64abc3b7c9eb1',
        table: 'var__m_sys_pd_activity_type_prop_5e8d1c459d6d7e13ea6aa3874327506b',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['b77bd8b40db284a8a6b7cc2d884d7054'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '35934e3b557fca3ff1d64abc3b7c9eb1',
        table: 'var__m_sys_pd_activity_type_prop_5e8d1c459d6d7e13ea6aa3874327506b',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
