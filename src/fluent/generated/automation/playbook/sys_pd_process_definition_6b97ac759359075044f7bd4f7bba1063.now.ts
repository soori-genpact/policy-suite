import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6b97ac759359075044f7bd4f7bba1063'],
    table: 'sys_pd_process_definition',
    data: {
        access: 'public',
        active: 'true',
        allow_as_nested: 'true',
        data_retention_period_override: '6_week',
        description: 'Clearance Case Playbook',
        designer_state: '{"diagram":{"hiddenElements":{"edges":{}}}}',
        execution_type: 'on_demand',
        label: 'Clearance Case Playbook',
        launcher_show_record_form: 'false',
        name: 'clearance_case_playbook',
        permission:
            '{"VIEW":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"LANE_ADD_OPTIONAL_ACTIVITY":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"CANCEL":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"RESTART":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"LANE_RESTART":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"ACTIVITY_RESTART":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"LAUNCH":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}]}',
        process_type: '52c6d3eeff1be2102c2fffffffffff44',
        public_access: 'true',
        restartable: 'RESTARTABLE_TRUE',
        run_on_pad_engine: 'false',
        run_strategy: 'run_once',
        run_strategy_on_process_definition: 'true',
        schema_version: '3',
        snapshot: 'd2217e6f83e583106a009529feaad342',
        start_non_blocking: 'true',
        status: 'published',
        sync_state: 'COMPLETE',
        view_type: 'DIAGRAM',
    },
})
