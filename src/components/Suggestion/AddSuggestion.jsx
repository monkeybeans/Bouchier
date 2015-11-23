require('./suggestion.scss');

import React from 'react';
import _ from 'lodash';

import GlosterApi from '../../../api/glosterApi.js';


export default class AddSuggestion extends React.Component {
    constructor(props){
        super(props);
    }

    addSuggestion(e) {
      e.preventDefault();

      let suggestion = this.newSuggestionForm;// = new FormData(this.newSuggestionForm);
      console.log(suggestion);

      let error = GlosterApi.addSuggestion(suggestion);

      if(error){
        console.error(error);
      }

    }

    render(){
        const suggestions = GlosterApi.getSuggestions();

        return(
            <div className="vote">
                <div>
                  { suggestions.map( (suggestion)=>{
                      return (
                        <p key={suggestion.id}>{suggestion.name}</p>
                      );
                    })
                  }
                </div>
                <div>
                  <a href="#" >+ add a suggestion</a>
                  <form id="new-suggestion" onSubmit={this.addSuggestion.bind(this)} ref={(ref) => this.newSuggestionForm = ref}>
                    <div><input type="input" name="newSuggestionName"></input></div>
                    <div><textarea type="textarea" name="newSuggestionSummary" rows="10" cols="50"></textarea></div>
                    <div><input type="submit" value="Submit suggestion"/></div>
                  </form>
                </div>
            </div>
        );
    };
}
