// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {return {type: "quotes/add", payload: quote}}

export const removeQuote = (quoteId) => {return {type: "quotes/remove", payload: quoteId,}}

export const upvoteQuote = (quoteId) => {return {type: "quotes/upvote", payload: quoteId}}

export const downvoteQuote = (quoteId) => {return {type: "quotes/downvote", payload: quoteId}}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];
    case "quotes/remove":
      return state.filter((quote)=>quote.id !== action.payload);
    case "quotes/upvote":
      const findUpQuote = state.find((quote) => quote.id === action.payload);
      const upVoteQuote = { ...findUpQuote, votes: findUpQuote.votes + 1 };
      return state.map((quote) =>quote.id === action.payload ? upVoteQuote : quote);
    case "quotes/downvote":
      const findDownQuote = state.find((quote) => quote.id === action.payload);
      if (findDownQuote.votes > 0) {
        const downVoteQuote = { ...findDownQuote, votes: findDownQuote.votes - 1 };
        return state.map((quote) =>quote.id === action.payload ? downVoteQuote : quote);
      } else {
        return state;
      }
    default:
      return state;
  }
}
