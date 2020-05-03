import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/content').default);
app.model(require('./models/indexInfo').default);
app.model(require('./models/chapterList').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
