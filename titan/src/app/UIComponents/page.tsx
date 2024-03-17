
import React from 'react'



function StickyUi(){
 
    return (
      
<div>
      <style>
        {`
          @import url(https://fonts.googleapis.com/css?family=Give+You+Glory|The+Girl+Next+Door|Gloria+Hallelujah|Indie+Flower);

          body {
            background: #AFE1AF;
          }
          .sticky {
            position: relative;
            background-color: #F4F39E;
            border-color: #DEE184;
            color: #47576B;
            text-align: center;
            margin: 2.5em 0px;
            padding: 1.5em 1em;
            width: 250px;
            font-family: 'Indie Flower', cursive;
          }
          .post-it {
            display: table;
            margin: 5em auto 0;  
          }
          .taped {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
          }
          .sticky.taped:after {
            content: "";
            position: absolute; 
            width: 110px;
            height: 30px;
            top: -21px;
            left: 30%;    
            border: 1px solid #fff;
            background: rgba(254, 254, 254, .6);
            box-shadow: 0px 0 3px rgba(0,0,0,0.1);  
          }
          .note { 
            position: relative;
            background-color: #F4F39E;
            border-color: #DEE184;
            text-align: center;
            margin: 1.5em auto;
            padding: 1.5em 1em;
            box-shadow: 0px 1px 3px rgba(0,0,0,0.25);
            transform: rotate(2deg);
            width: 250px;
            font-family: 'The Girl Next Door', cursive;
            font-size: 1em;
          }
          .note:after {
            content: "";
            position: absolute; 
            width: 110px;
            height: 30px;
            top: -21px;
            left: 30%;    
            border: 1px solid #fff;
            background: rgba(254, 254, 254, .6);
            box-shadow: 0px 0 3px rgba(0,0,0,0.1);  
          }
        `}
      </style>
      <div className="note">Sticky Note 2
      <strong>5th March 2024</strong><br>
      </br>
      1. Implement JWT tokens
      2. Start with dashboard design
      3. Connect the notepad library
      4. Don't forget to commit and push to github
          
      </div>
    </div>
    )
  }


export default StickyUi
