import { UserProfile} from "./UserProfile/UserProfile";
import user from '../assets/user.json';
import data from '../assets/data.json';

import userEvent from "@testing-library/user-event";
import Container from "../components/Container/Container";
import {Statistics} from "../components/Statistics/Statistics"


export const App = () => {
  return (
    <Container>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title={data.title ? data.title : "Upload stats"} stats={data} />
      

    </Container>
  );
};
