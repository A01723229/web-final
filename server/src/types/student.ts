export interface Student {
    username: string;
    password: string;
    fullName: string;
    favoriteBook: string;
  }
  
  export interface LoginRequest {
    username: string;
    password: string;
  }
  
  export interface LoginResponse {
    fullName: string;
    favoriteBook: string;
  }