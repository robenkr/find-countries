import {gql} from "apollo-boost";

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

export const LOAD_COUNTRY = gql`
query getCountryByCode($code: ID!){ 
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

