import React from 'react';
import Navigation from './components/navigation';
import './mixins/overview.scss';

console.info('login verified...');
React.render(
    React.createElement(Navigation),
    document.getElementById('navigation')
);
