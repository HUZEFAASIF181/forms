import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import SMButton from "../../config/components/SMButton";
import SMGrid from "../../config/components/SMGrid";
import SMInput from "../../config/components/SMInput";
import { getData, sendData } from "../../config/firebasemethods";

function Countries() {
    const [model, setModel] = useState({});
    const [countriesList, setCountriesList] = useState([]);


    let saveCurrency = () => {
        console.log(model);
        sendData(model, "countries")
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let getCountryData = () => {
        getData("countries")
            .then((res) => {
                setCountriesList(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCountryData();
    }, []);

    return (
        <>
            <div>
            <Box sx={{ backgroundColor: "#03045e", padding: 2, margin: 0 }}>
          <h1 style={{ color: "white" }}>Countries</h1>
        </Box>
                <Container>
                    <Grid container>
                        <Grid sx={{ padding: 2 }} md={4} item>
                            <SMInput
                                label="Country Name"
                                onChange={(e) =>
                                    setModel({ ...model, countryName: e.target.value })
                                }
                            />
                        </Grid>
                        <Grid sx={{ padding: 2 }} md={4} item>
                            <SMInput
                                label="Country Code"
                                onChange={(e) =>
                                    setModel({ ...model, countryCode: e.target.value })
                                }
                            />
                        </Grid>
                        <Grid sx={{ padding: 2 }} md={4} item>
                            <SMInput
                                label="Currency"
                                onChange={(e) =>
                                    setModel({ ...model, currency: e.target.value })
                                }
                            />
                        </Grid>
                        <Grid md={4} item>
                            <SMButton onClick={saveCurrency} label="Save" />
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <SMGrid
                        datasource={countriesList}
                        onRowClick={(e) => console.log(e)}
                        Cols={[
                            {
                                key: "id",
                                displayName: "Id",
                            },
                            {
                                key: "countryName",
                                displayName: "Country Name",
                            },
                            {
                                key: "countryCode",
                                displayName: "Country Code",
                            },
                            {
                                key: "currency",
                                displayName: "Currency",
                            },
                        ]}
                    />
                </Container>
            </div>
        </>
    );
}
export default Countries;
