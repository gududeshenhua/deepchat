import { q as I, _ as ue, h as pe, m as R, n as me } from './index-ae33a03d.js'
import { E as u, I as ge, G as N } from './element-74718691.js'
import { u as fe } from './usePagination-22ed0aad.js'
import {
  r as V,
  b as _e,
  Q as Ce,
  a8 as p,
  f as m,
  h as _,
  N as s,
  H as r,
  G as O,
  u as i,
  K as C,
  F,
  a0 as j,
  L as h,
  M as d,
  i as y,
  ay as ye,
  A as ve,
  B as Ve
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
function he(v) {
  return I({ url: '/aigen/', method: 'POST', data: v, baseURL: '/cpyservice' })
}
function we(v) {
  return I({ url: '/aigen/', method: 'GET', params: v, baseURL: '/cpyservice' })
}
function Te(v) {
  return I({ url: '/aigen/' + v.task_id, method: 'DELETE', baseURL: '/cpyservice' })
}
function ke(v) {
  return I({ url: '/aigen/retry/' + v, method: 'POST', baseURL: '/cpyservice' })
}
const Se = { class: 'video-container' },
  ze = { style: { 'font-size': '12px', 'font-weight': '400' } },
  be = { class: 'card-header' },
  Pe = { class: 'task-list' },
  xe = { class: 'task-info' },
  De = { class: 'task-id' },
  Le = { key: 0, class: 'task-created-at' },
  Ue = { class: 'task-status' },
  Ee = { key: 1 },
  Ie = { key: 0, class: 'task-theme' },
  $e = { key: 1, class: 'task-actions' },
  Me = { key: 2, class: 'task-actions' },
  Ae = { key: 0, class: 'no-tasks' },
  Oe = {
    class: 'pagination-container',
    style: { 'margin-top': '20px', display: 'flex', 'justify-content': 'center' }
  },
  Be = {
    __name: 'index',
    setup(v) {
      const q = ye(() =>
          me(
            () => import('./UploadOssDialog-0baad3d6.js'),
            [
              'static/UploadOssDialog-0baad3d6.js',
              'static/index-b201494c.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/UploadOssDialog-cac69bee.css'
            ]
          )
        ),
        { t: e } = pe(),
        b = V('')
      ;(V('1:1'), V('1024 x 1024'))
      const $ = V(!1),
        M = V([]),
        {
          paginationData: l,
          handleCurrentChange: Re,
          handleSizeChange: Ne
        } = fe({ currentPage: 1, pageSize: 10, layout: 'total, sizes, prev, pager, next, jumper' })
      let z = null
      const P = V(!1),
        w = V({ fileUrl: '', fileName: '', fileMd5: '' }),
        x = () => {
          ;(z && clearInterval(z),
            (z = setInterval(() => {
              T(l.currentPage, l.pageSize)
            }, 6e3)))
        },
        G = () => {
          z && (clearInterval(z), (z = null))
        }
      ;(_e(async () => {
        ;(await T(l.currentPage, l.pageSize), x())
      }),
        Ce(() => {
          G()
        }))
      const T = async (a = 1, n = 10) => {
          try {
            const c = await we({ page: a, page_size: n }),
              g = c.tasks || c.data || [],
              k = c.total_tasks || c.count || g.length
            l.total = k
            const D = g.map((o) => {
              if (
                (o.theme || (o.theme = o.prompt || e('aiVideoCreation.unknownTheme')),
                (o.status = o.status ? o.status.toLowerCase() : 'unknown'),
                o.status === 'completed'
                  ? (o.status = 'success')
                  : o.status === 'pending' && (o.status = 'pending'),
                o.status === 'running' && o.created_at)
              ) {
                const S = new Date(o.created_at),
                  L = (new Date().getTime() - S.getTime() - 36e5 * 8) / 1e3,
                  U = Math.min(99, Math.floor((L / 900) * 100))
                o.fakeProgress = U > 0 ? U : 0
              }
              if (o.status !== 'success')
                if (o.created_at) {
                  const S = new Date(o.created_at),
                    L = new Date().getTime() - S.getTime()
                  o.isCanDelete = L > 36e5 * 9
                } else o.isCanDelete = !1
              return o
            })
            M.value = D
          } catch (c) {
            console.error('获取任务列表失败', c)
          }
        },
        H = (a) => {
          ;(T(a, l.pageSize), x())
        },
        Y = (a) => {
          ;((l.currentPage = 1), T(1, a), x())
        },
        K = [
          { value: 'anime', label: e('aiVideoCreation.anime') },
          { value: 'liveaction', label: e('aiVideoCreation.liveaction') },
          { value: 'pets', label: e('aiVideoCreation.pets') },
          { value: 'scifi', label: e('aiVideoCreation.scifi') },
          { value: 'fantasy', label: e('aiVideoCreation.fantasy') },
          { value: 'nature', label: e('aiVideoCreation.nature') }
        ],
        A = V('anime'),
        Q = (a) => {
          switch (a) {
            case 'success':
              return 'success'
            case 'failed':
              return 'danger'
            case 'pending':
              return 'primary'
            case 'running':
              return 'warning'
            default:
              return 'info'
          }
        },
        J = (a) => {
          switch (a) {
            case 'success':
              return e('aiVideoCreation.success')
            case 'failed':
              return e('aiVideoCreation.failed')
            case 'pending':
              return e('aiVideoCreation.pending')
            case 'running':
              return e('aiVideoCreation.running')
            case 'revoked':
              return e('aiVideoCreation.revoked')
            default:
              return e('aiVideoCreation.unknown')
          }
        },
        W = (a) =>
          a.status === 'running' && a.fakeProgress !== void 0
            ? {
                background: 'linear-gradient(\n    90deg,\n    #f7e9d4 0%,\n    #f7e9d4 '
                  .concat(a.fakeProgress, '%,\n    #fdf6ec ')
                  .concat(a.fakeProgress, '%,\n    #fdf6ec 100%\n  )')
              }
            : {},
        X = (a) => {
          if (!a) return e('aiVideoCreation.unknownTime')
          const n = new Date(a),
            c = new Date(n.getTime() + 288e5),
            g = c.getFullYear(),
            k = String(c.getMonth() + 1).padStart(2, '0'),
            D = String(c.getDate()).padStart(2, '0'),
            o = String(c.getHours()).padStart(2, '0'),
            S = String(c.getMinutes()).padStart(2, '0'),
            f = String(c.getSeconds()).padStart(2, '0')
          return ''
            .concat(g, '-')
            .concat(k, '-')
            .concat(D, ' ')
            .concat(o, ':')
            .concat(S, ':')
            .concat(f)
        },
        Z = async () => {
          if (!b.value.trim()) {
            u({ message: e('aiVideoCreation.pleaseEnterCreativeContent'), type: 'warning' })
            return
          }
          try {
            $.value = !0
            const a = {
                theme: b.value,
                style: A.value,
                user: 'abc-123',
                prompt: 'string',
                storage_target: 'string'
              },
              n = await he(a)
            n.task_id || n.taskId || n.id
              ? ((l.currentPage = 1),
                await T(1, l.pageSize),
                u({ message: e('aiVideoCreation.createTaskSuccess'), type: 'success' }),
                (b.value = ''),
                x())
              : (console.error('未获取到任务ID', n),
                u({ message: e('aiVideoCreation.createTaskFailed'), type: 'error' }))
          } catch (a) {
            ;(console.error('创建AI视频失败', a),
              u({ message: e('aiVideoCreation.createTaskFailed'), type: 'error' }))
          } finally {
            $.value = !1
          }
        },
        ee = async (a) => {
          N.confirm(e('aiVideoCreation.confirmCancelTask'), e('aiVideoCreation.confirmOperation'), {
            confirmButtonText: e('aiVideoCreation.confirm'),
            cancelButtonText: e('aiVideoCreation.cancel'),
            type: 'warning'
          })
            .then(async () => {
              try {
                ;(await Te({ task_id: a }),
                  (l.currentPage = 1),
                  await T(1, l.pageSize),
                  u({ message: e('aiVideoCreation.taskCancelled'), type: 'success' }))
              } catch (n) {
                ;(console.error('取消任务失败', n),
                  u({ message: e('aiVideoCreation.cancelTaskFailed'), type: 'error' }))
              }
            })
            .catch(() => {
              u({ message: e('aiVideoCreation.operationCancelled'), type: 'info' })
            })
        },
        te = async (a) => {
          N.confirm(e('aiVideoCreation.confirmRetryTask'), e('aiVideoCreation.confirmOperation'), {
            confirmButtonText: e('aiVideoCreation.confirm'),
            cancelButtonText: e('aiVideoCreation.cancel'),
            type: 'warning'
          })
            .then(async () => {
              try {
                ;(await ke(a),
                  u({ message: e('aiVideoCreation.taskResubmitted'), type: 'success' }),
                  await T(l.currentPage, l.pageSize),
                  x())
              } catch (n) {
                ;(console.error('重试任务失败', n),
                  u({ message: e('aiVideoCreation.retryTaskFailed'), type: 'error' }))
              }
            })
            .catch(() => {
              u({ message: e('aiVideoCreation.operationCancelled'), type: 'info' })
            })
        },
        ae = (a) => {
          if (!a) {
            u({ message: e('aiVideoCreation.videoLinkEmpty'), type: 'warning' })
            return
          }
          window.open(a, '_blank')
        },
        ne = (a) => {
          if (!a) {
            u({ message: e('aiVideoCreation.videoLinkEmpty'), type: 'warning' })
            return
          }
          R(a, () => {
            u({ message: e('aiVideoCreation.linkCopied'), type: 'success' })
          })
        },
        ie = (a) => {
          if (!a) {
            u({ message: e('aiVideoCreation.md5Empty'), type: 'warning' })
            return
          }
          R(a, () => {
            u({ message: e('aiVideoCreation.md5Copied'), type: 'success' })
          })
        },
        oe = (a, n) => {
          if (!a) {
            u({ message: e('aiVideoCreation.videoLinkEmpty'), type: 'warning' })
            return
          }
          ;((w.value.fileUrl = a), (w.value.fileMd5 = n || ''))
          try {
            const g = new URL(a).pathname,
              k = g.substring(g.lastIndexOf('/') + 1)
            w.value.fileName = k || 'video.mp4'
          } catch (c) {
            w.value.fileName = 'video.mp4'
          }
          P.value = !0
        },
        se = () => {
          P.value = !1
        }
      return (a, n) => {
        const c = p('el-input'),
          g = p('el-form-item'),
          k = p('el-option'),
          D = p('el-select'),
          o = p('el-collapse-item'),
          S = p('el-collapse'),
          f = p('el-button'),
          L = p('el-form'),
          U = p('el-card'),
          B = p('el-col'),
          re = p('el-icon'),
          le = p('el-tag'),
          ce = p('el-pagination'),
          de = p('el-row')
        return (
          m(),
          _('div', Se, [
            s(
              de,
              { gutter: 20 },
              {
                default: r(() => [
                  s(
                    B,
                    { span: 12 },
                    {
                      default: r(() => [
                        s(U, null, {
                          default: r(() => [
                            s(L, null, {
                              default: r(() => [
                                s(g, null, {
                                  default: r(() => [
                                    s(
                                      c,
                                      {
                                        modelValue: b.value,
                                        'onUpdate:modelValue':
                                          n[0] || (n[0] = (t) => (b.value = t)),
                                        type: 'textarea',
                                        autosize: { minRows: 10, maxRows: 15 },
                                        maxlength: '128',
                                        'show-word-limit': '',
                                        placeholder: i(e)('aiVideoCreation.enterYourIdea')
                                      },
                                      null,
                                      8,
                                      ['modelValue', 'placeholder']
                                    )
                                  ]),
                                  _: 1
                                }),
                                s(g, null, {
                                  default: r(() => [
                                    s(
                                      S,
                                      { 'model-value': '1' },
                                      {
                                        default: r(() => [
                                          s(
                                            o,
                                            {
                                              title: i(e)('aiVideoCreation.advancedSettings'),
                                              name: '1'
                                            },
                                            {
                                              default: r(() => [
                                                s(
                                                  g,
                                                  { label: i(e)('aiVideoCreation.styleSelection') },
                                                  {
                                                    default: r(() => [
                                                      s(
                                                        D,
                                                        {
                                                          modelValue: A.value,
                                                          'onUpdate:modelValue':
                                                            n[1] || (n[1] = (t) => (A.value = t)),
                                                          placeholder: i(e)(
                                                            'aiVideoCreation.pleaseSelectStyle'
                                                          )
                                                        },
                                                        {
                                                          default: r(() => [
                                                            (m(),
                                                            _(
                                                              F,
                                                              null,
                                                              j(K, (t) =>
                                                                s(
                                                                  k,
                                                                  {
                                                                    key: t.value,
                                                                    label: t.label,
                                                                    value: t.value
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ['label', 'value']
                                                                )
                                                              ),
                                                              64
                                                            ))
                                                          ]),
                                                          _: 1
                                                        },
                                                        8,
                                                        ['modelValue', 'placeholder']
                                                      )
                                                    ]),
                                                    _: 1
                                                  },
                                                  8,
                                                  ['label']
                                                )
                                              ]),
                                              _: 1
                                            },
                                            8,
                                            ['title']
                                          )
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }),
                                s(g, null, {
                                  default: r(() => [
                                    s(
                                      f,
                                      {
                                        type: 'primary',
                                        class: 'w-full',
                                        loading: $.value,
                                        onClick: Z
                                      },
                                      {
                                        default: r(() => [
                                          h(d(i(e)('aiVideoCreation.aiCreation')) + ' ', 1),
                                          y('div', ze, d(i(e)('aiVideoCreation.estimatedTime')), 1)
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['loading']
                                    )
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }
                  ),
                  s(
                    B,
                    { span: 12 },
                    {
                      default: r(() => [
                        s(U, null, {
                          header: r(() => [
                            y('div', be, [y('span', null, d(i(e)('aiVideoCreation.taskList')), 1)])
                          ]),
                          default: r(() => [
                            y('div', Pe, [
                              (m(!0),
                              _(
                                F,
                                null,
                                j(
                                  M.value,
                                  (t) => (
                                    m(),
                                    _(
                                      'div',
                                      {
                                        key: t.id,
                                        class: ve([
                                          'task-item',
                                          {
                                            'task-success': t.status === 'success',
                                            'task-failed': t.status === 'failed'
                                          }
                                        ])
                                      },
                                      [
                                        y('div', xe, [
                                          y('div', De, [
                                            y('span', null, '任务ID: ' + d(t.id), 1),
                                            t.created_at
                                              ? (m(),
                                                _(
                                                  'span',
                                                  Le,
                                                  d(i(e)('aiVideoCreation.createTime')) +
                                                    ': ' +
                                                    d(X(t.created_at)),
                                                  1
                                                ))
                                              : C('', !0)
                                          ]),
                                          y('div', Ue, [
                                            s(
                                              le,
                                              {
                                                type: Q(t.status),
                                                class: 'status-tag',
                                                style: Ve(W(t))
                                              },
                                              {
                                                default: r(() => [
                                                  t.status === 'pending' || t.status === 'running'
                                                    ? (m(),
                                                      O(
                                                        re,
                                                        { key: 0, class: 'is-loading' },
                                                        { default: r(() => [s(i(ge))]), _: 1 }
                                                      ))
                                                    : C('', !0),
                                                  h(' ' + d(J(t.status)) + ' ', 1),
                                                  t.status === 'running' &&
                                                  t.fakeProgress !== void 0
                                                    ? (m(),
                                                      _(
                                                        'span',
                                                        Ee,
                                                        ' (' + d(t.fakeProgress) + '%) ',
                                                        1
                                                      ))
                                                    : C('', !0)
                                                ]),
                                                _: 2
                                              },
                                              1032,
                                              ['type', 'style']
                                            )
                                          ])
                                        ]),
                                        t.theme
                                          ? (m(),
                                            _(
                                              'div',
                                              Ie,
                                              d(i(e)('aiVideoCreation.theme')) + ': ' + d(t.theme),
                                              1
                                            ))
                                          : C('', !0),
                                        t.status === 'success' && t.result_url
                                          ? (m(),
                                            _('div', $e, [
                                              s(
                                                f,
                                                { size: 'small', onClick: (E) => ae(t.result_url) },
                                                {
                                                  default: r(() => [
                                                    h(d(i(e)('aiVideoCreation.preview')), 1)
                                                  ]),
                                                  _: 2
                                                },
                                                1032,
                                                ['onClick']
                                              ),
                                              s(
                                                f,
                                                { size: 'small', onClick: (E) => ne(t.result_url) },
                                                {
                                                  default: r(() => [
                                                    h(d(i(e)('aiVideoCreation.copyLink')), 1)
                                                  ]),
                                                  _: 2
                                                },
                                                1032,
                                                ['onClick']
                                              ),
                                              s(
                                                f,
                                                {
                                                  size: 'small',
                                                  onClick: (E) => ie(t.md5),
                                                  disabled: !t.md5
                                                },
                                                {
                                                  default: r(() => [
                                                    h(d(i(e)('aiVideoCreation.copyMD5')), 1)
                                                  ]),
                                                  _: 2
                                                },
                                                1032,
                                                ['onClick', 'disabled']
                                              ),
                                              s(
                                                f,
                                                {
                                                  size: 'small',
                                                  onClick: (E) => oe(t.result_url, t.md5)
                                                },
                                                {
                                                  default: r(() => [
                                                    h(d(i(e)('aiVideoCreation.uploadToCloud')), 1)
                                                  ]),
                                                  _: 2
                                                },
                                                1032,
                                                ['onClick']
                                              )
                                            ]))
                                          : C('', !0),
                                        (t.status !== 'running' && t.status !== 'success') ||
                                        t.isCanDelete
                                          ? (m(),
                                            _('div', Me, [
                                              s(
                                                f,
                                                { size: 'small', onClick: (E) => ee(t.task_id) },
                                                {
                                                  default: r(() => [
                                                    h(d(i(e)('aiVideoCreation.cancelTask')), 1)
                                                  ]),
                                                  _: 2
                                                },
                                                1032,
                                                ['onClick']
                                              ),
                                              t.status === 'failed' || t.status === 'revoked'
                                                ? (m(),
                                                  O(
                                                    f,
                                                    {
                                                      key: 0,
                                                      size: 'small',
                                                      onClick: (E) => te(t.task_id)
                                                    },
                                                    {
                                                      default: r(() => [
                                                        h(d(i(e)('aiVideoCreation.retryTask')), 1)
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    ['onClick']
                                                  ))
                                                : C('', !0)
                                            ]))
                                          : C('', !0)
                                      ],
                                      2
                                    )
                                  )
                                ),
                                128
                              )),
                              M.value.length === 0
                                ? (m(), _('div', Ae, d(i(e)('aiVideoCreation.noTasks')), 1))
                                : C('', !0)
                            ]),
                            y('div', Oe, [
                              s(
                                ce,
                                {
                                  'current-page': i(l).currentPage,
                                  'onUpdate:currentPage':
                                    n[2] || (n[2] = (t) => (i(l).currentPage = t)),
                                  'page-size': i(l).pageSize,
                                  'onUpdate:pageSize': n[3] || (n[3] = (t) => (i(l).pageSize = t)),
                                  'page-sizes': i(l).pageSizes,
                                  total: i(l).total,
                                  layout: i(l).layout,
                                  onCurrentChange: H,
                                  onSizeChange: Y
                                },
                                null,
                                8,
                                ['current-page', 'page-size', 'page-sizes', 'total', 'layout']
                              )
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }
            ),
            P.value
              ? (m(),
                O(
                  i(q),
                  {
                    key: 0,
                    visible: P.value,
                    'onUpdate:visible': n[4] || (n[4] = (t) => (P.value = t)),
                    'file-url': w.value.fileUrl,
                    'file-name': w.value.fileName,
                    'file-md5': w.value.fileMd5,
                    onSuccess: se
                  },
                  null,
                  8,
                  ['visible', 'file-url', 'file-name', 'file-md5']
                ))
              : C('', !0)
          ])
        )
      }
    }
  },
  Ye = ue(Be, [['__scopeId', 'data-v-223775dc']])
export { Ye as default }
