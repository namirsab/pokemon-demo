import { useHistory } from "react-router-dom";

export default function GoBackButton() {
  const history = useHistory();
  return <button onClick={() => history.goBack()}></button>;
}
