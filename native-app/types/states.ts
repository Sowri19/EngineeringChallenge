// types/state.ts
export interface AuthState {
  isLoggedIn: boolean;
  user: { email: string } | null;
}

export interface MachineDataState {
  data: any; // Replace 'any' with the specific type of your machine data
}

export interface RootState {
  auth: AuthState;
  machineData: MachineDataState;
}
