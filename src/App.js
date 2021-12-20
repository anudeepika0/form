import React, { useState } from "react";
import "./index.css";

import Select from "react-select";

import Sanscript from "@sanskrit-coders/sanscript";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");

  const states = [
    { label: " Andhra Pradesh ", value: 1, display: "aaMdhra pradesh" },
    { label: " Arunachal Pradesh ", value: 2, display: "aruNaachala pradesha" },
    { label: " Assam ", value: 3, display: "asama" },
    { label: " Bihar ", value: 4, display: "bihaara" },
    { label: " Chhattisgarh ", value: 5, display: "छत्तीसगढ़" },
    { label: " Goa ", value: 6, display: "govaa" },
    { label: " Gujarat ", value: 7, display: "gujaraata" },
    { label: " Haryana ", value: 8, display: "hariyaaNaa" },
    { label: " Himachal Pradesh ", value: 9, display: "himaachala pradesha" },
    { label: " Jharkhand ", value: 10, display: "ঝাড়খণ্ড" },
    { label: " Karnataka ", value: 11, display: "ಕರ್ನಾಟಕ" },
    { label: " Kerala ", value: 12, display: "കേരളം" },
    { label: " Madhya Pradesh ", value: 13, display: "madhya pradesha" },
    { label: " Maharashtra ", value: 14, display: "" },
    { label: " Manipur ", value: 15, display: "" },
    { label: " Meghalaya ", value: 16, display: "" },
    { label: " Mizoram ", value: 17, display: "" },
    { label: " Nagaland ", value: 18, display: "" },
    { label: " Odisha ", value: 19, display: "" },
    { label: " Punjab ", value: 20, display: "" },
    { label: " Rajasthan ", value: 21, display: "" },
    { label: " Sikkim ", value: 22, display: "" },
    { label: " Tamil Nadu ", value: 23, display: "" },
    { label: " Telangana ", value: 24, display: "" },
    { label: " Tripura ", value: 25, display: "" },
    { label: " Uttarakhand ", value: 26, display: "" },
    { label: " Uttar Pradesh ", value: 27, display: "" },
    { label: " West Bengal ", value: 28, display: "" },
    { label: " Andaman and Nicobar Islands ", value: 29, display: "" },
    { label: " Chandigarh ", value: 30, display: "" },
    { label: " Dadra and Nagar Haveli and Daman and Diu ", value: 31, display: "" },
    { label: " Delhi ", value: 32, display: "" },
    { label: " Lakshadweep ", value: 33, display: "" },
    { label: " Jammu and Kashmir	Kashmiri ", value: 34, display: "" },
    { label: " Ladakh ", value: 35, display: "" },
    { label: " Puducherry ", value: 36, display: "" }
  ];

  const genders = [
    { label: " Male ", value: 1 },
    { label: " Female ", value: 2 },
    { label: " Other ", value: 3 }
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.value);
    setText1(e.display);
  };

  let x = selectedValue;

  const language = function () {
    let Lang;
    if (x === 4 || x === 5 || x === 8 || x === 9 || x === 13 || x === 26 || x === 27 || x === 29 || x === 32 || x === 35) {
      Lang = "devanagari";
    } else if (x === 3) {
      Lang = "devanagari"; //"as";
    } else if (x === 10 || x === 25 || x === 28) {
      Lang = "bengali";
    } else if (x === 7 || x === 31) {
      Lang = "gujarati";
    } else if (x === 11) {
      Lang = "kannada";
    } else if (x === 12 || x === 33) {
      Lang = "malayalam";
    } else if (x === 14) {
      Lang = "devanagari"; //"mr";
    } else if (x === 19) {
      Lang = "oriya";
    } else if (x === 22) {
      Lang = "devanagari"; //"ne";
    } else if (x === 20) {
      Lang = "gurmukhi";
    } else if (x === 23 || x === 36) {
      Lang = "tamil";
    } else if (x === 1 || x === 24) {
      Lang = "telugu";
    } else if (x === 34) {
      Lang = "devanagari"; //"ur";
    } else {
      Lang = "devanagari";
    } //(x === 2 || x === 6 || x === 15 || x === 16 || x === 17 || x === 18 || x === 30)
    return Lang;
  };

  const Language = language();

  function translate() {
    document.getElementById("tfirst-name").value = Sanscript.t(document.getElementById("first-name").value, "itrans", Language);
    document.getElementById("tlast-name").value = Sanscript.t(document.getElementById("last-name").value, "itrans", Language);
    document.getElementById("tfather-name").value = Sanscript.t(document.getElementById("father-name").value, "itrans", Language);
    document.getElementById("taddress").value = Sanscript.t(document.getElementById("address").value, "itrans", Language);
  }

  // function tokenize(text) {
  //   var words = text.split(" ");
  //   for (var i = 0; i < words.length - 1; i++) {
  //     words[i] += " ";
  //   }
  //   return words;
  // }

  // function transLit(e) {
  //   // var start =  e.target.selectionStart;
  //   // var end = e.target.selectionEnd;
  //   // if (e.keyCode === 32 || e.key === ' ' || e.key === 'Enter' || e.keyCode === 13) {
  //   var words = tokenize(document.getElementById("tfirst-name").value);
  //   // console.log(words);
  //   document.getElementById("tfirst-name").value = "";
  //   for (var i = 0; i < words.length; i++) {
  //     document.getElementById("tfirst-name").value += Sanscript.t(words[i], "itrans", Language);
  //   }
  // }
  // //   e.target.setSelectionRange(start, end);
  // // }

  async function postdata() {
    try {
      let result = await fetch(
        "https://webhook.site/1a9348ad-761f-4015-81b0-765f847e16c6",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "applicationn/json",
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            state: document.getElementById("state").value,
            first_name: document.getElementById("first-name").value,
            tfirst_name: document.getElementById("tfirst-name").value,
            last_name: document.getElementById("last-name").value,
            tlast_name: document.getElementById("tlast-name").value,
            father_name: document.getElementById("father-name").value,
            tfather_name: document.getElementById("tfather-name").value,
            dob: document.getElementById("dob").value,
            gender: document.getElementById("gender").value,
            address: document.getElementById("address").value,
            taddress: document.getElementById("taddress").value
          })
        }
      );
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div class="form-container">
      <form class="register-form">
        <div class="cstate">
          <Select
            id="state" class="form-field" placeholder="Select State..." 
            value={states.find((obj) => obj.value === selectedValue)}
            options={states}
            onChange={handleChange}
          />
          {/* <div>
            <b>Selected Value: </b> {selectedValue}
          </div> */}
          <input
            id="tstate" class="form-field2" placeholder="State (regional langauge)" type="text"
            onChange={(e) => setText1(e.target.value)}
            value={Sanscript.t(text1, "itrans", Language)}
          />
        </div>
        <div class="cfirst-name">
          <input
            id="first-name" class="form-field" placeholder="First Name" type="text"
            onInput={translate}
          />
          <input
            id="tfirst-name" class="form-field2" placeholder="First Name (regional langauge)" type="text"
            onChange={(e) => setText2(e.target.value)}
            value={Sanscript.t(text2, "itrans", Language)}
            // onKeyUp={transLit}
          />
        </div>
        <div class="clast-name">
          <input
            id="last-name" class="form-field" placeholder="Last Name" type="text"
            onInput={translate}
          />
          <input
            id="tlast-name" class="form-field2" placeholder="Last Name (regional langauge)" type="text"
            onChange={(e) => setText3(e.target.value)}
            value={Sanscript.t(text3, "itrans", Language)}
          />
        </div>
        <div class="cfather-name">
          <input
            id="father-name" class="form-field" placeholder="Father's Name" type="text"
            onInput={translate}
          />
          <input
            id="tfather-name" class="form-field2" placeholder="Father's Name (regional langauge)" type="text"
            onChange={(e) => setText4(e.target.value)}
            value={Sanscript.t(text4, "itrans", Language)}
          />
        </div>
        <div class="dob-gender">
          <input id="dob" class="form-field1" placeholder="D.O.B." type="date"/>
          <Select id="gender" class="form-field2" placeholder="Select Gender..." options={genders}/>
        </div>
        <div class="caddress">
          <textarea
            id="address" class="form-field" placeholder="Address..." type="text" rows="5"
            onInput={translate}
          />
          <textarea
            id="taddress" class="form-field2" placeholder="Address (regional langauge)..." type="text" rows="5"
            onChange={(e) => setText5(e.target.value)}
            value={Sanscript.t(text5, "itrans", Language)}
          />
        </div>
        <button class="form-field" id="button" type="submit" onClick={() => {postdata();}}> Register </button>
      </form>
    </div>
  );
}

export default App;
