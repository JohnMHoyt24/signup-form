import './assets/App.css'
import IntroMessage from './components/intro-message';
import FreeTrial from './components/freetrial';
import SignupForm from './components/signup';

function App() {


  return (
    <div className='app-container'>
      <IntroMessage />
      <div className='freetrial-wrapper'>
        <FreeTrial />
      </div>
      <div className='form-wrapper'>
        <SignupForm />
      </div>
    </div>  
  )
}

export default App;
