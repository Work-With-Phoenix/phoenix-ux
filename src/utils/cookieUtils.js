export function setCookie(name, value, options = {}) {
    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (options.expires) {
      const expires = new Date();
      expires.setTime(expires.getTime() + options.expires * 24 * 60 * 60 * 1000);
      updatedCookie += ';expires=' + expires.toUTCString();
    }
    if (options.path) {
      updatedCookie += ';path=' + options.path;
    }
    document.cookie = updatedCookie;
  }
  
  export function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (decodeURIComponent(cookieName) === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }
  