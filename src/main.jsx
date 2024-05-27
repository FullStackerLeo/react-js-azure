// deploy to azure, key thing is : app folder: /, output folder: /dist
// https://blog.csdn.net/zxmatline/article/details/135714200?spm=1001.2014.3001.5502
// https://blog.csdn.net/zxmatline/article/details/136023631?spm=1001.2014.3001.5502
// https://blog.csdn.net/zxmatline/article/details/136029634?spm=1001.2014.3001.5502
// npm install @mui/material @emotion/react @emotion/styled
// npm install @fontsource/roboto
// npm install @mui/icons-material
// npm install react-transition-group --save
// npm i bootstrap@5.3.2
// eslint-disable-next-line no-unused-vars
import SThemeProvider from '@/theme/SThemeProvider.jsx';   // mandatory here.

import App from './App.jsx'
import ReactDOM from 'react-dom/client'
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
