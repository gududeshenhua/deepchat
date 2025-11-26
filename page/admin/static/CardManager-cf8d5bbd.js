import { _ as j, h as X } from './index-ae33a03d.js'
import { a as Y, b as ee, q as ae, c as le, d as te, s as oe } from './index-8f030fd5.js'
import {
  y as Q,
  aq as ne,
  R as H,
  r as v,
  b as W,
  a8 as m,
  f as p,
  G as y,
  H as o,
  N as l,
  L as f,
  h as $,
  a0 as R,
  F as q,
  ar as re,
  as as se,
  i as S,
  Q as de,
  ag as ue,
  u as s,
  M as d,
  I as ie,
  K
} from './vue-66851fce.js'
import { E as z, G as ce } from './element-74718691.js'
import { u as pe } from './useTableHeightFit-d4c36563.js'
import './vxe-562f9a54.js'
const ge = (k) => (re('data-v-64151014'), (k = k()), se(), k),
  me = ge(() =>
    S(
      'div',
      { style: { 'font-size': '12px', color: '#999', 'margin-top': '5px' } },
      [
        f(' 国家编码(具体查看: '),
        S(
          'a',
          { href: 'https://chahuo.com/country-code-lookup.html', target: '_blank' },
          'https://chahuo.com/country-code-lookup.html'
        ),
        f(') ')
      ],
      -1
    )
  ),
  ve = Q({
    __name: 'CreateNetStorageInstance',
    props: { visible: { type: Boolean, default: !1 } },
    emits: ['update:visible', 'success'],
    setup(k, { emit: a }) {
      const B = k,
        G = a,
        U = ne(),
        r = H({
          clusterCode: 'ZEG4669661',
          specificationCode: 'R422-4',
          imageId: '',
          number: 1,
          storageSize: 32,
          screenLayoutCode: '',
          randomADITemplates: !1,
          realPhoneTemplateId: null,
          countryCode: 'SG',
          groupId: 0
        }),
        w = [
          { label: '4GB', value: 4 },
          { label: '16GB', value: 16 },
          { label: '32GB', value: 32 },
          { label: '64GB', value: 64 },
          { label: '128GB', value: 128 },
          { label: '256GB', value: 256 }
        ],
        V = v([]),
        g = v([]),
        L = v([]),
        M = async () => {
          try {
            const u = await Y({})
            u.code === 200 &&
              ((V.value = u.data.records.map((e) => ({
                label:
                  e.imageName +
                  ''
                    .concat(e.romVersion ? '('.concat(e.romVersion, ')') : '')
                    .concat(e.imageDesc ? '('.concat(e.imageDesc, ')') : ''),
                value: e.imageId
              }))),
              V.value.unshift({ label: 'img-25080826717(android13)', value: 'img-25080826717' }),
              V.value.unshift({ label: 'img-25080662530(android14)', value: 'img-25080662530' }))
          } catch (u) {
            console.error('获取镜像列表失败:', u)
          }
        },
        F = async () => {
          try {
            const u = await ee({})
            u.code === 200 &&
              (g.value = u.data.map((e) => ({
                label:
                  e.code +
                  '('
                    .concat(e.screenWidth, 'x')
                    .concat(e.screenHigh, ' | ')
                    .concat(e.pixelDensity, 'dpi | ')
                    .concat(e.screenRefreshRate, 'fps)'),
                value: e.code
              })))
          } catch (u) {
            console.error('获取屏幕布局列表失败:', u)
          }
        },
        T = async () => {
          try {
            const u = await ae({})
            u.code === 200 &&
              (L.value = u.data.map((e) => ({
                label: ''
                  .concat(e.brand, ' ')
                  .concat(e.model, ' (')
                  .concat(e.androidImageVersion, ')'),
                value: e.id
              })))
          } catch (u) {
            console.error('获取ADI模板列表失败:', u)
          }
        }
      W(() => {
        ;(M(), F(), T())
      })
      const x = v(),
        A = H({
          clusterCode: [{ required: !0, message: '请输入集群编码', trigger: 'blur' }],
          specificationCode: [{ required: !0, message: '请输入规格代码', trigger: 'blur' }],
          imageId: [{ required: !0, message: '请输入镜像ID', trigger: 'blur' }],
          number: [
            { required: !0, message: '请输入实例数量', trigger: 'blur' },
            {
              type: 'number',
              min: 1,
              max: 100,
              message: '实例数量必须在1-100之间',
              trigger: 'blur'
            }
          ],
          storageSize: [{ required: !0, message: '请选择存储大小', trigger: 'change' }],
          screenLayoutCode: [
            {
              validator: (u, e, C) => {
                r.randomADITemplates || r.realPhoneTemplateId || e
                  ? C()
                  : C(new Error('请选择屏幕布局编码'))
              },
              trigger: 'change'
            }
          ]
        }),
        _ = () => {
          G('update:visible', !1)
        },
        P = async () => {
          x.value &&
            (await x.value.validate(async (u) => {
              if (u)
                try {
                  ;(await le(r), z.success('实例创建成功'), G('success'), _(), U.push('/instance'))
                } catch (e) {
                  z.error(e.message || '创建失败')
                }
            }))
        },
        N = () => {
          var u
          ;(u = x.value) == null || u.resetFields()
        }
      return (u, e) => {
        const C = m('el-input'),
          b = m('el-form-item'),
          c = m('el-option'),
          i = m('el-select'),
          D = m('el-input-number'),
          E = m('el-switch'),
          O = m('el-form'),
          h = m('el-button'),
          I = m('el-drawer')
        return (
          p(),
          y(
            I,
            {
              'model-value': B.visible,
              'onUpdate:modelValue': _,
              title: '创建网存实例',
              size: '500px'
            },
            {
              footer: o(() => [
                l(h, { onClick: _ }, { default: o(() => [f('取消')]), _: 1 }),
                l(h, { onClick: N }, { default: o(() => [f('重置')]), _: 1 }),
                l(h, { type: 'primary', onClick: P }, { default: o(() => [f('确定')]), _: 1 })
              ]),
              default: o(() => [
                l(
                  O,
                  { ref_key: 'formRef', ref: x, model: r, 'label-width': '120px', rules: A },
                  {
                    default: o(() => [
                      l(
                        b,
                        { label: '集群编码', prop: 'clusterCode' },
                        {
                          default: o(() => [
                            l(
                              C,
                              {
                                disabled: '',
                                modelValue: r.clusterCode,
                                'onUpdate:modelValue': e[0] || (e[0] = (t) => (r.clusterCode = t)),
                                placeholder: '请输入集群编码'
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      l(
                        b,
                        { label: '规格代码', prop: 'specificationCode' },
                        {
                          default: o(() => [
                            l(
                              C,
                              {
                                disabled: '',
                                modelValue: r.specificationCode,
                                'onUpdate:modelValue':
                                  e[1] || (e[1] = (t) => (r.specificationCode = t)),
                                placeholder: '请输入规格代码'
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      l(
                        b,
                        { label: '镜像ID', prop: 'imageId' },
                        {
                          default: o(() => [
                            l(
                              i,
                              {
                                modelValue: r.imageId,
                                'onUpdate:modelValue': e[2] || (e[2] = (t) => (r.imageId = t)),
                                placeholder: '请选择镜像',
                                style: { width: '100%' },
                                'popper-class': 'image-select-popper'
                              },
                              {
                                default: o(() => [
                                  (p(!0),
                                  $(
                                    q,
                                    null,
                                    R(
                                      V.value,
                                      (t) => (
                                        p(),
                                        y(
                                          c,
                                          {
                                            key: t.value,
                                            label: t.label,
                                            value: t.value,
                                            title: t.label
                                          },
                                          null,
                                          8,
                                          ['label', 'value', 'title']
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      l(
                        b,
                        { label: '实例数量', prop: 'number' },
                        {
                          default: o(() => [
                            l(
                              D,
                              {
                                modelValue: r.number,
                                'onUpdate:modelValue': e[3] || (e[3] = (t) => (r.number = t)),
                                min: 1,
                                max: 100,
                                'controls-position': 'right',
                                style: { width: '100%' }
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      l(
                        b,
                        { label: '存储大小(GB)', prop: 'storageSize' },
                        {
                          default: o(() => [
                            l(
                              i,
                              {
                                modelValue: r.storageSize,
                                'onUpdate:modelValue': e[4] || (e[4] = (t) => (r.storageSize = t)),
                                placeholder: '请选择存储大小',
                                style: { width: '100%' }
                              },
                              {
                                default: o(() => [
                                  (p(),
                                  $(
                                    q,
                                    null,
                                    R(w, (t) =>
                                      l(
                                        c,
                                        { key: t.value, label: t.label, value: t.value },
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
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      l(
                        b,
                        { label: '屏幕布局编码', prop: 'screenLayoutCode' },
                        {
                          default: o(() => [
                            l(
                              i,
                              {
                                modelValue: r.screenLayoutCode,
                                'onUpdate:modelValue':
                                  e[5] || (e[5] = (t) => (r.screenLayoutCode = t)),
                                placeholder: '请选择屏幕布局',
                                style: { width: '100%' },
                                clearable: ''
                              },
                              {
                                default: o(() => [
                                  (p(!0),
                                  $(
                                    q,
                                    null,
                                    R(
                                      g.value,
                                      (t) => (
                                        p(),
                                        y(
                                          c,
                                          { key: t.value, label: t.label, value: t.value },
                                          null,
                                          8,
                                          ['label', 'value']
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      l(
                        b,
                        { label: '随机ADI模板' },
                        {
                          default: o(() => [
                            l(
                              E,
                              {
                                modelValue: r.randomADITemplates,
                                'onUpdate:modelValue':
                                  e[6] || (e[6] = (t) => (r.randomADITemplates = t))
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      l(
                        b,
                        { label: 'ADI模板ID', prop: 'realPhoneTemplateId' },
                        {
                          default: o(() => [
                            l(
                              i,
                              {
                                modelValue: r.realPhoneTemplateId,
                                'onUpdate:modelValue':
                                  e[7] || (e[7] = (t) => (r.realPhoneTemplateId = t)),
                                placeholder: '请选择ADI模板',
                                style: { width: '100%' },
                                clearable: ''
                              },
                              {
                                default: o(() => [
                                  (p(!0),
                                  $(
                                    q,
                                    null,
                                    R(
                                      L.value,
                                      (t) => (
                                        p(),
                                        y(
                                          c,
                                          { key: t.value, label: t.label, value: t.value },
                                          null,
                                          8,
                                          ['label', 'value']
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      l(
                        b,
                        { label: '国家编码', prop: 'countryCode' },
                        {
                          default: o(() => [
                            l(
                              C,
                              {
                                modelValue: r.countryCode,
                                'onUpdate:modelValue': e[8] || (e[8] = (t) => (r.countryCode = t)),
                                placeholder: '请输入国家编码'
                              },
                              null,
                              8,
                              ['modelValue']
                            ),
                            me
                          ]),
                          _: 1
                        }
                      ),
                      l(
                        b,
                        { label: '分组ID', prop: 'groupId' },
                        {
                          default: o(() => [
                            l(
                              D,
                              {
                                modelValue: r.groupId,
                                'onUpdate:modelValue': e[9] || (e[9] = (t) => (r.groupId = t)),
                                min: 0,
                                'controls-position': 'right',
                                style: { width: '100%' }
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ['model', 'rules']
                )
              ]),
              _: 1
            },
            8,
            ['model-value']
          )
        )
      }
    }
  })
const fe = j(ve, [['__scopeId', 'data-v-64151014']]),
  _e = { class: 'card-manager' },
  be = Q({
    __name: 'CardManager',
    setup(k) {
      const { t: a } = X(),
        { cTable: B, maxHeight: G, handleGetTableHeight: U } = pe(),
        r = v([]),
        w = v(!0),
        V = v(!1),
        g = v({ page: 1, pageSize: 10, total: 0 }),
        L = v(0),
        M = v('')
      let F = null
      v({})
      const T = v(''),
        x = v([]),
        A = v([])
      v(!1)
      const _ = async () => {
          w.value = !0
          try {
            const c = { page: g.value.page, rows: g.value.pageSize }
            ;(M.value && (c.deviceCode = M.value), T.value && (c.padAllocationStatus = T.value))
            const i = await te(c)
            ;((r.value = i.data.pageData), (g.value.total = i.data.total))
          } catch (c) {
            console.error(c)
          } finally {
            w.value = !1
          }
        },
        P = (c) => {
          ;(L.value++, (g.value.page = c), _())
        },
        N = () => {
          ;(F && clearTimeout(F),
            (F = setTimeout(() => {
              ;((g.value.page = 1), _())
            }, 1e3)))
        },
        u = () => {
          ;((M.value = ''),
            (T.value = ''),
            (g.value.page = 1),
            B.value && B.value.clearFilter(['padAllocationStatus']),
            _())
        },
        e = (c) => {
          ;((g.value.page = 1),
            (M.value = ''),
            'padAllocationStatus' in c &&
              (T.value = c.padAllocationStatus.length > 0 ? c.padAllocationStatus[0] : ''),
            _())
        },
        C = () => {
          x.value = [
            { text: a('cardManager.deleteFailed'), value: -2 },
            { text: a('cardManager.allocationFailed'), value: -1 },
            { text: a('cardManager.notAllocated'), value: 0 },
            { text: a('cardManager.allocating'), value: 1 },
            { text: a('cardManager.allocated'), value: 2 },
            { text: a('cardManager.deleting'), value: 3 }
          ]
        }
      ;(W(() => {
        ;(_(), C(), window.addEventListener('resize', U, !0), U())
      }),
        de(() => {
          window.removeEventListener('resize', U, !0)
        }))
      const b = () => {
        if (A.value.length === 0) {
          z.warning(a('cardManager.selectCardsFirst'))
          return
        }
        ce.confirm(
          a('cardManager.batchSetSpecConfirm', { count: A.value.length }),
          a('cardManager.confirmSetSpec'),
          {
            confirmButtonText: a('common.confirm'),
            cancelButtonText: a('common.cancel'),
            type: 'warning'
          }
        )
          .then(async () => {
            try {
              const c = A.value.map((i) => i.deviceCode)
              ;(await oe({ deviceCodes: c, deviceLevel: 'R422-4' }),
                z.success(a('cardManager.setSpecSuccess')),
                (A.value = []),
                _())
            } catch (c) {
              ;(console.error(c), z.error(a('cardManager.setSpecFailed')))
            }
          })
          .catch(() => {
            z.info(a('common.operationCancelled'))
          })
      }
      return (c, i) => {
        const D = m('el-button'),
          E = m('el-input'),
          O = m('PageBanner'),
          h = m('el-table-column'),
          I = m('el-tag'),
          t = m('el-table'),
          Z = m('el-pagination'),
          J = ue('loading')
        return (
          p(),
          $('div', _e, [
            l(
              O,
              { title: '' },
              {
                extra: o(() => [
                  l(
                    E,
                    {
                      modelValue: M.value,
                      'onUpdate:modelValue': i[0] || (i[0] = (n) => (M.value = n)),
                      placeholder: s(a)('cardManager.searchPlaceholder'),
                      style: { width: '300px', 'margin-right': '10px' },
                      onInput: N,
                      clearable: ''
                    },
                    {
                      append: o(() => [
                        l(
                          D,
                          { onClick: u },
                          { default: o(() => [f(d(s(a)('cardManager.clear')), 1)]), _: 1 }
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['modelValue', 'placeholder']
                  ),
                  l(
                    D,
                    { type: 'primary', onClick: b },
                    { default: o(() => [f(d(s(a)('cardManager.batchSetSpec')), 1)]), _: 1 }
                  ),
                  l(
                    D,
                    { icon: 'RefreshRight', onClick: _ },
                    { default: o(() => [f(d(s(a)('cardManager.refresh')), 1)]), _: 1 }
                  )
                ]),
                _: 1
              }
            ),
            ie(
              (p(),
              y(
                t,
                {
                  ref_key: 'cTable',
                  ref: B,
                  data: r.value,
                  key: L.value,
                  style: { width: '100%', 'margin-top': '20px' },
                  'max-height': s(G),
                  onFilterChange: e,
                  onSelectionChange: i[1] || (i[1] = (n) => (A.value = n))
                },
                {
                  default: o(() => [
                    l(h, { type: 'selection', width: '55' }),
                    l(
                      h,
                      { prop: 'id', label: s(a)('cardManager.cardInfo'), width: '300' },
                      {
                        default: o(({ row: n }) => [
                          S('div', null, d(s(a)('cardManager.cardId')) + '：' + d(n.id), 1),
                          S(
                            'div',
                            null,
                            d(s(a)('cardManager.cardCode')) + '：' + d(n.deviceCode),
                            1
                          ),
                          S(
                            'div',
                            null,
                            d(s(a)('cardManager.instanceSpec')) + '：' + d(n.deviceLevel),
                            1
                          ),
                          S('div', null, d(s(a)('cardManager.cardIp')) + '：' + d(n.deviceIp), 1),
                          S('div', null, d(s(a)('cardManager.cardCbs')) + '：' + d(n.cbsInfo), 1),
                          S(
                            'div',
                            null,
                            d(s(a)('cardManager.macAddress')) + '：' + d(n.macAddress),
                            1
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    l(
                      h,
                      { prop: 'idc', label: s(a)('cardManager.externalInfo'), width: '300' },
                      {
                        default: o(({ row: n }) => [
                          S(
                            'div',
                            null,
                            d(s(a)('cardManager.belongCluster')) + '：' + d(n.clusterCode),
                            1
                          ),
                          S(
                            'div',
                            null,
                            d(s(a)('cardManager.belongServer')) + '：' + d(n.armServerCode),
                            1
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    l(
                      h,
                      { prop: 'deviceStatus', label: s(a)('cardManager.cardStatus') },
                      {
                        default: o(({ row: n }) => [
                          l(
                            I,
                            { type: n.deviceStatus === 1 ? 'success' : 'info' },
                            {
                              default: o(() => [
                                f(
                                  d(
                                    n.deviceStatus === 1
                                      ? s(a)('cardManager.online')
                                      : s(a)('cardManager.offline')
                                  ),
                                  1
                                )
                              ]),
                              _: 2
                            },
                            1032,
                            ['type']
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    l(h, { prop: 'createBy', label: s(a)('cardManager.creator') }, null, 8, [
                      'label'
                    ]),
                    l(h, { prop: 'createTime', label: s(a)('cardManager.createTime') }, null, 8, [
                      'label'
                    ]),
                    l(
                      h,
                      {
                        prop: 'padAllocationStatus',
                        label: s(a)('cardManager.instanceAllocationStatus'),
                        width: '150',
                        filters: x.value,
                        'filter-multiple': !1,
                        'column-key': 'padAllocationStatus'
                      },
                      {
                        default: o(({ row: n }) => [
                          n.padAllocationStatus === -2
                            ? (p(),
                              y(
                                I,
                                { key: 0, type: 'danger' },
                                {
                                  default: o(() => [f(d(s(a)('cardManager.deleteFailed')), 1)]),
                                  _: 1
                                }
                              ))
                            : n.padAllocationStatus === -1
                              ? (p(),
                                y(
                                  I,
                                  { key: 1, type: 'danger' },
                                  {
                                    default: o(() => [
                                      f(d(s(a)('cardManager.allocationFailed')), 1)
                                    ]),
                                    _: 1
                                  }
                                ))
                              : n.padAllocationStatus === 0
                                ? (p(),
                                  y(
                                    I,
                                    { key: 2, type: 'info' },
                                    {
                                      default: o(() => [f(d(s(a)('cardManager.notAllocated')), 1)]),
                                      _: 1
                                    }
                                  ))
                                : n.padAllocationStatus === 1
                                  ? (p(),
                                    y(
                                      I,
                                      { key: 3, type: 'warning' },
                                      {
                                        default: o(() => [f(d(s(a)('cardManager.allocating')), 1)]),
                                        _: 1
                                      }
                                    ))
                                  : n.padAllocationStatus === 2
                                    ? (p(),
                                      y(
                                        I,
                                        { key: 4, type: 'success' },
                                        {
                                          default: o(() => [
                                            f(d(s(a)('cardManager.allocated')), 1)
                                          ]),
                                          _: 1
                                        }
                                      ))
                                    : n.padAllocationStatus === 3
                                      ? (p(),
                                        y(
                                          I,
                                          { key: 5, type: 'warning' },
                                          {
                                            default: o(() => [
                                              f(d(s(a)('cardManager.deleting')), 1)
                                            ]),
                                            _: 1
                                          }
                                        ))
                                      : K('', !0)
                        ]),
                        _: 1
                      },
                      8,
                      ['label', 'filters']
                    )
                  ]),
                  _: 1
                },
                8,
                ['data', 'max-height']
              )),
              [[J, w.value]]
            ),
            w.value
              ? K('', !0)
              : (p(),
                y(
                  Z,
                  {
                    key: 0,
                    'current-page': g.value.page,
                    'onUpdate:currentPage': i[2] || (i[2] = (n) => (g.value.page = n)),
                    'page-size': g.value.pageSize,
                    'onUpdate:pageSize': i[3] || (i[3] = (n) => (g.value.pageSize = n)),
                    'page-sizes': [10, 20, 50, 100],
                    total: g.value.total,
                    layout: 'total, sizes, prev, pager, next, jumper',
                    onSizeChange:
                      i[4] ||
                      (i[4] = () => {
                        ;(L.value++, (g.value.page = 1), _())
                      }),
                    onCurrentChange: P,
                    style: { 'margin-top': '20px', 'text-align': 'right' }
                  },
                  null,
                  8,
                  ['current-page', 'page-size', 'total']
                )),
            l(
              fe,
              {
                visible: V.value,
                'onUpdate:visible': i[5] || (i[5] = (n) => (V.value = n)),
                onSuccess: _
              },
              null,
              8,
              ['visible']
            )
          ])
        )
      }
    }
  })
const Ve = j(be, [['__scopeId', 'data-v-0ed587bf']])
export { Ve as default }
