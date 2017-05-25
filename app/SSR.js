import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';
import MainComponent from './components/main-component.js';

export default function render(req, res) {
  const appString = renderToString(<MainComponent />);
  res.send(template({
    body: appString,
    title: 'FROM THE SERVER',
  }));
}
