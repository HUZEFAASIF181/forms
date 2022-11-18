import { Box, Grid } from "@mui/material";
import { useState } from "react";
import SMButton from "../config/components/SMButton";
import SMInput from "../config/components/SMInput";
import SMSelect from "../config/components/SMSelect";
import { setDate } from "../config/core/helpermethod";
import { getData, sendData } from "../config/firebasemethods";

function RegitsrationForm() {
  const [model, setModel] = useState({});

  let register = () => {
    model.registrationDate = setDate(new Date());
    model.isFeeSubmited = false;
    model.isApproved = false;
    model.isActive = false;
    console.log(model);
  };

  const addStudent = () => {
    sendData(model, `students/`)
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
          <h1 style={{ color: "white" }}>Registration Form</h1>
        </Box>
        <Box>
          {/* <Box sx={{ padding: 2}}>
            <Grid spacing={2} container>
              <Grid item md={4}>
                <SMInput label="First Name" />
              </Grid>
              <Grid item md={4}>
                <SMInput label="Last Name" />
              </Grid>
              <Grid item md={4}>
                <SMSelect
                  label="Course"
                  datasource={[
                    {
                      id: "wm",
                      fullName: "Web and Mobiles",
                    },
                  ]}
                />
              </Grid>
              <Grid item md={4}>
                <SMSelect
                  required={true}
                  label="Section"
                  datasource={[
                    {
                      id: "a",
                      fullName: "A",
                    },
                  ]}
                />
              </Grid>
              <Grid item md={4}>
                <SMInput label="Contact" />
              </Grid>
              <Grid item md={4}>
                <SMInput label="Emergency Contact" />
              </Grid>
              <Grid item md={4}>
                <SMInput label="Father Contact" />
              </Grid>
              <Grid item md={4}>
                <SMInput label="Father Name" />
              </Grid>
              <Grid item md={4}>
                <SMInput label="CNIC" />
              </Grid>
              <Grid item md={4}>
                <SMInput label="Father CNIC" />
              </Grid>
              <Grid item md={4}>
                <SMButton label="Submit" onClick={register} />
              </Grid>
            </Grid>
          </Box> */}

          <Box sx={{ padding: 2 }}>
            <Grid spacing={2} container>
              <Grid item md={4}>
                <SMInput required={true} label='First Name' value={model.firstName} onChange={(e) => fillModel('firstName', e.target.value)} />
              </Grid>
              <Grid item md={4}>
                <SMInput label='Last Name' value={model.lastName} onChange={(e) => fillModel('lastName', e.target.value)} />
              </Grid>
              <Grid item md={4}>
                <SMSelect
                  required={true}
                  label="Course"
                  value={model.course}
                  onChange={(e) => fillModel('course', e.target.value)}
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
                <SMSelect
                  required={true}
                  label="Section"
                  onChange={(e) => fillModel('sec', e.target.value)}
                  datasource={[
                    {
                      id: "a",
                      fullName: "A",
                    },
                    {
                      id: "b",
                      fullName: "B",
                    },
                  ]}
                />
              </Grid>
              <Grid item md={4}>
                <SMInput required={true} label='Contact' value={model.contactName} onChange={(e) => fillModel('contactName', e.target.value)} />
              </Grid>
              <Grid item md={4}>
                <SMInput required={true} label='CNIC' value={model.cnic} onChange={(e) => fillModel('cnic', e.target.value)} />
              </Grid>
              <Grid item md={4}>
                <SMInput required={true} label='Father Name' value={model.fatherName} onChange={(e) => fillModel('fatherName', e.target.value)} />
              </Grid>
              <Grid item md={4}>
                <SMInput label='Father CNIC' value={model.fatherCnic} onChange={(e) => fillModel('fatherCnic', e.target.value)} />
              </Grid>
              <Grid item md={4}>
                <SMInput required={true} label='Father Contact' value={model.fatherContact} onChange={(e) => fillModel('fatherContact', e.target.value)} />
              </Grid>
              <Grid item md={4}>
                <SMInput required={true} label='Emergency Contact' value={model.emergencyContact} onChange={(e) => fillModel('emergencyContact', e.target.value)} />
              </Grid>
              <Grid item md={4}>
                <SMButton label="Submit" onClick={addStudent} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
export default RegitsrationForm;