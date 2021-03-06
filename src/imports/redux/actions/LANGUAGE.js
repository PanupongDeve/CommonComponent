import { CHANGELANGUAGE, SET_DEFAULT_LANGUAGE } from "@imports/redux/types";
import * as tools from '@imports/utils'

export const changeLanguage = lang => dispatch => {
  dispatch({
    type: CHANGELANGUAGE,
    payload: lang
  });
};

export const SetDefaultLanguage = () => dispatch => {
    dispatch({
        type: SET_DEFAULT_LANGUAGE,
        payload: tools.setDefaultLanguage
    });
}
