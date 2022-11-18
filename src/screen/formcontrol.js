import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import SMInput from "../config/components/SMInput";
import SMSelect from "../config/components/SMSelect";
import { sendData } from "../config/firebasemethods";

function Form() {
    const [model, setModel] = useState({});

    const addFC = () => {
        sendData(model, `formcontrol/`)
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
            <Box sx={{ backgroundColor: "#03045e", padding: 2, margin: 0 }}>
          <h1 style={{ color: "white" }}>Form Control</h1>
        </Box>
            <Box sx={{ padding: 2 }}>
                <Grid spacing={2} container>
                    <Grid item md={4}>
                        <SMInput
                            required={true}
                            label="Is Form Open"
                            value={model.isFormOpen}
                            onChange={(e) => fillModel("isFormOpen", e.target.value)}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <SMInput
                            required={true}
                            label="Open In Cities"
                            value={model.openInCities}
                            onChange={(e) => fillModel("openInCities", e.target.value)}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <SMSelect
                            required={true}
                            label="Course"
                            onChange={(e) => fillModel("course", e.target.value)}
                            datasource={[
                                {
                                    id: "wm",
                                    fullName: "Web And Mobile",
                                },
                                {
                                    id: "gd",
                                    fullName: "Graphic Designing",
                                },
                            ]}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <SMInput
                            label="Date Of Admission Start"
                            value={model.dateOfAdmissionStart}
                            onChange={(e) => fillModel("dateOfAdmissionStart", e.target.value)}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <SMInput
                            required={true}
                            label="Date Of Admission End"
                            value={model.dateOfAdmissionEnd}
                            onChange={(e) => fillModel("dateOfAdmissionEnd", e.target.value)}
                        />
                    </Grid>
                    {/* <Grid item md={4}>
                        <SMInput
                            required={true}
                            label="CNIC"
                            value={model.cnic}
                            onChange={(e) => fillModel("cnic", e.target.value)}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <SMInput
                            label="Father Name"
                            value={model.fatherName}
                            onChange={(e) => fillModel("fatherName", e.target.value)}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <SMInput
                            label="Father CNIC"
                            value={model.fatherCnic}
                            onChange={(e) => fillModel("fatherCnic", e.target.value)}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <SMInput
                            label="Father Contact"
                            value={model.fatherContact}
                            onChange={(e) => fillModel("fatherContact", e.target.value)}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <SMInput
                            label="Emergency Contact"
                            value={model.emergencyContact}
                            onChange={(e) => fillModel("emergencyContact", e.target.value)}
                        />
                    </Grid> */}
                </Grid>
            </Box>

            <Button variant="contained" onClick={addFC}>
                Submit
            </Button>
        </>
    );
}
export default Form;