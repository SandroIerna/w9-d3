import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import history from "./data/history.json";

function App() {
  return (
    <div>
      <WarningSign alertText="Danger!" />
      <MyBadge badgeText="This is a badge" badgeColor="secondary" />
      <BookList booksArray={history} />
    </div>
  );
}

export default App;
