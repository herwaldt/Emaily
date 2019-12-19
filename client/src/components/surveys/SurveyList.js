import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card white-text" key={survey._id}>
          <div className="card-content">
            <span className="card-title myTitle">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right white-text">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a className="white-text">Yes: {survey.yes}</a>
            <a className="white-text">No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)