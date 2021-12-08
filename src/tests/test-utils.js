import React from 'react'
import {render} from '@testing-library/react'
import { configure } from '@testing-library/dom'

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../redux/store';

configure({ testIdAttribute: 'class' });

const AllTheProviders = ({children}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}