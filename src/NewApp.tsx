// import "./index.css";
import React from "react";
import { useEffect, useState } from "react";
import { app, database, shoppingListInDB } from "./firebaseConfig";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import Grid, { GridSpacing } from "@material-ui/core/Grid";
// import { Box, CssBaseline, Grid } from "@material-ui/core";
import { Box, Grid } from "@material-ui/core";
// import AutohideSnackbar from "./AutohideSnackbar";

// import sampleText from "./sampleText" // did not work
// import { palette } from '@mui/system';

// Sources:
// [1]: https://mui.com/system/palette/
// [2]: https://stackoverflow.com/questions/63353297/material-ui-how-to-stretch-grid-container-to-parent-height-and-width
// [3]: https://stackoverflow.com/questions/2906582/how-do-i-create-an-html-button-that-acts-like-a-link
// [4]: https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard?page=1&tab=scoredesc#tab-top

// - could not figure out how to so global variables to the rescue

import "./FormStyle.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);

function NewForm() {
  // function App() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Crist");
  // ✅ Good: calculated during rendering
  const fullName = firstName + " " + lastName;
  //   const shoppingListInDB = ref(database, "shoppingList");

  const classes = useStyles();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let outputMessage = "Overall Scan:\n\n";

    push(shoppingListInDB, inputValue);
    alert(outputMessage);
    // setText(outputMessage);
  };

  return (
    <section className="line-page">
      <h1>My Test Webform</h1>

      <p>
        This is a simple webform which exercises CRUD functionality. Creating
        entries, reading entries, updating entries, and deleting entries.
      </p>
      {/* [1] */}
      {/* [2] */}
      {/* rgb(192, 239, 239) */}
      <Box display="flex" height="100vh" width="100vw">
        <Box flex={{ xs: 1, sm: 2 }}>
          <form onSubmit={handleSubmit}>
            <textarea
              name="csv"
              placeholder="Add to grocery list...."
              // value={sample}
              required
            ></textarea>
            <br />
            <button type="submit">Process</button>
          </form>

          {/* <form onSubmit={handleSampleInput}>
          <button type="submit">Open sample code for use</button>
        </form>  */}

          {/* [4] */}
          {/* <button onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}>
          Copy some text
        </button>/ */}
          {/* <AutohideSnackbar /> */}
        </Box>
        <Box
          display="flex"
          flex={3}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <textarea
            name="resultField"
            placeholder="Program analysis comes here"
            value={"text"}
            rows={10}
            required
          ></textarea>
        </Box>
      </Box>

      <Grid container className={classes.root} spacing={2}>
        {/* <Grid item xs={12} lg={12}> */}
      </Grid>
    </section>
  );
  //   // ...
}

//   return (
//     <div className="App">
//       <h1>The Full name of the person in question is:</h1>
//       <h2>{fullName}!</h2>
//     </div>
//   );

function App() {
  // return(<h1>brp</h1>)
  return <NewForm />; // CHQ: it works! Nice
}

// export default function App;
export default App;
