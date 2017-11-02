function hasOwn (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

// Escape special characters.
function escapeRe (str) {
  return str.replace(/[.*+?^$|[\](){}\\-]/g, '\\$&')
}

// Return a future date by the given string.
function computeExpires (str) {
  const lastCh = str.charAt(str.length - 1)
  const value = parseInt(str, 10)
  let expires = new Date()

  switch (lastCh) {
    case 'Y': expires.setFullYear(expires.getFullYear() + value); break
    case 'M': expires.setMonth(expires.getMonth() + value); break
    case 'D': expires.setDate(expires.getDate() + value); break
    case 'h': expires.setHours(expires.getHours() + value); break
    case 'm': expires.setMinutes(expires.getMinutes() + value); break
    case 's': expires.setSeconds(expires.getSeconds() + value); break
    default: expires = new Date(str)
  }

  return expires
}

// Convert an object to a cookie option string.
function convert (opts) {
  let res = ''

  // eslint-disable-next-line
  for (const key in opts) {
    if (hasOwn(opts, key)) {
      if (/^expires$/i.test(key)) {
        let expires = opts[key]

        if (typeof expires !== 'object') {
          expires += typeof expires === 'number' ? 'D' : ''
          expires = computeExpires(expires)
        }
        res += `;${key}=${expires.toUTCString()}`
      } else if (/^secure$/.test(key)) {
        if (opts[key]) {
          res += `;${key}`
        }
      } else {
        res += `;${key}=${opts[key]}`
      }
    }
  }

  if (!hasOwn(opts, 'path')) {
    res += ';path=/'
  }
  return res
}

class VueCookie {
  /**
   * Check if browser cookie is enabled
   *
   * @returns
   * @memberof VueCookie
   */
  isEnabled () {
    const key = '@key@'
    const value = '1'
    const re = new RegExp(`(?:^|; )${key}=${value}(?:;|$)`)

    const temp = document.cookie

    document.cookie = `${key}=${value}`

    const enabled = re.test(document.cookie)
    if (enabled) {
      document.cookie = temp
    }
    return enabled
  }

  /**
   * Get the cookie value by key
   *
   * @param {any} key
   * @param {any} [decoder=decodeURIComponent]
   * @returns
   * @memberof VueCookie
   */
  get (key, decoder = decodeURIComponent) {
    if ((typeof key !== 'string') || !key) {
      return null
    }

    const reKey = new RegExp(`(?:^|; )${escapeRe(key)}(?:=([^;]*))?(?:;|$)`)
    const match = reKey.exec(document.cookie)

    if (match === null) {
      return null
    }

    return typeof decoder === 'function' ? decoder(match[1]) : match[1]
  }

  /**
   *
   * Get all cookies
   *
   * @param {any} [decoder=decodeURIComponent]
   * @returns
   * @memberof VueCookie
   */
  getAll (decoder = decodeURIComponent) {
    const reKey = /(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g
    const cookies = {}
    let match
    while ((match = reKey.exec(document.cookie))) {
      reKey.lastIndex = (match.index + match.length) - 1
      cookies[match[1]] = typeof decoder === 'function' ? decoder(match[2]) : match[2]
    }

    return cookies
  }

  /**
   * Set a cookie
   *
   * @param {any} key
   * @param {any} value
   * @param {any} [encoder=encodeURIComponent]
   * @memberof VueCookie
   */
  set (key, value, encoder = encodeURIComponent, options) {
    const optionsStr = convert(options || {})
    const valueStr = typeof encoder === 'function' ? encoder(value) : value
    const newCookie = `${key}=${valueStr}${optionsStr}`
    document.cookie = newCookie
  }

  /**
   * Remove a cookie
   *
   * @param {any} key
   * @returns
   * @memberof VueCookie
   */
  remove (key) {
    return this.set(key, 'a', null, { expires: -1 })
  }

  /**
   * Get the cookie's value without decoding
   *
   * @param {any} key
   * @returns
   * @memberof VueCookie
   */
  getRaw (key) {
    return this.get(key, null)
  }

  /**
   * Set a cookie without encoding the value
   *
   * @param {any} key
   * @param {any} value
   * @param {any} options
   * @returns
   * @memberof VueCookie
   */
  setRaw (key, value, options) {
    return this.set(key, value, null, options)
  }
}

VueCookie.install = (Vue, options) => {
  Vue.cookie = new VueCookie()

  Object.defineProperties(Vue.prototype, {
    $cookie: {
      get () {
        return Vue.cookie
      }
    }
  })
}

export default VueCookie
