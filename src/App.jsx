import "./App.css";
import Homework04 from "./homeworks/Homework04/Homework04";
// Импортируем компонент Button для его дальнейшего использования
// import Button from "./components/Button/Button";
function App() {
  return (
    <div className="app">
      {/* Вызываем компонент Button для того, чтобы он вернул 
      JSX и наша кнопка отобразилась на странице*/}
      {/* <div className="button-container">
        <Button />
      </div> */}
      <Homework04 />
    </div>
  );
}
export default App;
