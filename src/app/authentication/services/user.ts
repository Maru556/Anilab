export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

export interface UpdateUser {
  photoURL: string;
  displayName: string;
}

export interface Bookmarks {
  mal_id: null;
  title: '';
  image_url: '';
}
