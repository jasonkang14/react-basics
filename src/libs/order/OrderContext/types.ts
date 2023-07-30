// TODO: 'idle' state
export type CallState =
  | "dialing"
  | "ringing"
  | "established"
  | "connected"
  | "reconnecting"
  | "reconnected"
  | "ended";

export type AudioInputDeviceInfo = {
  current?: InputDeviceInfo;
  available: InputDeviceInfo[];
};
export type AudioOutputDeviceInfo = {
  current?: MediaDeviceInfo;
  available: MediaDeviceInfo[];
};
export type VideoInputDeviceInfo = {
  current?: InputDeviceInfo;
  available: InputDeviceInfo[];
};

export interface INewOrder {
  id: number;
  name: string;
  count: number;
  price: number;
  picture: string;
}

export interface ITargetRestaurant {
  id: number;
  name: string;
}

export interface IRestaurant {
  id: number;
  name: string;
  ratings: number;
  minPrice: number;
  icon: string;
}
