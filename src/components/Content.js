import { Button, Input, Table, Space } from "antd";
import { Route, Routes } from "react-router-dom";
import MyTable from "./MyTable";
import Main from "./Main";
import Photo from "./Photo";
import Contacts from "./contacts";

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/table" element={<MyTable />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}

export default Content;
