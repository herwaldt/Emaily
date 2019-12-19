// SurveyFormReview shows users their form inputs for review
import _ from 'lodash'
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/index';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label}) => {
    return (
      <div key={name}>
        <label className="title">{label}</label>
        <div className="values grey-text">
          {formValues[name]}
        </div>
      </div>
    );
  });

  return(
    <div>
      <h5>Please confirm your entries below:</h5>
        <div className="review">
          {reviewFields}
        </div>
      <button className="grey btn-flat white-text" onClick={onCancel}>
        Back
      </button>
      <button onClick={() => submitSurvey(formValues, history)} className="teal btn-flat right white-text bold">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
