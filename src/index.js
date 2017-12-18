import React, { Component } from 'react';
import { render } from 'react-dom';
import { createRenderer } from 'fela';
import { Provider as RendererProvider } from 'react-fela';
import { ThemeProvider } from 'react-fela';
import embedded from 'fela-plugin-embedded';
import { BrowserRouter, withRouter } from 'react-router-dom';
import App from './App';
import './reset.css';
import theme from './theme';

const renderer = createRenderer({
  plugins: [embedded()]
});

const ScrollToTop = withRouter(
  class ScrollToTop extends Component {
    render = () => null;
    componentDidUpdate = prevProps =>
      this.props.location !== prevProps.location && window.scrollTo(0, 0);
  }
);

render(
  <RendererProvider {...{ renderer }}>
    <ThemeProvider {...{ theme }}>
      <BrowserRouter>
        <div>
          <ScrollToTop />
          <App />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </RendererProvider>,
  document.getElementById('root')
);
