export const initialState = {
  totalData: [],
  search: [],
  searchResults: [],
  isLoading: true,
  isError: false,
  searchQuery: "",
}

enum ActionEnum {
  SetData = 'SET_DATA',
  SetSearch = 'SET_SEARCH',
  SetSearchQuery = 'SET_SEARCH_QUERY'
}

export default function SearchReducer(state: any, action: any) {
  switch (action.type) {
    case ActionEnum.SetData:
      return {
        ...state,
        totalData: action.payload,
      }
    case ActionEnum.SetSearch:
      return {
        ...state,
        search: action.payload,
        isLoading: false,
      }
    case ActionEnum.SetSearchQuery:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
        searchResults: action.payload.searchResults,
      }
    default:
      return state
  }
}
