'use strict';
(self.webpackChunksoftware_development_portfolio =
  self.webpackChunksoftware_development_portfolio || []).push([
  [503],
  {
    9503: function (e, r, t) {
      t.r(r),
        t.d(r, {
          lazyHydrate: function () {
            return c;
          },
        });
      var o = t(6125),
        n = t(7294),
        a = t(3935),
        i =
          (t(4041),
          t(72),
          [
            'image',
            'loading',
            'isLoading',
            'isLoaded',
            'toggleIsLoaded',
            'ref',
            'imgClassName',
            'imgStyle',
            'objectPosition',
            'backgroundColor',
            'objectFit',
          ]);
      function c(e, r, t, c) {
        var d = e.image,
          l = e.loading,
          u = e.isLoading,
          g = e.isLoaded,
          s = e.toggleIsLoaded,
          m = e.ref,
          h = e.imgClassName,
          b = e.imgStyle,
          f = void 0 === b ? {} : b,
          k = e.objectPosition,
          p = e.backgroundColor,
          v = e.objectFit,
          y = void 0 === v ? 'cover' : v,
          C = (0, o._)(e, i),
          w = d.width,
          L = d.height,
          j = d.layout,
          _ = d.images,
          N = d.placeholder,
          P = d.backgroundColor,
          E = JSON.stringify(_);
        f = (0, o.a)({ objectFit: y, objectPosition: k, backgroundColor: p }, f);
        var F = n.createElement(
          o.L,
          { layout: j, width: w, height: L },
          n.createElement(o.P, (0, o.a)({}, (0, o.g)(N, g, j, w, L, P, y, k))),
          n.createElement(
            o.M,
            (0, o.a)(
              {},
              C,
              { width: w, height: L, className: h },
              (0, o.b)(u, g, _, l, s, E, m, f),
            ),
          ),
        );
        return (
          r.current &&
            (a.createRoot
              ? (t.current || (t.current = a.createRoot(r.current)), t.current.render(F))
              : ((t.current || c.current ? a.render : a.hydrate)(F, r.current), (t.current = !0))),
          function () {
            r.current && (a.createRoot ? t.current.render(null) : a.render(null, r.current));
          }
        );
      }
    },
  },
]);
//# sourceMappingURL=503-eac60625805454798ba3.js.map
