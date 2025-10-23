import './assets/App.css'
import IntroMessage from './components/intro-message';
import FreeTrial from './components/freetrial';
import SignupForm from './components/signup';

function App() {


  return (
    <div className='app-container'>
      <IntroMessage />
      <FreeTrial />
      <SignupForm />
    </div>  
  )
}

export default App;
