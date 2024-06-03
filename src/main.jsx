// deploy to azure, key thing is : app folder: /, output folder: /dist
// https://blog.csdn.net/zxmatline/article/details/135714200?spm=1001.2014.3001.5502
// https://blog.csdn.net/zxmatline/article/details/136023631?spm=1001.2014.3001.5502
// https://blog.csdn.net/zxmatline/article/details/136029634?spm=1001.2014.3001.5502
// https://newsletter.frontendfresh.com/archive/tutorial-interacting-with-openai-in-nodejs-and/

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router><App /></Router>
)
