import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c0713eaf83e583106a009529feaad304'],
    table: 'sys_pd_snapshot',
    data: {
        access: 'public',
        derivatives:
            '{"table":"sys_pd_snapshot","id":"c0713eaf83e583106a009529feaad304","name":"derivatives","type":"com.snc.pd.model.serialization.DerivativeFetcher"}',
        name: 'exposure_case',
        process_definition:
            '{"table":"sys_pd_snapshot","id":"c0713eaf83e583106a009529feaad304","name":"process_definition","type":"com.snc.pd.model.ProcessDefinition"}',
        process_dependencies:
            '{"table":"sys_pd_snapshot","id":"c0713eaf83e583106a009529feaad304","name":"process_dependencies","type":"com.snc.pd.model.dependency.InstructionBasedProcessDependenciesCollection"}',
        process_plan:
            '{"table":"sys_pd_snapshot","id":"c0713eaf83e583106a009529feaad304","name":"process_plan","type":"com.snc.process_flow.engine.ProcessPlan"}',
        source: '90141cd762f9081eab170afb4d626e38',
    },
})
