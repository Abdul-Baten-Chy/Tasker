import SearchForm from "./SearchForm";
import Table from "./Table";

function Board() {
  return (
    <section class="mb-20" id="tasks">
      <div class="container">
        <SearchForm />
        <Table />
      </div>
    </section>
  );
}

export default Board;
