const { query, execute, sql } = require('./db')


exports.simple_query = async () => {
    let result = query("SELECT * FROM SimplePages");
    return result;
}

exports.simple_query_argument = async (id) => {
    let result = query("SELECT * FROM SimplePages  WHERE ID = " + id);
    return result;
}


exports.insert_example = async (params) => {


    let result = query(`insert into Table_example2 (Code, Date, Value_example) VALUES ('hardcoded01',getdate(), '${params.example}');`);
    return result;
}

exports.test_stored_procedure = async () => {

    let result = execute("storedProcedureNameExample",
        [
            { name: "code", value: 'B5UH04' },
            { name: "name", value: 'John Doe' },
            { name: "uid", value: null }
        ]);
    return result;
}




exports.test_stored_procedure_with_params = async (params) => {

    let result = await execute("spDemo3",
        [
            { name: "user_email", value: params.user_email },
            { name: "user_phone", value: params.user_phone },
            { name: "lpid", value: params.lpid }
        ]
    );
    return result;
}


exports.test_stored_procedure_with_params_and_output_parameter = async (params) => {

    let result = await execute("spInsertDemo",
        [
            { name: "name", value: params.name },
            { name: "email", value: params.email },
            { name: "phone", value: params.phone },
            { name: "id", value: '11' }
        ], [
        { name: "returned_id", value: params.returned_id }
    ]);

    return result;
}



