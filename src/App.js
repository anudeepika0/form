import React, { useState } from "react";
import "./index.css";

import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";

import Select from "react-select";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  const actions = [
    { label: " Andhra Pradesh ", value: 1 },
    { label: " Arunachal Pradesh ", value: 2 },
    { label: " Assam ", value: 3 },
    { label: " Bihar ", value: 4 },
    { label: " Chhattisgarh ", value: 5 },
    { label: " Goa ", value: 6 },
    { label: " Gujarat ", value: 7 },
    { label: " Haryana ", value: 8 },
    { label: " Himachal Pradesh ", value: 9 },
    { label: " Jharkhand ", value: 10 },
    { label: " Karnataka ", value: 11 },
    { label: " Kerala ", value: 12 },
    { label: " Madhya Pradesh ", value: 13 },
    { label: " Maharashtra ", value: 14 },
    { label: " Manipur ", value: 15 },
    { label: " Meghalaya ", value: 16 },
    { label: " Mizoram ", value: 17 },
    { label: " Nagaland ", value: 18 },
    { label: " Odisha ", value: 19 },
    { label: " Punjab ", value: 20 },
    { label: " Rajasthan ", value: 21 },
    { label: " Sikkim ", value: 22 },
    { label: " Tamil Nadu ", value: 23 }, 
    { label: " Telangana ", value: 24 },
    { label: " Tripura ", value: 25 },
    { label: " Uttarakhand ", value: 26 },
    { label: " Uttar Pradesh ", value: 27 },
    { label: " West Bengal ", value: 28 },
    { label: " Jammu and Kashmir ", value: 29 }
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.value);
  };

  let x = selectedValue;

  const language = function () {
    let Lang;
    if (x === 4 || x === 5 || x === 8 || x === 9 || x === 13 || x === 26 || x === 27) {
      Lang = "hi";
    } else if (x === 3) {
      Lang = "as";
    }else if (x === 7) {
      Lang = "gu";
    } else if (x === 11) {
      Lang = "kn";
    } else if (x === 12) {
      Lang = "ml";
    } else if (x === 14) {
      Lang = "mr";
    } else if (x === 19) {
      Lang = "or";
    } else if (x === 22) {
      Lang = "ne";
    } else if (x === 20) {
      Lang = "pa";
    } else if (x === 23) {
      Lang = "ta";
    } else if (x === 1 || x === 24) {
      Lang = "te";
    } else if (x === 29) {
      Lang = "ur";
    } else if (x === 10 || x === 25 || x === 28) {
      Lang = "bn";  
      // } else if (selectedValue === ) {
      //   Lang = "sa";
    } else {
      Lang = "";
    } //(x === 2 || x === 6 || x === 15 || x === 16 || x === 17 || x === 18) 
    return Lang;
  };

  const Lang = language();

  const [title2, setTitle2] = useState('')

  return (
    <div class="form-container">
      <form class="register-form">
        <div class="cstate">
          <Select
            id="state"
            class="form-field"
            value={actions.find((obj) => obj.value === selectedValue)}
            options={actions}
            placeholder="Select State..."
            name="state"
            onChange={handleChange}
          />
          {/* <div>
            <b>Selected Value: </b> {selectedValue}
          </div> */}
          <ReactTransliterate
            id="tstate"
            class="form-field2"
            //renderComponent={(props) => <textarea {...props} />}
            value={text1}
            onChangeText={(text1) => {
              setText1(text1);
            }}
            lang={Lang}
          />
        </div>
        <div class="cfirst-name">
          <input
            id="first-name"
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={e => setTitle2(e.target.value)}
          />
          <ReactTransliterate
            id="tfirst-name"
            class="form-field2"
            value={title2}
            onChangeText={(title2) => {
              setText2(title2);
            }}
            lang={Lang}
          />
        </div>
        <div class="clast-name">
          <input
            id="last-name"
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          <ReactTransliterate
            id="tlast-name"
            class="form-field2"
            value={text3}
            onChangeText={(text3) => {
              setText3(text3);
            }}
            lang={Lang}
          />
        </div>
        <div class="cfather-name">
          <input
            id="father-name"
            class="form-field"
            type="text"
            placeholder="Father's Name"
            name="father-name"
          />
          <ReactTransliterate
            id="tfather-name"
            class="form-field2"
            value={text4}
            onChangeText={(text4) => {
              setText4(text4);
            }}
            lang={Lang}
          />
        </div>
        <button class="form-field" id="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
