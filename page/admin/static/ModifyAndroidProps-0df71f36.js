import { u as H } from './index-8f030fd5.js'
import { h as j, _ as q } from './index-ae33a03d.js'
import { E as k } from './element-74718691.js'
import {
  y as J,
  R as K,
  r as Q,
  d as W,
  b as X,
  a8 as f,
  f as m,
  G as Y,
  H as s,
  N as o,
  L as c,
  M as P,
  u as i,
  h as u,
  F as V,
  a0 as L
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const Z = J({
  __name: 'ModifyAndroidProps',
  props: { visible: { type: Boolean, default: !1 }, padCode: { type: String, default: '' } },
  emits: ['update:visible', 'success'],
  setup(v, { emit: N }) {
    const { t } = j(),
      _ = v,
      A = N,
      e = K({
        padCodes: [],
        modemPersistPropertiesList: [],
        modemPropertiesList: [],
        systemPersistPropertiesList: [],
        systemPropertiesList: [],
        settingPropertiesList: [],
        oaidPropertiesList: []
      }),
      C = Q()
    ;(W(
      () => _.visible,
      (p) => {
        p &&
          ((e.padCodes = [_.padCode]),
          (e.modemPersistPropertiesList = []),
          (e.modemPropertiesList = []),
          (e.systemPersistPropertiesList = []),
          (e.systemPropertiesList = []),
          (e.settingPropertiesList = []),
          (e.oaidPropertiesList = []))
      }
    ),
      X(() => {
        ;((e.padCodes = [_.padCode]),
          (e.modemPersistPropertiesList = []),
          (e.modemPropertiesList = []),
          (e.systemPersistPropertiesList = []),
          (e.systemPropertiesList = []),
          (e.settingPropertiesList = []),
          (e.oaidPropertiesList = []))
      }))
    const h = () => {
        A('update:visible', !1)
      },
      U = () => {
        e.modemPersistPropertiesList.push({ propertiesName: '', propertiesValue: '' })
      },
      M = () => {
        e.modemPropertiesList.push({ propertiesName: '', propertiesValue: '' })
      },
      g = () => {
        e.systemPersistPropertiesList.push({ propertiesName: '', propertiesValue: '' })
      },
      x = () => {
        e.systemPropertiesList.push({ propertiesName: '', propertiesValue: '' })
      },
      S = () => {
        e.settingPropertiesList.push({ propertiesName: '', propertiesValue: '' })
      },
      w = () => {
        e.oaidPropertiesList.push({ propertiesName: '', propertiesValue: '' })
      },
      D = (p) => {
        e.modemPersistPropertiesList.splice(p, 1)
      },
      $ = (p) => {
        e.modemPropertiesList.splice(p, 1)
      },
      B = (p) => {
        e.systemPersistPropertiesList.splice(p, 1)
      },
      I = (p) => {
        e.systemPropertiesList.splice(p, 1)
      },
      R = (p) => {
        e.settingPropertiesList.splice(p, 1)
      },
      E = (p) => {
        e.oaidPropertiesList.splice(p, 1)
      },
      F = async () => {
        if (C.value)
          try {
            ;(await H(e), k.success(t('instanceList.modifyAndroidPropsSuccess')), A('success'), h())
          } catch (p) {
            k.error(p.message || t('instanceList.modifyAndroidPropsFailed'))
          }
      },
      O = () => {
        ;((e.padCodes = [_.padCode]),
          (e.modemPersistPropertiesList = []),
          (e.modemPropertiesList = []),
          (e.systemPersistPropertiesList = []),
          (e.systemPropertiesList = []),
          (e.settingPropertiesList = []),
          (e.oaidPropertiesList = []))
      }
    return (p, b) => {
      const T = f('el-alert'),
        n = f('el-input'),
        y = f('el-form-item'),
        a = f('el-button'),
        z = f('el-form'),
        G = f('el-drawer')
      return (
        m(),
        Y(
          G,
          {
            'model-value': _.visible,
            'onUpdate:modelValue': h,
            title: i(t)('instanceList.modifyAndroidPropsTitle'),
            size: '600px'
          },
          {
            footer: s(() => [
              o(a, { onClick: h }, { default: s(() => [c(P(i(t)('common.cancel')), 1)]), _: 1 }),
              o(a, { onClick: O }, { default: s(() => [c(P(i(t)('common.reset')), 1)]), _: 1 }),
              o(
                a,
                { type: 'primary', onClick: F },
                { default: s(() => [c(P(i(t)('common.confirm')), 1)]), _: 1 }
              )
            ]),
            default: s(() => [
              o(
                T,
                {
                  title: i(t)('instanceList.modifyAndroidPropsAlert'),
                  type: 'info',
                  closable: !1,
                  style: { 'margin-bottom': '20px' }
                },
                null,
                8,
                ['title']
              ),
              o(
                z,
                { ref_key: 'formRef', ref: C, model: e, 'label-width': '150px' },
                {
                  default: s(() => [
                    o(
                      y,
                      {
                        label: i(t)('instanceList.modifyAndroidPropsInstanceId'),
                        prop: 'padCodes'
                      },
                      {
                        default: s(() => [
                          o(
                            n,
                            {
                              modelValue: e.padCodes[0],
                              'onUpdate:modelValue': b[0] || (b[0] = (r) => (e.padCodes[0] = r)),
                              disabled: ''
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    o(
                      y,
                      { label: i(t)('instanceList.modifyAndroidPropsModemPersist') },
                      {
                        default: s(() => [
                          (m(!0),
                          u(
                            V,
                            null,
                            L(
                              e.modemPersistPropertiesList,
                              (r, d) => (
                                m(),
                                u('div', { key: d, class: 'prop-item' }, [
                                  o(
                                    n,
                                    {
                                      modelValue: r.propertiesValue,
                                      'onUpdate:modelValue': (l) => (r.propertiesValue = l),
                                      modelModifiers: { trim: !0 },
                                      placeholder: i(t)(
                                        'instanceList.modifyAndroidPropsPropertyValue'
                                      ),
                                      style: { 'margin-bottom': '10px' }
                                    },
                                    {
                                      prepend: s(() => [
                                        o(
                                          n,
                                          {
                                            modelValue: r.propertiesName,
                                            'onUpdate:modelValue': (l) => (r.propertiesName = l),
                                            modelModifiers: { trim: !0 },
                                            placeholder: i(t)(
                                              'instanceList.modifyAndroidPropsPropertyName'
                                            ),
                                            style: { width: '200px' }
                                          },
                                          null,
                                          8,
                                          ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                        )
                                      ]),
                                      append: s(() => [
                                        o(a, { onClick: (l) => D(d), icon: 'Delete' }, null, 8, [
                                          'onClick'
                                        ])
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                  )
                                ])
                              )
                            ),
                            128
                          )),
                          o(
                            a,
                            { onClick: U, type: 'primary', icon: 'Plus' },
                            {
                              default: s(() => [
                                c(P(i(t)('instanceList.modifyAndroidPropsAddProperty')), 1)
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    o(
                      y,
                      { label: i(t)('instanceList.modifyAndroidPropsModemNonPersist') },
                      {
                        default: s(() => [
                          (m(!0),
                          u(
                            V,
                            null,
                            L(
                              e.modemPropertiesList,
                              (r, d) => (
                                m(),
                                u('div', { key: d, class: 'prop-item' }, [
                                  o(
                                    n,
                                    {
                                      modelValue: r.propertiesValue,
                                      'onUpdate:modelValue': (l) => (r.propertiesValue = l),
                                      modelModifiers: { trim: !0 },
                                      placeholder: i(t)(
                                        'instanceList.modifyAndroidPropsPropertyValue'
                                      ),
                                      style: { 'margin-bottom': '10px' }
                                    },
                                    {
                                      prepend: s(() => [
                                        o(
                                          n,
                                          {
                                            modelValue: r.propertiesName,
                                            'onUpdate:modelValue': (l) => (r.propertiesName = l),
                                            modelModifiers: { trim: !0 },
                                            placeholder: i(t)(
                                              'instanceList.modifyAndroidPropsPropertyName'
                                            ),
                                            style: { width: '200px' }
                                          },
                                          null,
                                          8,
                                          ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                        )
                                      ]),
                                      append: s(() => [
                                        o(a, { onClick: (l) => $(d), icon: 'Delete' }, null, 8, [
                                          'onClick'
                                        ])
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                  )
                                ])
                              )
                            ),
                            128
                          )),
                          o(
                            a,
                            { onClick: M, type: 'primary', icon: 'Plus' },
                            {
                              default: s(() => [
                                c(P(i(t)('instanceList.modifyAndroidPropsAddProperty')), 1)
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    o(
                      y,
                      { label: i(t)('instanceList.modifyAndroidPropsSystemPersist') },
                      {
                        default: s(() => [
                          (m(!0),
                          u(
                            V,
                            null,
                            L(
                              e.systemPersistPropertiesList,
                              (r, d) => (
                                m(),
                                u('div', { key: d, class: 'prop-item' }, [
                                  o(
                                    n,
                                    {
                                      modelValue: r.propertiesValue,
                                      'onUpdate:modelValue': (l) => (r.propertiesValue = l),
                                      modelModifiers: { trim: !0 },
                                      placeholder: i(t)(
                                        'instanceList.modifyAndroidPropsPropertyValue'
                                      ),
                                      style: { 'margin-bottom': '10px' }
                                    },
                                    {
                                      prepend: s(() => [
                                        o(
                                          n,
                                          {
                                            modelValue: r.propertiesName,
                                            'onUpdate:modelValue': (l) => (r.propertiesName = l),
                                            modelModifiers: { trim: !0 },
                                            placeholder: i(t)(
                                              'instanceList.modifyAndroidPropsPropertyName'
                                            ),
                                            style: { width: '200px' }
                                          },
                                          null,
                                          8,
                                          ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                        )
                                      ]),
                                      append: s(() => [
                                        o(a, { onClick: (l) => B(d), icon: 'Delete' }, null, 8, [
                                          'onClick'
                                        ])
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                  )
                                ])
                              )
                            ),
                            128
                          )),
                          o(
                            a,
                            { onClick: g, type: 'primary', icon: 'Plus' },
                            {
                              default: s(() => [
                                c(P(i(t)('instanceList.modifyAndroidPropsAddProperty')), 1)
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    o(
                      y,
                      { label: i(t)('instanceList.modifyAndroidPropsSystemNonPersist') },
                      {
                        default: s(() => [
                          (m(!0),
                          u(
                            V,
                            null,
                            L(
                              e.systemPropertiesList,
                              (r, d) => (
                                m(),
                                u('div', { key: d, class: 'prop-item' }, [
                                  o(
                                    n,
                                    {
                                      modelValue: r.propertiesValue,
                                      'onUpdate:modelValue': (l) => (r.propertiesValue = l),
                                      modelModifiers: { trim: !0 },
                                      placeholder: i(t)(
                                        'instanceList.modifyAndroidPropsPropertyValue'
                                      ),
                                      style: { 'margin-bottom': '10px' }
                                    },
                                    {
                                      prepend: s(() => [
                                        o(
                                          n,
                                          {
                                            modelValue: r.propertiesName,
                                            'onUpdate:modelValue': (l) => (r.propertiesName = l),
                                            modelModifiers: { trim: !0 },
                                            placeholder: i(t)(
                                              'instanceList.modifyAndroidPropsPropertyName'
                                            ),
                                            style: { width: '200px' }
                                          },
                                          null,
                                          8,
                                          ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                        )
                                      ]),
                                      append: s(() => [
                                        o(a, { onClick: (l) => I(d), icon: 'Delete' }, null, 8, [
                                          'onClick'
                                        ])
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                  )
                                ])
                              )
                            ),
                            128
                          )),
                          o(
                            a,
                            { onClick: x, type: 'primary', icon: 'Plus' },
                            {
                              default: s(() => [
                                c(P(i(t)('instanceList.modifyAndroidPropsAddProperty')), 1)
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    o(
                      y,
                      { label: i(t)('instanceList.modifyAndroidPropsSetting') },
                      {
                        default: s(() => [
                          (m(!0),
                          u(
                            V,
                            null,
                            L(
                              e.settingPropertiesList,
                              (r, d) => (
                                m(),
                                u('div', { key: d, class: 'prop-item' }, [
                                  o(
                                    n,
                                    {
                                      modelValue: r.propertiesValue,
                                      'onUpdate:modelValue': (l) => (r.propertiesValue = l),
                                      modelModifiers: { trim: !0 },
                                      placeholder: i(t)(
                                        'instanceList.modifyAndroidPropsPropertyValue'
                                      ),
                                      style: { 'margin-bottom': '10px' }
                                    },
                                    {
                                      prepend: s(() => [
                                        o(
                                          n,
                                          {
                                            modelValue: r.propertiesName,
                                            'onUpdate:modelValue': (l) => (r.propertiesName = l),
                                            modelModifiers: { trim: !0 },
                                            placeholder: i(t)(
                                              'instanceList.modifyAndroidPropsPropertyName'
                                            ),
                                            style: { width: '200px' }
                                          },
                                          null,
                                          8,
                                          ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                        )
                                      ]),
                                      append: s(() => [
                                        o(a, { onClick: (l) => R(d), icon: 'Delete' }, null, 8, [
                                          'onClick'
                                        ])
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                  )
                                ])
                              )
                            ),
                            128
                          )),
                          o(
                            a,
                            { onClick: S, type: 'primary', icon: 'Plus' },
                            {
                              default: s(() => [
                                c(P(i(t)('instanceList.modifyAndroidPropsAddProperty')), 1)
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    o(
                      y,
                      { label: i(t)('instanceList.modifyAndroidPropsOaid') },
                      {
                        default: s(() => [
                          (m(!0),
                          u(
                            V,
                            null,
                            L(
                              e.oaidPropertiesList,
                              (r, d) => (
                                m(),
                                u('div', { key: d, class: 'prop-item' }, [
                                  o(
                                    n,
                                    {
                                      modelValue: r.propertiesValue,
                                      'onUpdate:modelValue': (l) => (r.propertiesValue = l),
                                      modelModifiers: { trim: !0 },
                                      placeholder: i(t)(
                                        'instanceList.modifyAndroidPropsPropertyValue'
                                      ),
                                      style: { 'margin-bottom': '10px' }
                                    },
                                    {
                                      prepend: s(() => [
                                        o(
                                          n,
                                          {
                                            modelValue: r.propertiesName,
                                            'onUpdate:modelValue': (l) => (r.propertiesName = l),
                                            modelModifiers: { trim: !0 },
                                            placeholder: i(t)(
                                              'instanceList.modifyAndroidPropsPropertyName'
                                            ),
                                            style: { width: '200px' }
                                          },
                                          null,
                                          8,
                                          ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                        )
                                      ]),
                                      append: s(() => [
                                        o(a, { onClick: (l) => E(d), icon: 'Delete' }, null, 8, [
                                          'onClick'
                                        ])
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                  )
                                ])
                              )
                            ),
                            128
                          )),
                          o(
                            a,
                            { onClick: w, type: 'primary', icon: 'Plus' },
                            {
                              default: s(() => [
                                c(P(i(t)('instanceList.modifyAndroidPropsAddProperty')), 1)
                              ]),
                              _: 1
                            }
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
                ['model']
              )
            ]),
            _: 1
          },
          8,
          ['model-value', 'title']
        )
      )
    }
  }
})
const ie = q(Z, [['__scopeId', 'data-v-4ca93158']])
export { ie as default }
