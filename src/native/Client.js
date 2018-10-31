import { NativeModules, Platform } from 'react-native';
import NativeUtil from './native';

const Client = NativeModules.Client;
const isIos = Platform.OS === 'ios';

/**
 * 初始化环信SDK。
 * @param appKey 环信APP Key
 * @param options 其他选项 {miAppKey:小米推送appKey,miAppSecret:小米推送appSecret}
 */
export const initWithAppKey = (appKey, options = {}) => NativeUtil(Client.init, {appKey, ...options});

/**
 * 通知Native，JS已经加载完毕
 * Android Only
 */
export const notifyJSDidLoad = () => !isIos && Client.notifyJSDidLoad();

/**
 * 聊天用户登陆。
 * @param username 用户名称
 * @param password 密码
 */
export const login = (username, password) => NativeUtil(Client.login, {username, password});

/**
 * 聊天用户登出。
 */
export const logout = () => NativeUtil(Client.logout, undefined);
