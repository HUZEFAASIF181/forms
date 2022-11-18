import { Button, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SMInput from "../config/components/SMInput";
import SMSelect from "../config/components/SMSelect";
import { sendData } from "../config/firebasemethods";

function Course() {
  const params = useParams();
  const [txt, setTxt] = useState("");
  const [model, setModel] = useState({});
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const addCourse = () => {
    sendData(model, `courses/`)
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
      <h1>Course Form</h1>
      <Box sx={{ padding: 2 }}>
        <Grid spacing={2} container>
          <Grid item md={4}>
            <SMInput required={true} label='Course Name' value={model.courseName} onChange={(e) => fillModel('courseName', e.target.value)} />
          </Grid>
          <Grid item md={4}>
            <SMInput label='Course Duration' value={model.courseDuration} onChange={(e) => fillModel('courseDuration', e.target.value)} />
          </Grid>
          <Grid item md={4}>
            <SMSelect
              required={true}
              label="No. Of Quiz"
              onChange={(e) => fillModel('noOfQuiz', e.target.value)}
              datasource={[
                {
                  id: 1,
                  fullName: 1,
                },
                {
                  id: 2,
                  fullName: 2,
                },
                {
                  id: 3,
                  fullName: 3,
                },
                {
                  id: 4,
                  fullName: 4,
                },
                {
                  id: 5,
                  fullName: 5,
                },
              ]}
            />
          </Grid>
          <Grid item md={4}>
            <SMSelect
              required={true}
              label="Assistant Trainers"
              onChange={(e) => fillModel('assistantTrainers', e.target.value)}
              datasource={[
                {
                  id: "b",
                  fullName: "Basit",
                },
                {
                  id: "a",
                  fullName: "Ali Mughal",
                },
                {
                  id: "g",
                  fullName: "Ghous",
                },
              ]}
            />
          </Grid>
          <Grid item md={4}>
            <SMInput required={true} label='Is Form Open' value={model.isFormOpen} onChange={(e) => fillModel('isFormOpen', e.target.value)} />
          </Grid>
          <Grid item md={4}>
            <SMInput required={true} label='Fee In Rupees' value={model.feeInRupees} onChange={(e) => fillModel('feeInRupees', e.target.value)} />
          </Grid>
          <Grid item md={4}>
            <SMInput label='Lead Trainer Id' value={model.leadTrainerId} onChange={(e) => fillModel('leadTrainerId', e.target.value)} />
          </Grid>
        </Grid>

      </Box>

      <Button variant="contained" onClick={addCourse}>Submit</Button>
    </>
  );
}
export default Course;