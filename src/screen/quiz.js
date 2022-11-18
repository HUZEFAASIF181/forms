// import { Button, Box, Grid } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import SMInput from "../config/components/SMInput";
// import SMSelect from "../config/components/SMSelect";
// import { sendData } from "../config/firebasemethods";

// function Quiz() {
//   const params = useParams();
//   const [txt, setTxt] = useState("");
//   const [model, setModel] = useState({});
//   const [userId, setUserId] = useState("");
//   const navigate = useNavigate();

//   const addQuiz = () => {
//     sendData(model, `quiz/`)
//       .then((success) => {
//         console.log(success);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   let fillModel = (key, val) => {
//     model[key] = val;
//     setModel({ ...model });

//     console.log(model);
//   };

//   return (
//     <>
//       <h1>Quiz Form</h1>
//       <Box sx={{ padding: 2 }}>
//         <Grid spacing={2} container>
//           <Grid item md={4}>
//             <SMInput required={true} label='First Name' value={model.firstName} onChange={(e) => fillModel('firstName', e.target.value)} />
//           </Grid>
//           <Grid item md={4}>
//             <SMInput label='Last Name' value={model.lastName} onChange={(e) => fillModel('lastName', e.target.value)} />
//           </Grid>
//           <Grid item md={4}>
//             <SMSelect
//               required={true}
//               label="Course"
//               onChange={(e) => fillModel('course', e.target.value)}
//               datasource={[
//                 {
//                   id: "wm",
//                   fullName: "Web And Mobile",
//                 },
//               ]}
//             />
//           </Grid>
//           <Grid item md={4}>
//             <SMSelect
//               required={true}
//               label="Section"
//               onChange={(e) => fillModel('sec', e.target.value)}
//               datasource={[
//                 {
//                   id: "a",
//                   fullName: "A",
//                 },
//                 {
//                   id: "b",
//                   fullName: "B",
//                 },
//               ]}
//             />
//           </Grid>
//           <Grid item md={4}>
//             <SMInput required={true} label='Contact' value={model.contactName} onChange={(e) => fillModel('contactName', e.target.value)} />
//           </Grid>
//           <Grid item md={4}>
//             <SMInput required={true} label='CNIC' value={model.cnicName} onChange={(e) => fillModel('cnicName', e.target.value)} />
//           </Grid>
//           <Grid item md={4}>
//             <SMInput required={true} label='Father Name' value={model.fatherName} onChange={(e) => fillModel('fatherName', e.target.value)} />
//           </Grid>
//           <Grid item md={4}>
//             <SMInput label='Father CNIC' value={model.fatherCnic} onChange={(e) => fillModel('fatherCnic', e.target.value)} />
//           </Grid>
//           <Grid item md={4}>
//             <SMInput required={true} label='Father Contact' value={model.fatherContact} onChange={(e) => fillModel('fatherContact', e.target.value)} />
//           </Grid>
//           <Grid item md={4}>
//             <SMInput required={true} label='Emergency Contact' value={model.emergencyContact} onChange={(e) => fillModel('emergencyContact', e.target.value)} />
//           </Grid>
//         </Grid>

//       </Box>

//       <Button variant="contained" onClick={addQuiz}>Submit</Button>
//     </>
//   );
// }
// export default Quiz;


import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import { sendData } from "../config/firebasemethods";

function Quiz() {
  const [questions, setQuestions] = useState([
    {
      question: "Html Stands For _______________________",
      options: [
        "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ]);
  const [model, setModel] = useState({});
  const [counter, setCounter] = useState(240);
  const [indexNumber, setIndexNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  let checkQuestion = (a, b) => {
    if (a == b) {
      setScore(score + 1);
    }
    if (indexNumber + 1 == questions.length) {
      setShowResult(true);
    } else {
      setIndexNumber(indexNumber + 1);
    }
  };

  const addQuiz = () => {
    sendData(model, `quiz/`)
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
    <div className="App">
    <h1>your percentage is {(score/questions.length)*100}</h1> <Box>
        <Box sx={{ padding: 1 }}>
          <Typography variant="h6">
            Question # {indexNumber + 1}/{questions.length}
          </Typography>
        </Box>
        <Box sx={{ padding: 1 }}>
          <Typography variant="h5">
            {questions[indexNumber].question}
          </Typography>
        </Box>
        <Box>
          <Grid container>
            {questions[indexNumber].options.map((x, i) => (
              <Grid key={i} item md={6}>
                <Chip
                  onClick={() =>
                    checkQuestion(x, questions[indexNumber].correctAns)
                  }
                  label={x}
                />
              </Grid>
            ))}
          </Grid>
        </Box>        
      </Box>
    </div>
  );
}

export default Quiz;