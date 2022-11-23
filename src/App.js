import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <WarningSign alertText="Danger!" />
      <MyBadge badgeText="This is a badge" badgeColor="secondary" />
      <BookList />
    </div>
  );
}

export default App;
