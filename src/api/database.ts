import axios from "axios";

const database = axios.create({
  baseURL:
    "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp",
  headers: {
    authorId: "9",
  },
});

export default database;
