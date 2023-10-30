import Cookies from 'js-cookie'

const TokenKey = 'User-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setUser(key,value){
  return Cookies.set(key, value)
}

export function getUser(key){
  return Cookies.get(key)
}


export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function removeUser() {
  return Cookies.remove(getToken())
}
