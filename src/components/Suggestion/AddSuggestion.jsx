require('./suggestion.scss');

import React from 'react';
import _ from 'lodash';


export default class AddSuggestion extends React.Component {
    constructor(props){
        super(props);
    }

    _getVotes(){
      const votes = [
        {
          id: 1,
          suggestion: "apa",
          description: "ohohoh ohoh ohoho hhoho"
        },
        {
          id: 2,
          suggestion: "banan",
          description: "yellow yellow is the color of the skin"
        },
        {
          id: 3,
          suggestion: "lian",
          description: "swingiliswing"
        }

      ];

      return votes;
    };

    render(){
        const votes = this._getVotes();


        return(
            <div className="vote">
              <form>
                <div>
                  <radioGroup >
                  { votes.map((vote)=>{
                      return (
                        <input type="radio" name="selectedVote" value={vote.id} key={vote.id}>{vote.suggestion}</input>
                      );
                    })
                  }
                </radioGroup>
                </div>
                <div>
                  <a href="#">+ add a suggestion</a>
                </div>
              </form>
            </div>
        );
    };
}
