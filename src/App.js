import './App.css';

function App() {
  return (
    <div className="App container">
      <div className="d-flex gap-2 mt-3">
        <a className="btn btn-danger" href="https://www.youtube.com/" target="_blank" rel="noopener">Youtube</a>
        <a className="btn btn-success" href="https://www.google.com/" target="_blank" rel="noopener">Google</a>
        <a className="btn btn-primary" href="https://www.facebook.com/" target="_blank" rel="noopener">Facebook</a>
      </div>

        <div class="card mt-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfe21Q51R8FVXbJFN1oxfQjjnBFL53TSfDdg&s" class="card-img-top" alt="react"/>
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
    </div>
  );
}

export default App;
