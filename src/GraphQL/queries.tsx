import {gql} from "apollo-boost";

/**
 * Export the country list from api
 */
export const LOAD_COUNTRIES = gql`
query{ 
   countries {
    code
    name
    capital
    currency
    emoji
    native
    phone
    continent {
      name
    }
    states {
      name
    }
  }
}
`;

/**
 * Export a country  from api
 * @param code country's code
 */
export const LOAD_COUNTRY = gql`
query getCountryByCode($code: ID!   ){ 
   country(code: $code) {
    code
    name
    native
    phone
    continent {
      name
    }
    capital
    currency
    languages {
      name
      native
    }
    emoji
  }
}
`;

