import Header from "../../components/header";
import * as ROUTES from '../../constants/routes';
import logo from '../../logo.svg';


export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Test App" src={logo} width={70} height={70}/>
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}