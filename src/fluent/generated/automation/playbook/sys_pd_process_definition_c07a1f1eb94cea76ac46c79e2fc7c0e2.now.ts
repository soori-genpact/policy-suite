import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c07a1f1eb94cea76ac46c79e2fc7c0e2'],
    table: 'sys_pd_process_definition',
    data: {
        access: 'public',
        active: 'true',
        allow_as_nested: 'true',
        data_retention_period_override: '6_week',
        description: 'Quote & Bind',
        execution_type: 'on_demand',
        label: 'Quote & Bind',
        launcher_show_record_form: 'false',
        name: 'quote_and_bind_case',
        permission: '{"VIEW":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"LANE_ADD_OPTIONAL_ACTIVITY":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"CANCEL":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"RESTART":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"LANE_RESTART":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"ACTIVITY_RESTART":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"LAUNCH":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}]}',
        process_type: '52c6d3eeff1be2102c2fffffffffff44',
        public_access: 'true',
        restartable: 'RESTARTABLE_TRUE',
        run_on_pad_engine: 'false',
        run_strategy: 'run_once',
        run_strategy_on_process_definition: 'true',
        schema_version: '3',
        start_non_blocking: 'true',
        status: 'draft',
        view_type: 'DIAGRAM',
    },
})
