import {combineReducers} from 'redux';

import {OPEN_ROOT_MODAL, CLOSE_ROOT_MODAL, GET_ISSUES, GET_IN_ISSUES, GET_OUT_ISSUES, RECEIVED_SHOW_RHS_ACTION} from './action_types';

const rootModalVisible = (state = false, action) => {
    switch (action.type) {
    case OPEN_ROOT_MODAL:
        return true;
    case CLOSE_ROOT_MODAL:
        return false;
    default:
        return state;
    }
};

const postID = (state = '', action) => {
    switch (action.type) {
    case OPEN_ROOT_MODAL:
        return action.postID;
    case CLOSE_ROOT_MODAL:
        return '';
    default:
        return state;
    }
};

const issues = (state = [], action) => {
    switch (action.type) {
    case GET_ISSUES:
        return action.data;
    default:
        return state;
    }
};

const inIssues = (state = [], action) => {
    switch (action.type) {
    case GET_IN_ISSUES:
        return action.data;
    default:
        return state;
    }
};

const outIssues = (state = [], action) => {
    switch (action.type) {
    case GET_OUT_ISSUES:
        return action.data;
    default:
        return state;
    }
};

function rhsPluginAction(state = null, action) {
    switch (action.type) {
    case RECEIVED_SHOW_RHS_ACTION:
        return action.showRHSPluginAction;
    default:
        return state;
    }
}

export default combineReducers({
    rootModalVisible,
    postID,
    issues,
    inIssues,
    outIssues,
    rhsPluginAction,
});
