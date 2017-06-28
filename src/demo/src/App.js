import React, { Component } from 'react';
import { Header, Footer, CardContainer } from './containers';
import { Panel, Grid, Hero, Navigation, Tout } from '../../fusion';
import classnames from 'classnames';
import './App.css';
import './styles/dark-theme.css';
import './styles/light-theme.css';
import './styles/cerulean-theme.css';
import './styles/zombie-theme.css';
import './styles/index.css';
import config from './data/config.json';

// TODO: Move these arrays to JSON file(s). Remove Index and use uniqueKeys
const navLinks = [
  { title: 'Home', url: 'https://github.com/pagesource/atomic-react', index: '1' },
  { title: 'Guidelines', url: 'https://github.com/areai51/react-component-design', index: '2' },
  { title: 'Random Bash', url: 'http://bash.org/?random', index: '3' }
];
class App extends Component {
  render() {
    const theme=(this.props.theme && this.props.theme.split('/')[1])||'light';
    console.log(this.props)
    return (
      <div className={classnames('app', `acss-theme-${theme}`, 'acss-background-primary')}>
        <Header theme={theme}/>
        
        <Navigation 
          links={navLinks}
          theme={theme}
          align="left"
        />

        <Hero 
          backgroundImg="http://placehold.it/1600x400/"
          imgWidth={100}
          theme={theme}
          heading="Hero component"
          subHeading="with text headings"
          headingPosition="left"
        />
        
        <Grid>
          <h2>Cards</h2>
          <CardContainer 
            theme={theme}
          />

          <h2>Panel</h2>
          <Panel heading="This is Panel header" theme={theme}>

          <Tout 
            headline="This is a tout heading"
            imgURL="http://placehold.it/350x250/"
            destination="/"
            theme={theme}
          />

          <p>Sir Joseph John Thomson (18 December 1856 – 30 August 1940) was an English physicist and Nobel laureate in physics, credited with the discovery and identification of the electron; and with the discovery of the first subatomic particle. He was elected as a fellow of the Royal Society of London and appointed to the Cavendish Professorship of Experimental Physics at the Cambridge University's Cavendish Laboratory in 1884. In 1897, Thomson showed that cathode rays were composed of previously unknown negatively charged particles, which he calculated must have bodies much smaller than atoms and a very large value for their charge-to-mass ratio.[3] Thomson is also credited with finding the first evidence for isotopes of a stable (non-radioactive) element in 1913, as part of his exploration into the composition of canal rays (positive ions). His experiments to determine the nature of positively charged particles, with Francis William Aston, were the first use of mass spectrometry and led to the development of the mass spectrograph. Thomson was awarded the 1906 Nobel Prize in Physics for his work on the conduction of electricity in gases. Seven of his students, including his son George Paget Thomson, also became Nobel Prize winners either in physics or in chemistry. His record is comparable only to that of the German physicist Arnold Sommerfeld.</p>
          </Panel>
        </Grid>

        <Footer
          currentYear={2017}
          links={navLinks}
          theme={theme}
        />
      </div>
    );
  }
}

export default App;
