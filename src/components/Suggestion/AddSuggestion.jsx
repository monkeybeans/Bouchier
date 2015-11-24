require('./suggestion.scss');

import React from 'react';
import _ from 'lodash';

import GlosterApi from '../../../api/glosterApi.js';


export default class AddSuggestion extends React.Component {
    constructor(props){
        super(props);

        this.state = {suggestions: GlosterApi.getSuggestions()};
    }

    addSuggestion(e) {
      e.preventDefault();

      let suggestionForm = this.newSuggestionForm.getDOMNode();
      let suggestion =  new FormData(suggestionForm);

      let error = GlosterApi.addSuggestion({
        name: suggestion.get('newSuggestionName'),
        description: suggestion.get('newSuggestionSummary'),
      });

      if(error){
        console.error(error);
      } else {
        suggestionForm.reset();
        this.setState({suggestions: GlosterApi.getSuggestions()});
      }

    }

    render(){
        return(
            <div className="vote">
                <div>
                  { this.state.suggestions.map( (suggestion)=>{
                      return (
                        <div key={suggestion.id}>
                          <h2>{suggestion.name}</h2>
                          <p>{suggestion.description}</p>
                        </div>
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
