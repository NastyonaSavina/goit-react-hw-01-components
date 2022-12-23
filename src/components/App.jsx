import { UserProfile} from "./UserProfile/UserProfile";
import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';


// import userEvent from "@testing-library/user-event";
import Container from "../components/Container/Container";
import { Statistics } from "../components/Statistics/Statistics";
import { FriendList } from "../components/FriendList/FriendList";
import { TransactionHistory } from "../components/TransactionHistory/TransactionHistory";



export const App = () => {
  return (
    <Container>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title={data.title} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
