import { getAllInformation } from "../DAL/data";

export const information = async (): Promise<any> => {
  try{
    const information   = await getAllInformation();
    return information;
  } catch (error) {
    console.log(error);
  }
};



