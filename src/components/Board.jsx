import Actions from "./Actions";
import SearchForm from "./SearchForm";
import Table from "./Table";

function Board({ toggleModal, tasks, onEdit }) {
  return (
    <section class="mb-20" id="tasks">
      <div class="container">
        <SearchForm />
        <div class="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <Actions toggleModal={toggleModal} />
          <Table tasks={tasks} onEdit={onEdit} />
        </div>
      </div>
    </section>
  );
}

export default Board;
