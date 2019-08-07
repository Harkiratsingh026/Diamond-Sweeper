import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      matrixData: {
        1: ["","",'*',"","","","",""],
        2: ["","","","",'*',"","",""],
        3: ["","",'*',"","","","",""],
        4: ["","","","","","",'*',""],
        5: ['*',"","","","","","",""],
        6: ["","","","","","","",'*'],
        7: ["",'*',"","","","","",""],
        8: ["","","","","",'*',"",""]
      },
      starCount: 0,
      score: 64,
      scoreDisplayed: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    if(!this.state.scoreDisplayed){
      if(e.target.dataset.value === "*"){
        this.state.starCount++;
      }
      if(e.target.innerText !== e.target.dataset.value){
        e.target.innerText = e.target.dataset.value;
        this.state.score--;
      }
      if(this.state.starCount === 2){
        this.state.scoreDisplayed = true;
        console.log(this.state.score);
      }
    }
  }

  render(){
    return (
      <div className="App">
        <table className="Table">
          {
            Object.keys(this.state.matrixData).map((rowData)=>{
              return(<tr className="Row">
                {
                  this.state.matrixData[rowData].map((columnData)=>{
                    return(<td className="Data" data-value={columnData} onClick={this.handleClick}>?</td>);
                  })
                }
              </tr>);
            })
          }
        </table>
      </div>
    );
  } 
}

export default App;
