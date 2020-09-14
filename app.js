import React from 'react';
import Button from './Button';
import History from './History';
import Output from './Output';
import ClearButton from './ClearButton';
import ClearButtonByOne from './ClearButtonByOne';
function App() {
     var state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };

    const [value,setVal]=React.useState(state);

     function addToInput(val){
      setVal({ 
        input: value.input + val ,
        previousNumber: value.previousNumber,
        operator: value.operator,
        currentNumber: value.currentNumber
      });
     };
     //console.log(value);
    function addDecimal(val){
      if (value.input.indexOf(".") === -1) {
         setVal({ 
           input: value.input + val ,
           previousNumber: value.previousNumber,
           operator: value.operator,
           currentNumber: value.currentNumber
          });
      }
    };

   function addZeroToInput(val){
     if (value.input !== "") {
         setVal({ 
           input: value.input + val,
           previousNumber: value.previousNumber,
           operator: value.operator,
           currentNumber: value.currentNumber
          });
     }
   };
    function clearInput(){
        setVal({
          input: "",
          previousNumber: "",
          operator: "",
          currentNumber: ""
        });
    }
    function clearInputByOne(){
     /*const str=value.input.split('').reverse().join('');
      const val=str.substr(1);
      const str1=val.str.split('').reverse().join('');*/
      setVal({
        
        input: value.input.split('').reverse().join('').substr(1).split('').reverse().join(''),
        previousNumber: value.previousNumber,
        operator: value.operator,
        currentNumber: value.currentNumber
      });
  }

   function add(){
         //value.previousNumber = value.input;
         //const previous = value.input;
        //setVal({ previousNumber: state.input });
        setVal({ 
          previousNumber: value.input,
          input: "" ,
          operator: value.operator + "+",
          currentNumber: value.currentNumber
        });
        //value.operator = "plus";
   };
   
   function subtract(){
      // value.previousNumber = value.input;
       //const previous = value.input;
       //setVal({ previousNumber: value.input });
       setVal({ 
         previousNumber: value.input,
         input: "" ,
         operator: value.operator + "-",
         currentNumber: value.currentNumber
        });
       //value.operator = "subtract";
   };
    function multiply(){
         //value.previousNumber = value.input;
        // const previous = value.input;
        // setVal({ previousNumber: value.input });
         setVal({ 
           previousNumber: value.input,
           input: "" ,
           operator: value.operator + "*",
           currentNumber: value.currentNumber
          });
         //value.operator = "multiply";
    };
   function divide(){
      // value.previousNumber = value.input;
       //const previous = value.input;
      // setVal({ previousNumber: value.input });
       setVal({
          previousNumber: value.input,
          input: "",
          operator: value.operator + "/",
          currentNumber: value.currentNumber
         });
      // value.operator = "divide";
   };
   function evaluate(){
        // value.currentNumber = value.input;
       // const current = value.input;
        if (value.operator === "+") {
            setVal({
            input:
              parseFloat(value.previousNumber) +
              parseFloat(value.input),
              previousNumber: "",
              operator: ""
          });
        }
        else if (value.operator === "-") {
            setVal({
            input:
              parseFloat(value.previousNumber) -
              parseFloat(value.input),
              previousNumber: "",
              operator: ""
          });
        }
        else if (value.operator === "*") {
            setVal({
            input:
              parseFloat(value.previousNumber) *
              parseFloat(value.input),
              previousNumber: "",
              operator: ""
          });
        } else if (value.operator === "/") {
            setVal({
            input:
              parseFloat(value.previousNumber) /
              parseFloat(value.input),
              previousNumber: "",
              operator: ""
          });
        }
   };


  return ( 
    <div className="calculator">
     <div className="result">
       <History vall={value.previousNumber + value.operator}/>
       <Output vall={value.input}/>
     </div>
     <div className="keyboard">
      <ClearButton handleClear={clearInput} class="operator" value="C"/>
      <ClearButtonByOne handleClear={clearInputByOne} class="operator" value="CE"/>
      <Button handleClick={addDecimal} class="operator" value="."/>
      <Button handleClick={divide} class="operator" value="&#247;"/>
      <Button handleClick={addToInput} class="number" value="7"/>
      <Button handleClick={addToInput} class="number" value="8"/>
      <Button handleClick={addToInput} class="number" value="9"/>
      <Button handleClick={multiply} class="operator" value="&times;"/>
      <Button handleClick={addToInput} class="number" value="4"/>
      <Button handleClick={addToInput} class="number" value="5"/>
      <Button handleClick={addToInput} class="number" value="6"/>
      <Button handleClick={subtract} class="operator" value="-"/>
      <Button handleClick={addToInput} class="number" value="1"/>
      <Button handleClick={addToInput} class="number" value="2"/>
      <Button handleClick={addToInput} class="number" value="3"/>
      <Button handleClick={add} class="operator" value="+"/>
      <Button handleClick={addToInput} class="operator" value="("/>
      <Button handleClick={addZeroToInput} class="operator" value="0"/>
      <Button handleClick={addToInput} class="operator" value=")"/>
      <Button handleClick={evaluate} class="operator" value="="/>
     </div>
    </div>
  );
}

export default App;