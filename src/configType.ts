
import Config from '../config.json' with {type: 'json'};
export type OnlyBroadcasterType = { [key: string]: boolean };
export type Env = { [key: string]: string };
export type Commands = { [key: string]: Env };
export type NhanifyConfig = { "enabled": boolean, "playlistsById": number[] };
type RewardsConfig = { id: string, title: string, cost: number, isPausedStates: State };
type State = { [key: string]: boolean };
export const config = Config as { "NHANIFY": NhanifyConfig; "VIDEO_MAX_DURATION": number; "ONLY_BROADCASTER": OnlyBroadcasterType; "COMMANDS": Commands; REWARDS: RewardsConfig[]};