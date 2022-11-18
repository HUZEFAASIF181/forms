import { Box, Grid } from "@mui/material";
import { useState } from "react";
import SMButton from "../../config/components/SMButton";
import SMInput from "../../config/components/SMInput";
import SMSelect from "../../config/components/SMSelect";
import { setDate } from "../../config/core/helpermethod";
import { sendData } from "../../config/firebasemethods";

function Trainerform() {
    const [model, setModel] = useState({});

    let register = () => {
        model.registrationDate = setDate(new Date());
        model.isFeeSubmited = false;
        model.isApproved = false;
        model.isActive = false;
        console.log(model);
    };

    const addTrainer = () => {
        sendData(model, `trainerlist/`)
            .then((success) => {
                console.log(success);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let fillModel = (key, val) => {
        model[key] = val;
        setModel({ ...model });

        console.log(model);
    };
    return (
        <>
            <div className="bgLight">
                <Box sx={{ backgroundColor: "#03045e", padding: 2, margin: 0 }}>
                    <h1 style={{ color: "white" }}>Trainers Form</h1>
                </Box>
                <Box>
                    <Box sx={{ padding: 2 }}>
                        <Grid spacing={2} container>
                            <Grid item md={4}>
                                <SMInput label='First Name' value={model.firstName} onChange={(e) => fillModel('firstName', e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <SMInput label='Last Name' value={model.lastName} onChange={(e) => fillModel('lastName', e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <SMSelect
                                    label="Other Qualifications"
                                    onChange={(e) => fillModel('otherQualifications', e.target.value)}
                                    datasource={[
                                        {
                                            id: "IT Trainer",
                                            fullName: "IT Trainer",
                                        },
                                        {
                                            id: "Graphic Designer",
                                            fullName: "Graphic Designer",
                                        },
                                        {
                                            id: "Web Developer",
                                            fullName: "Web Developer",
                                        },
                                    ]}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <SMInput label='Contact' value={model.contact} onChange={(e) => fillModel('contact', e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <SMInput label='CNIC' value={model.cnic} onChange={(e) => fillModel('cnic', e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <SMInput label='Qualification' value={model.qualification} onChange={(e) => fillModel('qualification', e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <SMInput label='Courses Allowed' value={model.coursesAllowed} onChange={(e) => fillModel('coursesAllowed', e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <SMButton label="Submit" onClick={addTrainer} />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    );
}
export default Trainerform;