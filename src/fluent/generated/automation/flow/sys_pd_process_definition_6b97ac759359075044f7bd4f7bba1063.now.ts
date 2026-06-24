import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['fa58a8f59359075044f7bd4f7bba10db'],
    table: 'sys_element_mapping',
    data: {
        field: 'parent_record',
        id: '5be3ec638c9fea70c9dd578cf838f63b',
        table: 'var__m_sys_pd_process_input_6b97ac759359075044f7bd4f7bba1063',
        value: '{{triggerRecord}}',
    },
})
Record({
    $id: Now.ID['40682cf59359075044f7bd4f7bba103c'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"trigger_on_unique_change":"org.mozilla.javascript.UniqueTag@4cd3eeab: NOT_FOUND","parent_record":{"elementMapping":"{{triggerRecord}}","variableValue":null,"elementMappingOrVariableValue":"{{triggerRecord}}"},"run_trigger":"org.mozilla.javascript.UniqueTag@4cd3eeab: NOT_FOUND"}',
        identifier: '5be3ec638c9fea70c9dd578cf838f63b',
        identifier_type: 'playbook',
        runner: 'PDTriggerRunner',
        trigger: '3b582cf59359075044f7bd4f7bba103a',
    },
})
Record({
    $id: Now.ID['3b582cf59359075044f7bd4f7bba103a'],
    table: 'sys_flow_record_trigger',
    data: {
        active: 'true',
        condition: '^EQ',
        on_delete: 'false',
        on_insert: 'true',
        on_update: 'false',
        run_flow_in: 'background',
        run_on_extended: 'false',
        run_when_setting: 'both',
        run_when_user_setting: 'any',
        sys_domain: 'global',
        sys_domain_path: '/',
        table: 'x_gegis_ins_policy_clearance_case',
    },
})
Record({
    $id: Now.ID['a6ca67ea832d0310f70ac6a6feaad3a8'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"trigger_on_unique_change":"org.mozilla.javascript.UniqueTag@24f3972a: NOT_FOUND","parent_record":{"elementMapping":"{{triggerRecord}}","variableValue":null,"elementMappingOrVariableValue":"{{triggerRecord}}"},"run_trigger":"org.mozilla.javascript.UniqueTag@24f3972a: NOT_FOUND"}',
        identifier: '5be3ec638c9fea70c9dd578cf838f63b',
        identifier_type: 'playbook',
        runner: 'PDTriggerRunner',
        trigger: 'eeca67ea832d0310f70ac6a6feaad3a6',
    },
})
Record({
    $id: Now.ID['eeca67ea832d0310f70ac6a6feaad3a6'],
    table: 'sys_flow_record_trigger',
    data: {
        active: 'true',
        condition: '^EQ',
        on_delete: 'false',
        on_insert: 'true',
        on_update: 'false',
        run_flow_in: 'background',
        run_on_extended: 'false',
        run_when_setting: 'both',
        run_when_user_setting: 'any',
        sys_domain: 'global',
        sys_domain_path: '/',
        table: 'x_gegis_ins_policy_clearance_case',
    },
})
Record({
    $id: Now.ID['5ff28c76fbe18b58b70efc647befdc29'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"trigger_on_unique_change":"org.mozilla.javascript.UniqueTag@577373b2: NOT_FOUND","parent_record":{"elementMapping":"{{triggerRecord}}","variableValue":null,"elementMappingOrVariableValue":"{{triggerRecord}}"},"run_trigger":"org.mozilla.javascript.UniqueTag@577373b2: NOT_FOUND"}',
        identifier: '5be3ec638c9fea70c9dd578cf838f63b',
        identifier_type: 'playbook',
        runner: 'PDTriggerRunner',
        trigger: 'eeca67ea832d0310f70ac6a6feaad3a6',
    },
})
Record({
    $id: Now.ID['1e7a5cf6fba98b58b70efc647befdce9'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"trigger_on_unique_change":"org.mozilla.javascript.UniqueTag@577373b2: NOT_FOUND","parent_record":{"elementMapping":"{{triggerRecord}}","variableValue":null,"elementMappingOrVariableValue":"{{triggerRecord}}"},"run_trigger":"org.mozilla.javascript.UniqueTag@577373b2: NOT_FOUND"}',
        identifier: '5be3ec638c9fea70c9dd578cf838f63b',
        identifier_type: 'playbook',
        runner: 'PDTriggerRunner',
        trigger: '3fd6dcbefb298b58b70efc647befdce5',
    },
})
Record({
    $id: Now.ID['3fd6dcbefb298b58b70efc647befdce5'],
    table: 'sys_flow_record_trigger',
    data: {
        active: 'true',
        condition: '^EQ',
        on_delete: 'false',
        on_insert: 'true',
        on_update: 'false',
        run_flow_in: 'background',
        run_on_extended: 'false',
        run_when_setting: 'both',
        run_when_user_setting: 'any',
        sys_domain: 'global',
        sys_domain_path: '/',
        table: 'x_gegis_ins_policy_clearance_case',
    },
})
Record({
    $id: Now.ID['b6668143fbedcf58b70efc647befdc78'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_record',
        id: '1226e9941008eba0fd06d5ab7d71a113',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./end.record}}',
    },
})
Record({
    $id: Now.ID['76668143fbedcf58b70efc647befdc79'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_table',
        id: '1226e9941008eba0fd06d5ab7d71a113',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['32668143fbedcf58b70efc647befdc79'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: '1226e9941008eba0fd06d5ab7d71a113',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['3e668143fbedcf58b70efc647befdc79'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '1226e9941008eba0fd06d5ab7d71a113',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['fa668143fbedcf58b70efc647befdc78'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_table',
        id: '1226e9941008eba0fd06d5ab7d71a113',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['f2668143fbedcf58b70efc647befdc7a'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '1226e9941008eba0fd06d5ab7d71a113',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
Record({
    $id: Now.ID['f6668143fbedcf58b70efc647befdc77'],
    table: 'sys_element_mapping',
    data: {
        field: 'wait',
        id: '1226e9941008eba0fd06d5ab7d71a113',
        table: 'var__m_sys_hub_flow_input_db1084e553a5c7107d5fd301a0490e31',
    },
})
Record({
    $id: Now.ID['f45204c7fbe98f58b70efc647befdcd3'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_record',
        id: '1f7d42b83511b3102a24e14342b26217',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000153a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['b45204c7fbe98f58b70efc647befdcd4'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_table',
        id: '1f7d42b83511b3102a24e14342b26217',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000153a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['705204c7fbe98f58b70efc647befdcd4'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: '1f7d42b83511b3102a24e14342b26217',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000153a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['fc5204c7fbe98f58b70efc647befdcd4'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '1f7d42b83511b3102a24e14342b26217',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000153a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['3c5204c7fbe98f58b70efc647befdcd3'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_table',
        id: '1f7d42b83511b3102a24e14342b26217',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000153a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['345204c7fbe98f58b70efc647befdcd5'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '1f7d42b83511b3102a24e14342b26217',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000153a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./end.automated}}',
    },
})
Record({
    $id: Now.ID['785204c7fbe98f58b70efc647befdcd0'],
    table: 'sys_element_mapping',
    data: {
        field: 'message',
        id: '1f7d42b83511b3102a24e14342b26217',
        table: 'var__m_sys_hub_flow_input_db1084e553a5c7107d5fd301a0490e31',
    },
})
Record({
    $id: Now.ID['b45204c7fbe98f58b70efc647befdcd1'],
    table: 'sys_element_mapping',
    data: {
        field: 'wait',
        id: '1f7d42b83511b3102a24e14342b26217',
        table: 'var__m_sys_hub_flow_input_db1084e553a5c7107d5fd301a0490e31',
    },
})
Record({
    $id: Now.ID['f8b249cffb6dcf58b70efc647befdccd'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_record',
        id: '30110ae7e29d68978fa238a5db30397d',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000253a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./end.record}}',
    },
})
Record({
    $id: Now.ID['b8b249cffb6dcf58b70efc647befdcce'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_table',
        id: '30110ae7e29d68978fa238a5db30397d',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000253a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['74b249cffb6dcf58b70efc647befdcce'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: '30110ae7e29d68978fa238a5db30397d',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000253a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['38b20dcffb6dcf58b70efc647befdc30'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '30110ae7e29d68978fa238a5db30397d',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000253a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['30b249cffb6dcf58b70efc647befdcce'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_table',
        id: '30110ae7e29d68978fa238a5db30397d',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000253a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['fcb20dcffb6dcf58b70efc647befdc30'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '30110ae7e29d68978fa238a5db30397d',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000253a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
Record({
    $id: Now.ID['38b249cffb6dcf58b70efc647befdccc'],
    table: 'sys_element_mapping',
    data: {
        field: 'wait',
        id: '30110ae7e29d68978fa238a5db30397d',
        table: 'var__m_sys_hub_flow_input_db1084e553a5c7107d5fd301a0490e31',
    },
})
Record({
    $id: Now.ID['26440dc7fbadcf58b70efc647befdc3d'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_record',
        id: '8f1b29f7318762c64c786db5b3ef6343',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000353a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./end.record}}',
    },
})
Record({
    $id: Now.ID['26440dc7fbadcf58b70efc647befdc3e'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_table',
        id: '8f1b29f7318762c64c786db5b3ef6343',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000353a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['ae440dc7fbadcf58b70efc647befdc3d'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: '8f1b29f7318762c64c786db5b3ef6343',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000353a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['ea440dc7fbadcf58b70efc647befdc3e'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '8f1b29f7318762c64c786db5b3ef6343',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000353a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['6a440dc7fbadcf58b70efc647befdc3d'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_table',
        id: '8f1b29f7318762c64c786db5b3ef6343',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000353a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['a2440dc7fbadcf58b70efc647befdc3f'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '8f1b29f7318762c64c786db5b3ef6343',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000353a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
Record({
    $id: Now.ID['62440dc7fbadcf58b70efc647befdc3c'],
    table: 'sys_element_mapping',
    data: {
        field: 'wait',
        id: '8f1b29f7318762c64c786db5b3ef6343',
        table: 'var__m_sys_hub_flow_input_db1084e553a5c7107d5fd301a0490e31',
    },
})
Record({
    $id: Now.ID['53a54d4ffbadcf58b70efc647befdcaa'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_record',
        id: 'b33fa36eba2b98cf0987d5dc04f0b3b1',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000453a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./end.record}}',
    },
})
Record({
    $id: Now.ID['93a58d4ffbadcf58b70efc647befdc59'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_table',
        id: 'b33fa36eba2b98cf0987d5dc04f0b3b1',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000453a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['dba54d4ffbadcf58b70efc647befdcaa'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: 'b33fa36eba2b98cf0987d5dc04f0b3b1',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000453a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['5ba58d4ffbadcf58b70efc647befdc59'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: 'b33fa36eba2b98cf0987d5dc04f0b3b1',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000453a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['97a54d4ffbadcf58b70efc647befdcaa'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_table',
        id: 'b33fa36eba2b98cf0987d5dc04f0b3b1',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000453a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['13a58d4ffbadcf58b70efc647befdc5a'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: 'b33fa36eba2b98cf0987d5dc04f0b3b1',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000453a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
Record({
    $id: Now.ID['93a54d4ffbadcf58b70efc647befdca9'],
    table: 'sys_element_mapping',
    data: {
        field: 'wait',
        id: 'b33fa36eba2b98cf0987d5dc04f0b3b1',
        table: 'var__m_sys_hub_flow_input_db1084e553a5c7107d5fd301a0490e31',
    },
})
Record({
    $id: Now.ID['be57c947fbedcf58b70efc647befdcb5'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_record',
        id: 'd50bfa7581d098b7eaab7b0d89ac4372',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000653a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./end.record}}',
    },
})
Record({
    $id: Now.ID['7e57c947fbedcf58b70efc647befdcb6'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_table',
        id: 'd50bfa7581d098b7eaab7b0d89ac4372',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000653a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['3a57c947fbedcf58b70efc647befdcb6'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: 'd50bfa7581d098b7eaab7b0d89ac4372',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000653a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['3657c947fbedcf58b70efc647befdcb7'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: 'd50bfa7581d098b7eaab7b0d89ac4372',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000653a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['f257c947fbedcf58b70efc647befdcb6'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_table',
        id: 'd50bfa7581d098b7eaab7b0d89ac4372',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000653a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['fa57c947fbedcf58b70efc647befdcb7'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: 'd50bfa7581d098b7eaab7b0d89ac4372',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000653a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
Record({
    $id: Now.ID['fe57c947fbedcf58b70efc647befdcb4'],
    table: 'sys_element_mapping',
    data: {
        field: 'wait',
        id: 'd50bfa7581d098b7eaab7b0d89ac4372',
        table: 'var__m_sys_hub_flow_input_db1084e553a5c7107d5fd301a0490e31',
    },
})
Record({
    $id: Now.ID['c1f7c50bfbedcf58b70efc647befdcd9'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_record',
        id: '34b4c15a4bc66f08d9d96c49c3c9f310',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000753a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./end.record}}',
    },
})
Record({
    $id: Now.ID['81f7c50bfbedcf58b70efc647befdcda'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_table',
        id: '34b4c15a4bc66f08d9d96c49c3c9f310',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000753a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['4df7c50bfbedcf58b70efc647befdcd9'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: '34b4c15a4bc66f08d9d96c49c3c9f310',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000753a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['49f7c50bfbedcf58b70efc647befdcda'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '34b4c15a4bc66f08d9d96c49c3c9f310',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000753a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['09f7c50bfbedcf58b70efc647befdcd9'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_table',
        id: '34b4c15a4bc66f08d9d96c49c3c9f310',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000753a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['01f7c50bfbedcf58b70efc647befdcdb'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '34b4c15a4bc66f08d9d96c49c3c9f310',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000753a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
Record({
    $id: Now.ID['05f7c50bfbedcf58b70efc647befdcd8'],
    table: 'sys_element_mapping',
    data: {
        field: 'wait',
        id: '34b4c15a4bc66f08d9d96c49c3c9f310',
        table: 'var__m_sys_hub_flow_input_db1084e553a5c7107d5fd301a0490e31',
    },
})
Record({
    $id: Now.ID['67b2f41f93e58310ce18b5d97bba10f9'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"trigger_on_unique_change":"org.mozilla.javascript.UniqueTag@6169fcbb: NOT_FOUND","parent_record":{"elementMapping":"{{triggerRecord}}","variableValue":null,"elementMappingOrVariableValue":"{{triggerRecord}}"},"run_trigger":"org.mozilla.javascript.UniqueTag@6169fcbb: NOT_FOUND"}',
        identifier: '5be3ec638c9fea70c9dd578cf838f63b',
        identifier_type: 'playbook',
        runner: 'PDTriggerRunner',
        trigger: '2fb2f41f93e58310ce18b5d97bba10f7',
    },
})
Record({
    $id: Now.ID['2fb2f41f93e58310ce18b5d97bba10f7'],
    table: 'sys_flow_record_trigger',
    data: {
        active: 'true',
        condition: '^EQ',
        on_delete: 'false',
        on_insert: 'true',
        on_update: 'false',
        run_flow_in: 'background',
        run_on_extended: 'false',
        run_when_setting: 'both',
        run_when_user_setting: 'any',
        sys_domain: 'global',
        sys_domain_path: '/',
        table: 'x_gegis_ins_policy_clearance_case',
    },
})
