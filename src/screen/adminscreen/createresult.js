import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import SMButton from "../../config/components/SMButton";
import SMSelect from "../../config/components/SMSelect";
import SMSwitch from "../../config/components/SMSwitch";
import { getData, sendData } from "../../config/firebasemethods";

function CreateResult() {
  const [model, setModel] = useState({});
  const [courceStatus, setCourceStatus] = useState(false);
  const [resultData, setResultData] = useState([
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC100",
      result: "Pass",
    },
    {
      name: "DEF",
      marks: 70,
      rollNum: "DEF101",
      result: "Pass",
    },
    {
      name: "GHI",
      marks: 60,
      rollNum: "GHI102",
      result: "Pass",
    },
    {
      name: "JKL",
      marks: 50,
      rollNum: "JKL103",
      result: "Pass",
    },
    {
      name: "MNO",
      marks: 40,
      rollNum: "MNO104",
      result: "Pass",
    },
    {
      name: "PQR",
      marks: 30,
      rollNum: "PQR105",
      result: "Fail",
    },
    {
      name: "STU",
      marks: 30,
      rollNum: "STU106",
      result: "Fail",
    },
    {
      name: "VWX",
      marks: 20,
      rollNum: "VWX107",
      result: "Fail",
    },
    {
      name: "YZZ",
      marks: 10,
      rollNum: "YZZ108",
      result: "Fail",
    },
    {
      name: "ZZZ",
      marks: 0,
      rollNum: "ZZZ109",
      result: "Fail",
    },
  ]);
  const [resultTableData, setResultTableData] = useState([]);
  const [loader, setLoader] = useState(false);

  let submitForm = () => {
    setLoader(true);
    model.isShowResult = courceStatus;
    model.result = resultData;
    console.log(model);
    sendData(model, "results")
      .then((res) => {
        setLoader(false);
        console.log(res);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  let getResultData = () => {
    getData("results")
      .then((res) => {
        console.log(res);
        setResultTableData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getResultData();
  }, []);

  return (
    <>
      <Box sx={{ backgroundColor: "#03045e", padding: 2, margin: 0 }}>
          <h1 style={{ color: "white" }}>Create Result</h1>
        </Box>
      <Box sx={{ padding: 2 }}>
        <Grid container>
          <Grid md={6} item>
            <SMSwitch
              value={courceStatus}
              onChange={(e) => setCourceStatus(e.target.checked)}
              label="Cource"
            />
          </Grid>
          <Grid md={6} item>
            <SMSelect
              label="Cource"
              onChange={(e) => setModel({ ...model, cource: e.target.value })}
              datasource={[
                {
                  id: "wm",
                  fullName: "Web And Mobile",
                },
                {
                  id: "gd",
                  fullName: "Graphics Designing",
                },
              ]}
            />
          </Grid>
          <Grid item md={12}>
            <Box>
              <table>
                {resultData.map((x, i) => (
                  <tr>
                    <td>{x.name}</td>
                    <td>{x.rollNum}</td>
                    <td>{x.result}</td>
                    <td>{x.marks}</td>
                  </tr>
                ))}
              </table>
            </Box>
          </Grid>
          <Grid md={6} item>
            <SMButton loading={loader} label="Submit" onClick={submitForm} />
          </Grid>
        </Grid>
        <Box>
          <table>
            {resultTableData.map((x, i) => (
              <tr>
                <td>{x.result.length}</td>
                <td>
                  <SMSelect
                    valuefield="id"
                    displayField="fullName"
                    value={x.cource}
                    datasource={[
                      {
                        id: "wm",
                        fullName: "Web And Mobile",
                      },
                      {
                        id: "gd",
                        fullName: "Graphics Designing",
                      },
                    ]}
                  />{" "}
                </td>
                <td>
                  <SMSwitch
                    onChange={(e) => {
                      resultTableData[i].isShowResult = e.target.checked;
                    }}
                    value={x.isShowResult}
                  />
                </td>
              </tr>
            ))}
          </table>
        </Box>
      </Box>
    </>
  );
}
export default CreateResult;