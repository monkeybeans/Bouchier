

class GlosterApi {
  constructor(props){
    this.suggestions = [
      {
        id: 1,
        name: "apa",
        description: "ohohoh ohoh ohoho hhoho"
      },
      {
        id: 2,
        name: "banan",
        description: "yellow yellow is the color of the skin"
      },
      {
        id: 3,
        name: "lian",
        description: "swingiliswing"
      },
    ];
  }

  getSuggestions() {
    return this.suggestions;
  };

  addSuggestion(suggestion){
    let error = '';

    if (!suggestion || typeof(suggestion) !== 'object') {
      error = "addSuggestion:: suggestion not an object";
    } else if (!suggestion.name) {
      error = "addSuggestion:: missing suggestion name";
    } else if (!suggestion.description) {
      error = "addSuggestion:: missing suggestion description";
    } else {
      const maxId = Math.max.apply(
        Math, suggestions.map((suggestion) => { return suggestion.id;}));
      suggestion.id = maxId + 1;
      this.suggestions.push(suggestion);
    }

    return error;
  }
}

const gloster = new GlosterApi();

export default gloster;
