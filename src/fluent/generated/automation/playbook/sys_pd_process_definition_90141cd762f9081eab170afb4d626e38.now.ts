import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['90141cd762f9081eab170afb4d626e38'],
    table: 'sys_pd_process_definition',
    data: {
        access: 'public',
        active: 'true',
        allow_as_nested: 'true',
        data_retention_period_override: '6_week',
        description: 'Exposure',
        execution_type: 'on_demand',
        label: 'Exposure',
        launcher_show_record_form: 'false',
        name: 'exposure_case',
        permission:
            '{"VIEW":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"LANE_ADD_OPTIONAL_ACTIVITY":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"CANCEL":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"RESTART":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"LANE_RESTART":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"ACTIVITY_RESTART":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"LAUNCH":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}]}',
        process_type: '52c6d3eeff1be2102c2fffffffffff44',
        public_access: 'false',
        restartable: 'RESTARTABLE_TRUE',
        run_on_pad_engine: 'false',
        run_strategy: 'run_once',
        run_strategy_on_process_definition: 'true',
        schema_version: '3',
        start_non_blocking: 'true',
        status: 'published',
        view_type: 'DIAGRAM',
        snapshot: '7278cfaf83e983106a009529feaad3f8',
        sync_state: 'COMPLETE',
    },
})
