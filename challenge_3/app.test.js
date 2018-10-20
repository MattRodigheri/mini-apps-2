import React from 'React';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './client/components/App.jsx';
import ScoreBoard from './client/components/ScoreBoard.jsx';


configure({adapter: new Adapter()});

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
