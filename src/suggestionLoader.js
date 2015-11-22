import React from 'react';
import Suggestion from './components/suggestion';
import './mixins/overview.scss';

console.info('storting voting application...');
React.render(
    React.createElement(Suggestion),
    document.getElementById('suggestion')
);
