const {extend} = $;

const panelVars = {
  language: null,
  editor: null,
  matchings: null
};

module.exports = function () {
  this.panel = [
    extend(true, {}, panelVars),
    extend(true, {}, panelVars)
  ];

  this.setLanguage = (index, language) => {
    this.panel[index].language = language;
  };

  this.setEditor = (index, editor) => {
    this.panel[index].editor = editor;
  };

  this.setMatchings = (index, matchings) => {
    this.panel[index].matchings = matchings;
  };

  this.getLanguage = (index => {
    return this.panel[index].language;
  });

  this.getEditor = (index) => {
    return this.panel[index].editor;
  };

  this.getMatchings = (index) => {
    return this.panel[index].matchings;
  }
};