import { getResources } from "../DAL/data";

export const informationService = async (username: string): Promise<any> => {
  try{
    const information   = await getResources(username);
    return information;
  } catch (error) {
    console.log(error);
  }
};



