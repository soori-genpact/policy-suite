import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// ===== Exposure Playbook =====

// Activity 1: Initiate Exposure Management
Record({
    $id: Now.ID['9eb704f668f08d5c24dcaed532ad8866'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: 'c8440448234e88f1252d6a488d306232',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=all;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;wait=all;',
        label: 'Initiate Exposure Management',
        name: 'x_gegis_ins_policy_initiate_exposure_management',
        public_access: 'false',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        table: 'global',
        wait_for_completion: 'true',
        description: 'Initiate Exposure Management Acitvity Definition',
        enable_ai_agent: 'off',
    },
})
Record({
    $id: Now.ID['977a2af581f36020b021310d24d83615'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '9eb704f668f08d5c24dcaed532ad8866',
        table: 'var__m_sys_pd_activity_type_prop_c8440448234e88f1252d6a488d306232',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['43e82d28d5e401e23100c80e40dbee83'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '9eb704f668f08d5c24dcaed532ad8866',
        table: 'var__m_sys_pd_activity_type_prop_c8440448234e88f1252d6a488d306232',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})

// Activity 2: Geo Mapping
Record({
    $id: Now.ID['72e34ca53dd36e4269727d732e845d69'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: 'a9b7d4312bac6b2321a0bf850fe5a641',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=all;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;wait=all;',
        label: 'Geo Mapping',
        name: 'x_gegis_ins_policy_geo_mapping',
        public_access: 'false',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        table: 'global',
        wait_for_completion: 'true',
        description: 'Geo Mapping  Acitvity Definition',
        enable_ai_agent: 'off',
    },
})
Record({
    $id: Now.ID['e384747627af237b588cab7c1d41ab02'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '72e34ca53dd36e4269727d732e845d69',
        table: 'var__m_sys_pd_activity_type_prop_a9b7d4312bac6b2321a0bf850fe5a641',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['71b4156c0bf1f9603f3d2d8e27964b63'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '72e34ca53dd36e4269727d732e845d69',
        table: 'var__m_sys_pd_activity_type_prop_a9b7d4312bac6b2321a0bf850fe5a641',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})

// Activity 3: Catastrophe Modelling
Record({
    $id: Now.ID['c93a115b91e74ac2ac2b07491ec8a112'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: 'f4bdb10fe1b55493857223a061c88032',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=all;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;wait=all;',
        label: 'Catastrophe Modelling',
        name: 'x_gegis_ins_policy_catastrophe_modelling',
        public_access: 'false',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        table: 'global',
        wait_for_completion: 'true',
        description: 'Catastrophe Modelling Acitvity Definition',
        enable_ai_agent: 'off',
    },
})
Record({
    $id: Now.ID['c7fae34cf1ede24de486c9535ab516d1'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: 'c93a115b91e74ac2ac2b07491ec8a112',
        table: 'var__m_sys_pd_activity_type_prop_f4bdb10fe1b55493857223a061c88032',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['375505ebd26e3e30028a037756012f20'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: 'c93a115b91e74ac2ac2b07491ec8a112',
        table: 'var__m_sys_pd_activity_type_prop_f4bdb10fe1b55493857223a061c88032',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})

// Activity 4: Capacity Management
Record({
    $id: Now.ID['7577df2df5c9ad613e9b8e06a7b815c1'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: '70c7c0603965c1cbcdb2a144a8ad79f3',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=all;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;wait=all;',
        label: 'Capacity Management',
        name: 'x_gegis_ins_policy_capacity_management',
        public_access: 'false',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        table: 'global',
        wait_for_completion: 'true',
        description: 'Capacity Management Acitvity Definition',
        enable_ai_agent: 'off',
    },
})
Record({
    $id: Now.ID['77499fe2f8555129ff6681394584ffe3'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '7577df2df5c9ad613e9b8e06a7b815c1',
        table: 'var__m_sys_pd_activity_type_prop_70c7c0603965c1cbcdb2a144a8ad79f3',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['0bd8545374e9df3cdf7b73d802876191'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '7577df2df5c9ad613e9b8e06a7b815c1',
        table: 'var__m_sys_pd_activity_type_prop_70c7c0603965c1cbcdb2a144a8ad79f3',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})

// Activity 5: Concentration Analysis
Record({
    $id: Now.ID['0fb7741ea59ac558a04ec186635b52ba'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: 'cc6ca77193394ef9d996d171065e0b8b',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=all;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;wait=all;',
        label: 'Concentration Analysis',
        name: 'x_gegis_ins_policy_concentration_analysis',
        public_access: 'false',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        table: 'global',
        wait_for_completion: 'true',
        description: 'Concentration Analysis Acitvity Definition',
        enable_ai_agent: 'off',
    },
})
Record({
    $id: Now.ID['62c11a620539c4717ed15d73f82d2ee1'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '0fb7741ea59ac558a04ec186635b52ba',
        table: 'var__m_sys_pd_activity_type_prop_cc6ca77193394ef9d996d171065e0b8b',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['01287e486ee747ef5e618dffd2004ee3'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '0fb7741ea59ac558a04ec186635b52ba',
        table: 'var__m_sys_pd_activity_type_prop_cc6ca77193394ef9d996d171065e0b8b',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})

// Activity 6: Portfolio Optimization
Record({
    $id: Now.ID['dce712a07dab66147e0fb047032e89d7'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: '798f64cd787f68aca909fa1e10f74aac',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=all;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;wait=all;',
        label: 'Portfolio Optimization',
        name: 'x_gegis_ins_policy_portfolio_optimization',
        public_access: 'false',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        table: 'global',
        wait_for_completion: 'true',
        description: 'Portfolio Optimization Acitvity Definition',
        enable_ai_agent: 'off',
    },
})
Record({
    $id: Now.ID['120b7ef873ca7f52aeedd273617f4b99'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: 'dce712a07dab66147e0fb047032e89d7',
        table: 'var__m_sys_pd_activity_type_prop_798f64cd787f68aca909fa1e10f74aac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['bc68dde4e6dccf6efcdbac3c8f638934'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: 'dce712a07dab66147e0fb047032e89d7',
        table: 'var__m_sys_pd_activity_type_prop_798f64cd787f68aca909fa1e10f74aac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})

// Activity 7: Exposure Management Summary
Record({
    $id: Now.ID['8285556e619103a7f098b2c606b50a12'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: '56aed84476347689d139156ec8266212',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=all;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;wait=all;',
        label: 'Exposure Management Summary',
        name: 'x_gegis_ins_policy_exposure_management_summary',
        public_access: 'false',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        table: 'global',
        wait_for_completion: 'true',
        description: 'Exposure Management Summary Acitvity Definition',
        enable_ai_agent: 'off',
    },
})
Record({
    $id: Now.ID['1ca60988c574daf247d26832e62ec7c2'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '8285556e619103a7f098b2c606b50a12',
        table: 'var__m_sys_pd_activity_type_prop_56aed84476347689d139156ec8266212',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['fdb4f2522108d47d93492621af8a596b'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '8285556e619103a7f098b2c606b50a12',
        table: 'var__m_sys_pd_activity_type_prop_56aed84476347689d139156ec8266212',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
