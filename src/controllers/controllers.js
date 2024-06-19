import { getAllData } from "../service/service";

const getData = async (req, res) => {
  try {
    const datas = await getAllData();
    res.status(200).json(datas);
  } catch (error) {
    res.status(500).json({ error: "Algo salió mal" });
  }
};

export default { getData };
