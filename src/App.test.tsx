import { render } from '@testing-library/react';
import App from './App';
import AdviceCard from './components/AdviceCard';

describe('<App />', () => {
  it('should render <App /> without crashing', () => {
    render(<App />);
  });
})


