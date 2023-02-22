import { Item, data } from './items'
import './categories.json'

const getData = (): Item[] =>{
  return data
}

const getSearchResults = (query: string): Item[] => {
  const query_keywords = query.split(' ')
  let matches = getData()
  console.log(typeof matches)
  query_keywords.forEach(keyword => {
    matches = matches.filter(item => item.searchString.toLowerCase().includes(keyword.toLowerCase()))
  })
  return matches
}

export {
  getData,
  getSearchResults
}
