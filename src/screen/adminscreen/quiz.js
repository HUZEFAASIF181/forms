import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SMButton from "../../config/components/SMButton";
import SMInput from "../../config/components/SMInput";
import SMSelect from "../../config/components/SMSelect";
import Checkbox from "@mui/material/Checkbox";
import { getData, sendData } from "../../config/firebasemethods";
import SMGrid from "../../config/components/SMGrid";

function Quiz() {
  const [isCreateQuiz, setIsCreateQuiz] = useState(false);
  const [optionsArr, setOptionsArr] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [model, setModel] = useState({});
  const [question, setQuestion] = useState({});
  const [option, setOption] = useState("");
  const [quizList, setQuizList] = useState([]);

  let saveQuiz = () => {
    console.log(question);
    sendData(question, "quiz")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getQuizData = () => {
    getData("quiz")
      .then((res) => {
        setQuizList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getQuizData();
  }, []);

  // let arr = [
  //   {
  //     id: 1,
  //     display: "abc",
  //   },
  //   {
  //     id: 2,
  //     display: "abc",
  //   },
  //   {
  //     id: 3,
  //     display: "abc",
  //   },
  // ];

  let arr = [
    {
      questionName: 'Question Name',
      duration: 30,
      marks: 50,
      questions: [
        {
          question: 'HTML Stands For',
          options: ['HyperTextMarkupLanguage', 'HyperTextMakeupLanguage', 'HoTMaiL'],
          correctAnswer: 'HyperTextMarkupLanguage'
        },
        {
          question: 'CSS Stands For',
          options: ['CascadingStyleSheet', 'CustomStyleSheet', 'CustomerSupportService'],
          correctAnswer: 'CascadingStyleSheet'
        },
        {
          question: 'JS Stands For',
          options: ['JavaStyle', 'JavaScript', 'JavaSheet'],
          correctAnswer: 'JavaScript'
        },
        {
          question: 'React is a _______ of JS',
          options: ['Framework', 'Reaction', 'Library'],
          correctAnswer: 'Library'
        },
      ]
    },
  ];

  let createQuiz = () => {
    console.log(model);
    setIsCreateQuiz(true);
  };
  let fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };
  let addOption = () => {
    setOptionsArr([...optionsArr, { value: option }]);
  };
  let submitQuestion = () => {
    question.options = optionsArr.map((x) => x.value);
    question.correctAns = optionsArr.find((x) => x.isChecked).value;

    console.log(question);
    setQuestions(...questions, question);
  };

  let lockQuiz = () => {
    model.questionsArray = questions;
    console.log(model);
  };

  return (
    <>
      <Box>
      <Box sx={{ backgroundColor: "#03045e", padding: 2, margin: 0 }}>
          <h1 style={{ color: "white" }}>Quiz</h1>
        </Box>
        <Box>
          <Grid container>
            <Grid md={6} item>
              <Box sx={{ padding: 2 }}>
                <SMInput
                  onChange={(e) => fillModel("question", e.target.value)}
                  disabled={isCreateQuiz}
                  label="Quiz Name"
                />
              </Box>
            </Grid>
            <Grid md={3} item>
              <Box sx={{ padding: 2 }}>
                <SMInput
                  onChange={(e) => fillModel("duration", e.target.value)}
                  disabled={isCreateQuiz}
                  label="Quiz Duration"
                />
              </Box>
            </Grid>
            <Grid md={3} item>
              <Box sx={{ padding: 2 }}>
                <SMSelect
                  onChange={(e) => fillModel("course", e.target.value)}
                  disabled={isCreateQuiz}
                  datasource={[
                    {
                      id: "wm",
                      fullName: "Web And Mobile",
                    },
                  ]}
                />
              </Box>
            </Grid>
            <Grid md={3} item>
              <Box sx={{ padding: 2 }}>
                <SMInput
                  onChange={(e) => fillModel("marks", e.target.value)}
                  disabled={isCreateQuiz}
                  label="Quiz Marks"
                />
              </Box>
            </Grid>
            <Grid md={3} item>
              <Box sx={{ padding: 2 }}>
                <SMInput
                  onChange={(e) => fillModel("securityKey", e.target.value)}
                  disabled={isCreateQuiz}
                  label="Security Key"
                />
              </Box>
            </Grid>
            <Grid md={12} item>
              <Box>
                <SMButton onClick={createQuiz} label="Create Quiz" />
              </Box>
            </Grid>
          </Grid>
          {isCreateQuiz && (
            <Grid container>
              <Grid md={12} item>
                <SMInput
                  onChange={(e) => {
                    setQuestion({ ...question, question: e.target.value });
                  }}
                  label="Question"
                />
              </Grid>
              <Grid md={12} item>
                {optionsArr.map((x, i) => (
                  <>
                    <Checkbox
                      onChange={(e) => (x.isChecked = e.target.value)}
                    />{" "}
                    <Typography key={i}>{x.value}</Typography>
                  </>
                ))}
              </Grid>
              <Grid md={8} item>
                <SMInput
                  onChange={(e) => setOption(e.target.value)}
                  label="Option"
                />
              </Grid>

              <Grid md={4} item>
                <SMButton onClick={addOption} label="add" />
              </Grid>
              <Grid md={12} item>
                <SMButton onClick={saveQuiz} label="Submit Question" />
                <SMButton onClick={lockQuiz} label="Lock Quiz" />
              </Grid>
            </Grid>
          )}
          <Container>
            <SMGrid
              datasource={quizList}
              onRowClick={(e) => console.log(e)}
              Cols={[
                {
                  key: "id",
                  displayName: "Id",
                },
                {
                  key: "question",
                  displayName: "Question",
                },
              ]}
            />
          </Container>
        </Box>
      </Box>
    </>
  );
}
export default Quiz;