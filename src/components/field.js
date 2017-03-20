import React from 'react';

const RenderField = field => (
  <div>
    <label htmlFor={field.name}>{field.label}</label>
    <input className="form-control" {...field.input} type={field.type}/>
    <div className="text-center error-block">
      {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
    </div>
  </div>
);

export default RenderField;