'use strict';
(self.webpackChunksoftware_development_portfolio =
  self.webpackChunksoftware_development_portfolio || []).push([
  [527],
  {
    226: function (e, t, a) {
      a.r(t);
      var r = a(7294),
        l = a(5414),
        n = a(3494),
        i = a(537),
        o = a(355),
        d = a(4741),
        c = a(7692),
        m = a(3082),
        s = n.default.div.withConfig({
          displayName: 'archive__StyledTableContainer',
          componentId: 'sc-764l98-0',
        })(
          [
            'margin:100px -20px;@media (max-width:768px){margin:50px -10px;}table{width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}td{&.year{padding-right:20px;@media (max-width:768px){padding-right:10px;font-size:var(--fz-sm);}}&.title{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;}&.company{font-size:var(--fz-lg);white-space:nowrap;}&.tech{font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;.separator{margin:0 5px;}span{display:inline-block;}}&.links{min-width:100px;div{display:flex;align-items:center;a{',
            ';flex-shrink:0;}a + a{margin-left:10px;}}}}}',
          ],
          function (e) {
            return e.theme.mixins.flexCenter;
          },
        );
      t.default = function (e) {
        var t = e.location,
          a = e.data.allMarkdownRemark.edges,
          n = (0, r.useRef)(null),
          p = (0, r.useRef)(null),
          h = (0, r.useRef)([]),
          f = (0, m.Tb)();
        return (
          (0, r.useEffect)(function () {
            f ||
              (o.Z.reveal(n.current, (0, i.srConfig)()),
              o.Z.reveal(p.current, (0, i.srConfig)(200, 0)),
              h.current.forEach(function (e, t) {
                return o.Z.reveal(e, (0, i.srConfig)(10 * t));
              }));
          }, []),
          r.createElement(
            d.Ar,
            { location: t },
            r.createElement(l.q, { title: 'Archive' }),
            r.createElement(
              'main',
              null,
              r.createElement(
                'header',
                { ref: n },
                r.createElement('h1', { className: 'big-heading' }, 'Archive'),
                r.createElement(
                  'p',
                  { className: 'subtitle' },
                  'A big list of things I’ve worked on',
                ),
              ),
              r.createElement(
                s,
                { ref: p },
                r.createElement(
                  'table',
                  null,
                  r.createElement(
                    'thead',
                    null,
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('th', null, 'Year'),
                      r.createElement('th', null, 'Title'),
                      r.createElement('th', { className: 'hide-on-mobile' }, 'Made at'),
                      r.createElement('th', { className: 'hide-on-mobile' }, 'Built with'),
                      r.createElement('th', null, 'Link'),
                    ),
                  ),
                  r.createElement(
                    'tbody',
                    null,
                    a.length > 0 &&
                      a.map(function (e, t) {
                        var a = e.node.frontmatter,
                          l = a.date,
                          n = a.github,
                          i = a.external,
                          o = a.ios,
                          d = a.android,
                          m = a.title,
                          s = a.tech,
                          p = a.company;
                        return r.createElement(
                          'tr',
                          {
                            key: t,
                            ref: function (e) {
                              return (h.current[t] = e);
                            },
                          },
                          r.createElement(
                            'td',
                            { className: 'overline year' },
                            '' + new Date(l).getFullYear(),
                          ),
                          r.createElement('td', { className: 'title' }, m),
                          r.createElement(
                            'td',
                            { className: 'company hide-on-mobile' },
                            p
                              ? r.createElement('span', null, p)
                              : r.createElement('span', null, '—'),
                          ),
                          r.createElement(
                            'td',
                            { className: 'tech hide-on-mobile' },
                            s.length > 0 &&
                              s.map(function (e, t) {
                                return r.createElement(
                                  'span',
                                  { key: t },
                                  e,
                                  '',
                                  t !== s.length - 1 &&
                                    r.createElement('span', { className: 'separator' }, '·'),
                                );
                              }),
                          ),
                          r.createElement(
                            'td',
                            { className: 'links' },
                            r.createElement(
                              'div',
                              null,
                              i &&
                                r.createElement(
                                  'a',
                                  { href: i, 'aria-label': 'External Link' },
                                  r.createElement(c.JO, { name: 'External' }),
                                ),
                              n &&
                                r.createElement(
                                  'a',
                                  { href: n, 'aria-label': 'GitHub Link' },
                                  r.createElement(c.JO, { name: 'GitHub' }),
                                ),
                              o &&
                                r.createElement(
                                  'a',
                                  { href: o, 'aria-label': 'Apple App Store Link' },
                                  r.createElement(c.JO, { name: 'AppStore' }),
                                ),
                              d &&
                                r.createElement(
                                  'a',
                                  { href: d, 'aria-label': 'Google Play Store Link' },
                                  r.createElement(c.JO, { name: 'PlayStore' }),
                                ),
                            ),
                          ),
                        );
                      }),
                  ),
                ),
              ),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-archive-js-95a596d08c159c2291a5.js.map
