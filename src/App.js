import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video likes={111} messages={222} shares={50} name="Leonardo" description="gato goleiro" music="musica epica" url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"/>
        <Video likes={111} messages={222} shares={50} name="Leonardo" description="Bird" music="clap your hands" url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"/>
      </div>
    </div>
  );
}

export default App;
