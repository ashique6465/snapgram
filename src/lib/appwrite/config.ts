import { Client, Account, Databases, Storage, Avatars, } from 'appwrite'

export const appwriteConfig = {
    url:"https://cloud.appwrite.io/v1",
    projectId:"66db4cb60037de8d8459",
    databaseId:"66dc162d000da95cb1ee",
    storageId:"66dc15ed0014f35bfcfe",
    userCollectionId:"66dc16a400169b427fd2",
    postCollectionId:"66dc1672003b380b837b",
    savesCollectionId:"66dc16c3002cbc1a668a",
    
}


export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client)
export const avatars = new Avatars(client);
