import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['08713eaf83e583106a009529feaad30b'],
    table: 'sys_pd_snapshot_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes: 'element_mapping_provider=com.snc.pd.designer.elementmapping.PlaybookInputElementMapper',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Parent record',
        display: 'false',
        dynamic_creation: 'false',
        element: 'parent_record',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Parent record',
        mandatory: 'false',
        max_length: '32',
        model: 'c0713eaf83e583106a009529feaad304',
        model_id: 'c0713eaf83e583106a009529feaad304',
        name: 'var__m_sys_pd_snapshot_input_c0713eaf83e583106a009529feaad304',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference: 'sys_playbook_execution',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['b678cfaf83e983106a009529feaad3ff'],
    table: 'sys_pd_snapshot_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes: 'element_mapping_provider=com.snc.pd.designer.elementmapping.PlaybookInputElementMapper',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Parent record',
        display: 'false',
        dynamic_creation: 'false',
        element: 'parent_record',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Parent record',
        mandatory: 'false',
        max_length: '32',
        model: '7278cfaf83e983106a009529feaad3f8',
        model_id: '7278cfaf83e983106a009529feaad3f8',
        name: 'var__m_sys_pd_snapshot_input_7278cfaf83e983106a009529feaad3f8',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference: 'sys_playbook_execution',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
