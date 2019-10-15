//User Interface on registration
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
//User Interface for updating name or img
export interface UpdateUser {
  photoURL: string;
  displayName: string;
}

//Bookmarks 
export interface Bookmarks {
  mal_id: null;
  title: '';
  image_url: '';
}
