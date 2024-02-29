import { Button, Input, Table, Space } from "antd";

let res = await fetch("https://swapi.dev/api/people/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  });

console.log(res.results);
const dataSource = res.results;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Mass",
    dataIndex: "mass",
    key: "mass",
  },
  {
    title: "Info",
    dataIndex: "homeworld",
    key: "homeworld",
    render: (text) => {
      return (
        <div>
          <a href={text}>
            <Button type="primary">Больше информации</Button>
          </a>
        </div>
      );
    },
  },
];
function MyTable() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  );
}
export default MyTable;
