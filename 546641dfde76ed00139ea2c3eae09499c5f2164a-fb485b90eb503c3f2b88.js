/*! For license information please see 546641dfde76ed00139ea2c3eae09499c5f2164a-fb485b90eb503c3f2b88.js.LICENSE.txt */
(self.webpackChunksoftware_development_portfolio =
  self.webpackChunksoftware_development_portfolio || []).push([
  [98],
  {
    2993: function (e) {
      var t = 'undefined' != typeof Element,
        n = 'function' == typeof Map,
        r = 'function' == typeof Set,
        i = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView;
      function a(e, o) {
        if (e === o) return !0;
        if (e && o && 'object' == typeof e && 'object' == typeof o) {
          if (e.constructor !== o.constructor) return !1;
          var l, s, c, u;
          if (Array.isArray(e)) {
            if ((l = e.length) != o.length) return !1;
            for (s = l; 0 != s--; ) if (!a(e[s], o[s])) return !1;
            return !0;
          }
          if (n && e instanceof Map && o instanceof Map) {
            if (e.size !== o.size) return !1;
            for (u = e.entries(); !(s = u.next()).done; ) if (!o.has(s.value[0])) return !1;
            for (u = e.entries(); !(s = u.next()).done; )
              if (!a(s.value[1], o.get(s.value[0]))) return !1;
            return !0;
          }
          if (r && e instanceof Set && o instanceof Set) {
            if (e.size !== o.size) return !1;
            for (u = e.entries(); !(s = u.next()).done; ) if (!o.has(s.value[0])) return !1;
            return !0;
          }
          if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
            if ((l = e.length) != o.length) return !1;
            for (s = l; 0 != s--; ) if (e[s] !== o[s]) return !1;
            return !0;
          }
          if (e.constructor === RegExp) return e.source === o.source && e.flags === o.flags;
          if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === o.valueOf();
          if (e.toString !== Object.prototype.toString) return e.toString() === o.toString();
          if ((l = (c = Object.keys(e)).length) !== Object.keys(o).length) return !1;
          for (s = l; 0 != s--; ) if (!Object.prototype.hasOwnProperty.call(o, c[s])) return !1;
          if (t && e instanceof Element) return !1;
          for (s = l; 0 != s--; )
            if (
              (('_owner' !== c[s] && '__v' !== c[s] && '__o' !== c[s]) || !e.$$typeof) &&
              !a(e[c[s]], o[c[s]])
            )
              return !1;
          return !0;
        }
        return e != e && o != o;
      }
      e.exports = function (e, t) {
        try {
          return a(e, t);
        } catch (n) {
          if ((n.message || '').match(/stack|recursion/i))
            return console.warn('react-fast-compare cannot handle circular refs'), !1;
          throw n;
        }
      };
    },
    5414: function (e, t, n) {
      'use strict';
      n.d(t, {
        q: function () {
          return he;
        },
      });
      var r,
        i,
        a,
        o,
        l = n(5697),
        s = n.n(l),
        c = n(4839),
        u = n.n(c),
        d = n(2993),
        f = n.n(d),
        m = n(7294),
        p = n(6494),
        h = n.n(p),
        g = 'bodyAttributes',
        v = 'htmlAttributes',
        b = 'titleAttributes',
        x = {
          BASE: 'base',
          BODY: 'body',
          HEAD: 'head',
          HTML: 'html',
          LINK: 'link',
          META: 'meta',
          NOSCRIPT: 'noscript',
          SCRIPT: 'script',
          STYLE: 'style',
          TITLE: 'title',
        },
        y =
          (Object.keys(x).map(function (e) {
            return x[e];
          }),
          'charset'),
        w = 'cssText',
        E = 'href',
        k = 'http-equiv',
        C = 'innerHTML',
        S = 'itemprop',
        T = 'name',
        O = 'property',
        L = 'rel',
        A = 'src',
        j = 'target',
        N = {
          accesskey: 'accessKey',
          charset: 'charSet',
          class: 'className',
          contenteditable: 'contentEditable',
          contextmenu: 'contextMenu',
          'http-equiv': 'httpEquiv',
          itemprop: 'itemProp',
          tabindex: 'tabIndex',
        },
        z = 'defaultTitle',
        M = 'defer',
        I = 'encodeSpecialCharacters',
        P = 'onChangeClientState',
        R = 'titleTemplate',
        _ = Object.keys(N).reduce(function (e, t) {
          return (e[N[t]] = t), e;
        }, {}),
        F = [x.NOSCRIPT, x.SCRIPT, x.STYLE],
        D = 'data-react-helmet',
        B =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              },
        q = function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        },
        H = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        W =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Z = function (e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        },
        V = function (e, t) {
          if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        },
        Y = function (e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return !1 === t
            ? String(e)
            : String(e)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#x27;');
        },
        U = function (e) {
          var t = K(e, x.TITLE),
            n = K(e, R);
          if (n && t)
            return n.replace(/%s/g, function () {
              return Array.isArray(t) ? t.join('') : t;
            });
          var r = K(e, z);
          return t || r || void 0;
        },
        G = function (e) {
          return K(e, P) || function () {};
        },
        Q = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return W({}, e, t);
            }, {});
        },
        $ = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[x.BASE];
            })
            .map(function (e) {
              return e[x.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                  var a = r[i].toLowerCase();
                  if (-1 !== e.indexOf(a) && n[a]) return t.concat(n);
                }
              return t;
            }, []);
        },
        J = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  re(
                    'Helmet: ' +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      B(t[e]) +
                      '"',
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var i = {};
              n.filter(function (e) {
                for (var n = void 0, a = Object.keys(e), o = 0; o < a.length; o++) {
                  var l = a[o],
                    s = l.toLowerCase();
                  -1 === t.indexOf(s) ||
                    (n === L && 'canonical' === e[n].toLowerCase()) ||
                    (s === L && 'stylesheet' === e[s].toLowerCase()) ||
                    (n = s),
                    -1 === t.indexOf(l) || (l !== C && l !== w && l !== S) || (n = l);
                }
                if (!n || !e[n]) return !1;
                var c = e[n].toLowerCase();
                return r[n] || (r[n] = {}), i[n] || (i[n] = {}), !r[n][c] && ((i[n][c] = !0), !0);
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var a = Object.keys(i), o = 0; o < a.length; o++) {
                var l = a[o],
                  s = h()({}, r[l], i[l]);
                r[l] = s;
              }
              return e;
            }, [])
            .reverse();
        },
        K = function (e, t) {
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            if (r.hasOwnProperty(t)) return r[t];
          }
          return null;
        },
        X =
          ((r = Date.now()),
          function (e) {
            var t = Date.now();
            t - r > 16
              ? ((r = t), e(t))
              : setTimeout(function () {
                  X(e);
                }, 0);
          }),
        ee = function (e) {
          return clearTimeout(e);
        },
        te =
          'undefined' != typeof window
            ? (window.requestAnimationFrame && window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              X
            : n.g.requestAnimationFrame || X,
        ne =
          'undefined' != typeof window
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              ee
            : n.g.cancelAnimationFrame || ee,
        re = function (e) {
          return console && 'function' == typeof console.warn && console.warn(e);
        },
        ie = null,
        ae = function (e, t) {
          var n = e.baseTag,
            r = e.bodyAttributes,
            i = e.htmlAttributes,
            a = e.linkTags,
            o = e.metaTags,
            l = e.noscriptTags,
            s = e.onChangeClientState,
            c = e.scriptTags,
            u = e.styleTags,
            d = e.title,
            f = e.titleAttributes;
          se(x.BODY, r), se(x.HTML, i), le(d, f);
          var m = {
              baseTag: ce(x.BASE, n),
              linkTags: ce(x.LINK, a),
              metaTags: ce(x.META, o),
              noscriptTags: ce(x.NOSCRIPT, l),
              scriptTags: ce(x.SCRIPT, c),
              styleTags: ce(x.STYLE, u),
            },
            p = {},
            h = {};
          Object.keys(m).forEach(function (e) {
            var t = m[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (p[e] = n), r.length && (h[e] = m[e].oldTags);
          }),
            t && t(),
            s(e, p, h);
        },
        oe = function (e) {
          return Array.isArray(e) ? e.join('') : e;
        },
        le = function (e, t) {
          void 0 !== e && document.title !== e && (document.title = oe(e)), se(x.TITLE, t);
        },
        se = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute(D),
                i = r ? r.split(',') : [],
                a = [].concat(i),
                o = Object.keys(t),
                l = 0;
              l < o.length;
              l++
            ) {
              var s = o[l],
                c = t[s] || '';
              n.getAttribute(s) !== c && n.setAttribute(s, c), -1 === i.indexOf(s) && i.push(s);
              var u = a.indexOf(s);
              -1 !== u && a.splice(u, 1);
            }
            for (var d = a.length - 1; d >= 0; d--) n.removeAttribute(a[d]);
            i.length === a.length
              ? n.removeAttribute(D)
              : n.getAttribute(D) !== o.join(',') && n.setAttribute(D, o.join(','));
          }
        },
        ce = function (e, t) {
          var n = document.head || document.querySelector(x.HEAD),
            r = n.querySelectorAll(e + '[' + 'data-react-helmet]'),
            i = Array.prototype.slice.call(r),
            a = [],
            o = void 0;
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var n = document.createElement(e);
                for (var r in t)
                  if (t.hasOwnProperty(r))
                    if (r === C) n.innerHTML = t.innerHTML;
                    else if (r === w)
                      n.styleSheet
                        ? (n.styleSheet.cssText = t.cssText)
                        : n.appendChild(document.createTextNode(t.cssText));
                    else {
                      var l = void 0 === t[r] ? '' : t[r];
                      n.setAttribute(r, l);
                    }
                n.setAttribute(D, 'true'),
                  i.some(function (e, t) {
                    return (o = t), n.isEqualNode(e);
                  })
                    ? i.splice(o, 1)
                    : a.push(n);
              }),
            i.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            a.forEach(function (e) {
              return n.appendChild(e);
            }),
            { oldTags: i, newTags: a }
          );
        },
        ue = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : '' + n;
            return t ? t + ' ' + r : r;
          }, '');
        },
        de = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function (t, n) {
            return (t[N[n] || n] = e[n]), t;
          }, t);
        },
        fe = function (e, t, n) {
          switch (e) {
            case x.TITLE:
              return {
                toComponent: function () {
                  return (
                    (e = t.title),
                    (n = t.titleAttributes),
                    ((r = { key: e })[D] = !0),
                    (i = de(n, r)),
                    [m.createElement(x.TITLE, i, e)]
                  );
                  var e, n, r, i;
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var i = ue(n),
                      a = oe(t);
                    return i
                      ? '<' + e + ' data-react-helmet="true" ' + i + '>' + Y(a, r) + '</' + e + '>'
                      : '<' + e + ' data-react-helmet="true">' + Y(a, r) + '</' + e + '>';
                  })(e, t.title, t.titleAttributes, n);
                },
              };
            case g:
            case v:
              return {
                toComponent: function () {
                  return de(t);
                },
                toString: function () {
                  return ue(t);
                },
              };
            default:
              return {
                toComponent: function () {
                  return (function (e, t) {
                    return t.map(function (t, n) {
                      var r,
                        i = (((r = { key: n })[D] = !0), r);
                      return (
                        Object.keys(t).forEach(function (e) {
                          var n = N[e] || e;
                          if (n === C || n === w) {
                            var r = t.innerHTML || t.cssText;
                            i.dangerouslySetInnerHTML = { __html: r };
                          } else i[n] = t[e];
                        }),
                        m.createElement(e, i)
                      );
                    });
                  })(e, t);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var i = Object.keys(r)
                          .filter(function (e) {
                            return !(e === C || e === w);
                          })
                          .reduce(function (e, t) {
                            var i = void 0 === r[t] ? t : t + '="' + Y(r[t], n) + '"';
                            return e ? e + ' ' + i : i;
                          }, ''),
                        a = r.innerHTML || r.cssText || '',
                        o = -1 === F.indexOf(e);
                      return (
                        t +
                        '<' +
                        e +
                        ' data-react-helmet="true" ' +
                        i +
                        (o ? '/>' : '>' + a + '</' + e + '>')
                      );
                    }, '');
                  })(e, t, n);
                },
              };
          }
        },
        me = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            i = e.htmlAttributes,
            a = e.linkTags,
            o = e.metaTags,
            l = e.noscriptTags,
            s = e.scriptTags,
            c = e.styleTags,
            u = e.title,
            d = void 0 === u ? '' : u,
            f = e.titleAttributes;
          return {
            base: fe(x.BASE, t, r),
            bodyAttributes: fe(g, n, r),
            htmlAttributes: fe(v, i, r),
            link: fe(x.LINK, a, r),
            meta: fe(x.META, o, r),
            noscript: fe(x.NOSCRIPT, l, r),
            script: fe(x.SCRIPT, s, r),
            style: fe(x.STYLE, c, r),
            title: fe(x.TITLE, { title: d, titleAttributes: f }, r),
          };
        },
        pe = u()(
          function (e) {
            return {
              baseTag: $([E, j], e),
              bodyAttributes: Q(g, e),
              defer: K(e, M),
              encode: K(e, I),
              htmlAttributes: Q(v, e),
              linkTags: J(x.LINK, [L, E], e),
              metaTags: J(x.META, [T, y, k, O, S], e),
              noscriptTags: J(x.NOSCRIPT, [C], e),
              onChangeClientState: G(e),
              scriptTags: J(x.SCRIPT, [A, C], e),
              styleTags: J(x.STYLE, [w], e),
              title: U(e),
              titleAttributes: Q(b, e),
            };
          },
          function (e) {
            ie && ne(ie),
              e.defer
                ? (ie = te(function () {
                    ae(e, function () {
                      ie = null;
                    });
                  }))
                : (ae(e), (ie = null));
          },
          me,
        )(function () {
          return null;
        }),
        he =
          ((i = pe),
          (o = a =
            (function (e) {
              function t() {
                return q(this, t), V(this, e.apply(this, arguments));
              }
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' + typeof t,
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                (t.prototype.shouldComponentUpdate = function (e) {
                  return !f()(this.props, e);
                }),
                (t.prototype.mapNestedChildrenToProps = function (e, t) {
                  if (!t) return null;
                  switch (e.type) {
                    case x.SCRIPT:
                    case x.NOSCRIPT:
                      return { innerHTML: t };
                    case x.STYLE:
                      return { cssText: t };
                  }
                  throw new Error(
                    '<' +
                      e.type +
                      ' /> elements are self-closing and can not contain children. Refer to our API for more information.',
                  );
                }),
                (t.prototype.flattenArrayTypeChildren = function (e) {
                  var t,
                    n = e.child,
                    r = e.arrayTypeChildren,
                    i = e.newChildProps,
                    a = e.nestedChildren;
                  return W(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                      W({}, i, this.mapNestedChildrenToProps(n, a)),
                    ])),
                    t),
                  );
                }),
                (t.prototype.mapObjectTypeChildren = function (e) {
                  var t,
                    n,
                    r = e.child,
                    i = e.newProps,
                    a = e.newChildProps,
                    o = e.nestedChildren;
                  switch (r.type) {
                    case x.TITLE:
                      return W({}, i, (((t = {})[r.type] = o), (t.titleAttributes = W({}, a)), t));
                    case x.BODY:
                      return W({}, i, { bodyAttributes: W({}, a) });
                    case x.HTML:
                      return W({}, i, { htmlAttributes: W({}, a) });
                  }
                  return W({}, i, (((n = {})[r.type] = W({}, a)), n));
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                  var n = W({}, t);
                  return (
                    Object.keys(e).forEach(function (t) {
                      var r;
                      n = W({}, n, (((r = {})[t] = e[t]), r));
                    }),
                    n
                  );
                }),
                (t.prototype.warnOnInvalidChildren = function (e, t) {
                  return !0;
                }),
                (t.prototype.mapChildrenToProps = function (e, t) {
                  var n = this,
                    r = {};
                  return (
                    m.Children.forEach(e, function (e) {
                      if (e && e.props) {
                        var i = e.props,
                          a = i.children,
                          o = (function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return Object.keys(e).reduce(function (t, n) {
                              return (t[_[n] || n] = e[n]), t;
                            }, t);
                          })(Z(i, ['children']));
                        switch ((n.warnOnInvalidChildren(e, a), e.type)) {
                          case x.LINK:
                          case x.META:
                          case x.NOSCRIPT:
                          case x.SCRIPT:
                          case x.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: e,
                              arrayTypeChildren: r,
                              newChildProps: o,
                              nestedChildren: a,
                            });
                            break;
                          default:
                            t = n.mapObjectTypeChildren({
                              child: e,
                              newProps: t,
                              newChildProps: o,
                              nestedChildren: a,
                            });
                        }
                      }
                    }),
                    (t = this.mapArrayTypeChildrenToProps(r, t))
                  );
                }),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.children,
                    n = Z(e, ['children']),
                    r = W({}, n);
                  return t && (r = this.mapChildrenToProps(t, r)), m.createElement(i, r);
                }),
                H(t, null, [
                  {
                    key: 'canUseDOM',
                    set: function (e) {
                      i.canUseDOM = e;
                    },
                  },
                ]),
                t
              );
            })(m.Component)),
          (a.propTypes = {
            base: s().object,
            bodyAttributes: s().object,
            children: s().oneOfType([s().arrayOf(s().node), s().node]),
            defaultTitle: s().string,
            defer: s().bool,
            encodeSpecialCharacters: s().bool,
            htmlAttributes: s().object,
            link: s().arrayOf(s().object),
            meta: s().arrayOf(s().object),
            noscript: s().arrayOf(s().object),
            onChangeClientState: s().func,
            script: s().arrayOf(s().object),
            style: s().arrayOf(s().object),
            title: s().string,
            titleAttributes: s().object,
            titleTemplate: s().string,
          }),
          (a.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (a.peek = i.peek),
          (a.rewind = function () {
            var e = i.rewind();
            return (
              e ||
                (e = me({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: '',
                  titleAttributes: {},
                })),
              e
            );
          }),
          o);
      he.renderStatic = he.rewind;
    },
    4839: function (e, t, n) {
      'use strict';
      var r,
        i = n(7294),
        a = (r = i) && 'object' == typeof r && 'default' in r ? r.default : r;
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var l = !('undefined' == typeof window || !window.document || !window.document.createElement);
      e.exports = function (e, t, n) {
        if ('function' != typeof e)
          throw new Error('Expected reducePropsToState to be a function.');
        if ('function' != typeof t)
          throw new Error('Expected handleStateChangeOnClient to be a function.');
        if (void 0 !== n && 'function' != typeof n)
          throw new Error('Expected mapStateOnServer to either be undefined or a function.');
        return function (r) {
          if ('function' != typeof r)
            throw new Error('Expected WrappedComponent to be a React component.');
          var s,
            c = [];
          function u() {
            (s = e(
              c.map(function (e) {
                return e.props;
              }),
            )),
              d.canUseDOM ? t(s) : n && (s = n(s));
          }
          var d = (function (e) {
            var t, n;
            function i() {
              return e.apply(this, arguments) || this;
            }
            (n = e),
              ((t = i).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (i.peek = function () {
                return s;
              }),
              (i.rewind = function () {
                if (i.canUseDOM)
                  throw new Error(
                    'You may only call rewind() on the server. Call peek() to read the current state.',
                  );
                var e = s;
                return (s = void 0), (c = []), e;
              });
            var o = i.prototype;
            return (
              (o.UNSAFE_componentWillMount = function () {
                c.push(this), u();
              }),
              (o.componentDidUpdate = function () {
                u();
              }),
              (o.componentWillUnmount = function () {
                var e = c.indexOf(this);
                c.splice(e, 1), u();
              }),
              (o.render = function () {
                return a.createElement(r, this.props);
              }),
              i
            );
          })(i.PureComponent);
          return (
            o(
              d,
              'displayName',
              'SideEffect(' +
                (function (e) {
                  return e.displayName || e.name || 'Component';
                })(r) +
                ')',
            ),
            o(d, 'canUseDOM', l),
            d
          );
        };
      };
    },
    7428: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var r = n(7462),
        i = n(3366),
        a = n(1721);
      function o(e, t) {
        return e
          .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '');
      }
      var l = n(7294),
        s = n(3935),
        c = !1,
        u = n(1278),
        d = function (e) {
          return e.scrollTop;
        },
        f = 'unmounted',
        m = 'exited',
        p = 'entering',
        h = 'entered',
        g = 'exiting',
        v = (function (e) {
          function t(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var i,
              a = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? a
                  ? ((i = m), (r.appearStatus = p))
                  : (i = h)
                : (i = t.unmountOnExit || t.mountOnEnter ? f : m),
              (r.state = { status: i }),
              (r.nextCallback = null),
              r
            );
          }
          (0, a.Z)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === f ? { status: m } : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in ? n !== p && n !== h && (t = p) : (n !== p && n !== h) || (t = g);
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  'number' != typeof r &&
                  ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === p)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this);
                    n && d(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit && this.state.status === m && this.setState({ status: f });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                i = this.props.nodeRef ? [r] : [s.findDOMNode(this), r],
                a = i[0],
                o = i[1],
                l = this.getTimeouts(),
                u = r ? l.appear : l.enter;
              (!e && !n) || c
                ? this.safeSetState({ status: h }, function () {
                    t.props.onEntered(a);
                  })
                : (this.props.onEnter(a, o),
                  this.safeSetState({ status: p }, function () {
                    t.props.onEntering(a, o),
                      t.onTransitionEnd(u, function () {
                        t.safeSetState({ status: h }, function () {
                          t.props.onEntered(a, o);
                        });
                      });
                  }));
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : s.findDOMNode(this);
              t && !c
                ? (this.props.onExit(r),
                  this.safeSetState({ status: g }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: m }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: m }, function () {
                    e.props.onExited(r);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                    a = i[0],
                    o = i[1];
                  this.props.addEndListener(a, o);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
              var e = this.state.status;
              if (e === f) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, i.Z)(t, [
                    'children',
                    'in',
                    'mountOnEnter',
                    'unmountOnExit',
                    'appear',
                    'enter',
                    'exit',
                    'timeout',
                    'addEndListener',
                    'onEnter',
                    'onEntering',
                    'onEntered',
                    'onExit',
                    'onExiting',
                    'onExited',
                    'nodeRef',
                  ]));
              return l.createElement(
                u.Z.Provider,
                { value: null },
                'function' == typeof n ? n(e, r) : l.cloneElement(l.Children.only(n), r),
              );
            }),
            t
          );
        })(l.Component);
      function b() {}
      (v.contextType = u.Z),
        (v.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: b,
          onEntering: b,
          onEntered: b,
          onExit: b,
          onExiting: b,
          onExited: b,
        }),
        (v.UNMOUNTED = f),
        (v.EXITED = m),
        (v.ENTERING = p),
        (v.ENTERED = h),
        (v.EXITING = g);
      var x = v,
        y = function (e, t) {
          return (
            e &&
            t &&
            t.split(' ').forEach(function (t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.remove(r)
                  : 'string' == typeof n.className
                  ? (n.className = o(n.className, r))
                  : n.setAttribute('class', o((n.className && n.className.baseVal) || '', r)))
              );
              var n, r;
            })
          );
        },
        w = (function (e) {
          function t() {
            for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                appear: {},
                enter: {},
                exit: {},
              }),
              (t.onEnter = function (e, n) {
                var r = t.resolveArguments(e, n),
                  i = r[0],
                  a = r[1];
                t.removeClasses(i, 'exit'),
                  t.addClass(i, a ? 'appear' : 'enter', 'base'),
                  t.props.onEnter && t.props.onEnter(e, n);
              }),
              (t.onEntering = function (e, n) {
                var r = t.resolveArguments(e, n),
                  i = r[0],
                  a = r[1] ? 'appear' : 'enter';
                t.addClass(i, a, 'active'), t.props.onEntering && t.props.onEntering(e, n);
              }),
              (t.onEntered = function (e, n) {
                var r = t.resolveArguments(e, n),
                  i = r[0],
                  a = r[1] ? 'appear' : 'enter';
                t.removeClasses(i, a),
                  t.addClass(i, a, 'done'),
                  t.props.onEntered && t.props.onEntered(e, n);
              }),
              (t.onExit = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, 'appear'),
                  t.removeClasses(n, 'enter'),
                  t.addClass(n, 'exit', 'base'),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function (e) {
                var n = t.resolveArguments(e)[0];
                t.addClass(n, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, 'exit'),
                  t.addClass(n, 'exit', 'done'),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.resolveArguments = function (e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
              }),
              (t.getClassNames = function (e) {
                var n = t.props.classNames,
                  r = 'string' == typeof n,
                  i = r ? '' + (r && n ? n + '-' : '') + e : n[e];
                return {
                  baseClassName: i,
                  activeClassName: r ? i + '-active' : n[e + 'Active'],
                  doneClassName: r ? i + '-done' : n[e + 'Done'],
                };
              }),
              t
            );
          }
          (0, a.Z)(t, e);
          var n = t.prototype;
          return (
            (n.addClass = function (e, t, n) {
              var r = this.getClassNames(t)[n + 'ClassName'],
                i = this.getClassNames('enter').doneClassName;
              'appear' === t && 'done' === n && i && (r += ' ' + i),
                'active' === n && e && d(e),
                r &&
                  ((this.appliedClasses[t][n] = r),
                  (function (e, t) {
                    e &&
                      t &&
                      t.split(' ').forEach(function (t) {
                        return (
                          (r = t),
                          void ((n = e).classList
                            ? n.classList.add(r)
                            : (function (e, t) {
                                return e.classList
                                  ? !!t && e.classList.contains(t)
                                  : -1 !==
                                      (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
                                        ' ' + t + ' ',
                                      );
                              })(n, r) ||
                              ('string' == typeof n.className
                                ? (n.className = n.className + ' ' + r)
                                : n.setAttribute(
                                    'class',
                                    ((n.className && n.className.baseVal) || '') + ' ' + r,
                                  )))
                        );
                        var n, r;
                      });
                  })(e, r));
            }),
            (n.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                r = n.base,
                i = n.active,
                a = n.done;
              (this.appliedClasses[t] = {}), r && y(e, r), i && y(e, i), a && y(e, a);
            }),
            (n.render = function () {
              var e = this.props,
                t = (e.classNames, (0, i.Z)(e, ['classNames']));
              return l.createElement(
                x,
                (0, r.Z)({}, t, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                }),
              );
            }),
            t
          );
        })(l.Component);
      w.defaultProps = { classNames: '' };
      var E = w;
    },
    5813: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = n(3366),
        i = n(7462);
      var a = n(1721),
        o = n(7294),
        l = n(1278);
      function s(e, t) {
        var n = Object.create(null);
        return (
          e &&
            o.Children.map(e, function (e) {
              return e;
            }).forEach(function (e) {
              n[e.key] = (function (e) {
                return t && (0, o.isValidElement)(e) ? t(e) : e;
              })(e);
            }),
          n
        );
      }
      function c(e, t, n) {
        return null != n[t] ? n[t] : e.props[t];
      }
      function u(e, t, n) {
        var r = s(e.children),
          i = (function (e, t) {
            function n(n) {
              return n in t ? t[n] : e[n];
            }
            (e = e || {}), (t = t || {});
            var r,
              i = Object.create(null),
              a = [];
            for (var o in e) o in t ? a.length && ((i[o] = a), (a = [])) : a.push(o);
            var l = {};
            for (var s in t) {
              if (i[s])
                for (r = 0; r < i[s].length; r++) {
                  var c = i[s][r];
                  l[i[s][r]] = n(c);
                }
              l[s] = n(s);
            }
            for (r = 0; r < a.length; r++) l[a[r]] = n(a[r]);
            return l;
          })(t, r);
        return (
          Object.keys(i).forEach(function (a) {
            var l = i[a];
            if ((0, o.isValidElement)(l)) {
              var s = a in t,
                u = a in r,
                d = t[a],
                f = (0, o.isValidElement)(d) && !d.props.in;
              !u || (s && !f)
                ? u || !s || f
                  ? u &&
                    s &&
                    (0, o.isValidElement)(d) &&
                    (i[a] = (0, o.cloneElement)(l, {
                      onExited: n.bind(null, l),
                      in: d.props.in,
                      exit: c(l, 'exit', e),
                      enter: c(l, 'enter', e),
                    }))
                  : (i[a] = (0, o.cloneElement)(l, { in: !1 }))
                : (i[a] = (0, o.cloneElement)(l, {
                    onExited: n.bind(null, l),
                    in: !0,
                    exit: c(l, 'exit', e),
                    enter: c(l, 'enter', e),
                  }));
            }
          }),
          i
        );
      }
      var d =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
        f = (function (e) {
          function t(t, n) {
            var r,
              i = (r = e.call(this, t, n) || this).handleExited.bind(
                (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return e;
                })(r),
              );
            return (
              (r.state = { contextValue: { isMounting: !0 }, handleExited: i, firstRender: !0 }), r
            );
          }
          (0, a.Z)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
            }),
            (n.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var n,
                r,
                i = t.children,
                a = t.handleExited;
              return {
                children: t.firstRender
                  ? ((n = e),
                    (r = a),
                    s(n.children, function (e) {
                      return (0,
                      o.cloneElement)(e, { onExited: r.bind(null, e), in: !0, appear: c(e, 'appear', n), enter: c(e, 'enter', n), exit: c(e, 'exit', n) });
                    }))
                  : u(e, i, a),
                firstRender: !1,
              };
            }),
            (n.handleExited = function (e, t) {
              var n = s(this.props.children);
              e.key in n ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var n = (0, i.Z)({}, t.children);
                    return delete n[e.key], { children: n };
                  }));
            }),
            (n.render = function () {
              var e = this.props,
                t = e.component,
                n = e.childFactory,
                i = (0, r.Z)(e, ['component', 'childFactory']),
                a = this.state.contextValue,
                s = d(this.state.children).map(n);
              return (
                delete i.appear,
                delete i.enter,
                delete i.exit,
                null === t
                  ? o.createElement(l.Z.Provider, { value: a }, s)
                  : o.createElement(l.Z.Provider, { value: a }, o.createElement(t, i, s))
              );
            }),
            t
          );
        })(o.Component);
      f.defaultProps = {
        component: 'div',
        childFactory: function (e) {
          return e;
        },
      };
      var m = f;
    },
    1278: function (e, t, n) {
      'use strict';
      var r = n(7294);
      t.Z = r.createContext(null);
    },
    1505: function (e, t, n) {
      var r, i;
      window.Element &&
        !Element.prototype.closest &&
        (Element.prototype.closest = function (e) {
          var t,
            n = (this.document || this.ownerDocument).querySelectorAll(e),
            r = this;
          do {
            for (t = n.length; 0 <= --t && n.item(t) !== r; );
          } while (t < 0 && (r = r.parentElement));
          return r;
        }),
        (function () {
          function e(e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent('CustomEvent');
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
          }
          'function' != typeof window.CustomEvent &&
            ((e.prototype = window.Event.prototype), (window.CustomEvent = e));
        })(),
        (function () {
          for (
            var e = 0, t = ['ms', 'moz', 'webkit', 'o'], n = 0;
            n < t.length && !window.requestAnimationFrame;
            ++n
          )
            (window.requestAnimationFrame = window[t[n] + 'RequestAnimationFrame']),
              (window.cancelAnimationFrame =
                window[t[n] + 'CancelAnimationFrame'] ||
                window[t[n] + 'CancelRequestAnimationFrame']);
          window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (t, n) {
              var r = new Date().getTime(),
                i = Math.max(0, 16 - (r - e)),
                a = window.setTimeout(function () {
                  t(r + i);
                }, i);
              return (e = r + i), a;
            }),
            window.cancelAnimationFrame ||
              (window.cancelAnimationFrame = function (e) {
                clearTimeout(e);
              });
        })(),
        (i = void 0 !== n.g ? n.g : 'undefined' != typeof window ? window : this),
        (r = function () {
          return (function (e) {
            'use strict';
            var t = {
                ignore: '[data-scroll-ignore]',
                header: null,
                topOnEmptyHash: !0,
                speed: 500,
                speedAsDuration: !1,
                durationMax: null,
                durationMin: null,
                clip: !0,
                offset: 0,
                easing: 'easeInOutCubic',
                customEasing: null,
                updateURL: !0,
                popstate: !0,
                emitEvents: !0,
              },
              n = function () {
                var e = {};
                return (
                  Array.prototype.forEach.call(arguments, function (t) {
                    for (var n in t) {
                      if (!t.hasOwnProperty(n)) return;
                      e[n] = t[n];
                    }
                  }),
                  e
                );
              },
              r = function (e) {
                '#' === e.charAt(0) && (e = e.substr(1));
                for (
                  var t, n = String(e), r = n.length, i = -1, a = '', o = n.charCodeAt(0);
                  ++i < r;

                ) {
                  if (0 === (t = n.charCodeAt(i)))
                    throw new InvalidCharacterError(
                      'Invalid character: the input contains U+0000.',
                    );
                  a +=
                    (1 <= t && t <= 31) ||
                    127 == t ||
                    (0 === i && 48 <= t && t <= 57) ||
                    (1 === i && 48 <= t && t <= 57 && 45 === o)
                      ? '\\' + t.toString(16) + ' '
                      : 128 <= t ||
                        45 === t ||
                        95 === t ||
                        (48 <= t && t <= 57) ||
                        (65 <= t && t <= 90) ||
                        (97 <= t && t <= 122)
                      ? n.charAt(i)
                      : '\\' + n.charAt(i);
                }
                return '#' + a;
              },
              i = function () {
                return Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight,
                  document.body.offsetHeight,
                  document.documentElement.offsetHeight,
                  document.body.clientHeight,
                  document.documentElement.clientHeight,
                );
              },
              a = function (t) {
                return t ? ((n = t), parseInt(e.getComputedStyle(n).height, 10) + t.offsetTop) : 0;
                var n;
              },
              o = function (t, n, r) {
                0 === t && document.body.focus(),
                  r ||
                    (t.focus(),
                    document.activeElement !== t &&
                      (t.setAttribute('tabindex', '-1'), t.focus(), (t.style.outline = 'none')),
                    e.scrollTo(0, n));
              },
              l = function (t, n, r, i) {
                if (n.emitEvents && 'function' == typeof e.CustomEvent) {
                  var a = new CustomEvent(t, { bubbles: !0, detail: { anchor: r, toggle: i } });
                  document.dispatchEvent(a);
                }
              };
            return function (s, c) {
              var u,
                d,
                f,
                m,
                p = {
                  cancelScroll: function (e) {
                    cancelAnimationFrame(m), (m = null), e || l('scrollCancel', u);
                  },
                  animateScroll: function (r, s, c) {
                    p.cancelScroll();
                    var d = n(u || t, c || {}),
                      h = '[object Number]' === Object.prototype.toString.call(r),
                      g = h || !r.tagName ? null : r;
                    if (h || g) {
                      var v = e.pageYOffset;
                      d.header && !f && (f = document.querySelector(d.header));
                      var b,
                        x,
                        y,
                        w,
                        E,
                        k,
                        C,
                        S,
                        T = a(f),
                        O = h
                          ? r
                          : (function (t, n, r, a) {
                              var o = 0;
                              if (t.offsetParent)
                                for (; (o += t.offsetTop), (t = t.offsetParent); );
                              return (
                                (o = Math.max(o - n - r, 0)),
                                a && (o = Math.min(o, i() - e.innerHeight)),
                                o
                              );
                            })(
                              g,
                              T,
                              parseInt(
                                'function' == typeof d.offset ? d.offset(r, s) : d.offset,
                                10,
                              ),
                              d.clip,
                            ),
                        L = O - v,
                        A = i(),
                        j = 0,
                        N =
                          ((b = L),
                          (y = (x = d).speedAsDuration ? x.speed : Math.abs((b / 1e3) * x.speed)),
                          x.durationMax && y > x.durationMax
                            ? x.durationMax
                            : x.durationMin && y < x.durationMin
                            ? x.durationMin
                            : parseInt(y, 10)),
                        z = function t(n) {
                          var i, a, c;
                          w || (w = n),
                            (j += n - w),
                            (k =
                              v +
                              L *
                                ((a = E = 1 < (E = 0 === N ? 0 : j / N) ? 1 : E),
                                'easeInQuad' === (i = d).easing && (c = a * a),
                                'easeOutQuad' === i.easing && (c = a * (2 - a)),
                                'easeInOutQuad' === i.easing &&
                                  (c = a < 0.5 ? 2 * a * a : (4 - 2 * a) * a - 1),
                                'easeInCubic' === i.easing && (c = a * a * a),
                                'easeOutCubic' === i.easing && (c = --a * a * a + 1),
                                'easeInOutCubic' === i.easing &&
                                  (c =
                                    a < 0.5
                                      ? 4 * a * a * a
                                      : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1),
                                'easeInQuart' === i.easing && (c = a * a * a * a),
                                'easeOutQuart' === i.easing && (c = 1 - --a * a * a * a),
                                'easeInOutQuart' === i.easing &&
                                  (c = a < 0.5 ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a),
                                'easeInQuint' === i.easing && (c = a * a * a * a * a),
                                'easeOutQuint' === i.easing && (c = 1 + --a * a * a * a * a),
                                'easeInOutQuint' === i.easing &&
                                  (c =
                                    a < 0.5
                                      ? 16 * a * a * a * a * a
                                      : 1 + 16 * --a * a * a * a * a),
                                i.customEasing && (c = i.customEasing(a)),
                                c || a)),
                            e.scrollTo(0, Math.floor(k)),
                            (function (t, n) {
                              var i = e.pageYOffset;
                              if (t == n || i == n || (v < n && e.innerHeight + i) >= A)
                                return (
                                  p.cancelScroll(!0),
                                  o(r, n, h),
                                  l('scrollStop', d, r, s),
                                  !(m = w = null)
                                );
                            })(k, O) || ((m = e.requestAnimationFrame(t)), (w = n));
                        };
                      0 === e.pageYOffset && e.scrollTo(0, 0),
                        (C = r),
                        (S = d),
                        h ||
                          (history.pushState &&
                            S.updateURL &&
                            history.pushState(
                              { smoothScroll: JSON.stringify(S), anchor: C.id },
                              document.title,
                              C === document.documentElement ? '#top' : '#' + C.id,
                            )),
                        'matchMedia' in e && e.matchMedia('(prefers-reduced-motion)').matches
                          ? o(r, Math.floor(O), !1)
                          : (l('scrollStart', d, r, s),
                            p.cancelScroll(!0),
                            e.requestAnimationFrame(z));
                    }
                  },
                },
                h = function (t) {
                  if (
                    !t.defaultPrevented &&
                    !(0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey) &&
                    'closest' in t.target &&
                    (d = t.target.closest(s)) &&
                    'a' === d.tagName.toLowerCase() &&
                    !t.target.closest(u.ignore) &&
                    d.hostname === e.location.hostname &&
                    d.pathname === e.location.pathname &&
                    /#/.test(d.href)
                  ) {
                    var n, i;
                    try {
                      n = r(decodeURIComponent(d.hash));
                    } catch (t) {
                      n = r(d.hash);
                    }
                    if ('#' === n) {
                      if (!u.topOnEmptyHash) return;
                      i = document.documentElement;
                    } else i = document.querySelector(n);
                    (i = i || '#top' !== n ? i : document.documentElement) &&
                      (t.preventDefault(),
                      (function (t) {
                        if (history.replaceState && t.updateURL && !history.state) {
                          var n = e.location.hash;
                          (n = n || ''),
                            history.replaceState(
                              { smoothScroll: JSON.stringify(t), anchor: n || e.pageYOffset },
                              document.title,
                              n || e.location.href,
                            );
                        }
                      })(u),
                      p.animateScroll(i, d));
                  }
                },
                g = function (e) {
                  if (
                    null !== history.state &&
                    history.state.smoothScroll &&
                    history.state.smoothScroll === JSON.stringify(u)
                  ) {
                    var t = history.state.anchor;
                    ('string' == typeof t &&
                      t &&
                      !(t = document.querySelector(r(history.state.anchor)))) ||
                      p.animateScroll(t, null, { updateURL: !1 });
                  }
                };
              return (
                (p.destroy = function () {
                  u &&
                    (document.removeEventListener('click', h, !1),
                    e.removeEventListener('popstate', g, !1),
                    p.cancelScroll(),
                    (m = f = d = u = null));
                }),
                (function () {
                  if (
                    !(
                      'querySelector' in document &&
                      'addEventListener' in e &&
                      'requestAnimationFrame' in e &&
                      'closest' in e.Element.prototype
                    )
                  )
                    throw 'Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.';
                  p.destroy(),
                    (u = n(t, c || {})),
                    (f = u.header ? document.querySelector(u.header) : null),
                    document.addEventListener('click', h, !1),
                    u.updateURL && u.popstate && e.addEventListener('popstate', g, !1);
                })(),
                p
              );
            };
          })(i);
        }.apply(t, [])),
        void 0 === r || (e.exports = r);
    },
    7692: function (e, t, n) {
      'use strict';
      n.d(t, {
        JO: function () {
          return u;
        },
        i3: function () {
          return x;
        },
        UN: function () {
          return i;
        },
        BZ: function () {
          return a;
        },
        Pj: function () {
          return o;
        },
        Ak: function () {
          return l;
        },
        PU: function () {
          return s;
        },
        Rt: function () {
          return c;
        },
        Mr: function () {
          return d;
        },
        RM: function () {
          return f;
        },
        jb: function () {
          return m;
        },
        pA: function () {
          return p;
        },
        mp: function () {
          return h;
        },
        cq: function () {
          return g;
        },
        GK: function () {
          return v;
        },
        JD: function () {
          return b;
        },
      });
      var r = n(7294),
        i = function () {
          return r.createElement(
            'svg',
            {
              version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
              x: '0px',
              y: '0px',
              viewBox: '0 0 512 512',
              xmlSpace: 'preserve',
            },
            r.createElement('title', null, 'Apple App Store'),
            r.createElement(
              'g',
              null,
              r.createElement(
                'g',
                null,
                r.createElement('path', {
                  d: 'M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105 C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302 c41.355,0,75,33.645,75,75V407z',
                }),
              ),
            ),
            r.createElement(
              'g',
              null,
              r.createElement(
                'g',
                null,
                r.createElement('path', {
                  d: 'M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166 l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664 L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498 C306.487,136.719,307.375,129.981,305.646,123.531z',
                }),
              ),
            ),
            r.createElement(
              'g',
              null,
              r.createElement(
                'g',
                null,
                r.createElement('path', {
                  d: 'M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65 c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341 H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z',
                }),
              ),
            ),
            r.createElement(
              'g',
              null,
              r.createElement(
                'g',
                null,
                r.createElement('path', {
                  d: 'M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344 c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z',
                }),
              ),
            ),
          );
        },
        a = function () {
          return r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '1',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              className: 'feather feather-bookmark',
            },
            r.createElement('title', null, 'Bookmark'),
            r.createElement('path', { d: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' }),
          );
        },
        o = function () {
          return r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              role: 'img',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              className: 'feather feather-codepen',
            },
            r.createElement('title', null, 'CodePen'),
            r.createElement('polygon', { points: '12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2' }),
            r.createElement('line', { x1: '12', y1: '22', x2: '12', y2: '15.5' }),
            r.createElement('polyline', { points: '22 8.5 12 15.5 2 8.5' }),
            r.createElement('polyline', { points: '2 15.5 12 8.5 22 15.5' }),
            r.createElement('line', { x1: '12', y1: '2', x2: '12', y2: '8.5' }),
          );
        },
        l = function () {
          return r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              role: 'img',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              className: 'feather feather-external-link',
            },
            r.createElement('title', null, 'External Link'),
            r.createElement('path', {
              d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
            }),
            r.createElement('polyline', { points: '15 3 21 3 21 9' }),
            r.createElement('line', { x1: '10', y1: '14', x2: '21', y2: '3' }),
          );
        },
        s = function () {
          return r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              role: 'img',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '1',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              className: 'feather feather-folder',
            },
            r.createElement('title', null, 'Folder'),
            r.createElement('path', {
              d: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z',
            }),
          );
        },
        c = function () {
          return r.createElement(
            'svg',
            {
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              className: 'feather feather-git-branch',
            },
            r.createElement('title', null, 'Git Fork'),
            r.createElement('line', { x1: '6', y1: '3', x2: '6', y2: '15' }),
            r.createElement('circle', { cx: '18', cy: '6', r: '3' }),
            r.createElement('circle', { cx: '6', cy: '18', r: '3' }),
            r.createElement('path', { d: 'M18 9a9 9 0 0 1-9 9' }),
          );
        },
        u = function (e) {
          switch (e.name) {
            case 'AppStore':
              return r.createElement(i, null);
            case 'Bookmark':
              return r.createElement(a, null);
            case 'Codepen':
              return r.createElement(o, null);
            case 'External':
            default:
              return r.createElement(l, null);
            case 'Folder':
              return r.createElement(s, null);
            case 'Fork':
              return r.createElement(c, null);
            case 'GitHub':
              return r.createElement(d, null);
            case 'Instagram':
              return r.createElement(f, null);
            case 'Linkedin':
              return r.createElement(m, null);
            case 'Loader':
              return r.createElement(p, null);
            case 'Logo':
              return r.createElement(h, null);
            case 'PlayStore':
              return r.createElement(g, null);
            case 'Star':
              return r.createElement(v, null);
            case 'Twitter':
              return r.createElement(b, null);
            case 'AngelList':
              return r.createElement(x, null);
          }
        },
        d = function () {
          return r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              role: 'img',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              className: 'feather feather-github',
            },
            r.createElement('title', null, 'GitHub'),
            r.createElement('path', {
              d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
            }),
          );
        },
        f = function () {
          return r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              role: 'img',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              className: 'feather feather-instagram',
            },
            r.createElement('title', null, 'Instagram'),
            r.createElement('rect', {
              x: '2',
              y: '2',
              width: '20',
              height: '20',
              rx: '5',
              ry: '5',
            }),
            r.createElement('path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }),
            r.createElement('line', { x1: '17.5', y1: '6.5', x2: '17.51', y2: '6.5' }),
          );
        },
        m = function () {
          return r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              role: 'img',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              className: 'feather feather-linkedin',
            },
            r.createElement('title', null, 'LinkedIn'),
            r.createElement('path', {
              d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
            }),
            r.createElement('rect', { x: '2', y: '9', width: '4', height: '12' }),
            r.createElement('circle', { cx: '4', cy: '4', r: '2' }),
          );
        },
        p = function () {
          return r.createElement(
            'svg',
            { id: 'logo', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' },
            r.createElement('title', null, 'Loader Logo'),
            r.createElement(
              'g',
              null,
              r.createElement(
                'g',
                { id: 'B', transform: 'translate(11.000000, 5.000000)' },
                r.createElement('path', {
                  d: 'M 50 56 V 61 L 28.5417 61 L 28.5417 30.3 L 33.54 30.29 V 56 Z Z Z',
                  fill: 'currentColor',
                }),
              ),
              r.createElement('path', {
                stroke: 'currentColor',
                strokeWidth: '5',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z',
              }),
            ),
          );
        },
        h = function () {
          return r.createElement(
            'svg',
            { id: 'logo', xmlns: 'http://www.w3.org/2000/svg', role: 'img', viewBox: '0 0 84 96' },
            r.createElement('title', null, 'Logo'),
            r.createElement(
              'g',
              { transform: 'translate(-8.000000, -2.000000)' },
              r.createElement(
                'g',
                { transform: 'translate(11.000000, 5.000000)' },
                r.createElement('path', {
                  d: 'M 50 56 V 61 L 28.5417 61 L 28.5417 30.3 L 33.54 30.29 V 56 Z Z Z',
                  fill: 'currentColor',
                }),
                r.createElement('polygon', {
                  id: 'Shape',
                  stroke: 'currentColor',
                  strokeWidth: '5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  points: '39 0 0 22 0 67 39 90 78 68 78 23',
                }),
              ),
            ),
          );
        },
        g = function () {
          return r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              role: 'img',
              x: '0px',
              y: '0px',
              viewBox: '0 0 512.001 512.001',
            },
            r.createElement('title', null, 'Google Play Store'),
            r.createElement('path', {
              d: 'M464.252,212.09L99.624,8.07C84.247-1.873,64.754-2.691,48.574,5.967C32.183,14.74,22,31.737,22,50.329v411.342 c0,18.592,10.183,35.59,26.573,44.361c16.097,8.617,35.593,7.891,51.052-2.101l364.628-204.022 c16.121-9.02,25.747-25.435,25.747-43.908C490,237.527,480.374,221.111,464.252,212.09z M341.677,181.943l-50.339,50.339 L113.108,54.051L341.677,181.943z M55.544,467.323V44.676L267.621,256L55.544,467.323z M113.108,457.949l178.232-178.231 l50.339,50.339L113.108,457.949z M447.874,270.637l-75.779,42.401l-57.038-57.037l57.037-57.037l75.778,42.4 c7.746,4.335,8.583,11.68,8.583,14.637C456.455,258.958,455.62,266.302,447.874,270.637z',
            }),
          );
        },
        v = function () {
          return r.createElement(
            'svg',
            {
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              className: 'feather feather-star',
            },
            r.createElement('title', null, 'Star'),
            r.createElement('polygon', {
              points:
                '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2',
            }),
          );
        },
        b = function () {
          return r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              role: 'img',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              className: 'feather feather-twitter',
            },
            r.createElement('title', null, 'Twitter'),
            r.createElement('path', {
              d: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
            }),
          );
        },
        x = function () {
          return r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              role: 'img',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              viewBox: '0 0 256 369',
            },
            r.createElement('title', null, 'AngelList'),
            r.createElement('path', {
              d: 'M214.9 157.358c15.265 2.348 25.834 9.394 31.706 18.789 5.871 9.394 9.394 25.835 9.394 46.972 0 42.275-12.917 77.505-38.752 104.514-25.835 27.01-58.716 41.1-98.642 41.1-15.267 0-30.533-2.348-45.799-8.22-15.266-5.87-27.009-14.091-37.578-23.485-11.743-10.57-21.137-23.487-27.009-35.23C3.523 288.881 0 275.963 0 263.046c0-14.092 3.523-25.835 9.394-34.055 5.872-8.22 16.44-12.918 29.358-16.44-2.348-5.872-4.697-10.57-5.871-15.267-1.175-3.523-2.349-7.045-2.349-9.394 0-7.046 3.523-15.266 11.743-23.486s15.266-11.743 22.312-11.743c3.523 0 5.872 0 9.395 1.174 3.523 1.174 7.046 2.348 11.743 5.871-10.569-35.229-21.138-64.587-27.01-84.55-5.871-19.963-8.22-32.88-8.22-41.101 0-10.569 2.349-18.789 8.22-24.66C63.414 3.522 71.634 0 81.029 0c15.266 0 35.229 35.23 59.89 106.862 4.697 11.744 7.045 21.138 9.394 28.184 2.349-4.697 4.697-12.918 8.22-22.312C183.192 42.275 204.33 7.046 220.771 7.046c8.22 0 15.266 2.348 21.137 8.22 4.698 5.872 8.22 14.092 8.22 23.486 0 7.046-2.348 21.138-8.22 41.101-7.046 19.964-15.266 45.798-27.009 77.505zM34.054 260.698c2.349 2.348 5.872 7.045 9.395 12.917C54.018 288.88 64.587 297.1 73.982 297.1c3.523 0 5.871-1.174 8.22-3.523 2.348-2.349 3.523-4.697 3.523-5.872 0-2.348-1.175-7.045-4.697-12.917-3.523-5.872-8.22-12.917-14.092-19.963-7.046-8.22-12.918-15.266-16.44-18.79-4.698-3.522-8.22-5.87-10.57-5.87-5.871 0-11.743 3.522-16.44 9.394-4.697 5.871-7.046 14.091-7.046 22.312 0 7.045 1.175 14.091 4.698 23.486 3.523 8.22 8.22 17.614 15.266 25.835 10.568 11.743 22.312 22.312 37.578 29.357 15.266 7.046 30.532 10.57 49.32 10.57 32.881 0 59.89-11.744 82.203-36.404 22.312-24.661 32.88-55.193 32.88-92.771 0-11.743-1.174-19.963-2.348-27.01-1.175-7.045-4.698-11.742-8.22-14.091-7.046-5.872-19.964-10.569-39.927-15.266-19.963-4.697-41.101-7.046-62.239-7.046-5.871 0-10.568 1.174-12.917 3.523s-3.523 5.872-3.523 10.569c0 11.743 5.872 19.963 18.789 24.66 12.917 4.698 34.055 8.22 62.239 8.22h10.568c2.349 0 4.698 1.175 5.872 2.35 1.174 2.348 2.349 4.696 2.349 8.22-2.35 2.348-8.22 5.871-17.615 9.394-9.395 3.523-15.266 7.046-19.963 10.569-10.57 7.046-18.79 16.44-24.661 27.009-5.872 10.569-9.395 19.963-9.395 29.358 0 5.871 1.175 11.743 3.523 19.963 2.35 8.22 3.523 12.917 3.523 14.092v4.697c-7.046 0-12.917-4.697-17.614-12.917-4.698-8.22-5.872-18.79-5.872-32.881v-2.349c-1.174 1.174-2.348 2.349-3.523 2.349-1.174 0-2.348 1.174-4.697 1.174h-4.697c-1.175 0-2.349-1.174-4.698-1.174 0 2.348 1.175 3.523 1.175 5.871v4.698c0 5.871-2.349 11.743-7.046 16.44-4.697 4.697-10.569 7.046-17.615 7.046-10.569 0-21.137-4.697-32.88-15.266-10.57-10.569-16.44-19.964-16.44-30.532 0-2.349 0-3.523 1.173-4.698 0-5.871 1.175-7.045 2.349-8.22zm76.33 5.87c2.349 0 5.872-1.174 8.22-3.522 2.35-2.349 3.523-5.872 3.523-8.22 0-3.523-2.348-10.57-7.045-22.312-4.698-11.743-10.57-23.486-17.615-34.055-4.697-8.22-10.569-15.266-15.266-18.79-4.697-4.697-9.395-5.87-14.092-5.87-3.523 0-7.046 2.348-11.743 7.045s-5.872 8.22-5.872 12.917c0 3.523 2.349 10.57 5.872 18.79 4.697 8.22 9.394 16.44 16.44 25.834C79.853 247.78 86.9 256 93.945 261.872c7.046 2.348 11.743 4.697 16.44 4.697zm24.66-122.128l-28.183-78.679c-7.045-19.963-11.743-34.055-16.44-39.926-3.523-5.872-7.046-9.395-11.743-9.395-3.523 0-5.872 1.175-8.22 3.523-3.523 3.523-4.698 7.046-4.698 11.743 0 8.22 3.523 21.138 9.395 39.927 5.872 18.789 15.266 44.624 27.01 75.156 1.173-2.349 2.348-3.523 4.696-3.523 2.349-1.174 4.698-1.174 7.046-1.174h5.872c3.523 1.174 8.22 1.174 15.266 2.348zm28.184 76.33c-7.046 0-14.091-1.174-21.137-2.348-7.046-1.174-12.918-2.349-18.79-4.697 2.35 5.871 4.698 10.569 7.047 16.44 2.348 5.872 3.523 10.569 4.697 16.44 3.523-4.697 8.22-9.394 12.917-14.091 5.872-4.697 10.57-8.22 15.266-11.743zm34.055-68.11c11.744-30.532 19.964-56.366 27.01-76.33 5.871-19.963 9.394-31.706 9.394-36.403 0-4.698-1.174-8.22-3.523-11.744-2.348-2.348-4.697-3.522-8.22-3.522-4.697 0-9.395 3.522-14.092 11.743-4.697 8.22-10.569 19.963-16.44 37.578l-25.835 72.807 31.706 5.872z',
            }),
          );
        };
    },
    4741: function (e, t, n) {
      'use strict';
      n.d(t, {
        CL: function () {
          return ft;
        },
        r8: function () {
          return Ct;
        },
        GT: function () {
          return et;
        },
        g4: function () {
          return Et;
        },
        $_: function () {
          return it;
        },
        Fb: function () {
          return s;
        },
        VM: function () {
          return ot;
        },
        pe: function () {
          return xt;
        },
        Ar: function () {
          return T;
        },
        aN: function () {
          return Ie;
        },
        v2: function () {
          return Ge;
        },
        JL: function () {
          return We;
        },
        MF: function () {
          return $e;
        },
        g_: function () {
          return Ke;
        },
      });
      var r = n(7294),
        i = n(5414),
        a = n(9499),
        o = n(5444),
        l = function (e) {
          var t = e.title,
            n = e.description,
            l = e.image,
            s = (0, a.useLocation)().pathname,
            c = (0, o.useStaticQuery)('1994492073').site.siteMetadata,
            u = c.defaultTitle,
            d = c.defaultDescription,
            f = c.siteUrl,
            m = c.defaultImage,
            p = c.twitterUsername,
            h = { title: t || u, description: n || d, image: '' + f + (l || m), url: '' + f + s };
          return r.createElement(
            i.q,
            { title: t, defaultTitle: h.title, titleTemplate: '%s | ' + u },
            r.createElement('html', { lang: 'en' }),
            r.createElement('meta', { name: 'description', content: h.description }),
            r.createElement('meta', { name: 'image', content: h.image }),
            r.createElement('meta', { property: 'og:title', content: h.title }),
            r.createElement('meta', { property: 'og:description', content: h.description }),
            r.createElement('meta', { property: 'og:image', content: h.image }),
            r.createElement('meta', { property: 'og:url', content: h.url }),
            r.createElement('meta', { property: 'og:type', content: 'website' }),
            r.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }),
            r.createElement('meta', { name: 'twitter:creator', content: p }),
            r.createElement('meta', { name: 'twitter:title', content: h.title }),
            r.createElement('meta', { name: 'twitter:description', content: h.description }),
            r.createElement('meta', { name: 'twitter:image', content: h.image }),
            r.createElement('meta', {
              name: 'google-site-verification',
              content: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
            }),
          );
        },
        s = l;
      l.defaultProps = { title: null, description: null, image: null };
      var c = n(3494),
        u = (0, c.css)([
          'color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);font-size:var(--fz-xs);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);padding:1.25rem 1.75rem;&:hover,&:focus,&:active{background-color:var(--green-tint);outline:none;}&:after{display:none !important;}',
        ]),
        d = {
          bp: {
            mobileS: 'max-width: 330px',
            mobileM: 'max-width: 400px',
            mobileL: 'max-width: 480px',
            tabletS: 'max-width: 600px',
            tabletL: 'max-width: 768px',
            desktopXS: 'max-width: 900px',
            desktopS: 'max-width: 1080px',
            desktopM: 'max-width: 1200px',
            desktopL: 'max-width: 1400px',
          },
          mixins: {
            flexCenter: (0, c.css)(['display:flex;justify-content:center;align-items:center;']),
            flexBetween: (0, c.css)([
              'display:flex;justify-content:space-between;align-items:center;',
            ]),
            link: (0, c.css)([
              'display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:var(--transition);&:hover,&:active,&:focus{color:var(--green);outline:0;}',
            ]),
            inlineLink: (0, c.css)([
              "display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:var(--transition);color:var(--green);&:hover,&:focus,&:active{color:var(--green);outline:0;&:after{width:100%;}& > *{color:var(--green) !important;transition:var(--transition);}}&:after{content:'';display:block;width:0;height:1px;position:relative;bottom:0.37em;background-color:var(--green);transition:var(--transition);opacity:0.5;}",
            ]),
            button: u,
            smallButton: (0, c.css)([
              'color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);padding:0.75rem 1rem;font-size:var(--fz-xs);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);&:hover,&:focus,&:active{background-color:var(--green-tint);outline:none;}&:after{display:none !important;}',
            ]),
            bigButton: (0, c.css)([
              'color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);padding:1.25rem 1.75rem;font-size:var(--fz-sm);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);&:hover,&:focus,&:active{background-color:var(--green-tint);outline:none;}&:after{display:none !important;}',
            ]),
            boxShadow: (0, c.css)([
              'box-shadow:0 10px 30px -15px var(--navy-shadow);transition:var(--transition);&:hover,&:focus{box-shadow:0 20px 30px -15px var(--navy-shadow);}',
            ]),
            fancyList: (0, c.css)([
              "padding:0;margin:0;list-style:none;font-size:var(--fz-lg);li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:'▹';position:absolute;left:0;color:var(--green);}}",
            ]),
            resetList: (0, c.css)(['list-style:none;padding:0;margin:0;']),
          },
        },
        f = {
          name: 'Calibre',
          normal: {
            400: [
              n.p + 'static/Calibre-Regular-98526589fa32315c552129869e08427e.woff',
              n.p + 'static/Calibre-Regular-b0d4cbb1201155ddccc21d1b8059a670.woff2',
            ],
            500: [
              n.p + 'static/Calibre-Medium-46693d9b57a6b8a657b5393258f6e899.woff',
              n.p + 'static/Calibre-Medium-568dce56f869a519a015d3b69443b067.woff2',
            ],
            600: [
              n.p + 'static/Calibre-Semibold-6972688a249bd53a6c7e69a89e50cdd6.woff',
              n.p + 'static/Calibre-Semibold-94fc73852539d6733dc0d80252c5e3fb.woff2',
            ],
          },
          italic: {
            400: [
              n.p + 'static/Calibre-RegularItalic-57371b9e514dbbe9da31dad1a298de2d.woff',
              n.p + 'static/Calibre-RegularItalic-5f875bd7b669f1e11b622d4d6d71b5b0.woff2',
            ],
            500: [
              n.p + 'static/Calibre-MediumItalic-aa285f95879aa2c2d26b228d5e422da6.woff',
              n.p + 'static/Calibre-MediumItalic-7aa140573fd9ed30ae01e117c418b12b.woff2',
            ],
            600: [
              n.p + 'static/Calibre-SemiboldItalic-ad4bd95abee7bca1bdd6a93398f84a04.woff',
              n.p + 'static/Calibre-SemiboldItalic-5f04bffe7ce988169806d66e417a966a.woff2',
            ],
          },
        },
        m = {
          name: 'SF Mono',
          normal: {
            400: [
              n.p + 'static/SFMono-Regular-e36fa5257c93fc7711eae342068f9eda.woff',
              n.p + 'static/SFMono-Regular-8799e6387338d58f2f137df821c86eb4.woff2',
            ],
            600: [
              n.p + 'static/SFMono-Semibold-ee054046915420413d0068fb1e7105c3.woff',
              n.p + 'static/SFMono-Semibold-6e6f6c93f4bdf9cbd090c60e97a017e2.woff2',
            ],
          },
          italic: {
            400: [
              n.p + 'static/SFMono-RegularItalic-3a20a00dfdeb4ba538473fa7bf625cbd.woff',
              n.p + 'static/SFMono-RegularItalic-a596917f86217b40000ff1b894cd0e52.woff2',
            ],
            600: [
              n.p + 'static/SFMono-SemiboldItalic-10eb596e904940cd1aebb2cc6286015c.woff',
              n.p + 'static/SFMono-SemiboldItalic-9a0ae6382e12c5e28a7342ffb41cf4da.woff2',
            ],
          },
        },
        p = function (e, t) {
          void 0 === t && (t = 'normal');
          for (var n = '', r = 0, i = Object.entries(e[t]); r < i.length; r++) {
            var a = i[r],
              o = a[0],
              l = a[1],
              s = l[0],
              c = l[1];
            n +=
              "\n      @font-face {\n        font-family: '" +
              e.name +
              "';\n        src: url(" +
              c +
              ") format('woff2'),\n            url(" +
              s +
              ") format('woff');\n        font-weight: " +
              o +
              ';\n        font-style: ' +
              t +
              ';\n        font-display: auto;\n      }\n    ';
          }
          return n;
        },
        h = p(f),
        g = p(f, 'italic'),
        v = p(m),
        b = p(m, 'italic'),
        x = (0, c.css)(['', ''], h + g + v + b),
        y = (0, c.css)([
          ":root{--dark-navy:#020c1b;--navy:#0a192f;--light-navy:#112240;--lightest-navy:#233554;--navy-shadow:rgba(2,12,27,0.7);--dark-slate:#495670;--slate:#8892b0;--light-slate:#a8b2d1;--lightest-slate:#ccd6f6;--white:#e6f1ff;--green:#64ffda;--green-tint:rgba(100,255,218,0.1);--pink:#f57dff;--blue:#57cbff;--font-sans:'Calibre','Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif;--font-mono:'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace;--fz-xxs:12px;--fz-xs:13px;--fz-sm:14px;--fz-md:16px;--fz-lg:18px;--fz-xl:20px;--fz-xxl:22px;--fz-heading:32px;--border-radius:4px;--nav-height:100px;--nav-scroll-height:70px;--tab-height:42px;--tab-width:120px;--easing:cubic-bezier(0.645,0.045,0.355,1);--transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);--hamburger-width:30px;--ham-before:top 0.1s ease-in 0.25s,opacity 0.1s ease-in;--ham-before-active:top 0.1s ease-out,opacity 0.1s ease-out 0.12s;--ham-after:bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);--ham-after-active:bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s;}",
        ]),
        w = (0, c.css)([
          '.fadeup-enter{opacity:0.01;transform:translateY(20px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadeup-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadedown-enter{opacity:0.01;transform:translateY(-20px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadedown-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fade-enter{opacity:0;}.fade-enter-active{opacity:1;transition:opacity 300ms var(--easing);}.fade-exit{opacity:1;}.fade-exit-active{opacity:0;transition:opacity 300ms var(--easing);}',
        ]),
        E = {
          bg: '#112340',
          lineHighlight: '#1d2d50',
          blue: '#5ccfe6',
          purple: '#c3a6ff',
          green: '#bae67e',
          yellow: '#ffd580',
          orange: '#ffae57',
          red: '#ef6b73',
          grey: '#a2aabc',
          comment: '#8695b799',
        },
        k = (0, c.css)(
          [
            '.gatsby-highlight{background-color:',
            ';color:',
            ";border-radius:var(--border-radius);margin:2em 0;padding:1.25em;overflow:auto;position:relative;font-family:var(--font-mono);font-size:var(--fz-md);}.gatsby-highlight code[class*='language-'],.gatsby-highlight pre[class*='language-']{height:auto !important;font-size:var(--fz-sm);line-height:1.5;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;tab-size:2;hyphens:none;}.gatsby-highlight pre[class*='language-']{background-color:transparent;margin:0;padding:0;overflow:initial;float:left;min-width:100%;padding-top:2em;}.gatsby-code-title{padding:1em 1.5em;font-family:var(--font-mono);font-size:var(--fz-xs);background-color:",
            ';color:',
            ';border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom:1px solid ',
            ';& + .gatsby-highlight{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;}}.gatsby-highlight-code-line{display:block;background-color:',
            ";border-left:2px solid var(--green);padding-left:calc(1em + 2px);padding-right:1em;margin-right:-1.35em;margin-left:-1.35em;}.gatsby-highlight pre[class*='language-']::before{background:var(--lightest-navy);color:var(--white);font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;letter-spacing:0.1em;text-transform:uppercase;border-radius:0 0 3px 3px;position:absolute;top:0;left:1.25rem;padding:0.25rem 0.5rem;}.gatsby-highlight pre[class='language-javascript']::before{content:'js';}.gatsby-highlight pre[class='language-js']::before{content:'js';}.gatsby-highlight pre[class='language-jsx']::before{content:'jsx';}.gatsby-highlight pre[class='language-graphql']::before{content:'GraphQL';}.gatsby-highlight pre[class='language-html']::before{content:'html';}.gatsby-highlight pre[class='language-css']::before{content:'css';}.gatsby-highlight pre[class='language-mdx']::before{content:'mdx';}.gatsby-highlight pre[class='language-shell']::before{content:'shell';}.gatsby-highlight pre[class='language-sh']::before{content:'sh';}.gatsby-highlight pre[class='language-bash']::before{content:'bash';}.gatsby-highlight pre[class='language-yaml']::before{content:'yaml';}.gatsby-highlight pre[class='language-markdown']::before{content:'md';}.gatsby-highlight pre[class='language-json']::before,.gatsby-highlight pre[class='language-json5']::before{content:'json';}.gatsby-highlight pre[class='language-diff']::before{content:'diff';}.gatsby-highlight pre[class='language-text']::before{content:'text';}.gatsby-highlight pre[class='language-flow']::before{content:'flow';}.token{display:inline;}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:",
            ';}.token.punctuation{color:',
            ';}.token.namespace,.token.deleted{color:',
            ';}.token.function-name,.token.function,.token.class-name,.token.constant,.token.symbol{color:',
            ';}.token.attr-name,.token.operator,.token.rule{color:',
            ';}.token.keyword,.token.boolean,.token.number,.token.property{color:',
            ';}.token.tag,.token.selector,.token.important,.token.atrule,.token.builtin,.token.entity,.token.url{color:',
            ';}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable,.token.inserted{color:',
            ';}.token.important,.token.bold{font-weight:600;}.token.italic{font-style:italic;}.token.entity{cursor:help;}.namespace{opacity:0.7;}',
          ],
          E.bg,
          E.variable,
          E.bg,
          E.grey,
          E.lineHighlight,
          E.lineHighlight,
          E.comment,
          E.grey,
          E.red,
          E.yellow,
          E.orange,
          E.purple,
          E.blue,
          E.green,
        ),
        C = (0, c.createGlobalStyle)(
          [
            '',
            ';',
            ";html{box-sizing:border-box;width:100%;}*,*:before,*:after{box-sizing:inherit;}::selection{background-color:var(--lightest-navy);color:var(--lightest-slate);}:focus{outline:2px dashed var(--green);outline-offset:3px;}html{scrollbar-width:thin;scrollbar-color:var(--dark-slate) var(--navy);}body::-webkit-scrollbar{width:12px;}body::-webkit-scrollbar-track{background:var(--navy);}body::-webkit-scrollbar-thumb{background-color:var(--dark-slate);border:3px solid var(--navy);border-radius:10px;}body{margin:0;width:100%;min-height:100%;overflow-x:hidden;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background-color:var(--navy);color:var(--slate);font-family:var(--font-sans);font-size:var(--fz-xl);line-height:1.3;@media (max-width:480px){font-size:var(--fz-lg);}&.hidden{overflow:hidden;}&.blur{overflow:hidden;header{background-color:transparent;}#content > *{filter:blur(5px) brightness(0.7);transition:var(--transition);pointer-events:none;user-select:none;}}}#root{min-height:100vh;display:grid;grid-template-rows:1fr auto;grid-template-columns:100%;}main{margin:0 auto;width:100%;max-width:1600px;min-height:100vh;padding:200px 150px;@media (max-width:1080px){padding:200px 100px;}@media (max-width:768px){padding:150px 50px;}@media (max-width:480px){padding:125px 25px;}&.fillHeight{padding:0 150px;@media (max-width:1080px){padding:0 100px;}@media (max-width:768px){padding:0 50px;}@media (max-width:480px){padding:0 25px;}}}section{margin:0 auto;padding:100px 0;max-width:1000px;@media (max-width:768px){padding:80px 0;}@media (max-width:480px){padding:60px 0;}}h1,h2,h3,h4,h5,h6{margin:0 0 10px 0;font-weight:600;color:var(--lightest-slate);line-height:1.1;}.big-heading{margin:0;font-size:clamp(40px,8vw,80px);}.medium-heading{margin:0;font-size:clamp(40px,8vw,60px);}.numbered-heading{display:flex;align-items:center;position:relative;margin:10px 0 40px;width:100%;font-size:clamp(26px,5vw,var(--fz-heading));white-space:nowrap;&:before{position:relative;bottom:4px;counter-increment:section;content:'0' counter(section) '.';margin-right:10px;color:var(--green);font-family:var(--font-mono);font-size:clamp(var(--fz-md),3vw,var(--fz-xl));font-weight:400;@media (max-width:480px){margin-bottom:-3px;margin-right:5px;}}&:after{content:'';display:block;position:relative;top:-5px;width:300px;height:1px;margin-left:20px;background-color:var(--lightest-navy);@media (max-width:1080px){width:200px;}@media (max-width:768px){width:100%;}@media (max-width:600px){margin-left:10px;}}}img,svg,.gatsby-image-wrapper{width:100%;max-width:100%;vertical-align:middle;}img[alt=\"\"],img:not([alt]){filter:blur(5px);}svg{width:100%;height:100%;fill:currentColor;vertical-align:middle;&.feather{fill:none;}}a{display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:var(--transition);&:hover,&:focus{color:var(--green);}&.inline-link{",
            ';}}button{cursor:pointer;border:0;border-radius:0;}input,textarea{border-radius:0;outline:0;&:focus{outline:0;}&:focus,&:active{&::placeholder{opacity:0.5;}}}p{margin:0 0 15px 0;&:last-child,&:last-of-type{margin:0;}& > a{',
            ";}& > code{background-color:var(--light-navy);color:var(--white);font-size:var(--fz-sm);border-radius:var(--border-radius);padding:0.3em 0.5em;}}ul{&.fancy-list{padding:0;margin:0;list-style:none;font-size:var(--fz-lg);li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:'▹';position:absolute;left:0;color:var(--green);}}}}blockquote{border-left-color:var(--green);border-left-style:solid;border-left-width:1px;margin-left:0px;margin-right:0px;padding-left:1.5rem;p{font-style:italic;font-size:24px;}}hr{background-color:var(--lightest-navy);height:1px;border-width:0px;border-style:initial;border-color:initial;border-image:initial;margin:1rem;}code{font-family:var(--font-mono);font-size:var(--fz-md);}.skip-to-content{",
            ';position:absolute;top:auto;left:-999px;width:1px;height:1px;overflow:hidden;z-index:-99;&:focus,&:active{background-color:var(--green);color:var(--navy);top:0;left:0;width:auto;height:auto;overflow:auto;z-index:99;}}#logo{color:var(--green);}.overline{color:var(--green);font-family:var(--font-mono);font-size:var(--fz-md);font-weight:400;}.subtitle{color:var(--green);margin:0 0 20px 0;font-size:var(--fz-md);font-family:var(--font-mono);font-weight:400;line-height:1.5;@media (max-width:1080px){font-size:var(--fz-sm);}@media (max-width:768px){font-size:var(--fz-xs);}a{',
            ';line-height:1.5;}}.breadcrumb{display:flex;align-items:center;margin-bottom:50px;color:var(--green);.arrow{display:block;margin-right:10px;padding-top:4px;}a{',
            ';font-family:var(--font-mono);font-size:var(--fz-sm);font-weight:600;line-height:1.5;text-transform:uppercase;letter-spacing:0.1em;}}.gatsby-image-outer-wrapper{height:100%;}',
            ';',
            ';',
          ],
          x,
          y,
          function (e) {
            return e.theme.mixins.inlineLink;
          },
          function (e) {
            return e.theme.mixins.inlineLink;
          },
          function (e) {
            return e.theme.mixins.button;
          },
          function (e) {
            return e.theme.mixins.inlineLink;
          },
          function (e) {
            return e.theme.mixins.inlineLink;
          },
          w,
          k,
        );
      'undefined' != typeof window && n(1505)('a[href*="#"]');
      var S = c.default.div.withConfig({
          displayName: 'layout__StyledContent',
          componentId: 'sc-1ksnoyn-0',
        })(['display:flex;flex-direction:column;min-height:100vh;']),
        T = function (e) {
          var t = e.children,
            n = e.location,
            i = '/' === n.pathname,
            a = (0, r.useState)(i),
            o = a[0],
            l = a[1];
          return (
            (0, r.useEffect)(
              function () {
                if (!o) {
                  if (n.hash) {
                    var e = n.hash.substring(1);
                    setTimeout(function () {
                      var t = document.getElementById(e);
                      t && (t.scrollIntoView(), t.focus());
                    }, 0);
                  }
                  var t;
                  (t = Array.from(document.querySelectorAll('a'))).length > 0 &&
                    t.forEach(function (e) {
                      e.host !== window.location.host &&
                        (e.setAttribute('rel', 'noopener noreferrer'),
                        e.setAttribute('target', '_blank'));
                    });
                }
              },
              [o],
            ),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(s, null),
              r.createElement(
                'div',
                { id: 'root' },
                r.createElement(
                  c.ThemeProvider,
                  { theme: d },
                  r.createElement(C, null),
                  r.createElement(
                    'a',
                    { className: 'skip-to-content', href: '#content' },
                    'Skip to Content',
                  ),
                  o && i
                    ? r.createElement(Ie, {
                        finishLoading: function () {
                          return l(!1);
                        },
                      })
                    : r.createElement(
                        S,
                        null,
                        r.createElement(We, { isHome: i }),
                        r.createElement(Ke, { isHome: i }),
                        r.createElement(et, { isHome: i }),
                        r.createElement('div', { id: 'content' }, t, r.createElement(it, null)),
                      ),
                ),
              ),
            )
          );
        },
        O = {
          update: null,
          begin: null,
          loopBegin: null,
          changeBegin: null,
          change: null,
          changeComplete: null,
          loopComplete: null,
          complete: null,
          loop: 1,
          direction: 'normal',
          autoplay: !0,
          timelineOffset: 0,
        },
        L = { duration: 1e3, delay: 0, endDelay: 0, easing: 'easeOutElastic(1, .5)', round: 0 },
        A = [
          'translateX',
          'translateY',
          'translateZ',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'scale',
          'scaleX',
          'scaleY',
          'scaleZ',
          'skew',
          'skewX',
          'skewY',
          'perspective',
          'matrix',
          'matrix3d',
        ],
        j = { CSS: {}, springs: {} };
      function N(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function z(e, t) {
        return e.indexOf(t) > -1;
      }
      function M(e, t) {
        return e.apply(null, t);
      }
      var I = {
        arr: function (e) {
          return Array.isArray(e);
        },
        obj: function (e) {
          return z(Object.prototype.toString.call(e), 'Object');
        },
        pth: function (e) {
          return I.obj(e) && e.hasOwnProperty('totalLength');
        },
        svg: function (e) {
          return e instanceof SVGElement;
        },
        inp: function (e) {
          return e instanceof HTMLInputElement;
        },
        dom: function (e) {
          return e.nodeType || I.svg(e);
        },
        str: function (e) {
          return 'string' == typeof e;
        },
        fnc: function (e) {
          return 'function' == typeof e;
        },
        und: function (e) {
          return void 0 === e;
        },
        nil: function (e) {
          return I.und(e) || null === e;
        },
        hex: function (e) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
        },
        rgb: function (e) {
          return /^rgb/.test(e);
        },
        hsl: function (e) {
          return /^hsl/.test(e);
        },
        col: function (e) {
          return I.hex(e) || I.rgb(e) || I.hsl(e);
        },
        key: function (e) {
          return (
            !O.hasOwnProperty(e) && !L.hasOwnProperty(e) && 'targets' !== e && 'keyframes' !== e
          );
        },
      };
      function P(e) {
        var t = /\(([^)]+)\)/.exec(e);
        return t
          ? t[1].split(',').map(function (e) {
              return parseFloat(e);
            })
          : [];
      }
      function R(e, t) {
        var n = P(e),
          r = N(I.und(n[0]) ? 1 : n[0], 0.1, 100),
          i = N(I.und(n[1]) ? 100 : n[1], 0.1, 100),
          a = N(I.und(n[2]) ? 10 : n[2], 0.1, 100),
          o = N(I.und(n[3]) ? 0 : n[3], 0.1, 100),
          l = Math.sqrt(i / r),
          s = a / (2 * Math.sqrt(i * r)),
          c = s < 1 ? l * Math.sqrt(1 - s * s) : 0,
          u = s < 1 ? (s * l - o) / c : -o + l;
        function d(e) {
          var n = t ? (t * e) / 1e3 : e;
          return (
            (n =
              s < 1
                ? Math.exp(-n * s * l) * (1 * Math.cos(c * n) + u * Math.sin(c * n))
                : (1 + u * n) * Math.exp(-n * l)),
            0 === e || 1 === e ? e : 1 - n
          );
        }
        return t
          ? d
          : function () {
              var t = j.springs[e];
              if (t) return t;
              for (var n = 1 / 6, r = 0, i = 0; ; )
                if (1 === d((r += n))) {
                  if (++i >= 16) break;
                } else i = 0;
              var a = r * n * 1e3;
              return (j.springs[e] = a), a;
            };
      }
      function _(e) {
        return (
          void 0 === e && (e = 10),
          function (t) {
            return Math.ceil(N(t, 1e-6, 1) * e) * (1 / e);
          }
        );
      }
      var F,
        D,
        B = (function () {
          var e = 0.1;
          function t(e, t) {
            return 1 - 3 * t + 3 * e;
          }
          function n(e, t) {
            return 3 * t - 6 * e;
          }
          function r(e) {
            return 3 * e;
          }
          function i(e, i, a) {
            return ((t(i, a) * e + n(i, a)) * e + r(i)) * e;
          }
          function a(e, i, a) {
            return 3 * t(i, a) * e * e + 2 * n(i, a) * e + r(i);
          }
          return function (t, n, r, o) {
            if (0 <= t && t <= 1 && 0 <= r && r <= 1) {
              var l = new Float32Array(11);
              if (t !== n || r !== o) for (var s = 0; s < 11; ++s) l[s] = i(s * e, t, r);
              return function (e) {
                return (t === n && r === o) || 0 === e || 1 === e ? e : i(c(e), n, o);
              };
            }
            function c(n) {
              for (var o = 0, s = 1; 10 !== s && l[s] <= n; ++s) o += e;
              --s;
              var c = o + ((n - l[s]) / (l[s + 1] - l[s])) * e,
                u = a(c, t, r);
              return u >= 0.001
                ? (function (e, t, n, r) {
                    for (var o = 0; o < 4; ++o) {
                      var l = a(t, n, r);
                      if (0 === l) return t;
                      t -= (i(t, n, r) - e) / l;
                    }
                    return t;
                  })(n, c, t, r)
                : 0 === u
                ? c
                : (function (e, t, n, r, a) {
                    var o,
                      l,
                      s = 0;
                    do {
                      (o = i((l = t + (n - t) / 2), r, a) - e) > 0 ? (n = l) : (t = l);
                    } while (Math.abs(o) > 1e-7 && ++s < 10);
                    return l;
                  })(n, o, o + e, t, r);
            }
          };
        })(),
        q =
          ((F = {
            linear: function () {
              return function (e) {
                return e;
              };
            },
          }),
          (D = {
            Sine: function () {
              return function (e) {
                return 1 - Math.cos((e * Math.PI) / 2);
              };
            },
            Circ: function () {
              return function (e) {
                return 1 - Math.sqrt(1 - e * e);
              };
            },
            Back: function () {
              return function (e) {
                return e * e * (3 * e - 2);
              };
            },
            Bounce: function () {
              return function (e) {
                for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2);
              };
            },
            Elastic: function (e, t) {
              void 0 === e && (e = 1), void 0 === t && (t = 0.5);
              var n = N(e, 1, 10),
                r = N(t, 0.1, 2);
              return function (e) {
                return 0 === e || 1 === e
                  ? e
                  : -n *
                      Math.pow(2, 10 * (e - 1)) *
                      Math.sin(
                        ((e - 1 - (r / (2 * Math.PI)) * Math.asin(1 / n)) * (2 * Math.PI)) / r,
                      );
              };
            },
          }),
          ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'].forEach(function (e, t) {
            D[e] = function () {
              return function (e) {
                return Math.pow(e, t + 2);
              };
            };
          }),
          Object.keys(D).forEach(function (e) {
            var t = D[e];
            (F['easeIn' + e] = t),
              (F['easeOut' + e] = function (e, n) {
                return function (r) {
                  return 1 - t(e, n)(1 - r);
                };
              }),
              (F['easeInOut' + e] = function (e, n) {
                return function (r) {
                  return r < 0.5 ? t(e, n)(2 * r) / 2 : 1 - t(e, n)(-2 * r + 2) / 2;
                };
              }),
              (F['easeOutIn' + e] = function (e, n) {
                return function (r) {
                  return r < 0.5 ? (1 - t(e, n)(1 - 2 * r)) / 2 : (t(e, n)(2 * r - 1) + 1) / 2;
                };
              });
          }),
          F);
      function H(e, t) {
        if (I.fnc(e)) return e;
        var n = e.split('(')[0],
          r = q[n],
          i = P(e);
        switch (n) {
          case 'spring':
            return R(e, t);
          case 'cubicBezier':
            return M(B, i);
          case 'steps':
            return M(_, i);
          default:
            return M(r, i);
        }
      }
      function W(e) {
        try {
          return document.querySelectorAll(e);
        } catch (t) {
          return;
        }
      }
      function Z(e, t) {
        for (
          var n = e.length, r = arguments.length >= 2 ? arguments[1] : void 0, i = [], a = 0;
          a < n;
          a++
        )
          if (a in e) {
            var o = e[a];
            t.call(r, o, a, e) && i.push(o);
          }
        return i;
      }
      function V(e) {
        return e.reduce(function (e, t) {
          return e.concat(I.arr(t) ? V(t) : t);
        }, []);
      }
      function Y(e) {
        return I.arr(e)
          ? e
          : (I.str(e) && (e = W(e) || e),
            e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
      }
      function U(e, t) {
        return e.some(function (e) {
          return e === t;
        });
      }
      function G(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
      }
      function Q(e, t) {
        var n = G(e);
        for (var r in e) n[r] = t.hasOwnProperty(r) ? t[r] : e[r];
        return n;
      }
      function $(e, t) {
        var n = G(e);
        for (var r in t) n[r] = I.und(e[r]) ? t[r] : e[r];
        return n;
      }
      function J(e) {
        return I.rgb(e)
          ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((t = e)))
            ? 'rgba(' + n[1] + ',1)'
            : t
          : I.hex(e)
          ? (function (e) {
              var t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, r) {
                  return t + t + n + n + r + r;
                }),
                n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
              return (
                'rgba(' +
                parseInt(n[1], 16) +
                ',' +
                parseInt(n[2], 16) +
                ',' +
                parseInt(n[3], 16) +
                ',1)'
              );
            })(e)
          : I.hsl(e)
          ? (function (e) {
              var t,
                n,
                r,
                i =
                  /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
                  /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
                a = parseInt(i[1], 10) / 360,
                o = parseInt(i[2], 10) / 100,
                l = parseInt(i[3], 10) / 100,
                s = i[4] || 1;
              function c(e, t, n) {
                return (
                  n < 0 && (n += 1),
                  n > 1 && (n -= 1),
                  n < 1 / 6
                    ? e + 6 * (t - e) * n
                    : n < 0.5
                    ? t
                    : n < 2 / 3
                    ? e + (t - e) * (2 / 3 - n) * 6
                    : e
                );
              }
              if (0 == o) t = n = r = l;
              else {
                var u = l < 0.5 ? l * (1 + o) : l + o - l * o,
                  d = 2 * l - u;
                (t = c(d, u, a + 1 / 3)), (n = c(d, u, a)), (r = c(d, u, a - 1 / 3));
              }
              return 'rgba(' + 255 * t + ',' + 255 * n + ',' + 255 * r + ',' + s + ')';
            })(e)
          : void 0;
        var t, n;
      }
      function K(e) {
        var t =
          /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
            e,
          );
        if (t) return t[1];
      }
      function X(e, t) {
        return I.fnc(e) ? e(t.target, t.id, t.total) : e;
      }
      function ee(e, t) {
        return e.getAttribute(t);
      }
      function te(e, t, n) {
        if (U([n, 'deg', 'rad', 'turn'], K(t))) return t;
        var r = j.CSS[t + n];
        if (!I.und(r)) return r;
        var i = document.createElement(e.tagName),
          a = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
        a.appendChild(i), (i.style.position = 'absolute'), (i.style.width = 100 + n);
        var o = 100 / i.offsetWidth;
        a.removeChild(i);
        var l = o * parseFloat(t);
        return (j.CSS[t + n] = l), l;
      }
      function ne(e, t, n) {
        if (t in e.style) {
          var r = t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
            i = e.style[t] || getComputedStyle(e).getPropertyValue(r) || '0';
          return n ? te(e, i, n) : i;
        }
      }
      function re(e, t) {
        return I.dom(e) && !I.inp(e) && (!I.nil(ee(e, t)) || (I.svg(e) && e[t]))
          ? 'attribute'
          : I.dom(e) && U(A, t)
          ? 'transform'
          : I.dom(e) && 'transform' !== t && ne(e, t)
          ? 'css'
          : null != e[t]
          ? 'object'
          : void 0;
      }
      function ie(e) {
        if (I.dom(e)) {
          for (
            var t, n = e.style.transform || '', r = /(\w+)\(([^)]*)\)/g, i = new Map();
            (t = r.exec(n));

          )
            i.set(t[1], t[2]);
          return i;
        }
      }
      function ae(e, t, n, r) {
        var i = z(t, 'scale')
            ? 1
            : 0 +
              (function (e) {
                return z(e, 'translate') || 'perspective' === e
                  ? 'px'
                  : z(e, 'rotate') || z(e, 'skew')
                  ? 'deg'
                  : void 0;
              })(t),
          a = ie(e).get(t) || i;
        return n && (n.transforms.list.set(t, a), (n.transforms.last = t)), r ? te(e, a, r) : a;
      }
      function oe(e, t, n, r) {
        switch (re(e, t)) {
          case 'transform':
            return ae(e, t, r, n);
          case 'css':
            return ne(e, t, n);
          case 'attribute':
            return ee(e, t);
          default:
            return e[t] || 0;
        }
      }
      function le(e, t) {
        var n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) return e;
        var r = K(e) || 0,
          i = parseFloat(t),
          a = parseFloat(e.replace(n[0], ''));
        switch (n[0][0]) {
          case '+':
            return i + a + r;
          case '-':
            return i - a + r;
          case '*':
            return i * a + r;
        }
      }
      function se(e, t) {
        if (I.col(e)) return J(e);
        if (/\s/g.test(e)) return e;
        var n = K(e),
          r = n ? e.substr(0, e.length - n.length) : e;
        return t ? r + t : r;
      }
      function ce(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }
      function ue(e) {
        for (var t, n = e.points, r = 0, i = 0; i < n.numberOfItems; i++) {
          var a = n.getItem(i);
          i > 0 && (r += ce(t, a)), (t = a);
        }
        return r;
      }
      function de(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
          case 'circle':
            return (function (e) {
              return 2 * Math.PI * ee(e, 'r');
            })(e);
          case 'rect':
            return (function (e) {
              return 2 * ee(e, 'width') + 2 * ee(e, 'height');
            })(e);
          case 'line':
            return (function (e) {
              return ce({ x: ee(e, 'x1'), y: ee(e, 'y1') }, { x: ee(e, 'x2'), y: ee(e, 'y2') });
            })(e);
          case 'polyline':
            return ue(e);
          case 'polygon':
            return (function (e) {
              var t = e.points;
              return ue(e) + ce(t.getItem(t.numberOfItems - 1), t.getItem(0));
            })(e);
        }
      }
      function fe(e, t) {
        var n = t || {},
          r =
            n.el ||
            (function (e) {
              for (var t = e.parentNode; I.svg(t) && I.svg(t.parentNode); ) t = t.parentNode;
              return t;
            })(e),
          i = r.getBoundingClientRect(),
          a = ee(r, 'viewBox'),
          o = i.width,
          l = i.height,
          s = n.viewBox || (a ? a.split(' ') : [0, 0, o, l]);
        return { el: r, viewBox: s, x: s[0] / 1, y: s[1] / 1, w: o, h: l, vW: s[2], vH: s[3] };
      }
      function me(e, t, n) {
        function r(n) {
          void 0 === n && (n = 0);
          var r = t + n >= 1 ? t + n : 0;
          return e.el.getPointAtLength(r);
        }
        var i = fe(e.el, e.svg),
          a = r(),
          o = r(-1),
          l = r(1),
          s = n ? 1 : i.w / i.vW,
          c = n ? 1 : i.h / i.vH;
        switch (e.property) {
          case 'x':
            return (a.x - i.x) * s;
          case 'y':
            return (a.y - i.y) * c;
          case 'angle':
            return (180 * Math.atan2(l.y - o.y, l.x - o.x)) / Math.PI;
        }
      }
      function pe(e, t) {
        var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
          r = se(I.pth(e) ? e.totalLength : e, t) + '';
        return {
          original: r,
          numbers: r.match(n) ? r.match(n).map(Number) : [0],
          strings: I.str(e) || t ? r.split(n) : [],
        };
      }
      function he(e) {
        return Z(e ? V(I.arr(e) ? e.map(Y) : Y(e)) : [], function (e, t, n) {
          return n.indexOf(e) === t;
        });
      }
      function ge(e) {
        var t = he(e);
        return t.map(function (e, n) {
          return { target: e, id: n, total: t.length, transforms: { list: ie(e) } };
        });
      }
      function ve(e, t) {
        var n = G(t);
        if ((/^spring/.test(n.easing) && (n.duration = R(n.easing)), I.arr(e))) {
          var r = e.length;
          2 === r && !I.obj(e[0])
            ? (e = { value: e })
            : I.fnc(t.duration) || (n.duration = t.duration / r);
        }
        var i = I.arr(e) ? e : [e];
        return i
          .map(function (e, n) {
            var r = I.obj(e) && !I.pth(e) ? e : { value: e };
            return (
              I.und(r.delay) && (r.delay = n ? 0 : t.delay),
              I.und(r.endDelay) && (r.endDelay = n === i.length - 1 ? t.endDelay : 0),
              r
            );
          })
          .map(function (e) {
            return $(e, n);
          });
      }
      function be(e, t) {
        var n = [],
          r = t.keyframes;
        for (var i in (r &&
          (t = $(
            (function (e) {
              for (
                var t = Z(
                    V(
                      e.map(function (e) {
                        return Object.keys(e);
                      }),
                    ),
                    function (e) {
                      return I.key(e);
                    },
                  ).reduce(function (e, t) {
                    return e.indexOf(t) < 0 && e.push(t), e;
                  }, []),
                  n = {},
                  r = function (r) {
                    var i = t[r];
                    n[i] = e.map(function (e) {
                      var t = {};
                      for (var n in e) I.key(n) ? n == i && (t.value = e[n]) : (t[n] = e[n]);
                      return t;
                    });
                  },
                  i = 0;
                i < t.length;
                i++
              )
                r(i);
              return n;
            })(r),
            t,
          )),
        t))
          I.key(i) && n.push({ name: i, tweens: ve(t[i], e) });
        return n;
      }
      function xe(e, t) {
        var n;
        return e.tweens.map(function (r) {
          var i = (function (e, t) {
              var n = {};
              for (var r in e) {
                var i = X(e[r], t);
                I.arr(i) &&
                  1 ===
                    (i = i.map(function (e) {
                      return X(e, t);
                    })).length &&
                  (i = i[0]),
                  (n[r] = i);
              }
              return (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n;
            })(r, t),
            a = i.value,
            o = I.arr(a) ? a[1] : a,
            l = K(o),
            s = oe(t.target, e.name, l, t),
            c = n ? n.to.original : s,
            u = I.arr(a) ? a[0] : c,
            d = K(u) || K(s),
            f = l || d;
          return (
            I.und(o) && (o = c),
            (i.from = pe(u, f)),
            (i.to = pe(le(o, u), f)),
            (i.start = n ? n.end : 0),
            (i.end = i.start + i.delay + i.duration + i.endDelay),
            (i.easing = H(i.easing, i.duration)),
            (i.isPath = I.pth(a)),
            (i.isPathTargetInsideSVG = i.isPath && I.svg(t.target)),
            (i.isColor = I.col(i.from.original)),
            i.isColor && (i.round = 1),
            (n = i),
            i
          );
        });
      }
      var ye = {
        css: function (e, t, n) {
          return (e.style[t] = n);
        },
        attribute: function (e, t, n) {
          return e.setAttribute(t, n);
        },
        object: function (e, t, n) {
          return (e[t] = n);
        },
        transform: function (e, t, n, r, i) {
          if ((r.list.set(t, n), t === r.last || i)) {
            var a = '';
            r.list.forEach(function (e, t) {
              a += t + '(' + e + ') ';
            }),
              (e.style.transform = a);
          }
        },
      };
      function we(e, t) {
        ge(e).forEach(function (e) {
          for (var n in t) {
            var r = X(t[n], e),
              i = e.target,
              a = K(r),
              o = oe(i, n, a, e),
              l = le(se(r, a || K(o)), o),
              s = re(i, n);
            ye[s](i, n, l, e.transforms, !0);
          }
        });
      }
      function Ee(e, t) {
        return Z(
          V(
            e.map(function (e) {
              return t.map(function (t) {
                return (function (e, t) {
                  var n = re(e.target, t.name);
                  if (n) {
                    var r = xe(t, e),
                      i = r[r.length - 1];
                    return {
                      type: n,
                      property: t.name,
                      animatable: e,
                      tweens: r,
                      duration: i.end,
                      delay: r[0].delay,
                      endDelay: i.endDelay,
                    };
                  }
                })(e, t);
              });
            }),
          ),
          function (e) {
            return !I.und(e);
          },
        );
      }
      function ke(e, t) {
        var n = e.length,
          r = function (e) {
            return e.timelineOffset ? e.timelineOffset : 0;
          },
          i = {};
        return (
          (i.duration = n
            ? Math.max.apply(
                Math,
                e.map(function (e) {
                  return r(e) + e.duration;
                }),
              )
            : t.duration),
          (i.delay = n
            ? Math.min.apply(
                Math,
                e.map(function (e) {
                  return r(e) + e.delay;
                }),
              )
            : t.delay),
          (i.endDelay = n
            ? i.duration -
              Math.max.apply(
                Math,
                e.map(function (e) {
                  return r(e) + e.duration - e.endDelay;
                }),
              )
            : t.endDelay),
          i
        );
      }
      var Ce = 0;
      var Se = [],
        Te = (function () {
          var e;
          function t(n) {
            for (var r = Se.length, i = 0; i < r; ) {
              var a = Se[i];
              a.paused ? (Se.splice(i, 1), r--) : (a.tick(n), i++);
            }
            e = i > 0 ? requestAnimationFrame(t) : void 0;
          }
          return (
            'undefined' != typeof document &&
              document.addEventListener('visibilitychange', function () {
                Le.suspendWhenDocumentHidden &&
                  (Oe()
                    ? (e = cancelAnimationFrame(e))
                    : (Se.forEach(function (e) {
                        return e._onDocumentVisibility();
                      }),
                      Te()));
              }),
            function () {
              e ||
                (Oe() && Le.suspendWhenDocumentHidden) ||
                !(Se.length > 0) ||
                (e = requestAnimationFrame(t));
            }
          );
        })();
      function Oe() {
        return !!document && document.hidden;
      }
      function Le(e) {
        void 0 === e && (e = {});
        var t,
          n = 0,
          r = 0,
          i = 0,
          a = 0,
          o = null;
        function l(e) {
          var t =
            window.Promise &&
            new Promise(function (e) {
              return (o = e);
            });
          return (e.finished = t), t;
        }
        var s = (function (e) {
          var t = Q(O, e),
            n = Q(L, e),
            r = be(n, e),
            i = ge(e.targets),
            a = Ee(i, r),
            o = ke(a, n),
            l = Ce;
          return (
            Ce++,
            $(t, {
              id: l,
              children: [],
              animatables: i,
              animations: a,
              duration: o.duration,
              delay: o.delay,
              endDelay: o.endDelay,
            })
          );
        })(e);
        l(s);
        function c() {
          var e = s.direction;
          'alternate' !== e && (s.direction = 'normal' !== e ? 'normal' : 'reverse'),
            (s.reversed = !s.reversed),
            t.forEach(function (e) {
              return (e.reversed = s.reversed);
            });
        }
        function u(e) {
          return s.reversed ? s.duration - e : e;
        }
        function d() {
          (n = 0), (r = u(s.currentTime) * (1 / Le.speed));
        }
        function f(e, t) {
          t && t.seek(e - t.timelineOffset);
        }
        function m(e) {
          for (var t = 0, n = s.animations, r = n.length; t < r; ) {
            var i = n[t],
              a = i.animatable,
              o = i.tweens,
              l = o.length - 1,
              c = o[l];
            l &&
              (c =
                Z(o, function (t) {
                  return e < t.end;
                })[0] || c);
            for (
              var u = N(e - c.start - c.delay, 0, c.duration) / c.duration,
                d = isNaN(u) ? 1 : c.easing(u),
                f = c.to.strings,
                m = c.round,
                p = [],
                h = c.to.numbers.length,
                g = void 0,
                v = 0;
              v < h;
              v++
            ) {
              var b = void 0,
                x = c.to.numbers[v],
                y = c.from.numbers[v] || 0;
              (b = c.isPath ? me(c.value, d * x, c.isPathTargetInsideSVG) : y + d * (x - y)),
                m && ((c.isColor && v > 2) || (b = Math.round(b * m) / m)),
                p.push(b);
            }
            var w = f.length;
            if (w) {
              g = f[0];
              for (var E = 0; E < w; E++) {
                f[E];
                var k = f[E + 1],
                  C = p[E];
                isNaN(C) || (g += k ? C + k : C + ' ');
              }
            } else g = p[0];
            ye[i.type](a.target, i.property, g, a.transforms), (i.currentValue = g), t++;
          }
        }
        function p(e) {
          s[e] && !s.passThrough && s[e](s);
        }
        function h(e) {
          var d = s.duration,
            h = s.delay,
            g = d - s.endDelay,
            v = u(e);
          (s.progress = N((v / d) * 100, 0, 100)),
            (s.reversePlayback = v < s.currentTime),
            t &&
              (function (e) {
                if (s.reversePlayback) for (var n = a; n--; ) f(e, t[n]);
                else for (var r = 0; r < a; r++) f(e, t[r]);
              })(v),
            !s.began && s.currentTime > 0 && ((s.began = !0), p('begin')),
            !s.loopBegan && s.currentTime > 0 && ((s.loopBegan = !0), p('loopBegin')),
            v <= h && 0 !== s.currentTime && m(0),
            ((v >= g && s.currentTime !== d) || !d) && m(d),
            v > h && v < g
              ? (s.changeBegan ||
                  ((s.changeBegan = !0), (s.changeCompleted = !1), p('changeBegin')),
                p('change'),
                m(v))
              : s.changeBegan &&
                ((s.changeCompleted = !0), (s.changeBegan = !1), p('changeComplete')),
            (s.currentTime = N(v, 0, d)),
            s.began && p('update'),
            e >= d &&
              ((r = 0),
              s.remaining && !0 !== s.remaining && s.remaining--,
              s.remaining
                ? ((n = i),
                  p('loopComplete'),
                  (s.loopBegan = !1),
                  'alternate' === s.direction && c())
                : ((s.paused = !0),
                  s.completed ||
                    ((s.completed = !0),
                    p('loopComplete'),
                    p('complete'),
                    !s.passThrough && 'Promise' in window && (o(), l(s)))));
        }
        return (
          (s.reset = function () {
            var e = s.direction;
            (s.passThrough = !1),
              (s.currentTime = 0),
              (s.progress = 0),
              (s.paused = !0),
              (s.began = !1),
              (s.loopBegan = !1),
              (s.changeBegan = !1),
              (s.completed = !1),
              (s.changeCompleted = !1),
              (s.reversePlayback = !1),
              (s.reversed = 'reverse' === e),
              (s.remaining = s.loop),
              (t = s.children);
            for (var n = (a = t.length); n--; ) s.children[n].reset();
            ((s.reversed && !0 !== s.loop) || ('alternate' === e && 1 === s.loop)) && s.remaining++,
              m(s.reversed ? s.duration : 0);
          }),
          (s._onDocumentVisibility = d),
          (s.set = function (e, t) {
            return we(e, t), s;
          }),
          (s.tick = function (e) {
            (i = e), n || (n = i), h((i + (r - n)) * Le.speed);
          }),
          (s.seek = function (e) {
            h(u(e));
          }),
          (s.pause = function () {
            (s.paused = !0), d();
          }),
          (s.play = function () {
            s.paused && (s.completed && s.reset(), (s.paused = !1), Se.push(s), d(), Te());
          }),
          (s.reverse = function () {
            c(), (s.completed = !s.reversed), d();
          }),
          (s.restart = function () {
            s.reset(), s.play();
          }),
          (s.remove = function (e) {
            je(he(e), s);
          }),
          s.reset(),
          s.autoplay && s.play(),
          s
        );
      }
      function Ae(e, t) {
        for (var n = t.length; n--; ) U(e, t[n].animatable.target) && t.splice(n, 1);
      }
      function je(e, t) {
        var n = t.animations,
          r = t.children;
        Ae(e, n);
        for (var i = r.length; i--; ) {
          var a = r[i],
            o = a.animations;
          Ae(e, o), o.length || a.children.length || r.splice(i, 1);
        }
        n.length || r.length || t.pause();
      }
      (Le.version = '3.2.1'),
        (Le.speed = 1),
        (Le.suspendWhenDocumentHidden = !0),
        (Le.running = Se),
        (Le.remove = function (e) {
          for (var t = he(e), n = Se.length; n--; ) {
            je(t, Se[n]);
          }
        }),
        (Le.get = oe),
        (Le.set = we),
        (Le.convertPx = te),
        (Le.path = function (e, t) {
          var n = I.str(e) ? W(e)[0] : e,
            r = t || 100;
          return function (e) {
            return { property: e, el: n, svg: fe(n), totalLength: de(n) * (r / 100) };
          };
        }),
        (Le.setDashoffset = function (e) {
          var t = de(e);
          return e.setAttribute('stroke-dasharray', t), t;
        }),
        (Le.stagger = function (e, t) {
          void 0 === t && (t = {});
          var n = t.direction || 'normal',
            r = t.easing ? H(t.easing) : null,
            i = t.grid,
            a = t.axis,
            o = t.from || 0,
            l = 'first' === o,
            s = 'center' === o,
            c = 'last' === o,
            u = I.arr(e),
            d = u ? parseFloat(e[0]) : parseFloat(e),
            f = u ? parseFloat(e[1]) : 0,
            m = K(u ? e[1] : e) || 0,
            p = t.start || 0 + (u ? d : 0),
            h = [],
            g = 0;
          return function (e, t, v) {
            if ((l && (o = 0), s && (o = (v - 1) / 2), c && (o = v - 1), !h.length)) {
              for (var b = 0; b < v; b++) {
                if (i) {
                  var x = s ? (i[0] - 1) / 2 : o % i[0],
                    y = s ? (i[1] - 1) / 2 : Math.floor(o / i[0]),
                    w = x - (b % i[0]),
                    E = y - Math.floor(b / i[0]),
                    k = Math.sqrt(w * w + E * E);
                  'x' === a && (k = -w), 'y' === a && (k = -E), h.push(k);
                } else h.push(Math.abs(o - b));
                g = Math.max.apply(Math, h);
              }
              r &&
                (h = h.map(function (e) {
                  return r(e / g) * g;
                })),
                'reverse' === n &&
                  (h = h.map(function (e) {
                    return a ? (e < 0 ? -1 * e : -e) : Math.abs(g - e);
                  }));
            }
            return p + (u ? (f - d) / g : d) * (Math.round(100 * h[t]) / 100) + m;
          };
        }),
        (Le.timeline = function (e) {
          void 0 === e && (e = {});
          var t = Le(e);
          return (
            (t.duration = 0),
            (t.add = function (n, r) {
              var i = Se.indexOf(t),
                a = t.children;
              function o(e) {
                e.passThrough = !0;
              }
              i > -1 && Se.splice(i, 1);
              for (var l = 0; l < a.length; l++) o(a[l]);
              var s = $(n, Q(L, e));
              s.targets = s.targets || e.targets;
              var c = t.duration;
              (s.autoplay = !1),
                (s.direction = t.direction),
                (s.timelineOffset = I.und(r) ? c : le(r, c)),
                o(t),
                t.seek(s.timelineOffset);
              var u = Le(s);
              o(u), a.push(u);
              var d = ke(a, e);
              return (
                (t.delay = d.delay),
                (t.endDelay = d.endDelay),
                (t.duration = d.duration),
                t.seek(0),
                t.reset(),
                t.autoplay && t.play(),
                t
              );
            }),
            t
          );
        }),
        (Le.easing = H),
        (Le.penner = q),
        (Le.random = function (e, t) {
          return Math.floor(Math.random() * (t - e + 1)) + e;
        });
      var Ne = Le,
        ze = n(7692),
        Me = c.default.div.withConfig({
          displayName: 'loader__StyledLoader',
          componentId: 'sc-16e1zdd-0',
        })(
          [
            '',
            ';position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-color:var(--dark-navy);z-index:99;.logo-wrapper{width:max-content;max-width:100px;transition:var(--transition);opacity:',
            ';svg{display:block;width:100%;height:100%;margin:0 auto;fill:none;user-select:none;#B{opacity:0;}}}',
          ],
          function (e) {
            return e.theme.mixins.flexCenter;
          },
          function (e) {
            return e.isMounted ? 1 : 0;
          },
        ),
        Ie = function (e) {
          var t = e.finishLoading,
            n = (0, r.useState)(!1),
            a = n[0],
            o = n[1];
          return (
            (0, r.useEffect)(function () {
              var e = setTimeout(function () {
                return o(!0);
              }, 10);
              return (
                Ne.timeline({
                  complete: function () {
                    return t();
                  },
                })
                  .add({
                    targets: '#logo path',
                    delay: 300,
                    duration: 1500,
                    easing: 'easeInOutQuart',
                    strokeDashoffset: [Ne.setDashoffset, 0],
                  })
                  .add({ targets: '#logo #B', duration: 700, easing: 'easeInOutQuart', opacity: 1 })
                  .add({
                    targets: '#logo',
                    delay: 500,
                    duration: 300,
                    easing: 'easeInOutQuart',
                    opacity: 0,
                    scale: 0.1,
                  })
                  .add({
                    targets: '.loader',
                    duration: 200,
                    easing: 'easeInOutQuart',
                    opacity: 0,
                    zIndex: -1,
                  }),
                function () {
                  return clearTimeout(e);
                }
              );
            }, []),
            r.createElement(
              Me,
              { className: 'loader', isMounted: a },
              r.createElement(i.q, { bodyAttributes: { class: 'hidden' } }),
              r.createElement('div', { className: 'logo-wrapper' }, r.createElement(ze.pA, null)),
            )
          );
        },
        Pe = n(5813),
        Re = n(7428),
        _e = n(537),
        Fe = n(4165),
        De = n(3082),
        Be = c.default.header.withConfig({
          displayName: 'nav__StyledHeader',
          componentId: 'sc-1o6aj99-0',
        })(
          [
            '',
            ';position:fixed;top:0;z-index:11;padding:0px 50px;width:100%;height:var(--nav-height);background-color:rgba(10,25,47,0.85);filter:none !important;pointer-events:auto !important;user-select:auto !important;backdrop-filter:blur(10px);transition:var(--transition);@media (max-width:1080px){padding:0 40px;}@media (max-width:768px){padding:0 25px;}@media (prefers-reduced-motion:no-preference){',
            ';',
            ';}',
          ],
          function (e) {
            return e.theme.mixins.flexBetween;
          },
          function (e) {
            return (
              'up' === e.scrollDirection &&
              !e.scrolledToTop &&
              (0, c.css)([
                'height:var(--nav-scroll-height);transform:translateY(0px);background-color:rgba(10,25,47,0.85);box-shadow:0 10px 30px -10px var(--navy-shadow);',
              ])
            );
          },
          function (e) {
            return (
              'down' === e.scrollDirection &&
              !e.scrolledToTop &&
              (0, c.css)([
                'height:var(--nav-scroll-height);transform:translateY(calc(var(--nav-scroll-height) * -1));box-shadow:0 10px 30px -10px var(--navy-shadow);',
              ])
            );
          },
        ),
        qe = c.default.nav.withConfig({
          displayName: 'nav__StyledNav',
          componentId: 'sc-1o6aj99-1',
        })(
          [
            '',
            ';position:relative;width:100%;color:var(--lightest-slate);font-family:var(--font-mono);counter-reset:item 0;z-index:12;.logo{',
            ';a{color:var(--green);width:42px;height:42px;&:hover,&:focus{svg{fill:var(--green-tint);}}svg{fill:none;transition:var(--transition);user-select:none;}}}',
          ],
          function (e) {
            return e.theme.mixins.flexBetween;
          },
          function (e) {
            return e.theme.mixins.flexCenter;
          },
        ),
        He = c.default.div.withConfig({
          displayName: 'nav__StyledLinks',
          componentId: 'sc-1o6aj99-2',
        })(
          [
            'display:flex;align-items:center;@media (max-width:768px){display:none;}ol{',
            ";padding:0;margin:0;list-style:none;li{margin:0 5px;position:relative;counter-increment:item 1;font-size:var(--fz-xs);a{padding:10px;&:before{content:'0' counter(item) '.';margin-right:5px;color:var(--green);font-size:var(--fz-xxs);text-align:right;}}}}.resume-button{",
            ';margin-left:15px;font-size:var(--fz-xs);}',
          ],
          function (e) {
            return e.theme.mixins.flexBetween;
          },
          function (e) {
            return e.theme.mixins.smallButton;
          },
        ),
        We = function (e) {
          var t = e.isHome,
            n = (0, r.useState)(!t),
            i = n[0],
            a = n[1],
            l = (0, De.C7)('down'),
            s = (0, r.useState)(!0),
            c = s[0],
            u = s[1],
            d = (0, De.Tb)(),
            f = function () {
              u(window.pageYOffset < 50);
            };
          (0, r.useEffect)(function () {
            if (!d) {
              var e = setTimeout(function () {
                a(!0);
              }, 100);
              return (
                window.addEventListener('scroll', f),
                function () {
                  clearTimeout(e), window.removeEventListener('scroll', f);
                }
              );
            }
          }, []);
          var m = t ? Fe.Cs : 0,
            p = t ? 'fade' : '',
            h = t ? 'fadedown' : '',
            g = r.createElement(
              'div',
              { className: 'logo', tabIndex: '-1' },
              t
                ? r.createElement(
                    'a',
                    { href: '/', 'aria-label': 'home' },
                    r.createElement(ze.mp, null),
                  )
                : r.createElement(
                    o.Link,
                    { to: '/', 'aria-label': 'home' },
                    r.createElement(ze.mp, null),
                  ),
            ),
            v = r.createElement(
              'a',
              {
                className: 'resume-button',
                href: '/resume.pdf',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
              'Resume',
            );
          return r.createElement(
            Be,
            { scrollDirection: l, scrolledToTop: c },
            r.createElement(
              qe,
              null,
              d
                ? r.createElement(
                    r.Fragment,
                    null,
                    g,
                    r.createElement(
                      He,
                      null,
                      r.createElement(
                        'ol',
                        null,
                        _e.navLinks &&
                          _e.navLinks.map(function (e, t) {
                            var n = e.url,
                              i = e.name;
                            return r.createElement(
                              'li',
                              { key: t },
                              r.createElement(o.Link, { to: n }, i),
                            );
                          }),
                      ),
                      r.createElement('div', null, v),
                    ),
                    r.createElement(Ge, null),
                  )
                : r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      Pe.Z,
                      { component: null },
                      i &&
                        r.createElement(
                          Re.Z,
                          { classNames: p, timeout: m },
                          r.createElement(r.Fragment, null, g),
                        ),
                    ),
                    r.createElement(
                      He,
                      null,
                      r.createElement(
                        'ol',
                        null,
                        r.createElement(
                          Pe.Z,
                          { component: null },
                          i &&
                            _e.navLinks &&
                            _e.navLinks.map(function (e, n) {
                              var i = e.url,
                                a = e.name;
                              return r.createElement(
                                Re.Z,
                                { key: n, classNames: h, timeout: m },
                                r.createElement(
                                  'li',
                                  { key: n, style: { transitionDelay: (t ? 100 * n : 0) + 'ms' } },
                                  r.createElement(o.Link, { to: i }, a),
                                ),
                              );
                            }),
                        ),
                      ),
                      r.createElement(
                        Pe.Z,
                        { component: null },
                        i &&
                          r.createElement(
                            Re.Z,
                            { classNames: h, timeout: m },
                            r.createElement(
                              'div',
                              {
                                style: {
                                  transitionDelay: (t ? 100 * _e.navLinks.length : 0) + 'ms',
                                },
                              },
                              v,
                            ),
                          ),
                      ),
                    ),
                    r.createElement(
                      Pe.Z,
                      { component: null },
                      i &&
                        r.createElement(
                          Re.Z,
                          { classNames: p, timeout: m },
                          r.createElement(Ge, null),
                        ),
                    ),
                  ),
            ),
          );
        },
        Ze = n(5785),
        Ve = c.default.div.withConfig({
          displayName: 'menu__StyledMenu',
          componentId: 'sc-1hn76ka-0',
        })(['display:none;@media (max-width:768px){display:block;}']),
        Ye = c.default.button.withConfig({
          displayName: 'menu__StyledHamburgerButton',
          componentId: 'sc-1hn76ka-1',
        })(
          [
            'display:none;@media (max-width:768px){',
            ';position:relative;z-index:10;margin-right:-15px;padding:15px;border:0;background-color:transparent;color:inherit;text-transform:none;transition-timing-function:linear;transition-duration:0.15s;transition-property:opacity,filter;}.ham-box{display:inline-block;position:relative;width:var(--hamburger-width);height:24px;}.ham-box-inner{position:absolute;top:50%;right:0;width:var(--hamburger-width);height:2px;border-radius:var(--border-radius);background-color:var(--green);transition-duration:0.22s;transition-property:transform;transition-delay:',
            ';transform:rotate(',
            ');transition-timing-function:cubic-bezier( ',
            " );&:before,&:after{content:'';display:block;position:absolute;left:auto;right:0;width:var(--hamburger-width);height:2px;border-radius:4px;background-color:var(--green);transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;}&:before{width:",
            ';top:',
            ';opacity:',
            ';transition:',
            ';}&:after{width:',
            ';bottom:',
            ';transform:rotate(',
            ');transition:',
            ';}}',
          ],
          function (e) {
            return e.theme.mixins.flexCenter;
          },
          function (e) {
            return e.menuOpen ? '0.12s' : '0s';
          },
          function (e) {
            return e.menuOpen ? '225deg' : '0deg';
          },
          function (e) {
            return e.menuOpen ? '0.215, 0.61, 0.355, 1' : '0.55, 0.055, 0.675, 0.19';
          },
          function (e) {
            return e.menuOpen ? '100%' : '120%';
          },
          function (e) {
            return e.menuOpen ? '0' : '-10px';
          },
          function (e) {
            return e.menuOpen ? 0 : 1;
          },
          function (e) {
            return e.menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)';
          },
          function (e) {
            return e.menuOpen ? '100%' : '80%';
          },
          function (e) {
            return e.menuOpen ? '0' : '-10px';
          },
          function (e) {
            return e.menuOpen ? '-90deg' : '0';
          },
          function (e) {
            return e.menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)';
          },
        ),
        Ue = c.default.aside.withConfig({
          displayName: 'menu__StyledSidebar',
          componentId: 'sc-1hn76ka-2',
        })(
          [
            'display:none;@media (max-width:768px){',
            ';position:fixed;top:0;bottom:0;right:0;padding:50px 10px;width:min(75vw,400px);height:100vh;outline:0;background-color:var(--light-navy);box-shadow:-10px 0px 30px -15px var(--navy-shadow);z-index:9;transform:translateX(',
            'vw);visibility:',
            ';transition:var(--transition);}nav{',
            ";width:100%;flex-direction:column;color:var(--lightest-slate);font-family:var(--font-mono);text-align:center;}ol{padding:0;margin:0;list-style:none;width:100%;li{position:relative;margin:0 auto 20px;counter-increment:item 1;font-size:clamp(var(--fz-sm),4vw,var(--fz-lg));@media (max-width:600px){margin:0 auto 10px;}&:before{content:'0' counter(item) '.';display:block;margin-bottom:5px;color:var(--green);font-size:var(--fz-sm);}}a{",
            ';width:100%;padding:3px 20px 20px;}}.resume-link{',
            ';padding:18px 50px;margin:10% auto 0;width:max-content;}',
          ],
          function (e) {
            return e.theme.mixins.flexCenter;
          },
          function (e) {
            return e.menuOpen ? 0 : 100;
          },
          function (e) {
            return e.menuOpen ? 'visible' : 'hidden';
          },
          function (e) {
            return e.theme.mixins.flexBetween;
          },
          function (e) {
            return e.theme.mixins.link;
          },
          function (e) {
            return e.theme.mixins.bigButton;
          },
        ),
        Ge = function () {
          var e,
            t,
            n,
            a = (0, r.useState)(!1),
            l = a[0],
            s = a[1],
            c = (0, r.useRef)(null),
            u = (0, r.useRef)(null),
            d = function (r) {
              switch (r.key) {
                case Fe.nx.ESCAPE:
                case Fe.nx.ESCAPE_IE11:
                  s(!1);
                  break;
                case Fe.nx.TAB:
                  if (e && 1 === e.length) {
                    r.preventDefault();
                    break;
                  }
                  r.shiftKey
                    ? (function (e) {
                        document.activeElement === t && (e.preventDefault(), n.focus());
                      })(r)
                    : (function (e) {
                        document.activeElement === n && (e.preventDefault(), t.focus());
                      })(r);
              }
            },
            f = function (e) {
              e.currentTarget.innerWidth > 768 && s(!1);
            };
          (0, r.useEffect)(function () {
            return (
              document.addEventListener('keydown', d),
              window.addEventListener('resize', f),
              (e = [c.current].concat((0, Ze.Z)(Array.from(u.current.querySelectorAll('a'))))),
              (t = e[0]),
              (n = e[e.length - 1]),
              function () {
                document.removeEventListener('keydown', d), window.removeEventListener('resize', f);
              }
            );
          }, []);
          var m = (0, r.useRef)();
          return (
            (0, De.t$)(m, function () {
              return s(!1);
            }),
            r.createElement(
              Ve,
              null,
              r.createElement(i.q, null, r.createElement('body', { className: l ? 'blur' : '' })),
              r.createElement(
                'div',
                { ref: m },
                r.createElement(
                  Ye,
                  {
                    onClick: function () {
                      return s(!l);
                    },
                    menuOpen: l,
                    ref: c,
                    'aria-label': 'Menu',
                  },
                  r.createElement(
                    'div',
                    { className: 'ham-box' },
                    r.createElement('div', { className: 'ham-box-inner' }),
                  ),
                ),
                r.createElement(
                  Ue,
                  { menuOpen: l, 'aria-hidden': !l, tabIndex: l ? 1 : -1 },
                  r.createElement(
                    'nav',
                    { ref: u },
                    _e.navLinks &&
                      r.createElement(
                        'ol',
                        null,
                        _e.navLinks.map(function (e, t) {
                          var n = e.url,
                            i = e.name;
                          return r.createElement(
                            'li',
                            { key: t },
                            r.createElement(
                              o.Link,
                              {
                                to: n,
                                onClick: function () {
                                  return s(!1);
                                },
                              },
                              i,
                            ),
                          );
                        }),
                      ),
                    r.createElement(
                      'a',
                      { href: '/resume.pdf', className: 'resume-link' },
                      'Resume',
                    ),
                  ),
                ),
              ),
            )
          );
        },
        Qe = c.default.div.withConfig({
          displayName: 'side__StyledSideElement',
          componentId: 'sc-xw3l1-0',
        })(
          [
            'width:40px;position:fixed;bottom:0;left:',
            ';right:',
            ';z-index:10;color:var(--light-slate);@media (max-width:1080px){left:',
            ';right:',
            ';}@media (max-width:768px){display:none;}',
          ],
          function (e) {
            return 'left' === e.orientation ? '40px' : 'auto';
          },
          function (e) {
            return 'left' === e.orientation ? 'auto' : '40px';
          },
          function (e) {
            return 'left' === e.orientation ? '20px' : 'auto';
          },
          function (e) {
            return 'left' === e.orientation ? 'auto' : '20px';
          },
        ),
        $e = function (e) {
          var t = e.children,
            n = e.isHome,
            i = e.orientation,
            a = (0, r.useState)(!n),
            o = a[0],
            l = a[1],
            s = (0, De.Tb)();
          return (
            (0, r.useEffect)(function () {
              if (n && !s) {
                var e = setTimeout(function () {
                  return l(!0);
                }, Fe.Cs);
                return function () {
                  return clearTimeout(e);
                };
              }
            }, []),
            r.createElement(
              Qe,
              { orientation: i },
              s
                ? r.createElement(r.Fragment, null, t)
                : r.createElement(
                    Pe.Z,
                    { component: null },
                    o &&
                      r.createElement(
                        Re.Z,
                        { classNames: n ? 'fade' : '', timeout: n ? Fe.Cs : 0 },
                        t,
                      ),
                  ),
            )
          );
        },
        Je = c.default.ul.withConfig({
          displayName: 'social__StyledSocialList',
          componentId: 'sc-1lacjzq-0',
        })([
          "display:flex;flex-direction:column;align-items:center;margin:0;padding:0;list-style:none;&:after{content:'';display:block;width:1px;height:90px;margin:0 auto;background-color:var(--light-slate);}li{&:last-of-type{margin-bottom:20px;}a{padding:10px;&:hover,&:focus{transform:translateY(-3px);}svg{width:20px;height:20px;}}}",
        ]),
        Ke = function (e) {
          var t = e.isHome;
          return r.createElement(
            $e,
            { isHome: t, orientation: 'left' },
            r.createElement(
              Je,
              null,
              _e.socialMedia &&
                _e.socialMedia.map(function (e, t) {
                  var n = e.url,
                    i = e.name;
                  return r.createElement(
                    'li',
                    { key: t },
                    r.createElement(
                      'a',
                      { href: n, 'aria-label': i, target: '_blank', rel: 'noreferrer' },
                      r.createElement(ze.JO, { name: i }),
                    ),
                  );
                }),
            ),
          );
        },
        Xe = c.default.div.withConfig({
          displayName: 'email__StyledLinkWrapper',
          componentId: 'sc-oj2cg-0',
        })([
          "display:flex;flex-direction:column;align-items:center;position:relative;&:after{content:'';display:block;width:1px;height:90px;margin:0 auto;background-color:var(--light-slate);}a{margin:20px auto;padding:10px;font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:var(--fz-lg);letter-spacing:0.1em;writing-mode:vertical-rl;&:hover,&:focus{transform:translateY(-3px);}}",
        ]),
        et = function (e) {
          var t = e.isHome;
          return r.createElement(
            $e,
            { isHome: t, orientation: 'right' },
            r.createElement(
              Xe,
              null,
              r.createElement('a', { href: 'mailto:' + _e.email }, _e.email),
            ),
          );
        },
        tt = c.default.footer.withConfig({
          displayName: 'footer__StyledFooter',
          componentId: 'sc-iyx5j4-0',
        })(
          [
            '',
            ';flex-direction:column;height:auto;min-height:70px;padding:15px;text-align:center;',
          ],
          function (e) {
            return e.theme.mixins.flexCenter;
          },
        ),
        nt = c.default.div.withConfig({
          displayName: 'footer__StyledSocialLinks',
          componentId: 'sc-iyx5j4-1',
        })(
          [
            'display:none;@media (max-width:768px){display:block;width:100%;max-width:270px;margin:0 auto 10px;color:var(--light-slate);}ul{',
            ';padding:0;margin:0;list-style:none;a{padding:10px;svg{width:20px;height:20px;}}}',
          ],
          function (e) {
            return e.theme.mixins.flexBetween;
          },
        ),
        rt = c.default.div.withConfig({
          displayName: 'footer__StyledCredit',
          componentId: 'sc-iyx5j4-2',
        })([
          'color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1;a{padding:10px;}.github-stats{margin-top:10px;& > span{display:inline-flex;align-items:center;margin:0 7px;}svg{display:inline-block;margin-right:5px;width:14px;height:14px;}}',
        ]),
        it = function () {
          return r.createElement(
            tt,
            null,
            r.createElement(
              nt,
              null,
              r.createElement(
                'ul',
                null,
                _e.socialMedia &&
                  _e.socialMedia.map(function (e, t) {
                    var n = e.name,
                      i = e.url;
                    return r.createElement(
                      'li',
                      { key: t },
                      r.createElement(
                        'a',
                        { href: i, 'aria-label': n },
                        r.createElement(ze.JO, { name: n }),
                      ),
                    );
                  }),
              ),
            ),
            r.createElement(
              rt,
              { tabindex: '-1' },
              r.createElement('div', null, 'Built by Light Amor'),
              r.createElement(
                'div',
                null,
                'Credit: ',
                r.createElement('a', { href: 'https://brittanychiang.com' }, 'Brittany Chiang'),
                ' ',
              ),
            ),
          );
        },
        at = c.default.section.withConfig({
          displayName: 'hero__StyledHeroSection',
          componentId: 'sc-14qg7ye-0',
        })(
          [
            '',
            ';flex-direction:column;align-items:flex-start;min-height:100vh;padding:0;@media (max-width:480px) and (min-height:700px){padding-bottom:10vh;}h1{margin:0 0 30px 4px;color:var(--green);font-family:var(--font-mono);font-size:clamp(var(--fz-sm),5vw,var(--fz-md));font-weight:400;@media (max-width:480px){margin:0 0 20px 2px;}}h3{margin-top:10px;color:var(--slate);line-height:0.9;}p{margin:20px 0 0;max-width:540px;}.email-link{',
            ';margin-top:50px;}',
          ],
          function (e) {
            return e.theme.mixins.flexCenter;
          },
          function (e) {
            return e.theme.mixins.bigButton;
          },
        ),
        ot = function () {
          var e = (0, r.useState)(!1),
            t = e[0],
            n = e[1],
            i = (0, De.Tb)();
          (0, r.useEffect)(function () {
            if (!i) {
              var e = setTimeout(function () {
                return n(!0);
              }, Fe.fb);
              return function () {
                return clearTimeout(e);
              };
            }
          }, []);
          var a = [
            r.createElement('h1', null, 'Hiya, my name is'),
            r.createElement('h2', { className: 'big-heading' }, 'Light Amor.'),
            r.createElement(
              'h3',
              { className: 'big-heading' },
              'I build next generation web tech.',
            ),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                'p',
                null,
                'I am a full-stack web and blockchain developer who builds clients impressive, modern software and digital products. As an experienced developer, I am used to building custom websites and apps from scratch. But I also can focus on front-end, back-end, or giving existing code a facelift. I geek out on astrophysics and learning new programming languages. Programming languages are tools. It takes many tools to build impressively.',
              ),
            ),
            r.createElement(
              'a',
              {
                className: 'email-link',
                href: 'mailto:LightAmor@pm.me',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Get In Touch',
            ),
          ];
          return r.createElement(
            at,
            null,
            i
              ? r.createElement(
                  r.Fragment,
                  null,
                  a.map(function (e, t) {
                    return r.createElement('div', { key: t }, e);
                  }),
                )
              : r.createElement(
                  Pe.Z,
                  { component: null },
                  t &&
                    a.map(function (e, t) {
                      return r.createElement(
                        Re.Z,
                        { key: t, classNames: 'fadeup', timeout: Fe.Cs },
                        r.createElement('div', { style: { transitionDelay: t + 1 + '00ms' } }, e),
                      );
                    }),
                ),
          );
        },
        lt = n(6125),
        st = n(355),
        ct = c.default.section.withConfig({
          displayName: 'about__StyledAboutSection',
          componentId: 'sc-hp07uu-0',
        })([
          'max-width:900px;.inner{display:grid;grid-template-columns:3fr 2fr;grid-gap:50px;@media (max-width:768px){display:block;}}',
        ]),
        ut = c.default.div.withConfig({
          displayName: 'about__StyledText',
          componentId: 'sc-hp07uu-1',
        })([
          "ul.skills-list{display:grid;grid-template-columns:repeat(2,minmax(140px,200px));grid-gap:0 10px;padding:0;margin:20px 0 0 0;overflow:hidden;list-style:none;li{position:relative;margin-bottom:10px;padding-left:20px;font-family:var(--font-mono);font-size:var(--fz-xs);&:before{content:'▹';position:absolute;left:0;color:var(--green);font-size:var(--fz-sm);line-height:12px;}}}",
        ]),
        dt = c.default.div.withConfig({
          displayName: 'about__StyledPic',
          componentId: 'sc-hp07uu-2',
        })(
          [
            'position:relative;max-width:300px;@media (max-width:768px){margin:50px auto 0;width:70%;}.wrapper{',
            ";display:block;position:relative;width:100%;border-radius:var(--border-radius);background-color:var(--green);&:hover,&:focus{background:transparent;outline:0;&:after{top:15px;left:15px;}.img{filter:none;mix-blend-mode:normal;}}.img{position:relative;border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);transition:var(--transition);}&:before,&:after{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:var(--border-radius);transition:var(--transition);}&:before{top:0;left:0;background-color:var(--navy);mix-blend-mode:screen;}&:after{border:2px solid var(--green);top:20px;left:20px;z-index:-1;}}",
          ],
          function (e) {
            return e.theme.mixins.boxShadow;
          },
        ),
        ft = function () {
          var e = (0, r.useRef)(null),
            t = (0, De.Tb)();
          (0, r.useEffect)(function () {
            t || st.Z.reveal(e.current, (0, _e.srConfig)());
          }, []);
          var i = [
            'JavaScript',
            'Web3',
            'React',
            'Solidity',
            'Next.js',
            'Eathers.js',
            'Node.js',
            'Ethereum',
            'TypeScript',
            'Hardhat',
            'Redux',
            'Three.js',
          ];
          return r.createElement(
            ct,
            { id: 'about', ref: e },
            r.createElement('h2', { className: 'numbered-heading' }, 'About Me'),
            r.createElement(
              'div',
              { className: 'inner' },
              r.createElement(
                ut,
                null,
                r.createElement(
                  'div',
                  null,
                  r.createElement(
                    'p',
                    null,
                    'Hiya! My name is Light (they / them). I am a passionate technology futurist, software architect, and software engineer who loves to push the limits of technology and deliver memorable experiences at the intersection of "Human + Computer."',
                  ),
                  r.createElement(
                    'p',
                    null,
                    'I have had the privilege of working with start-ups, film/tv production studios, Fortune 150 companies, the U.S. Department of State, and one of the top MBA programs in the United States, in the name of developing stellar products, services, and solutions.',
                  ),
                  r.createElement(
                    'p',
                    null,
                    'Here are a few technologies I have been working with recently:',
                  ),
                ),
                r.createElement(
                  'ul',
                  { className: 'skills-list' },
                  i &&
                    i.map(function (e, t) {
                      return r.createElement('li', { key: t }, e);
                    }),
                ),
              ),
              r.createElement(
                dt,
                null,
                r.createElement(
                  'div',
                  { className: 'wrapper' },
                  r.createElement(lt.S, {
                    className: 'img',
                    src: '../../images/me3.jpg',
                    width: 500,
                    quality: 95,
                    formats: ['AUTO', 'WEBP', 'AVIF'],
                    alt: 'Headshot',
                    __imageData: n(504),
                  }),
                ),
              ),
            ),
          );
        },
        mt = c.default.section.withConfig({
          displayName: 'jobs__StyledJobsSection',
          componentId: 'sc-12vzq2-0',
        })([
          'max-width:700px;.inner{display:flex;@media (max-width:600px){display:block;}@media (min-width:700px){min-height:340px;}}',
        ]),
        pt = c.default.div.withConfig({
          displayName: 'jobs__StyledTabList',
          componentId: 'sc-12vzq2-1',
        })([
          'position:relative;z-index:3;width:max-content;padding:0;margin:0;list-style:none;@media (max-width:600px){display:flex;overflow-x:auto;width:calc(100% + 100px);padding-left:50px;margin-left:-50px;margin-bottom:30px;}@media (max-width:480px){width:calc(100% + 50px);padding-left:25px;margin-left:-25px;}li{&:first-of-type{@media (max-width:600px){margin-left:50px;}@media (max-width:480px){margin-left:25px;}}&:last-of-type{@media (max-width:600px){padding-right:50px;}@media (max-width:480px){padding-right:25px;}}}',
        ]),
        ht = c.default.button.withConfig({
          displayName: 'jobs__StyledTabButton',
          componentId: 'sc-12vzq2-2',
        })(
          [
            '',
            ';display:flex;align-items:center;width:100%;height:var(--tab-height);padding:0 20px 2px;border-left:2px solid var(--lightest-navy);background-color:transparent;color:',
            ';font-family:var(--font-mono);font-size:var(--fz-xs);text-align:left;white-space:nowrap;@media (max-width:768px){padding:0 15px 2px;}@media (max-width:600px){',
            ';min-width:120px;padding:0 15px;border-left:0;border-bottom:2px solid var(--lightest-navy);text-align:center;}&:hover,&:focus{background-color:var(--light-navy);}',
          ],
          function (e) {
            return e.theme.mixins.link;
          },
          function (e) {
            return e.isActive ? 'var(--green)' : 'var(--slate)';
          },
          function (e) {
            return e.theme.mixins.flexCenter;
          },
        ),
        gt = c.default.div.withConfig({
          displayName: 'jobs__StyledHighlight',
          componentId: 'sc-12vzq2-3',
        })(
          [
            'position:absolute;top:0;left:0;z-index:10;width:2px;height:var(--tab-height);border-radius:var(--border-radius);background:var(--green);transform:translateY(calc(',
            ' * var(--tab-height)));transition:transform 0.25s cubic-bezier(0.645,0.045,0.355,1);transition-delay:0.1s;@media (max-width:600px){top:auto;bottom:0;width:100%;max-width:var(--tab-width);height:2px;margin-left:50px;transform:translateX(calc(',
            ' * var(--tab-width)));}@media (max-width:480px){margin-left:25px;}',
          ],
          function (e) {
            return e.activeTabId;
          },
          function (e) {
            return e.activeTabId;
          },
        ),
        vt = c.default.div.withConfig({
          displayName: 'jobs__StyledTabPanels',
          componentId: 'sc-12vzq2-4',
        })([
          'position:relative;width:100%;margin-left:20px;@media (max-width:600px){margin-left:0;}',
        ]),
        bt = c.default.div.withConfig({
          displayName: 'jobs__StyledTabPanel',
          componentId: 'sc-12vzq2-5',
        })(
          [
            'width:100%;height:auto;padding:10px 5px;ul{',
            ';}h3{margin-bottom:2px;font-size:var(--fz-xxl);font-weight:500;line-height:1.3;.company{color:var(--green);}}.range{margin-bottom:25px;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);}',
          ],
          function (e) {
            return e.theme.mixins.fancyList;
          },
        ),
        xt = function () {
          var e = (0, o.useStaticQuery)('604461682').jobs.edges,
            t = (0, r.useState)(0),
            n = t[0],
            i = t[1],
            a = (0, r.useState)(null),
            l = a[0],
            s = a[1],
            c = (0, r.useRef)([]),
            u = (0, r.useRef)(null),
            d = (0, De.Tb)();
          (0, r.useEffect)(function () {
            d || st.Z.reveal(u.current, (0, _e.srConfig)());
          }, []);
          (0, r.useEffect)(
            function () {
              c.current[l]
                ? c.current[l].focus()
                : (l >= c.current.length && s(0), l < 0 && s(c.current.length - 1));
            },
            [l],
          );
          return r.createElement(
            mt,
            { id: 'jobs', ref: u },
            r.createElement('h2', { className: 'numbered-heading' }, 'Where I’ve Worked'),
            r.createElement(
              'div',
              { className: 'inner' },
              r.createElement(
                pt,
                {
                  role: 'tablist',
                  'aria-label': 'Job tabs',
                  onKeyDown: function (e) {
                    return (function (e) {
                      switch (e.key) {
                        case Fe.nx.ARROW_UP:
                          e.preventDefault(), s(l - 1);
                          break;
                        case Fe.nx.ARROW_DOWN:
                          e.preventDefault(), s(l + 1);
                      }
                    })(e);
                  },
                },
                e &&
                  e.map(function (e, t) {
                    var a = e.node.frontmatter.company;
                    return r.createElement(
                      ht,
                      {
                        key: t,
                        isActive: n === t,
                        onClick: function () {
                          return i(t);
                        },
                        ref: function (e) {
                          return (c.current[t] = e);
                        },
                        id: 'tab-' + t,
                        role: 'tab',
                        tabIndex: n === t ? '0' : '-1',
                        'aria-selected': n === t,
                        'aria-controls': 'panel-' + t,
                      },
                      r.createElement('span', null, a),
                    );
                  }),
                r.createElement(gt, { activeTabId: n }),
              ),
              r.createElement(
                vt,
                null,
                e &&
                  e.map(function (e, t) {
                    var i = e.node,
                      a = i.frontmatter,
                      o = i.html,
                      l = a.title,
                      s = a.url,
                      c = a.company,
                      u = a.range;
                    return r.createElement(
                      Re.Z,
                      { key: t, in: n === t, timeout: 250, classNames: 'fade' },
                      r.createElement(
                        bt,
                        {
                          id: 'panel-' + t,
                          role: 'tabpanel',
                          tabIndex: n === t ? '0' : '-1',
                          'aria-labelledby': 'tab-' + t,
                          'aria-hidden': n !== t,
                          hidden: n !== t,
                        },
                        r.createElement(
                          'h3',
                          null,
                          r.createElement('span', null, l),
                          r.createElement(
                            'span',
                            { className: 'company' },
                            ' @ ',
                            r.createElement('a', { href: s, className: 'inline-link' }, c),
                          ),
                        ),
                        r.createElement('p', { className: 'range' }, u),
                        r.createElement('div', { dangerouslySetInnerHTML: { __html: o } }),
                      ),
                    );
                  }),
              ),
            ),
          );
        },
        yt = c.default.ul.withConfig({
          displayName: 'featured__StyledProjectsGrid',
          componentId: 'sc-17sbt9p-0',
        })(['', ';a{position:relative;z-index:1;}'], function (e) {
          return e.theme.mixins.resetList;
        }),
        wt = c.default.li.withConfig({
          displayName: 'featured__StyledProject',
          componentId: 'sc-17sbt9p-1',
        })(
          [
            'position:relative;display:grid;grid-gap:10px;grid-template-columns:repeat(12,1fr);align-items:center;@media (max-width:768px){',
            ";}&:not(:last-of-type){margin-bottom:100px;@media (max-width:768px){margin-bottom:70px;}@media (max-width:480px){margin-bottom:30px;}}&:nth-of-type(odd){.project-content{grid-column:7 / -1;text-align:right;@media (max-width:1080px){grid-column:5 / -1;}@media (max-width:768px){grid-column:1 / -1;padding:40px 40px 30px;text-align:left;}@media (max-width:480px){padding:25px 25px 20px;}}.project-tech-list{justify-content:flex-end;@media (max-width:768px){justify-content:flex-start;}li{margin:0 0 5px 20px;@media (max-width:768px){margin:0 10px 5px 0;}}}.project-links{justify-content:flex-end;margin-left:0;margin-right:-10px;@media (max-width:768px){justify-content:flex-start;margin-left:-10px;margin-right:0;}}.project-image{grid-column:1 / 8;@media (max-width:768px){grid-column:1 / -1;}}}.project-content{position:relative;grid-column:1 / 7;grid-row:1 / -1;@media (max-width:1080px){grid-column:1 / 9;}@media (max-width:768px){display:flex;flex-direction:column;justify-content:center;height:100%;grid-column:1 / -1;padding:40px 40px 30px;z-index:5;}@media (max-width:480px){padding:30px 25px 20px;}}.project-overline{margin:10px 0;color:var(--green);font-family:var(--font-mono);font-size:var(--fz-xs);font-weight:400;}.project-title{color:var(--lightest-slate);font-size:clamp(24px,5vw,28px);@media (min-width:768px){margin:0 0 20px;}@media (max-width:768px){color:var(--white);a{position:static;&:before{content:'';display:block;position:absolute;z-index:0;width:100%;height:100%;top:0;left:0;}}}}.project-description{",
            ';position:relative;z-index:2;padding:25px;border-radius:var(--border-radius);background-color:var(--light-navy);color:var(--light-slate);font-size:var(--fz-lg);@media (max-width:768px){padding:20px 0;background-color:transparent;box-shadow:none;&:hover{box-shadow:none;}}a{',
            ';}strong{color:var(--white);font-weight:normal;}}.project-tech-list{display:flex;flex-wrap:wrap;position:relative;z-index:2;margin:25px 0 10px;padding:0;list-style:none;li{margin:0 20px 5px 0;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);white-space:nowrap;}@media (max-width:768px){margin:10px 0;li{margin:0 10px 5px 0;color:var(--lightest-slate);}}}.project-links{display:flex;align-items:center;position:relative;margin-top:10px;margin-left:-10px;color:var(--lightest-slate);a{',
            ';padding:10px;&.external{svg{width:22px;height:22px;margin-top:-4px;}}svg{width:20px;height:20px;}}.cta{',
            ';margin:10px;}}.project-image{',
            ";grid-column:6 / -1;grid-row:1 / -1;position:relative;z-index:1;@media (max-width:768px){grid-column:1 / -1;height:100%;opacity:0.25;}a{width:100%;height:100%;background-color:var(--green);border-radius:var(--border-radius);vertical-align:middle;&:hover,&:focus{background:transparent;outline:0;&:before,.img{background:transparent;filter:none;}}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;transition:var(--transition);background-color:var(--navy);mix-blend-mode:screen;}}.img{border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1) brightness(90%);@media (max-width:768px){object-fit:cover;width:auto;height:100%;filter:grayscale(100%) contrast(1) brightness(50%);}}}",
          ],
          function (e) {
            return e.theme.mixins.boxShadow;
          },
          function (e) {
            return e.theme.mixins.boxShadow;
          },
          function (e) {
            return e.theme.mixins.inlineLink;
          },
          function (e) {
            return e.theme.mixins.flexCenter;
          },
          function (e) {
            return e.theme.mixins.smallButton;
          },
          function (e) {
            return e.theme.mixins.boxShadow;
          },
        ),
        Et = function () {
          var e = (0, o.useStaticQuery)('2681795072').featured.edges.filter(function (e) {
              return e.node;
            }),
            t = (0, r.useRef)(null),
            n = (0, r.useRef)([]),
            i = (0, De.Tb)();
          return (
            (0, r.useEffect)(function () {
              i ||
                (st.Z.reveal(t.current, (0, _e.srConfig)()),
                n.current.forEach(function (e, t) {
                  return st.Z.reveal(e, (0, _e.srConfig)(100 * t));
                }));
            }, []),
            r.createElement(
              'section',
              { id: 'projects' },
              r.createElement(
                'h2',
                { className: 'numbered-heading', ref: t },
                'Some Things I’ve Built',
              ),
              r.createElement(
                yt,
                null,
                e &&
                  e.map(function (e, t) {
                    var i = e.node,
                      a = i.frontmatter,
                      o = i.html,
                      l = a.external,
                      s = a.title,
                      c = a.tech,
                      u = a.github,
                      d = a.cover,
                      f = a.cta,
                      m = (0, lt.d)(d);
                    return r.createElement(
                      wt,
                      {
                        key: t,
                        ref: function (e) {
                          return (n.current[t] = e);
                        },
                      },
                      r.createElement(
                        'div',
                        { className: 'project-content' },
                        r.createElement(
                          'div',
                          null,
                          r.createElement(
                            'p',
                            { className: 'project-overline' },
                            'Featured Project',
                          ),
                          r.createElement(
                            'h3',
                            { className: 'project-title' },
                            r.createElement('a', { href: l }, s),
                          ),
                          r.createElement('div', {
                            className: 'project-description',
                            dangerouslySetInnerHTML: { __html: o },
                          }),
                          c.length &&
                            r.createElement(
                              'ul',
                              { className: 'project-tech-list' },
                              c.map(function (e, t) {
                                return r.createElement('li', { key: t }, e);
                              }),
                            ),
                          r.createElement(
                            'div',
                            { className: 'project-links' },
                            f &&
                              r.createElement(
                                'a',
                                { href: f, 'aria-label': 'Course Link', className: 'cta' },
                                'Learn More',
                              ),
                            u &&
                              r.createElement(
                                'a',
                                { href: u, 'aria-label': 'GitHub Link' },
                                r.createElement(ze.JO, { name: 'GitHub' }),
                              ),
                            l &&
                              !f &&
                              r.createElement(
                                'a',
                                { href: l, 'aria-label': 'External Link', className: 'external' },
                                r.createElement(ze.JO, { name: 'External' }),
                              ),
                          ),
                        ),
                      ),
                      r.createElement(
                        'div',
                        { className: 'project-image' },
                        r.createElement(
                          'a',
                          { href: l || u || '#' },
                          r.createElement(lt.G, { image: m, alt: s, className: 'img' }),
                        ),
                      ),
                    );
                  }),
              ),
            )
          );
        },
        kt =
          (c.default.section.withConfig({
            displayName: 'projects__StyledProjectsSection',
            componentId: 'sc-12c1q4g-0',
          })(
            [
              'display:flex;flex-direction:column;align-items:center;h2{font-size:clamp(24px,5vw,var(--fz-heading));}.archive-link{font-family:var(--font-mono);font-size:var(--fz-sm);&:after{bottom:0.1em;}}.projects-grid{',
              ';display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;margin-top:50px;@media (max-width:1080px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}}.more-button{',
              ';margin:80px auto 0;}',
            ],
            function (e) {
              return e.theme.mixins.resetList;
            },
            function (e) {
              return e.theme.mixins.button;
            },
          ),
          c.default.li.withConfig({
            displayName: 'projects__StyledProject',
            componentId: 'sc-12c1q4g-1',
          })(
            [
              'position:relative;cursor:default;transition:var(--transition);@media (prefers-reduced-motion:no-preference){&:hover,&:focus-within{.project-inner{transform:translateY(-7px);}}}a{position:relative;z-index:1;}.project-inner{',
              ';',
              ';flex-direction:column;align-items:flex-start;position:relative;height:100%;padding:2rem 1.75rem;border-radius:var(--border-radius);background-color:var(--light-navy);transition:var(--transition);}.project-top{',
              ';margin-bottom:35px;.folder{color:var(--green);svg{width:40px;height:40px;}}.project-links{display:flex;align-items:center;margin-right:-10px;color:var(--light-slate);a{',
              ";padding:5px 7px;&.external{svg{width:22px;height:22px;margin-top:-4px;}}svg{width:20px;height:20px;}}}}.project-title{margin:0 0 10px;color:var(--lightest-slate);font-size:var(--fz-xxl);a{position:static;&:before{content:'';display:block;position:absolute;z-index:0;width:100%;height:100%;top:0;left:0;}}}.project-description{color:var(--light-slate);font-size:17px;a{",
              ';}}.project-tech-list{display:flex;align-items:flex-end;flex-grow:1;flex-wrap:wrap;padding:0;margin:20px 0 0 0;list-style:none;li{font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1.75;&:not(:last-of-type){margin-right:15px;}}}',
            ],
            function (e) {
              return e.theme.mixins.boxShadow;
            },
            function (e) {
              return e.theme.mixins.flexBetween;
            },
            function (e) {
              return e.theme.mixins.flexBetween;
            },
            function (e) {
              return e.theme.mixins.flexCenter;
            },
            function (e) {
              return e.theme.mixins.inlineLink;
            },
          ),
          c.default.section.withConfig({
            displayName: 'contact__StyledContactSection',
            componentId: 'sc-1najf4-0',
          })(
            [
              'max-width:600px;margin:0 auto 100px;text-align:center;@media (max-width:768px){margin:0 auto 50px;}.overline{display:block;margin-bottom:20px;color:var(--green);font-family:var(--font-mono);font-size:var(--fz-md);font-weight:400;&:before{bottom:0;font-size:var(--fz-sm);}&:after{display:none;}}.title{font-size:clamp(40px,5vw,60px);}.email-link{',
              ';margin-top:50px;}',
            ],
            function (e) {
              return e.theme.mixins.bigButton;
            },
          )),
        Ct = function () {
          var e = (0, r.useRef)(null),
            t = (0, De.Tb)();
          return (
            (0, r.useEffect)(function () {
              t || st.Z.reveal(e.current, (0, _e.srConfig)());
            }, []),
            r.createElement(
              kt,
              { id: 'contact', ref: e },
              r.createElement('h2', { className: 'numbered-heading overline' }, 'What’s Next?'),
              r.createElement('h2', { className: 'title' }, 'Get In Touch'),
              r.createElement(
                'p',
                null,
                'Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!',
              ),
              r.createElement(
                'a',
                { className: 'email-link', href: 'mailto:' + _e.email },
                'Say Hello',
              ),
            )
          );
        };
    },
    537: function (e) {
      e.exports = {
        email: 'LightAmor@pm.me',
        socialMedia: [
          { name: 'Linkedin', url: 'https://www.linkedin.com/in/lightamor' },
          { name: 'GitHub', url: 'https://github.com/chinalantern' },
          { name: 'AngelList', url: 'https://angel.co/u/light-amor-1' },
        ],
        navLinks: [
          { name: 'About', url: '/#about' },
          { name: 'Experience', url: '/#jobs' },
          { name: 'Work', url: '/#projects' },
          { name: 'Contact', url: '/#contact' },
        ],
        colors: { green: '#64ffda', navy: '#0a192f', darkNavy: '#020c1b' },
        srConfig: function (e, t) {
          return (
            void 0 === e && (e = 200),
            void 0 === t && (t = 0.25),
            {
              origin: 'bottom',
              distance: '20px',
              duration: 500,
              delay: e,
              rotate: { x: 0, y: 0, z: 0 },
              opacity: 0,
              scale: 1,
              easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
              mobile: !0,
              reset: !1,
              useDelay: 'always',
              viewFactor: t,
              viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
            }
          );
        },
      };
    },
    3082: function (e, t, n) {
      'use strict';
      n.d(t, {
        t$: function () {
          return i;
        },
        Tb: function () {
          return s;
        },
        C7: function () {
          return c;
        },
      });
      var r = n(7294),
        i = function (e, t) {
          (0, r.useEffect)(
            function () {
              var n = function (n) {
                e.current && !e.current.contains(n.target) && t(n);
              };
              return (
                document.addEventListener('mousedown', n),
                document.addEventListener('touchstart', n),
                function () {
                  document.removeEventListener('mousedown', n),
                    document.removeEventListener('touchstart', n);
                }
              );
            },
            [e, t],
          );
        },
        a = '(prefers-reduced-motion: no-preference)',
        o = 'undefined' == typeof window,
        l = function () {
          return !!o || !window.matchMedia(a).matches;
        };
      var s = function () {
          var e = (0, r.useState)(l),
            t = e[0],
            n = e[1];
          return (
            (0, r.useEffect)(function () {
              var e = window.matchMedia(a),
                t = function (e) {
                  n(!e.matches);
                };
              return (
                e.addListener(t),
                function () {
                  e.removeListener(t);
                }
              );
            }, []),
            t
          );
        },
        c = function (e) {
          var t = void 0 === e ? {} : e,
            n = t.initialDirection,
            i = t.thresholdPixels,
            a = t.off,
            o = (0, r.useState)(n),
            l = o[0],
            s = o[1];
          return (
            (0, r.useEffect)(
              function () {
                var e = i || 0,
                  t = window.pageYOffset,
                  r = !1,
                  o = function () {
                    var n = window.pageYOffset;
                    Math.abs(n - t) < e || (s(n > t ? 'down' : 'up'), (t = n > 0 ? n : 0)),
                      (r = !1);
                  },
                  l = function () {
                    r || (window.requestAnimationFrame(o), (r = !0));
                  };
                return (
                  a ? s(n) : window.addEventListener('scroll', l),
                  function () {
                    return window.removeEventListener('scroll', l);
                  }
                );
              },
              [n, i, a],
            ),
            l
          );
        };
    },
    4165: function (e, t, n) {
      'use strict';
      n.d(t, {
        Cs: function () {
          return i;
        },
        fb: function () {
          return r;
        },
        nx: function () {
          return a;
        },
      });
      var r = 1e3,
        i = 2e3,
        a = {
          ARROW_LEFT: 'ArrowLeft',
          ARROW_LEFT_IE11: 'Left',
          ARROW_RIGHT: 'ArrowRight',
          ARROW_RIGHT_IE11: 'Right',
          ARROW_UP: 'ArrowUp',
          ARROW_UP_IE11: 'Up',
          ARROW_DOWN: 'ArrowDown',
          ARROW_DOWN_IE11: 'Down',
          ESCAPE: 'Escape',
          ESCAPE_IE11: 'Esc',
          TAB: 'Tab',
          SPACE: ' ',
          SPACE_IE11: 'Spacebar',
          ENTER: 'Enter',
        };
    },
    355: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return te;
        },
      });
      var r = function (e) {
        return 'object' == typeof window.Node
          ? e instanceof window.Node
          : null !== e &&
              'object' == typeof e &&
              'number' == typeof e.nodeType &&
              'string' == typeof e.nodeName;
      };
      var i = function (e) {
        var t = Object.prototype.toString.call(e);
        return 'object' == typeof window.NodeList
          ? e instanceof window.NodeList
          : null !== e &&
              'object' == typeof e &&
              'number' == typeof e.length &&
              /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) &&
              (0 === e.length || r(e[0]));
      };
      var a = function (e, t) {
        if ((void 0 === t && (t = document), e instanceof Array)) return e.filter(r);
        if (r(e)) return [e];
        if (i(e)) return Array.prototype.slice.call(e);
        if ('string' == typeof e)
          try {
            var n = t.querySelectorAll(e);
            return Array.prototype.slice.call(n);
          } catch (a) {
            return [];
          }
        return [];
      };
      function o(e) {
        if (e.constructor !== Array) throw new TypeError('Expected array.');
        if (16 === e.length) return e;
        if (6 === e.length) {
          var t = l();
          return (
            (t[0] = e[0]),
            (t[1] = e[1]),
            (t[4] = e[2]),
            (t[5] = e[3]),
            (t[12] = e[4]),
            (t[13] = e[5]),
            t
          );
        }
        throw new RangeError('Expected array with either 6 or 16 values.');
      }
      function l() {
        for (var e = [], t = 0; t < 16; t++) t % 5 == 0 ? e.push(1) : e.push(0);
        return e;
      }
      function s(e, t) {
        for (var n = o(e), r = o(t), i = [], a = 0; a < 4; a++)
          for (var l = [n[a], n[a + 4], n[a + 8], n[a + 12]], s = 0; s < 4; s++) {
            var c = 4 * s,
              u = [r[c], r[c + 1], r[c + 2], r[c + 3]],
              d = l[0] * u[0] + l[1] * u[1] + l[2] * u[2] + l[3] * u[3];
            i[a + c] = d;
          }
        return i;
      }
      function c(e) {
        if ('string' == typeof e) {
          var t = e.match(/matrix(3d)?\(([^)]+)\)/);
          if (t) return o(t[2].split(', ').map(parseFloat));
        }
        return l();
      }
      function u(e) {
        var t = (Math.PI / 180) * e,
          n = l();
        return (n[0] = n[5] = Math.cos(t)), (n[1] = n[4] = Math.sin(t)), (n[4] *= -1), n;
      }
      function d(e, t) {
        var n = l();
        return (n[0] = e), (n[5] = 'number' == typeof t ? t : e), n;
      }
      var f,
        m =
          ((f = Date.now()),
          function (e) {
            var t = Date.now();
            t - f > 16
              ? ((f = t), e(t))
              : setTimeout(function () {
                  return m(e);
                }, 0);
          }),
        p =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          m,
        h = {
          delay: 0,
          distance: '0',
          duration: 600,
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
          interval: 0,
          opacity: 0,
          origin: 'bottom',
          rotate: { x: 0, y: 0, z: 0 },
          scale: 1,
          cleanup: !1,
          container: document.documentElement,
          desktop: !0,
          mobile: !0,
          reset: !1,
          useDelay: 'always',
          viewFactor: 0,
          viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
          afterReset: function () {},
          afterReveal: function () {},
          beforeReset: function () {},
          beforeReveal: function () {},
        };
      var g = {
        success: function () {
          document.documentElement.classList.add('sr'),
            document.body
              ? (document.body.style.height = '100%')
              : document.addEventListener('DOMContentLoaded', function () {
                  document.body.style.height = '100%';
                });
        },
        failure: function () {
          return (
            document.documentElement.classList.remove('sr'),
            {
              clean: function () {},
              destroy: function () {},
              reveal: function () {},
              sync: function () {},
              get noop() {
                return !0;
              },
            }
          );
        },
      };
      function v(e) {
        return (
          null !== e &&
          e instanceof Object &&
          (e.constructor === Object || '[object Object]' === Object.prototype.toString.call(e))
        );
      }
      function b(e, t) {
        if (v(e))
          return Object.keys(e).forEach(function (n) {
            return t(e[n], n, e);
          });
        if (e instanceof Array)
          return e.forEach(function (n, r) {
            return t(n, r, e);
          });
        throw new TypeError('Expected either an array or object literal.');
      }
      function x(e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
        if (this.constructor.debug && console) {
          var r = '%cScrollReveal: ' + e;
          t.forEach(function (e) {
            return (r += '\n — ' + e);
          }),
            console.log(r, 'color: #ea654b;');
        }
      }
      function y() {
        var e = this,
          t = { active: [], stale: [] },
          n = { active: [], stale: [] },
          r = { active: [], stale: [] };
        try {
          b(a('[data-sr-id]'), function (e) {
            var n = parseInt(e.getAttribute('data-sr-id'));
            t.active.push(n);
          });
        } catch (i) {
          throw i;
        }
        b(this.store.elements, function (e) {
          -1 === t.active.indexOf(e.id) && t.stale.push(e.id);
        }),
          b(t.stale, function (t) {
            return delete e.store.elements[t];
          }),
          b(this.store.elements, function (e) {
            -1 === r.active.indexOf(e.containerId) && r.active.push(e.containerId),
              e.hasOwnProperty('sequence') &&
                -1 === n.active.indexOf(e.sequence.id) &&
                n.active.push(e.sequence.id);
          }),
          b(this.store.containers, function (e) {
            -1 === r.active.indexOf(e.id) && r.stale.push(e.id);
          }),
          b(r.stale, function (t) {
            var n = e.store.containers[t].node;
            n.removeEventListener('scroll', e.delegate),
              n.removeEventListener('resize', e.delegate),
              delete e.store.containers[t];
          }),
          b(this.store.sequences, function (e) {
            -1 === n.active.indexOf(e.id) && n.stale.push(e.id);
          }),
          b(n.stale, function (t) {
            return delete e.store.sequences[t];
          });
      }
      var w = (function () {
        var e = {},
          t = document.documentElement.style;
        function n(n, r) {
          if ((void 0 === r && (r = t), n && 'string' == typeof n)) {
            if (e[n]) return e[n];
            if ('string' == typeof r[n]) return (e[n] = n);
            if ('string' == typeof r['-webkit-' + n]) return (e[n] = '-webkit-' + n);
            throw new RangeError('Unable to find "' + n + '" style property.');
          }
          throw new TypeError('Expected a string.');
        }
        return (
          (n.clearCache = function () {
            return (e = {});
          }),
          n
        );
      })();
      function E(e) {
        var t = window.getComputedStyle(e.node),
          n = t.position,
          r = e.config,
          i = {},
          a = (e.node.getAttribute('style') || '').match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
        (i.computed = a
          ? a
              .map(function (e) {
                return e.trim();
              })
              .join('; ') + ';'
          : ''),
          (i.generated = a.some(function (e) {
            return e.match(/visibility\s?:\s?visible/i);
          })
            ? i.computed
            : a
                .concat(['visibility: visible'])
                .map(function (e) {
                  return e.trim();
                })
                .join('; ') + ';');
        var o,
          f,
          m,
          p = parseFloat(t.opacity),
          h = isNaN(parseFloat(r.opacity)) ? parseFloat(t.opacity) : parseFloat(r.opacity),
          g = {
            computed: p !== h ? 'opacity: ' + p + ';' : '',
            generated: p !== h ? 'opacity: ' + h + ';' : '',
          },
          v = [];
        if (parseFloat(r.distance)) {
          var b = 'top' === r.origin || 'bottom' === r.origin ? 'Y' : 'X',
            x = r.distance;
          ('top' !== r.origin && 'left' !== r.origin) || (x = /^-/.test(x) ? x.substr(1) : '-' + x);
          var y = x.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),
            E = y[0];
          switch (y[1]) {
            case 'em':
              x = parseInt(t.fontSize) * E;
              break;
            case 'px':
              x = E;
              break;
            case '%':
              x =
                'Y' === b
                  ? (e.node.getBoundingClientRect().height * E) / 100
                  : (e.node.getBoundingClientRect().width * E) / 100;
              break;
            default:
              throw new RangeError('Unrecognized or missing distance unit.');
          }
          'Y' === b
            ? v.push(
                (function (e) {
                  var t = l();
                  return (t[13] = e), t;
                })(x),
              )
            : v.push(
                (function (e) {
                  var t = l();
                  return (t[12] = e), t;
                })(x),
              );
        }
        r.rotate.x &&
          v.push(
            ((o = r.rotate.x),
            (f = (Math.PI / 180) * o),
            ((m = l())[5] = m[10] = Math.cos(f)),
            (m[6] = m[9] = Math.sin(f)),
            (m[9] *= -1),
            m),
          ),
          r.rotate.y &&
            v.push(
              (function (e) {
                var t = (Math.PI / 180) * e,
                  n = l();
                return (n[0] = n[10] = Math.cos(t)), (n[2] = n[8] = Math.sin(t)), (n[2] *= -1), n;
              })(r.rotate.y),
            ),
          r.rotate.z && v.push(u(r.rotate.z)),
          1 !== r.scale && (0 === r.scale ? v.push(d(2e-4)) : v.push(d(r.scale)));
        var k = {};
        if (v.length) {
          (k.property = w('transform')),
            (k.computed = { raw: t[k.property], matrix: c(t[k.property]) }),
            v.unshift(k.computed.matrix);
          var C = v.reduce(s);
          k.generated = {
            initial: k.property + ': matrix3d(' + C.join(', ') + ');',
            final: k.property + ': matrix3d(' + k.computed.matrix.join(', ') + ');',
          };
        } else k.generated = { initial: '', final: '' };
        var S = {};
        if (g.generated || k.generated.initial) {
          (S.property = w('transition')), (S.computed = t[S.property]), (S.fragments = []);
          var T = r.delay,
            O = r.duration,
            L = r.easing;
          g.generated &&
            S.fragments.push({
              delayed: 'opacity ' + O / 1e3 + 's ' + L + ' ' + T / 1e3 + 's',
              instant: 'opacity ' + O / 1e3 + 's ' + L + ' 0s',
            }),
            k.generated.initial &&
              S.fragments.push({
                delayed: k.property + ' ' + O / 1e3 + 's ' + L + ' ' + T / 1e3 + 's',
                instant: k.property + ' ' + O / 1e3 + 's ' + L + ' 0s',
              }),
            S.computed &&
              !S.computed.match(/all 0s|none 0s/) &&
              S.fragments.unshift({ delayed: S.computed, instant: S.computed });
          var A = S.fragments.reduce(
            function (e, t, n) {
              return (
                (e.delayed += 0 === n ? t.delayed : ', ' + t.delayed),
                (e.instant += 0 === n ? t.instant : ', ' + t.instant),
                e
              );
            },
            { delayed: '', instant: '' },
          );
          S.generated = {
            delayed: S.property + ': ' + A.delayed + ';',
            instant: S.property + ': ' + A.instant + ';',
          };
        } else S.generated = { delayed: '', instant: '' };
        return { inline: i, opacity: g, position: n, transform: k, transition: S };
      }
      function k(e, t) {
        t.split(';').forEach(function (t) {
          var n = t.split(':'),
            r = n[0],
            i = n.slice(1);
          r && i && (e.style[r.trim()] = i.join(':'));
        });
      }
      function C(e) {
        var t,
          n = this;
        try {
          b(a(e), function (e) {
            var r = e.getAttribute('data-sr-id');
            if (null !== r) {
              t = !0;
              var i = n.store.elements[r];
              i.callbackTimer && window.clearTimeout(i.callbackTimer.clock),
                k(i.node, i.styles.inline.generated),
                e.removeAttribute('data-sr-id'),
                delete n.store.elements[r];
            }
          });
        } catch (r) {
          return x.call(this, 'Clean failed.', r.message);
        }
        if (t)
          try {
            y.call(this);
          } catch (r) {
            return x.call(this, 'Clean failed.', r.message);
          }
      }
      function S() {
        var e = this;
        b(this.store.elements, function (e) {
          k(e.node, e.styles.inline.generated), e.node.removeAttribute('data-sr-id');
        }),
          b(this.store.containers, function (t) {
            var n = t.node === document.documentElement ? window : t.node;
            n.removeEventListener('scroll', e.delegate),
              n.removeEventListener('resize', e.delegate);
          }),
          (this.store = { containers: {}, elements: {}, history: [], sequences: {} });
      }
      function T(e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
        if (v(e))
          return (
            b(t, function (t) {
              b(t, function (t, n) {
                v(t) ? ((e[n] && v(e[n])) || (e[n] = {}), T(e[n], t)) : (e[n] = t);
              });
            }),
            e
          );
        throw new TypeError('Target must be an object literal.');
      }
      function O(e) {
        return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e);
      }
      var L,
        A =
          ((L = 0),
          function () {
            return L++;
          });
      function j() {
        var e = this;
        y.call(this),
          b(this.store.elements, function (e) {
            var t = [e.styles.inline.generated];
            e.visible
              ? (t.push(e.styles.opacity.computed),
                t.push(e.styles.transform.generated.final),
                (e.revealed = !0))
              : (t.push(e.styles.opacity.generated),
                t.push(e.styles.transform.generated.initial),
                (e.revealed = !1)),
              k(
                e.node,
                t
                  .filter(function (e) {
                    return '' !== e;
                  })
                  .join(' '),
              );
          }),
          b(this.store.containers, function (t) {
            var n = t.node === document.documentElement ? window : t.node;
            n.addEventListener('scroll', e.delegate), n.addEventListener('resize', e.delegate);
          }),
          this.delegate(),
          (this.initTimeout = null);
      }
      function N(e, t) {
        void 0 === t && (t = {});
        var n = t.pristine || this.pristine,
          r =
            'always' === e.config.useDelay ||
            ('onload' === e.config.useDelay && n) ||
            ('once' === e.config.useDelay && !e.seen),
          i = e.visible && !e.revealed,
          a = !e.visible && e.revealed && e.config.reset;
        return t.reveal || i ? z.call(this, e, r) : t.reset || a ? M.call(this, e) : void 0;
      }
      function z(e, t) {
        var n = [
          e.styles.inline.generated,
          e.styles.opacity.computed,
          e.styles.transform.generated.final,
        ];
        t
          ? n.push(e.styles.transition.generated.delayed)
          : n.push(e.styles.transition.generated.instant),
          (e.revealed = e.seen = !0),
          k(
            e.node,
            n
              .filter(function (e) {
                return '' !== e;
              })
              .join(' '),
          ),
          I.call(this, e, t);
      }
      function M(e) {
        var t = [
          e.styles.inline.generated,
          e.styles.opacity.generated,
          e.styles.transform.generated.initial,
          e.styles.transition.generated.instant,
        ];
        (e.revealed = !1),
          k(
            e.node,
            t
              .filter(function (e) {
                return '' !== e;
              })
              .join(' '),
          ),
          I.call(this, e);
      }
      function I(e, t) {
        var n = this,
          r = t ? e.config.duration + e.config.delay : e.config.duration,
          i = e.revealed ? e.config.beforeReveal : e.config.beforeReset,
          a = e.revealed ? e.config.afterReveal : e.config.afterReset,
          o = 0;
        e.callbackTimer &&
          ((o = Date.now() - e.callbackTimer.start), window.clearTimeout(e.callbackTimer.clock)),
          i(e.node),
          (e.callbackTimer = {
            start: Date.now(),
            clock: window.setTimeout(function () {
              a(e.node),
                (e.callbackTimer = null),
                e.revealed && !e.config.reset && e.config.cleanup && C.call(n, e.node);
            }, r - o),
          });
      }
      function P(e, t) {
        if ((void 0 === t && (t = this.pristine), !e.visible && e.revealed && e.config.reset))
          return N.call(this, e, { reset: !0 });
        var n = this.store.sequences[e.sequence.id],
          r = e.sequence.index;
        if (n) {
          var i = new _(n, 'visible', this.store),
            a = new _(n, 'revealed', this.store);
          if (((n.models = { visible: i, revealed: a }), !a.body.length)) {
            var o = n.members[i.body[0]],
              l = this.store.elements[o];
            if (l)
              return (
                F.call(this, n, i.body[0], -1, t),
                F.call(this, n, i.body[0], 1, t),
                N.call(this, l, { reveal: !0, pristine: t })
              );
          }
          if (!n.blocked.head && r === [].concat(a.head).pop() && r >= [].concat(i.body).shift())
            return F.call(this, n, r, -1, t), N.call(this, e, { reveal: !0, pristine: t });
          if (!n.blocked.foot && r === [].concat(a.foot).shift() && r <= [].concat(i.body).pop())
            return F.call(this, n, r, 1, t), N.call(this, e, { reveal: !0, pristine: t });
        }
      }
      function R(e) {
        var t = Math.abs(e);
        if (isNaN(t)) throw new RangeError('Invalid sequence interval.');
        (this.id = A()),
          (this.interval = Math.max(t, 16)),
          (this.members = []),
          (this.models = {}),
          (this.blocked = { head: !1, foot: !1 });
      }
      function _(e, t, n) {
        var r = this;
        (this.head = []),
          (this.body = []),
          (this.foot = []),
          b(e.members, function (e, i) {
            var a = n.elements[e];
            a && a[t] && r.body.push(i);
          }),
          this.body.length &&
            b(e.members, function (e, i) {
              var a = n.elements[e];
              a && !a[t] && (i < r.body[0] ? r.head.push(i) : r.foot.push(i));
            });
      }
      function F(e, t, n, r) {
        var i = this,
          a = ['head', null, 'foot'][1 + n],
          o = e.members[t + n],
          l = this.store.elements[o];
        (e.blocked[a] = !0),
          setTimeout(function () {
            (e.blocked[a] = !1), l && P.call(i, l, r);
          }, e.interval);
      }
      function D(e, t, n) {
        var r = this;
        void 0 === t && (t = {}), void 0 === n && (n = !1);
        var i,
          o = [],
          l = t.interval || h.interval;
        try {
          l && (i = new R(l));
          var s = a(e);
          if (!s.length) throw new Error('Invalid reveal target.');
          var c = s.reduce(function (e, n) {
            var l = {},
              s = n.getAttribute('data-sr-id');
            s
              ? (T(l, r.store.elements[s]), k(l.node, l.styles.inline.computed))
              : ((l.id = A()), (l.node = n), (l.seen = !1), (l.revealed = !1), (l.visible = !1));
            var c = T({}, l.config || r.defaults, t);
            if ((!c.mobile && O()) || (!c.desktop && !O())) return s && C.call(r, l), e;
            var u,
              d = a(c.container)[0];
            if (!d) throw new Error('Invalid container.');
            return d.contains(n)
              ? ((u = (function (e) {
                  var t = [],
                    n = arguments.length - 1;
                  for (; n-- > 0; ) t[n] = arguments[n + 1];
                  var r = null;
                  return (
                    b(t, function (t) {
                      b(t, function (t) {
                        null === r && t.node === e && (r = t.id);
                      });
                    }),
                    r
                  );
                })(d, o, r.store.containers)),
                null === u && ((u = A()), o.push({ id: u, node: d })),
                (l.config = c),
                (l.containerId = u),
                (l.styles = E(l)),
                i && ((l.sequence = { id: i.id, index: i.members.length }), i.members.push(l.id)),
                e.push(l),
                e)
              : e;
          }, []);
          b(c, function (e) {
            (r.store.elements[e.id] = e), e.node.setAttribute('data-sr-id', e.id);
          });
        } catch (u) {
          return x.call(this, 'Reveal failed.', u.message);
        }
        b(o, function (e) {
          r.store.containers[e.id] = { id: e.id, node: e.node };
        }),
          i && (this.store.sequences[i.id] = i),
          !0 !== n &&
            (this.store.history.push({ target: e, options: t }),
            this.initTimeout && window.clearTimeout(this.initTimeout),
            (this.initTimeout = window.setTimeout(j.bind(this), 0)));
      }
      function B() {
        var e = this;
        b(this.store.history, function (t) {
          D.call(e, t.target, t.options, !0);
        }),
          j.call(this);
      }
      var q =
        Math.sign ||
        function (e) {
          return (e > 0) - (e < 0) || +e;
        };
      function H(e, t) {
        var n = t ? e.node.clientHeight : e.node.offsetHeight,
          r = t ? e.node.clientWidth : e.node.offsetWidth,
          i = 0,
          a = 0,
          o = e.node;
        do {
          isNaN(o.offsetTop) || (i += o.offsetTop),
            isNaN(o.offsetLeft) || (a += o.offsetLeft),
            (o = o.offsetParent);
        } while (o);
        return { bounds: { top: i, right: a + r, bottom: i + n, left: a }, height: n, width: r };
      }
      function W(e) {
        var t, n;
        return (
          e.node === document.documentElement
            ? ((t = window.pageYOffset), (n = window.pageXOffset))
            : ((t = e.node.scrollTop), (n = e.node.scrollLeft)),
          { top: t, left: n }
        );
      }
      function Z(e) {
        void 0 === e && (e = {});
        var t = this.store.containers[e.containerId];
        if (t) {
          var n = Math.max(0, Math.min(1, e.config.viewFactor)),
            r = e.config.viewOffset,
            i = e.geometry.bounds.top + e.geometry.height * n,
            a = e.geometry.bounds.right - e.geometry.width * n,
            o = e.geometry.bounds.bottom - e.geometry.height * n,
            l = e.geometry.bounds.left + e.geometry.width * n,
            s = t.geometry.bounds.top + t.scroll.top + r.top,
            c = t.geometry.bounds.right + t.scroll.left - r.right,
            u = t.geometry.bounds.bottom + t.scroll.top - r.bottom,
            d = t.geometry.bounds.left + t.scroll.left + r.left;
          return (i < u && a > d && o > s && l < c) || 'fixed' === e.styles.position;
        }
      }
      function V(e, t) {
        var n = this;
        void 0 === e && (e = { type: 'init' }),
          void 0 === t && (t = this.store.elements),
          p(function () {
            var r = 'init' === e.type || 'resize' === e.type;
            b(n.store.containers, function (e) {
              r && (e.geometry = H.call(n, e, !0));
              var t = W.call(n, e);
              e.scroll &&
                (e.direction = { x: q(t.left - e.scroll.left), y: q(t.top - e.scroll.top) }),
                (e.scroll = t);
            }),
              b(t, function (e) {
                (r || void 0 === e.geometry) && (e.geometry = H.call(n, e)),
                  (e.visible = Z.call(n, e));
              }),
              b(t, function (e) {
                e.sequence ? P.call(n, e) : N.call(n, e);
              }),
              (n.pristine = !1);
          });
      }
      var Y, U, G, Q, $, J, K, X;
      function ee(e) {
        var t;
        if (
          (void 0 === e && (e = {}),
          void 0 === this || Object.getPrototypeOf(this) !== ee.prototype)
        )
          return new ee(e);
        if (!ee.isSupported())
          return (
            x.call(this, 'Instantiation failed.', 'This browser is not supported.'), g.failure()
          );
        try {
          t = T({}, J || h, e);
        } catch (n) {
          return x.call(this, 'Invalid configuration.', n.message), g.failure();
        }
        try {
          if (!a(t.container)[0]) throw new Error('Invalid container.');
        } catch (n) {
          return x.call(this, n.message), g.failure();
        }
        return (!(J = t).mobile && O()) || (!J.desktop && !O())
          ? (x.call(
              this,
              'This device is disabled.',
              'desktop: ' + J.desktop,
              'mobile: ' + J.mobile,
            ),
            g.failure())
          : (g.success(),
            (this.store = { containers: {}, elements: {}, history: [], sequences: {} }),
            (this.pristine = !0),
            (Y = Y || V.bind(this)),
            (U = U || S.bind(this)),
            (G = G || D.bind(this)),
            (Q = Q || C.bind(this)),
            ($ = $ || B.bind(this)),
            Object.defineProperty(this, 'delegate', {
              get: function () {
                return Y;
              },
            }),
            Object.defineProperty(this, 'destroy', {
              get: function () {
                return U;
              },
            }),
            Object.defineProperty(this, 'reveal', {
              get: function () {
                return G;
              },
            }),
            Object.defineProperty(this, 'clean', {
              get: function () {
                return Q;
              },
            }),
            Object.defineProperty(this, 'sync', {
              get: function () {
                return $;
              },
            }),
            Object.defineProperty(this, 'defaults', {
              get: function () {
                return J;
              },
            }),
            Object.defineProperty(this, 'version', {
              get: function () {
                return '4.0.9';
              },
            }),
            Object.defineProperty(this, 'noop', {
              get: function () {
                return !1;
              },
            }),
            X || (X = this));
      }
      (ee.isSupported = function () {
        return (
          (function () {
            var e = document.documentElement.style;
            return 'transform' in e || 'WebkitTransform' in e;
          })() &&
          (function () {
            var e = document.documentElement.style;
            return 'transition' in e || 'WebkitTransition' in e;
          })()
        );
      }),
        Object.defineProperty(ee, 'debug', {
          get: function () {
            return K || !1;
          },
          set: function (e) {
            return (K = 'boolean' == typeof e ? e : K);
          },
        }),
        ee();
      var te = 'undefined' == typeof window ? null : ee();
    },
    7462: function (e, t, n) {
      'use strict';
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          r.apply(this, arguments)
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    3366: function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    504: function (e) {
      'use strict';
      e.exports = JSON.parse(
        '{"layout":"constrained","backgroundColor":"#d8c8b8","images":{"fallback":{"src":"/static/15ed2eb38c3ee187fa980797438a63f2/83a1f/me3.jpg","srcSet":"/static/15ed2eb38c3ee187fa980797438a63f2/6fc5a/me3.jpg 125w,\\n/static/15ed2eb38c3ee187fa980797438a63f2/0895a/me3.jpg 250w,\\n/static/15ed2eb38c3ee187fa980797438a63f2/83a1f/me3.jpg 500w,\\n/static/15ed2eb38c3ee187fa980797438a63f2/bbffb/me3.jpg 1000w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/static/15ed2eb38c3ee187fa980797438a63f2/efba9/me3.avif 125w,\\n/static/15ed2eb38c3ee187fa980797438a63f2/7fbce/me3.avif 250w,\\n/static/15ed2eb38c3ee187fa980797438a63f2/da7ad/me3.avif 500w,\\n/static/15ed2eb38c3ee187fa980797438a63f2/853ad/me3.avif 1000w","type":"image/avif","sizes":"(min-width: 500px) 500px, 100vw"},{"srcSet":"/static/15ed2eb38c3ee187fa980797438a63f2/6b28b/me3.webp 125w,\\n/static/15ed2eb38c3ee187fa980797438a63f2/490b2/me3.webp 250w,\\n/static/15ed2eb38c3ee187fa980797438a63f2/d14d4/me3.webp 500w,\\n/static/15ed2eb38c3ee187fa980797438a63f2/cdc9a/me3.webp 1000w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":1025}',
      );
    },
  },
]);
//# sourceMappingURL=546641dfde76ed00139ea2c3eae09499c5f2164a-fb485b90eb503c3f2b88.js.map
