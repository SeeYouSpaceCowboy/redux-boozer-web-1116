const defaultCocktails = [
  {id: 1, name: 'Gin and Tonic'},
  {id: 2, name: 'Old Fashioned'},
  {id: 3, name: 'Negroni'},
  {id: 4, name: 'Roy Rogers'},
  {id: 5, name: 'Godfather'},
  {id: 6, name: 'Manhattan'},
  {id: 7, name: 'Vodka & Cranberry'},
  {id: 8, name: 'White Russian'},
  {id: 9, name: 'Water'},
  {id: 10, name: 'Baby Guinesse'}
];

export function fetchCocktails() {
  return {
    type: 'FETCH_COCKTAILS',
    payload: defaultCocktails
  }
}
