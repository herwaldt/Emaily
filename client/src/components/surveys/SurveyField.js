// SurveyField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label className="title">{label}  </label> 
      <input {...input} />
      <div className="red-text errorMess">
        {touched && error}
      </div>
    </div>
  )
}