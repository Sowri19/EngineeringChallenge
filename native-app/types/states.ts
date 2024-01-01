// types/state.ts
export interface AuthState {
  isLoggedIn: boolean;
  uid: string;
}

export interface MachineDataState {
  history: any;
  data: any; // Replace 'any' with the specific type of your machine data
}

export interface RootState {
  auth: AuthState;
  machineData: MachineDataState;
}
