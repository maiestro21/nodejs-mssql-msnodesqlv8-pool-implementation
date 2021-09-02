const index_model = require('../models/index')


exports.index = (req, res) => {

    Promise.all([
        index_model.simple_query()
    ]).then(([result], err) => {

        console.log(result);

    }).catch((error) => {
        console.log(error);
    });

}


//SP 
exports.handle_sp= (req, res) => {

    let params = {
        name: req.body.name,
        phone: req.body.phone,
    };

    //Executing the SP from model
    index_model.some_sp_from_model(params).then((value) => {

        console.log(JSON.stringify(value));

    }).catch((error) => {
        console.log(error);
    });



}



//SP with output param example
exports.handle_sp_outpout_param = (req, res) => {

    let params = {
        name: req.body.name,
        phone: req.body.phone,

    }

    index_model.test_stored_procedure_with_params_and_output_parameter(params).then((value) => {

        if (value.output && value.output.name_of_output_param) {
            console.log(value.output.name_of_output_param);
        } else {
            console.log("No output param.");
        }

    }).catch((error) => {
        res.send("FAILED SP Lead. Nu a trecut mai departe la SP BVB.Catch:" + JSON.stringify(error));
    });


}


