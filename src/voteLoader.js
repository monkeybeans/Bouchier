import React from 'react';
import Vote from './components/vote';
import './mixins/overview.scss';

console.info('storting voting application...');
React.render(
    React.createElement(Vote),
    document.getElementById('vote')
);
