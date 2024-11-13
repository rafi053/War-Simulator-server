import  { IResource, IUser } from "../models/userModel";
import bcrypt from "bcrypt"
import userSchema from "../schemas/userSchema";
import { Missiles, Organization, readMissiles, readOrganization} from "../DAL/data";



import { createUser, findUserByUsername, createResources } from "../DAL/data";
import resourceSchema from "../schemas/resourceSchema";

export const authRegister = async (username: string, password: string, organizationName: string, zone?: string): Promise<IUser | undefined> => {
  
  const existingUser: IUser | null = await findUserByUsername(username);
  
  if (existingUser) {
    console.log("Username already exists.");
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const organization: string = `${organizationName} - ${zone}`;
  const organizationResources: Organization | undefined = await readOrganization(organization);
  const missilesNames = organizationResources!.resources.map((resource: any) => resource.name); 
  const missiles: Missiles | undefined = await readMissiles(missilesNames[0]);
  console.log("missiles: ", missiles);
  const missilesAmount = organizationResources!.resources.map((resource: any) => resource.amount)[0];
  const budget = organizationResources!.budget;
  
  



 const resources = new resourceSchema ({
  missile: missiles,  
  amount: missilesAmount
  });
  

  

  const resourcesToAdd = await createResources(resources);
  const idResources = resourcesToAdd?._id;
 

  const newUser = new userSchema ({
    username: username,
    password: hashedPassword,
    organizationName: organizationName,
    zone: zone,
    resources: idResources,
    budget: budget
    });
   
    const userToAdd: IUser | undefined = await createUser(newUser);  
    return userToAdd;
    
  };


export const authLogin = async (username: string, password: string): Promise<IUser | null> => {
  const userFind: IUser | null = await findUserByUsername(username );
  if (!userFind) {
    return null;
  
  }
  const comparePassword =  bcrypt.compare(password ,userFind.password);
  if(!comparePassword){
    return null;
  }
  return userFind;
};