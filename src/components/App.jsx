import { UserProfile} from "./UserProfile/UserProfile";
import user from '../assets/user.json';
import userEvent from "@testing-library/user-event";
import Container from "../components/Container/Container";


export const App = () => {
  return (
    <Container>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
  </Container>
  );
};
