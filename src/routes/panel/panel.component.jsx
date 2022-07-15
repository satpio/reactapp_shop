import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import Spinner from '../../components/spinner/spinner.component';
import { PanelContainer } from './panel.styles';

const Panel = () => {
  const { displayName } = (useSelector(selectCurrentUser) || { displayName: null });
  return (
    <PanelContainer>
      {displayName ? (
        <h1>Hello, {displayName}</h1>
      ) : (
        <Spinner />
      )}

    </PanelContainer>
  )
}

export default Panel;