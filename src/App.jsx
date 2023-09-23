
import './App.css'
import Grandpa from './componants/Grandpa/Grandpa'
// import ReuseableForm from './componants/ReuseableForm/ReuseableForm'
// import HookForm from './componants/HookForm/HookForm'
// import RefForm from './componants/RefForm/RefForm'
// import SimpleForm from './componants/SimpleForm/SimpleForm'
// import StatefulForm from './componants/StatefulForm/StatefulForm'

function App() {
  
  // const handleSignUpSubmit = data =>{
  //       console.log('sign up data', data);
  //   }

  // const handleUpdateProfile = data =>{
  //   console.log('update data', data);
  // }
  return (
    <>
      <h1>Form Master</h1>

      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>please sign up</p>
        </div>
      </ReuseableForm>

      <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'></ReuseableForm> */}
    </>
  )
}

export default App
