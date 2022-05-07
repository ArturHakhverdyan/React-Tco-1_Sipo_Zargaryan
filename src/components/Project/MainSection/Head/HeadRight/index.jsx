

import { useState } from "react";
import { Input, Button } from "reactstrap";
import "./styles.css";

const SortSelect = () => {
  return (
    <Input name="sort_by" type="select">
      <option>Sort By</option>
      <option>Newest First</option>
      <option>Oldest First</option>
      <option>Todo at Newest</option>
    </Input>
  );
};

const SearchInput = () => {
  return <Input type="search" placeholder="Search" name="search"></Input>;
};

const Modal = () => {

  return (
    <div className="modal-box">
      Add New Task
    </div>
  )
}

export const HeadRight = () => {
  const [modal, setModal] = useState(false)
  return (
    <div className="main-section-head-right">
      <div >
        {modal && <Modal />}
      </div>
      <div className="main-section-head-right-search-box">
        <Button style={{ width: "100%" }} onClick={() => {
          setModal(!modal)
        }}
          color="success"
          outline
        >
          Add New Task
        </Button>
        <SortSelect />
        <SearchInput />
      </div>


    </div>
  );
};
