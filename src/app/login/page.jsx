import Styles from "./login.module.css"
const LoginPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <h3>Admin login</h3>
        <div className={Styles.google}>Login with Google</div>
      </div>
      
    </div>
  )
}

export default LoginPage